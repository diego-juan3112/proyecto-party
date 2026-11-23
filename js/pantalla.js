// Pantalla proyectada: es el ANFITRIÓN. Corre el motor, publica vistas y dibuja el tablero.
import { h, limpiar, mmss, num, dinero, signo, dadoSVG, ICONOS_CASILLA, ICONOS_ITEM, descargar, guardar, leer, borrar, reducirMovimiento } from './ui.js';
import { mascotaSVG, mascota } from './mascotas.js';
import { CONFIG } from './config.js';
import * as BANCO from '../data/preguntas.js';
import { Motor } from './motor.js';
import { abrirSalaAnfitrion } from './red.js';
import { planBot, claveTarea } from './bots.js';
import { renderTarea, renderResultado, norm, asignarRoles } from './control.js';

const CLAVE_HOST = 'expedicion-vpn:anfitrion';
const ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const NOMBRES_FASE = {
  lobby: 'Abordaje', intro: 'Reglas', practica: 'Pregunta de práctica', zona_intro: 'Llegada a la zona',
  tirar: 'Tiren el dado', mover: 'Avanzando', casillas: 'Resuelvan su casilla en el celular', resultado_turno: 'Así quedó el turno',
  apuesta: 'Apuestas', minijuego: 'Mini-juego', minijuego_res: 'Resultados del mini-juego',
  jefe_intro: 'Jefe final', jefe1: 'Junta: fase 1', jefe1_res: 'Defensa de los Voceros', jefe2: 'Junta: el giro', jefe2_res: 'Veredicto final',
  bonus: 'Estrellas sorpresa', podio: 'Podio', cierre: 'Cierre', salida: 'Preguntas de salida', fin: 'Fin',
};
const PASO_TURNO = { tirar: 1, mover: 1, casillas: 2, resultado_turno: 3 };
const MG_NOMBRE = { entra: '¿Entra o no entra al flujo?', carrera: 'Carrera del descuento', termometro: 'Termómetro del riesgo' };
const MG_INSTR = {
  entra: 'En el celular aparecen 10 conceptos. Toquen ENTRA si va en el flujo de caja del proyecto, o NO ENTRA si no. Gana quien acierte más y más rápido.',
  carrera: '10 preguntas relámpago de dos botones sobre descuento y criterios. Gana quien acierte más y más rápido.',
  termometro: 'Muevan el deslizador hasta el valor crítico. Gana quien más se acerque.',
};

function nuevoCodigo() { let c = ''; for (let i = 0; i < 4; i++) c += ALFABETO[Math.floor(Math.random() * ALFABETO.length)]; return c; }

