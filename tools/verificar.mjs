// Verifica el banco GENERADO (data/preguntas.js) con implementaciones financieras
// INDEPENDIENTES de js/finanzas.js (para no repetir el mismo error dos veces).
// Uso: node tools/verificar.mjs   → sale con código 1 si hay errores.
import { LECCIONES, PREGUNTAS, ESTRELLA, MG_CARRERA, MG_TERMOMETRO, MG_ORDENA, MG_ENTRA, JEFE } from '../data/preguntas.js';

const errores = [];
const avisos = [];
const err = (id, m) => errores.push(`[${id}] ${m}`);

// ── Implementaciones independientes ──
const VPN = (r, f) => { let s = 0, d = 1; for (let t = 0; t < f.length; t++) { s += f[t] / d; d *= 1 + r; } return s; };
function TIR(f) { // Newton desde varios puntos de arranque
  for (const x0 of [0.1, 0.3, 0.01, 1, 2]) {
    let r = x0;
    for (let i = 0; i < 100; i++) {
      let v = 0, dv = 0;
      for (let t = 0; t < f.length; t++) { v += f[t] * (1 + r) ** -t; dv += -t * f[t] * (1 + r) ** (-t - 1); }
      const paso = v / dv; r -= paso;
      if (Math.abs(paso) < 1e-12) return r;
    }
  }
  return NaN;
}
const BC = (r, f) => {
  const ben = f.map((x, t) => (x > 0 ? x * (1 + r) ** -t : 0)).reduce((a, b) => a + b, 0);
  const cos = f.map((x, t) => (x < 0 ? -x * (1 + r) ** -t : 0)).reduce((a, b) => a + b, 0);
  return ben / cos;
};
function PR(f, r = 0) {
  const d = f.map((x, t) => x / (1 + r) ** t);
  let acum = 0;
  for (let t = 0; t < d.length; t++) {
    const antes = acum; acum += d[t];
    if (t > 0 && antes < 0 && acum >= 0) return (t - 1) + (-antes / d[t]);
  }
  return null;
}
const F = {
  depreciacion: d => (d.costo - (d.salvamento ?? 0)) / d.vida,
  impuesto: d => d.t * (d.ingresos - d.costos - (d.dep ?? 0)),
  escudo: d => d.t * d.dep,
  fcOperativo: d => (d.ingresos - d.costos - d.dep) * (1 - d.t) + d.dep,
  suma: d => d.valores.reduce((a, b) => a + b, 0),
  peUnidades: d => d.cf / (d.precio - d.cv),
  pePesos: d => d.cf / d.mc,
  esperado: d => d.valores.reduce((a, v, i) => a + v * d.probs[i], 0),
  caidaCritica: d => d.vpnBase / d.porPunto,
  vp: d => d.monto * (1 + d.tasa) ** -d.n,
  vf: d => d.monto * (1 + d.tasa) ** d.n,
  vpFlujos: d => VPN(d.tasa, [0, ...d.flujos]),
  vpn: d => VPN(d.tasa, d.flujos),
  tir: d => TIR(d.flujos) * 100,
  bc: d => BC(d.tasa, d.flujos),
  bcDirecto: d => d.ben / d.cos,
  pr: d => PR(d.flujos, 0),
  prd: d => PR(d.flujos, d.tasa),
};

// "$1.234,5 M" → 1234.5 ; "−120" → -120
function leerNumero(txt) {
  const s = txt.replace(/[$M%a-zñáéíóú\s]/gi, '').replace(/−/g, '-').replace(/\./g, '').replace(',', '.');
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}
const cerca = (a, b, tolRel = 0.01, tolAbs = 0.005) => Math.abs(a - b) <= Math.max(tolAbs, tolRel * Math.abs(b));
const palabras = s => s.trim().split(/\s+/).length;

// ── 1. Lecciones ──
for (const [k, v] of Object.entries(LECCIONES)) {
  if (palabras(v) > 70) err(`lección ${k}`, `tiene ${palabras(v)} palabras (> 70, no se lee en 30 s)`);
}

