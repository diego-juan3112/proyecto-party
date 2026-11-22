// Control del equipo (celular). Muestra la tarea pendiente y envía acciones a la pantalla.
// `renderTarea` también lo usa la pantalla en "modo presentador" para responder por un equipo.
import { h, limpiar, Reloj, mmss, signo, dadoSVG, ICONOS_ITEM, guardar, leer, borrar, num } from './ui.js';
import { mascotaSVG, mascota } from './mascotas.js';
import { CONFIG } from './config.js';
import { conectarCliente } from './red.js';

const LETRAS = 'ABCD';
const NOMBRE_ITEM = Object.fromEntries(CONFIG.tienda.map(t => [t.id, t.nombre]));

// Firebase puede devolver arreglos como objetos {0:…,1:…} o quitar los vacíos.
export function norm(v) {
  if (Array.isArray(v)) return v.map(norm);
  if (v && typeof v === 'object') {
    const ks = Object.keys(v);
    if (ks.length && ks.every(k => /^\d+$/.test(k))) { const a = []; ks.forEach(k => { a[Number(k)] = norm(v[k]); }); return a; }
    return Object.fromEntries(ks.map(k => [k, norm(v[k])]));
  }
  return v;
}
const arr = x => (Array.isArray(x) ? x : x ? Object.values(x) : []);

// Quién cumple cada rol esta zona (rotan en cada zona).
export function asignarRoles(integrantes, rol) {
  const k = integrantes.length;
  return CONFIG.roles.map((nombre, r) => ({ rol: nombre, quien: k ? integrantes[(r - rol + 4 * k) % k] : null }));
}

