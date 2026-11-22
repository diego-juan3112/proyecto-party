// Simulación Monte Carlo de partidas completas con equipos-bot y reloj virtual.
// Uso: node tools/simular.mjs [partidas=1000] [equipos=10]
// Reporta duración, balance de estrellas, efectividad de la remontada y de los power-ups.
import { Motor } from '../js/motor.js';
import { CONFIG } from '../js/config.js';
import * as BANCO from '../data/preguntas.js';
import { planBot, claveTarea } from '../js/bots.js';

const PARTIDAS = Number(process.argv[2] || 1000);
const LISTA_N = process.argv[3] ? [Number(process.argv[3])] : [8, 10];
// Ajustes experimentales: SIM_CFG='{"estrella":{"precio":15}}' node tools/simular.mjs
// Rango de precisión de los equipos: SIM_PREC=0.55,0.85
const PREC = (process.env.SIM_PREC || '0.4,0.9').split(',').map(Number);
function fusionar(a, b) { for (const [k, v] of Object.entries(b)) a[k] = v && typeof v === 'object' && !Array.isArray(v) ? fusionar({ ...(a[k] || {}) }, v) : v; return a; }
if (process.env.SIM_CFG) { fusionar(CONFIG, JSON.parse(process.env.SIM_CFG)); console.log('Ajustes:', process.env.SIM_CFG); }

