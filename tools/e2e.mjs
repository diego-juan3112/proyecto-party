// Prueba de punta a punta: una pantalla + N celulares (pestañas) jugando una partida completa en modo local.
// Usa Microsoft Edge instalado (playwright-core, sin descargar navegadores).
// Uso: node tools/e2e.mjs [equipos=10] [velocidad=10]
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const N = Number(process.argv[2] || 10);
const VEL = Number(process.argv[3] || 10);
const PUERTO = 8091;
const BASE = `http://localhost:${PUERTO}`;
const CAPT = join(RAIZ, 'capturas');
mkdirSync(CAPT, { recursive: true });

const servidor = spawn(process.execPath, [join(RAIZ, 'tools', 'servidor.mjs')], { env: { ...process.env, PORT: PUERTO }, stdio: 'ignore' });
await new Promise(r => setTimeout(r, 800));

const errores = [];
const navegador = await chromium.launch({ channel: 'msedge', headless: true });
const ctx = await navegador.newContext();
const vigilar = (p, nombre) => {
  p.on('pageerror', e => errores.push(`[${nombre}] ${e.message}`));
  p.on('console', m => { if (m.type() === 'error') errores.push(`[${nombre}] consola: ${m.text()}`); });
};

const capturadas = new Set();
async function capturar(p, nombre) {
  if (capturadas.has(nombre)) return;
  capturadas.add(nombre);
  await p.bringToFront();
  await p.screenshot({ path: join(CAPT, nombre + '.png'), timeout: 15000 }).catch(e => console.log('captura fallida', nombre, String(e.message).slice(0, 120)));
}