// ═════════════════════ Renderizado de tareas (reutilizable) ═════════════════════
// local: estado de interfaz que sobrevive a re-pintados de la misma tarea.
export function renderTarea(t, enviar, local, ctx = {}) {
  const reloj = local.reloj || (local.reloj = new Reloj());
  if (local.relojDe !== t.id + (t.etapa || '')) { reloj.fijar(t.restante, t.restante); local.relojDe = t.id + (t.etapa || ''); }
  const mandar = (a, ...hijosEspera) => { if (local.enviado) return; local.enviado = true; enviar({ ...a, tareaId: t.id }); if (local.repintar) local.repintar(); };
  const barra = (total) => {
    const i = h('i'); const txt = h('span'); const b = h('div', h('div.barra-tiempo', i), h('div.tiempo-texto', h('span', 'Tiempo'), txt));
    local.tics = local.tics || [];
    local.tics.push(() => { const r = reloj.restante(); i.style.width = `${100 * reloj.fraccion()}%`; txt.textContent = mmss(r); });
    return b;
  };
  const enviando = () => h('div.tarjeta.espera', h('h2', 'Enviado'), h('p', 'Miren la pantalla mientras los demás terminan.'));
  if (local.enviado) return enviando();

  const opciones = (lista, ocultas = [], onElegir) => h('div.opciones', lista.map((txt, k) =>
    h('button.opcion' + (ocultas.includes(k) ? '.tachada' : ''), { on: { click: () => onElegir(k) }, 'aria-label': `Opción ${LETRAS[k]}: ${txt}` }, h('span.letra', LETRAS[k] || k + 1), h('span', txt))));

  switch (t.tipo) {
    case 'tirar': {
      const caras = t.caras || 6;
      const chk = h('input', { type: 'checkbox', checked: !!local.doble, on: { change: e => { local.doble = e.target.checked; } } });
      return h('div.tarjeta',
        h('h2', '¡Tiren el dado!'),
        h('p', caras === 4 ? 'Paro camionero: en esta zona el dado va de 1 a 4.' : 'Toquen el dado para avanzar en el anillo.'),
        h('button.dado-boton', { on: { click: () => mandar({ tipo: 'tirar', doble: !!local.doble }) }, 'aria-label': 'Tirar el dado' }, dadoSVG(5, 'dado'), h('span', 'Tirar')),
        t.puedeDoble ? h('label.interruptor', chk, 'Usar el Dado doble (lanzan dos dados)') : null,
        barra());
    }
    case 'desafio':
      if (t.etapa === 'leccion') {
        return h('div',
          h('div.tarjeta.leccion', h('span.etq', `Mini-lección · bloque ${t.bloque}`), h('p.cuerpo-leccion', t.leccion), barra()),
          h('button.boton.ancho', { style: { marginTop: '14px' }, on: { click: () => { local.enviado = false; enviar({ tipo: 'listo', tareaId: t.id }); local.esperandoReto = true; if (local.repintar) local.repintar(); } } }, 'Ya entendimos: ver el reto'));
      }
    // falls through
    case 'duelo': case 'dueloBanco': case 'caza': case 'practica': {
      const titulos = { desafio: 'Desafío', duelo: `Duelo contra ${t.rival || 'otro equipo'}`, dueloBanco: 'Duelo contra el Banco', caza: 'Caza el error', practica: 'Pregunta de práctica' };
      return h('div.tarjeta',
        h('span.etq', `${titulos[t.tipo]} · bloque ${t.bloque}${t.calculadora ? ' · Calculadora dorada: +30 s' : ''}`),
        barra(),
        h('p.enunciado', t.enunciado),
        opciones(arr(t.opciones), arr(t.ocultas), k => mandar({ tipo: 'responder', opcion: k })));
    }
    case 'estrella':
      return h('div.tarjeta',
        h('h2', '⭐ Sello VPN+'),
        h('p', `Pasaron por la estrella. Cuesta ${t.precio} monedas y solo se paga si aciertan.`),
        barra(),
        h('p.enunciado', t.enunciado),
        opciones(arr(t.opciones), [], k => mandar({ tipo: 'responder', opcion: k })),
        h('button.boton.fantasma.ancho', { style: { marginTop: '12px', color: 'var(--tinto)' }, on: { click: () => mandar({ tipo: 'responder', opcion: -1 }) } }, 'No comprar esta vez'));
    case 'invertir': {
      const n = t.zonasRestantes;
      const total = n * t.flujo + t.salvamento;
      const flujos = [-t.costo, ...Array(n).fill(t.flujo)]; flujos[flujos.length - 1] += t.salvamento;
      if (n === 0) flujos.push(t.salvamento);
      const vpnInv = flujos.reduce((s, f, i) => s + f / (1 + t.tmar) ** i, 0);
      return h('div.tarjeta',
        h('h2', '🏗️ Casilla de inversión'),
        h('p', `Si invierten ${t.costo} monedas ahora, reciben ${t.flujo} en cada una de las ${n} zonas que faltan y ${t.salvamento} de salvamento al final: ${total} en total.`),
        h('p', h('b', `Su flujo: ${flujos.map(f => signo(f)).join(' · ')}`)),
        h('p.nota', `Pista del Estratega: el VPN de esa inversión al ${num(t.tmar * 100)} % es ${num(vpnInv, 1)}.`),
        barra(),
        h('div.botones-par', h('button.boton', { on: { click: () => mandar({ tipo: 'invertir', si: true }) } }, 'Invertir'), h('button.boton.secundario', { on: { click: () => mandar({ tipo: 'invertir', si: false }) } }, 'No invertir')));
    }
    case 'tienda': {
      const monedas = ctx.monedas ?? 0; const llenos = arr(t.items).length >= t.max;
      return h('div.tarjeta',
        h('h2', '🛍️ Tienda'),
        h('p', llenos ? 'Ya llevan el máximo de objetos.' : 'Pueden comprar un objeto. El Estratega decide.'),
        barra(),
        h('div.catalogo', arr(t.catalogo).map(it => h('button.producto', { disabled: it.precio > monedas || llenos, on: { click: () => mandar({ tipo: 'comprar', item: it.id }) } },
          h('span.ic', ICONOS_ITEM[it.id]), h('span', h('b', it.nombre), h('small', it.desc)), h('span.precio', it.precio)))),
        h('button.boton.secundario.ancho', { style: { marginTop: '12px' }, on: { click: () => mandar({ tipo: 'comprar', item: null }) } }, 'Salir sin comprar'));
    }
    case 'ordena': {
      local.orden = local.orden || [];
      const pasos = arr(t.pasos);
      const repintar = () => local.repintar && local.repintar();
      return h('div.tarjeta',
        h('h2', '🧩 ' + t.titulo),
        h('p', 'Toquen los pasos en el orden correcto.'),
        barra(),
        h('div.pasos-orden', pasos.map(p => {
          const k = local.orden.indexOf(p.i);
          return h('button.paso' + (k >= 0 ? '.usado' : ''), { on: { click: () => { if (k < 0) local.orden.push(p.i); else local.orden.splice(k); repintar(); } } }, h('span.num', k >= 0 ? k + 1 : ''), h('span', p.t));
        })),
        h('div.botones-par', { style: { marginTop: '12px' } },
          h('button.boton.secundario', { on: { click: () => { local.orden = []; repintar(); } } }, 'Borrar'),
          h('button.boton', { disabled: local.orden.length !== pasos.length, on: { click: () => mandar({ tipo: 'ordenar', orden: local.orden }) } }, 'Enviar orden')));
    }
    case 'apuesta': {
      local.monto = Math.min(local.monto ?? 0, t.max);
      const valor = h('span.valor', String(local.monto));
      const cambiar = d => { local.monto = Math.max(0, Math.min(t.max, local.monto + d)); valor.textContent = local.monto; };
      const nombres = { entra: '¿Entra o no entra al flujo?', carrera: 'Carrera del descuento', termometro: 'Termómetro del riesgo' };
      return h('div.tarjeta',
        h('h2', '🎲 Apuesta'),
        h('p', `Se viene "${nombres[t.minijuego] || 'el mini-juego'}". ¿Cuántas monedas apuestan a quedar en el top 3? Si lo logran, las ganan; si no, las pierden.`),
        barra(),
        h('div.apuesta-control', h('button', { 'aria-label': 'Menos', on: { click: () => cambiar(-1) } }, '−'), valor, h('button', { 'aria-label': 'Más', on: { click: () => cambiar(1) } }, '+')),
        h('button.boton.ancho', { on: { click: () => mandar({ tipo: 'apostar', monto: local.monto }) } }, 'Apostar'));
    }
    case 'mg': return renderMinijuego(t, mandar, local, barra);
    case 'jefe': {
      const proys = arr(t.proyectos);
      const listo = local.proyecto != null && local.just != null;
      const repintar = () => local.repintar && local.repintar();
      return h('div.tarjeta',
        h('span.etq', `Junta Directiva · fase ${t.fase}`),
        h('p.enunciado', h('b', '🏔️ ' + t.pregunta)),
        barra(),
        h('p', h('b', '1. Proyecto (miren la tabla en la pantalla)')),
        h('div.proyectos-jefe', proys.map(p => h('button.proyecto-op' + (local.proyecto === p.id ? '.sel' : ''), { 'aria-pressed': String(local.proyecto === p.id), on: { click: () => { local.proyecto = p.id; repintar(); } } }, h('b', p.id), h('small', p.nombre)))),
        h('p', h('b', '2. ¿Por qué?')),
        h('div.opciones', arr(t.justificaciones).map((j, k) => h('button.opcion' + (local.just === k ? '.elegida' : ''), { on: { click: () => { local.just = k; repintar(); } } }, h('span.letra', LETRAS[k]), h('span', j)))),
        h('button.boton.ancho', { style: { marginTop: '14px' }, disabled: !listo, on: { click: () => mandar({ tipo: 'jefe', proyecto: local.proyecto, justificacion: local.just }) } }, 'Enviar decisión a la Junta'));
    }
    case 'salida': {
      const pregs = arr(t.preguntas);
      local.resp = local.resp || [];
      const repintar = () => local.repintar && local.repintar();
      return h('div.tarjeta',
        h('h2', '✅ Tres preguntas de salida'),
        h('p', 'No dan puntos: sirven para saber cuánto aprendimos.'),
        barra(),
        pregs.map((p, i) => h('div', { style: { marginTop: '14px' } },
          h('p.enunciado', `${i + 1}. ${p.enunciado}`),
          h('div.opciones', arr(p.opciones).map((o, k) => h('button.opcion' + (local.resp[i] === k ? '.elegida' : ''), { on: { click: () => { local.resp[i] = k; repintar(); } } }, h('span.letra', LETRAS[k]), h('span', o)))))),
        h('button.boton.ancho', { style: { marginTop: '16px' }, disabled: local.resp.filter(x => x != null).length < pregs.length, on: { click: () => mandar({ tipo: 'salida', respuestas: pregs.map((_, i) => local.resp[i] ?? null) }) } }, 'Enviar respuestas'));
    }
  }
  return h('div.tarjeta.espera', h('p', 'Esperando…'));
}

