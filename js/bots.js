// Equipos simulados. Los usan tools/simular.mjs (balance y duración) y el modo ?demo=1 de la pantalla.
// Un bot mira la tarea INTERNA (con la respuesta correcta) y decide qué tan rápido y qué tan bien responde.
// perfil = { precision: 0..1, velocidad: 0.6..1.2 (multiplica los tiempos) }

const U = (r, a, b) => a + (b - a) * r();

export function planBot(motor, equipoId, perfil, r) {
  const e = motor.eq(equipoId);
  const t = e?.tarea;
  if (!t) return null;
  const v = perfil.velocidad ?? 1;
  const p = perfil.precision;
  const B = motor.B;
  const elegir = (preguntaId, ocultas = [], extra = 0) => {
    const q = motor.idx[preguntaId];
    let prob = p + (q.tipo === 'calculo' ? -0.05 : 0.05) + extra;
    if (ocultas.length) prob = prob + (1 - prob) * 0.5;
    if (r() < Math.min(0.97, Math.max(0.05, prob))) return q.correcta;
    const malas = q.opciones.map((_, k) => k).filter(k => k !== q.correcta && !ocultas.includes(k));
    return malas[Math.floor(r() * malas.length)];
  };
  const resp = (delay, accion) => ({ delay: Math.max(0.5, delay), accion: { ...accion, tareaId: t.id } });

  switch (t.tipo) {
    case 'tirar': return resp(U(r, 2, 7) * v, { tipo: 'tirar', doble: e.items.includes('dadoDoble') });
    case 'desafio':
      if (t.etapa === 'leccion') return resp((r() < 0.5 ? U(r, 3, 8) : U(r, 10, 28)) * v, { tipo: 'listo' });
    // eslint-disable-next-line no-fallthrough
    case 'duelo': case 'dueloBanco': case 'caza': case 'practica': {
      const q = motor.idx[t.preguntaId];
      if (r() < 0.05) return resp(q.tiempo + (t.extra || 0) + 5, { tipo: 'responder', opcion: null }); // se les acaba el tiempo
      const frac = q.tipo === 'calculo' ? U(r, 0.35, 1.0) : U(r, 0.2, 0.75);
      return resp(q.tiempo * frac * v, { tipo: 'responder', opcion: elegir(t.preguntaId, t.ocultas || [], t.tipo === 'practica' ? 0.2 : 0) });
    }
    case 'estrella': {
      const s = motor.idxEstrella[t.estrellaId];
      const ok = r() < Math.min(0.95, p + 0.1);
      const op = ok ? s.correcta : [0, 1, 2].filter(k => k !== s.correcta)[Math.floor(r() * 2)];
      return resp(U(r, 8, 25) * v, { tipo: 'responder', opcion: op });
    }
    case 'invertir': {
      const restantes = motor.C.zonas.length - 1 - motor.S.zona;
      return resp(U(r, 3, 10) * v, { tipo: 'invertir', si: restantes >= 2 ? r() < 0.8 : r() < 0.2 });
    }
    case 'tienda': {
      const asequibles = motor.C.tienda.filter(it => it.precio <= e.monedas);
      const item = asequibles.length && r() < 0.5 ? asequibles[Math.floor(r() * asequibles.length)].id : null;
      return resp(U(r, 5, 15) * v, { tipo: 'comprar', item });
    }
    case 'ordena': {
      const o = B.MG_ORDENA.find(x => x.id === t.ordenaId);
      const n = o.pasos.length;
      let orden = [...Array(n).keys()];
      if (r() > p) { const i = Math.floor(r() * (n - 1)); [orden[i], orden[i + 1]] = [orden[i + 1], orden[i]]; if (r() < 0.5) { const j = Math.floor(r() * (n - 1)); [orden[j], orden[j + 1]] = [orden[j + 1], orden[j]]; } }
      return resp(U(r, 20, 55) * v, { tipo: 'ordenar', orden });
    }
    case 'apuesta': return resp(U(r, 3, 9) * v, { tipo: 'apostar', monto: Math.floor(r() * (t.max + 1)) });
    case 'mg': {
      const mg = motor.S.mg;
      const q = Math.min(0.95, p + 0.1);
      if (mg.tipo === 'entra') return resp(U(r, 25, 58) * v, { tipo: 'mg', respuestas: mg.datos.items.map(i => (r() < q ? B.MG_ENTRA[i].entra : !B.MG_ENTRA[i].entra)) });
      if (mg.tipo === 'carrera') return resp(U(r, 15, 44) * v, { tipo: 'mg', respuestas: mg.datos.items.map(i => (r() < q ? B.MG_CARRERA[i].ok : 1 - B.MG_CARRERA[i].ok)) });
      const T = B.MG_TERMOMETRO.find(x => x.id === mg.datos.termometro);
      const ruido = (r() - 0.5) * (T.max - T.min) * (1.1 - p);
      const val = Math.round(Math.min(T.max, Math.max(T.min, T.respuesta + ruido)) / T.salto) * T.salto;
      return resp(U(r, 8, 28) * v, { tipo: 'mg', respuestas: [val] });
    }
    case 'jefe': {
      const F = B.JEFE[t.fase === 1 ? 'fase1' : 'fase2'];
      const proys = B.JEFE.proyectos.map(x => x.id);
      const proyecto = r() < p ? F.correcto : proys.filter(x => x !== F.correcto)[Math.floor(r() * (proys.length - 1))];
      const okJ = F.justificaciones.findIndex(j => j.ok);
      const justificacion = r() < p ? okJ : [0, 1, 2].filter(k => k !== okJ)[Math.floor(r() * 2)];
      return resp(U(r, 25, 58) * v, { tipo: 'jefe', proyecto, justificacion });
    }
    case 'salida': {
      const respuestas = t.ids.map(id => (r() < p ? motor.idx[id].correcta : (motor.idx[id].correcta + 1) % 4));
      return resp(U(r, 20, 55) * v, { tipo: 'salida', respuestas });
    }
  }
  return null;
}

export function claveTarea(t) { return t ? `${t.id}:${t.etapa || ''}` : null; }
