// Enrutador: una sola página con tres caras.
//   index.html                       → portada (proyectar o unirse)
//   index.html?modo=pantalla         → pantalla proyectada (anfitrión)   [&red=local] [&demo=1]
//   index.html?sala=K7Q2             → control del equipo en el celular  [&red=local]
import { h, limpiar } from './ui.js';
import { mascotaSVG } from './mascotas.js';
import { CONFIG } from './config.js';

const q = new URLSearchParams(location.search);
const app = document.getElementById('app');
// En localhost se ensaya sin Firebase salvo que se pida lo contrario.
const red = q.get('red') || (['localhost', '127.0.0.1'].includes(location.hostname) ? 'local' : 'firebase');

if (q.get('modo') === 'pantalla') {
  import('./pantalla.js').then(m => m.iniciarPantalla(app, { red, demo: Number(q.get('demo') || 0) }));
} else if (q.get('sala')) {
  import('./control.js').then(m => m.iniciarControl(app, { red, sala: q.get('sala').toUpperCase() }));
} else {
  portada();
}

function portada() {
  const conRed = r => (r === 'local' ? '&red=local' : '');
  let codigo = '';
  const entrada = h('input', { placeholder: 'Ej.: K7Q2', maxlength: 6, autocapitalize: 'characters', autocomplete: 'off', 'aria-label': 'Código de la sala', on: { input: e => { codigo = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); e.target.value = codigo; } } });
  limpiar(app,
    h('div.portada',
      h('div.portada-caja',
        h('h1', 'Expedición VPN'),
        h('p.sub', 'Un juego por equipos para aprender a decidir si vale la pena meterle plata a un negocio. No hace falta saber finanzas: todo se explica en el camino.'),
        h('div.portada-opciones',
          h('button.portada-opcion', { on: { click: () => { location.search = '?modo=pantalla' + conRed(red); } } },
            h('strong', 'Proyectar la partida'), h('span', 'Para el presentador: abre el tablero y el código QR.')),
          h('form.portada-opcion.formulario', { on: { submit: e => { e.preventDefault(); if (codigo.length >= 4) location.search = `?sala=${codigo}${conRed(red)}`; } } },
            h('strong', 'Unirme con mi equipo'),
            h('label', h('span', 'Código de la sala'), entrada),
            h('button.boton.azul', { type: 'submit' }, 'Entrar a la sala')),
          h('button.portada-opcion', { on: { click: () => { location.search = '?modo=pantalla&demo=8' + conRed(red); } } },
            h('strong', 'Ver una partida de demostración'), h('span', '8 equipos simulados juegan solos. Útil para ensayar el guion.')),
        ),
        h('div.portada-desfile', { 'aria-hidden': 'true' }, CONFIG.mascotas.map(m => h('div.ficha', { style: { '--c': m.color } }, mascotaSVG(m.id)))),
      )));
}
