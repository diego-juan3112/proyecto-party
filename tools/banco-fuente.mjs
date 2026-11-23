// FUENTE del banco de preguntas de "Expedición VPN: Ruta al Nevado".
// Cifras en millones de pesos ($ M) salvo que se diga otra cosa.
// - Ítems de cálculo: `calc` = {formula, datos}; la respuesta la CALCULA el generador
//   y la recalcula de forma independiente tools/verificar.mjs.
// - Cada distractor trae `error`: el error típico que lleva a ese número (se muestra al fallar).
// - Ítems conceptuales: `opciones` con una sola `ok: true`; las demás traen `porque`.
// - `chequeos`: cifras citadas en el texto que el verificador también recalcula.

export const LECCIONES = {
  para_que: 'Antes de meter plata a un negocio hay que decidir si conviene. Evaluar es comparar lo que el negocio va a devolver con lo que cuesta montarlo, recordando que la plata de hoy vale más que la de mañana.',
  insumos: 'Los insumos son las cifras con las que se arma el cálculo: cuánto cuesta montar el negocio, cuánto vende, cuánto gasta, los impuestos y cuántos años se mira. Si una cifra sale mal, todo el resultado sale mal.',
  depreciacion: 'Una máquina se desgasta con los años. La depreciación reparte su costo entre esos años: (costo − lo que valdrá al final) ÷ años de vida. No es plata que sale, pero sirve para pagar menos impuestos.',
  impuestos: 'El impuesto no se paga sobre lo que vendes sino sobre lo que te queda de ganancia: ventas − costos − depreciación. Ese resultado se multiplica por la tasa de impuesto.',
  capital_trabajo: 'Es la plata que el negocio deja "guardada" para poder operar: inventario, materia prima y caja. Sale al inicio y se recupera al final. No se desgasta como una máquina.',
  salvamento: 'Es lo que se puede vender un activo al terminar el proyecto, por ejemplo la máquina usada. Cuenta como plata que entra en el último año.',
  flujo_estructura: 'El flujo de caja es la plata que de verdad entra y sale. Se parte de ventas − costos − depreciación, se restan los impuestos y se vuelve a sumar la depreciación (esa plata no salió). En el último año también entran el salvamento y el capital de trabajo recuperado.',
  flujo_relevante: 'Solo cuenta lo que cambia por decidir el proyecto. Lo que ya se pagó (costo hundido) no cuenta. Lo que dejas de ganar por usar algo tuyo (costo de oportunidad) sí cuenta. Los intereses del préstamo no se restan.',
  valor_tiempo: 'Un peso hoy vale más que uno mañana, porque hoy lo puedes invertir. Para llevar plata futura al presente se divide entre (1 + tasa) por cada año. A eso se le llama descontar.',
  tmar: 'La TMAR es la ganancia mínima que le exigimos a un negocio para invertir en él. Aquí te la damos como dato y con ella se descuentan los flujos.',
  vpn: 'El VPN dice cuánto valor crea el proyecto, en pesos de hoy: los flujos descontados menos la inversión. Si es mayor que 0 se acepta; si es menor que 0 se rechaza.',
  tir: 'La TIR es la rentabilidad propia del proyecto, en % por año. Si es mayor que la TMAR se acepta; si es menor se rechaza.',
  bc: 'La B/C compara lo que el proyecto trae contra lo que cuesta, ambos en pesos de hoy. Si es mayor que 1 se acepta; si es menor que 1 se rechaza.',
  pr: 'El periodo de recuperación es cuánto tarda el proyecto en devolver la inversión. Sirve para ver liquidez y riesgo, no la rentabilidad. El descontado usa flujos traídos a hoy y tarda igual o más.',
  criterios: 'En un proyecto normal, VPN, TIR y B/C llegan a la misma decisión. Si no coinciden al escoger entre proyectos excluyentes, manda el VPN, porque mide valor en pesos.',
  restriccion: 'Con poco presupuesto y varios proyectos independientes, escoge la combinación que quepa y sume el mayor VPN total, no el proyecto que sea mejor por sí solo.',
  sensibilidad: 'Sensibilidad: cambias una sola cosa (precio, ventas o costos) y ves cuánto se mueve el VPN. La que más lo mueve es la más delicada.',
  escenarios: 'Escenarios: cambias varias cosas a la vez (pesimista, probable, optimista). Con probabilidades, el VPN esperado es cada VPN por su probabilidad, sumados.',
  equilibrio: 'Punto de equilibrio: cuánto hay que vender para no ganar ni perder. En unidades: costos fijos ÷ (precio − costo por unidad).',
};

