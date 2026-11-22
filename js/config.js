// Configuración del juego. Todo lo ajustable vive aquí; tools/simular.mjs la usa para balancear.

export const CONFIG = {
  tmar: 0.10, // TMAR del juego (para el "VPN de tu partida")
  maxEquipos: 10,

  // Economía (monedas = flujo de caja)
  monedasIniciales: 10,
  premioDesafio: 6,
  bonoRapidez: 2, // si se responde bien en la primera mitad del tiempo
  ingreso: 5,
  costo: 3,
  impuestoPct: 0.2, // de las monedas que se tengan (piso)
  inversion: { costo: 6, flujoPorZona: 3, salvamento: 2 },
  estrella: { precio: 15, precioAlzaTasas: 20, subsidio: 5, subsidiados: 3 }, // los 3 últimos pagan 5 menos
  robarDuelo: 5,
  premioDueloBanco: 4,
  premioMinijuegoCasilla: 6,
  premioMinijuegoCasillaParcial: 3,
  premiosMinijuegoGlobal: [8, 5, 3],
  apuestaMax: 5,
  capitalSemilla: [6, 4, 2], // último, penúltimo y antepenúltimo en cada cambio de zona
  regaloRezagados: { desdeZona: 3, cantidad: 3 }, // desde la zona E, los 3 últimos reciben un objeto gratis
  bonus: { fijos: ['analista'], aleatorios: 2, pool: ['duelista', 'remontada', 'sobreviviente', 'inversionista'] },
  maxItems: 3,
  practica: 2, // monedas por acertar la pregunta de práctica

  tienda: [
    { id: 'calculadora', nombre: 'Calculadora dorada', precio: 3, desc: '+30 s en tu próximo desafío o duelo.' },
    { id: 'pista', nombre: 'Pista del Analista', precio: 3, desc: 'Elimina 2 opciones incorrectas en tu próxima pregunta.' },
    { id: 'escudo', nombre: 'Escudo de sensibilidad', precio: 4, desc: 'Anula el próximo golpe: costo, impuesto, evento negativo o duelo perdido.' },
    { id: 'tasaBaja', nombre: 'Tasa baja', precio: 5, desc: 'Tu próximo desafío correcto paga el doble ("descuentas menos, vale más").' },
    { id: 'dadoDoble', nombre: 'Dado doble', precio: 5, desc: 'En tu próxima tirada lanzas dos dados.' },
  ],

  // Tiempos en segundos (con la pantalla y los celulares; el presentador puede adelantar)
  tiempos: {
    introReglas: 75,
    practica: 45,
    zonaIntro: 30, // Chiva + evento + mini-lección de zona proyectada
    tirar: 12,
    mover: 6,
    estrellaCheck: 30,
    leccion: 30, // máximo; el equipo puede saltarla
    invertir: 15,
    tienda: 20,
    minijuegoCasilla: 60,
    extraCalculadora: 30,
    resultadoTurno: 8,
    apuesta: 12,
    minijuegoGlobal: { entra: 60, carrera: 45, termometro: 30 },
    minijuegoResultado: 10,
    jefeIntro: 60, // el presentador lee los 3 proyectos
    jefeFase: 60,
    jefeDefensa: 60, // voceros defienden (20 s c/u, los 3 primeros)
    jefeResultado: 15,
    bonus: 45,
    podio: 60,
    cierre: 120,
    salida: 60,
  },

  turnosPorZona: [2, 2, 2, 2, 2, 2],

  // Anillo de 12 casillas por zona (se rota en cada zona para variar)
  anillo: ['desafio', 'ingreso', 'desafio', 'tienda', 'evento', 'desafio', 'duelo', 'costo', 'desafio', 'inversion', 'impuesto', 'minijuego'],

  zonas: [
    { bloque: 'B', nombre: 'Plaza de Mercado de Insumos', leccion: 'insumos', color: '#e8a33d', icono: '🧺' },
    { bloque: 'C', nombre: 'Río del Flujo', leccion: 'flujo_estructura', color: '#3d8fe8', icono: '🌊', minijuego: 'entra' },
    { bloque: 'D', nombre: 'Valle del Tiempo', leccion: 'valor_tiempo', color: '#4caf6a', icono: '⏳' },
    { bloque: 'E', nombre: 'Cordillera de los Indicadores', leccion: 'vpn', color: '#8d5cd6', icono: '⛰️', minijuego: 'carrera' },
    { bloque: 'F', nombre: 'Encrucijada de Criterios', leccion: 'criterios', color: '#d65c7a', icono: '🧭' },
    { bloque: 'G', nombre: 'Volcán del Riesgo', leccion: 'sensibilidad', color: '#e0582b', icono: '🌋', minijuego: 'termometro' },
  ],

  mascotas: [
    { id: 'tintico', nombre: 'Tintico', color: '#6b3e26' },
    { id: 'arepita', nombre: 'Arepita', color: '#f2c14e' },
    { id: 'yipao', nombre: 'Yipao', color: '#2f7d4a' },
    { id: 'guadua', nombre: 'Guadua', color: '#7fb046' },
    { id: 'colibri', nombre: 'Colibrí', color: '#1fa3a3' },
    { id: 'ruana', nombre: 'Ruana', color: '#b23a48' },
    { id: 'panelita', nombre: 'Panelita', color: '#c98a2b' },
    { id: 'chiva', nombre: 'Chiva', color: '#e4572e' },
    { id: 'sombrerito', nombre: 'Sombrerito', color: '#3a3a3a' },
    { id: 'mochila', nombre: 'Mochila', color: '#7b4fa0' },
  ],

  roles: ['Analista', 'Contador', 'Vocero', 'Estratega'],

  // Eventos globales al entrar a las zonas D, E, F y G
  eventosGlobales: [
    { id: 'alzaTasas', nombre: 'Alza de tasas', texto: 'La TMAR sube: en esta zona la estrella cuesta 5 monedas más.', vpn: 'Si la tasa de descuento sube, los flujos futuros valen menos hoy: el VPN baja.' },
    { id: 'competidor', nombre: 'Nuevo competidor', texto: 'Llegó la competencia: los desafíos pagan 2 monedas menos en esta zona.', vpn: 'Menos ingresos → menor flujo de caja → menor VPN.' },
    { id: 'reforma', nombre: 'Reforma tributaria', texto: 'La casilla de impuesto cobra 30 % en esta zona.', vpn: 'Más impuestos → menor flujo después de impuestos → menor VPN.' },
    { id: 'devaluacion', nombre: 'Devaluación', texto: 'Los insumos importados se encarecen: la casilla de costo cobra el doble.', vpn: 'Costos más altos → menor flujo → menor VPN. ¡Por eso se hace sensibilidad!' },
    { id: 'nino', nombre: 'Fenómeno de El Niño', texto: 'Sequía en el Eje Cafetero: todos pierden 2 monedas (el escudo protege).', vpn: 'Un choque externo puede volver negativo un VPN que parecía seguro.' },
    { id: 'tlc', nombre: 'Boom exportador', texto: 'Un nuevo acuerdo comercial dispara la demanda: la casilla de ingreso paga el doble.', vpn: 'Más ventas → más flujo → mayor VPN. El riesgo también tiene lado bueno.' },
    { id: 'paro', nombre: 'Paro camionero', texto: 'Bloqueos en las vías: en esta zona el dado va de 1 a 4.', vpn: 'Los retrasos corren los flujos hacia el futuro: valen menos al descontarlos.' },
  ],

  // Eventos personales (casilla de riesgo)
  eventosPersonales: [
    { texto: '¡Un hotel te hizo un pedido grande!', delta: 4, vpn: 'Más ingresos → mayor flujo.' },
    { texto: 'Tu proveedor subió los precios.', delta: -3, vpn: 'Costos más altos → menor flujo.' },
    { texto: 'Se dañó la máquina tostadora.', delta: -4, vpn: 'Un costo inesperado → menor flujo.' },
    { texto: 'Ganaste una licitación de la Alcaldía.', delta: 5, vpn: 'Ingreso extra → mayor flujo.' },
    { texto: 'Abrieron un competidor en tu cuadra.', delta: -3, vpn: 'Menos ventas → menor flujo.' },
    { texto: 'Bajó el precio del dólar y tus insumos importados salen más baratos.', delta: 3, vpn: 'Menores costos → mayor flujo.' },
  ],
};
