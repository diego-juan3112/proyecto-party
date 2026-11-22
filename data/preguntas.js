// ARCHIVO GENERADO por tools/generar-banco.mjs — no editar a mano.
export const LECCIONES = {
 "para_que": "Evaluar financieramente un proyecto es responder UNA pregunta: ¿conviene invertir? Se comparan los flujos de caja que el proyecto devolverá contra la inversión, teniendo en cuenta el tiempo y la tasa mínima que exige el inversionista (TMAR). La decisión es aceptar, rechazar o escoger entre alternativas.",
 "insumos": "Los insumos son las cifras con las que se arma el flujo: inversión inicial (activos y capital de trabajo), ingresos, costos y gastos, depreciación, impuestos, valor de salvamento y horizonte (cuántos años se evalúan). Si un insumo está mal, todo lo demás sale mal.",
 "depreciacion": "La depreciación reparte el costo de un activo en su vida útil. En línea recta: (costo − valor de salvamento) ÷ vida útil. NO es plata que sale cada año: se resta para calcular impuestos y luego se vuelve a sumar en el flujo. Ese ahorro de impuestos se llama escudo fiscal.",
 "impuestos": "El impuesto de renta se calcula sobre la utilidad gravable: ingresos − costos y gastos − depreciación. Nunca sobre los ingresos brutos. Impuesto = utilidad antes de impuestos × tasa.",
 "capital_trabajo": "El capital de trabajo es la plata que el negocio necesita \"amarrada\" para operar: inventario, materia prima, caja. Se invierte al inicio (año 0) y se recupera al final del horizonte. No se deprecia.",
 "salvamento": "El valor de salvamento es lo que valen los activos al final del horizonte (por ejemplo, vender la máquina usada). Entra como un ingreso en el último año. El horizonte es el número de periodos que se evalúan.",
 "flujo_estructura": "Flujo de caja operativo: Ingresos − Costos − Depreciación = Utilidad antes de impuestos; − Impuestos = Utilidad neta; + Depreciación = Flujo operativo. Al flujo se le resta la inversión (año 0) y en el último año se suman el salvamento y la recuperación del capital de trabajo.",
 "flujo_relevante": "Solo entra al flujo lo que cambia con la decisión. Costo hundido (ya gastado pase lo que pase): NO entra. Costo de oportunidad (lo que dejas de ganar por usar algo propio): SÍ entra. En el flujo del proyecto no se restan intereses: se evalúa el negocio, no cómo se paga.",
 "valor_tiempo": "Un peso hoy vale más que un peso mañana, porque hoy lo puedes invertir. Valor futuro: VF = VP × (1 + i)ⁿ. Valor presente: VP = VF ÷ (1 + i)ⁿ. Traer al presente es \"descontar\". El interés es compuesto: los intereses también ganan intereses.",
 "tmar": "La TMAR (tasa mínima atractiva de rendimiento) es lo mínimo que el inversionista le exige al proyecto. En este juego te la damos como dato. Es la tasa con la que se descuentan los flujos: si el proyecto no rinde al menos eso, no conviene.",
 "vpn": "VPN = −Inversión + suma de cada flujo ÷ (1 + TMAR)ᵗ. Mide cuánto valor, en pesos de hoy, crea el proyecto por encima de la TMAR. VPN > 0: se acepta. VPN = 0: rinde justo la TMAR. VPN < 0: se rechaza.",
 "tir": "La TIR es la tasa que hace el VPN igual a cero: la rentabilidad propia del proyecto, en % anual. Regla: si TIR > TMAR se acepta; si TIR < TMAR se rechaza. Con interés compuesto, la TIR no es un promedio simple de ganancias.",
 "bc": "Relación B/C = VP de los beneficios ÷ VP de los costos (inversión incluida), todo descontado a la TMAR. B/C > 1: se acepta (equivale a VPN > 0). B/C < 1: se rechaza.",
 "pr": "Periodo de recuperación: cuánto tarda el proyecto en devolver la inversión. Simple: con flujos sin descontar. Descontado: con flujos traídos a presente a la TMAR (siempre tarda igual o más). Mide liquidez y riesgo, NO rentabilidad.",
 "criterios": "En proyectos convencionales, VPN > 0, TIR > TMAR y B/C > 1 dicen lo mismo. Si los indicadores se contradicen al elegir entre proyectos excluyentes, manda el VPN: mide valor en pesos. La TIR y la B/C son porcentajes o razones y no ven el tamaño del proyecto.",
 "restriccion": "Con presupuesto limitado y proyectos independientes, se busca la combinación que quepa en el presupuesto y sume el MAYOR VPN total, no el proyecto con el mayor VPN individual.",
 "sensibilidad": "El análisis de sensibilidad cambia UNA variable a la vez (precio, ventas, costos) y mide cuánto se mueve el VPN. La variable más sensible es la que más lo mueve. El valor crítico es el cambio que deja el VPN en cero.",
 "escenarios": "Los escenarios mueven VARIAS variables juntas: pesimista, probable y optimista. Si cada escenario tiene probabilidad, el VPN esperado es la suma de cada VPN multiplicado por su probabilidad.",
 "equilibrio": "Punto de equilibrio: las ventas con las que no se gana ni se pierde. En unidades: costos fijos ÷ (precio − costo variable unitario). En pesos: costos fijos ÷ % de margen de contribución."
};
export const PREGUNTAS = [
 {
  "id": "A01",
  "bloque": "A",
  "uso": [
   "desafio",
   "salida"
  ],
  "tiempo": 45,
  "leccion": "para_que",
  "tipo": "concepto",
  "enunciado": "Tu equipo tiene el plan de negocio de una tienda de café especial. ¿Qué decisión principal se toma con la evaluación financiera?",
  "opciones": [
   {
    "t": "A qué precio vender cada tinto",
    "porque": "El precio es un insumo que viene del estudio de mercado, no la decisión final."
   },
   {
    "t": "De qué banco sacar el préstamo",
    "porque": "Eso es financiación, otra gestión (la expone otro equipo)."
   },
   {
    "t": "Cuánta utilidad contable reportar el año 1",
    "porque": "La evaluación mira todos los flujos del horizonte, no un solo año contable."
   },
   {
    "t": "Si conviene invertir o no: aceptar, rechazar o escoger entre alternativas"
   }
  ],
  "correcta": 3,
  "explicacion": "La evaluación financiera existe para decidir si se invierte. Todo lo demás (flujo, indicadores, riesgo) sirve para tomar esa decisión con fundamento."
 },
 {
  "id": "A02",
  "bloque": "A",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "para_que",
  "tipo": "concepto",
  "enunciado": "¿Desde qué punto de vista se hace la evaluación FINANCIERA de un proyecto?",
  "opciones": [
   {
    "t": "Del cliente: si el precio es justo",
    "porque": "El cliente no pone la inversión ni recibe los flujos."
   },
   {
    "t": "Del inversionista: ¿la plata que pongo rinde al menos lo que exijo (TMAR)?"
   },
   {
    "t": "Del gobierno: cuánto va a recaudar",
    "porque": "Los impuestos son un insumo del flujo, no el punto de vista."
   },
   {
    "t": "De la sociedad: empleos e impacto ambiental",
    "porque": "Eso corresponde a la evaluación económica o social."
   }
  ],
  "correcta": 1,
  "explicacion": "La evaluación financiera mira el proyecto con los ojos de quien pone la plata y espera recuperarla con un rendimiento mínimo (TMAR)."
 },
 {
  "id": "A03",
  "bloque": "A",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "para_que",
  "tipo": "concepto",
  "enunciado": "En una frase, la evaluación financiera compara…",
  "opciones": [
   {
    "t": "Lo que el proyecto devuelve (flujos futuros) contra lo que cuesta, teniendo en cuenta el tiempo y la TMAR"
   },
   {
    "t": "Las ventas totales contra las de la competencia",
    "porque": "Eso es análisis de mercado."
   },
   {
    "t": "Los ingresos del año 1 contra los costos del año 1",
    "porque": "Un solo año no muestra todo el horizonte ni el valor del dinero en el tiempo."
   },
   {
    "t": "La utilidad contable acumulada, sin importar cuándo llega",
    "porque": "Sí importa cuándo llega la plata: un peso hoy vale más que uno mañana."
   }
  ],
  "correcta": 0,
  "explicacion": "Flujos que entran vs. inversión que sale, puestos en la misma fecha (descontados a la TMAR)."
 },
 {
  "id": "B01",
  "bloque": "B",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "depreciacion",
  "tipo": "calculo",
  "enunciado": "Una tostadora industrial cuesta $50 M, vida útil 5 años, sin valor de salvamento. Depreciación en línea recta. ¿Cuánto se deprecia por año?",
  "opciones": [
   {
    "t": "$250 M",
    "porque": "Multiplicaste por la vida útil en vez de dividir."
   },
   {
    "t": "$10 M"
   },
   {
    "t": "$50 M",
    "porque": "Ese es el costo total, no el valor anual."
   },
   {
    "t": "$12,5 M",
    "porque": "Dividiste entre 4 años; la vida útil es 5."
   }
  ],
  "correcta": 1,
  "explicacion": "(50 − 0) ÷ 5 = $10 M por año.",
  "calc": {
   "formula": "depreciacion",
   "datos": {
    "costo": 50,
    "vida": 5
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 10
 },
 {
  "id": "B02",
  "bloque": "B",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "depreciacion",
  "tipo": "calculo",
  "enunciado": "Un camión cuesta $90 M, vida útil 4 años y valor de salvamento contable de $10 M. ¿Depreciación anual en línea recta?",
  "opciones": [
   {
    "t": "$20 M"
   },
   {
    "t": "$80 M",
    "porque": "Ese es el total a depreciar; falta dividir entre 4 años."
   },
   {
    "t": "$22,5 M",
    "porque": "No le restaste el valor de salvamento al costo."
   },
   {
    "t": "$25 M",
    "porque": "Sumaste el salvamento en vez de restarlo."
   }
  ],
  "correcta": 0,
  "explicacion": "(90 − 10) ÷ 4 = $20 M por año.",
  "calc": {
   "formula": "depreciacion",
   "datos": {
    "costo": 90,
    "salvamento": 10,
    "vida": 4
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 20
 },
 {
  "id": "B03",
  "bloque": "B",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "impuestos",
  "tipo": "calculo",
  "enunciado": "Año 1: ingresos $100 M, costos y gastos $40 M, depreciación $20 M. Impuesto de renta 30 %. ¿Cuánto impuesto se paga?",
  "opciones": [
   {
    "t": "$18 M",
    "porque": "No restaste la depreciación antes de calcular el impuesto."
   },
   {
    "t": "$12 M"
   },
   {
    "t": "$6 M",
    "porque": "Aplicaste el 30 % solo a la depreciación."
   },
   {
    "t": "$30 M",
    "porque": "Calculaste el impuesto sobre los ingresos; va sobre la utilidad."
   }
  ],
  "correcta": 1,
  "explicacion": "Utilidad gravable = 100 − 40 − 20 = 40. Impuesto = 40 × 30 % = $12 M.",
  "calc": {
   "formula": "impuesto",
   "datos": {
    "ingresos": 100,
    "costos": 40,
    "dep": 20,
    "t": 0.3
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 12
 },
 {
  "id": "B04",
  "bloque": "B",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "insumos",
  "tipo": "concepto",
  "enunciado": "¿Cuál de estos NO es un costo o gasto de operación del año?",
  "opciones": [
   {
    "t": "La nómina de los baristas",
    "porque": "Es un costo operativo: se paga cada año."
   },
   {
    "t": "La compra de la máquina empacadora"
   },
   {
    "t": "Los servicios públicos",
    "porque": "Es un gasto operativo: se paga cada año."
   },
   {
    "t": "El arriendo del local",
    "porque": "Es un gasto operativo: se paga cada año."
   }
  ],
  "correcta": 1,
  "explicacion": "Comprar la máquina es INVERSIÓN (año 0). Su costo llega a los años de operación solo a través de la depreciación."
 },
 {
  "id": "B05",
  "bloque": "B",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "capital_trabajo",
  "tipo": "concepto",
  "enunciado": "Una panadería necesita $10 M en harina, empaques y caja menor para operar desde el día 1. ¿Cómo se trata esa plata en la evaluación?",
  "opciones": [
   {
    "t": "Como gasto deducible del año 1",
    "porque": "No es un gasto: la plata queda amarrada en la operación y se recupera."
   },
   {
    "t": "Se deprecia en línea recta",
    "porque": "El capital de trabajo no es un activo fijo: no se deprecia."
   },
   {
    "t": "Como inversión en capital de trabajo en el año 0, que se recupera al final del horizonte"
   },
   {
    "t": "No se incluye, porque al final se recupera",
    "porque": "Mientras tanto la plata no está disponible: ese tiempo tiene costo."
   }
  ],
  "correcta": 2,
  "explicacion": "Sale en el año 0 (−10) y vuelve en el último año (+10). Como vuelve más tarde, en valor presente sí le cuesta al proyecto."
 },
 {
  "id": "B06",
  "bloque": "B",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "salvamento",
  "tipo": "concepto",
  "enunciado": "Al final del horizonte de 5 años, la tostadora se puede vender en $8 M. ¿Dónde va ese valor?",
  "opciones": [
   {
    "t": "Como gasto del año 5",
    "porque": "Vender un activo trae plata, no la saca."
   },
   {
    "t": "Restándolo de la inversión del año 0",
    "porque": "Se recibe al final, no al inicio: no se puede descontar de la inversión inicial."
   },
   {
    "t": "Como entrada de dinero en el año 5"
   },
   {
    "t": "No se incluye, porque la máquina ya está depreciada",
    "porque": "Aunque esté depreciada, si se puede vender, esa plata entra al proyecto."
   }
  ],
  "correcta": 2,
  "explicacion": "El salvamento es una entrada del último año. (Si se vende por encima de su valor en libros, la ganancia paga impuestos.)"
 },
 {
  "id": "B07",
  "bloque": "B",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "depreciacion",
  "tipo": "concepto",
  "enunciado": "¿Por qué la depreciación aparece en el flujo de caja si no es una salida de dinero?",
  "opciones": [
   {
    "t": "Porque es plata que sale cada año para reponer la máquina",
    "porque": "No sale efectivo: la máquina se pagó en el año 0."
   },
   {
    "t": "Porque reduce la utilidad gravable y con ella los impuestos (escudo fiscal)"
   },
   {
    "t": "Porque aumenta las ventas",
    "porque": "La depreciación no tiene que ver con las ventas."
   },
   {
    "t": "No debería aparecer en ninguna parte del flujo",
    "porque": "Sí aparece: se resta para calcular impuestos y luego se vuelve a sumar."
   }
  ],
  "correcta": 1,
  "explicacion": "Se resta antes de impuestos (paga menos impuesto) y se suma después (porque no salió plata)."
 },
 {
  "id": "B08",
  "bloque": "B",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "depreciacion",
  "tipo": "calculo",
  "enunciado": "Depreciación anual $20 M, impuesto de renta 35 %. ¿Cuánto se ahorra en impuestos cada año gracias a la depreciación?",
  "opciones": [
   {
    "t": "$35 M",
    "porque": "Usaste la tasa de impuesto como si fuera el monto."
   },
   {
    "t": "$20 M",
    "porque": "Ese es el valor de la depreciación, no el ahorro en impuestos."
   },
   {
    "t": "$7 M"
   },
   {
    "t": "$13 M",
    "porque": "Calculaste 20 × 65 %; el ahorro es 20 × 35 %."
   }
  ],
  "correcta": 2,
  "explicacion": "Escudo fiscal = depreciación × tasa = 20 × 0,35 = $7 M por año.",
  "calc": {
   "formula": "escudo",
   "datos": {
    "dep": 20,
    "t": 0.35
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 7
 },
 {
  "id": "B09",
  "bloque": "B",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "salvamento",
  "tipo": "concepto",
  "enunciado": "¿Qué es el horizonte de evaluación?",
  "opciones": [
   {
    "t": "El año en que el proyecto da su primera utilidad",
    "porque": "Eso no define cuántos años se evalúan."
   },
   {
    "t": "El número de periodos (por ejemplo, 5 años) para los que se proyectan los flujos"
   },
   {
    "t": "El tiempo que tarda en recuperarse la inversión",
    "porque": "Ese es el periodo de recuperación (bloque E)."
   },
   {
    "t": "La fecha en que se pide el préstamo",
    "porque": "Eso es financiación, no el horizonte."
   }
  ],
  "correcta": 1,
  "explicacion": "El horizonte suele relacionarse con la vida útil de los activos, pero lo define quien evalúa según el proyecto."
 },
 {
  "id": "C01",
  "bloque": "C",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 90,
  "leccion": "flujo_estructura",
  "tipo": "calculo",
  "enunciado": "Año 2: ingresos $200 M, costos y gastos $80 M, depreciación $40 M, impuesto 30 %. ¿Flujo de caja operativo del año?",
  "opciones": [
   {
    "t": "$96 M"
   },
   {
    "t": "$120 M",
    "porque": "No restaste los impuestos."
   },
   {
    "t": "$56 M",
    "porque": "Olvidaste volver a sumar la depreciación (no es salida de dinero)."
   },
   {
    "t": "$84 M",
    "porque": "Calculaste el impuesto sin restar antes la depreciación: perdiste el escudo fiscal."
   }
  ],
  "correcta": 0,
  "explicacion": "UAI = 200 − 80 − 40 = 80. Impuesto = 24. Utilidad neta = 56. + Depreciación 40 → FC = $96 M.",
  "calc": {
   "formula": "fcOperativo",
   "datos": {
    "ingresos": 200,
    "costos": 80,
    "dep": 40,
    "t": 0.3
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 96
 },
 {
  "id": "C02",
  "bloque": "C",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "flujo_relevante",
  "tipo": "calculo",
  "enunciado": "Para arrancar se necesitan maquinaria por $100 M y capital de trabajo por $20 M. El mes pasado se pagaron $10 M por un estudio de mercado. ¿Flujo del año 0?",
  "opciones": [
   {
    "t": "$−100 M",
    "porque": "Olvidaste el capital de trabajo."
   },
   {
    "t": "$−120 M"
   },
   {
    "t": "$−130 M",
    "porque": "Incluiste el estudio de mercado: es un costo hundido, ya se pagó pase lo que pase."
   },
   {
    "t": "$−80 M",
    "porque": "Sumaste el capital de trabajo como si fuera una entrada."
   }
  ],
  "correcta": 1,
  "explicacion": "Año 0 = −100 (maquinaria) − 20 (capital de trabajo) = −$120 M. El estudio ya pagado no cambia con la decisión.",
  "calc": {
   "formula": "suma",
   "datos": {
    "valores": [
     -100,
     -20
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": -120
 },
 {
  "id": "C03",
  "bloque": "C",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "flujo_estructura",
  "tipo": "calculo",
  "enunciado": "Año 5 (el último): flujo operativo $50 M. Además se recupera el capital de trabajo ($20 M) y se vende la maquinaria en $10 M (sin impuesto sobre la venta). ¿Flujo total del año 5?",
  "opciones": [
   {
    "t": "$70 M",
    "porque": "Olvidaste el valor de salvamento."
   },
   {
    "t": "$80 M"
   },
   {
    "t": "$50 M",
    "porque": "Olvidaste la recuperación del capital de trabajo y el salvamento."
   },
   {
    "t": "$60 M",
    "porque": "Olvidaste recuperar el capital de trabajo."
   }
  ],
  "correcta": 1,
  "explicacion": "50 + 20 + 10 = $80 M. El último año \"devuelve\" el capital de trabajo y el salvamento.",
  "calc": {
   "formula": "suma",
   "datos": {
    "valores": [
     50,
     20,
     10
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 80
 },
 {
  "id": "C04",
  "bloque": "C",
  "uso": [
   "desafio",
   "caza"
  ],
  "tiempo": 75,
  "leccion": "flujo_estructura",
  "tipo": "concepto",
  "enunciado": "Caza el error. (1) Ingresos 100 · (2) − Costos 40 · (3) − Depreciación 20 → UAI 40 · (4) − Impuestos 30 % = 12 → Utilidad neta 28 · (5) − Depreciación 20 → Flujo de caja 8. ¿Qué línea está mal?",
  "opciones": [
   {
    "t": "La 3: la depreciación no se resta antes de impuestos",
    "porque": "Sí se resta antes de impuestos: así se obtiene el escudo fiscal."
   },
   {
    "t": "La 4: el impuesto debía ser sobre 100",
    "porque": "El impuesto va sobre la utilidad (40), no sobre los ingresos."
   },
   {
    "t": "La 2: los costos no se restan",
    "porque": "Los costos sí se restan de los ingresos."
   },
   {
    "t": "La 5: la depreciación se SUMA de nuevo; el flujo correcto es 48"
   }
  ],
  "correcta": 3,
  "explicacion": "Restar la depreciación dos veces es el error más común. Utilidad neta 28 + 20 = 48.",
  "chequeos": [
   {
    "formula": "fcOperativo",
    "datos": {
     "ingresos": 100,
     "costos": 40,
     "dep": 20,
     "t": 0.3
    },
    "esperado": 48
   }
  ]
 },
 {
  "id": "C05",
  "bloque": "C",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "flujo_relevante",
  "tipo": "concepto",
  "enunciado": "Hace dos meses pagaron $5 M por un estudio de mercado, y ese pago no se devuelve se haga o no el proyecto. ¿Va en el flujo de caja?",
  "opciones": [
   {
    "t": "No: es un costo hundido, ya se gastó pase lo que pase"
   },
   {
    "t": "Sí, repartido en los años de operación",
    "porque": "No es un costo futuro del proyecto."
   },
   {
    "t": "Solo si el proyecto da VPN positivo",
    "porque": "Un costo hundido no entra en ningún caso."
   },
   {
    "t": "Sí, en el año 0",
    "porque": "Esa plata ya se fue y no cambia con la decisión: no es relevante."
   }
  ],
  "correcta": 0,
  "explicacion": "Pregunta clave para cada cifra: ¿esto cambia si decido invertir o no? Si no cambia, no entra."
 },
 {
  "id": "C06",
  "bloque": "C",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "flujo_relevante",
  "tipo": "concepto",
  "enunciado": "El proyecto usará un lote propio que hoy podrían arrendar en $10 M al año. ¿Cómo se trata?",
  "opciones": [
   {
    "t": "Como un costo de $10 M al año (costo de oportunidad)"
   },
   {
    "t": "Como un ingreso de $10 M al año",
    "porque": "El proyecto no recibe ese arriendo; lo deja de recibir."
   },
   {
    "t": "No se incluye, porque el lote ya es nuestro",
    "porque": "Usarlo implica dejar de recibir el arriendo: es un costo real de la decisión."
   },
   {
    "t": "Como inversión de $10 M en el año 0",
    "porque": "El arriendo perdido ocurre cada año, no una sola vez."
   }
  ],
  "correcta": 0,
  "explicacion": "El costo de oportunidad es lo que se deja de ganar por usar un recurso propio en el proyecto."
 },
 {
  "id": "C07",
  "bloque": "C",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "flujo_relevante",
  "tipo": "concepto",
  "enunciado": "Están armando el flujo de caja DEL PROYECTO (se evalúa el negocio, sin importar de dónde sale la plata). ¿Se restan los intereses de un préstamo?",
  "opciones": [
   {
    "t": "Solo los del primer año",
    "porque": "En el flujo del proyecto no van intereses de ningún año."
   },
   {
    "t": "No: el flujo del proyecto no incluye cómo se financia"
   },
   {
    "t": "Sí, siempre",
    "porque": "Eso corresponde a otro flujo (el del inversionista con financiación), que no es el que se está armando."
   },
   {
    "t": "Sí, pero sin descontarlos",
    "porque": "En el flujo del proyecto no van intereses."
   }
  ],
  "correcta": 1,
  "explicacion": "Primero se mira si el negocio vale la pena por sí mismo. Cómo se financia lo trata otra gestión."
 },
 {
  "id": "C08",
  "bloque": "C",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "flujo_estructura",
  "tipo": "concepto",
  "enunciado": "Partiendo de la utilidad neta, ¿cómo se llega al flujo de caja del proyecto?",
  "opciones": [
   {
    "t": "Utilidad neta + depreciación − inversiones + salvamento y recuperación del capital de trabajo"
   },
   {
    "t": "Utilidad antes de impuestos + depreciación",
    "porque": "Faltan los impuestos, que sí se pagan."
   },
   {
    "t": "Utilidad neta − depreciación",
    "porque": "La depreciación ya se restó una vez; ahora se suma."
   },
   {
    "t": "Ingresos − costos, sin impuestos",
    "porque": "Los impuestos sí son una salida de dinero."
   }
  ],
  "correcta": 0,
  "explicacion": "La utilidad contable no es plata en la mano: hay que devolver lo que no fue salida (depreciación) y agregar lo que sí lo fue (inversiones)."
 },
 {
  "id": "C09",
  "bloque": "C",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 90,
  "leccion": "flujo_estructura",
  "tipo": "calculo",
  "enunciado": "Año 1: ingresos $150 M, costos y gastos $50 M, depreciación $20 M, impuesto 25 %. ¿Flujo de caja operativo?",
  "opciones": [
   {
    "t": "$100 M",
    "porque": "No restaste los impuestos."
   },
   {
    "t": "$75 M",
    "porque": "Calculaste el impuesto sin restar la depreciación (25 % de 100)."
   },
   {
    "t": "$80 M"
   },
   {
    "t": "$60 M",
    "porque": "Olvidaste volver a sumar la depreciación."
   }
  ],
  "correcta": 2,
  "explicacion": "UAI = 150 − 50 − 20 = 80. Impuesto = 20. Utilidad neta = 60. + 20 → FC = $80 M.",
  "calc": {
   "formula": "fcOperativo",
   "datos": {
    "ingresos": 150,
    "costos": 50,
    "dep": 20,
    "t": 0.25
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 80
 },
 {
  "id": "C10",
  "bloque": "C",
  "uso": [
   "caza"
  ],
  "tiempo": 75,
  "leccion": "flujo_estructura",
  "tipo": "concepto",
  "enunciado": "Caza el error. Año 0: máquina −100 y capital de trabajo −20 → −120. Años 1, 2 y 3: flujo operativo +50. Año 3: + salvamento 10 → total año 3 = +60. ¿Qué falta?",
  "opciones": [
   {
    "t": "Recuperar el capital de trabajo (+20) en el año 3: el total es +80"
   },
   {
    "t": "No falta nada",
    "porque": "El capital de trabajo invertido en el año 0 se recupera en el último año."
   },
   {
    "t": "Restar la depreciación en el año 3",
    "porque": "La depreciación ya está dentro del flujo operativo."
   },
   {
    "t": "Sumar los 20 de capital de trabajo en el año 1",
    "porque": "Se recupera al final, no al inicio."
   }
  ],
  "correcta": 0,
  "explicacion": "Olvidar la recuperación del capital de trabajo subvalora el proyecto.",
  "chequeos": [
   {
    "formula": "suma",
    "datos": {
     "valores": [
      50,
      10,
      20
     ]
    },
    "esperado": 80
   }
  ]
 },
 {
  "id": "C11",
  "bloque": "C",
  "uso": [
   "caza"
  ],
  "tiempo": 75,
  "leccion": "impuestos",
  "tipo": "concepto",
  "enunciado": "Caza el error. Ingresos 100, costos 60, sin depreciación. Impuestos = 30 % × 100 = 30. Flujo = 100 − 60 − 30 = 10. ¿Qué está mal?",
  "opciones": [
   {
    "t": "Los costos no se restan",
    "porque": "Los costos sí se restan."
   },
   {
    "t": "Faltó sumar 30 de depreciación",
    "porque": "El enunciado dice que no hay depreciación."
   },
   {
    "t": "El impuesto va sobre la utilidad (40 × 30 % = 12): el flujo correcto es 28"
   },
   {
    "t": "Nada, está bien",
    "porque": "El impuesto se calculó sobre los ingresos; va sobre la utilidad."
   }
  ],
  "correcta": 2,
  "explicacion": "(100 − 60) × (1 − 0,30) = 28.",
  "chequeos": [
   {
    "formula": "fcOperativo",
    "datos": {
     "ingresos": 100,
     "costos": 60,
     "dep": 0,
     "t": 0.3
    },
    "esperado": 28
   }
  ]
 },
 {
  "id": "D01",
  "bloque": "D",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "valor_tiempo",
  "tipo": "calculo",
  "enunciado": "Inviertes $100 M a la TMAR del 10 % anual compuesto. ¿Cuánto tienes en 2 años?",
  "opciones": [
   {
    "t": "$100 M",
    "porque": "La plata no se queda quieta: gana la TMAR cada año."
   },
   {
    "t": "$82,64 M",
    "porque": "Eso es descontar (traer al presente), no capitalizar."
   },
   {
    "t": "$121 M"
   },
   {
    "t": "$110 M",
    "porque": "Solo calculaste un año."
   }
  ],
  "correcta": 2,
  "explicacion": "100 × 1,1 × 1,1 = $121 M. (Con interés simple darían 120: el compuesto gana interés sobre el interés.)",
  "calc": {
   "formula": "vf",
   "datos": {
    "monto": 100,
    "tasa": 0.1,
    "n": 2
   }
  },
  "unidad": "M",
  "dec": 2,
  "valor": 121.00000000000001
 },
 {
  "id": "D02",
  "bloque": "D",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "valor_tiempo",
  "tipo": "calculo",
  "enunciado": "Te prometen $121 M dentro de 2 años. Con una TMAR del 10 %, ¿cuánto valen hoy?",
  "opciones": [
   {
    "t": "$146,41 M",
    "porque": "Multiplicaste por 1,21 en vez de dividir."
   },
   {
    "t": "$100 M"
   },
   {
    "t": "$110 M",
    "porque": "Descontaste solo un año."
   },
   {
    "t": "$121 M",
    "porque": "No descontaste: la plata futura vale menos hoy."
   }
  ],
  "correcta": 1,
  "explicacion": "121 ÷ 1,1² = 121 ÷ 1,21 = $100 M.",
  "calc": {
   "formula": "vp",
   "datos": {
    "monto": 121,
    "tasa": 0.1,
    "n": 2
   }
  },
  "unidad": "M",
  "dec": 2,
  "valor": 99.99999999999999
 },
 {
  "id": "D03",
  "bloque": "D",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "valor_tiempo",
  "tipo": "concepto",
  "enunciado": "¿Por qué $1 M hoy vale más que $1 M dentro de un año?",
  "opciones": [
   {
    "t": "Porque el banco cobra cuota de manejo",
    "porque": "Eso no explica el valor del dinero en el tiempo."
   },
   {
    "t": "Porque hoy lo puedo invertir y ganar al menos la TMAR"
   },
   {
    "t": "Porque los billetes se desgastan",
    "porque": "No es un tema físico: es lo que el dinero puede rendir."
   },
   {
    "t": "No es cierto: valen exactamente lo mismo",
    "porque": "Al tener la plata antes, puedes ponerla a rendir."
   }
  ],
  "correcta": 1,
  "explicacion": "El costo de esperar es lo que dejas de ganar. Por eso los flujos futuros se descuentan."
 },
 {
  "id": "D04",
  "bloque": "D",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "tmar",
  "tipo": "concepto",
  "enunciado": "¿Qué es la TMAR?",
  "opciones": [
   {
    "t": "La tasa mínima que el inversionista le exige al proyecto para aceptarlo"
   },
   {
    "t": "El porcentaje de impuestos",
    "porque": "Los impuestos son un insumo del flujo."
   },
   {
    "t": "La rentabilidad que da el proyecto",
    "porque": "Esa es la TIR (bloque E)."
   },
   {
    "t": "El porcentaje de ganancia sobre las ventas",
    "porque": "Ese es el margen, un dato contable."
   }
  ],
  "correcta": 0,
  "explicacion": "La TMAR es la vara con la que se mide el proyecto. Se usa para descontar los flujos. (Cómo se calcula lo expone otro equipo.)"
 },
 {
  "id": "D05",
  "bloque": "D",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "valor_tiempo",
  "tipo": "calculo",
  "enunciado": "Recibirás $200 M dentro de un año. TMAR 25 %. ¿Cuál es su valor presente?",
  "opciones": [
   {
    "t": "$150 M",
    "porque": "Le restaste el 25 %; hay que DIVIDIR entre 1,25."
   },
   {
    "t": "$160 M"
   },
   {
    "t": "$200 M",
    "porque": "No descontaste."
   },
   {
    "t": "$250 M",
    "porque": "Multiplicaste: eso es valor futuro."
   }
  ],
  "correcta": 1,
  "explicacion": "200 ÷ 1,25 = $160 M.",
  "calc": {
   "formula": "vp",
   "datos": {
    "monto": 200,
    "tasa": 0.25,
    "n": 1
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 160
 },
 {
  "id": "D06",
  "bloque": "D",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 90,
  "leccion": "valor_tiempo",
  "tipo": "calculo",
  "enunciado": "Recibirás $110 M en el año 1 y $121 M en el año 2. TMAR 10 %. ¿Cuál es el valor presente de los dos?",
  "opciones": [
   {
    "t": "$181,8 M",
    "porque": "Descontaste cada flujo un año de más."
   },
   {
    "t": "$231 M",
    "porque": "Sumaste sin descontar."
   },
   {
    "t": "$210 M",
    "porque": "Descontaste los dos flujos un solo año."
   },
   {
    "t": "$200 M"
   }
  ],
  "correcta": 3,
  "explicacion": "110 ÷ 1,1 = 100; 121 ÷ 1,21 = 100. VP = $200 M.",
  "calc": {
   "formula": "vpFlujos",
   "datos": {
    "flujos": [
     110,
     121
    ],
    "tasa": 0.1
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 199.99999999999997
 },
 {
  "id": "D07",
  "bloque": "D",
  "uso": [
   "desafio"
  ],
  "tiempo": 60,
  "leccion": "valor_tiempo",
  "tipo": "concepto",
  "enunciado": "¿Qué prefieres: $100 M hoy o $115 M dentro de un año? Tu TMAR es 20 %.",
  "opciones": [
   {
    "t": "Los $115 M: es más plata",
    "porque": "Es más plata en pesos de dentro de un año. Traída a hoy (÷ 1,2) vale menos que 100."
   },
   {
    "t": "Da igual",
    "porque": "Daría igual solo si los $115 M valieran hoy exactamente $100 M (con TMAR del 15 %)."
   },
   {
    "t": "No se puede saber sin la inflación",
    "porque": "La TMAR ya permite comparar las dos opciones."
   },
   {
    "t": "Los $100 M hoy: los $115 M valen hoy unos $95,8 M"
   }
  ],
  "correcta": 3,
  "explicacion": "115 ÷ 1,2 ≈ 95,8 < 100. Mejor la plata hoy.",
  "chequeos": [
   {
    "formula": "vp",
    "datos": {
     "monto": 115,
     "tasa": 0.2,
     "n": 1
    },
    "esperado": 95.83,
    "tol": 0.01
   }
  ]
 },
 {
  "id": "D08",
  "bloque": "D",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "valor_tiempo",
  "tipo": "calculo",
  "enunciado": "Con TMAR del 10 %, ¿cuánto deberías recibir dentro de un año para que te dé igual que tener $50 M hoy?",
  "opciones": [
   {
    "t": "$55 M"
   },
   {
    "t": "$60 M",
    "porque": "Sumaste 10 dos veces."
   },
   {
    "t": "$50 M",
    "porque": "Recibir lo mismo más tarde es perder lo que podías ganar."
   },
   {
    "t": "$45,45 M",
    "porque": "Descontaste en vez de capitalizar."
   }
  ],
  "correcta": 0,
  "explicacion": "50 × 1,1 = $55 M. A eso se le llama valor equivalente.",
  "calc": {
   "formula": "vf",
   "datos": {
    "monto": 50,
    "tasa": 0.1,
    "n": 1
   }
  },
  "unidad": "M",
  "dec": 2,
  "valor": 55.00000000000001
 },
 {
  "id": "E01",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 90,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Inversión $150 M. Flujos: año 1 $110 M, año 2 $121 M. TMAR 10 %. ¿Cuál es el VPN?",
  "opciones": [
   {
    "t": "$50 M"
   },
   {
    "t": "$81 M",
    "porque": "Sumaste los flujos sin descontarlos."
   },
   {
    "t": "$200 M",
    "porque": "Olvidaste restar la inversión."
   },
   {
    "t": "$60 M",
    "porque": "Descontaste los dos flujos un solo año."
   }
  ],
  "correcta": 0,
  "explicacion": "VP = 100 + 100 = 200. VPN = 200 − 150 = $50 M > 0 → se acepta.",
  "calc": {
   "formula": "vpn",
   "datos": {
    "flujos": [
     -150,
     110,
     121
    ],
    "tasa": 0.1
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 49.99999999999997
 },
 {
  "id": "E02",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Inviertes $100 M y recibes $132 M dentro de un año. TMAR 20 %. ¿Cuál es el VPN?",
  "opciones": [
   {
    "t": "$10 M"
   },
   {
    "t": "$5,6 M",
    "porque": "Le restaste el 20 % a 132; hay que dividir entre 1,2."
   },
   {
    "t": "$110 M",
    "porque": "Ese es el VP de los flujos: falta restar la inversión."
   },
   {
    "t": "$32 M",
    "porque": "No descontaste el flujo."
   }
  ],
  "correcta": 0,
  "explicacion": "132 ÷ 1,2 = 110. VPN = 110 − 100 = $10 M.",
  "calc": {
   "formula": "vpn",
   "datos": {
    "flujos": [
     -100,
     132
    ],
    "tasa": 0.2
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 10
 },
 {
  "id": "E03",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "tir",
  "tipo": "calculo",
  "enunciado": "Inviertes $100 M y recibes $121 M en el año 2 (nada en el año 1). ¿Cuál es la TIR?",
  "opciones": [
   {
    "t": "21 %",
    "porque": "Esa es la ganancia total de los 2 años, no la tasa anual."
   },
   {
    "t": "10 %"
   },
   {
    "t": "10,5 %",
    "porque": "Promediaste 21 % entre 2; con interés compuesto no funciona así."
   },
   {
    "t": "0 %",
    "porque": "Que el año 1 sea cero no hace cero la TIR."
   }
  ],
  "correcta": 1,
  "explicacion": "100 × 1,1² = 121, así que la tasa que hace VPN = 0 es 10 %.",
  "calc": {
   "formula": "tir",
   "datos": {
    "flujos": [
     -100,
     0,
     121
    ]
   }
  },
  "unidad": "%",
  "dec": 1,
  "valor": 9.999999999999998
 },
 {
  "id": "E04",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "tir",
  "tipo": "calculo",
  "enunciado": "Inviertes $200 M y recibes $250 M dentro de un año. ¿Cuál es la TIR?",
  "opciones": [
   {
    "t": "25 %"
   },
   {
    "t": "125 %",
    "porque": "Dividiste 250 entre 200 sin restar 1."
   },
   {
    "t": "20 %",
    "porque": "Dividiste la ganancia entre 250; se divide entre lo invertido (200)."
   },
   {
    "t": "50 %",
    "porque": "Esa es la ganancia en millones, no la tasa."
   }
  ],
  "correcta": 0,
  "explicacion": "250 ÷ 200 = 1,25 → TIR = 25 %.",
  "calc": {
   "formula": "tir",
   "datos": {
    "flujos": [
     -200,
     250
    ]
   }
  },
  "unidad": "%",
  "dec": 1,
  "valor": 24.99999999999999
 },
 {
  "id": "E05",
  "bloque": "E",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "tir",
  "tipo": "concepto",
  "enunciado": "Un proyecto tiene TIR = 18 % y la TMAR es 15 %. ¿Qué se decide?",
  "opciones": [
   {
    "t": "Se acepta: rinde más de lo mínimo exigido (y su VPN es positivo)"
   },
   {
    "t": "Es indiferente",
    "porque": "Sería indiferente si la TIR fuera igual a la TMAR."
   },
   {
    "t": "Se acepta solo si la TIR supera el 20 %",
    "porque": "La vara es la TMAR (15 %), no un número arbitrario."
   },
   {
    "t": "Se rechaza: 18 % es poco",
    "porque": "Lo que importa es comparar con la TMAR, y 18 % > 15 %."
   }
  ],
  "correcta": 0,
  "explicacion": "TIR > TMAR ⇔ VPN > 0 (en proyectos convencionales)."
 },
 {
  "id": "E06",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "bc",
  "tipo": "calculo",
  "enunciado": "VP de los beneficios (entradas): $300 M. VP de los costos (inversión + egresos): $250 M. ¿Cuál es la relación B/C?",
  "opciones": [
   {
    "t": "1,2"
   },
   {
    "t": "0,83",
    "porque": "Invertiste la división: es beneficios ÷ costos."
   },
   {
    "t": "50",
    "porque": "Eso es el VPN (una resta), no la relación."
   },
   {
    "t": "0,2",
    "porque": "Calculaste (300 − 250) ÷ 250: eso no es la B/C."
   }
  ],
  "correcta": 0,
  "explicacion": "300 ÷ 250 = 1,2 > 1 → se acepta.",
  "calc": {
   "formula": "bcDirecto",
   "datos": {
    "ben": 300,
    "cos": 250
   }
  },
  "unidad": "x",
  "dec": 2,
  "valor": 1.2
 },
 {
  "id": "E07",
  "bloque": "E",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "bc",
  "tipo": "concepto",
  "enunciado": "Un proyecto tiene B/C = 0,9. ¿Qué se puede decir de su VPN?",
  "opciones": [
   {
    "t": "Es positivo pero pequeño",
    "porque": "B/C < 1 significa beneficios < costos, es decir, VPN < 0."
   },
   {
    "t": "Es igual a 0,9",
    "porque": "La B/C es una razón; el VPN está en pesos."
   },
   {
    "t": "No se puede saber",
    "porque": "Con B/C < 1 se sabe que el VPN es negativo."
   },
   {
    "t": "Es negativo: los beneficios no alcanzan a cubrir los costos"
   }
  ],
  "correcta": 3,
  "explicacion": "B/C > 1 ⇔ VPN > 0; B/C < 1 ⇔ VPN < 0."
 },
 {
  "id": "E08",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "pr",
  "tipo": "calculo",
  "enunciado": "Inversión $90 M. Flujos de $40 M cada año durante 3 años. ¿Periodo de recuperación simple?",
  "opciones": [
   {
    "t": "2,25 años"
   },
   {
    "t": "2,5 años",
    "porque": "Faltan 10 de 40: eso es 0,25 de año, no 0,5."
   },
   {
    "t": "2 años",
    "porque": "Al final del año 2 llevas 80: faltan 10."
   },
   {
    "t": "3 años",
    "porque": "Se recupera durante el año 3, no al final."
   }
  ],
  "correcta": 0,
  "explicacion": "Al final del año 2 se recuperan 80. Faltan 10 de los 40 del año 3: 10 ÷ 40 = 0,25 → 2,25 años.",
  "calc": {
   "formula": "pr",
   "datos": {
    "flujos": [
     -90,
     40,
     40,
     40
    ]
   }
  },
  "unidad": "años",
  "dec": 2,
  "valor": 2.25
 },
 {
  "id": "E09",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 90,
  "leccion": "pr",
  "tipo": "calculo",
  "enunciado": "Inversión $150 M. Flujos: año 1 $110 M, año 2 $121 M. TMAR 10 %. ¿Periodo de recuperación DESCONTADO?",
  "opciones": [
   {
    "t": "1,33 años",
    "porque": "Ese es el periodo simple: no descontaste los flujos."
   },
   {
    "t": "1,5 años"
   },
   {
    "t": "1,41 años",
    "porque": "Usaste el faltante descontado (50) pero el flujo sin descontar (121)."
   },
   {
    "t": "2 años",
    "porque": "Se recupera antes de terminar el año 2."
   }
  ],
  "correcta": 1,
  "explicacion": "VP año 1 = 100, VP año 2 = 100. Tras el año 1 faltan 50: 50 ÷ 100 = 0,5 → 1,5 años.",
  "calc": {
   "formula": "prd",
   "datos": {
    "flujos": [
     -150,
     110,
     121
    ],
    "tasa": 0.1
   }
  },
  "unidad": "años",
  "dec": 2,
  "valor": 1.5000000000000002
 },
 {
  "id": "E10",
  "bloque": "E",
  "uso": [
   "desafio",
   "salida"
  ],
  "tiempo": 45,
  "leccion": "vpn",
  "tipo": "concepto",
  "enunciado": "Si el VPN de un proyecto es exactamente 0, significa que…",
  "opciones": [
   {
    "t": "No gana nada: mejor no invertir",
    "porque": "Ganar la TMAR sí es ganar: es justo lo mínimo que exigías."
   },
   {
    "t": "Su TIR es 0 %",
    "porque": "TIR = 0 % sería no ganar nada; VPN = 0 implica TIR = TMAR."
   },
   {
    "t": "Rinde exactamente la TMAR (su TIR es igual a la TMAR)"
   },
   {
    "t": "Pierde toda la inversión",
    "porque": "VPN = 0 significa que recupera la inversión más la TMAR."
   }
  ],
  "correcta": 2,
  "explicacion": "VPN = 0 → indiferente: el proyecto paga la inversión y exactamente la TMAR."
 },
 {
  "id": "E11",
  "bloque": "E",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "tir",
  "tipo": "concepto",
  "enunciado": "¿Qué es la TIR?",
  "opciones": [
   {
    "t": "La utilidad dividida entre las ventas",
    "porque": "Ese es el margen, un dato contable."
   },
   {
    "t": "La TMAR que exige el inversionista",
    "porque": "La TMAR se exige; la TIR la da el proyecto."
   },
   {
    "t": "El tiempo que tarda en recuperar la inversión",
    "porque": "Ese es el periodo de recuperación."
   },
   {
    "t": "La tasa de descuento que hace el VPN igual a cero"
   }
  ],
  "correcta": 3,
  "explicacion": "La TIR es la rentabilidad propia del proyecto. Se compara con la TMAR."
 },
 {
  "id": "F01",
  "bloque": "F",
  "uso": [
   "desafio",
   "salida"
  ],
  "tiempo": 60,
  "leccion": "criterios",
  "tipo": "concepto",
  "enunciado": "Proyectos EXCLUYENTES (solo puedes hacer uno) y hay plata para cualquiera. TMAR 12 %. A: VPN $50 M, TIR 20 %. B: VPN $30 M, TIR 35 %. ¿Cuál eliges?",
  "opciones": [
   {
    "t": "Los dos",
    "porque": "Son excluyentes: solo se puede uno."
   },
   {
    "t": "B, porque tiene mayor TIR",
    "porque": "La TIR es un %: no dice cuánto valor crea. B es más pequeño."
   },
   {
    "t": "Ninguno, se contradicen",
    "porque": "Que se contradigan no impide decidir: manda el VPN."
   },
   {
    "t": "A, porque crea más valor (mayor VPN)"
   }
  ],
  "correcta": 3,
  "explicacion": "Ante un conflicto entre proyectos excluyentes, el VPN es el criterio que manda."
 },
 {
  "id": "F02",
  "bloque": "F",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "criterios",
  "tipo": "concepto",
  "enunciado": "En un proyecto convencional (inversión al inicio y luego flujos positivos), si VPN > 0, entonces necesariamente…",
  "opciones": [
   {
    "t": "B/C < 1",
    "porque": "B/C < 1 equivale a VPN < 0."
   },
   {
    "t": "TIR < TMAR",
    "porque": "Si la TIR fuera menor que la TMAR, el VPN sería negativo."
   },
   {
    "t": "TIR > TMAR y B/C > 1"
   },
   {
    "t": "PR menor a un año",
    "porque": "El PR no está atado al signo del VPN."
   }
  ],
  "correcta": 2,
  "explicacion": "En proyectos convencionales, VPN, TIR y B/C siempre coinciden en aceptar o rechazar un proyecto solo."
 },
 {
  "id": "F03",
  "bloque": "F",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "pr",
  "tipo": "concepto",
  "enunciado": "Un proyecto recupera la inversión en 1 año (PR simple), pero su VPN es −$5 M. ¿Qué haces?",
  "opciones": [
   {
    "t": "Lo acepto: recupera rapidísimo",
    "porque": "El PR mide liquidez, no rentabilidad. VPN < 0 destruye valor."
   },
   {
    "t": "Me es indiferente",
    "porque": "Sería indiferente con VPN = 0, no con VPN negativo."
   },
   {
    "t": "Lo rechazo: recuperar rápido no significa crear valor"
   },
   {
    "t": "Lo acepto si la TIR es positiva",
    "porque": "Una TIR positiva pero menor que la TMAR da VPN < 0."
   }
  ],
  "correcta": 2,
  "explicacion": "El PR responde \"¿en cuánto tiempo vuelve la plata?\", no \"¿conviene?\"."
 },
 {
  "id": "F04",
  "bloque": "F",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "restriccion",
  "tipo": "concepto",
  "enunciado": "Presupuesto $100 M. Proyectos INDEPENDIENTES: A (inversión $100 M, VPN $30 M), B (inversión $50 M, VPN $20 M), C (inversión $50 M, VPN $18 M). ¿Qué haces?",
  "opciones": [
   {
    "t": "B y C: VPN total $38 M"
   },
   {
    "t": "Solo A, el de mayor VPN",
    "porque": "A usa todo el presupuesto y suma 30; B + C cabe y suma 38."
   },
   {
    "t": "A y B",
    "porque": "Cuestan 150: no alcanza el presupuesto."
   },
   {
    "t": "Solo B, el de mejor VPN por peso invertido",
    "porque": "Sobran 50 que pueden ir a C y sumar 18 más."
   }
  ],
  "correcta": 0,
  "explicacion": "Con restricción de capital se maximiza el VPN TOTAL de la combinación que cabe en el presupuesto.",
  "chequeos": [
   {
    "formula": "suma",
    "datos": {
     "valores": [
      20,
      18
     ]
    },
    "esperado": 38
   },
   {
    "formula": "suma",
    "datos": {
     "valores": [
      50,
      50
     ]
    },
    "esperado": 100
   }
  ]
 },
 {
  "id": "F05",
  "bloque": "F",
  "uso": [
   "desafio"
  ],
  "tiempo": 60,
  "leccion": "criterios",
  "tipo": "concepto",
  "enunciado": "Un proyecto tiene flujos −100, +230, −132 (el signo cambia dos veces). Tiene dos TIR: 10 % y 20 %. ¿Qué indicador usas para decidir?",
  "opciones": [
   {
    "t": "El periodo de recuperación",
    "porque": "El PR no mide rentabilidad."
   },
   {
    "t": "La TIR mayor (20 %)",
    "porque": "Ninguna de las dos TIR es \"la\" rentabilidad del proyecto."
   },
   {
    "t": "El promedio de las dos TIR",
    "porque": "Promediar TIR no tiene sentido financiero."
   },
   {
    "t": "El VPN a la TMAR: con varias TIR, la TIR no sirve para decidir"
   }
  ],
  "correcta": 3,
  "explicacion": "Con flujos no convencionales pueden aparecer varias TIR. El VPN siempre da una sola respuesta.",
  "chequeos": [
   {
    "formula": "vpn",
    "datos": {
     "flujos": [
      -100,
      230,
      -132
     ],
     "tasa": 0.1
    },
    "esperado": 0
   },
   {
    "formula": "vpn",
    "datos": {
     "flujos": [
      -100,
      230,
      -132
     ],
     "tasa": 0.2
    },
    "esperado": 0
   }
  ]
 },
 {
  "id": "F06",
  "bloque": "F",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "criterios",
  "tipo": "concepto",
  "enunciado": "Entre dos proyectos excluyentes, A tiene mayor VPN y B mayor TIR, y ambos cálculos están bien. ¿Por qué puede pasar?",
  "opciones": [
   {
    "t": "Porque alguno está mal calculado",
    "porque": "Puede pasar con cálculos correctos."
   },
   {
    "t": "Porque la TMAR es negativa",
    "porque": "No tiene que ver con el signo de la TMAR."
   },
   {
    "t": "Por diferencias de tamaño de la inversión o de cuándo llegan los flujos"
   },
   {
    "t": "Nunca pasa",
    "porque": "Pasa seguido con proyectos de distinta escala."
   }
  ],
  "correcta": 2,
  "explicacion": "Un proyecto pequeño puede tener una TIR altísima y crear poco valor en pesos. Por eso manda el VPN."
 },
 {
  "id": "F07",
  "bloque": "F",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "criterios",
  "tipo": "concepto",
  "enunciado": "TMAR 12 %. Proyecto: VPN −$5 M, TIR 10 %, B/C 0,95. ¿Decisión?",
  "opciones": [
   {
    "t": "Indiferente",
    "porque": "Sería indiferente con VPN = 0."
   },
   {
    "t": "Aceptar: la B/C es casi 1",
    "porque": "\"Casi 1\" sigue siendo menor que 1: destruye valor."
   },
   {
    "t": "Aceptar: la TIR es positiva",
    "porque": "La TIR se compara con la TMAR (12 %), no con cero."
   },
   {
    "t": "Rechazar: los tres indicadores coinciden"
   }
  ],
  "correcta": 3,
  "explicacion": "VPN < 0, TIR < TMAR y B/C < 1 dicen lo mismo: rechazar."
 },
 {
  "id": "F08",
  "bloque": "F",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "restriccion",
  "tipo": "calculo",
  "enunciado": "Presupuesto $150 M, proyectos INDEPENDIENTES. A: inversión $100 M, VPN $40 M. B: inversión $50 M, VPN $25 M. C: inversión $100 M, VPN $45 M. ¿Cuál es el MAYOR VPN total que cabe en el presupuesto?",
  "opciones": [
   {
    "t": "$45 M",
    "porque": "Escogiste solo el de mayor VPN individual (C) y dejaste $50 M sin usar."
   },
   {
    "t": "$70 M"
   },
   {
    "t": "$110 M",
    "porque": "Sumaste los tres: cuestan $250 M y no caben."
   },
   {
    "t": "$65 M",
    "porque": "A + B cabe, pero C + B cabe y suma más."
   }
  ],
  "correcta": 1,
  "explicacion": "Combinaciones que caben en $150 M: A + B = 65; C + B = 70. Lo mejor es C + B = $70 M.",
  "calc": {
   "formula": "suma",
   "datos": {
    "valores": [
     45,
     25
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 70
 },
 {
  "id": "F09",
  "bloque": "F",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 90,
  "leccion": "criterios",
  "tipo": "calculo",
  "enunciado": "Proyectos EXCLUYENTES, TMAR 10 %. A: inviertes $100 M y recibes $132 M en un año (TIR 32 %). B: inviertes $200 M y recibes $253 M en un año (TIR 26,5 %). ¿Cuál es el VPN del proyecto que debes escoger?",
  "opciones": [
   {
    "t": "$30 M"
   },
   {
    "t": "$53 M",
    "porque": "No descontaste el flujo de B."
   },
   {
    "t": "$230 M",
    "porque": "Olvidaste restar la inversión."
   },
   {
    "t": "$20 M",
    "porque": "Ese es el VPN de A: lo escogiste por la TIR, pero entre excluyentes manda el VPN."
   }
  ],
  "correcta": 0,
  "explicacion": "VPN A = 132 ÷ 1,1 − 100 = 20. VPN B = 253 ÷ 1,1 − 200 = 30. Se escoge B: $30 M, aunque su TIR sea menor.",
  "calc": {
   "formula": "vpn",
   "datos": {
    "flujos": [
     -200,
     253
    ],
    "tasa": 0.1
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 29.99999999999997,
  "chequeos": [
   {
    "formula": "tir",
    "datos": {
     "flujos": [
      -100,
      132
     ]
    },
    "esperado": 32
   },
   {
    "formula": "tir",
    "datos": {
     "flujos": [
      -200,
      253
     ]
    },
    "esperado": 26.5
   },
   {
    "formula": "vpn",
    "datos": {
     "flujos": [
      -100,
      132
     ],
     "tasa": 0.1
    },
    "esperado": 20
   }
  ]
 },
 {
  "id": "G01",
  "bloque": "G",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "equilibrio",
  "tipo": "calculo",
  "enunciado": "Costos fijos: $20.000.000 al año. Cada caja de café se vende a $50.000 y cuesta $30.000 producirla. ¿Cuántas cajas hay que vender para el punto de equilibrio?",
  "opciones": [
   {
    "t": "667 unidades",
    "porque": "Dividiste entre el costo variable; se divide entre el margen."
   },
   {
    "t": "1.000 unidades"
   },
   {
    "t": "250 unidades",
    "porque": "Sumaste precio y costo variable; hay que restarlos."
   },
   {
    "t": "400 unidades",
    "porque": "Dividiste entre el precio; se divide entre el margen (50.000 − 30.000)."
   }
  ],
  "correcta": 1,
  "explicacion": "Margen por caja = 20.000. 20.000.000 ÷ 20.000 = 1.000 cajas.",
  "calc": {
   "formula": "peUnidades",
   "datos": {
    "cf": 20000000,
    "precio": 50000,
    "cv": 30000
   }
  },
  "unidad": "u",
  "dec": 0,
  "valor": 1000
 },
 {
  "id": "G02",
  "bloque": "G",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "equilibrio",
  "tipo": "calculo",
  "enunciado": "Costos fijos $30 M. El margen de contribución es el 40 % de las ventas. ¿Cuáles son las ventas de equilibrio?",
  "opciones": [
   {
    "t": "$12 M",
    "porque": "Multiplicaste 30 × 40 %; hay que dividir."
   },
   {
    "t": "$42 M",
    "porque": "Le sumaste el 40 % a los costos fijos."
   },
   {
    "t": "$50 M",
    "porque": "Dividiste entre 60 % (el costo variable), no entre el margen."
   },
   {
    "t": "$75 M"
   }
  ],
  "correcta": 3,
  "explicacion": "30 ÷ 0,40 = $75 M en ventas.",
  "calc": {
   "formula": "pePesos",
   "datos": {
    "cf": 30,
    "mc": 0.4
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 75
 },
 {
  "id": "G03",
  "bloque": "G",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "sensibilidad",
  "tipo": "concepto",
  "enunciado": "¿Qué es el análisis de sensibilidad?",
  "opciones": [
   {
    "t": "Pedir otra cotización de la maquinaria",
    "porque": "Eso mejora un insumo, pero no es el análisis."
   },
   {
    "t": "Cambiar todas las variables al tiempo",
    "porque": "Eso es análisis de escenarios."
   },
   {
    "t": "Cambiar UNA variable a la vez (precio, ventas, costos) y ver cuánto cambia el VPN"
   },
   {
    "t": "Calcular la TIR dos veces para confirmarla",
    "porque": "Eso es verificar un cálculo, no analizar riesgo."
   }
  ],
  "correcta": 2,
  "explicacion": "La sensibilidad muestra de qué variable depende más el resultado."
 },
 {
  "id": "G04",
  "bloque": "G",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "sensibilidad",
  "tipo": "calculo",
  "enunciado": "VPN base: $60 M. Por cada 1 % que cae el precio, el VPN baja $5 M. ¿Cuánto puede caer el precio antes de que el VPN llegue a 0?",
  "opciones": [
   {
    "t": "300 %",
    "porque": "Multiplicaste 60 × 5; hay que dividir."
   },
   {
    "t": "60 %",
    "porque": "Ese es el VPN, no la caída en %."
   },
   {
    "t": "5 %",
    "porque": "Ese es el impacto de cada punto, no la caída máxima."
   },
   {
    "t": "12 %"
   }
  ],
  "correcta": 3,
  "explicacion": "60 ÷ 5 = 12 %. Con una caída mayor del 12 %, el VPN se vuelve negativo.",
  "calc": {
   "formula": "caidaCritica",
   "datos": {
    "vpnBase": 60,
    "porPunto": 5
   }
  },
  "unidad": "%",
  "dec": 1,
  "valor": 12
 },
 {
  "id": "G05",
  "bloque": "G",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 90,
  "leccion": "escenarios",
  "tipo": "calculo",
  "enunciado": "Escenarios: pesimista VPN −$20 M (probabilidad 20 %), probable $30 M (50 %), optimista $70 M (30 %). ¿Cuál es el VPN esperado?",
  "opciones": [
   {
    "t": "$80 M",
    "porque": "Sumaste los tres VPN."
   },
   {
    "t": "$32 M"
   },
   {
    "t": "$26,7 M",
    "porque": "Promediaste sin ponderar por la probabilidad."
   },
   {
    "t": "$21 M",
    "porque": "Solo ponderaste el escenario optimista."
   }
  ],
  "correcta": 1,
  "explicacion": "−20 × 0,2 + 30 × 0,5 + 70 × 0,3 = −4 + 15 + 21 = $32 M.",
  "calc": {
   "formula": "esperado",
   "datos": {
    "valores": [
     -20,
     30,
     70
    ],
    "probs": [
     0.2,
     0.5,
     0.3
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 32
 },
 {
  "id": "G06",
  "bloque": "G",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "sensibilidad",
  "tipo": "concepto",
  "enunciado": "Si cada variable sube 10 % (una a la vez), el VPN cambia así: precio +$50 M, costo de materia prima −$20 M, inversión −$10 M. ¿Cuál es la variable más sensible?",
  "opciones": [
   {
    "t": "La materia prima",
    "porque": "Mueve 20, menos que el precio (50)."
   },
   {
    "t": "La inversión",
    "porque": "Es la que MENOS mueve el VPN (10)."
   },
   {
    "t": "Todas por igual",
    "porque": "Con el mismo 10 % de cambio, el impacto es distinto en cada una."
   },
   {
    "t": "El precio"
   }
  ],
  "correcta": 3,
  "explicacion": "El precio mueve 50, el mayor cambio: hay que estimarlo con mucho cuidado."
 },
 {
  "id": "G07",
  "bloque": "G",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "sensibilidad",
  "tipo": "concepto",
  "enunciado": "El VPN dio $40 M. ¿Para qué hacer análisis de riesgo?",
  "opciones": [
   {
    "t": "Para subir el VPN",
    "porque": "El análisis de riesgo no cambia el VPN; muestra qué tan frágil es."
   },
   {
    "t": "Porque se basa en supuestos: si cambian el precio, las ventas o los costos, el VPN podría volverse negativo"
   },
   {
    "t": "No hace falta: un VPN positivo es una garantía",
    "porque": "El VPN es una estimación: depende de supuestos que pueden fallar."
   },
   {
    "t": "Solo porque lo exige el banco",
    "porque": "Lo necesita cualquiera que tome la decisión."
   }
  ],
  "correcta": 1,
  "explicacion": "Un VPN positivo con supuestos frágiles puede ser una mala apuesta."
 },
 {
  "id": "G08",
  "bloque": "G",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "escenarios",
  "tipo": "concepto",
  "enunciado": "¿Cuál es la diferencia entre análisis de sensibilidad y análisis de escenarios?",
  "opciones": [
   {
    "t": "La sensibilidad mueve una variable a la vez; los escenarios mueven varias juntas"
   },
   {
    "t": "La sensibilidad mueve varias y los escenarios una",
    "porque": "Es al revés."
   },
   {
    "t": "Son lo mismo",
    "porque": "Uno aísla una variable y el otro combina varias."
   },
   {
    "t": "Los escenarios solo se usan para calcular la TIR",
    "porque": "Los escenarios sirven para cualquier indicador."
   }
  ],
  "correcta": 0,
  "explicacion": "Pesimista, probable y optimista son combinaciones de varias variables a la vez."
 }
];
export const ESTRELLA = [
 {
  "id": "S01",
  "bloque": "E",
  "uso": [
   "estrella"
  ],
  "tiempo": 30,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Sello VPN+ · Inviertes $100 M y recibes $120 M en el año 1. TMAR 10 %. ¿Cómo es el VPN?",
  "opciones": [
   {
    "t": "VPN > 0: ¡crea valor!"
   },
   {
    "t": "VPN = 0: rinde justo la TMAR"
   },
   {
    "t": "VPN < 0: destruye valor"
   }
  ],
  "correcta": 0,
  "flujos": [
   -100,
   120
  ],
  "tasa": 0.1,
  "valor": 9.09090909090908,
  "explicacion": "VP de lo que recibes = 109,09; VPN = 9,09."
 },
 {
  "id": "S02",
  "bloque": "E",
  "uso": [
   "estrella"
  ],
  "tiempo": 30,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Sello VPN+ · Inviertes $100 M y recibes $115 M en el año 1. TMAR 20 %. ¿Cómo es el VPN?",
  "opciones": [
   {
    "t": "VPN > 0: ¡crea valor!"
   },
   {
    "t": "VPN = 0: rinde justo la TMAR"
   },
   {
    "t": "VPN < 0: destruye valor"
   }
  ],
  "correcta": 2,
  "flujos": [
   -100,
   115
  ],
  "tasa": 0.2,
  "valor": -4.166666666666657,
  "explicacion": "VP de lo que recibes = 95,83; VPN = −4,17."
 },
 {
  "id": "S03",
  "bloque": "E",
  "uso": [
   "estrella"
  ],
  "tiempo": 30,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Sello VPN+ · Inviertes $100 M y recibes $121 M en el año 2. TMAR 10 %. ¿Cómo es el VPN?",
  "opciones": [
   {
    "t": "VPN > 0: ¡crea valor!"
   },
   {
    "t": "VPN = 0: rinde justo la TMAR"
   },
   {
    "t": "VPN < 0: destruye valor"
   }
  ],
  "correcta": 1,
  "flujos": [
   -100,
   0,
   121
  ],
  "tasa": 0.1,
  "valor": -1.4210854715202004e-14,
  "explicacion": "VP de lo que recibes = 100; VPN = 0."
 },
 {
  "id": "S04",
  "bloque": "E",
  "uso": [
   "estrella"
  ],
  "tiempo": 30,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Sello VPN+ · Inviertes $50 M y recibes $30 M en el año 1 y $30 M en el año 2. TMAR 10 %. ¿Cómo es el VPN?",
  "opciones": [
   {
    "t": "VPN > 0: ¡crea valor!"
   },
   {
    "t": "VPN = 0: rinde justo la TMAR"
   },
   {
    "t": "VPN < 0: destruye valor"
   }
  ],
  "correcta": 0,
  "flujos": [
   -50,
   30,
   30
  ],
  "tasa": 0.1,
  "valor": 2.0661157024793333,
  "explicacion": "VP de lo que recibes = 52,07; VPN = 2,07."
 },
 {
  "id": "S05",
  "bloque": "E",
  "uso": [
   "estrella"
  ],
  "tiempo": 30,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Sello VPN+ · Inviertes $200 M y recibes $110 M en el año 1 y $110 M en el año 2. TMAR 10 %. ¿Cómo es el VPN?",
  "opciones": [
   {
    "t": "VPN > 0: ¡crea valor!"
   },
   {
    "t": "VPN = 0: rinde justo la TMAR"
   },
   {
    "t": "VPN < 0: destruye valor"
   }
  ],
  "correcta": 2,
  "flujos": [
   -200,
   110,
   110
  ],
  "tasa": 0.1,
  "valor": -9.090909090909122,
  "explicacion": "VP de lo que recibes = 190,91; VPN = −9,09."
 },
 {
  "id": "S06",
  "bloque": "E",
  "uso": [
   "estrella"
  ],
  "tiempo": 30,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Sello VPN+ · Inviertes $100 M y recibes $125 M en el año 1. TMAR 25 %. ¿Cómo es el VPN?",
  "opciones": [
   {
    "t": "VPN > 0: ¡crea valor!"
   },
   {
    "t": "VPN = 0: rinde justo la TMAR"
   },
   {
    "t": "VPN < 0: destruye valor"
   }
  ],
  "correcta": 1,
  "flujos": [
   -100,
   125
  ],
  "tasa": 0.25,
  "valor": 0,
  "explicacion": "VP de lo que recibes = 100; VPN = 0."
 }
];
export const MG_ENTRA = [
 {
  "t": "Compra de la maquinaria",
  "entra": true,
  "porque": "Inversión del año 0."
 },
 {
  "t": "La depreciación como salida de dinero",
  "entra": false,
  "porque": "No sale plata: solo reduce impuestos."
 },
 {
  "t": "Estudio de mercado que ya se pagó",
  "entra": false,
  "porque": "Costo hundido."
 },
 {
  "t": "Capital de trabajo",
  "entra": true,
  "porque": "Inversión que se recupera al final."
 },
 {
  "t": "Valor de salvamento al final",
  "entra": true,
  "porque": "Entrada del último año."
 },
 {
  "t": "Impuesto de renta",
  "entra": true,
  "porque": "Es una salida real de dinero."
 },
 {
  "t": "Arriendo que dejas de recibir por usar tu lote",
  "entra": true,
  "porque": "Costo de oportunidad."
 },
 {
  "t": "Intereses del préstamo (en el flujo del proyecto)",
  "entra": false,
  "porque": "El flujo del proyecto no incluye la financiación."
 },
 {
  "t": "Ventas del año",
  "entra": true,
  "porque": "Ingreso operativo."
 },
 {
  "t": "Sueldo del administrador",
  "entra": true,
  "porque": "Gasto operativo."
 }
];
export const MG_CARRERA = [
 {
  "t": "VPN = +$20 M",
  "a": "Aceptar",
  "b": "Rechazar",
  "ok": 0
 },
 {
  "t": "TIR 12 %, TMAR 15 %",
  "a": "Aceptar",
  "b": "Rechazar",
  "ok": 1
 },
 {
  "t": "B/C = 1,3",
  "a": "Aceptar",
  "b": "Rechazar",
  "ok": 0
 },
 {
  "t": "VP de $110 M dentro de 1 año (TMAR 10 %)",
  "a": "$100 M",
  "b": "$110 M",
  "ok": 0,
  "chequeo": {
   "formula": "vp",
   "datos": {
    "monto": 110,
    "tasa": 0.1,
    "n": 1
   },
   "esperado": 100
  }
 },
 {
  "t": "¿El PR descontado es mayor o igual que el simple?",
  "a": "Sí",
  "b": "No",
  "ok": 0
 },
 {
  "t": "VPN = 0 implica…",
  "a": "TIR = TMAR",
  "b": "TIR = 0 %",
  "ok": 0
 },
 {
  "t": "Proyectos excluyentes en conflicto: manda…",
  "a": "La TIR",
  "b": "El VPN",
  "ok": 1
 },
 {
  "t": "B/C = 0,8",
  "a": "VPN > 0",
  "b": "VPN < 0",
  "ok": 1
 },
 {
  "t": "VF de $100 M en 1 año al 20 %",
  "a": "$120 M",
  "b": "$83 M",
  "ok": 0,
  "chequeo": {
   "formula": "vf",
   "datos": {
    "monto": 100,
    "tasa": 0.2,
    "n": 1
   },
   "esperado": 120
  }
 },
 {
  "t": "El PR mide…",
  "a": "Rentabilidad",
  "b": "Liquidez",
  "ok": 1
 }
];
export const MG_TERMOMETRO = [
 {
  "id": "T1",
  "enunciado": "Con un precio de $10.000 el VPN es $120 M. Por cada $1.000 que baja el precio, el VPN baja $40 M. ¿Con qué precio el VPN llega a 0?",
  "base": 10000,
  "vpnBase": 120,
  "porPaso": 40,
  "paso": -1000,
  "min": 5000,
  "max": 10000,
  "salto": 250,
  "unidad": "$",
  "explicacion": "120 ÷ 40 = 3 bajadas de $1.000 → precio crítico $7.000.",
  "respuesta": 7000
 },
 {
  "id": "T2",
  "enunciado": "Vendiendo 1.000 unidades el VPN es $90 M. Por cada 100 unidades menos, el VPN baja $15 M. ¿Con cuántas unidades el VPN llega a 0?",
  "base": 1000,
  "vpnBase": 90,
  "porPaso": 15,
  "paso": -100,
  "min": 0,
  "max": 1000,
  "salto": 50,
  "unidad": "u",
  "explicacion": "90 ÷ 15 = 6 bajadas de 100 → 400 unidades.",
  "respuesta": 400
 },
 {
  "id": "T3",
  "enunciado": "Con una TMAR del 10 % el VPN es $50 M. Por cada punto que sube la TMAR, el VPN baja unos $10 M. ¿Con qué TMAR el VPN llega a 0 (≈ la TIR)?",
  "base": 10,
  "vpnBase": 50,
  "porPaso": 10,
  "paso": 1,
  "min": 10,
  "max": 30,
  "salto": 1,
  "unidad": "%",
  "explicacion": "50 ÷ 10 = 5 puntos → 15 %, que es aproximadamente la TIR (aproximación lineal).",
  "respuesta": 15
 }
];
export const MG_ORDENA = [
 {
  "id": "O1",
  "titulo": "Ordena el flujo de caja operativo",
  "pasos": [
   "Ingresos",
   "− Costos y gastos",
   "− Depreciación",
   "= Utilidad antes de impuestos",
   "− Impuestos",
   "= Utilidad neta",
   "+ Depreciación",
   "= Flujo de caja operativo"
  ]
 },
 {
  "id": "O2",
  "titulo": "Ordena los pasos de la evaluación financiera",
  "pasos": [
   "Definir horizonte e insumos",
   "Armar el flujo de caja",
   "Descontar a la TMAR",
   "Calcular VPN, TIR, B/C y PR",
   "Analizar el riesgo",
   "Decidir"
  ]
 }
];
export const JEFE = {
 "tmar": 0.1,
 "proyectos": [
  {
   "id": "P1",
   "nombre": "Planta de café liofilizado",
   "flujos": [
    -400,
    200,
    200,
    200
   ],
   "vpn": 97.3703981968444,
   "tir": 23.375192852825865,
   "bc": 1.2434259954921112,
   "pr": 2,
   "prd": 2.3520000000000003
  },
  {
   "id": "P2",
   "nombre": "App de domicilios de arepas",
   "flujos": [
    -100,
    80,
    80
   ],
   "vpn": 38.842975206611555,
   "tir": 37.97958971132712,
   "bc": 1.3884297520661155,
   "pr": 1.25,
   "prd": 1.4125
  },
  {
   "id": "P3",
   "nombre": "Puesto de raspados en la feria",
   "flujos": [
    -100,
    105
   ],
   "vpn": -4.545454545454547,
   "tir": 4.999999999999993,
   "bc": 0.9545454545454546,
   "pr": 0.9523809523809523,
   "prd": null
  }
 ],
 "fase1": {
  "pregunta": "La empresa tiene $400 M disponibles y solo puede hacer UNO. ¿Cuál aprueba la Junta?",
  "correcto": "P1",
  "justificaciones": [
   {
    "t": "Tiene el mayor VPN: es el que más valor crea en pesos de hoy",
    "ok": true
   },
   {
    "t": "Tiene la mayor TIR",
    "porque": "La mayor TIR es de P2, y la TIR no ve el tamaño del proyecto."
   },
   {
    "t": "Recupera la inversión más rápido",
    "porque": "El más rápido es P3, y tiene VPN negativo."
   }
  ]
 },
 "fase2": {
  "pregunta": "¡Giro! El presupuesto se recorta a $100 M. ¿Cuál aprueba ahora la Junta?",
  "correcto": "P2",
  "justificaciones": [
   {
    "t": "Es el único que cabe en el presupuesto con VPN > 0",
    "ok": true
   },
   {
    "t": "P3, porque cabe y recupera en menos de un año",
    "porque": "P3 cabe, pero su VPN es negativo: destruye valor."
   },
   {
    "t": "Ninguno, porque P1 ya no cabe",
    "porque": "P2 cabe y crea valor."
   }
  ]
 },
 "giroAlterno": "Plan B del presentador: \"¡La TMAR sube al 25 %!\" → P1 (TIR ≈ 23 %) queda con VPN negativo y P2 (TIR ≈ 38 %) sigue siendo positivo → P2."
};