export const ITEMS = [
  // ───────────── A. ¿Para qué se evalúa? ─────────────
  {
    id: 'A01', bloque: 'A', uso: ['desafio', 'salida'], leccion: 'para_que', tiempo: 45,
    enunciado: 'Tu equipo tiene el plan de negocio de una tienda de café especial. Antes de invertir, ¿qué decisión se toma con la evaluación financiera?',
    opciones: [
      { t: 'Si conviene invertir o no: aceptar, rechazar o escoger entre alternativas', ok: true },
      { t: 'De qué banco sacar el préstamo', porque: 'Eso es financiación, otra gestión (la expone otro equipo).' },
      { t: 'A qué precio vender cada tinto', porque: 'El precio es un insumo que viene del estudio de mercado, no la decisión final.' },
      { t: 'Cuánta utilidad contable reportar el año 1', porque: 'La evaluación mira todos los flujos del horizonte, no un solo año contable.' },
    ],
    explicacion: 'La evaluación financiera existe para decidir si se invierte. Todo lo demás (flujo, indicadores, riesgo) sirve para tomar esa decisión con fundamento.',
  },
  {
    id: 'A02', bloque: 'A', uso: ['desafio'], leccion: 'para_que', tiempo: 45,
    enunciado: '¿Desde el punto de vista de quién se evalúa financieramente un proyecto?',
    opciones: [
      { t: 'Del inversionista: ¿mi plata rinde al menos lo que exijo?', ok: true },
      { t: 'De la sociedad: empleos e impacto ambiental', porque: 'Eso corresponde a la evaluación económica o social.' },
      { t: 'Del cliente: si el precio es justo', porque: 'El cliente no pone la inversión ni recibe los flujos.' },
      { t: 'Del gobierno: cuánto va a recaudar', porque: 'Los impuestos son un insumo del flujo, no el punto de vista.' },
    ],
    explicacion: 'La evaluación financiera mira el proyecto con los ojos de quien pone la plata y espera recuperarla con un rendimiento mínimo (TMAR).',
  },
  {
    id: 'A03', bloque: 'A', uso: ['desafio'], leccion: 'para_que', tiempo: 45,
    enunciado: 'En una frase, la evaluación financiera compara…',
    opciones: [
      { t: 'Lo que el proyecto devuelve en el futuro contra lo que cuesta montarlo, contando el valor del tiempo', ok: true },
      { t: 'Los ingresos del año 1 contra los costos del año 1', porque: 'Un solo año no muestra todo el horizonte ni el valor del dinero en el tiempo.' },
      { t: 'Las ventas totales contra las de la competencia', porque: 'Eso es análisis de mercado.' },
      { t: 'La utilidad contable acumulada, sin importar cuándo llega', porque: 'Sí importa cuándo llega la plata: un peso hoy vale más que uno mañana.' },
    ],
    explicacion: 'Flujos que entran vs. inversión que sale, puestos en la misma fecha (descontados a la TMAR).',
  },

  // ───────────── B. Insumos ─────────────
  {
    id: 'B01', bloque: 'B', uso: ['desafio', 'duelo'], leccion: 'depreciacion', tiempo: 60,
    enunciado: 'Una tostadora cuesta $50 M y dura 5 años; al final ya no vale nada. Si el desgaste se reparte parejo, ¿cuánto se deprecia por año?',
    calc: { formula: 'depreciacion', datos: { costo: 50, vida: 5 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 50, error: 'Ese es el costo total, no el valor anual.' },
      { v: 12.5, error: 'Dividiste entre 4 años; la vida útil es 5.' },
      { v: 250, error: 'Multiplicaste por la vida útil en vez de dividir.' },
    ],
    explicacion: '(50 − 0) ÷ 5 = $10 M por año.',
  },
  {
    id: 'B02', bloque: 'B', uso: ['desafio', 'duelo'], leccion: 'depreciacion', tiempo: 75,
    enunciado: 'Un camión cuesta $90 M, dura 4 años y al final se puede vender en $10 M. Si el desgaste se reparte parejo, ¿cuánto se deprecia por año?',
    calc: { formula: 'depreciacion', datos: { costo: 90, salvamento: 10, vida: 4 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 22.5, error: 'No le restaste el valor de salvamento al costo.' },
      { v: 25, error: 'Sumaste el salvamento en vez de restarlo.' },
      { v: 80, error: 'Ese es el total a depreciar; falta dividir entre 4 años.' },
    ],
    explicacion: '(90 − 10) ÷ 4 = $20 M por año.',
  },
  {
    id: 'B03', bloque: 'B', uso: ['desafio', 'duelo'], leccion: 'impuestos', tiempo: 75,
    enunciado: 'En un año la cafetería vendió $100 M, gastó $40 M en operar y tuvo $20 M de depreciación. El impuesto es 30 %. ¿Cuánto impuesto paga?',
    calc: { formula: 'impuesto', datos: { ingresos: 100, costos: 40, dep: 20, t: 0.3 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 18, error: 'No restaste la depreciación antes de calcular el impuesto.' },
      { v: 30, error: 'Calculaste el impuesto sobre los ingresos; va sobre la utilidad.' },
      { v: 6, error: 'Aplicaste el 30 % solo a la depreciación.' },
    ],
    explicacion: 'Utilidad gravable = 100 − 40 − 20 = 40. Impuesto = 40 × 30 % = $12 M.',
  },
  {
    id: 'B04', bloque: 'B', uso: ['desafio'], leccion: 'insumos', tiempo: 45,
    enunciado: '¿Cuál de estos NO es un costo o gasto de operación del año?',
    opciones: [
      { t: 'La compra de la máquina empacadora', ok: true },
      { t: 'El arriendo del local', porque: 'Es un gasto operativo: se paga cada año.' },
      { t: 'La nómina de los baristas', porque: 'Es un costo operativo: se paga cada año.' },
      { t: 'Los servicios públicos', porque: 'Es un gasto operativo: se paga cada año.' },
    ],
    explicacion: 'Comprar la máquina es INVERSIÓN (año 0). Su costo llega a los años de operación solo a través de la depreciación.',
  },
  {
    id: 'B05', bloque: 'B', uso: ['desafio'], leccion: 'capital_trabajo', tiempo: 45,
    enunciado: 'Una panadería necesita $10 M en harina, empaques y caja menor para operar desde el día 1. ¿Cómo se trata esa plata en la evaluación?',
    opciones: [
      { t: 'Como inversión en capital de trabajo en el año 0, que se recupera al final del horizonte', ok: true },
      { t: 'Como gasto deducible del año 1', porque: 'No es un gasto: la plata queda amarrada en la operación y se recupera.' },
      { t: 'No se incluye, porque al final se recupera', porque: 'Mientras tanto la plata no está disponible: ese tiempo tiene costo.' },
      { t: 'Se deprecia en línea recta', porque: 'El capital de trabajo no es un activo fijo: no se deprecia.' },
    ],
    explicacion: 'Sale en el año 0 (−10) y vuelve en el último año (+10). Como vuelve más tarde, en valor presente sí le cuesta al proyecto.',
  },
  {
    id: 'B06', bloque: 'B', uso: ['desafio'], leccion: 'salvamento', tiempo: 45,
    enunciado: 'Al final del horizonte de 5 años, la tostadora se puede vender en $8 M. ¿Dónde va ese valor?',
    opciones: [
      { t: 'Como entrada de dinero en el año 5', ok: true },
      { t: 'Restándolo de la inversión del año 0', porque: 'Se recibe al final, no al inicio: no se puede descontar de la inversión inicial.' },
      { t: 'Como gasto del año 5', porque: 'Vender un activo trae plata, no la saca.' },
      { t: 'No se incluye, porque la máquina ya está depreciada', porque: 'Aunque esté depreciada, si se puede vender, esa plata entra al proyecto.' },
    ],
    explicacion: 'El salvamento es una entrada del último año. (Si se vende por encima de su valor en libros, la ganancia paga impuestos.)',
  },
  {
    id: 'B07', bloque: 'B', uso: ['desafio'], leccion: 'depreciacion', tiempo: 45,
    enunciado: '¿Por qué la depreciación aparece en el flujo de caja si no es una salida de dinero?',
    opciones: [
      { t: 'Porque reduce la utilidad gravable y con ella los impuestos (escudo fiscal)', ok: true },
      { t: 'Porque es plata que sale cada año para reponer la máquina', porque: 'No sale efectivo: la máquina se pagó en el año 0.' },
      { t: 'Porque aumenta las ventas', porque: 'La depreciación no tiene que ver con las ventas.' },
      { t: 'No debería aparecer en ninguna parte del flujo', porque: 'Sí aparece: se resta para calcular impuestos y luego se vuelve a sumar.' },
    ],
    explicacion: 'Se resta antes de impuestos (paga menos impuesto) y se suma después (porque no salió plata).',
  },
  {
    id: 'B08', bloque: 'B', uso: ['desafio', 'duelo'], leccion: 'depreciacion', tiempo: 60,
    enunciado: 'Depreciación anual $20 M, impuesto de renta 35 %. ¿Cuánto se ahorra en impuestos cada año gracias a la depreciación?',
    calc: { formula: 'escudo', datos: { dep: 20, t: 0.35 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 20, error: 'Ese es el valor de la depreciación, no el ahorro en impuestos.' },
      { v: 13, error: 'Calculaste 20 × 65 %; el ahorro es 20 × 35 %.' },
      { v: 35, error: 'Usaste la tasa de impuesto como si fuera el monto.' },
    ],
    explicacion: 'Escudo fiscal = depreciación × tasa = 20 × 0,35 = $7 M por año.',
  },
  {
    id: 'B09', bloque: 'B', uso: ['desafio'], leccion: 'salvamento', tiempo: 45,
    enunciado: '¿Qué es el horizonte de evaluación?',
    opciones: [
      { t: 'El número de periodos (por ejemplo, 5 años) para los que se proyectan los flujos', ok: true },
      { t: 'La fecha en que se pide el préstamo', porque: 'Eso es financiación, no el horizonte.' },
      { t: 'El año en que el proyecto da su primera utilidad', porque: 'Eso no define cuántos años se evalúan.' },
      { t: 'El tiempo que tarda en recuperarse la inversión', porque: 'Ese es el periodo de recuperación (bloque E).' },
    ],
    explicacion: 'El horizonte suele relacionarse con la vida útil de los activos, pero lo define quien evalúa según el proyecto.',
  },

  // ───────────── C. Flujo de caja ─────────────
  {
    id: 'C01', bloque: 'C', uso: ['desafio', 'duelo'], leccion: 'flujo_estructura', tiempo: 90,
    enunciado: 'En el año 2 la tienda vendió $200 M, gastó $80 M, tuvo $40 M de depreciación y paga 30 % de impuesto. ¿Cuánta plata le queda de verdad (flujo de caja operativo)?',
    calc: { formula: 'fcOperativo', datos: { ingresos: 200, costos: 80, dep: 40, t: 0.3 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 56, error: 'Olvidaste volver a sumar la depreciación (no es salida de dinero).' },
      { v: 120, error: 'No restaste los impuestos.' },
      { v: 84, error: 'Calculaste el impuesto sin restar antes la depreciación: perdiste el escudo fiscal.' },
    ],
    explicacion: 'UAI = 200 − 80 − 40 = 80. Impuesto = 24. Utilidad neta = 56. + Depreciación 40 → FC = $96 M.',
  },
  {
    id: 'C02', bloque: 'C', uso: ['desafio', 'duelo'], leccion: 'flujo_relevante', tiempo: 60,
    enunciado: 'Para arrancar se necesitan maquinaria por $100 M y capital de trabajo por $20 M. El mes pasado se pagaron $10 M por un estudio de mercado. ¿Flujo del año 0?',
    calc: { formula: 'suma', datos: { valores: [-100, -20] } }, unidad: 'M', dec: 1,
    distractores: [
      { v: -130, error: 'Incluiste el estudio de mercado: es un costo hundido, ya se pagó pase lo que pase.' },
      { v: -100, error: 'Olvidaste el capital de trabajo.' },
      { v: -80, error: 'Sumaste el capital de trabajo como si fuera una entrada.' },
    ],
    explicacion: 'Año 0 = −100 (maquinaria) − 20 (capital de trabajo) = −$120 M. El estudio ya pagado no cambia con la decisión.',
  },
  {
    id: 'C03', bloque: 'C', uso: ['desafio', 'duelo'], leccion: 'flujo_estructura', tiempo: 60,
    enunciado: 'Último año: la operación deja $50 M. Además se recupera el capital de trabajo ($20 M) y se vende la maquinaria en $10 M (sin impuesto sobre la venta). ¿Cuánta plata entra en total ese año?',
    calc: { formula: 'suma', datos: { valores: [50, 20, 10] } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 50, error: 'Olvidaste la recuperación del capital de trabajo y el salvamento.' },
      { v: 60, error: 'Olvidaste recuperar el capital de trabajo.' },
      { v: 70, error: 'Olvidaste el valor de salvamento.' },
    ],
    explicacion: '50 + 20 + 10 = $80 M. El último año "devuelve" el capital de trabajo y el salvamento.',
  },
  {
    id: 'C04', bloque: 'C', uso: ['desafio', 'caza'], leccion: 'flujo_estructura', tiempo: 75,
    enunciado: 'Caza el error. (1) Ingresos 100 · (2) − Costos 40 · (3) − Depreciación 20 → UAI 40 · (4) − Impuestos 30 % = 12 → Utilidad neta 28 · (5) − Depreciación 20 → Flujo de caja 8. ¿Qué línea está mal?',
    opciones: [
      { t: 'La 5: la depreciación se SUMA de nuevo; el flujo correcto es 48', ok: true },
      { t: 'La 3: la depreciación no se resta antes de impuestos', porque: 'Sí se resta antes de impuestos: así se obtiene el escudo fiscal.' },
      { t: 'La 4: el impuesto debía ser sobre 100', porque: 'El impuesto va sobre la utilidad (40), no sobre los ingresos.' },
      { t: 'La 2: los costos no se restan', porque: 'Los costos sí se restan de los ingresos.' },
    ],
    chequeos: [{ formula: 'fcOperativo', datos: { ingresos: 100, costos: 40, dep: 20, t: 0.3 }, esperado: 48 }],
    explicacion: 'Restar la depreciación dos veces es el error más común. Utilidad neta 28 + 20 = 48.',
  },
  {
    id: 'C05', bloque: 'C', uso: ['desafio'], leccion: 'flujo_relevante', tiempo: 45,
    enunciado: 'Hace dos meses pagaron $5 M por un estudio de mercado, y ese pago no se devuelve se haga o no el proyecto. ¿Va en el flujo de caja?',
    opciones: [
      { t: 'No: es un costo hundido, ya se gastó pase lo que pase', ok: true },
      { t: 'Sí, en el año 0', porque: 'Esa plata ya se fue y no cambia con la decisión: no es relevante.' },
      { t: 'Sí, repartido en los años de operación', porque: 'No es un costo futuro del proyecto.' },
      { t: 'Solo si el proyecto da VPN positivo', porque: 'Un costo hundido no entra en ningún caso.' },
    ],
    explicacion: 'Pregunta clave para cada cifra: ¿esto cambia si decido invertir o no? Si no cambia, no entra.',
  },
  {
    id: 'C06', bloque: 'C', uso: ['desafio'], leccion: 'flujo_relevante', tiempo: 45,
    enunciado: 'El proyecto usará un lote propio que hoy podrían arrendar en $10 M al año. ¿Cómo se trata?',
    opciones: [
      { t: 'Como un costo de $10 M al año (costo de oportunidad)', ok: true },
      { t: 'No se incluye, porque el lote ya es nuestro', porque: 'Usarlo implica dejar de recibir el arriendo: es un costo real de la decisión.' },
      { t: 'Como un ingreso de $10 M al año', porque: 'El proyecto no recibe ese arriendo; lo deja de recibir.' },
      { t: 'Como inversión de $10 M en el año 0', porque: 'El arriendo perdido ocurre cada año, no una sola vez.' },
    ],
    explicacion: 'El costo de oportunidad es lo que se deja de ganar por usar un recurso propio en el proyecto.',
  },
  {
    id: 'C07', bloque: 'C', uso: ['desafio'], leccion: 'flujo_relevante', tiempo: 45,
    enunciado: 'Están armando el flujo de caja DEL PROYECTO (se evalúa el negocio, sin importar de dónde sale la plata). ¿Se restan los intereses de un préstamo?',
    opciones: [
      { t: 'No: el flujo del proyecto no incluye cómo se financia', ok: true },
      { t: 'Sí, siempre', porque: 'Eso corresponde a otro flujo (el del inversionista con financiación), que no es el que se está armando.' },
      { t: 'Solo los del primer año', porque: 'En el flujo del proyecto no van intereses de ningún año.' },
      { t: 'Sí, pero sin descontarlos', porque: 'En el flujo del proyecto no van intereses.' },
    ],
    explicacion: 'Primero se mira si el negocio vale la pena por sí mismo. Cómo se financia lo trata otra gestión.',
  },
  {
    id: 'C08', bloque: 'C', uso: ['desafio'], leccion: 'flujo_estructura', tiempo: 45,
    enunciado: 'Partiendo de la utilidad neta, ¿cómo se llega al flujo de caja del proyecto?',
    opciones: [
      { t: 'Utilidad neta + depreciación − inversiones + salvamento y recuperación del capital de trabajo', ok: true },
      { t: 'Utilidad neta − depreciación', porque: 'La depreciación ya se restó una vez; ahora se suma.' },
      { t: 'Ingresos − costos, sin impuestos', porque: 'Los impuestos sí son una salida de dinero.' },
      { t: 'Utilidad antes de impuestos + depreciación', porque: 'Faltan los impuestos, que sí se pagan.' },
    ],
    explicacion: 'La utilidad contable no es plata en la mano: hay que devolver lo que no fue salida (depreciación) y agregar lo que sí lo fue (inversiones).',
  },
  {
    id: 'C09', bloque: 'C', uso: ['desafio', 'duelo'], leccion: 'flujo_estructura', tiempo: 90,
    enunciado: 'En el año 1 el negocio vendió $150 M, gastó $50 M, tuvo $20 M de depreciación y paga 25 % de impuesto. ¿Cuánta plata le queda de verdad (flujo de caja operativo)?',
    calc: { formula: 'fcOperativo', datos: { ingresos: 150, costos: 50, dep: 20, t: 0.25 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 60, error: 'Olvidaste volver a sumar la depreciación.' },
      { v: 100, error: 'No restaste los impuestos.' },
      { v: 75, error: 'Calculaste el impuesto sin restar la depreciación (25 % de 100).' },
    ],
    explicacion: 'UAI = 150 − 50 − 20 = 80. Impuesto = 20. Utilidad neta = 60. + 20 → FC = $80 M.',
  },
  {
    id: 'C10', bloque: 'C', uso: ['caza'], leccion: 'flujo_estructura', tiempo: 75,
    enunciado: 'Caza el error. Año 0: máquina −100 y capital de trabajo −20 → −120. Años 1, 2 y 3: flujo operativo +50. Año 3: + salvamento 10 → total año 3 = +60. ¿Qué falta?',
    opciones: [
      { t: 'Recuperar el capital de trabajo (+20) en el año 3: el total es +80', ok: true },
      { t: 'Restar la depreciación en el año 3', porque: 'La depreciación ya está dentro del flujo operativo.' },
      { t: 'Sumar los 20 de capital de trabajo en el año 1', porque: 'Se recupera al final, no al inicio.' },
      { t: 'No falta nada', porque: 'El capital de trabajo invertido en el año 0 se recupera en el último año.' },
    ],
    chequeos: [{ formula: 'suma', datos: { valores: [50, 10, 20] }, esperado: 80 }],
    explicacion: 'Olvidar la recuperación del capital de trabajo subvalora el proyecto.',
  },
  {
    id: 'C11', bloque: 'C', uso: ['caza'], leccion: 'impuestos', tiempo: 75,
    enunciado: 'Caza el error. Ingresos 100, costos 60, sin depreciación. Impuestos = 30 % × 100 = 30. Flujo = 100 − 60 − 30 = 10. ¿Qué está mal?',
    opciones: [
      { t: 'El impuesto va sobre la utilidad (40 × 30 % = 12): el flujo correcto es 28', ok: true },
      { t: 'Los costos no se restan', porque: 'Los costos sí se restan.' },
      { t: 'Nada, está bien', porque: 'El impuesto se calculó sobre los ingresos; va sobre la utilidad.' },
      { t: 'Faltó sumar 30 de depreciación', porque: 'El enunciado dice que no hay depreciación.' },
    ],
    chequeos: [{ formula: 'fcOperativo', datos: { ingresos: 100, costos: 60, dep: 0, t: 0.3 }, esperado: 28 }],
    explicacion: '(100 − 60) × (1 − 0,30) = 28.',
  },

  // ───────────── D. Valor del dinero en el tiempo ─────────────
  {
    id: 'D01', bloque: 'D', uso: ['desafio', 'duelo'], leccion: 'valor_tiempo', tiempo: 60,
    enunciado: 'Inviertes $100 M y ganas 10 % al año, con interés compuesto. ¿Cuánto tienes en 2 años?',
    calc: { formula: 'vf', datos: { monto: 100, tasa: 0.1, n: 2 } }, unidad: 'M', dec: 2,
    distractores: [
      { v: 110, error: 'Solo calculaste un año.' },
      { v: 100, error: 'La plata no se queda quieta: gana la TMAR cada año.' },
      { v: 82.64, error: 'Eso es descontar (traer al presente), no capitalizar.' },
    ],
    explicacion: '100 × 1,1 × 1,1 = $121 M. (Con interés simple darían 120: el compuesto gana interés sobre el interés.)',
  },
  {
    id: 'D02', bloque: 'D', uso: ['desafio', 'duelo'], leccion: 'valor_tiempo', tiempo: 60,
    enunciado: 'Te prometen $121 M dentro de 2 años. Si tu plata rinde 10 % al año, ¿cuánto valen hoy?',
    calc: { formula: 'vp', datos: { monto: 121, tasa: 0.1, n: 2 } }, unidad: 'M', dec: 2,
    distractores: [
      { v: 110, error: 'Descontaste solo un año.' },
      { v: 121, error: 'No descontaste: la plata futura vale menos hoy.' },
      { v: 146.41, error: 'Multiplicaste por 1,21 en vez de dividir.' },
    ],
    explicacion: '121 ÷ 1,1² = 121 ÷ 1,21 = $100 M.',
  },
  {
    id: 'D03', bloque: 'D', uso: ['desafio'], leccion: 'valor_tiempo', tiempo: 45,
    enunciado: '¿Por qué $1 M hoy vale más que $1 M dentro de un año?',
    opciones: [
      { t: 'Porque hoy lo puedo invertir y ganar al menos la TMAR', ok: true },
      { t: 'Porque los billetes se desgastan', porque: 'No es un tema físico: es lo que el dinero puede rendir.' },
      { t: 'No es cierto: valen exactamente lo mismo', porque: 'Al tener la plata antes, puedes ponerla a rendir.' },
      { t: 'Porque el banco cobra cuota de manejo', porque: 'Eso no explica el valor del dinero en el tiempo.' },
    ],
    explicacion: 'El costo de esperar es lo que dejas de ganar. Por eso los flujos futuros se descuentan.',
  },
  {
    id: 'D04', bloque: 'D', uso: ['desafio'], leccion: 'tmar', tiempo: 45,
    enunciado: '¿Qué es la TMAR?',
    opciones: [
      { t: 'La tasa mínima que el inversionista le exige al proyecto para aceptarlo', ok: true },
      { t: 'La rentabilidad que da el proyecto', porque: 'Esa es la TIR (bloque E).' },
      { t: 'El porcentaje de impuestos', porque: 'Los impuestos son un insumo del flujo.' },
      { t: 'El porcentaje de ganancia sobre las ventas', porque: 'Ese es el margen, un dato contable.' },
    ],
    explicacion: 'La TMAR es la vara con la que se mide el proyecto. Se usa para descontar los flujos. (Cómo se calcula lo expone otro equipo.)',
  },
  {
    id: 'D05', bloque: 'D', uso: ['desafio', 'duelo'], leccion: 'valor_tiempo', tiempo: 60,
    enunciado: 'Recibirás $200 M dentro de un año y exiges ganar 25 % al año. ¿Cuánto vale hoy esa plata?',
    calc: { formula: 'vp', datos: { monto: 200, tasa: 0.25, n: 1 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 150, error: 'Le restaste el 25 %; hay que DIVIDIR entre 1,25.' },
      { v: 250, error: 'Multiplicaste: eso es valor futuro.' },
      { v: 200, error: 'No descontaste.' },
    ],
    explicacion: '200 ÷ 1,25 = $160 M.',
  },
  {
    id: 'D06', bloque: 'D', uso: ['desafio', 'duelo'], leccion: 'valor_tiempo', tiempo: 90,
    enunciado: 'Recibirás $110 M en el año 1 y $121 M en el año 2. Exiges 10 % al año. ¿Cuánto valen hoy los dos pagos juntos?',
    calc: { formula: 'vpFlujos', datos: { flujos: [110, 121], tasa: 0.1 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 231, error: 'Sumaste sin descontar.' },
      { v: 210, error: 'Descontaste los dos flujos un solo año.' },
      { v: 181.8, error: 'Descontaste cada flujo un año de más.' },
    ],
    explicacion: '110 ÷ 1,1 = 100; 121 ÷ 1,21 = 100. VP = $200 M.',
  },
  {
    id: 'D07', bloque: 'D', uso: ['desafio'], leccion: 'valor_tiempo', tiempo: 60,
    enunciado: '¿Qué prefieres: $100 M hoy o $115 M dentro de un año? Exiges ganar 20 % al año.',
    opciones: [
      { t: 'Los $100 M hoy: los $115 M valen hoy unos $95,8 M', ok: true },
      { t: 'Los $115 M: es más plata', porque: 'Es más plata en pesos de dentro de un año. Traída a hoy (÷ 1,2) vale menos que 100.' },
      { t: 'Da igual', porque: 'Daría igual solo si los $115 M valieran hoy exactamente $100 M (con TMAR del 15 %).' },
      { t: 'No se puede saber sin la inflación', porque: 'La TMAR ya permite comparar las dos opciones.' },
    ],
    chequeos: [{ formula: 'vp', datos: { monto: 115, tasa: 0.2, n: 1 }, esperado: 95.83, tol: 0.01 }],
    explicacion: '115 ÷ 1,2 ≈ 95,8 < 100. Mejor la plata hoy.',
  },
  {
    id: 'D08', bloque: 'D', uso: ['desafio', 'duelo'], leccion: 'valor_tiempo', tiempo: 60,
    enunciado: 'Si exiges ganar 10 % al año, ¿cuánto deberías recibir dentro de un año para que te dé igual que tener $50 M hoy?',
    calc: { formula: 'vf', datos: { monto: 50, tasa: 0.1, n: 1 } }, unidad: 'M', dec: 2,
    distractores: [
      { v: 50, error: 'Recibir lo mismo más tarde es perder lo que podías ganar.' },
      { v: 45.45, error: 'Descontaste en vez de capitalizar.' },
      { v: 60, error: 'Sumaste 10 dos veces.' },
    ],
    explicacion: '50 × 1,1 = $55 M. A eso se le llama valor equivalente.',
  },

  // ───────────── E. Indicadores ─────────────
  {
    id: 'E01', bloque: 'E', uso: ['desafio', 'duelo'], leccion: 'vpn', tiempo: 90,
    enunciado: 'Montar el negocio cuesta $150 M. Devuelve $110 M el año 1 y $121 M el año 2. Exiges 10 % al año. ¿Cuál es el VPN?',
    calc: { formula: 'vpn', datos: { flujos: [-150, 110, 121], tasa: 0.1 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 81, error: 'Sumaste los flujos sin descontarlos.' },
      { v: 200, error: 'Olvidaste restar la inversión.' },
      { v: 60, error: 'Descontaste los dos flujos un solo año.' },
    ],
    explicacion: 'VP = 100 + 100 = 200. VPN = 200 − 150 = $50 M > 0 → se acepta.',
  },
  {
    id: 'E02', bloque: 'E', uso: ['desafio', 'duelo'], leccion: 'vpn', tiempo: 60,
    enunciado: 'Inviertes $100 M y recibes $132 M dentro de un año. Exiges 20 % al año. ¿Cuál es el VPN?',
    calc: { formula: 'vpn', datos: { flujos: [-100, 132], tasa: 0.2 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 32, error: 'No descontaste el flujo.' },
      { v: 110, error: 'Ese es el VP de los flujos: falta restar la inversión.' },
      { v: 5.6, error: 'Le restaste el 20 % a 132; hay que dividir entre 1,2.' },
    ],
    explicacion: '132 ÷ 1,2 = 110. VPN = 110 − 100 = $10 M.',
  },
  {
    id: 'E03', bloque: 'E', uso: ['desafio', 'duelo'], leccion: 'tir', tiempo: 75,
    enunciado: 'Inviertes $100 M y recibes $121 M al cabo de 2 años (nada en el año 1). ¿Qué rentabilidad anual rinde (TIR)?',
    calc: { formula: 'tir', datos: { flujos: [-100, 0, 121] } }, unidad: '%', dec: 1,
    distractores: [
      { v: 21, error: 'Esa es la ganancia total de los 2 años, no la tasa anual.' },
      { v: 10.5, error: 'Promediaste 21 % entre 2; con interés compuesto no funciona así.' },
      { v: 0, error: 'Que el año 1 sea cero no hace cero la TIR.' },
    ],
    explicacion: '100 × 1,1² = 121, así que la tasa que hace VPN = 0 es 10 %.',
  },
  {
    id: 'E04', bloque: 'E', uso: ['desafio', 'duelo'], leccion: 'tir', tiempo: 60,
    enunciado: 'Inviertes $200 M y recibes $250 M dentro de un año. ¿Qué rentabilidad anual tiene (TIR)?',
    calc: { formula: 'tir', datos: { flujos: [-200, 250] } }, unidad: '%', dec: 1,
    distractores: [
      { v: 20, error: 'Dividiste la ganancia entre 250; se divide entre lo invertido (200).' },
      { v: 50, error: 'Esa es la ganancia en millones, no la tasa.' },
      { v: 125, error: 'Dividiste 250 entre 200 sin restar 1.' },
    ],
    explicacion: '250 ÷ 200 = 1,25 → TIR = 25 %.',
  },
  {
    id: 'E05', bloque: 'E', uso: ['desafio'], leccion: 'tir', tiempo: 45,
    enunciado: 'Un negocio rinde 18 % al año (TIR) y tú exiges mínimo 15 % (TMAR). ¿Qué se decide?',
    opciones: [
      { t: 'Se acepta: rinde más de lo mínimo exigido (y su VPN es positivo)', ok: true },
      { t: 'Se rechaza: 18 % es poco', porque: 'Lo que importa es comparar con la TMAR, y 18 % > 15 %.' },
      { t: 'Es indiferente', porque: 'Sería indiferente si la TIR fuera igual a la TMAR.' },
      { t: 'Se acepta solo si la TIR supera el 20 %', porque: 'La vara es la TMAR (15 %), no un número arbitrario.' },
    ],
    explicacion: 'TIR > TMAR ⇔ VPN > 0 (en proyectos convencionales).',
  },
  {
    id: 'E06', bloque: 'E', uso: ['desafio', 'duelo'], leccion: 'bc', tiempo: 60,
    enunciado: 'Los beneficios del proyecto valen hoy $300 M y sus costos (inversión incluida) valen hoy $250 M. ¿Cuál es la relación B/C?',
    calc: { formula: 'bcDirecto', datos: { ben: 300, cos: 250 } }, unidad: 'x', dec: 2,
    distractores: [
      { v: 0.83, error: 'Invertiste la división: es beneficios ÷ costos.' },
      { v: 50, error: 'Eso es el VPN (una resta), no la relación.' },
      { v: 0.2, error: 'Calculaste (300 − 250) ÷ 250: eso no es la B/C.' },
    ],
    explicacion: '300 ÷ 250 = 1,2 > 1 → se acepta.',
  },
  {
    id: 'E07', bloque: 'E', uso: ['desafio'], leccion: 'bc', tiempo: 45,
    enunciado: 'Un proyecto tiene B/C = 0,9. ¿Qué se puede decir de su VPN?',
    opciones: [
      { t: 'Es negativo: los beneficios no alcanzan a cubrir los costos', ok: true },
      { t: 'Es positivo pero pequeño', porque: 'B/C < 1 significa beneficios < costos, es decir, VPN < 0.' },
      { t: 'Es igual a 0,9', porque: 'La B/C es una razón; el VPN está en pesos.' },
      { t: 'No se puede saber', porque: 'Con B/C < 1 se sabe que el VPN es negativo.' },
    ],
    explicacion: 'B/C > 1 ⇔ VPN > 0; B/C < 1 ⇔ VPN < 0.',
  },
  {
    id: 'E08', bloque: 'E', uso: ['desafio', 'duelo'], leccion: 'pr', tiempo: 75,
    enunciado: 'Se invierten $90 M y el negocio deja $40 M cada año durante 3 años. ¿En cuántos años se recupera la inversión (sin descontar)?',
    calc: { formula: 'pr', datos: { flujos: [-90, 40, 40, 40] } }, unidad: 'años', dec: 2,
    distractores: [
      { v: 3, error: 'Se recupera durante el año 3, no al final.' },
      { v: 2, error: 'Al final del año 2 llevas 80: faltan 10.' },
      { v: 2.5, error: 'Faltan 10 de 40: eso es 0,25 de año, no 0,5.' },
    ],
    explicacion: 'Al final del año 2 se recuperan 80. Faltan 10 de los 40 del año 3: 10 ÷ 40 = 0,25 → 2,25 años.',
  },
  {
    id: 'E09', bloque: 'E', uso: ['desafio', 'duelo'], leccion: 'pr', tiempo: 90,
    enunciado: 'Se invierten $150 M y el negocio deja $110 M el año 1 y $121 M el año 2. Exiges 10 % al año. ¿En cuántos años se recupera la inversión DESCONTADA a hoy?',
    calc: { formula: 'prd', datos: { flujos: [-150, 110, 121], tasa: 0.1 } }, unidad: 'años', dec: 2,
    distractores: [
      { v: 1.33, error: 'Ese es el periodo simple: no descontaste los flujos.' },
      { v: 2, error: 'Se recupera antes de terminar el año 2.' },
      { v: 1.41, error: 'Usaste el faltante descontado (50) pero el flujo sin descontar (121).' },
    ],
    explicacion: 'VP año 1 = 100, VP año 2 = 100. Tras el año 1 faltan 50: 50 ÷ 100 = 0,5 → 1,5 años.',
  },
  {
    id: 'E10', bloque: 'E', uso: ['desafio', 'salida'], leccion: 'vpn', tiempo: 45,
    enunciado: 'Si el VPN de un proyecto es exactamente 0, significa que…',
    opciones: [
      { t: 'Rinde exactamente la TMAR (su TIR es igual a la TMAR)', ok: true },
      { t: 'No gana nada: mejor no invertir', porque: 'Ganar la TMAR sí es ganar: es justo lo mínimo que exigías.' },
      { t: 'Pierde toda la inversión', porque: 'VPN = 0 significa que recupera la inversión más la TMAR.' },
      { t: 'Su TIR es 0 %', porque: 'TIR = 0 % sería no ganar nada; VPN = 0 implica TIR = TMAR.' },
    ],
    explicacion: 'VPN = 0 → indiferente: el proyecto paga la inversión y exactamente la TMAR.',
  },
  {
    id: 'E11', bloque: 'E', uso: ['desafio'], leccion: 'tir', tiempo: 45,
    enunciado: '¿Qué es la TIR?',
    opciones: [
      { t: 'La rentabilidad propia del negocio: la tasa con la que el VPN queda en cero', ok: true },
      { t: 'La TMAR que exige el inversionista', porque: 'La TMAR se exige; la TIR la da el proyecto.' },
      { t: 'La utilidad dividida entre las ventas', porque: 'Ese es el margen, un dato contable.' },
      { t: 'El tiempo que tarda en recuperar la inversión', porque: 'Ese es el periodo de recuperación.' },
    ],
    explicacion: 'La TIR es la rentabilidad propia del proyecto. Se compara con la TMAR.',
  },

  // ───────────── F. Criterios de decisión ─────────────
  {
    id: 'F01', bloque: 'F', uso: ['desafio', 'salida'], leccion: 'criterios', tiempo: 60,
    enunciado: 'Solo puedes hacer UNO de dos proyectos (excluyentes) y hay plata para cualquiera. Exiges 12 %. A: VPN $50 M, TIR 20 %. B: VPN $30 M, TIR 35 %. ¿Cuál eliges?',
    opciones: [
      { t: 'A, porque crea más valor (mayor VPN)', ok: true },
      { t: 'B, porque tiene mayor TIR', porque: 'La TIR es un %: no dice cuánto valor crea. B es más pequeño.' },
      { t: 'Ninguno, se contradicen', porque: 'Que se contradigan no impide decidir: manda el VPN.' },
      { t: 'Los dos', porque: 'Son excluyentes: solo se puede uno.' },
    ],
    explicacion: 'Ante un conflicto entre proyectos excluyentes, el VPN es el criterio que manda.',
  },
  {
    id: 'F02', bloque: 'F', uso: ['desafio'], leccion: 'criterios', tiempo: 45,
    enunciado: 'En un proyecto normal (se invierte al inicio y luego entra plata cada año), si el VPN es mayor que 0, ¿qué pasa también?',
    opciones: [
      { t: 'TIR > TMAR y B/C > 1', ok: true },
      { t: 'TIR < TMAR', porque: 'Si la TIR fuera menor que la TMAR, el VPN sería negativo.' },
      { t: 'B/C < 1', porque: 'B/C < 1 equivale a VPN < 0.' },
      { t: 'PR menor a un año', porque: 'El PR no está atado al signo del VPN.' },
    ],
    explicacion: 'En proyectos convencionales, VPN, TIR y B/C siempre coinciden en aceptar o rechazar un proyecto solo.',
  },
  {
    id: 'F03', bloque: 'F', uso: ['desafio'], leccion: 'pr', tiempo: 45,
    enunciado: 'Un proyecto recupera la inversión en 1 año (PR simple), pero su VPN es −$5 M. ¿Qué haces?',
    opciones: [
      { t: 'Lo rechazo: recuperar rápido no significa crear valor', ok: true },
      { t: 'Lo acepto: recupera rapidísimo', porque: 'El PR mide liquidez, no rentabilidad. VPN < 0 destruye valor.' },
      { t: 'Lo acepto si la TIR es positiva', porque: 'Una TIR positiva pero menor que la TMAR da VPN < 0.' },
      { t: 'Me es indiferente', porque: 'Sería indiferente con VPN = 0, no con VPN negativo.' },
    ],
    explicacion: 'El PR responde "¿en cuánto tiempo vuelve la plata?", no "¿conviene?".',
  },
  {
    id: 'F04', bloque: 'F', uso: ['desafio', 'duelo'], leccion: 'restriccion', tiempo: 75,
    enunciado: 'Presupuesto $100 M. Proyectos INDEPENDIENTES: A (inversión $100 M, VPN $30 M), B (inversión $50 M, VPN $20 M), C (inversión $50 M, VPN $18 M). ¿Qué haces?',
    opciones: [
      { t: 'B y C: VPN total $38 M', ok: true },
      { t: 'Solo A, el de mayor VPN', porque: 'A usa todo el presupuesto y suma 30; B + C cabe y suma 38.' },
      { t: 'A y B', porque: 'Cuestan 150: no alcanza el presupuesto.' },
      { t: 'Solo B, el de mejor VPN por peso invertido', porque: 'Sobran 50 que pueden ir a C y sumar 18 más.' },
    ],
    chequeos: [{ formula: 'suma', datos: { valores: [20, 18] }, esperado: 38 }, { formula: 'suma', datos: { valores: [50, 50] }, esperado: 100 }],
    explicacion: 'Con restricción de capital se maximiza el VPN TOTAL de la combinación que cabe en el presupuesto.',
  },
  {
    id: 'F05', bloque: 'F', uso: ['desafio'], leccion: 'criterios', tiempo: 60,
    enunciado: 'Un negocio invierte 100, recibe 230 y luego tiene que volver a poner 132. Por eso sale con dos TIR distintas (10 % y 20 %). ¿Con qué indicador decides?',
    opciones: [
      { t: 'El VPN: da una sola respuesta clara cuando la TIR confunde', ok: true },
      { t: 'La TIR mayor (20 %)', porque: 'Ninguna de las dos TIR es "la" rentabilidad del proyecto.' },
      { t: 'El promedio de las dos TIR', porque: 'Promediar TIR no tiene sentido financiero.' },
      { t: 'El periodo de recuperación', porque: 'El PR no mide rentabilidad.' },
    ],
    chequeos: [{ formula: 'vpn', datos: { flujos: [-100, 230, -132], tasa: 0.1 }, esperado: 0 }, { formula: 'vpn', datos: { flujos: [-100, 230, -132], tasa: 0.2 }, esperado: 0 }],
    explicacion: 'Con flujos no convencionales pueden aparecer varias TIR. El VPN siempre da una sola respuesta.',
  },
  {
    id: 'F06', bloque: 'F', uso: ['desafio'], leccion: 'criterios', tiempo: 45,
    enunciado: 'Solo puedes hacer uno de dos proyectos. A tiene mayor VPN y B mayor TIR, y los cálculos están bien. ¿Por qué puede pasar?',
    opciones: [
      { t: 'Por diferencias de tamaño de la inversión o de cuándo llegan los flujos', ok: true },
      { t: 'Porque alguno está mal calculado', porque: 'Puede pasar con cálculos correctos.' },
      { t: 'Porque la TMAR es negativa', porque: 'No tiene que ver con el signo de la TMAR.' },
      { t: 'Nunca pasa', porque: 'Pasa seguido con proyectos de distinta escala.' },
    ],
    explicacion: 'Un proyecto pequeño puede tener una TIR altísima y crear poco valor en pesos. Por eso manda el VPN.',
  },
  {
    id: 'F07', bloque: 'F', uso: ['desafio'], leccion: 'criterios', tiempo: 45,
    enunciado: 'TMAR 12 %. Proyecto: VPN −$5 M, TIR 10 %, B/C 0,95. ¿Decisión?',
    opciones: [
      { t: 'Rechazar: los tres indicadores coinciden', ok: true },
      { t: 'Aceptar: la TIR es positiva', porque: 'La TIR se compara con la TMAR (12 %), no con cero.' },
      { t: 'Aceptar: la B/C es casi 1', porque: '"Casi 1" sigue siendo menor que 1: destruye valor.' },
      { t: 'Indiferente', porque: 'Sería indiferente con VPN = 0.' },
    ],
    explicacion: 'VPN < 0, TIR < TMAR y B/C < 1 dicen lo mismo: rechazar.',
  },

  {
    id: 'F08', bloque: 'F', uso: ['desafio', 'duelo'], leccion: 'restriccion', tiempo: 75,
    enunciado: 'Presupuesto $150 M, proyectos INDEPENDIENTES. A: inversión $100 M, VPN $40 M. B: inversión $50 M, VPN $25 M. C: inversión $100 M, VPN $45 M. ¿Cuál es el MAYOR VPN total que cabe en el presupuesto?',
    calc: { formula: 'suma', datos: { valores: [45, 25] } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 45, error: 'Escogiste solo el de mayor VPN individual (C) y dejaste $50 M sin usar.' },
      { v: 65, error: 'A + B cabe, pero C + B cabe y suma más.' },
      { v: 110, error: 'Sumaste los tres: cuestan $250 M y no caben.' },
    ],
    explicacion: 'Combinaciones que caben en $150 M: A + B = 65; C + B = 70. Lo mejor es C + B = $70 M.',
  },
  {
    id: 'F09', bloque: 'F', uso: ['desafio', 'duelo'], leccion: 'criterios', tiempo: 90,
    enunciado: 'Solo puedes hacer uno de dos proyectos y exiges 10 %. A: inviertes $100 M y recibes $132 M en un año (TIR 32 %). B: inviertes $200 M y recibes $253 M en un año (TIR 26,5 %). ¿Cuál es el VPN del que conviene escoger?',
    calc: { formula: 'vpn', datos: { flujos: [-200, 253], tasa: 0.1 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 20, error: 'Ese es el VPN de A: lo escogiste por la TIR, pero entre excluyentes manda el VPN.' },
      { v: 53, error: 'No descontaste el flujo de B.' },
      { v: 230, error: 'Olvidaste restar la inversión.' },
    ],
    chequeos: [{ formula: 'tir', datos: { flujos: [-100, 132] }, esperado: 32 }, { formula: 'tir', datos: { flujos: [-200, 253] }, esperado: 26.5 }, { formula: 'vpn', datos: { flujos: [-100, 132], tasa: 0.1 }, esperado: 20 }],
    explicacion: 'VPN A = 132 ÷ 1,1 − 100 = 20. VPN B = 253 ÷ 1,1 − 200 = 30. Se escoge B: $30 M, aunque su TIR sea menor.',
  },

  // ───────────── G. Riesgo ─────────────
  {
    id: 'G01', bloque: 'G', uso: ['desafio', 'duelo'], leccion: 'equilibrio', tiempo: 75,
    enunciado: 'Costos fijos: $20.000.000 al año. Cada caja de café se vende a $50.000 y cuesta $30.000 producirla. ¿Cuántas cajas hay que vender para el punto de equilibrio?',
    calc: { formula: 'peUnidades', datos: { cf: 20000000, precio: 50000, cv: 30000 } }, unidad: 'u', dec: 0,
    distractores: [
      { v: 400, error: 'Dividiste entre el precio; se divide entre el margen (50.000 − 30.000).' },
      { v: 667, error: 'Dividiste entre el costo variable; se divide entre el margen.' },
      { v: 250, error: 'Sumaste precio y costo variable; hay que restarlos.' },
    ],
    explicacion: 'Margen por caja = 20.000. 20.000.000 ÷ 20.000 = 1.000 cajas.',
  },
  {
    id: 'G02', bloque: 'G', uso: ['desafio', 'duelo'], leccion: 'equilibrio', tiempo: 60,
    enunciado: 'Costos fijos $30 M. De cada $100 que se venden, $40 quedan para cubrir esos costos (margen de contribución 40 %). ¿Cuánto hay que vender para no perder?',
    calc: { formula: 'pePesos', datos: { cf: 30, mc: 0.4 } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 12, error: 'Multiplicaste 30 × 40 %; hay que dividir.' },
      { v: 50, error: 'Dividiste entre 60 % (el costo variable), no entre el margen.' },
      { v: 42, error: 'Le sumaste el 40 % a los costos fijos.' },
    ],
    explicacion: '30 ÷ 0,40 = $75 M en ventas.',
  },
  {
    id: 'G03', bloque: 'G', uso: ['desafio'], leccion: 'sensibilidad', tiempo: 45,
    enunciado: '¿Qué es el análisis de sensibilidad?',
    opciones: [
      { t: 'Cambiar UNA variable a la vez (precio, ventas, costos) y ver cuánto cambia el VPN', ok: true },
      { t: 'Cambiar todas las variables al tiempo', porque: 'Eso es análisis de escenarios.' },
      { t: 'Calcular la TIR dos veces para confirmarla', porque: 'Eso es verificar un cálculo, no analizar riesgo.' },
      { t: 'Pedir otra cotización de la maquinaria', porque: 'Eso mejora un insumo, pero no es el análisis.' },
    ],
    explicacion: 'La sensibilidad muestra de qué variable depende más el resultado.',
  },
  {
    id: 'G04', bloque: 'G', uso: ['desafio', 'duelo'], leccion: 'sensibilidad', tiempo: 60,
    enunciado: 'El VPN es $60 M. Cada 1 % que baja el precio, el VPN baja $5 M. ¿Cuánto puede bajar el precio antes de que el VPN llegue a 0?',
    calc: { formula: 'caidaCritica', datos: { vpnBase: 60, porPunto: 5 } }, unidad: '%', dec: 1,
    distractores: [
      { v: 5, error: 'Ese es el impacto de cada punto, no la caída máxima.' },
      { v: 60, error: 'Ese es el VPN, no la caída en %.' },
      { v: 300, error: 'Multiplicaste 60 × 5; hay que dividir.' },
    ],
    explicacion: '60 ÷ 5 = 12 %. Con una caída mayor del 12 %, el VPN se vuelve negativo.',
  },
  {
    id: 'G05', bloque: 'G', uso: ['desafio', 'duelo'], leccion: 'escenarios', tiempo: 90,
    enunciado: 'Tres futuros posibles: malo (VPN −$20 M, 20 % de probabilidad), normal ($30 M, 50 %) y bueno ($70 M, 30 %). ¿Cuál es el VPN esperado?',
    calc: { formula: 'esperado', datos: { valores: [-20, 30, 70], probs: [0.2, 0.5, 0.3] } }, unidad: 'M', dec: 1,
    distractores: [
      { v: 26.7, error: 'Promediaste sin ponderar por la probabilidad.' },
      { v: 80, error: 'Sumaste los tres VPN.' },
      { v: 21, error: 'Solo ponderaste el escenario optimista.' },
    ],
    explicacion: '−20 × 0,2 + 30 × 0,5 + 70 × 0,3 = −4 + 15 + 21 = $32 M.',
  },
  {
    id: 'G06', bloque: 'G', uso: ['desafio'], leccion: 'sensibilidad', tiempo: 45,
    enunciado: 'Si cada variable sube 10 % (una a la vez), el VPN cambia así: precio +$50 M, costo de materia prima −$20 M, inversión −$10 M. ¿Cuál es la variable más sensible?',
    opciones: [
      { t: 'El precio', ok: true },
      { t: 'La inversión', porque: 'Es la que MENOS mueve el VPN (10).' },
      { t: 'La materia prima', porque: 'Mueve 20, menos que el precio (50).' },
      { t: 'Todas por igual', porque: 'Con el mismo 10 % de cambio, el impacto es distinto en cada una.' },
    ],
    explicacion: 'El precio mueve 50, el mayor cambio: hay que estimarlo con mucho cuidado.',
  },
  {
    id: 'G07', bloque: 'G', uso: ['desafio'], leccion: 'sensibilidad', tiempo: 45,
    enunciado: 'El VPN dio $40 M. ¿Para qué hacer análisis de riesgo?',
    opciones: [
      { t: 'Porque se basa en supuestos: si cambian el precio, las ventas o los costos, el VPN podría volverse negativo', ok: true },
      { t: 'No hace falta: un VPN positivo es una garantía', porque: 'El VPN es una estimación: depende de supuestos que pueden fallar.' },
      { t: 'Para subir el VPN', porque: 'El análisis de riesgo no cambia el VPN; muestra qué tan frágil es.' },
      { t: 'Solo porque lo exige el banco', porque: 'Lo necesita cualquiera que tome la decisión.' },
    ],
    explicacion: 'Un VPN positivo con supuestos frágiles puede ser una mala apuesta.',
  },
  {
    id: 'G08', bloque: 'G', uso: ['desafio'], leccion: 'escenarios', tiempo: 45,
    enunciado: '¿Cuál es la diferencia entre análisis de sensibilidad y análisis de escenarios?',
    opciones: [
      { t: 'La sensibilidad mueve una variable a la vez; los escenarios mueven varias juntas', ok: true },
      { t: 'Son lo mismo', porque: 'Uno aísla una variable y el otro combina varias.' },
      { t: 'La sensibilidad mueve varias y los escenarios una', porque: 'Es al revés.' },
      { t: 'Los escenarios solo se usan para calcular la TIR', porque: 'Los escenarios sirven para cualquier indicador.' },
    ],
    explicacion: 'Pesimista, probable y optimista son combinaciones de varias variables a la vez.',
  },
];