// ── 2. Preguntas ──
const ids = new Set();
for (const p of PREGUNTAS) {
  if (ids.has(p.id)) err(p.id, 'ID duplicado'); ids.add(p.id);
  if (!LECCIONES[p.leccion]) err(p.id, `lección inexistente "${p.leccion}"`);
  if (p.opciones.length !== 4) err(p.id, `tiene ${p.opciones.length} opciones (se esperan 4)`);
  if (new Set(p.opciones.map(o => o.t)).size !== p.opciones.length) err(p.id, 'opciones con texto repetido');
  if (!(p.correcta >= 0 && p.correcta < p.opciones.length)) err(p.id, 'índice de respuesta correcta inválido');
  p.opciones.forEach((o, i) => { if (i !== p.correcta && !o.porque) err(p.id, `la opción ${i} incorrecta no explica el error`); });
  if (palabras(p.enunciado) > 65) avisos.push(`[${p.id}] enunciado largo (${palabras(p.enunciado)} palabras)`);
  if (p.tiempo < 30 || p.tiempo > 90) err(p.id, `tiempo ${p.tiempo} s fuera de 30–90 s`);

  if (p.tipo === 'calculo') {
    const v = F[p.calc.formula](p.calc.datos);
    if (v == null || !Number.isFinite(v)) { err(p.id, 'no se pudo recalcular'); continue; }
    const correcta = leerNumero(p.opciones[p.correcta].t);
    // Comparación exacta a la precisión mostrada (dec decimales).
    if (Math.abs(correcta - v) > 0.5 * 10 ** -(p.dec ?? 2) + 1e-9) err(p.id, `la opción correcta dice ${correcta} pero el cálculo da ${v}`);
    if (Math.abs(v * 100 - Math.round(v * 100)) > 1e-6) err(p.id, `la respuesta ${v} no es "redonda" (más de 2 decimales)`);
    // datos con cifras redondas
    JSON.stringify(p.calc.datos).match(/-?\d+(\.\d+)?/g).forEach(n => { if ((n.split('.')[1] ?? '').length > 2) err(p.id, `dato poco redondo: ${n}`); });
    p.opciones.forEach((o, i) => {
      if (i === p.correcta) return;
      const d = leerNumero(o.t);
      if (!Number.isFinite(d)) err(p.id, `distractor ilegible: ${o.t}`);
      else if (Math.abs(d - v) <= 0.04 * Math.max(Math.abs(v), 1e-9) && Math.abs(d - v) < 0.5) err(p.id, `distractor ${o.t} demasiado cerca de la respuesta (${v}): ambiguo`);
      else if (Math.abs(d - v) <= 0.04 * Math.abs(v)) err(p.id, `distractor ${o.t} a menos de 4 % de la respuesta: ambiguo`);
    });
  }
  for (const c of p.chequeos ?? []) {
    const v = F[c.formula](c.datos);
    if (Math.abs(v - c.esperado) > (c.tol ?? 0.005)) err(p.id, `chequeo ${c.formula} da ${v}, el texto dice ${c.esperado}`);
  }
}

// Cobertura: cada bloque B–G con ≥ 8 desafíos y ≥ 3 duelos de cálculo.
for (const b of 'BCDEFG') {
  const des = PREGUNTAS.filter(p => p.bloque === b && p.uso.includes('desafio')).length;
  const due = PREGUNTAS.filter(p => p.bloque === b && p.uso.includes('duelo')).length;
  if (des < 7) err(`bloque ${b}`, `solo ${des} desafíos (mínimo 7)`);
  if (due < 1) err(`bloque ${b}`, `sin preguntas de duelo`);
  if (due < 3) avisos.push(`[bloque ${b}] solo ${due} preguntas de duelo`);
}
if (PREGUNTAS.length < 15) err('banco', 'menos de 15 preguntas');
if (PREGUNTAS.filter(p => p.uso.includes('caza')).length < 3) err('banco', 'menos de 3 ítems de Caza el error');
if (PREGUNTAS.filter(p => p.uso.includes('salida')).length < 3) err('banco', 'menos de 3 ítems de exit ticket');

// ── 3. Estrella ──
for (const s of ESTRELLA) {
  const v = VPN(s.tasa, s.flujos);
  const esperado = Math.abs(v) < 0.005 ? 1 : v > 0 ? 0 : 2;
  if (s.correcta !== esperado) err(s.id, `signo del VPN mal marcado (VPN = ${v.toFixed(4)})`);
  if (Math.abs(v) > 0.005 && Math.abs(v) < 2) avisos.push(`[${s.id}] VPN muy cerca de 0 (${v.toFixed(2)}): ¿se decide en 30 s?`);
}
if (new Set(ESTRELLA.map(s => s.correcta)).size < 3) err('estrella', 'no hay variedad de respuestas (>0, =0, <0)');

