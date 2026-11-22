// Capa de red con dos adaptadores intercambiables:
//  - 'firebase': Realtime Database (para jugar con celulares reales).
//  - 'local'   : BroadcastChannel (pestañas del mismo navegador; ensayo y plan B sin internet).
//
// Estructura en Firebase (ver database.rules.json):
//   salas/{codigo}/estado              ← vista pública que escribe la pantalla
//   salas/{codigo}/equipos/{id}        ← vista privada de cada equipo (la escribe la pantalla)
//   salas/{codigo}/acciones/{id}/{k}   ← acciones que envía cada celular
//   salas/{codigo}/unirse/{k}          ← solicitudes para unirse (+ respuesta de la pantalla)

const FB_VERSION = '10.12.2';
let fbCache = null;
async function cargarFirebase() {
  if (fbCache) return fbCache;
  const [{ initializeApp }, db, auth, { firebaseConfig }] = await Promise.all([
    import(`https://www.gstatic.com/firebasejs/${FB_VERSION}/firebase-app.js`),
    import(`https://www.gstatic.com/firebasejs/${FB_VERSION}/firebase-database.js`),
    import(`https://www.gstatic.com/firebasejs/${FB_VERSION}/firebase-auth.js`),
    import('./firebase-config.js'),
  ]);
  const app = initializeApp(firebaseConfig);
  // Identidad anónima: no pide datos y se conserva al recargar (las reglas la usan para
  // que solo la pantalla escriba el estado y solo cada celular envíe las acciones de su equipo).
  const cred = await auth.signInAnonymously(auth.getAuth(app));
  fbCache = { db, base: db.getDatabase(app), uid: cred.user.uid };
  return fbCache;
}

const limpio = v => JSON.parse(JSON.stringify(v ?? null, (k, x) => (x === Infinity ? null : x))); // Firebase no acepta undefined/Infinity

// ───────────────────────── ANFITRIÓN (pantalla) ─────────────────────────
export async function abrirSalaAnfitrion(modo, codigo, { onUnirse, onAccion, onConexion }) {
  if (modo === 'local') {
    const canal = new BroadcastChannel('expedicion-vpn-' + codigo);
    canal.onmessage = async ({ data }) => {
      if (data.tipo === 'unirse') { const r = await onUnirse(data.datos); canal.postMessage({ tipo: 'unirse-resp', req: data.req, r }); }
      else if (data.tipo === 'accion') onAccion(data.equipo, data.accion);
      else if (data.tipo === 'hola') {
        canal.postMessage({ tipo: 'estado', v: ultimo.estado });
        if (ultimo.equipos[data.equipo]) canal.postMessage({ tipo: 'equipo', id: data.equipo, v: ultimo.equipos[data.equipo] });
      }
    };
    const ultimo = { estado: null, equipos: {} };
    onConexion?.(true);
    return {
      escucharEquipo() {},
      publicarEstado(v) { ultimo.estado = v; canal.postMessage({ tipo: 'estado', v }); },
      publicarEquipo(id, v) { ultimo.equipos[id] = v; canal.postMessage({ tipo: 'equipo', id, v }); },
      cerrar() { canal.close(); },
    };
  }

  const { db, base, uid } = await cargarFirebase();
  const { ref, set, update, remove, onChildAdded, onValue } = db;
  const raiz = `salas/${codigo}`;
  const escuchados = new Set();
  const desuscribir = [];

  // Reclamar la sala: las reglas solo dejan escribir el estado a este uid.
  await set(ref(base, `${raiz}/host`), uid);
  desuscribir.push(onValue(ref(base, '.info/connected'), s => onConexion?.(!!s.val())));
  desuscribir.push(onChildAdded(ref(base, `${raiz}/unirse`), async snap => {
    const sol = snap.val();
    if (!sol || sol.respuesta) return;
    const r = await onUnirse(sol);
    // El equipo queda atado al celular que lo creó: solo ese uid podrá enviar sus acciones.
    if (r?.id && sol.uid) await set(ref(base, `${raiz}/miembros/${r.id}`), sol.uid);
    await set(ref(base, `${raiz}/unirse/${snap.key}/respuesta`), limpio(r));
  }));

  const api = {
    escucharEquipo(id) {
      if (escuchados.has(id)) return;
      escuchados.add(id);
      desuscribir.push(onChildAdded(ref(base, `${raiz}/acciones/${id}`), snap => {
        const a = snap.val();
        remove(snap.ref);
        if (a) onAccion(id, a);
      }));
    },
    publicarEstado(v) { return set(ref(base, `${raiz}/estado`), limpio(v)); },
    publicarEquipo(id, v) { return set(ref(base, `${raiz}/equipos/${id}`), limpio(v)); },
    publicarEquipos(mapa) { return update(ref(base, `${raiz}/equipos`), limpio(mapa)); },
    cerrar() { desuscribir.forEach(f => f()); },
  };
  return api;
}