try {
  // ── Pantalla ──
  const pantalla = await ctx.newPage();
  await pantalla.setViewportSize({ width: 1600, height: 900 });
  vigilar(pantalla, 'pantalla');
  pantalla.on('dialog', d => d.dismiss());
  await pantalla.goto(`${BASE}/?modo=pantalla&red=local&vel=${VEL}`);
  await pantalla.waitForSelector('.qr-placa .codigo');
  const codigo = (await pantalla.textContent('.qr-placa .codigo')).trim();
  console.log('Sala', codigo);

  // ── Celulares ──
  const tels = [];
  for (let i = 0; i < N; i++) {
    const t = await ctx.newPage();
    await t.setViewportSize({ width: 390, height: 844 });
    vigilar(t, 'tel' + (i + 1));
    await t.addInitScript(c => { try { localStorage.removeItem('expedicion-vpn:' + c); } catch { /* */ } }, codigo);
    await t.goto(`${BASE}/?sala=${codigo}&red=local`);
    await t.waitForSelector('.mascota-op');
    if (i === 0) await capturar(t, 'tel-01-unirse');
    await t.locator('.mascota-op:not([disabled])').first().click();
    await t.fill('input[placeholder^="Ej."], .formulario label:nth-of-type(1) input', `Equipo ${i + 1}`);
    const integ = t.locator('input[aria-label^="Integrante"]');
    await integ.nth(0).fill(['Ana', 'Luis', 'Sara', 'Tomás'][i % 4]);
    await integ.nth(1).fill(['Juan', 'Vale', 'Pipe', 'Caro'][i % 4]);
    await t.click('button[type=submit]');
    await t.waitForSelector('.tel-cabeza', { timeout: 8000 });
    tels.push(t);
  }
  await pantalla.waitForTimeout(500);
  await capturar(pantalla, 'pantalla-01-lobby');
  await capturar(tels[0], 'tel-02-dentro');
  await pantalla.click('text=Empezar con');

  // ── Bucle: cada celular hace clic en lo que tenga disponible ──
  const fasesVistas = new Set();
  const inicio = Date.now();
  let fin = false;
  async function actuar(t, i) {
    const vis = async sel => (await t.locator(sel).count()) > 0 && t.locator(sel).first().isVisible().catch(() => false);
    const clic = async sel => { try { await t.locator(sel).first().click({ timeout: 1500 }); return true; } catch { return false; } };
    const azar = async sel => { const n = await t.locator(sel).count(); if (!n) return false; try { await t.locator(sel).nth(Math.floor(Math.random() * n)).click({ timeout: 1500 }); return true; } catch { return false; } };
    if (await vis('.dado-boton')) { if (i === 0) await capturar(t, 'tel-03-dado'); return clic('.dado-boton'); }
    if (await vis('text=Ya entendimos')) { if (i === 0) await capturar(t, 'tel-04-leccion'); return clic('text=Ya entendimos'); }
    if (await vis('.proyecto-op')) { if (i === 0) await capturar(t, 'tel-09-jefe'); await azar('.proyecto-op'); await azar('.opcion'); return clic('text=Enviar decisión'); }
    if (await vis('text=Tres preguntas de salida')) { const bloques = await t.locator('.tel-cuerpo .opciones').count(); for (let b = 0; b < bloques; b++) await t.locator('.tel-cuerpo .opciones').nth(b).locator('.opcion').nth(Math.floor(Math.random() * 4)).click(); return clic('text=Enviar respuestas'); }
    if (await vis('.catalogo')) { if (i === 0) await capturar(t, 'tel-06-tienda'); return Math.random() < 0.5 ? azar('.producto:not([disabled])') || clic('text=Salir sin comprar') : clic('text=Salir sin comprar'); }
    if (await vis('text=Casilla de inversión')) return clic(Math.random() < 0.6 ? 'button:has-text("Invertir")' : 'text=No invertir');
    if (await vis('.pasos-orden')) { if (i === 0) await capturar(t, 'tel-07-ordena'); const n = await t.locator('.paso').count(); for (let k = 0; k < n; k++) await t.locator('.paso:not(.usado)').first().click(); return clic('text=Enviar orden'); }
    if (await vis('.apuesta-control')) { await clic('.apuesta-control button[aria-label="Más"]'); return clic('text=Apostar'); }
    if (await vis('.tarjeta-mg')) { if (i === 0) await capturar(t, 'tel-08-minijuego'); return azar('.tarjeta-mg .botones-par button'); }
    if (await vis('.deslizador')) return clic('text=Enviar estimación');
    if (await vis('.opcion:not(.tachada)')) { if (i === 0) await capturar(t, 'tel-05-reto'); return azar('.opcion:not(.tachada)'); }
    if (i === 0 && (await vis('.resultado'))) await capturar(t, 'tel-10-resultado');
    return false;
  }
  while (!fin && Date.now() - inicio < 12 * 60 * 1000) {
    await Promise.all(tels.map((t, i) => actuar(t, i).catch(() => {})));
    const fase = (await pantalla.textContent('.cabecera .fase').catch(() => '')).split('·')[0].trim();
    if (!fasesVistas.has(fase)) {
      fasesVistas.add(fase);
      const slug = fase.toLowerCase().normalize('NFD').replace(/[^\w]+/g, '-');
      await pantalla.waitForTimeout(fase === 'Avanzando' ? 900 : 300);
      await capturar(pantalla, `pantalla-${String(fasesVistas.size + 1).padStart(2, '0')}-${slug}`);
      console.log(`${((Date.now() - inicio) / 1000).toFixed(0)} s · ${fase}`);
    }
    if (fase === 'Fin') fin = true;
    await pantalla.waitForTimeout(250);
  }
  await capturar(tels[0], 'tel-11-final');
  console.log(fin ? `\n✓ Partida completa con ${N} equipos en ${((Date.now() - inicio) / 1000).toFixed(0)} s reales (velocidad ×${VEL}).` : '\n✗ La partida no terminó a tiempo.');
  console.log(`Fases vistas: ${[...fasesVistas].join(' → ')}`);
  if (errores.length) { console.log(`\n✗ ${errores.length} errores en consola:`); [...new Set(errores)].slice(0, 30).forEach(e => console.log('  ' + e)); process.exitCode = 1; }
  else console.log('✓ Sin errores de consola en la pantalla ni en los celulares.');
  if (!fin) process.exitCode = 1;
} finally {
  await navegador.close();
  servidor.kill();
}