// Chequeo rápido de la estrella "Sello VPN+": decidir el signo del VPN en 30 s.
export const ESTRELLA = [
  { id: 'S01', flujos: [-100, 120], tasa: 0.1 },
  { id: 'S02', flujos: [-100, 115], tasa: 0.2 },
  { id: 'S03', flujos: [-100, 0, 121], tasa: 0.1 },
  { id: 'S04', flujos: [-50, 30, 30], tasa: 0.1 },
  { id: 'S05', flujos: [-200, 110, 110], tasa: 0.1 },
  { id: 'S06', flujos: [-100, 125], tasa: 0.25 },
];

// Mini-juego global 1 (tras zona C): ¿Entra o no entra al flujo de caja del proyecto?
export const MG_ENTRA = [
  { t: 'Compra de la maquinaria', entra: true, porque: 'Inversión del año 0.' },
  { t: 'La depreciación como salida de dinero', entra: false, porque: 'No sale plata: solo reduce impuestos.' },
  { t: 'Estudio de mercado que ya se pagó', entra: false, porque: 'Costo hundido.' },
  { t: 'Capital de trabajo', entra: true, porque: 'Inversión que se recupera al final.' },
  { t: 'Valor de salvamento al final', entra: true, porque: 'Entrada del último año.' },
  { t: 'Impuesto de renta', entra: true, porque: 'Es una salida real de dinero.' },
  { t: 'Arriendo que dejas de recibir por usar tu lote', entra: true, porque: 'Costo de oportunidad.' },
  { t: 'Intereses del préstamo (en el flujo del proyecto)', entra: false, porque: 'El flujo del proyecto no incluye la financiación.' },
  { t: 'Ventas del año', entra: true, porque: 'Ingreso operativo.' },
  { t: 'Sueldo del administrador', entra: true, porque: 'Gasto operativo.' },
];

