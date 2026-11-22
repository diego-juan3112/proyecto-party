// Funciones financieras puras. Las usan el juego (navegador) y las herramientas (Node).
// Flujos: arreglo indexado por periodo, flujos[0] = año 0 (normalmente negativo).

export const vp = (monto, tasa, n) => monto / (1 + tasa) ** n;
export const vf = (monto, tasa, n) => monto * (1 + tasa) ** n;

export const vpn = (tasa, flujos) =>
  flujos.reduce((s, f, t) => s + f / (1 + tasa) ** t, 0);

// TIR por bisección (proyectos convencionales: un cambio de signo).
export function tir(flujos, lo = -0.99, hi = 10) {
  let a = lo, b = hi;
  for (let i = 0; i < 300; i++) {
    const m = (a + b) / 2;
    if (vpn(m, flujos) > 0) a = m; else b = m;
  }
  return (a + b) / 2;
}

// Relación B/C = VP de entradas / VP de salidas (incluida la inversión).
export function bc(tasa, flujos) {
  let ben = 0, cos = 0;
  flujos.forEach((f, t) => {
    const v = f / (1 + tasa) ** t;
    if (f >= 0) ben += v; else cos += -v;
  });
  return ben / cos;
}

// Periodo de recuperación (simple si tasa = 0, descontado si tasa > 0).
// Devuelve null si nunca se recupera dentro del horizonte.
export function pr(flujos, tasa = 0) {
  let acum = flujos[0];
  for (let t = 1; t < flujos.length; t++) {
    const v = flujos[t] / (1 + tasa) ** t;
    if (acum + v >= 0) return t - 1 + -acum / v;
    acum += v;
  }
  return null;
}

// Fórmulas de insumos / flujo / riesgo usadas por el banco de preguntas.
export const FORMULAS = {
  depreciacion: ({ costo, salvamento = 0, vida }) => (costo - salvamento) / vida,
  impuesto: ({ ingresos, costos, dep = 0, t }) => (ingresos - costos - dep) * t,
  escudo: ({ dep, t }) => dep * t,
  fcOperativo: ({ ingresos, costos, dep, t }) => {
    const uai = ingresos - costos - dep;
    return uai - uai * t + dep;
  },
  suma: ({ valores }) => valores.reduce((s, v) => s + v, 0),
  peUnidades: ({ cf, precio, cv }) => cf / (precio - cv),
  pePesos: ({ cf, mc }) => cf / mc,
  esperado: ({ valores, probs }) => valores.reduce((s, v, i) => s + v * probs[i], 0),
  caidaCritica: ({ vpnBase, porPunto }) => vpnBase / porPunto,
  vp: ({ monto, tasa, n }) => vp(monto, tasa, n),
  vf: ({ monto, tasa, n }) => vf(monto, tasa, n),
  vpFlujos: ({ flujos, tasa }) => flujos.reduce((s, f, i) => s + vp(f, tasa, i + 1), 0),
  vpn: ({ flujos, tasa }) => vpn(tasa, flujos),
  tir: ({ flujos }) => tir(flujos) * 100,
  bc: ({ flujos, tasa }) => bc(tasa, flujos),
  bcDirecto: ({ ben, cos }) => ben / cos,
  pr: ({ flujos }) => pr(flujos, 0),
  prd: ({ flujos, tasa }) => pr(flujos, tasa),
};

// Formato colombiano: coma decimal, punto de miles.
export function fmtNum(x, dec = 2) {
  const r = Math.round(x * 10 ** dec) / 10 ** dec;
  const [ent, frac] = Math.abs(r).toFixed(dec).split('.');
  const entF = ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const fracT = frac ? frac.replace(/0+$/, '') : '';
  return (r < 0 ? '−' : '') + entF + (fracT ? ',' + fracT : '');
}

export function fmtUnidad(x, unidad, dec = 2) {
  switch (unidad) {
    case 'M': return `$${fmtNum(x, dec)} M`;
    case '%': return `${fmtNum(x, dec)} %`;
    case 'años': return `${fmtNum(x, dec)} años`;
    case 'u': return `${fmtNum(x, 0)} unidades`;
    case 'x': return fmtNum(x, dec);
    default: return fmtNum(x, dec);
  }
}
