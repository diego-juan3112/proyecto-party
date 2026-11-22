// Utilidades de interfaz compartidas por la pantalla y el control.

// h('div.clase#id', {atributos, on:{click}}, ...hijos)
export function h(sel, props = {}, ...hijos) {
  if (props == null || typeof props !== 'object' || props instanceof Node || Array.isArray(props)) { hijos.unshift(props); props = {}; }
  const [, tag = 'div', resto = ''] = sel.match(/^([a-z0-9]+)?(.*)$/i);
  const el = document.createElement(tag);
  for (const m of resto.matchAll(/([.#])([\w-]+)/g)) {
    if (m[1] === '.') el.classList.add(m[2]); else el.id = m[2];
  }
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'on') for (const [ev, fn] of Object.entries(v)) el.addEventListener(ev, fn);
    else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
    else if (k === 'html') el.innerHTML = v;
    else if (k in el && k !== 'list' && typeof v !== 'string') el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  agregar(el, hijos);
  return el;
}
function agregar(el, hijos) {
  for (const c of hijos.flat(Infinity)) {
    if (c == null || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}
export function limpiar(el, ...hijos) { el.replaceChildren(); agregar(el, hijos); return el; }

export const num = (x, dec = 0) => {
  const r = Math.round(x * 10 ** dec) / 10 ** dec;
  return r.toLocaleString('es-CO', { maximumFractionDigits: dec, minimumFractionDigits: 0 }).replace('-', '−');
};
export const dinero = (x, dec = 1) => `${x < 0 ? '−' : ''}$${num(Math.abs(x), dec)} M`;
export const signo = d => (d > 0 ? `+${d}` : d < 0 ? `−${Math.abs(d)}` : '±0');

// Cuenta regresiva local a partir de "restante" (segundos) recibido del anfitrión.
export class Reloj {
  constructor() { this.fin = null; this.total = null; }
  fijar(restante, total = null) {
    if (restante == null) { this.fin = null; return; }
    this.fin = performance.now() + restante * 1000;
    this.total = total ?? restante;
  }
  restante() { return this.fin == null ? null : Math.max(0, (this.fin - performance.now()) / 1000); }
  fraccion() { const r = this.restante(); return r == null || !this.total ? 1 : Math.min(1, r / this.total); }
}
export const mmss = s => { if (s == null) return ''; s = Math.ceil(s); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

export const reducirMovimiento = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

// Caras del dado en SVG (pips)
const PIPS = { 1: [[50, 50]], 2: [[28, 28], [72, 72]], 3: [[26, 26], [50, 50], [74, 74]], 4: [[28, 28], [72, 28], [28, 72], [72, 72]], 5: [[26, 26], [74, 26], [50, 50], [26, 74], [74, 74]], 6: [[28, 24], [72, 24], [28, 50], [72, 50], [28, 76], [72, 76]] };
export function dadoSVG(n, clase = 'dado') {
  const d = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  d.setAttribute('viewBox', '0 0 100 100'); d.setAttribute('class', clase); d.setAttribute('role', 'img'); d.setAttribute('aria-label', `Dado: ${n}`);
  d.innerHTML = `<rect x="6" y="6" width="88" height="88" rx="20" class="dado-cara"/>` + (PIPS[n] || []).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9" class="dado-pip"/>`).join('');
  return d;
}

export const ICONOS_CASILLA = {
  desafio: { icono: '❓', nombre: 'Desafío' },
  ingreso: { icono: '💰', nombre: 'Ingreso' },
  costo: { icono: '🧾', nombre: 'Costo' },
  impuesto: { icono: '🏛️', nombre: 'Impuesto' },
  evento: { icono: '⚡', nombre: 'Evento' },
  inversion: { icono: '🏗️', nombre: 'Inversión' },
  tienda: { icono: '🛍️', nombre: 'Tienda' },
  duelo: { icono: '⚔️', nombre: 'Duelo' },
  minijuego: { icono: '🧩', nombre: 'Mini-juego' },
};
export const ICONOS_ITEM = { calculadora: '🧮', pista: '💡', escudo: '🛡️', tasaBaja: '📉', dadoDoble: '🎲' };

export function descargar(nombre, contenido, tipo = 'text/csv;charset=utf-8') {
  const url = URL.createObjectURL(new Blob(['﻿' + contenido], { type: tipo }));
  const a = h('a', { href: url, download: nombre });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function guardar(clave, valor) { try { localStorage.setItem(clave, JSON.stringify(valor)); } catch { /* sin almacenamiento */ } }
export function leer(clave) { try { return JSON.parse(localStorage.getItem(clave)); } catch { return null; } }
export function borrar(clave) { try { localStorage.removeItem(clave); } catch { /* nada */ } }