// ───────────────────────── CLIENTE (celular) ─────────────────────────
export async function conectarCliente(modo, codigo, { onEstado, onEquipo, onConexion }) {
  if (modo === 'local') {
    const canal = new BroadcastChannel('expedicion-vpn-' + codigo);
    let miId = null;
    const pendientes = {};
    canal.onmessage = ({ data }) => {
      if (data.tipo === 'estado') onEstado(data.v);
      else if (data.tipo === 'equipo' && data.id === miId) onEquipo(data.v);
      else if (data.tipo === 'unirse-resp' && pendientes[data.req]) { pendientes[data.req](data.r); delete pendientes[data.req]; }
    };
    onConexion?.(true);
    canal.postMessage({ tipo: 'hola' });
    return {
      unirse(datos) {
        const req = Math.random().toString(36).slice(2);
        return new Promise(res => { pendientes[req] = res; canal.postMessage({ tipo: 'unirse', req, datos }); setTimeout(() => { if (pendientes[req]) { delete pendientes[req]; res({ error: 'La pantalla no responde. Revisa que la partida esté abierta y que el código sea correcto.' }); } }, 6000); });
      },
      seguir(id) { miId = id; canal.postMessage({ tipo: 'hola', equipo: id }); },
      enviar(id, accion) { canal.postMessage({ tipo: 'accion', equipo: id, accion }); },
      cerrar() { canal.close(); },
    };
  }

  const { db, base, uid } = await cargarFirebase();
  const { ref, set, push, onValue, off } = db;
  const raiz = `salas/${codigo}`;
  const subs = [];
  subs.push(onValue(ref(base, '.info/connected'), s => onConexion?.(!!s.val())));
  subs.push(onValue(ref(base, `${raiz}/estado`), s => onEstado(s.val())));
  let subEquipo = null;
  return {
    async unirse(datos) {
      const nodo = push(ref(base, `${raiz}/unirse`));
      await set(nodo, limpio({ ...datos, uid, t: Date.now() }));
      return new Promise(res => {
        const r = ref(base, `${raiz}/unirse/${nodo.key}/respuesta`);
        const timer = setTimeout(() => { off(r); res({ error: 'La pantalla no responde. Revisa el código de la sala y que la partida esté abierta.' }); }, 10000);
        onValue(r, s => { const v = s.val(); if (v) { clearTimeout(timer); off(r); res(v); } });
      });
    },
    seguir(id) {
      if (subEquipo) subEquipo();
      subEquipo = onValue(ref(base, `${raiz}/equipos/${id}`), s => { const v = s.val(); if (v) onEquipo(v); });
    },
    enviar(id, accion) { return push(ref(base, `${raiz}/acciones/${id}`), limpio({ ...accion, t: Date.now() })); },
    cerrar() { subs.forEach(f => f()); if (subEquipo) subEquipo(); },
  };
}
