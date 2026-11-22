// Genera data/preguntas.js y docs/banco-preguntas.md a partir de tools/banco-fuente.mjs.
// Uso: node tools/generar-banco.mjs
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { FORMULAS, fmtUnidad, fmtNum, vpn, tir, bc, pr } from '../js/finanzas.js';
import { LECCIONES, ITEMS, ESTRELLA, MG_ENTRA, MG_CARRERA, MG_TERMOMETRO, MG_ORDENA, JEFE } from './banco-fuente.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

// PRNG con semilla para mezclar opciones de forma reproducible.
function hash(s) { let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function mulberry32(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function mezclar(arr, semilla) { const r = mulberry32(hash(semilla)); const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function construirItem(it) {
  let opciones;
  let valor = null;
  if (it.calc) {
    valor = FORMULAS[it.calc.formula](it.calc.datos);
    opciones = [
      { t: fmtUnidad(valor, it.unidad, it.dec), ok: true, v: valor },
      ...it.distractores.map(d => ({ t: fmtUnidad(d.v, it.unidad, it.dec), porque: d.error, v: d.v })),
    ];
  } else {
    opciones = it.opciones.map(o => ({ ...o }));
  }
  const mezcladas = mezclar(opciones, it.id);
  const correcta = mezcladas.findIndex(o => o.ok);
  return {
    id: it.id, bloque: it.bloque, uso: it.uso, tiempo: it.tiempo, leccion: it.leccion,
    tipo: it.calc ? 'calculo' : 'concepto',
    enunciado: it.enunciado,
    opciones: mezcladas.map(o => ({ t: o.t, ...(o.porque ? { porque: o.porque } : {}) })),
    correcta,
    explicacion: it.explicacion,
    ...(it.calc ? { calc: it.calc, unidad: it.unidad, dec: it.dec, valor } : {}),
    ...(it.chequeos ? { chequeos: it.chequeos } : {}),
  };
}

function textoFlujos(flujos) {
  const inv = -flujos[0];
  const partes = flujos.slice(1).map((f, i) => (f === 0 ? null : `$${fmtNum(f)} M en el año ${i + 1}`)).filter(Boolean);
  return `Inviertes $${fmtNum(inv)} M y recibes ${partes.join(' y ')}`;
}

function construirEstrella(s) {
  const v = vpn(s.tasa, s.flujos);
  const signo = Math.abs(v) < 0.005 ? 0 : Math.sign(v);
  const opciones = [
    { t: 'VPN > 0: ¡crea valor!' },
    { t: 'VPN = 0: rinde justo la TMAR' },
    { t: 'VPN < 0: destruye valor' },
  ];
  const correcta = signo > 0 ? 0 : signo === 0 ? 1 : 2;
  return {
    id: s.id, bloque: 'E', uso: ['estrella'], tiempo: 30, leccion: 'vpn', tipo: 'calculo',
    enunciado: `Sello VPN+ · ${textoFlujos(s.flujos)}. TMAR ${fmtNum(s.tasa * 100)} %. ¿Cómo es el VPN?`,
    opciones, correcta, flujos: s.flujos, tasa: s.tasa, valor: v,
    explicacion: `VP de lo que recibes = ${fmtNum(v - s.flujos[0])}; VPN = ${fmtNum(v)}.`,
  };
}

function construirJefe() {
  const r = JEFE.tmar;
  const proyectos = JEFE.proyectos.map(p => ({
    ...p,
    vpn: vpn(r, p.flujos), tir: tir(p.flujos) * 100, bc: bc(r, p.flujos),
    pr: pr(p.flujos, 0), prd: pr(p.flujos, r),
  }));
  return { ...JEFE, proyectos };
}

const preguntas = ITEMS.map(construirItem);
const estrella = ESTRELLA.map(construirEstrella);
const termometro = MG_TERMOMETRO.map(t => ({ ...t, respuesta: t.base + (t.vpnBase / t.porPaso) * t.paso }));
const jefe = construirJefe();

const banco = { LECCIONES, PREGUNTAS: preguntas, ESTRELLA: estrella, MG_ENTRA, MG_CARRERA, MG_TERMOMETRO: termometro, MG_ORDENA, JEFE: jefe };

writeFileSync(join(RAIZ, 'data', 'preguntas.js'),
  '// ARCHIVO GENERADO por tools/generar-banco.mjs — no editar a mano.\n' +
  Object.entries(banco).map(([k, v]) => `export const ${k} = ${JSON.stringify(v, null, 1)};`).join('\n') + '\n');

// ───────── Documento legible para el equipo ─────────
const L = 'ABCD';
const NOMBRES = { A: 'A · ¿Para qué se evalúa?', B: 'B · Insumos', C: 'C · Flujo de caja', D: 'D · Valor del dinero en el tiempo', E: 'E · Indicadores', F: 'F · Criterios de decisión', G: 'G · Riesgo' };
const md = [];
md.push('# Banco de preguntas — Expedición VPN', '');
md.push('> Archivo generado por `node tools/generar-banco.mjs`. Las respuestas numéricas las calcula el código y las verifica `node tools/verificar.mjs`. Cifras en millones de pesos ($ M) salvo que se indique otra cosa.', '');
md.push(`**Total:** ${preguntas.length} preguntas de zona/duelo, ${estrella.length} chequeos de estrella, ${MG_ENTRA.length + MG_CARRERA.length + termometro.length + MG_ORDENA.length} ítems de mini-juegos y el jefe final.`, '');
md.push('## Mini-lecciones (máx. 30 s cada una)', '');
for (const [k, v] of Object.entries(LECCIONES)) md.push(`- **${k}** (${v.split(/\s+/).length} palabras): ${v}`);
md.push('');
for (const b of 'ABCDEFG') {
  md.push(`## ${NOMBRES[b]}`, '');
  for (const p of preguntas.filter(q => q.bloque === b)) {
    md.push(`### ${p.id} · ${p.tipo === 'calculo' ? 'Cálculo' : 'Concepto'} · ${p.tiempo} s · uso: ${p.uso.join(', ')}`, '');
    md.push(p.enunciado, '');
    p.opciones.forEach((o, i) => {
      md.push(i === p.correcta ? `- **${L[i]}) ${o.t}** ✅` : `- ${L[i]}) ${o.t} — _${o.porque}_`);
    });
    md.push('', `**Explicación:** ${p.explicacion}`, '');
  }
}
md.push('## Chequeo de estrella "Sello VPN+" (30 s)', '');
for (const s of estrella) md.push(`- **${s.id}.** ${s.enunciado} → **${s.opciones[s.correcta].t}** (${s.explicacion})`);
md.push('', '## Mini-juego global 1 · ¿Entra o no entra?', '');
for (const m of MG_ENTRA) md.push(`- ${m.t} → **${m.entra ? 'ENTRA' : 'NO ENTRA'}** (${m.porque})`);
md.push('', '## Mini-juego global 2 · Carrera del descuento', '');
for (const m of MG_CARRERA) md.push(`- ${m.t} → **${m.ok === 0 ? m.a : m.b}** (la otra opción: ${m.ok === 0 ? m.b : m.a})`);
md.push('', '## Mini-juego global 3 · Termómetro del riesgo', '');
for (const t of termometro) md.push(`- **${t.id}.** ${t.enunciado} → **${fmtNum(t.respuesta)}${t.unidad === '%' ? ' %' : t.unidad === 'u' ? ' unidades' : ''}** (${t.explicacion})`);
md.push('', '## Mini-juego individual · Ordena', '');
for (const o of MG_ORDENA) md.push(`- **${o.titulo}:** ${o.pasos.join(' → ')}`);
md.push('', '## Mini-juego individual · Caza el error', '', 'Usa las preguntas con uso `caza` (C04, C10, C11).', '');
md.push('## Jefe final · Junta Directiva del Nevado (TMAR 10 %)', '');
md.push('| Proyecto | Flujos | VPN | TIR | B/C | PR simple | PR descontado |', '|---|---|---|---|---|---|---|');
for (const p of jefe.proyectos) md.push(`| ${p.id} ${p.nombre} | ${p.flujos.join(' / ')} | ${fmtNum(p.vpn, 1)} | ${fmtNum(p.tir, 1)} % | ${fmtNum(p.bc, 2)} | ${fmtNum(p.pr, 2)} años | ${p.prd == null ? 'no recupera' : fmtNum(p.prd, 2) + ' años'} |`);
md.push('');
for (const f of ['fase1', 'fase2']) {
  const F = jefe[f];
  md.push(`**${f === 'fase1' ? 'Fase 1' : 'Fase 2'}:** ${F.pregunta} → **${F.correcto}**`, '');
  for (const j of F.justificaciones) md.push(j.ok ? `- **${j.t}** ✅` : `- ${j.t} — _${j.porque}_`);
  md.push('');
}
md.push(`_${jefe.giroAlterno}_`, '');
writeFileSync(join(RAIZ, 'docs', 'banco-preguntas.md'), md.join('\n'));

console.log(`OK: ${preguntas.length} preguntas, ${estrella.length} estrella, ${termometro.length} termómetro, jefe con ${jefe.proyectos.length} proyectos.`);
