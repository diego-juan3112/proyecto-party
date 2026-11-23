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

// La estrella compara el negocio contra una opción segura, a un año, sin jerga:
// "le gana" = VPN > 0, "empata" = VPN = 0, "pierde" = VPN < 0.
function construirEstrella(s) {
  if (s.flujos.length !== 2) throw new Error(`${s.id}: la estrella debe ser de un solo año`);
  const v = vpn(s.tasa, s.flujos);
  const signo = Math.abs(v) < 0.005 ? 0 : Math.sign(v);
  const inv = -s.flujos[0], recibe = s.flujos[1];
  const seguro = inv * (1 + s.tasa);
  const opciones = [
    { t: 'El negocio gana más: ¡conviene!' },
    { t: 'Dan lo mismo: da igual' },
    { t: 'La opción segura gana más: no conviene' },
  ];
  const correcta = signo > 0 ? 0 : signo === 0 ? 1 : 2;
  const veredicto = signo > 0 ? 'el negocio gana más' : signo === 0 ? 'dan lo mismo' : 'la opción segura gana más';
  return {
    id: s.id, bloque: 'E', uso: ['estrella'], tiempo: 30, leccion: 'vpn', tipo: 'calculo',
    enunciado: `Pones $${fmtNum(inv)} M en un negocio y en un año te devuelve $${fmtNum(recibe)} M. Si en cambio dejas esa plata en una opción segura que paga ${fmtNum(s.tasa * 100)} % al año, ¿qué gana más?`,
    opciones, correcta, flujos: s.flujos, tasa: s.tasa, valor: v,
    explicacion: `La opción segura te daría $${fmtNum(seguro)} M; el negocio, $${fmtNum(recibe)} M: ${veredicto}.`,
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
const NOMBRES = { A: 'A · ¿Para qué se evalúa?', B: 'B · Las cifras del negocio (insumos)', C: 'C · La plata que entra y sale (flujo de caja)', D: 'D · El valor del tiempo', E: 'E · ¿Conviene? (indicadores)', F: 'F · Escoger entre negocios (criterios)', G: 'G · ¿Y si algo sale mal? (riesgo)' };
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
md.push('## Chequeo de estrella "Sello Buen Negocio" (30 s)', '');
for (const s of estrella) md.push(`- **${s.id}.** ${s.enunciado} → **${s.opciones[s.correcta].t}** (${s.explicacion})`);
md.push('', '## Mini-juego global 1 · ¿Cuenta o no cuenta?', '');
for (const m of MG_ENTRA) md.push(`- ${m.t} → **${m.entra ? 'CUENTA' : 'NO CUENTA'}** (${m.porque})`);
md.push('', '## Mini-juego global 2 · Carrera relámpago', '');
for (const m of MG_CARRERA) md.push(`- ${m.t} → **${m.ok === 0 ? m.a : m.b}** (la otra opción: ${m.ok === 0 ? m.b : m.a})`);
md.push('', '## Mini-juego global 3 · Termómetro del riesgo', '');
for (const t of termometro) md.push(`- **${t.id}.** ${t.enunciado} → **${fmtNum(t.respuesta)}${t.unidad === '%' ? ' %' : t.unidad === 'u' ? ' unidades' : ''}** (${t.explicacion})`);
md.push('', '## Mini-juego individual · Ordena', '');
for (const o of MG_ORDENA) md.push(`- **${o.titulo}:** ${o.pasos.join(' → ')}`);
md.push('', '## Mini-juego individual · Caza el error', '', 'Usa las preguntas con uso `caza` (C04, C10, C11).', '');
md.push('## Jefe final · Junta Directiva del Nevado (mínimo exigido o TMAR: 10 %)', '');
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