// Mini-juego global 2 (tras zona E): Carrera del descuento (respuestas rápidas de 2 opciones).
export const MG_CARRERA = [
  { t: 'VPN = +$20 M', a: 'Aceptar', b: 'Rechazar', ok: 0 },
  { t: 'TIR 12 %, TMAR 15 %', a: 'Aceptar', b: 'Rechazar', ok: 1 },
  { t: 'B/C = 1,3', a: 'Aceptar', b: 'Rechazar', ok: 0 },
  { t: '$110 M que te dan en 1 año, exigiendo 10 %: ¿cuánto valen hoy?', a: '$100 M', b: '$110 M', ok: 0, chequeo: { formula: 'vp', datos: { monto: 110, tasa: 0.1, n: 1 }, esperado: 100 } },
  { t: 'Recuperar la inversión con plata traída a hoy, ¿tarda igual o más que sin traerla?', a: 'Sí', b: 'No', ok: 0 },
  { t: 'VPN = 0 implica…', a: 'TIR = TMAR', b: 'TIR = 0 %', ok: 0 },
  { t: 'Dos proyectos de los que solo puedes escoger uno y los indicadores se contradicen: manda…', a: 'La TIR', b: 'El VPN', ok: 1 },
  { t: 'B/C = 0,8', a: 'VPN > 0', b: 'VPN < 0', ok: 1 },
  { t: 'Tus $100 M ganan 20 % en 1 año: ¿cuánto tienes?', a: '$120 M', b: '$83 M', ok: 0, chequeo: { formula: 'vf', datos: { monto: 100, tasa: 0.2, n: 1 }, esperado: 120 } },
  { t: 'El PR mide…', a: 'Rentabilidad', b: 'Liquidez', ok: 1 },
];