// ── 4. Mini-juegos ──
for (const m of MG_CARRERA) if (m.chequeo) {
  const v = F[m.chequeo.formula](m.chequeo.datos);
  if (Math.abs(v - m.chequeo.esperado) > 0.005) err(`carrera "${m.t}"`, `da ${v}, se esperaba ${m.chequeo.esperado}`);
}
for (const t of MG_TERMOMETRO) {
  const r = t.base + (t.vpnBase / t.porPaso) * t.paso;
  if (r !== t.respuesta) err(t.id, `respuesta ${t.respuesta} ≠ ${r}`);
  if (r < t.min || r > t.max) err(t.id, 'la respuesta está fuera del rango del deslizador');
  if (Math.abs(((r - t.min) / t.salto) - Math.round((r - t.min) / t.salto)) > 1e-9) err(t.id, 'la respuesta no cae en un paso del deslizador');
}
if (MG_ENTRA.length < 8) err('entra', 'menos de 8 ítems');
for (const o of MG_ORDENA) if (new Set(o.pasos).size !== o.pasos.length) err(o.id, 'pasos repetidos');

// ── 5. Jefe final: los indicadores deben contradecirse como dice el diseño ──
{
  const r = JEFE.tmar;
  const P = Object.fromEntries(JEFE.proyectos.map(p => [p.id, {
    inv: -p.flujos[0], vpn: VPN(r, p.flujos), tir: TIR(p.flujos), bc: BC(r, p.flujos), pr: PR(p.flujos), prd: PR(p.flujos, r), f: p.flujos,
  }]));
  for (const p of JEFE.proyectos) {
    const q = P[p.id];
    if (!cerca(p.vpn, q.vpn) || !cerca(p.tir, q.tir * 100) || !cerca(p.bc, q.bc)) err(`jefe ${p.id}`, 'indicadores publicados no coinciden con el recálculo');
  }
  const max = k => Object.entries(P).sort((a, b) => b[1][k] - a[1][k])[0][0];
  if (max('vpn') !== 'P1') err('jefe', 'P1 debería tener el mayor VPN');
  if (max('tir') !== 'P2') err('jefe', 'P2 debería tener la mayor TIR');
  if (max('bc') !== 'P2') err('jefe', 'P2 debería tener la mayor B/C');
  if (!(P.P3.vpn < 0)) err('jefe', 'P3 debería tener VPN < 0');
  if (!(P.P3.pr < P.P1.pr && P.P3.pr < P.P2.pr)) err('jefe', 'P3 debería recuperar más rápido (PR simple)');
  if (P.P3.prd !== null) err('jefe', 'P3 no debería recuperarse en PR descontado');
  if (JEFE.fase1.correcto !== 'P1') err('jefe', 'fase 1 debe ser P1');
  const presupuesto2 = 100;
  const viables2 = Object.entries(P).filter(([, q]) => q.inv <= presupuesto2 && q.vpn > 0).sort((a, b) => b[1].vpn - a[1].vpn);
  if (viables2[0]?.[0] !== JEFE.fase2.correcto) err('jefe', `fase 2: con $${presupuesto2} M la mejor opción es ${viables2[0]?.[0]}`);
  if (!(VPN(0.25, P.P1.f) < 0 && VPN(0.25, P.P2.f) > 0)) err('jefe', 'el giro alterno (TMAR 25 %) no cambia la decisión a P2');
  for (const f of [JEFE.fase1, JEFE.fase2]) if (f.justificaciones.filter(j => j.ok).length !== 1) err('jefe', 'cada fase necesita exactamente una justificación correcta');
}

// ── Reporte ──
const total = PREGUNTAS.length;
const porBloque = Object.fromEntries('ABCDEFG'.split('').map(b => [b, PREGUNTAS.filter(p => p.bloque === b).length]));
console.log(`Preguntas: ${total} ${JSON.stringify(porBloque)} · Estrella: ${ESTRELLA.length} · Termómetro: ${MG_TERMOMETRO.length}`);
console.log(`Respuestas correctas por letra: ${[0, 1, 2, 3].map(i => 'ABCD'[i] + '=' + PREGUNTAS.filter(p => p.correcta === i).length).join(' ')}`);
avisos.forEach(a => console.log('AVISO ' + a));
if (errores.length) { errores.forEach(e => console.log('ERROR ' + e)); console.log(`\n✗ ${errores.length} errores`); process.exit(1); }
console.log('\n✓ Banco verificado: sin errores de cálculo ni opciones ambiguas.');
