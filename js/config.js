// Configuración del juego. Todo lo ajustable vive aquí; tools/simular.mjs la usa para balancear.

export const CONFIG = {
  tmar: 0.10, // mínimo exigido (TMAR) del juego: se usa para "Lo que vale hoy su partida"
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
    { id: 'escudo', nombre: 'Escudo', precio: 4, desc: 'Te protege del próximo golpe: costo, impuesto, evento negativo o duelo perdido.' },
    { id: 'tasaBaja', nombre: 'Doble premio', precio: 5, desc: 'Tu próximo desafío correcto paga el doble.' },
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
    { bloque: 'B', nombre: 'Plaza de Mercado de Insumos', pregunta: '¿Qué cifras necesito para evaluar un negocio?', leccion: 'insumos', color: '#e8a33d', icono: '🧺' },
    { bloque: 'C', nombre: 'Río del Flujo', pregunta: '¿Cuánta plata entra y sale de verdad?', leccion: 'flujo_estructura', color: '#3d8fe8', icono: '🌊', minijuego: 'entra' },
    { bloque: 'D', nombre: 'Valle del Tiempo', pregunta: '¿Por qué la plata de hoy vale más que la de mañana?', leccion: 'valor_tiempo', color: '#4caf6a', icono: '⏳' },
    { bloque: 'E', nombre: 'Cordillera de los Indicadores', pregunta: '¿Cómo sé si el negocio conviene?', leccion: 'vpn', color: '#8d5cd6', icono: '⛰️', minijuego: 'carrera' },
    { bloque: 'F', nombre: 'Encrucijada de Criterios', pregunta: 'Si solo puedo hacer uno, ¿cuál escojo?', leccion: 'criterios', color: '#d65c7a', icono: '🧭' },
    { bloque: 'G', nombre: 'Volcán del Riesgo', pregunta: '¿Y si algo sale mal?', leccion: 'sensibilidad', color: '#e0582b', icono: '🌋', minijuego: 'termometro' },
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
    { id: 'alzaTasas', nombre: 'Alza de tasas', texto: 'Las inversiones seguras ahora pagan más: en esta zona la estrella cuesta 5 monedas más.', vpn: 'Si la opción segura paga más, a un negocio le cuesta más ganarle: algunos dejan de convenir.' },
    { id: 'competidor', nombre: 'Nuevo competidor', texto: 'Llegó la competencia: los desafíos pagan 2 monedas menos en esta zona.', vpn: 'Menos ventas → entra menos plata → el negocio gana menos.' },
    { id: 'reforma', nombre: 'Reforma tributaria', texto: 'La casilla de impuesto cobra 30 % en esta zona.', vpn: 'Más impuestos → queda menos plata en el bolsillo.' },
    { id: 'devaluacion', nombre: 'Devaluación', texto: 'Los insumos importados se encarecen: la casilla de costo cobra el doble.', vpn: 'Costos más altos → el negocio gana menos. ¡Por eso hay que probar qué pasa si algo sube!' },
    { id: 'nino', nombre: 'Fenómeno de El Niño', texto: 'Sequía en el Eje Cafetero: todos pierden 2 monedas (el escudo protege).', vpn: 'Algo que nadie controla puede volver pérdida una ganancia que parecía segura.' },
    { id: 'tlc', nombre: 'Boom exportador', texto: 'Un nuevo acuerdo comercial dispara la demanda: la casilla de ingreso paga el doble.', vpn: 'Más ventas → entra más plata. El riesgo también tiene lado bueno.' },
    { id: 'paro', nombre: 'Paro camionero', texto: 'Bloqueos en las vías: en esta zona el dado va de 1 a 4.', vpn: 'Si la plata llega más tarde, vale menos hoy.' },
  ],

  // Eventos personales (casilla de riesgo)
  eventosPersonales: [
    { texto: '¡Un hotel te hizo un pedido grande!', delta: 4, vpn: 'Más ventas → entra más plata.' },
    { texto: 'Tu proveedor subió los precios.', delta: -3, vpn: 'Costos más altos → queda menos plata.' },
    { texto: 'Se dañó la máquina tostadora.', delta: -4, vpn: 'Un gasto inesperado → queda menos plata.' },
    { texto: 'Ganaste una licitación de la Alcaldía.', delta: 5, vpn: 'Ingreso extra → entra más plata.' },
    { texto: 'Abrieron un competidor en tu cuadra.', delta: -3, vpn: 'Menos ventas → entra menos plata.' },
    { texto: 'Bajó el precio del dólar y tus insumos importados salen más baratos.', delta: 3, vpn: 'Costos más bajos → queda más plata.' },
  ],
};