function renderMinijuego(t, mandar, local, barra) {
  const repintar = () => local.repintar && local.repintar();
  local.resp = local.resp || [];
  local.autoEnviar = () => mandar({ tipo: 'mg', respuestas: t.mg === 'termometro' ? [local.valor ?? null] : local.resp });
  if (t.mg === 'entra' || t.mg === 'carrera') {
    const items = arr(t.items);
    const i = local.resp.length;
    if (i >= items.length) { local.autoEnviar(); return h('div.tarjeta.espera', h('h2', '¡Listo!'), h('p', 'Respuestas enviadas.')); }
    const it = items[i];
    const responder = v => { local.resp.push(v); repintar(); };
    const titulo = t.mg === 'entra' ? '¿Entra o no entra al flujo del proyecto?' : 'Carrera del descuento';
    return h('div.tarjeta.tarjeta-mg',
      h('h2', titulo), barra(),
      h('div.contador-mg', `${i + 1} de ${items.length}`),
      h('div.item', t.mg === 'entra' ? it : it.t),
      t.mg === 'entra'
        ? h('div.botones-par', h('button.boton', { on: { click: () => responder(true) } }, 'Entra'), h('button.boton.rojo', { on: { click: () => responder(false) } }, 'No entra'))
        : h('div.botones-par', h('button.boton', { on: { click: () => responder(0) } }, it.a), h('button.boton.azul', { on: { click: () => responder(1) } }, it.b)));
  }
  // termómetro
  local.valor = local.valor ?? Math.round((t.min + t.max) / 2 / t.salto) * t.salto;
  const fmt = v => (t.unidad === '$' ? `$${num(v)}` : t.unidad === '%' ? `${num(v)} %` : `${num(v)} unidades`);
  const etiqueta = h('div.valor-deslizador', fmt(local.valor));
  return h('div.tarjeta',
    h('h2', '🌡️ Termómetro del riesgo'), barra(),
    h('p.enunciado', t.enunciado),
    etiqueta,
    h('input.deslizador', { type: 'range', min: t.min, max: t.max, step: t.salto, value: local.valor, 'aria-label': 'Su estimación', on: { input: e => { local.valor = Number(e.target.value); etiqueta.textContent = fmt(local.valor); } } }),
    h('button.boton.ancho', { style: { marginTop: '12px' }, on: { click: () => local.autoEnviar() } }, 'Enviar estimación'));
}