export async function iniciarPantalla(raiz, { red, demo = 0 }) {
  const q = new URLSearchParams(location.search);
  const velocidad = Number(q.get('vel') || (demo ? 3 : 1));
  const guardado = !demo ? leer(CLAVE_HOST) : null;

  // ───── Reloj del juego (con pausa y velocidad) ─────
  const reloj = { base: performance.now(), acumulado: guardado?.t ?? 0, pausado: false };
  const ahora = () => (reloj.pausado ? reloj.acumulado : reloj.acumulado + ((performance.now() - reloj.base) / 1000) * velocidad);
  const pausar = () => { if (!reloj.pausado) { reloj.acumulado = ahora(); reloj.pausado = true; } else { reloj.base = performance.now(); reloj.pausado = false; } pintarTodo(); };

  // ───── Motor ─────
  let codigo, motor;
  if (guardado && guardado.estado && guardado.estado.fase !== 'fin' && confirm(`Hay una partida guardada (sala ${guardado.codigo}, fase "${NOMBRES_FASE[guardado.estado.fase]}"). ¿Continuarla?\n\nAceptar = continuar · Cancelar = nueva partida`)) {
    codigo = guardado.codigo;
    motor = new Motor({ config: CONFIG, banco: BANCO, estado: guardado.estado });
  } else {
    borrar(CLAVE_HOST);
    codigo = nuevoCodigo();
    motor = new Motor({ config: CONFIG, banco: BANCO, semilla: Math.floor(Math.random() * 2 ** 31) });
    reloj.acumulado = 0;
  }
  // ───── Red ─────
  const ui = { conectado: false, modalEquipo: null, modalLocal: {}, ultimaVersion: -1, tableroZona: null, posMostrada: {}, llegadasVistas: new Set() };
  const eventosRed = {
    onUnirse: datos => {
      const r = motor.unirse(norm(datos), ahora());
      if (r.id) sala.escucharEquipo(r.id);
      publicar(); if (ui.listo) pintarTodo();
      return r;
    },
    onAccion: (id, a) => { motor.accion(id, norm(a), ahora()); motor.tick(ahora()); },
    onConexion: ok => { ui.conectado = ok; if (ui.listo) pintarCabecera(); },
  };
  let sala;
  // Si el código ya lo reclamó otro navegador (reglas: un dueño por sala), se prueba otro código.
  // Una partida recuperada conserva su código: el dueño es el mismo navegador.
  const intentos = codigo === guardado?.codigo ? 1 : 5;
  let ultimoError = null;
  for (let i = 0; i < intentos && !sala; i++) {
    try {
      sala = await abrirSalaAnfitrion(red, codigo, eventosRed);
    } catch (e) {
      ultimoError = e;
      console.warn(`No se pudo abrir la sala ${codigo}:`, e);
      if (i + 1 < intentos) codigo = nuevoCodigo();
    }
  }
  if (!sala) {
    console.error('No se pudo abrir ninguna sala:', ultimoError);
    limpiar(raiz, h('div.portada', h('div.portada-caja', h('h1', 'Sin conexión'), h('p.sub', 'No se pudo abrir la sala en Firebase. Revisa el internet del portátil (y que la autenticación anónima esté activada). Para jugar sin internet, abre la pantalla en modo local.'), h('a.boton', { href: '?modo=pantalla&red=local' }, 'Abrir en modo local'))));
    return;
  }
  const urlJugar = `${location.origin}${location.pathname}?sala=${codigo}${red === 'local' ? '&red=local' : ''}`;
  motor.S.equipos.forEach(e => sala.escucharEquipo(e.id));

  // ───── Demo con bots ─────
  const bots = {};
  if (demo) {
    const nombres = ['Los del Tinto', 'Arepa Capital', 'Yipao Ventures', 'Guadua S.A.S.', 'Colibrí Fintech', 'Ruana & Cía', 'Panela Pro', 'La Chiva Feliz', 'Sombrero Fino', 'Mochila Andina'];
    for (let i = 0; i < Math.min(demo, 10); i++) {
      const r = motor.unirse({ nombre: nombres[i], mascota: CONFIG.mascotas[i].id, integrantes: ['Ana', 'Luis', 'Sara', 'Tomás'].slice(0, 2 + (i % 3)) }, 0);
      bots[r.id] = { precision: 0.45 + Math.random() * 0.45, velocidad: 0.7 + Math.random() * 0.5, agenda: null };
    }
  }

  // ───── Estructura de la pantalla ─────
  const nodos = {
    letrero: h('div.letrero'), fase: h('div.fase'), crono: h('div.crono'), red: h('span.red-estado', { title: 'Conexión' }),
    controles: h('div.controles'), escenario: h('div.escenario'), marcador: h('div.marcador', { 'aria-label': 'Marcador' }), log: h('div.log'), modal: h('div'),
  };
  limpiar(raiz, h('div.pantalla',
    h('div', h('div.cabecera', nodos.letrero, nodos.fase, nodos.crono, nodos.red, nodos.controles), h('div.franja')),
    h('div.cuerpo', nodos.escenario, nodos.marcador),
    h('div.pie', nodos.log, h('span', 'Únanse en ', h('span.url', urlJugar.replace(/^https?:\/\//, '')))),
    nodos.modal));

  ui.listo = true;

  // Controles del operador
  limpiar(nodos.controles,
    h('button', { on: { click: pausar }, title: 'Pausar o reanudar (barra espaciadora)' }, '⏯ Pausa'),
    h('button', { on: { click: siguiente }, title: 'Pasar a lo siguiente (flecha derecha)' }, '⏭ Siguiente'),
    h('button', { on: { click: pantallaCompleta }, title: 'Pantalla completa (F)' }, '⛶'),
    h('button', { on: { click: exportarCSV }, title: 'Descargar resultados' }, '⬇ CSV'));
  addEventListener('keydown', ev => {
    if (ev.target.closest('input, textarea') || ui.modalEquipo) return;
    if (ev.key === ' ') { ev.preventDefault(); pausar(); }
    else if (ev.key === 'ArrowRight') siguiente();
    else if (ev.key.toLowerCase() === 'f') pantallaCompleta();
  });
  function pantallaCompleta() { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.(); else document.exitFullscreen?.(); }
  function siguiente() {
    if (motor.S.fase === 'lobby') { if (motor.S.equipos.length) motor.iniciar(ahora()); }
    else motor.forzar(ahora());
    publicar(); pintarTodo();
  }

  // ───── Publicación ─────
  function publicar() {
    const t = ahora();
    sala.publicarEstado(motor.vistaPublica(t));
    const mapa = {};
    for (const e of motor.S.equipos) mapa[e.id] = motor.vistaEquipo(e.id, t);
    if (sala.publicarEquipos) sala.publicarEquipos(mapa);
    else for (const [id, v] of Object.entries(mapa)) sala.publicarEquipo(id, v);
    if (!demo) guardar(CLAVE_HOST, { codigo, estado: motor.S, t });
  }

  // ───── Bucle principal ─────
  setInterval(() => {
    const t = ahora();
    if (!reloj.pausado) {
      if (demo) moverBots(t);
      motor.tick(t);
    }
    if (motor.S.version !== ui.ultimaVersion) {
      ui.ultimaVersion = motor.S.version;
      publicar(); pintarTodo();
    }
    pintarCrono();
  }, 200);

  function moverBots(t) {
    if (motor.S.fase === 'lobby' && t > 4) { motor.iniciar(t); return; }
    for (const e of motor.S.equipos) {
      const b = bots[e.id]; if (!b) continue;
      const k = claveTarea(e.tarea);
      if (!k) continue;
      if (!b.agenda || b.agenda.k !== k) { const p = planBot(motor, e.id, b, Math.random); if (p) b.agenda = { k, t: t + p.delay, accion: p.accion }; }
      if (b.agenda && b.agenda.k === k && t >= b.agenda.t) { motor.accion(e.id, b.agenda.accion, t); b.agenda = null; }
    }
  }

  // ═════════════════════ Dibujo ═════════════════════
  function pintarTodo() { pintarCabecera(); pintarEscenario(); pintarMarcador(); pintarPie(); pintarModal(); }

  function pintarCabecera() {
    const S = motor.S;
    const enZona = !['lobby', 'intro', 'practica'].includes(S.fase) && !S.fase.startsWith('jefe') && !['bonus', 'podio', 'cierre', 'salida', 'fin'].includes(S.fase);
    const z = CONFIG.zonas[S.zona];
    if (enZona) limpiar(nodos.letrero, h('span.bloque', { style: { '--c': z.color } }, z.bloque), h('span.nombre', `${z.icono} ${z.nombre}`));
    else if (S.fase.startsWith('jefe')) limpiar(nodos.letrero, h('span.bloque', '🏔️'), h('span.nombre', 'Cumbre del Nevado'));
    else limpiar(nodos.letrero, h('span.nombre', 'Expedición VPN'));
    const turno = ['tirar', 'mover', 'casillas', 'resultado_turno'].includes(S.fase) ? h('span', ` · turno ${S.turno + 1} de ${CONFIG.turnosPorZona[S.zona]}`) : null;
    limpiar(nodos.fase, PASO_TURNO[S.fase] ? h('span.etapa', `Paso ${PASO_TURNO[S.fase]} de 3`) : null, h('b', NOMBRES_FASE[S.fase] || S.fase), turno, reloj.pausado ? h('b', { style: { color: 'var(--amarillo)' } }, ' · en pausa') : null);
    nodos.red.classList.toggle('ok', ui.conectado);
    nodos.red.title = ui.conectado ? `Conectado (${red})` : 'Sin conexión';
  }

  function restanteVisible() {
    const S = motor.S, t = ahora();
    if (S.faseLimite != null && !['tirar', 'casillas', 'apuesta', 'minijuego', 'jefe1', 'jefe2', 'salida', 'practica'].includes(S.fase)) return Math.max(0, S.faseLimite - t);
    const ls = S.equipos.map(e => e.tarea?.limite).filter(x => x != null);
    return ls.length ? Math.max(0, Math.max(...ls) - t) : null;
  }
  function pintarCrono() {
    const r = restanteVisible();
    nodos.crono.textContent = r == null ? '' : mmss(r);
    nodos.crono.classList.toggle('urgente', r != null && r <= 10);
  }

  function pintarPie() {
    const S = motor.S;
    nodos.log.textContent = S.log.at(-1) || 'Escaneen el QR con un celular por equipo.';
  }

  // ───── Marcador ─────
  function pintarMarcador() {
    const S = motor.S;
    const R = motor.ranking();
    const fila = (e, i) => {
      const m = mascota(e.mascota);
      const u = e.ultimoResultado;
      const mostrarDelta = ['casillas', 'resultado_turno', 'minijuego_res', 'jefe1_res', 'jefe2_res'].includes(S.fase) && u && u.delta;
      return h('button.fila-equipo', { on: { click: () => { ui.modalEquipo = e.id; ui.modalLocal = {}; pintarModal(); } }, title: 'Abrir modo presentador para este equipo' },
        h('span.puesto', i + 1),
        h('div.ficha', { style: { '--c': m.color } }, mascotaSVG(m.id)),
        h('span.quien', h('b', e.nombre, h('span.estado-tarea' + (e.tarea || e.cola.length ? '.pensando' : ''))),
          h('small', mostrarDelta ? h('span.delta.' + (u.delta > 0 ? 'pos' : 'neg'), `${signo(u.delta)} · ${u.titulo}`) : e.items.map(i2 => ICONOS_ITEM[i2]).join(' ') || `${e.stats.aciertos}/${e.stats.intentos} aciertos`)),
        h('span.est', `⭐${e.estrellas}`),
        h('span.mon', `🪙${e.monedas}`));
    };
    limpiar(nodos.marcador, h('h3', S.fase === 'lobby' ? `Equipos (${S.equipos.length}/${CONFIG.maxEquipos})` : 'Marcador'), R.map(fila));
  }

  // ───── Modal: modo presentador ─────
  function pintarModal() {
    if (!ui.modalEquipo) { limpiar(nodos.modal); return; }
    const e = motor.eq(ui.modalEquipo);
    const t = ahora();
    const vt = motor.vistaTarea(e, t);
    if (!vt || ui.modalLocal.tareaId !== vt.id + (vt.etapa || '')) ui.modalLocal = { tareaId: vt ? vt.id + (vt.etapa || '') : null };
    ui.modalLocal.repintar = () => pintarModal();
    ui.modalLocal.tics = [];
    const cerrar = () => { ui.modalEquipo = null; pintarModal(); };
    const roles = asignarRoles(e.integrantes, e.rol || 0);
    limpiar(nodos.modal, h('div.modal-fondo', { on: { click: ev => { if (ev.target === ev.currentTarget) cerrar(); } } },
      h('div.modal', { role: 'dialog', 'aria-label': `Modo presentador: ${e.nombre}` },
        h('button.boton.secundario.cerrar', { on: { click: cerrar } }, 'Cerrar'),
        h('div.tel-cabeza', h('div.ficha', { style: { '--c': mascota(e.mascota).color } }, mascotaSVG(e.mascota)), h('div.nombre', e.nombre, h('small', 'Modo presentador: responder por este equipo')), h('div.marcadores', h('span.est', `⭐ ${e.estrellas}`), h('span', `🪙 ${e.monedas}`))),
        h('div.tel-rol', e.integrantes.length ? roles.map((r, i) => [i ? ' · ' : '', r.rol, ' ', h('b', r.quien)]) : 'Sin integrantes registrados'),
        h('div.tel-cuerpo', { style: { paddingBottom: '20px' } },
          vt ? renderTarea(vt, a => { motor.accion(e.id, a, ahora()); motor.tick(ahora()); }, ui.modalLocal, { monedas: e.monedas })
            : [h('div.tarjeta.espera', h('h2', 'Sin nada pendiente'), h('p', 'Este equipo no tiene tareas en este momento.')), renderResultado(e.ultimoResultado)]))));
  }
  setInterval(() => { (ui.modalLocal.tics || []).forEach(f => f()); }, 250);

  // ───── Escenario ─────
  function pintarEscenario() {
    const S = motor.S;
    const enTablero = ['tirar', 'mover', 'casillas', 'resultado_turno'].includes(S.fase);
    if (enTablero) { pintarTablero(); return; }
    ui.tableroZona = null;
    const escenas = { zona_intro: escenaZona, lobby: escenaLobby, intro: escenaIntro, practica: escenaPractica, apuesta: escenaMinijuego, minijuego: escenaMinijuego, minijuego_res: escenaMinijuegoRes, jefe_intro: escenaJefe, jefe1: escenaJefe, jefe2: escenaJefe, jefe1_res: escenaJefeRes, jefe2_res: escenaJefeRes, bonus: escenaBonus, podio: escenaPodio, cierre: escenaCierre, salida: escenaSalida, fin: escenaFin };
    limpiar(nodos.escenario, h('div.escena', (escenas[S.fase] || (() => null))()));
  }

  // Tablero en anillo
  const posCasilla = i => { const a = (-90 + i * 30) * Math.PI / 180; return { x: 50 + 41 * Math.cos(a), y: 50 + 41 * Math.sin(a) }; };
  function pintarTablero() {
    const S = motor.S;
    if (ui.tableroZona !== S.zona || !ui.tablero) construirTablero();
    // Casillas y estrella
    ui.casillas.forEach((c, i) => c.classList.toggle('con-estrella', i === S.estrellaPos));
    const pe = posCasilla(S.estrellaPos);
    Object.assign(ui.estrella.style, { left: `${pe.x + 5.5}%`, top: `${pe.y - 5.5}%` });
    colocarFichas();
    limpiar(ui.centro, contenidoCentro());
  }
  function construirTablero() {
    const S = motor.S;
    const anillo = motor.anillo();
    ui.casillas = anillo.map((tipo, i) => {
      const p = posCasilla(i);
      return h('div.casilla', { style: { left: `${p.x}%`, top: `${p.y}%` }, title: ICONOS_CASILLA[tipo].nombre },
        h('span.icono', { 'aria-hidden': 'true' }, ICONOS_CASILLA[tipo].icono), h('span.etq', ICONOS_CASILLA[tipo].nombre), h('span.n', i));
    });
    ui.estrella = h('div.marca-estrella', { 'aria-label': 'Estrella' }, '⭐');
    ui.capaFichas = h('div.fichas-capa');
    ui.fichas = {};
    ui.centro = h('div.centro');
    ui.tablero = h('div.tablero', ui.casillas, ui.centro, ui.estrella, ui.capaFichas);
    limpiar(nodos.escenario, ui.tablero);
    ui.tableroZona = S.zona;
    ui.posMostrada = {};
  }
  function coordFicha(pos, k, n) {
    const c = posCasilla(pos);
    if (n <= 1) return c;
    const a = (k / n) * 2 * Math.PI, r = n > 4 ? 5.2 : 4;
    return { x: c.x + r * Math.cos(a), y: c.y + r * Math.sin(a) };
  }
  function colocarFichas() {
    const S = motor.S;
    const porCasilla = {};
    S.equipos.forEach(e => { (porCasilla[e.pos] = porCasilla[e.pos] || []).push(e.id); });
    for (const e of S.equipos) {
      let f = ui.fichas[e.id];
      if (!f) { const m = mascota(e.mascota); f = ui.fichas[e.id] = h('div.ficha', { style: { '--c': m.color }, title: e.nombre }, mascotaSVG(m.id)); ui.capaFichas.append(f); }
      const lista = porCasilla[e.pos];
      const destino = coordFicha(e.pos, lista.indexOf(e.id), lista.length);
      const desde = ui.posMostrada[e.id];
      const anim = S.fase === 'mover' && desde != null && desde !== e.pos && !reducirMovimiento();
      if (anim) {
        // salto casilla por casilla: el momento orquestado del juego
        const pasos = []; let p = desde; while (p !== e.pos) { p = (p + 1) % 12; pasos.push(posCasilla(p)); }
        const frames = [{ left: f.style.left, top: f.style.top }];
        pasos.forEach((c, i) => { frames.push({ left: `${c.x}%`, top: `${c.y - 4}%`, offset: (i + 0.5) / pasos.length }); frames.push({ left: `${c.x}%`, top: `${c.y}%`, offset: (i + 1) / pasos.length }); });
        frames[frames.length - 1] = { left: `${destino.x}%`, top: `${destino.y}%`, offset: 1 };
        f.animate(frames.map(fr => ({ ...fr })), { duration: Math.min(4500, 380 * pasos.length / Math.min(velocidad, 2)), easing: 'linear' });
      }
      f.style.left = `${destino.x}%`; f.style.top = `${destino.y}%`;
      ui.posMostrada[e.id] = e.pos;
    }
  }

  function contenidoCentro() {
    const S = motor.S, z = CONFIG.zonas[S.zona];
    const E = S.equipos;
    const listos = E.filter(e => !e.tarea && !e.cola.length).length;
    switch (S.fase) {
      case 'zona_intro': return h('div',
        h('div.icono-zona', z.icono), h('h2', z.nombre),
        h('p.lectura', BANCO.LECCIONES[z.leccion]),
        S.evento ? h('div.evento-tarjeta', h('b', `🌎 ${S.evento.nombre}`), S.evento.texto, h('small', S.evento.vpn)) : null,
        (S.semillaPara || []).length ? h('p', `🌱 Capital semilla: ${S.semillaPara.map(s => `${motor.eq(s.id).nombre} +${s.monto}`).join(', ')}`) : null,
        (S.regalos || []).length ? h('p', `🎁 Últimas paradas: ${S.regalos.map(r => `${motor.eq(r.id).nombre} ${ICONOS_ITEM[r.item]}`).join(', ')}`) : null);
      case 'tirar': case 'mover': return h('div',
        h('h2', S.fase === 'tirar' ? '¡Tiren el dado!' : 'Avanzando…'),
        h('p.instruccion', S.fase === 'tirar' ? '📱 Cada equipo toca el dado en su celular.' : 'Las mascotas se mueven por el anillo.'),
        h('div.dados-rejilla', E.map(e => h('div.par' + (e.dado ? '' : '.esperando'),
          h('div.ficha', { style: { '--c': mascota(e.mascota).color } }, mascotaSVG(e.mascota)),
          e.dado ? e.dado.valores.map(v => dadoSVG(v, 'dado rodando')) : dadoSVG(0, 'dado')))));
      case 'casillas': {
        const duelos = S.duelosTurno || [];
        return h('div',
          h('h2', 'Resuelvan su casilla'),
          h('p.instruccion', '📱 Miren su celular y resuelvan.'),
          h('p', `${listos} de ${E.length} equipos listos`),
          h('div.medidor', h('i', { style: { width: `${(100 * listos) / E.length}%` } })),
          duelos.length ? h('div', { style: { marginTop: '.8em' } }, duelos.map(d => h('p', `⚔️ ${motor.eq(d.a).nombre} vs ${motor.eq(d.b).nombre}${d.ganador ? ` → gana ${motor.eq(d.ganador).nombre}` : ''}`))) : null);
      }
      case 'resultado_turno': {
        const st = S.turnoStats || { intentos: 0, aciertos: 0 };
        const pct = st.intentos ? Math.round((100 * st.aciertos) / st.intentos) : null;
        return h('div',
          h('h2', 'Termómetro de la clase'),
          pct == null ? h('p', 'Nadie respondió preguntas en este turno.') : [h('p', `${st.aciertos} de ${st.intentos} respuestas correctas (${pct} %)`), h('div.medidor', h('i', { style: { width: `${pct}%`, background: pct >= 60 ? 'var(--hoja)' : pct >= 40 ? 'var(--amarillo)' : 'var(--rojo)' } }))],
          pct != null && pct < 50 ? h('p', 'Buen momento para repasar la mini-lección de la zona.') : null);
      }
    }
    return null;
  }

  // ───── Escenas ─────
  function escenaZona() {
    const S = motor.S, z = CONFIG.zonas[S.zona];
    const notas = [];
    if ((S.semillaPara || []).length) notas.push(h('div.nota-zona', h('b', '🌱 Capital semilla: '), S.semillaPara.map(s => `${motor.eq(s.id).nombre} +${s.monto}`).join(' · ')));
    if ((S.subsidiados || []).length) notas.push(h('div.nota-zona', h('b', `⭐ Subsidio (estrella a ${CONFIG.estrella.precio - CONFIG.estrella.subsidio}): `), S.subsidiados.map(id => motor.eq(id).nombre).join(' · ')));
    if ((S.regalos || []).length) notas.push(h('div.nota-zona', h('b', '🎁 Últimas paradas: '), S.regalos.map(r => `${motor.eq(r.id).nombre} ${ICONOS_ITEM[r.item]}`).join(' · ')));
    if (S.zona > 0) notas.push(h('div.nota-zona', '🚌 La Chiva los reparte: el último sale a 2 casillas de la estrella.'));
    return h('div.placa.llegada-zona', { style: { '--c': z.color } },
      h('div',
        h('div.cabeza-zona', h('span.icono-zona', z.icono), h('div', h('h2', z.nombre), h('small', `Zona ${S.zona + 1} de ${CONFIG.zonas.length} · bloque ${z.bloque} del temario`))),
        h('p.leccion-grande', BANCO.LECCIONES[z.leccion])),
      h('div.lado',
        S.evento ? h('div.evento-tarjeta', h('b', `🌎 ${S.evento.nombre}`), S.evento.texto, h('small', S.evento.vpn)) : null,
        h('div', notas)));
  }
  function fichaDe(e, tam) { const m = mascota(e.mascota); return h('div.ficha', { style: { '--c': m.color, fontSize: tam } }, mascotaSVG(m.id)); }

  function escenaLobby() {
    const S = motor.S;
    const qr = h('div');
    try {
      const gen = window.qrcode(0, 'M'); gen.addData(urlJugar); gen.make();
      qr.innerHTML = gen.createSvgTag({ cellSize: 6, margin: 2, scalable: true });
    } catch { qr.textContent = urlJugar; }
    return h('div.lobby',
      h('div.qr-placa', qr, h('div.codigo', codigo), h('div', 'Código de la sala')),
      h('div',
        h('h1', 'Expedición VPN'),
        h('ol.pasos',
          h('li', 'Un celular por equipo: escaneen el código QR.'),
          h('li', 'Escojan su mascota y escriban sus nombres.'),
          h('li', 'En el celular lean "¿Cómo se juega?" mientras esperan.')),
        h('div.llegadas', S.equipos.length ? S.equipos.map(e => {
          const nueva = !ui.llegadasVistas.has(e.id); ui.llegadasVistas.add(e.id);
          return h('div.llegada' + (nueva ? '.nueva' : ''), fichaDe(e), e.nombre);
        }) : h('p', { style: { color: 'var(--claro-suave)' } }, 'Esperando al primer equipo…')),
        h('p', { style: { marginTop: '1.2em' } }, h('button.boton', { disabled: !S.equipos.length, on: { click: siguiente } }, S.equipos.length ? `Empezar con ${S.equipos.length} equipo${S.equipos.length > 1 ? 's' : ''}` : 'Empezar'))));
  }

  function escenaIntro() {
    return h('div.placa',
      h('h2', 'Su startup cafetera sube al Nevado'),
      h('div.columnas',
        h('div',
          h('p', h('b', '🪙 Monedas = la plata de su negocio. '), 'Entran con ingresos y respuestas correctas; salen con costos e impuestos.'),
          h('p', h('b', '⭐ Estrellas: '), 'gana quien tenga más. Para comprar una hay que acertar si un negocio conviene o no.'),
          h('p', h('b', '🎲 Cada turno tiene 3 pasos: '), '1 tiren el dado, 2 resuelvan su casilla, 3 miren el resultado.'),
          h('p', h('b', '🔄 Roles: '), 'uno calcula, otro revisa, otro responde y otro decide. Se turnan en cada zona.')),
        h('div',
          h('p', h('b', 'Lección A · ¿Para qué evaluamos?')),
          h('p', BANCO.LECCIONES.para_que),
          h('p.nota', 'Ruta: Insumos → Flujo de caja → Valor del dinero → Indicadores → Criterios → Riesgo → Junta Directiva.'))));
  }

  function progreso() {
    const E = motor.S.equipos; const listos = E.filter(e => !e.tarea && !e.cola.length).length;
    return h('div', h('p', `${listos} de ${E.length} equipos listos`), h('div.medidor', h('i', { style: { width: `${(100 * listos) / Math.max(1, E.length)}%` } })));
  }
  function escenaPractica() {
    const p = BANCO.PREGUNTAS.find(x => x.id === 'A02');
    return h('div.placa', h('h2', 'Pregunta de práctica'), h('p', 'No vale estrellas, solo +2 monedas: es para aprender a usar el celular.'), h('p', h('b', p.enunciado)), progreso());
  }

  function escenaMinijuego() {
    const S = motor.S; const tipo = CONFIG.zonas[S.zona].minijuego;
    const T = S.mg?.datos?.termometro ? BANCO.MG_TERMOMETRO.find(x => x.id === S.mg.datos.termometro) : null;
    return h('div.placa',
      h('h2', `🎮 ${MG_NOMBRE[tipo]}`),
      S.fase === 'apuesta' ? h('p', h('b', 'Estratega: '), `¿cuántas monedas apuestan (0 a ${CONFIG.apuestaMax}) a quedar en el top 3? Si lo logran, las ganan; si no, las pierden.`) : h('p', MG_INSTR[tipo]),
      S.fase === 'minijuego' && T ? h('p', { style: { fontSize: '1.3em' } }, h('b', T.enunciado)) : null,
      h('p.nota', `Premios: 1.º +${CONFIG.premiosMinijuegoGlobal[0]} · 2.º +${CONFIG.premiosMinijuegoGlobal[1]} · 3.º +${CONFIG.premiosMinijuegoGlobal[2]}`),
      progreso());
  }

  function escenaMinijuegoRes() {
    const S = motor.S, mg = S.mg; const res = mg?.resultados || [];
    let repaso = null;
    if (mg.tipo === 'entra') repaso = h('div', h('p', h('b', 'Repaso')), h('p.nota', BANCO.MG_ENTRA.map(x => `${x.t}: ${x.entra ? 'entra' : 'no entra'}`).join(' · ')));
    if (mg.tipo === 'carrera') repaso = h('div', h('p', h('b', 'Repaso')), h('p.nota', BANCO.MG_CARRERA.map(x => `${x.t} → ${x.ok === 0 ? x.a : x.b}`).join(' · ')));
    if (mg.tipo === 'termometro') { const T = BANCO.MG_TERMOMETRO.find(x => x.id === mg.datos.termometro); repaso = h('p', h('b', `Valor crítico: ${T.unidad === '$' ? '$' + num(T.respuesta) : T.unidad === '%' ? num(T.respuesta) + ' %' : num(T.respuesta) + ' unidades'}. `), T.explicacion); }
    return h('div.placa',
      h('h2', `🎮 ${MG_NOMBRE[mg.tipo]}: resultados`),
      h('div.columnas', res.slice(0, 10).map(r => {
        const e = motor.eq(r.id);
        const detalle = mg.tipo === 'termometro' ? (r.valor != null ? `dijo ${num(r.valor)}` : 'sin respuesta') : r.puntaje != null ? `${r.puntaje} aciertos` : 'sin respuesta';
        return h('div.resultado-mg', h('span.p', r.puesto), fichaDe(e), h('div', h('b', e.nombre), h('div.nota', `${detalle}${r.premio ? ` · +${r.premio}` : ''}${r.apuesta ? ` · apuesta ${signo(r.apuestaRes)}` : ''}`)));
      })),
      repaso);
  }

  function tablaJefe() {
    const P = BANCO.JEFE.proyectos;
    const max = k => Math.max(...P.map(p => p[k]));
    const minPR = Math.min(...P.map(p => p.pr));
    const celda = (p, k, txt) => h('td.num' + (p[k] === max(k) ? '.mejor' : ''), txt);
    return h('table.tabla',
      h('thead', h('tr', h('th', 'Proyecto'), h('th.num', 'Inversión'), h('th.num', 'VPN'), h('th.num', 'TIR'), h('th.num', 'B/C'), h('th.num', 'PR simple'), h('th.num', 'PR descontado'))),
      h('tbody', P.map(p => h('tr',
        h('td', h('b', p.id), ' ', p.nombre),
        h('td.num', dinero(-p.flujos[0], 0)),
        h('td.num' + (p.vpn === max('vpn') ? '.mejor' : p.vpn < 0 ? '.malo' : ''), dinero(p.vpn)),
        celda(p, 'tir', `${num(p.tir, 1)} %`),
        h('td.num' + (p.bc === max('bc') ? '.mejor' : p.bc < 1 ? '.malo' : ''), num(p.bc, 2)),
        h('td.num' + (p.pr === minPR ? '.mejor' : ''), `${num(p.pr, 2)} años`),
        h('td.num', p.prd == null ? 'no recupera' : `${num(p.prd, 2)} años`)))));
  }
  function escenaJefe() {
    const S = motor.S;
    const F = S.fase === 'jefe2' ? BANCO.JEFE.fase2 : BANCO.JEFE.fase1;
    return h('div.placa',
      h('h2', '🏔️ La Junta Directiva del Nevado'),
      h('p', `TMAR ${num(BANCO.JEFE.tmar * 100)} %. Los tres proyectos son excluyentes: solo se aprueba uno.`),
      tablaJefe(),
      h('p', { style: { fontSize: '1.3em', marginTop: '.8em' } }, h('b', S.fase === 'jefe_intro' ? 'Lean la tabla: ¿cuál aprobarían y por qué?' : F.pregunta)),
      S.fase !== 'jefe_intro' ? progreso() : h('p.nota', 'En un minuto les llega la decisión al celular: proyecto y justificación.'));
  }
  function escenaJefeRes() {
    const S = motor.S; const fase = S.fase === 'jefe2_res' ? 2 : 1;
    const F = BANCO.JEFE[fase === 1 ? 'fase1' : 'fase2'];
    const res = S.jefe?.resultados?.[fase] || [];
    const votos = Object.fromEntries(BANCO.JEFE.proyectos.map(p => [p.id, res.filter(r => r.proyecto === p.id)]));
    return h('div.placa',
      h('h2', fase === 1 ? '🏔️ Veredicto: fase 1' : '🏔️ Veredicto: el giro'),
      h('p', { style: { fontSize: '1.2em' } }, h('b', `${F.correcto}: `), F.justificaciones.find(j => j.ok).t, '.'),
      h('div.columnas', BANCO.JEFE.proyectos.map(p => h('div', h('p', h('b', `${p.id} · ${votos[p.id].length} equipo(s)`)),
        h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '.3em' } }, votos[p.id].map(r => { const e = motor.eq(r.id); return h('span', { title: e.nombre }, fichaDe(e, '.7em'), r.estrella ? '⭐' : ''); }))))),
      fase === 1 ? h('p.nota', { style: { marginTop: '.8em' } }, 'Voceros: 20 segundos para defender su decisión. ¿Y la TIR de P2? ¿Y el PR de P3?') : h('p.nota', BANCO.JEFE.giroAlterno));
  }

  function escenaBonus() {
    const S = motor.S;
    const iconos = { analista: '🧮', duelista: '⚔️', remontada: '🚀', sobreviviente: '🛡️', inversionista: '🏗️' };
    return h('div', h('h2', { style: { fontSize: '2.6em', color: 'var(--amarillo)', marginBottom: '.5em' } }, '⭐ Estrellas sorpresa'),
      h('div.bonus-lista', (S.bonus || []).map(b => h('div.bonus-item',
        h('span.icono', iconos[b.clave] || '⭐'),
        h('div', { style: { flex: 1 } }, h('h3', b.nombre), h('div.nota', b.desc)),
        h('div', { style: { display: 'flex', gap: '.4em', alignItems: 'center' } }, b.ganadores.length ? b.ganadores.map(id => { const e = motor.eq(id); return h('span', { style: { display: 'flex', alignItems: 'center', gap: '.3em' } }, fichaDe(e), h('b', e.nombre)); }) : h('span.nota', 'Nadie esta vez'))))));
  }

  function escenaPodio() {
    const S = motor.S; const P = S.podio || [];
    const top = [P[1], P[0], P[2]].filter(Boolean);
    const alturas = { 1: '7em', 2: '5em', 3: '3.6em' };
    const maxAbs = Math.max(1, ...P.flatMap(p => p.flujos.slice(1).map(Math.abs)));
    return h('div',
      h('div.podio', top.map(p => { const e = motor.eq(p.id); return h('div.escalon', fichaDe(e), h('div.base', { style: { height: alturas[p.puesto] } }, `${p.puesto}.º`, h('b', e.nombre), h('small', `⭐ ${p.estrellas} · 🪙 ${p.monedas}`))); })),
      h('div.placa',
        h('h2', { style: { fontSize: '1.7em' } }, 'El VPN de su partida'),
        h('p.nota', `Sus monedas ganadas en cada zona, descontadas a la TMAR del ${num(CONFIG.tmar * 100)} % (inversión inicial: las ${CONFIG.monedasIniciales} monedas con que empezaron). Ganar temprano vale más que ganar tarde.`),
        h('table.tabla', h('thead', h('tr', h('th', '#'), h('th', 'Equipo'), h('th.num', '⭐'), h('th.num', '🪙'), h('th', 'Flujo por zona (B → G)'), h('th.num', 'VPN'))),
          h('tbody', P.map(p => { const e = motor.eq(p.id); return h('tr', h('td', p.puesto), h('td', e.nombre), h('td.num', p.estrellas), h('td.num', p.monedas),
            h('td', h('div.barra-flujos', p.flujos.slice(1).map(f => h('i' + (f < 0 ? '.neg' : ''), { title: signo(f), style: { height: `${Math.max(6, (100 * Math.abs(f)) / maxAbs)}%` } })))),
            h('td.num', num(p.vpn, 1))); })))));
  }

  function escenaCierre() {
    const filas = [
      ['VPN', 'Cuánto valor crea, en pesos de hoy', 'Mayor que 0: se acepta', 'Si hay contradicción, manda'],
      ['TIR', 'Lo que rinde por año', 'Mayor que lo exigido (TMAR): se acepta', 'No ve el tamaño del proyecto'],
      ['B/C', 'Lo que trae ÷ lo que cuesta', 'Mayor que 1: se acepta', 'Dice lo mismo que el VPN'],
      ['PR', 'Cuánto tarda en devolver la inversión', 'Menos tiempo: vuelve más rápido', 'No mide si es buen negocio'],
      ['Riesgo', 'Qué pasa si cambian precio, ventas o costos', 'Buscar cuánto aguanta el negocio', 'Un VPN positivo no es garantía'],
      ['Flujo', 'La plata que de verdad entra y sale', 'Solo lo que cambia por decidir', 'Lo ya gastado no cuenta'],
    ];
    return h('div.placa',
      h('h2', '¿Conviene invertir? Así se decide'),
      h('table.tabla', h('thead', h('tr', h('th', 'Indicador'), h('th', 'Qué es'), h('th', 'Regla'), h('th', 'Ojo con…'))),
        h('tbody', filas.map(f => h('tr', h('td', h('b', f[0])), h('td', f[1]), h('td', f[2]), h('td', f[3])))))) ;
  }
  function escenaSalida() { return h('div.placa', h('h2', '✅ Tres preguntas de salida'), h('p', 'Respondan en el celular. No dan puntos: nos sirven para saber cuánto aprendieron.'), progreso()); }
  function escenaFin() {
    const E = motor.S.equipos.filter(e => e.salida);
    const ac = E.reduce((s, e) => s + e.salida.aciertos, 0), tot = E.reduce((s, e) => s + e.salida.total, 0);
    return h('div.placa',
      h('h2', '¡Llegamos al Nevado!'),
      tot ? h('p', { style: { fontSize: '1.3em' } }, `En las preguntas de salida la clase acertó ${ac} de ${tot} (${Math.round((100 * ac) / tot)} %).`) : null,
      h('p', 'Gracias por jugar. La pregunta de fondo nunca cambió: ¿conviene invertir?'),
      h('button.boton', { on: { click: exportarCSV } }, 'Descargar resultados (CSV)'));
  }

  // ───── CSV para el profesor ─────
  function exportarCSV() {
    const R = motor.ranking();
    const filas = [['puesto', 'equipo', 'mascota', 'integrantes', 'estrellas', 'monedas', 'aciertos', 'intentos', 'pct_aciertos', 'duelos_ganados', 'salida_aciertos', 'salida_total']];
    R.forEach((e, i) => filas.push([i + 1, e.nombre, mascota(e.mascota).nombre, e.integrantes.join(' / '), e.estrellas, e.monedas, e.stats.aciertos, e.stats.intentos, e.stats.intentos ? Math.round((100 * e.stats.aciertos) / e.stats.intentos) : '', e.stats.duelosGanados, e.salida?.aciertos ?? '', e.salida?.total ?? '']));
    // Los nombres los escriben los jugadores: un texto que empiece por = + - @ se neutraliza
    // con un apóstrofo para que Excel no lo ejecute como fórmula.
    const celda = c => {
      let s = String(c);
      if (typeof c === 'string' && /^[=+\-@\t\r]/.test(s)) s = "'" + s;
      return `"${s.replace(/"/g, '""')}"`;
    };
    const csv = filas.map(f => f.map(celda).join(';')).join('\r\n');
    descargar(`expedicion-vpn-${codigo}.csv`, csv);
  }

  pintarTodo();
  publicar();
}
