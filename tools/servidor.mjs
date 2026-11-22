// Servidor estático mínimo para ensayar el juego en el computador (sin dependencias).
// Uso: npm run local   → abre http://localhost:8080
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUERTO = Number(process.env.PORT || 8080);
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.md': 'text/markdown; charset=utf-8' };

createServer(async (req, res) => {
  try {
    const ruta = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    let archivo = normalize(join(RAIZ, ruta));
    if (!archivo.startsWith(RAIZ)) { res.writeHead(403).end(); return; }
    if ((await stat(archivo).catch(() => null))?.isDirectory()) archivo = join(archivo, 'index.html');
    const datos = await readFile(archivo);
    res.writeHead(200, { 'Content-Type': TIPOS[extname(archivo)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(datos);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('No encontrado');
  }
}).listen(PUERTO, () => {
  console.log(`Expedición VPN en http://localhost:${PUERTO}`);
  console.log(`  Pantalla (ensayo local): http://localhost:${PUERTO}/?modo=pantalla`);
  console.log(`  Demo con 8 equipos:      http://localhost:${PUERTO}/?modo=pantalla&demo=8`);
  console.log('  Para unirse como equipo, abran otra pestaña con el enlace que muestra la pantalla.');
});