// Mini-juego global 3 (tras zona G): Termómetro del riesgo (gana quien más se acerque).
export const MG_TERMOMETRO = [
  {
    id: 'T1', enunciado: 'Con un precio de $10.000 el VPN es $120 M. Por cada $1.000 que baja el precio, el VPN baja $40 M. ¿Con qué precio el VPN llega a 0?',
    base: 10000, vpnBase: 120, porPaso: 40, paso: -1000, min: 5000, max: 10000, salto: 250, unidad: '$',
    explicacion: '120 ÷ 40 = 3 bajadas de $1.000 → precio crítico $7.000.',
  },
  {
    id: 'T2', enunciado: 'Vendiendo 1.000 unidades el VPN es $90 M. Por cada 100 unidades menos, el VPN baja $15 M. ¿Con cuántas unidades el VPN llega a 0?',
    base: 1000, vpnBase: 90, porPaso: 15, paso: -100, min: 0, max: 1000, salto: 50, unidad: 'u',
    explicacion: '90 ÷ 15 = 6 bajadas de 100 → 400 unidades.',
  },
  {
    id: 'T3', enunciado: 'Con una TMAR del 10 % el VPN es $50 M. Por cada punto que sube la TMAR, el VPN baja unos $10 M. ¿Con qué TMAR el VPN llega a 0 (≈ la TIR)?',
    base: 10, vpnBase: 50, porPaso: 10, paso: 1, min: 10, max: 30, salto: 1, unidad: '%',
    explicacion: '50 ÷ 10 = 5 puntos → 15 %, que es aproximadamente la TIR (aproximación lineal).',
  },
];

