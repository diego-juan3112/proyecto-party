// Mascotas originales del Eje Cafetero, dibujadas con formas simples en SVG (viewBox 100×100).
import { CONFIG } from './config.js';

const OJOS = (x1, x2, y, r = 6) => `
  <circle cx="${x1}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x1 + 1.5}" cy="${y + 1}" r="${r * 0.5}" fill="#2a1a12"/>
  <circle cx="${x2}" cy="${y}" r="${r}" fill="#fff"/><circle cx="${x2 + 1.5}" cy="${y + 1}" r="${r * 0.5}" fill="#2a1a12"/>`;
const SONRISA = (x, y, w = 10) => `<path d="M${x - w} ${y} q${w} ${w * 0.8} ${w * 2} 0" stroke="#2a1a12" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;

const DIBUJOS = {
  tintico: c => `
    <path d="M30 22 q4 -8 0 -14 M44 22 q4 -8 0 -14 M58 22 q4 -8 0 -14" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" opacity=".8"/>
    <path d="M18 30 h60 l-6 46 q-2 12 -14 12 h-20 q-12 0 -14 -12 z" fill="${c}"/>
    <path d="M78 40 q16 0 14 14 q-2 12 -18 12" stroke="${c}" stroke-width="8" fill="none"/>
    <rect x="18" y="30" width="60" height="8" fill="#f5efe0" opacity=".9"/>
    ${OJOS(38, 58, 54)}${SONRISA(48, 68, 8)}`,
  arepita: c => `
    <circle cx="50" cy="52" r="38" fill="${c}"/>
    <path d="M26 36 l14 -10 M30 74 l18 -12 M62 30 l14 12 M60 78 l14 -10" stroke="#a8691f" stroke-width="5" stroke-linecap="round" opacity=".7"/>
    ${OJOS(38, 62, 48)}${SONRISA(50, 62, 9)}`,
  yipao: c => `
    <rect x="12" y="38" width="76" height="32" rx="8" fill="${c}"/>
    <path d="M26 38 l8 -16 h30 l8 16" fill="${c}"/><rect x="38" y="26" width="22" height="12" rx="3" fill="#cfe9ff"/>
    <rect x="66" y="30" width="18" height="10" rx="2" fill="#7a5a2a"/>
    <circle cx="30" cy="74" r="11" fill="#2a1a12"/><circle cx="30" cy="74" r="4" fill="#ccc"/>
    <circle cx="72" cy="74" r="11" fill="#2a1a12"/><circle cx="72" cy="74" r="4" fill="#ccc"/>
    ${OJOS(30, 46, 52, 5.5)}`,
  guadua: c => `
    <rect x="30" y="8" width="40" height="86" rx="14" fill="${c}"/>
    <rect x="28" y="34" width="44" height="5" rx="2" fill="#4c7a22"/><rect x="28" y="66" width="44" height="5" rx="2" fill="#4c7a22"/>
    <path d="M70 24 q16 -10 22 -4 q-10 6 -22 10" fill="#5aa335"/>
    ${OJOS(42, 58, 50)}${SONRISA(50, 58, 6)}`,
  colibri: c => `
    <ellipse cx="46" cy="56" rx="26" ry="20" fill="${c}"/>
    <path d="M70 48 l26 -6 l-26 12 z" fill="#2a1a12"/>
    <path d="M36 44 q-8 -30 26 -26 q-6 16 -14 26 z" fill="#7fd6c8"/>
    <path d="M22 60 l-16 8 l18 2 z" fill="${c}"/>
    <circle cx="60" cy="50" r="6" fill="#fff"/><circle cx="61.5" cy="51" r="3" fill="#2a1a12"/>`,
  ruana: c => `
    <circle cx="50" cy="26" r="16" fill="#e8b58a"/>
    <path d="M14 86 l36 -50 l36 50 z" fill="${c}"/>
    <path d="M24 72 h52 M30 80 h40" stroke="#ffc934" stroke-width="4"/><path d="M27 66 h46" stroke="#2667d8" stroke-width="3"/>
    ${OJOS(43, 57, 24, 4.5)}${SONRISA(50, 32, 5)}`,
  panelita: c => `
    <rect x="16" y="22" width="68" height="62" rx="10" fill="${c}"/>
    <path d="M16 36 h68" stroke="#8a5a17" stroke-width="3" opacity=".6"/>
    <rect x="24" y="28" width="16" height="4" rx="2" fill="#fff" opacity=".5"/>
    ${OJOS(38, 62, 54)}${SONRISA(50, 68, 8)}`,
  chiva: c => `
    <rect x="8" y="24" width="84" height="52" rx="10" fill="${c}"/>
    <rect x="8" y="58" width="84" height="5" fill="#ffc934"/><rect x="8" y="64" width="84" height="4" fill="#2667d8"/>
    <rect x="16" y="30" width="16" height="14" rx="3" fill="#cfe9ff"/><rect x="36" y="30" width="16" height="14" rx="3" fill="#cfe9ff"/><rect x="56" y="30" width="16" height="14" rx="3" fill="#cfe9ff"/>
    <path d="M10 22 h80" stroke="#2a1a12" stroke-width="4"/><rect x="24" y="12" width="52" height="10" rx="2" fill="#a0522d"/>
    <circle cx="26" cy="80" r="10" fill="#2a1a12"/><circle cx="74" cy="80" r="10" fill="#2a1a12"/>
    ${OJOS(80, 86, 40, 3.5)}`,
  sombrerito: c => `
    <ellipse cx="50" cy="66" rx="44" ry="14" fill="#f3ead2"/>
    <path d="M26 64 q0 -40 24 -40 q24 0 24 40 z" fill="#f3ead2"/>
    <rect x="26" y="52" width="48" height="10" fill="${c}"/>
    <path d="M30 70 q20 8 40 0" stroke="#d2c4a0" stroke-width="2" fill="none"/>
    ${OJOS(40, 60, 40, 5)}`,
  mochila: c => `
    <path d="M30 30 q20 -30 40 0" stroke="#2a1a12" stroke-width="5" fill="none"/>
    <rect x="18" y="28" width="64" height="62" rx="16" fill="${c}"/>
    <path d="M18 50 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6" stroke="#ffc934" stroke-width="3.5" fill="none"/>
    <path d="M18 74 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6" stroke="#ff6b8a" stroke-width="3.5" fill="none"/>
    ${OJOS(40, 60, 62, 5)}`,
};

export function mascota(id) { return CONFIG.mascotas.find(m => m.id === id) ?? CONFIG.mascotas[0]; }

// Devuelve un <svg> con la mascota. tam en px opcional (por defecto escala con CSS).
export function mascotaSVG(id, clase = 'mascota') {
  const m = mascota(id);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('class', clase);
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', m.nombre);
  svg.innerHTML = (DIBUJOS[m.id] ?? DIBUJOS.tintico)(m.color);
  return svg;
}