// Tarjeta con el último resultado (correcto/incorrecto, explicación…)
export function renderResultado(u) {
  if (!u) return null;
  const tono = u.correcto === true || u.estrella || u.delta > 0 ? 'bien' : u.correcto === false || u.delta < 0 ? 'mal' : 'neutro';
  return h('div.resultado.' + tono,
    u.delta ? h('span.delta-grande', signo(u.delta)) : null,
    h('h3', u.titulo || ''),
    u.texto ? h('p', u.texto) : null,
    u.porque ? h('p.porque', h('b', 'Por qué no: '), u.porque) : null,
    u.textoCorrecto && u.correcto === false ? h('p', h('b', 'Respuesta: '), u.textoCorrecto) : null,
    u.explicacion ? h('p', u.explicacion) : null,
    u.vpn ? h('p', h('i', u.vpn)) : null);
}

const CHULETA = [
  ['VPN', '−Inversión + Σ FCₜ ÷ (1 + TMAR)ᵗ. Mayor que 0: se acepta.'],
  ['TIR', 'La tasa que hace VPN = 0. Mayor que la TMAR: se acepta.'],
  ['B/C', 'VP de beneficios ÷ VP de costos (con la inversión). Mayor que 1: se acepta.'],
  ['PR', 'Cuánto tarda en recuperar la inversión. Simple: sin descontar. Descontado: con flujos traídos a hoy.'],
  ['Valor presente', 'VP = VF ÷ (1 + i)ⁿ. Valor futuro: VF = VP × (1 + i)ⁿ.'],
  ['Flujo operativo', '(Ingresos − Costos − Depreciación) × (1 − t) + Depreciación.'],
  ['Depreciación', '(Costo − Salvamento) ÷ Vida útil. Escudo fiscal = Depreciación × t.'],
  ['Punto de equilibrio', 'Costos fijos ÷ (Precio − Costo variable unitario).'],
  ['Si se contradicen', 'Entre proyectos excluyentes manda el VPN.'],
];