// Mini-juego individual "Ordena": poner los pasos en orden.
export const MG_ORDENA = [
  {
    id: 'O1', titulo: 'Ordena el flujo de caja operativo',
    pasos: ['Ingresos', '− Costos y gastos', '− Depreciación', '= Utilidad antes de impuestos', '− Impuestos', '= Utilidad neta', '+ Depreciación', '= Flujo de caja operativo'],
  },
  {
    id: 'O2', titulo: 'Ordena los pasos de la evaluación financiera',
    pasos: ['Definir horizonte e insumos', 'Armar el flujo de caja', 'Descontar a la TMAR', 'Calcular VPN, TIR, B/C y PR', 'Analizar el riesgo', 'Decidir'],
  },
];

// JEFE FINAL: Junta Directiva del Nevado. TMAR 10 %. Proyectos mutuamente excluyentes.
export const JEFE = {
  tmar: 0.1,
  proyectos: [
    { id: 'P1', nombre: 'Planta de café liofilizado', flujos: [-400, 200, 200, 200] },
    { id: 'P2', nombre: 'App de domicilios de arepas', flujos: [-100, 80, 80] },
    { id: 'P3', nombre: 'Puesto de raspados en la feria', flujos: [-100, 105] },
  ],
  fase1: {
    pregunta: 'La empresa tiene $400 M disponibles y solo puede hacer UNO. ¿Cuál aprueba la Junta?',
    correcto: 'P1',
    justificaciones: [
      { t: 'Tiene el mayor VPN: es el que más valor crea en pesos de hoy', ok: true },
      { t: 'Tiene la mayor TIR', porque: 'La mayor TIR es de P2, y la TIR no ve el tamaño del proyecto.' },
      { t: 'Recupera la inversión más rápido', porque: 'El más rápido es P3, y tiene VPN negativo.' },
    ],
  },
  fase2: {
    pregunta: '¡Giro! El presupuesto se recorta a $100 M. ¿Cuál aprueba ahora la Junta?',
    correcto: 'P2',
    justificaciones: [
      { t: 'Es el único que cabe en el presupuesto con VPN > 0', ok: true },
      { t: 'P3, porque cabe y recupera en menos de un año', porque: 'P3 cabe, pero su VPN es negativo: destruye valor.' },
      { t: 'Ninguno, porque P1 ya no cabe', porque: 'P2 cabe y crea valor.' },
    ],
  },
  giroAlterno: 'Plan B del presentador: "¡La TMAR sube al 25 %!" → P1 (TIR ≈ 23 %) queda con VPN negativo y P2 (TIR ≈ 38 %) sigue siendo positivo → P2.',
};