function mulberry(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

export function simularPartida(semilla, N, config = CONFIG) {
  const r = mulberry(semilla * 7919 + 13);
  const m = new Motor({ config, banco: BANCO, semilla });
  const perfiles = {};
  for (let i = 0; i < N; i++) {
    const { id } = m.unirse({ nombre: 'Equipo ' + (i + 1), mascota: config.mascotas[i].id });
    perfiles[id] = { precision: PREC[0] + (PREC[1] - PREC[0]) * r(), velocidad: 0.75 + 0.45 * r() };
  }
  let t = 0;
  m.iniciar(t);
  const agenda = new Map();
  let pasos = 0;
  while (m.S.fase !== 'fin' && pasos++ < 200000) {
    for (const e of m.S.equipos) {
      const k = claveTarea(e.tarea);
      if (k && agenda.get(e.id)?.k !== k) {
        const plan = planBot(m, e.id, perfiles[e.id], r);
        if (plan) agenda.set(e.id, { k, t: t + plan.delay, accion: plan.accion });
      }
    }
    const tAcc = Math.min(...[...agenda.entries()].filter(([id, a]) => claveTarea(m.eq(id).tarea) === a.k).map(([, a]) => a.t), Infinity);
    const tLim = m.proximoLimite() ?? Infinity;
    const prox = Math.min(tAcc, tLim);
    if (!Number.isFinite(prox)) { m.tick(t); if (m.S.fase !== 'fin' && !m.S.equipos.some(e => e.tarea)) m.forzar(t); continue; }
    t = Math.max(t, prox);
    for (const [id, a] of [...agenda.entries()].sort((x, y) => x[1].t - y[1].t)) {
      if (a.t <= t && claveTarea(m.eq(id).tarea) === a.k) { m.accion(id, a.accion, a.t); agenda.delete(id); }
    }
    m.tick(t);
  }
  return { m, t, perfiles };
}

function percentil(arr, q) { const a = [...arr].sort((x, y) => x - y); return a[Math.min(a.length - 1, Math.floor(q * a.length))]; }
function spearman(xs, ys) {
  const rango = v => { const o = v.map((x, i) => [x, i]).sort((a, b) => a[0] - b[0]); const r = Array(v.length); o.forEach(([, i], k) => { r[i] = k; }); return r; };
  const rx = rango(xs), ry = rango(ys), n = xs.length;
  const d2 = rx.reduce((s, x, i) => s + (x - ry[i]) ** 2, 0);
  return 1 - (6 * d2) / (n * (n * n - 1));
}
const prom = a => a.reduce((s, x) => s + x, 0) / a.length;
const min = s => (s / 60).toFixed(1);

for (const N of LISTA_N) {
  const dur = [], porFase = {}, estrellasGanador = [], estrellasUltimo = [], ceroEstrellas = [], comprasEstrella = [];
  let remontadas = 0, casosUltimoD = 0, mitadSup = 0;
  const corr = [], monedasFin = [], tiemposTramo = { inicio: [], zonas: [], jefeFinal: [] };
  const items = {}; const itemsBase = { ganadas: 0, equipos: 0 };
  let duelos = 0, dueloBanco = 0;
  const aciertoPct = [];
  for (let s = 1; s <= PARTIDAS; s++) {
    const { m, t, perfiles } = simularPartida(s, N);
    dur.push(t);
    for (const h of m.S.historialFases) porFase[h.fase] = (porFase[h.fase] || 0) + (h.fin - h.inicio);
    const H = m.S.historialFases;
    const tZona = H.find(h => h.fase === 'zona_intro')?.inicio ?? 0;
    const tJefe = H.find(h => h.fase === 'jefe_intro')?.inicio ?? t;
    tiemposTramo.inicio.push(tZona); tiemposTramo.zonas.push(tJefe - tZona); tiemposTramo.jefeFinal.push(t - tJefe);
    const R = m.ranking();
    estrellasGanador.push(R[0].estrellas); estrellasUltimo.push(R.at(-1).estrellas);
    ceroEstrellas.push(R.filter(e => e.estrellas === 0).length / N);
    comprasEstrella.push(prom(R.map(e => e.stats.estrellasCompradas)));
    monedasFin.push(prom(R.map(e => e.monedas)));
    // Remontada: último al terminar la zona D (índice 2) que termina en top 3
    const rankD = m.S.rankingsZona[2];
    if (rankD) { casosUltimoD++; const ultimoD = rankD.at(-1); const pf = R.findIndex(e => e.id === ultimoD); if (pf < 3) remontadas++; if (pf < N / 2) mitadSup++; }
    // Habilidad vs resultado (puesto 1 = mejor)
    corr.push(spearman(R.map(e => perfiles[e.id].precision), R.map((_, i) => N - i)));
    aciertoPct.push(prom(R.map(e => e.stats.intentos ? e.stats.aciertos / e.stats.intentos : 0)));
    // Power-ups: puesto promedio de quienes compraron cada uno
    R.forEach((e, i) => {
      itemsBase.equipos++; itemsBase.ganadas += i === 0 ? 1 : 0;
      for (const [id, c] of Object.entries(e.stats.compras)) { items[id] = items[id] || { equipos: 0, ganadas: 0, puestoSum: 0 }; items[id].equipos++; items[id].ganadas += i === 0 ? 1 : 0; items[id].puestoSum += i + 1; }
      items._inv = items._inv || { equipos: 0, ganadas: 0, puestoSum: 0 };
      if (e.stats.invirtio) { items._inv.equipos++; items._inv.ganadas += i === 0 ? 1 : 0; items._inv.puestoSum += i + 1; }
    });
    for (const d of Object.values(m.S.duelos || {})) duelos++;
  }
  console.log(`\n══════════ ${N} equipos · ${PARTIDAS} partidas ══════════`);
  console.log(`Duración total: p50 ${min(percentil(dur, 0.5))} min · p90 ${min(percentil(dur, 0.9))} min · máx ${min(Math.max(...dur))} min`);
  console.log(`  Inicio (intro + práctica): ${min(prom(tiemposTramo.inicio))} min · Zonas y mini-juegos: ${min(prom(tiemposTramo.zonas))} min · Jefe → fin: ${min(prom(tiemposTramo.jefeFinal))} min`);
  const tot = Object.values(porFase).reduce((a, b) => a + b, 0);
  console.log('  Por fase (min promedio por partida): ' + Object.entries(porFase).sort((a, b) => b[1] - a[1]).map(([f, s]) => `${f} ${min(s / PARTIDAS)}`).join(' · '));
  console.log(`Estrellas: ganador ${prom(estrellasGanador).toFixed(2)} (p90 ${percentil(estrellasGanador, 0.9)}) · último ${prom(estrellasUltimo).toFixed(2)} · equipos con 0 ⭐: ${(100 * prom(ceroEstrellas)).toFixed(1)} % · ⭐ compradas por equipo: ${prom(comprasEstrella).toFixed(2)}`);
  console.log(`Monedas al final (promedio): ${prom(monedasFin).toFixed(1)} · % de aciertos promedio: ${(100 * prom(aciertoPct)).toFixed(1)} % · duelos por partida: ${(duelos / PARTIDAS).toFixed(1)}`);
  console.log(`Remontada: el último tras la zona D termina en el top 3 en ${(100 * remontadas / casosUltimoD).toFixed(1)} % de las partidas (meta 15–30 %) · en la mitad superior: ${(100 * mitadSup / casosUltimoD).toFixed(1)} %`);
  console.log(`Habilidad vs puesto final (Spearman): ${prom(corr).toFixed(2)} (meta 0,4–0,7: importa saber, pero no lo decide todo)`);
  const base = itemsBase.ganadas / itemsBase.equipos;
  console.log(`Power-ups (tasa de victoria; base ${(100 * base).toFixed(1)} %):`);
  for (const [id, x] of Object.entries(items)) console.log(`  ${id.padEnd(12)} comprado por ${(100 * x.equipos / itemsBase.equipos).toFixed(1).padStart(5)} % · gana ${(100 * x.ganadas / x.equipos).toFixed(1).padStart(5)} % · puesto prom. ${(x.puestoSum / x.equipos).toFixed(2)}`);
}