// ═════════════════════ Aplicación del celular ═════════════════════
export async function iniciarControl(raiz, { red, sala }) {
  const clave = `expedicion-vpn:${sala}`;
  const S = { estado: null, yo: null, conectado: true, equipoId: leer(clave)?.equipoId ?? null, error: null, local: {}, firma: '', ultimoMostrado: null, chuleta: false };
  const tel = h('div.tel');
  limpiar(raiz, tel);

  let cli;
  try {
    cli = await conectarCliente(red, sala, {
      onEstado: v => { S.estado = norm(v); pintar(); },
      onEquipo: v => { S.yo = norm(v); pintar(); },
      onConexion: ok => { S.conectado = ok; pintar(true); },
    });
  } catch (e) {
    limpiar(tel, h('div.tel-cuerpo', h('div.error', 'No se pudo conectar con el servidor del juego. Revisen los datos móviles y recarguen la página.')));
    return;
  }
  if (S.equipoId) cli.seguir(S.equipoId);

  const enviar = a => cli.enviar(S.equipoId, a);

  // Bucle de relojes (barras de tiempo) y envío automático de mini-juegos al final
  setInterval(() => {
    (S.local.tics || []).forEach(f => f());
    const t = S.yo?.tarea;
    if (t?.tipo === 'mg' && !S.local.enviado && S.local.reloj?.restante() < 1.5 && S.local.autoEnviar) S.local.autoEnviar();
  }, 250);

  function pintar(soloCabeza = false) {
    const e = S.estado, yo = S.yo, t = yo?.tarea;
    // Re-pintado completo solo cuando cambia la tarea o el resultado; si no, solo la cabecera.
    const firma = JSON.stringify([e?.fase, e?.zona, t?.id, t?.etapa, yo?.ultimo?.titulo, yo?.ultimo?.delta, yo?.ultimo?.texto, S.conectado, S.error, !!yo, S.chuleta]);
    if (soloCabeza !== true && firma === S.firma) { actualizarCabeza(); return; }
    S.firma = firma;
    if (!t || S.local.tareaId !== t.id) S.local = { tareaId: t?.id };
    S.local.repintar = () => { S.firma = ''; pintar(); };
    S.local.tics = [];

    if (!S.equipoId || (e && e.equipos && !arr(e.equipos).some(x => x.id === S.equipoId) && e.fase !== 'lobby' && yo == null)) {
      if (S.equipoId && e && e.fase === 'lobby' && !yo) { /* esperando confirmación */ }
      limpiar(tel, !S.conectado ? h('div.aviso-red', 'Sin conexión. Reconectando…') : null, formularioUnirse());
      return;
    }
    limpiar(tel,
      !S.conectado ? h('div.aviso-red', 'Sin conexión. Reconectando…') : null,
      cabeza(), rolesBanda(), itemsBanda(),
      h('div.tel-cuerpo', cuerpo()),
      h('button.boton.azul.chuleta-boton', { on: { click: () => { S.chuleta = true; S.firma = ''; pintar(); } } }, 'Chuleta'),
      S.chuleta ? modalChuleta() : null);
  }

  let refCabeza = null;
  function cabeza() {
    const yo = S.yo, e = S.estado;
    const m = mascota(yo?.mascota);
    const zona = e && e.fase !== 'lobby' && e.fase !== 'intro' && e.fase !== 'practica' ? CONFIG.zonas[e.zona] : null;
    refCabeza = { mon: h('span', `🪙 ${yo?.monedas ?? 0}`), est: h('span.est', `⭐ ${yo?.estrellas ?? 0}`) };
    return h('div', h('div.tel-cabeza',
      h('div.ficha', { style: { '--c': m.color } }, mascotaSVG(m.id)),
      h('div.nombre', yo?.nombre ?? '…', h('small', zona ? `${zona.icono} Zona ${zona.bloque} · ${zona.nombre}` : `Sala ${sala}`)),
      h('div.marcadores', refCabeza.est, refCabeza.mon)), h('div.franja-fina'));
  }
  function actualizarCabeza() {
    if (!refCabeza || !S.yo) return;
    refCabeza.mon.textContent = `🪙 ${S.yo.monedas}`; refCabeza.est.textContent = `⭐ ${S.yo.estrellas}`;
  }
  function rolesBanda() {
    const yo = S.yo; if (!yo) return null;
    const integ = arr(yo.integrantes);
    const roles = asignarRoles(integ, yo.rol || 0);
    if (!integ.length) return h('div.tel-rol', 'Roles de esta zona: quien tenga el celular es el ', h('b', CONFIG.roles[(2 + (yo.rol || 0)) % 4]), '.');
    return h('div.tel-rol', 'Esta zona: ', roles.map((r, i) => [i ? ' · ' : '', r.rol, ' ', h('b', r.quien)]));
  }
  function itemsBanda() {
    const items = arr(S.yo?.items);
    if (!items.length) return null;
    return h('div.tel-items', items.map(id => h('span', ICONOS_ITEM[id], NOMBRE_ITEM[id])));
  }

  function cuerpo() {
    const e = S.estado, yo = S.yo, t = yo?.tarea;
    if (!e) return h('div.tarjeta.espera', h('h2', 'Buscando la sala…'), h('p', `Código ${sala}.`));
    if (t) {
      return [renderTarea(t, enviar, S.local, { monedas: yo.monedas }), yo.ultimo && t.tipo !== 'desafio' && t.tipo !== 'mg' ? null : null];
    }
    const res = renderResultado(yo?.ultimo);
    const msj = mensajeFase(e, yo);
    return [msj, res && !['lobby', 'intro'].includes(e.fase) ? res : null];
  }

  function mensajeFase(e, yo) {
    const z = CONFIG.zonas[e.zona];
    const mio = arr(e.equipos).find(x => x.id === S.equipoId);
    switch (e.fase) {
      case 'lobby': return h('div.tarjeta.espera', h('h2', '¡Están dentro!'), h('p', 'Esperen a que el presentador empiece la expedición. Mientras tanto, decidan quién lleva el celular.'));
      case 'intro': return h('div.tarjeta.espera', h('h2', 'Miren la pantalla'), h('p', 'El guía está explicando las reglas.'));
      case 'zona_intro': return h('div.tarjeta.espera', h('h2', `${z.icono} ${z.nombre}`), h('p', 'La Chiva los deja en una nueva zona. Lean la mini-lección en la pantalla.'));
      case 'tirar': case 'mover': return h('div.tarjeta.espera', h('h2', mio?.dado ? `Sacaron ${mio.dado.total}` : 'Tirando…'), mio?.dado ? h('p', arr(mio.dado.valores).map(v => dadoSVG(v, 'dado')), ' Avanzando en el anillo…') : null);
      case 'casillas': return h('div.tarjeta.espera', h('h2', 'Turno resuelto'), h('p', 'Esperen a que los demás equipos terminen.'));
      case 'resultado_turno': return h('div.tarjeta.espera', h('h2', 'Fin del turno'), h('p', 'Miren el marcador en la pantalla.'));
      case 'minijuego_res': return h('div.tarjeta.espera', h('h2', 'Resultados del mini-juego'), h('p', 'En la pantalla.'));
      case 'jefe_intro': return h('div.tarjeta.espera', h('h2', '🏔️ La Junta Directiva'), h('p', 'Miren la tabla de los 3 proyectos en la pantalla. Ya viene su decisión.'));
      case 'jefe1_res': case 'jefe2_res': return h('div.tarjeta.espera', h('h2', 'La Junta delibera'), h('p', 'Vocero: prepárate para defender su decisión en 20 segundos.'));
      case 'bonus': return h('div.tarjeta.espera', h('h2', '⭐ Estrellas sorpresa'), h('p', 'Miren la pantalla.'));
      case 'podio': case 'cierre': return h('div.tarjeta.espera', h('h2', `Terminaron con ${yo?.estrellas ?? 0} ⭐ y ${yo?.monedas ?? 0} 🪙`), h('p', 'Miren el podio en la pantalla.'));
      case 'fin': return h('div.tarjeta.espera', h('h2', '¡Gracias por jugar!'), yo?.salida ? h('p', `En las preguntas de salida acertaron ${yo.salida.aciertos} de ${yo.salida.total}.`) : null);
      default: return h('div.tarjeta.espera', h('h2', 'Miren la pantalla'));
    }
  }

  function formularioUnirse() {
    const e = S.estado;
    const tomadas = new Set(arr(e?.equipos).map(x => x.mascota));
    S.formulario = S.formulario || { nombre: '', mascota: null, integrantes: ['', '', '', ''] };
    const F = S.formulario;
    const empezo = e && e.fase !== 'lobby';
    const repintar = () => { S.firma = ''; pintar(); };
    return h('div.tel-cuerpo',
      h('div.tarjeta',
        h('h2', 'Únanse a la expedición'),
        empezo ? h('div.error', 'La partida ya empezó. Si su equipo ya estaba inscrito en este celular, recarguen la página.') : null,
        S.error ? h('div.error', S.error) : null,
        h('form.formulario', { on: { submit: async ev => {
          ev.preventDefault();
          if (!F.mascota) { S.error = 'Escojan una mascota.'; repintar(); return; }
          S.error = null;
          const r = await cli.unirse({ nombre: F.nombre, mascota: F.mascota, integrantes: F.integrantes.filter(Boolean) });
          if (r?.error) { S.error = r.error; repintar(); return; }
          S.equipoId = r.id; guardar(clave, { equipoId: r.id });
          cli.seguir(r.id); repintar();
        } } },
          h('div', h('span.etq', 'Mascota'), h('div.mascotas-sel', CONFIG.mascotas.map(m => h('button.mascota-op', { type: 'button', disabled: tomadas.has(m.id), 'aria-pressed': String(F.mascota === m.id), on: { click: () => { F.mascota = m.id; if (!F.nombre) F.nombre = ''; repintar(); } } },
            h('div.ficha', { style: { '--c': m.color } }, mascotaSVG(m.id)), m.nombre)))),
          h('label', 'Nombre del equipo (opcional)', h('input', { value: F.nombre, maxlength: 24, placeholder: F.mascota ? mascota(F.mascota).nombre : 'Ej.: Los del tinto', on: { input: ev => { F.nombre = ev.target.value; } } })),
          h('label', 'Integrantes (hasta 4)', F.integrantes.map((v, i) => h('input', { value: v, maxlength: 18, placeholder: `Integrante ${i + 1}`, 'aria-label': `Integrante ${i + 1}`, on: { input: ev => { F.integrantes[i] = ev.target.value; } } }))),
          h('button.boton.ancho', { type: 'submit', disabled: empezo }, 'Unirnos'))));
  }

  function modalChuleta() {
    const cerrar = () => { S.chuleta = false; S.firma = ''; pintar(); };
    return h('div.modal-fondo', { on: { click: ev => { if (ev.target === ev.currentTarget) cerrar(); } } },
      h('div.modal', { role: 'dialog', 'aria-label': 'Chuleta de fórmulas' },
        h('button.boton.secundario.cerrar', { on: { click: cerrar } }, 'Cerrar'),
        h('div.chuleta', h('h2', 'Chuleta'), h('dl', CHULETA.map(([k, v]) => [h('dt', k), h('dd', v)])))));
  }

  pintar();
  // Si el equipo guardado ya no existe en la sala (otra partida), olvidarlo
  setTimeout(() => {
    const e = S.estado;
    if (S.equipoId && e && !arr(e.equipos).some(x => x.id === S.equipoId) && e.fase === 'lobby') { borrar(clave); S.equipoId = null; S.firma = ''; pintar(); }
  }, 4000);
}
