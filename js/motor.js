// Motor de "Expedición VPN: Ruta al Nevado".
// Lógica pura y determinista (con semilla). El anfitrión (pantalla proyectada) es la única
// fuente de verdad: los celulares solo envían acciones y reciben vistas sin respuestas.
// El tiempo `ahora` va en SEGUNDOS y lo provee quien use el motor (reloj real o virtual).
import { vpn as calcVpn } from './finanzas.js';

// ───────── utilidades ─────────
function rngSiguiente(S) {
  // mulberry32 sobre S.rng (entero) → serializable
  S.rng = (S.rng + 0x6d2b79f5) | 0;
  let t = S.rng;
  t = Math.imul(t ^ (t >>> 15), 1 | t);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}
const azarEntero = (S, a, b) => a + Math.floor(rngSiguiente(S) * (b - a + 1));
const azarDe = (S, arr) => arr[Math.floor(rngSiguiente(S) * arr.length)];
function barajar(S, arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rngSiguiente(S) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

export const FASES_INTERACTIVAS = new Set(['practica', 'tirar', 'casillas', 'apuesta', 'minijuego', 'jefe1', 'jefe2', 'salida']);
const CASILLAS_LIBRES = new Set(['ingreso', 'costo', 'impuesto', 'evento', 'inversion', 'tienda']);

export class Motor {
  constructor({ config, banco, semilla = 1, ahora = 0, estado = null }) {
    this.C = config;
    this.B = banco;
    this.idx = Object.fromEntries(banco.PREGUNTAS.map(p => [p.id, p]));
    this.idxEstrella = Object.fromEntries(banco.ESTRELLA.map(p => [p.id, p]));
    this.S = estado ?? {
      version: 0,
      rng: semilla | 0,
      fase: 'lobby', faseInicio: ahora, faseLimite: null,
      zona: 0, turno: 0, estrellaPos: 7, evento: null, eventosUsados: [],
      equipos: [], usos: {}, log: [],
      historialFases: [],
      turnoStats: null, mg: null, jefe: null, bonus: null,
      rankingsZona: [],
    };
  }

  // ───────── consultas ─────────
  eq(id) { return this.S.equipos.find(e => e.id === id); }
  ranking() {
    return [...this.S.equipos].sort((a, b) => b.estrellas - a.estrellas || b.monedas - a.monedas || a.orden - b.orden);
  }
  anillo(zona = this.S.zona) {
    const A = this.C.anillo; const rot = (zona * 5) % A.length;
    return A.map((_, i) => A[(i + rot) % A.length]);
  }
  zonaActual() { return this.C.zonas[this.S.zona]; }
  precioEstrella(e = null) {
    const C = this.C;
    let p = this.S.evento?.id === 'alzaTasas' ? C.estrella.precioAlzaTasas : C.estrella.precio;
    if (e && C.estrella.subsidio && this.S.subsidiados?.includes(e.id)) p -= C.estrella.subsidio;
    return p;
  }
  log(txt) { this.S.log.push(txt); if (this.S.log.length > 60) this.S.log.shift(); }

  // ───────── equipos ─────────
  unirse({ nombre, mascota, integrantes = [] }, ahora = 0) {
    const S = this.S;
    if (S.fase !== 'lobby') return { error: 'La partida ya empezó.' };
    if (S.equipos.length >= this.C.maxEquipos) return { error: 'La expedición está llena.' };
    if (!this.C.mascotas.some(m => m.id === mascota)) return { error: 'Mascota desconocida.' };
    if (S.equipos.some(e => e.mascota === mascota)) return { error: 'Esa mascota ya la escogió otro equipo.' };
    const id = 'e' + (S.equipos.length + 1);
    S.equipos.push({
      id, orden: S.equipos.length, nombre: (nombre || '').trim().slice(0, 24) || this.C.mascotas.find(m => m.id === mascota).nombre,
      mascota, integrantes: integrantes.map(s => String(s).trim().slice(0, 18)).filter(Boolean).slice(0, 4),
      monedas: this.C.monedasIniciales, estrellas: 0, pos: 0, items: [], inversiones: [],
      dado: null, pasoEstrella: false, cola: [], tarea: null, ultimoResultado: null,
      flujos: Array(this.C.zonas.length).fill(0),
      stats: { aciertos: 0, intentos: 0, duelosGanados: 0, peorPuesto: 0, estrellasCompradas: 0, compras: {}, invirtio: 0 },
      mg: null, apuesta: 0, jefe: {}, salida: null, conectado: true,
    });
    this.log(`${S.equipos.at(-1).nombre} se unió a la expedición.`);
    S.version++;
    return { id };
  }

  // Suma/resta monedas. Los gastos de tienda y estrella no cuentan como "flujo operativo".
  mover(e, delta, tipo = 'op') {
    const antes = e.monedas;
    e.monedas = Math.max(0, e.monedas + delta);
    const real = e.monedas - antes;
    if (tipo !== 'estrella' && tipo !== 'tienda') e.flujos[Math.min(this.S.zona, e.flujos.length - 1)] += real;
    return real;
  }
  // Golpe negativo que el escudo puede bloquear.
  golpe(e, monto, motivo) {
    if (monto <= 0) return { bloqueado: false, delta: 0 };
    const i = e.items.indexOf('escudo');
    if (i >= 0) { e.items.splice(i, 1); this.log(`🛡️ ${e.nombre} bloqueó ${motivo} con el escudo.`); return { bloqueado: true, delta: 0 }; }
    const delta = this.mover(e, -monto);
    e.stats.perdidas = (e.stats.perdidas || 0) - delta;
    return { bloqueado: false, delta };
  }

  // ───────── control de fases ─────────
  iniciar(ahora) {
    if (this.S.fase !== 'lobby' || this.S.equipos.length === 0) return false;
    this.irA('intro', ahora);
    return true;
  }

  irA(fase, ahora) {
    const S = this.S;
    if (S.fase !== fase || S.faseInicio !== ahora) S.historialFases.push({ fase: S.fase, zona: S.zona, turno: S.turno, inicio: S.faseInicio, fin: ahora });
    S.fase = fase; S.faseInicio = ahora; S.faseLimite = null;
    const T = this.C.tiempos;
    switch (fase) {
      case 'intro': S.faseLimite = ahora + T.introReglas; break;
      case 'practica': this.entrarPractica(ahora); break;
      case 'zona_intro': this.entrarZona(ahora); S.faseLimite = ahora + T.zonaIntro; break;
      case 'tirar': this.entrarTirar(ahora); break;
      case 'mover': S.faseLimite = ahora + T.mover; break;
      case 'casillas': this.entrarCasillas(ahora); break;
      case 'resultado_turno': this.cerrarTurno(); S.faseLimite = ahora + T.resultadoTurno; break;
      case 'apuesta': this.entrarApuesta(ahora); break;
      case 'minijuego': this.entrarMinijuego(ahora); break;
      case 'minijuego_res': this.cerrarMinijuego(); S.faseLimite = ahora + T.minijuegoResultado; break;
      case 'jefe_intro': this.prepararJefe(); S.faseLimite = ahora + T.jefeIntro; break;
      case 'jefe1': case 'jefe2': this.entrarJefe(fase === 'jefe1' ? 1 : 2, ahora); break;
      case 'jefe1_res': this.cerrarJefe(1); S.faseLimite = ahora + T.jefeDefensa; break;
      case 'jefe2_res': this.cerrarJefe(2); S.faseLimite = ahora + T.jefeResultado; break;
      case 'bonus': this.calcularBonus(); S.faseLimite = ahora + T.bonus; break;
      case 'podio': this.calcularPodio(); S.faseLimite = ahora + T.podio; break;
      case 'cierre': S.faseLimite = ahora + T.cierre; break;
      case 'salida': this.entrarSalida(ahora); break;
      case 'fin': break;
    }
    S.version++;
  }

  siguienteFase(ahora) {
    const S = this.S;
    const z = this.zonaActual();
    switch (S.fase) {
      case 'intro': return this.irA('practica', ahora);
      case 'practica': S.zona = 0; return this.irA('zona_intro', ahora);
      case 'zona_intro': S.turno = 0; return this.irA('tirar', ahora);
      case 'tirar': return this.irA('mover', ahora);
      case 'mover': return this.irA('casillas', ahora);
      case 'casillas': return this.irA('resultado_turno', ahora);
      case 'resultado_turno':
        if (S.turno + 1 < this.C.turnosPorZona[S.zona]) { S.turno++; return this.irA('tirar', ahora); }
        return z.minijuego ? this.irA('apuesta', ahora) : this.finZona(ahora);
      case 'apuesta': return this.irA('minijuego', ahora);
      case 'minijuego': return this.irA('minijuego_res', ahora);
      case 'minijuego_res': return this.finZona(ahora);
      case 'jefe_intro': return this.irA('jefe1', ahora);
      case 'jefe1': return this.irA('jefe1_res', ahora);
      case 'jefe1_res': return this.irA('jefe2', ahora);
      case 'jefe2': return this.irA('jefe2_res', ahora);
      case 'jefe2_res': return this.irA('bonus', ahora);
      case 'bonus': return this.irA('podio', ahora);
      case 'podio': return this.irA('cierre', ahora);
      case 'cierre': return this.irA('salida', ahora);
      case 'salida': return this.irA('fin', ahora);
    }
  }

  finZona(ahora) {
    const S = this.S;
    this.registrarRanking();
    if (S.zona + 1 < this.C.zonas.length) { S.zona++; return this.irA('zona_intro', ahora); }
    return this.irA('jefe_intro', ahora);
  }

  registrarRanking() {
    const R = this.ranking();
    R.forEach((e, i) => { e.stats.peorPuesto = Math.max(e.stats.peorPuesto, i + 1); });
    this.S.rankingsZona.push(R.map(e => e.id));
  }

  // Avance por tiempo o porque todos terminaron. Devuelve true si hubo cambios.
  tick(ahora) {
    const S = this.S;
    let cambio = false;
    // Vencimiento de tareas individuales
    for (const e of S.equipos) {
      let guard = 0;
      while (e.tarea && e.tarea.limite != null && ahora >= e.tarea.limite && guard++ < 10) { this.vencerTarea(e, ahora); cambio = true; }
    }
    if (FASES_INTERACTIVAS.has(S.fase)) {
      if (S.equipos.every(e => !e.tarea && e.cola.length === 0)) { this.siguienteFase(ahora); return true; }
    } else if (S.faseLimite != null && ahora >= S.faseLimite) {
      this.siguienteFase(ahora); return true;
    }
    if (cambio) S.version++;
    return cambio;
  }

  // El presentador presiona "Siguiente": vence todo lo pendiente y avanza.
  forzar(ahora) {
    const S = this.S;
    for (const e of S.equipos) {
      let guard = 0;
      while ((e.tarea || e.cola.length) && guard++ < 20) {
        if (!e.tarea) this.siguienteTarea(e, ahora);
        if (e.tarea) this.vencerTarea(e, ahora);
      }
    }
    if (S.fase !== 'fin') this.siguienteFase(ahora);
  }

  // Próximo instante en que el motor necesita un tick (para la simulación).
  proximoLimite() {
    const S = this.S;
    const ls = S.equipos.map(e => e.tarea?.limite).filter(x => x != null);
    if (!FASES_INTERACTIVAS.has(S.fase) && S.faseLimite != null) ls.push(S.faseLimite);
    return ls.length ? Math.min(...ls) : null;
  }

  // ───────── tareas ─────────
  ponerTareas(e, tareas, ahora) {
    e.cola.push(...tareas);
    if (!e.tarea) this.siguienteTarea(e, ahora);
  }
  siguienteTarea(e, ahora) {
    e.tarea = null;
    while (!e.tarea && e.cola.length) {
      const t = e.cola.shift();
      const lista = this.iniciarTarea(e, t, ahora);
      if (lista) e.tarea = lista;
    }
  }
  terminarTarea(e, ahora) { this.siguienteTarea(e, ahora); this.S.version++; }

  // Prepara una tarea al volverse activa (algunas se resuelven solas y devuelven null).
  iniciarTarea(e, t, ahora) {
    const T = this.C.tiempos;
    t.inicio = ahora;
    switch (t.tipo) {
      case 'desafio': {
        t.etapa = 'leccion'; t.limite = ahora + T.leccion;
        this.aplicarItemsPregunta(e, t);
        return t;
      }
      case 'duelo': case 'dueloBanco': case 'caza': case 'practica': {
        t.etapa = 'reto';
        const p = this.idx[t.preguntaId];
        this.aplicarItemsPregunta(e, t);
        t.limite = ahora + p.tiempo + (t.extra || 0);
        return t;
      }
      case 'estrella':
        if (e.monedas < this.precioEstrella(e)) return null;
        t.limite = ahora + T.estrellaCheck; return t;
      case 'invertir':
        if (e.monedas < this.C.inversion.costo) { e.ultimoResultado = { titulo: 'Casilla de inversión', texto: `No te alcanza para invertir (${this.C.inversion.costo} monedas).`, delta: 0 }; return null; }
        t.limite = ahora + T.invertir; return t;
      case 'tienda': t.limite = ahora + T.tienda; return t;
      case 'ordena': t.limite = ahora + T.minijuegoCasilla; return t;
      default: t.limite = ahora + 30; return t;
    }
  }

  aplicarItemsPregunta(e, t) {
    const i = e.items.indexOf('calculadora');
    if (i >= 0) { e.items.splice(i, 1); t.extra = (t.extra || 0) + this.C.tiempos.extraCalculadora; t.usoCalculadora = true; }
    const p = this.idx[t.preguntaId];
    const j = e.items.indexOf('pista');
    if (j >= 0 && p?.opciones.length === 4) {
      e.items.splice(j, 1);
      const malas = p.opciones.map((_, k) => k).filter(k => k !== p.correcta);
      t.ocultas = barajar(this.S, malas).slice(0, 2);
    }
  }

  vencerTarea(e, ahora) {
    const t = e.tarea;
    if (!t) return;
    switch (t.tipo) {
      case 'tirar': this.tirar(e, false, ahora); break;
      case 'desafio':
        if (t.etapa === 'leccion') { this.empezarReto(e, ahora); return; }
        this.responderPregunta(e, null, ahora); break;
      case 'duelo': case 'dueloBanco': case 'caza': case 'practica': this.responderPregunta(e, null, ahora); break;
      case 'estrella': this.responderEstrella(e, -1, ahora); break;
      case 'invertir': this.decidirInversion(e, false, ahora); break;
      case 'tienda': this.comprar(e, null, ahora); break;
      case 'ordena': this.ordenar(e, null, ahora); break;
      case 'apuesta': this.apostar(e, 0, ahora); break;
      case 'mg': this.respuestaMinijuego(e, null, ahora); break;
      case 'jefe': this.respuestaJefe(e, null, ahora); break;
      case 'salida': this.respuestaSalida(e, null, ahora); break;
      default: this.terminarTarea(e, ahora);
    }
  }

  // ───────── acciones de los celulares ─────────
  accion(equipoId, a, ahora) {
    const e = this.eq(equipoId);
    if (!e) return { error: 'Equipo desconocido.' };
    const t = e.tarea;
    if (!t) return { error: 'No tienes nada pendiente.' };
    if (a.tareaId && a.tareaId !== t.id) return { error: 'Esa acción ya no aplica.' };
    switch (a.tipo) {
      case 'tirar': if (t.tipo === 'tirar') return this.tirar(e, !!a.doble, ahora); break;
      case 'listo': if (t.tipo === 'desafio' && t.etapa === 'leccion') return this.empezarReto(e, ahora); break;
      case 'responder':
        if (['desafio', 'duelo', 'dueloBanco', 'caza', 'practica'].includes(t.tipo) && t.etapa === 'reto') return this.responderPregunta(e, a.opcion, ahora);
        if (t.tipo === 'estrella') return this.responderEstrella(e, a.opcion, ahora);
        break;
      case 'invertir': if (t.tipo === 'invertir') return this.decidirInversion(e, !!a.si, ahora); break;
      case 'comprar': if (t.tipo === 'tienda') return this.comprar(e, a.item ?? null, ahora); break;
      case 'ordenar': if (t.tipo === 'ordena') return this.ordenar(e, a.orden, ahora); break;
      case 'apostar': if (t.tipo === 'apuesta') return this.apostar(e, a.monto, ahora); break;
      case 'mg': if (t.tipo === 'mg') return this.respuestaMinijuego(e, a.respuestas, ahora); break;
      case 'jefe': if (t.tipo === 'jefe') return this.respuestaJefe(e, a, ahora); break;
      case 'salida': if (t.tipo === 'salida') return this.respuestaSalida(e, a.respuestas, ahora); break;
    }
    return { error: 'Acción no válida en este momento.' };
  }

  nuevaTareaId() { this.S.tareaSeq = (this.S.tareaSeq || 0) + 1; return 't' + this.S.tareaSeq; }

  // ───────── intro / práctica ─────────
  entrarPractica(ahora) {
    const p = this.B.PREGUNTAS.find(q => q.id === 'A02') ?? this.B.PREGUNTAS[0];
    for (const e of this.S.equipos) this.ponerTareas(e, [{ id: this.nuevaTareaId(), tipo: 'practica', preguntaId: p.id }], ahora);
  }

  // ───────── zonas ─────────
  entrarZona(ahora) {
    const S = this.S, C = this.C;
    const n = S.equipos.length;
    S.evento = null;
    // Retorno de inversiones (flujo futuro) al entrar a una zona nueva
    if (S.zona > 0) {
      for (const e of S.equipos) {
        if (e.inversiones.length) {
          const d = this.mover(e, e.inversiones.length * C.inversion.flujoPorZona);
          e.ultimoResultado = { titulo: 'Tus inversiones pagan', texto: `Recibes ${d} monedas de tus ${e.inversiones.length} inversión(es).`, delta: d };
        }
      }
      // Capital semilla para el último lugar
      const R = this.ranking();
      const semillas = [].concat(C.capitalSemilla); // [último, penúltimo, …]
      S.semillaPara = [];
      if (n > 1) semillas.forEach((monto, k) => {
        const e = R[n - 1 - k];
        if (!e || k >= n - 1 || !monto) return;
        this.mover(e, monto);
        S.semillaPara.push({ id: e.id, monto });
        this.log(`🌱 Capital semilla: ${e.nombre} recibe ${monto} monedas.`);
      });
    }
    // Subsidio: los últimos del ranking pagan menos por la estrella en esta zona
    { const R0 = this.ranking(); const k = C.estrella.subsidiados || 0; S.subsidiados = S.zona > 0 && n > 2 ? R0.slice(Math.max(1, n - k)).map(e => e.id) : []; }
    // Regalo a los rezagados en las últimas zonas ("¡Últimas paradas de la Chiva!")
    const RG = C.regaloRezagados;
    S.regalos = [];
    if (RG && S.zona >= RG.desdeZona && n > 2) {
      const R1 = this.ranking();
      for (const e of R1.slice(n - RG.cantidad)) {
        if (e.items.length >= C.maxItems) continue;
        const it = azarDe(S, C.tienda);
        e.items.push(it.id);
        S.regalos.push({ id: e.id, item: it.id });
        this.log(`🎁 ${e.nombre} recibe gratis: ${it.nombre}.`);
      }
    }
    // Estrella en posición nueva
    S.estrellaPos = S.zona === 0 ? azarEntero(S, 5, 9) : azarEntero(S, 0, 11);
    // La Chiva: el último sale a 2 casillas de la estrella; el líder, más lejos
    const R = this.ranking();
    R.forEach((e, r) => {
      if (S.zona === 0) { e.pos = 0; return; }
      const atras = n === 1 ? 2 : 2 + Math.round(((n - 1 - r) / (n - 1)) * 8); // r = 0 es el líder → queda 10 atrás; el último, 2 atrás
      e.pos = (S.estrellaPos - atras + 120) % 12;
    });
    // Evento global (zonas D, E, F, G)
    if (S.zona >= 2) {
      const libres = C.eventosGlobales.filter(ev => !S.eventosUsados.includes(ev.id));
      const ev = azarDe(S, libres.length ? libres : C.eventosGlobales);
      S.evento = ev; S.eventosUsados.push(ev.id);
      if (ev.id === 'nino') for (const e of S.equipos) this.golpe(e, 2, 'El Niño');
      this.log(`🌎 Evento: ${ev.nombre}. ${ev.texto}`);
    }
    for (const e of S.equipos) e.rol = S.zona % C.roles.length;
  }

  entrarTirar(ahora) {
    for (const e of this.S.equipos) {
      e.dado = null; e.pasoEstrella = false;
      this.ponerTareas(e, [{ id: this.nuevaTareaId(), tipo: 'tirar' }], ahora);
      e.tarea.limite = ahora + this.C.tiempos.tirar;
      e.tarea.puedeDoble = e.items.includes('dadoDoble');
    }
  }

  tirar(e, doble, ahora) {
    const S = this.S;
    const caras = S.evento?.id === 'paro' ? 4 : 6;
    let usarDoble = false;
    if (doble && e.items.includes('dadoDoble')) { e.items.splice(e.items.indexOf('dadoDoble'), 1); usarDoble = true; }
    const d1 = azarEntero(S, 1, caras);
    const d2 = usarDoble ? azarEntero(S, 1, caras) : 0;
    e.dado = { valores: usarDoble ? [d1, d2] : [d1], total: d1 + d2 };
    // Movimiento y paso por la estrella
    const pasos = e.dado.total;
    let paso = false;
    for (let k = 1; k <= pasos; k++) if ((e.pos + k) % 12 === S.estrellaPos) paso = true;
    e.posAnterior = e.pos;
    e.pos = (e.pos + pasos) % 12;
    e.pasoEstrella = paso;
    this.terminarTarea(e, ahora);
    return { ok: true, dado: e.dado };
  }

  entrarCasillas(ahora) {
    const S = this.S;
    const A = this.anillo();
    S.turnoStats = { intentos: 0, aciertos: 0 };
    S.duelosTurno = [];
    const tareas = Object.fromEntries(S.equipos.map(e => [e.id, []]));
    const casilla = Object.fromEntries(S.equipos.map(e => [e.id, A[e.pos]]));
    // 1) Duelos (van primero para que ambos empiecen a la vez)
    const enDuelo = new Set();
    const retadores = barajar(S, S.equipos.filter(e => casilla[e.id] === 'duelo'));
    const R = this.ranking();
    for (const e of retadores) {
      if (enDuelo.has(e.id)) continue;
      const miPuesto = R.indexOf(e);
      const candidatos = R.filter(o => o.id !== e.id && !enDuelo.has(o.id) && CASILLAS_LIBRES.has(casilla[o.id]))
        .sort((a, b) => Math.abs(R.indexOf(a) - miPuesto + 0.5) - Math.abs(R.indexOf(b) - miPuesto + 0.5));
      const p = this.elegirPregunta(e, this.zonaActual().bloque, 'duelo', candidatos[0]);
      if (candidatos.length) {
        const rival = candidatos[0];
        enDuelo.add(e.id); enDuelo.add(rival.id);
        const dueloId = this.nuevaTareaId();
        S.duelos = S.duelos || {};
        S.duelos[dueloId] = { a: e.id, b: rival.id, preguntaId: p.id, respuestas: {}, cerrado: false };
        S.duelosTurno.push({ a: e.id, b: rival.id, id: dueloId });
        tareas[e.id].push({ id: this.nuevaTareaId(), tipo: 'duelo', dueloId, rival: rival.id, preguntaId: p.id });
        tareas[rival.id].push({ id: this.nuevaTareaId(), tipo: 'duelo', dueloId, rival: e.id, preguntaId: p.id });
        this.log(`⚔️ Duelo: ${e.nombre} vs ${rival.nombre}`);
      } else {
        enDuelo.add(e.id);
        tareas[e.id].push({ id: this.nuevaTareaId(), tipo: 'dueloBanco', preguntaId: p.id });
      }
    }
    // 2) Estrella (si pasó por ella y le alcanza)
    for (const e of S.equipos) {
      if (e.pasoEstrella && e.monedas >= this.precioEstrella(e)) {
        const s = azarDe(S, this.B.ESTRELLA);
        tareas[e.id].push({ id: this.nuevaTareaId(), tipo: 'estrella', estrellaId: s.id });
      }
    }
    // 3) La casilla propia
    for (const e of S.equipos) {
      const tipo = casilla[e.id];
      if (tipo === 'duelo') continue;
      this.efectoCasilla(e, tipo, tareas[e.id]);
    }
    for (const e of S.equipos) this.ponerTareas(e, tareas[e.id], ahora);
  }

  efectoCasilla(e, tipo, lista) {
    const S = this.S, C = this.C, ev = S.evento?.id;
    const res = (titulo, texto, delta, vpnTxt) => { e.ultimoResultado = { titulo, texto, delta, vpn: vpnTxt }; };
    switch (tipo) {
      case 'desafio': {
        const p = this.elegirPregunta(e, this.zonaActual().bloque, 'desafio');
        lista.push({ id: this.nuevaTareaId(), tipo: 'desafio', preguntaId: p.id });
        break;
      }
      case 'ingreso': {
        const d = this.mover(e, C.ingreso * (ev === 'tlc' ? 2 : 1));
        res('💰 Ingreso', `Vendiste bien: +${d} monedas.`, d, 'Las ventas son plata que entra al negocio.');
        break;
      }
      case 'costo': {
        const g = this.golpe(e, C.costo * (ev === 'devaluacion' ? 2 : 1), 'un costo');
        res('🧾 Costo', g.bloqueado ? 'Tu escudo absorbió el costo.' : `Pagaste costos de operación: ${g.delta} monedas.`, g.delta, 'Los gastos son plata que sale del negocio.');
        break;
      }
      case 'impuesto': {
        const pct = ev === 'reforma' ? 0.3 : C.impuestoPct;
        const monto = Math.floor(e.monedas * pct);
        const g = this.golpe(e, monto, 'el impuesto');
        res('🏛️ Impuesto', g.bloqueado ? 'Tu escudo te salvó del impuesto.' : `Impuesto del ${Math.round(pct * 100)} %: ${g.delta} monedas.`, g.delta, 'El impuesto se paga sobre lo que el negocio gana: ventas menos gastos.');
        break;
      }
      case 'evento': {
        const x = azarDe(S, C.eventosPersonales);
        let delta;
        if (x.delta < 0) { const g = this.golpe(e, -x.delta, 'un evento'); delta = g.delta; }
        else delta = this.mover(e, x.delta);
        res('⚡ Evento de riesgo', `${x.texto} (${delta >= 0 ? '+' : ''}${delta})`, delta, x.vpn);
        break;
      }
      case 'inversion': lista.push({ id: this.nuevaTareaId(), tipo: 'invertir' }); break;
      case 'tienda': lista.push({ id: this.nuevaTareaId(), tipo: 'tienda' }); break;
      case 'minijuego': {
        if (rngSiguiente(S) < 0.5) {
          const o = azarDe(S, this.B.MG_ORDENA);
          const orden = barajar(S, o.pasos.map((_, i) => i));
          lista.push({ id: this.nuevaTareaId(), tipo: 'ordena', ordenaId: o.id, mezcla: orden });
        } else {
          const cands = this.B.PREGUNTAS.filter(p => p.uso.includes('caza'));
          const vistos = new Set(e.vistas || []);
          const p = cands.find(q => !vistos.has(q.id)) ?? azarDe(S, cands);
          (e.vistas = e.vistas || []).push(p.id);
          lista.push({ id: this.nuevaTareaId(), tipo: 'caza', preguntaId: p.id });
        }
        break;
      }
    }
  }

  elegirPregunta(e, bloque, uso, rival = null) {
    const S = this.S;
    const vistos = new Set([...(e.vistas || []), ...(rival?.vistas || [])]);
    let cands = this.B.PREGUNTAS.filter(p => p.bloque === bloque && p.uso.includes(uso) && !p.uso.includes('salida'));
    if (uso === 'duelo') cands = cands.filter(p => p.tipo === 'calculo').length ? cands.filter(p => p.tipo === 'calculo') : cands;
    let libres = cands.filter(p => !vistos.has(p.id));
    if (!libres.length) libres = cands;
    const minUso = Math.min(...libres.map(p => S.usos[p.id] || 0));
    const p = azarDe(S, libres.filter(q => (S.usos[q.id] || 0) === minUso));
    S.usos[p.id] = (S.usos[p.id] || 0) + 1;
    (e.vistas = e.vistas || []).push(p.id);
    if (rival) (rival.vistas = rival.vistas || []).push(p.id);
    return p;
  }

  empezarReto(e, ahora) {
    const t = e.tarea;
    const p = this.idx[t.preguntaId];
    t.etapa = 'reto'; t.inicioReto = ahora;
    t.limite = ahora + p.tiempo + (t.extra || 0);
    this.S.version++;
    return { ok: true };
  }

  responderPregunta(e, opcion, ahora) {
    const S = this.S, C = this.C;
    const t = e.tarea;
    const p = this.idx[t.preguntaId];
    const correcto = opcion === p.correcta;
    const inicio = t.inicioReto ?? t.inicio;
    const rapido = correcto && (ahora - inicio) <= p.tiempo / 2;
    const base = { correcto, correcta: p.correcta, elegida: opcion, textoCorrecto: p.opciones[p.correcta].t, explicacion: p.explicacion, porque: opcion != null && !correcto ? p.opciones[opcion]?.porque : null, preguntaId: p.id };
    if (t.tipo !== 'practica') {
      e.stats.intentos++; if (correcto) e.stats.aciertos++;
      if (S.turnoStats) { S.turnoStats.intentos++; if (correcto) S.turnoStats.aciertos++; }
    }
    switch (t.tipo) {
      case 'practica': {
        const d = correcto ? this.mover(e, C.practica) : 0;
        e.ultimoResultado = { ...base, titulo: correcto ? '¡Bien! Así se juega.' : 'Casi. Así se juega.', delta: d };
        break;
      }
      case 'desafio': {
        let premio = 0;
        if (correcto) {
          premio = Math.max(1, C.premioDesafio - (S.evento?.id === 'competidor' ? 2 : 0)) + (rapido ? C.bonoRapidez : 0);
          const i = e.items.indexOf('tasaBaja');
          if (i >= 0) { e.items.splice(i, 1); premio *= 2; base.tasaBaja = true; }
        }
        const d = this.mover(e, premio);
        e.ultimoResultado = { ...base, titulo: correcto ? (rapido ? '¡Correcto y rápido!' : '¡Correcto!') : (opcion == null ? '¡Se acabó el tiempo!' : 'No era esa'), delta: d };
        break;
      }
      case 'caza': {
        const d = correcto ? this.mover(e, C.premioMinijuegoCasilla) : 0;
        e.ultimoResultado = { ...base, titulo: correcto ? '¡Cazaste el error!' : 'El error se escapó', delta: d };
        break;
      }
      case 'dueloBanco': {
        const d = correcto ? this.mover(e, C.premioDueloBanco) : 0;
        e.ultimoResultado = { ...base, titulo: correcto ? '¡Le ganaste al Banco!' : 'El Banco gana esta vez', delta: d };
        break;
      }
      case 'duelo': {
        const D = S.duelos[t.dueloId];
        D.respuestas[e.id] = { correcto, t: ahora, opcion };
        e.ultimoResultado = { ...base, titulo: 'Esperando al rival…', delta: 0, esperandoDuelo: true };
        this.revisarDuelo(t.dueloId, ahora);
        break;
      }
    }
    this.terminarTarea(e, ahora);
    return { ok: true, correcto };
  }

  revisarDuelo(dueloId, ahora) {
    const S = this.S, D = S.duelos[dueloId];
    if (D.cerrado) return;
    const ra = D.respuestas[D.a], rb = D.respuestas[D.b];
    // Gana el primero en acertar. Si el primero que acierta ya respondió, se cierra sin esperar al otro.
    const aciertos = [ra && ra.correcto ? { id: D.a, t: ra.t } : null, rb && rb.correcto ? { id: D.b, t: rb.t } : null].filter(Boolean).sort((x, y) => x.t - y.t);
    const ambos = ra && rb;
    let ganador = null;
    if (aciertos.length && (ambos || aciertos[0])) ganador = aciertos[0].id;
    if (!ganador && !ambos) return; // falta que el otro responda
    if (ganador && !ambos) {
      // cerramos el duelo: el otro equipo pierde su oportunidad
      const otro = ganador === D.a ? D.b : D.a;
      const eo = this.eq(otro);
      if (eo.tarea?.dueloId === dueloId) {
        D.respuestas[otro] = { correcto: false, t: ahora, opcion: null, tarde: true };
        const p = this.idx[D.preguntaId];
        eo.ultimoResultado = { titulo: 'Tu rival respondió primero', correcto: false, correcta: p.correcta, textoCorrecto: p.opciones[p.correcta].t, explicacion: p.explicacion, preguntaId: p.id, delta: 0 };
        eo.stats.intentos++;
        if (S.turnoStats) S.turnoStats.intentos++;
        this.siguienteTarea(eo, ahora);
      }
    }
    D.cerrado = true;
    const p = this.idx[D.preguntaId];
    if (ganador) {
      const g = this.eq(ganador), perd = this.eq(ganador === D.a ? D.b : D.a);
      const golpe = this.golpe(perd, Math.min(this.C.robarDuelo, perd.monedas), 'el duelo');
      const robado = -golpe.delta;
      this.mover(g, robado);
      g.stats.duelosGanados++;
      g.ultimoResultado = { ...g.ultimoResultado, titulo: `⚔️ ¡Ganaste el duelo! +${robado}`, delta: robado, esperandoDuelo: false, correcto: true, correcta: p.correcta, textoCorrecto: p.opciones[p.correcta].t, explicacion: p.explicacion };
      perd.ultimoResultado = { ...perd.ultimoResultado, titulo: golpe.bloqueado ? '⚔️ Perdiste el duelo, pero el escudo te protegió' : `⚔️ Perdiste el duelo: −${robado}`, delta: -robado, esperandoDuelo: false };
      this.log(`⚔️ ${g.nombre} gana el duelo a ${perd.nombre}.`);
      const dt = (S.duelosTurno || []).find(x => x.id === dueloId); if (dt) dt.ganador = g.id;
    } else {
      for (const id of [D.a, D.b]) { const x = this.eq(id); x.ultimoResultado = { ...x.ultimoResultado, titulo: '⚔️ Duelo empatado: nadie acertó', esperandoDuelo: false }; }
    }
    S.version++;
  }

  responderEstrella(e, opcion, ahora) {
    const t = e.tarea;
    const s = this.idxEstrella[t.estrellaId];
    const precio = this.precioEstrella(e);
    if (opcion === -1 || opcion == null) {
      e.ultimoResultado = { titulo: '⭐ Dejaste pasar la estrella', texto: 'Será en la próxima.', delta: 0 };
    } else if (opcion === s.correcta) {
      this.mover(e, -precio, 'estrella');
      e.estrellas++; e.stats.estrellasCompradas++;
      e.ultimoResultado = { titulo: '⭐ ¡Sello Buen Negocio conseguido!', texto: `Pagaste ${precio} monedas. ${s.explicacion}`, delta: -precio, estrella: true };
      this.log(`⭐ ${e.nombre} consiguió una estrella.`);
      this.S.estrellaMovida = true;
    } else {
      e.ultimoResultado = { titulo: '⭐ Esta vez no era esa', texto: `${s.opciones[s.correcta].t}. ${s.explicacion} No pagaste nada.`, delta: 0 };
    }
    this.terminarTarea(e, ahora);
    return { ok: true };
  }

  decidirInversion(e, si, ahora) {
    const C = this.C;
    const restantes = this.C.zonas.length - 1 - this.S.zona;
    if (si && e.monedas >= C.inversion.costo) {
      this.mover(e, -C.inversion.costo);
      e.inversiones.push({ zona: this.S.zona });
      e.stats.invirtio++;
      e.ultimoResultado = { titulo: '🏗️ Invertiste', texto: `Pagaste ${C.inversion.costo}. Recibirás ${C.inversion.flujoPorZona} por cada zona que falte (${restantes}) y ${C.inversion.salvamento} más al final.`, delta: -C.inversion.costo };
    } else {
      e.ultimoResultado = { titulo: '🏗️ No invertiste', texto: restantes <= 1 ? 'Buena lectura: con tan pocas zonas por delante, esa inversión no alcanzaba a devolverse.' : 'Guardaste tus monedas.', delta: 0 };
    }
    this.terminarTarea(e, ahora);
    return { ok: true };
  }

  comprar(e, itemId, ahora) {
    const it = this.C.tienda.find(x => x.id === itemId);
    if (it && e.monedas >= it.precio && e.items.length < this.C.maxItems) {
      this.mover(e, -it.precio, 'tienda');
      e.items.push(it.id);
      e.stats.compras[it.id] = (e.stats.compras[it.id] || 0) + 1;
      e.ultimoResultado = { titulo: `🛍️ Compraste ${it.nombre}`, texto: it.desc, delta: -it.precio };
    } else {
      e.ultimoResultado = { titulo: '🛍️ Saliste de la tienda', texto: itemId ? 'No te alcanzó o ya llevas el máximo de objetos.' : 'Sin compras esta vez.', delta: 0 };
    }
    this.terminarTarea(e, ahora);
    return { ok: true };
  }

  ordenar(e, orden, ahora) {
    const t = e.tarea;
    const o = this.B.MG_ORDENA.find(x => x.id === t.ordenaId);
    const n = o.pasos.length;
    const bien = Array.isArray(orden) ? orden.filter((v, i) => v === i).length : 0;
    let d = 0;
    if (bien === n) d = this.mover(e, this.C.premioMinijuegoCasilla);
    else if (bien >= Math.ceil(n / 2)) d = this.mover(e, this.C.premioMinijuegoCasillaParcial);
    e.ultimoResultado = { titulo: bien === n ? '🧩 ¡Orden perfecto!' : `🧩 ${bien} de ${n} en su lugar`, texto: 'Orden correcto: ' + o.pasos.join(' → '), delta: d };
    this.terminarTarea(e, ahora);
    return { ok: true, bien };
  }

  cerrarTurno() {
    const S = this.S;
    if (S.estrellaMovida) {
      const vieja = S.estrellaPos;
      let nueva = vieja;
      while (nueva === vieja) nueva = azarEntero(S, 0, 11);
      S.estrellaPos = nueva; S.estrellaMovida = false;
      this.log('⭐ La estrella cambió de lugar.');
    }
  }

  // ───────── mini-juegos globales ─────────
  entrarApuesta(ahora) {
    for (const e of this.S.equipos) {
      e.apuesta = 0;
      this.ponerTareas(e, [{ id: this.nuevaTareaId(), tipo: 'apuesta', max: Math.min(this.C.apuestaMax, e.monedas) }], ahora);
      e.tarea.limite = ahora + this.C.tiempos.apuesta;
    }
  }
  apostar(e, monto, ahora) {
    const m = Math.max(0, Math.min(Math.floor(Number(monto) || 0), this.C.apuestaMax, e.monedas));
    e.apuesta = m;
    e.ultimoResultado = { titulo: '🎲 Apuesta registrada', texto: m ? `Apostaste ${m} a quedar en el top 3.` : 'No apostaste.', delta: 0 };
    this.terminarTarea(e, ahora);
    return { ok: true };
  }

  entrarMinijuego(ahora) {
    const S = this.S;
    const tipo = this.zonaActual().minijuego;
    let datos;
    if (tipo === 'entra') datos = { items: barajar(S, this.B.MG_ENTRA.map((_, i) => i)) };
    else if (tipo === 'carrera') datos = { items: barajar(S, this.B.MG_CARRERA.map((_, i) => i)) };
    else datos = { termometro: azarDe(S, this.B.MG_TERMOMETRO).id };
    S.mg = { tipo, datos, inicio: ahora, resultados: null };
    const dur = this.C.tiempos.minijuegoGlobal[tipo];
    for (const e of S.equipos) {
      e.mg = null;
      this.ponerTareas(e, [{ id: this.nuevaTareaId(), tipo: 'mg', mg: tipo }], ahora);
      e.tarea.limite = ahora + dur;
    }
  }
  respuestaMinijuego(e, respuestas, ahora) {
    const S = this.S, mg = S.mg;
    let puntaje = 0;
    if (mg.tipo === 'entra' || mg.tipo === 'carrera') {
      const fuente = mg.tipo === 'entra' ? this.B.MG_ENTRA : this.B.MG_CARRERA;
      (respuestas || []).forEach((r, k) => {
        const it = fuente[mg.datos.items[k]];
        if (!it) return;
        if (mg.tipo === 'entra' ? r === it.entra : r === it.ok) puntaje++;
      });
    } else {
      const T = this.B.MG_TERMOMETRO.find(x => x.id === mg.datos.termometro);
      const v = Number(Array.isArray(respuestas) ? respuestas[0] : respuestas);
      puntaje = Number.isFinite(v) ? -Math.abs(v - T.respuesta) / (T.max - T.min) : -999;
      e.mgValor = Number.isFinite(v) ? v : null;
    }
    e.mg = { puntaje, t: respuestas == null ? Infinity : ahora - mg.inicio };
    e.ultimoResultado = { titulo: '🎮 Respuesta enviada', texto: 'Mira la pantalla para los resultados.', delta: 0 };
    this.terminarTarea(e, ahora);
    return { ok: true };
  }
  cerrarMinijuego() {
    const S = this.S, C = this.C;
    const orden = [...S.equipos].sort((a, b) => (b.mg?.puntaje ?? -1e9) - (a.mg?.puntaje ?? -1e9) || (a.mg?.t ?? 1e9) - (b.mg?.t ?? 1e9));
    const res = orden.map((e, i) => {
      const premio = i < C.premiosMinijuegoGlobal.length && e.mg && e.mg.t !== Infinity ? C.premiosMinijuegoGlobal[i] : 0;
      let delta = this.mover(e, premio);
      let apuestaRes = 0;
      if (e.apuesta) {
        if (i < 3 && e.mg && e.mg.t !== Infinity) apuestaRes = this.mover(e, e.apuesta);
        else apuestaRes = this.mover(e, -e.apuesta);
      }
      delta += apuestaRes;
      e.ultimoResultado = { titulo: `🎮 Puesto ${i + 1} en el mini-juego`, texto: `${premio ? `Premio +${premio}. ` : ''}${e.apuesta ? `Apuesta ${apuestaRes >= 0 ? 'ganada' : 'perdida'}: ${apuestaRes >= 0 ? '+' : ''}${apuestaRes}.` : ''}`, delta };
      return { id: e.id, puesto: i + 1, puntaje: e.mg?.puntaje ?? null, valor: e.mgValor ?? null, premio, apuesta: e.apuesta, apuestaRes };
    });
    S.mg.resultados = res;
  }

  // ───────── jefe final ─────────
  prepararJefe() {
    this.S.jefe = { fase: 0, resultados: {} };
    this.S.evento = null;
  }
  entrarJefe(fase, ahora) {
    this.S.jefe.fase = fase;
    for (const e of this.S.equipos) {
      e.jefe[fase] = null;
      this.ponerTareas(e, [{ id: this.nuevaTareaId(), tipo: 'jefe', fase }], ahora);
      e.tarea.limite = ahora + this.C.tiempos.jefeFase;
    }
  }
  respuestaJefe(e, a, ahora) {
    const fase = e.tarea.fase;
    const F = this.B.JEFE[fase === 1 ? 'fase1' : 'fase2'];
    const proyecto = a?.proyecto ?? null;
    const just = a?.justificacion ?? null;
    const okP = proyecto === F.correcto;
    const okJ = just != null && F.justificaciones[just]?.ok === true;
    e.jefe[fase] = { proyecto, just, okP, okJ, t: ahora };
    e.ultimoResultado = { titulo: '🏔️ Decisión enviada a la Junta', texto: 'Esperen el veredicto en la pantalla.', delta: 0 };
    this.terminarTarea(e, ahora);
    return { ok: true };
  }
  cerrarJefe(fase) {
    const F = this.B.JEFE[fase === 1 ? 'fase1' : 'fase2'];
    const res = [];
    for (const e of this.S.equipos) {
      const r = e.jefe[fase] || { okP: false, okJ: false };
      let delta = 0, estrella = false;
      if (r.okP && r.okJ) { e.estrellas++; estrella = true; }
      else if (r.okP) delta = this.mover(e, 5);
      e.ultimoResultado = {
        titulo: estrella ? '🏔️ ¡La Junta aprueba! +1 ⭐' : r.okP ? '🏔️ Proyecto correcto, justificación floja: +5' : '🏔️ La Junta no aprueba tu decisión',
        texto: `Respuesta: ${F.correcto}. ${F.justificaciones.find(j => j.ok).t}.`, delta, estrella,
      };
      res.push({ id: e.id, proyecto: r.proyecto, okP: r.okP, okJ: r.okJ, estrella });
    }
    this.S.jefe.resultados[fase] = res;
  }

  // ───────── final ─────────
  calcularBonus() {
    const S = this.S;
    const E = S.equipos;
    const premiar = (clave, nombre, desc, valor, minimo) => {
      const max = Math.max(...E.map(valor));
      if (!(max >= minimo)) return { clave, nombre, desc, ganadores: [] };
      const g = E.filter(e => valor(e) === max);
      g.forEach(e => { e.estrellas++; });
      return { clave, nombre, desc, ganadores: g.map(e => e.id), valor: max };
    };
    // Remontada: cuántos puestos escaló desde su peor puesto (ranking antes de los bonus)
    const R = this.ranking();
    const subida = Object.fromEntries(R.map((e, i) => [e.id, e.stats.peorPuesto - (i + 1)]));
    const CATALOGO = {
      analista: ['Estrella del Analista', 'Más respuestas correctas', e => e.stats.aciertos, 1],
      duelista: ['Estrella del Duelista', 'Más duelos ganados', e => e.stats.duelosGanados, 1],
      remontada: ['Estrella de la Remontada', 'Más puestos escalados desde su peor momento', e => subida[e.id], 2],
      sobreviviente: ['Estrella del Sobreviviente', 'Más monedas perdidas por costos, impuestos, eventos y duelos (¡y siguió en pie!)', e => e.stats.perdidas || 0, 1],
      inversionista: ['Estrella del Inversionista', 'Más inversiones hechas a tiempo', e => e.stats.invirtio, 1],
    };
    const cfg = this.C.bonus ?? { fijos: ['analista', 'duelista', 'remontada'], aleatorios: 0, pool: [] };
    const sorteados = barajar(S, cfg.pool).slice(0, cfg.aleatorios);
    S.bonus = [...cfg.fijos, ...sorteados].map(k => premiar(k, ...CATALOGO[k]));
  }

  calcularPodio() {
    const S = this.S, C = this.C;
    // Salvamento de las inversiones
    for (const e of S.equipos) if (e.inversiones.length) this.mover(e, e.inversiones.length * C.inversion.salvamento);
    S.podio = this.ranking().map((e, i) => {
      const flujos = [-C.monedasIniciales, ...e.flujos];
      return { id: e.id, puesto: i + 1, estrellas: e.estrellas, monedas: e.monedas, flujos, vpn: calcVpn(C.tmar, flujos) };
    });
  }

  entrarSalida(ahora) {
    const ids = this.B.PREGUNTAS.filter(p => p.uso.includes('salida')).map(p => p.id);
    this.S.salidaIds = ids;
    for (const e of this.S.equipos) {
      this.ponerTareas(e, [{ id: this.nuevaTareaId(), tipo: 'salida', ids }], ahora);
      e.tarea.limite = ahora + this.C.tiempos.salida;
    }
  }
  respuestaSalida(e, respuestas, ahora) {
    const ids = this.S.salidaIds;
    const r = ids.map((id, k) => (respuestas?.[k] ?? null));
    e.salida = { respuestas: r, aciertos: ids.filter((id, k) => r[k] === this.idx[id].correcta).length, total: ids.length };
    e.ultimoResultado = { titulo: '✅ ¡Gracias!', texto: `Acertaste ${e.salida.aciertos} de ${e.salida.total}.`, delta: 0 };
    this.terminarTarea(e, ahora);
    return { ok: true };
  }

  // ───────── vistas (sin respuestas) ─────────
  vistaTarea(e, ahora) {
    const t = e.tarea;
    if (!t) return null;
    const restante = t.limite != null ? Math.max(0, t.limite - ahora) : null;
    const base = { id: t.id, tipo: t.tipo, restante };
    const preg = id => {
      const p = this.idx[id];
      return { enunciado: p.enunciado, opciones: p.opciones.map(o => o.t), ocultas: t.ocultas || [], tiempo: p.tiempo, bloque: p.bloque };
    };
    switch (t.tipo) {
      case 'tirar': return { ...base, puedeDoble: e.items.includes('dadoDoble'), caras: this.S.evento?.id === 'paro' ? 4 : 6 };
      case 'desafio': {
        const p = this.idx[t.preguntaId];
        return { ...base, etapa: t.etapa, leccion: this.B.LECCIONES[p.leccion], ...(t.etapa === 'reto' ? preg(t.preguntaId) : { bloque: p.bloque }), calculadora: !!t.usoCalculadora };
      }
      case 'duelo': return { ...base, rival: this.eq(t.rival)?.nombre, ...preg(t.preguntaId), calculadora: !!t.usoCalculadora };
      case 'dueloBanco': case 'caza': case 'practica': return { ...base, ...preg(t.preguntaId), calculadora: !!t.usoCalculadora };
      case 'estrella': {
        const s = this.idxEstrella[t.estrellaId];
        return { ...base, precio: this.precioEstrella(e), enunciado: s.enunciado, opciones: s.opciones.map(o => o.t) };
      }
      case 'invertir': {
        const C = this.C; const restantes = C.zonas.length - 1 - this.S.zona;
        return { ...base, costo: C.inversion.costo, flujo: C.inversion.flujoPorZona, salvamento: C.inversion.salvamento, zonasRestantes: restantes, tmar: C.tmar };
      }
      case 'tienda': return { ...base, catalogo: this.C.tienda, items: e.items, max: this.C.maxItems };
      case 'ordena': {
        const o = this.B.MG_ORDENA.find(x => x.id === t.ordenaId);
        return { ...base, titulo: o.titulo, pasos: t.mezcla.map(i => ({ i, t: o.pasos[i] })) };
      }
      case 'apuesta': return { ...base, max: t.max, minijuego: this.zonaActual().minijuego };
      case 'mg': {
        const mg = this.S.mg;
        if (mg.tipo === 'entra') return { ...base, mg: 'entra', items: mg.datos.items.map(i => this.B.MG_ENTRA[i].t) };
        if (mg.tipo === 'carrera') return { ...base, mg: 'carrera', items: mg.datos.items.map(i => { const x = this.B.MG_CARRERA[i]; return { t: x.t, a: x.a, b: x.b }; }) };
        const T = this.B.MG_TERMOMETRO.find(x => x.id === mg.datos.termometro);
        return { ...base, mg: 'termometro', enunciado: T.enunciado, min: T.min, max: T.max, salto: T.salto, unidad: T.unidad };
      }
      case 'jefe': {
        const F = this.B.JEFE[t.fase === 1 ? 'fase1' : 'fase2'];
        return { ...base, fase: t.fase, pregunta: F.pregunta, proyectos: this.B.JEFE.proyectos.map(p => ({ id: p.id, nombre: p.nombre })), justificaciones: F.justificaciones.map(j => j.t) };
      }
      case 'salida': return { ...base, preguntas: t.ids.map(id => preg(id)) };
    }
    return base;
  }

  vistaPublica(ahora) {
    const S = this.S, C = this.C;
    const enDuelo = S.fase === 'casillas' || S.fase === 'resultado_turno' ? (S.duelosTurno || []) : [];
    return {
      version: S.version, fase: S.fase, zona: S.zona, turno: S.turno,
      turnosZona: C.turnosPorZona[S.zona],
      restanteFase: S.faseLimite != null ? Math.max(0, S.faseLimite - ahora) : null,
      estrellaPos: S.estrellaPos, precioEstrella: this.precioEstrella(),
      anillo: this.anillo(), evento: S.evento, semillaPara: S.semillaPara ?? [], subsidiados: S.subsidiados ?? [], regalos: S.regalos ?? [],
      equipos: S.equipos.map(e => ({
        id: e.id, nombre: e.nombre, mascota: e.mascota, integrantes: e.integrantes,
        monedas: e.monedas, estrellas: e.estrellas, pos: e.pos, posAnterior: e.posAnterior ?? e.pos,
        dado: e.dado, items: e.items, inversiones: e.inversiones.length,
        rol: e.rol ?? 0, ocupado: !!(e.tarea || e.cola.length), tareaTipo: e.tarea?.tipo ?? null,
        conectado: e.conectado, aciertos: e.stats.aciertos, intentos: e.stats.intentos,
        ultimo: e.ultimoResultado ? { titulo: e.ultimoResultado.titulo, delta: e.ultimoResultado.delta } : null,
      })),
      ranking: this.ranking().map(e => e.id),
      duelos: enDuelo,
      turnoStats: S.turnoStats,
      mg: S.mg ? { tipo: S.mg.tipo, resultados: S.mg.resultados, termometro: S.mg.datos.termometro ? this.B.MG_TERMOMETRO.find(x => x.id === S.mg.datos.termometro) : null } : null,
      jefe: S.jefe,
      bonus: S.bonus, podio: S.podio ?? null,
      log: S.log.slice(-6),
    };
  }

  vistaEquipo(id, ahora) {
    const e = this.eq(id);
    if (!e) return null;
    return {
      id: e.id, nombre: e.nombre, mascota: e.mascota, integrantes: e.integrantes,
      monedas: e.monedas, estrellas: e.estrellas, items: e.items, rol: e.rol ?? 0,
      tarea: this.vistaTarea(e, ahora),
      ultimo: e.ultimoResultado,
      salida: e.salida,
    };
  }
}
