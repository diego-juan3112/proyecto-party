// ARCHIVO GENERADO por tools/generar-banco.mjs — no editar a mano.
export const LECCIONES = {
 "para_que": "Evaluar un proyecto es responder una sola pregunta: ¿vale la pena meterle plata? Para saberlo se compara lo que cuesta montarlo con lo que va a devolver. Y como un peso hoy vale más que un peso dentro de un año, todo se compara en pesos de hoy.",
 "insumos": "Para evaluar un negocio se necesitan unas cifras básicas: cuánto cuesta montarlo, cuánto va a vender, cuánto gasta cada año, cuánto paga de impuestos y cuántos años se van a mirar. Si una de esas cifras está mal, la decisión también.",
 "depreciacion": "Las máquinas se desgastan. Ese desgaste (depreciación) reparte el costo de la máquina entre los años que dura: costo ÷ años. No es plata que sale del bolsillo, porque la máquina se pagó al comprarla. Solo sirve para pagar un poco menos de impuesto.",
 "impuestos": "El impuesto no se cobra sobre todo lo que vendes, sino sobre lo que ganas: ventas menos gastos. Si vendes 100 y gastas 60, ganas 40, y el impuesto se calcula sobre esos 40.",
 "capital_trabajo": "Para abrir el primer día hay que tener mercancía, materia prima y algo de efectivo en caja. Esa plata para arrancar (capital de trabajo) se pone al inicio y se recupera al final, cuando el negocio termina.",
 "salvamento": "Cuando el proyecto termina, las máquinas usadas todavía se pueden vender. Esa plata (valor de salvamento) entra en el último año.",
 "flujo_estructura": "El flujo de caja es la plata que de verdad entra y sale del negocio cada año. Entran las ventas. Salen los gastos, los impuestos y lo que se invierte. Lo que queda es lo que el negocio deja en el bolsillo.",
 "flujo_relevante": "Pregunta clave para cada cifra: ¿esto cambia si hago el proyecto? Lo que ya se gastó y no se recupera no cuenta. Lo que dejas de ganar por usar algo tuyo, como un local que podrías arrendar, sí cuenta.",
 "valor_tiempo": "Un peso hoy vale más que un peso dentro de un año, porque hoy lo puedes poner a ganar. Si una inversión segura paga 10 % al año, $100 de hoy serán $110 en un año. Al revés: $110 dentro de un año valen $100 hoy (110 ÷ 1,1).",
 "tmar": "Antes de invertir, cada quien decide lo mínimo que quiere ganar al año, por ejemplo lo que le pagaría una inversión segura. Ese mínimo se llama TMAR. Si un negocio no lo alcanza, no vale la pena.",
 "vpn": "Para saber si un negocio conviene: pasa a pesos de hoy lo que va a devolver y réstale lo que cuesta. Si queda positivo, gana más que lo mínimo que pedías: conviene. Si queda negativo, no conviene. Ese resultado se llama VPN.",
 "tir": "La rentabilidad de un negocio (TIR) es cuánto gana en % por año. Se compara con lo mínimo que quieres ganar: si el negocio rinde más, conviene; si rinde menos, no.",
 "bc": "La relación beneficio/costo (B/C) dice cuántos pesos devuelve el negocio por cada peso que cuesta, todo en pesos de hoy. Más de 1: devuelve más de lo que cuesta. Menos de 1: pierde.",
 "pr": "El periodo de recuperación es cuánto tarda el negocio en devolver la plata invertida. Dice qué tan rápido vuelve la plata, pero no si el negocio gana mucho o poco.",
 "criterios": "Si solo puedes escoger un negocio, escoge el que deja más plata en pesos de hoy. Un porcentaje alto sobre poca plata puede dejar menos que un porcentaje menor sobre mucha plata.",
 "restriccion": "Si tienes poco presupuesto y varios negocios que se pueden combinar, busca la combinación que quepa y sume más ganancia en total. A veces dos negocios pequeños dejan más que uno grande.",
 "sensibilidad": "Las cifras de un proyecto son estimaciones. Por eso se prueba qué pasa si algo sale distinto: si el precio baja, si se vende menos, si los costos suben. Mover una sola cifra a la vez se llama análisis de sensibilidad.",
 "escenarios": "Otra forma de medir el riesgo es imaginar tres futuros: uno malo, uno normal y uno bueno, cambiando varias cifras a la vez. Eso es el análisis de escenarios.",
 "equilibrio": "El punto de equilibrio es cuánto hay que vender para no ganar ni perder. Cada unidad vendida deja algo (precio menos lo que cuesta hacerla). Hay que vender las suficientes para pagar los gastos fijos."
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
  "enunciado": "Un amigo quiere abrir una tienda de café y te pide ayuda con la \"evaluación financiera\". ¿Qué pregunta responde esa evaluación?",
  "opciones": [
   {
    "t": "Qué nombre ponerle a la tienda",
    "porque": "Eso es mercadeo, no evaluación financiera."
   },
   {
    "t": "De qué banco sacar el préstamo",
    "porque": "Eso es cómo conseguir la plata. Primero hay que saber si el negocio vale la pena."
   },
   {
    "t": "Cuántos empleados contratar",
    "porque": "Ese es un dato de la operación; la evaluación lo usa para decidir si conviene invertir."
   },
   {
    "t": "Si vale la pena meterle plata al negocio"
   }
  ],
  "correcta": 3,
  "explicacion": "La evaluación financiera existe para decidir si se invierte. Todo lo demás del juego sirve para tomar esa decisión con buenos argumentos."
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
  "enunciado": "La evaluación financiera mira el proyecto con los ojos de una persona. ¿De quién?",
  "opciones": [
   {
    "t": "Del gobierno",
    "porque": "El gobierno cobra impuestos, pero no invierte en el proyecto."
   },
   {
    "t": "De quien pone la plata y quiere saber si le conviene"
   },
   {
    "t": "De la competencia",
    "porque": "A la competencia no le interesa si tu negocio conviene."
   },
   {
    "t": "Del cliente que compra el producto",
    "porque": "El cliente no pone la plata del proyecto."
   }
  ],
  "correcta": 1,
  "explicacion": "Se evalúa desde quien invierte: ¿mi plata va a ganar al menos lo que espero?"
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
  "enunciado": "Para decidir si un negocio conviene, ¿qué se compara?",
  "opciones": [
   {
    "t": "Lo que cuesta montarlo contra lo que va a devolver, todo en pesos de hoy"
   },
   {
    "t": "Lo que venden los competidores",
    "porque": "Eso ayuda a estimar las ventas, pero no decide si conviene invertir."
   },
   {
    "t": "Solo las ventas del primer mes",
    "porque": "Un mes no muestra toda la vida del negocio."
   },
   {
    "t": "Cuánto cuesta la decoración",
    "porque": "Es solo uno de los costos."
   }
  ],
  "correcta": 0,
  "explicacion": "Lo que entra contra lo que sale, y todo llevado a la misma fecha: hoy."
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
  "enunciado": "Una tostadora cuesta $50 M y dura 5 años. Su desgaste se reparte igual cada año: costo ÷ años. ¿Cuánto se desgasta por año?",
  "opciones": [
   {
    "t": "$250 M",
    "porque": "Multiplicaste por los años; hay que dividir."
   },
   {
    "t": "$10 M"
   },
   {
    "t": "$50 M",
    "porque": "Ese es el costo total, no lo de un año."
   },
   {
    "t": "$12,5 M",
    "porque": "Dividiste entre 4; la tostadora dura 5 años."
   }
  ],
  "correcta": 1,
  "explicacion": "50 ÷ 5 = $10 M por año.",
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
  "tiempo": 60,
  "leccion": "depreciacion",
  "tipo": "calculo",
  "enunciado": "Un camión cuesta $90 M, dura 4 años y al final se vende usado en $10 M. El desgaste por año es (costo − lo que se vende al final) ÷ años. ¿Cuánto da?",
  "opciones": [
   {
    "t": "$20 M"
   },
   {
    "t": "$80 M",
    "porque": "Ese es el total; falta dividir entre los 4 años."
   },
   {
    "t": "$22,5 M",
    "porque": "No le restaste los $10 M de la venta final."
   },
   {
    "t": "$25 M",
    "porque": "Sumaste los $10 M en vez de restarlos."
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
  "tiempo": 60,
  "leccion": "impuestos",
  "tipo": "calculo",
  "enunciado": "En un año la cafetería vendió $100 M y gastó $60 M. El impuesto es el 30 % de lo que ganó (ventas − gastos). ¿Cuánto paga de impuesto?",
  "opciones": [
   {
    "t": "$30 M",
    "porque": "Calculaste el 30 % de las ventas; es sobre lo que ganó (40)."
   },
   {
    "t": "$12 M"
   },
   {
    "t": "$28 M",
    "porque": "Eso es lo que queda después de pagar el impuesto (40 − 12)."
   },
   {
    "t": "$18 M",
    "porque": "Calculaste el 30 % de los gastos."
   }
  ],
  "correcta": 1,
  "explicacion": "Ganó 100 − 60 = 40. Impuesto = 30 % de 40 = $12 M.",
  "calc": {
   "formula": "impuesto",
   "datos": {
    "ingresos": 100,
    "costos": 60,
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
  "enunciado": "¿Cuál de estas cosas se paga UNA sola vez, al montar el negocio, y no cada año?",
  "opciones": [
   {
    "t": "Los sueldos de los baristas",
    "porque": "Se pagan cada mes."
   },
   {
    "t": "Comprar la máquina empacadora"
   },
   {
    "t": "Los servicios públicos",
    "porque": "Llegan cada mes."
   },
   {
    "t": "El arriendo del local",
    "porque": "Se paga cada mes, todos los años."
   }
  ],
  "correcta": 1,
  "explicacion": "Lo que se compra al inicio para montar el negocio es la inversión. Lo que se paga cada año son los gastos de operación."
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
  "enunciado": "Una panadería necesita $10 M en harina, empaques y efectivo en caja para poder abrir. Cuando el negocio termina, esa plata se recupera. ¿Cuándo sale y cuándo vuelve?",
  "opciones": [
   {
    "t": "Sale cada año y no vuelve",
    "porque": "Se pone una vez, al inicio, y al final se recupera."
   },
   {
    "t": "Sale al final",
    "porque": "Se necesita desde el primer día."
   },
   {
    "t": "Sale al inicio y vuelve al final"
   },
   {
    "t": "No sale nunca",
    "porque": "Sí sale: sin esa plata no se puede abrir."
   }
  ],
  "correcta": 2,
  "explicacion": "Esa plata para arrancar (capital de trabajo) sale al inicio y vuelve al final."
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
  "enunciado": "Al terminar el proyecto, la tostadora usada se vende en $8 M. ¿Cómo cuenta esa plata?",
  "opciones": [
   {
    "t": "Como plata que entra el primer año",
    "porque": "Se recibe al final, cuando se vende."
   },
   {
    "t": "Como plata que sale",
    "porque": "Vender algo trae plata, no la saca."
   },
   {
    "t": "Como plata que entra en el último año"
   },
   {
    "t": "No cuenta, porque la máquina es vieja",
    "porque": "Aunque sea vieja, si se vende, esa plata entra."
   }
  ],
  "correcta": 2,
  "explicacion": "Lo que se recibe al vender lo usado (valor de salvamento) entra en el último año."
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
  "enunciado": "La depreciación es el desgaste de la máquina, repartido por años. ¿Sale plata del bolsillo cada año por ese desgaste?",
  "opciones": [
   {
    "t": "Sí: cada año se vuelve a pagar la máquina",
    "porque": "La máquina se pagó una sola vez, al comprarla."
   },
   {
    "t": "No: la máquina se pagó al comprarla; el desgaste es solo una cuenta"
   },
   {
    "t": "Sí: se le paga al banco",
    "porque": "El desgaste no tiene que ver con el banco."
   },
   {
    "t": "Solo si la máquina se daña",
    "porque": "Una reparación sí es un gasto, pero eso no es la depreciación."
   }
  ],
  "correcta": 1,
  "explicacion": "La depreciación no saca plata. Solo sirve para pagar un poco menos de impuesto, porque la ley deja restarla."
 },
 {
  "id": "B08",
  "bloque": "B",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "insumos",
  "tipo": "calculo",
  "enunciado": "Para montar la cafetería hay que comprar máquinas por $60 M, arreglar el local por $25 M y tener $15 M para arrancar (mercancía y caja). ¿Cuánto hay que invertir al inicio?",
  "opciones": [
   {
    "t": "$40 M",
    "porque": "Te faltaron las máquinas."
   },
   {
    "t": "$85 M",
    "porque": "Olvidaste la plata para arrancar ($15 M)."
   },
   {
    "t": "$100 M"
   },
   {
    "t": "$75 M",
    "porque": "Olvidaste el arreglo del local."
   }
  ],
  "correcta": 2,
  "explicacion": "60 + 25 + 15 = $100 M.",
  "calc": {
   "formula": "suma",
   "datos": {
    "valores": [
     60,
     25,
     15
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 100
 },
 {
  "id": "B09",
  "bloque": "B",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "insumos",
  "tipo": "concepto",
  "enunciado": "En evaluación de proyectos, el \"horizonte\" es…",
  "opciones": [
   {
    "t": "La vista que tiene el local",
    "porque": "¡No! Aquí es cuántos años se proyectan las cuentas."
   },
   {
    "t": "El número de años que se van a mirar en las cuentas (por ejemplo, 5 años)"
   },
   {
    "t": "El tiempo que tarda en volver la plata",
    "porque": "Eso es el periodo de recuperación."
   },
   {
    "t": "La fecha en que abre el negocio",
    "porque": "Eso es el inicio, no cuántos años se miran."
   }
  ],
  "correcta": 1,
  "explicacion": "El horizonte es cuántos años se miran. Suele ser lo que duran las máquinas o el negocio."
 },
 {
  "id": "C01",
  "bloque": "C",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "flujo_estructura",
  "tipo": "calculo",
  "enunciado": "En el año 2 la tienda vendió $200 M, gastó $80 M y pagó $30 M de impuestos. ¿Cuánta plata le quedó en el bolsillo ese año?",
  "opciones": [
   {
    "t": "$90 M"
   },
   {
    "t": "$170 M",
    "porque": "No restaste los gastos."
   },
   {
    "t": "$120 M",
    "porque": "No restaste los impuestos."
   },
   {
    "t": "$310 M",
    "porque": "Sumaste todo; los gastos y los impuestos se restan."
   }
  ],
  "correcta": 0,
  "explicacion": "200 − 80 − 30 = $90 M. Esa es la plata que de verdad quedó (el flujo de caja del año).",
  "calc": {
   "formula": "suma",
   "datos": {
    "valores": [
     200,
     -80,
     -30
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 90
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
  "enunciado": "Para arrancar hay que comprar máquinas por $100 M y tener $20 M para operar. El mes pasado ya pagaron $10 M por un estudio que no se devuelve. ¿Cuánta plata hay que poner AHORA si deciden hacer el proyecto?",
  "opciones": [
   {
    "t": "$100 M",
    "porque": "Olvidaste la plata para operar."
   },
   {
    "t": "$120 M"
   },
   {
    "t": "$130 M",
    "porque": "Sumaste el estudio: ya se pagó, hagan o no el proyecto."
   },
   {
    "t": "$110 M",
    "porque": "Sumaste el estudio y olvidaste la plata para operar."
   }
  ],
  "correcta": 1,
  "explicacion": "100 + 20 = $120 M. El estudio ya se pagó y no cambia con la decisión.",
  "calc": {
   "formula": "suma",
   "datos": {
    "valores": [
     100,
     20
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 120
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
  "enunciado": "Último año: la operación deja $50 M. Además recuperan los $20 M que tenían para operar y venden la maquinaria usada en $10 M. ¿Cuánta plata entra en total ese año?",
  "opciones": [
   {
    "t": "$70 M",
    "porque": "Olvidaste la venta de la maquinaria."
   },
   {
    "t": "$80 M"
   },
   {
    "t": "$50 M",
    "porque": "Olvidaste lo que se recupera y lo que se vende al final."
   },
   {
    "t": "$60 M",
    "porque": "Olvidaste recuperar los $20 M para operar."
   }
  ],
  "correcta": 1,
  "explicacion": "50 + 20 + 10 = $80 M. El último año devuelve la plata para operar y lo que se vende.",
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
  "tiempo": 60,
  "leccion": "impuestos",
  "tipo": "concepto",
  "enunciado": "Caza el error. Ventas 100 − gastos 40 = 60 de ganancia. Impuesto: 30 % de las VENTAS = 30. Queda: 60 − 30 = 30. ¿Qué está mal?",
  "opciones": [
   {
    "t": "Los gastos no se restan",
    "porque": "Sí se restan: es plata que sale."
   },
   {
    "t": "Nada, está bien",
    "porque": "El impuesto se calculó sobre las ventas, y va sobre la ganancia."
   },
   {
    "t": "Faltó sumar el impuesto",
    "porque": "El impuesto es plata que sale: se resta."
   },
   {
    "t": "El impuesto va sobre la ganancia (30 % de 60 = 18): quedan 42"
   }
  ],
  "correcta": 3,
  "explicacion": "El impuesto se calcula sobre lo que se gana, no sobre lo que se vende: 60 − 18 = 42.",
  "chequeos": [
   {
    "formula": "impuesto",
    "datos": {
     "ingresos": 100,
     "costos": 40,
     "t": 0.3
    },
    "esperado": 18
   },
   {
    "formula": "suma",
    "datos": {
     "valores": [
      60,
      -18
     ]
    },
    "esperado": 42
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
  "enunciado": "Hace dos meses pagaron $5 M por un estudio de mercado. Esa plata no se recupera, hagan o no el proyecto. ¿Se cuenta al decidir?",
  "opciones": [
   {
    "t": "No: ya se gastó y no cambia con la decisión"
   },
   {
    "t": "Sí, repartida en los años",
    "porque": "No es un gasto futuro del proyecto."
   },
   {
    "t": "Solo si el proyecto sale bien",
    "porque": "Lo ya gastado no cuenta en ningún caso."
   },
   {
    "t": "Sí, al inicio del proyecto",
    "porque": "Esa plata ya se fue, decidan lo que decidan."
   }
  ],
  "correcta": 0,
  "explicacion": "Lo que ya se gastó y no se recupera (costo hundido) no cuenta. Pregunta clave: ¿esto cambia si hago el proyecto?"
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
  "enunciado": "El proyecto usará un lote de la familia que hoy podrían arrendar en $10 M al año. ¿Se cuenta algo?",
  "opciones": [
   {
    "t": "Sí: los $10 M al año que dejan de recibir por el arriendo"
   },
   {
    "t": "Sí, como un ingreso de $10 M al año",
    "porque": "El proyecto no recibe ese arriendo: lo deja de recibir."
   },
   {
    "t": "No, porque el lote ya es de la familia",
    "porque": "Al usarlo, dejan de recibir el arriendo: eso es un costo real."
   },
   {
    "t": "Sí, el precio total del lote",
    "porque": "No lo van a comprar: lo que se pierde es el arriendo."
   }
  ],
  "correcta": 0,
  "explicacion": "Lo que dejas de ganar por usar algo tuyo (costo de oportunidad) sí cuenta."
 },
 {
  "id": "C07",
  "bloque": "C",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "flujo_estructura",
  "tipo": "concepto",
  "enunciado": "El flujo de caja es la plata que de verdad entra y sale. ¿Cuál de estas NO es plata que entre o salga?",
  "opciones": [
   {
    "t": "Las ventas",
    "porque": "Entra plata."
   },
   {
    "t": "El desgaste de la máquina (depreciación)"
   },
   {
    "t": "El pago del arriendo",
    "porque": "Sale plata cada mes."
   },
   {
    "t": "El pago de impuestos",
    "porque": "Sale plata."
   }
  ],
  "correcta": 1,
  "explicacion": "El desgaste es una cuenta, no un pago: la máquina se pagó al comprarla."
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
  "enunciado": "¿Qué es el flujo de caja de un año?",
  "opciones": [
   {
    "t": "La plata que de verdad entra menos la que de verdad sale ese año"
   },
   {
    "t": "La lista de clientes del año",
    "porque": "Los clientes generan ventas, pero el flujo es plata que entra y sale."
   },
   {
    "t": "Solo las ventas",
    "porque": "Faltan las salidas: gastos, impuestos e inversiones."
   },
   {
    "t": "Todo lo que se gastó en publicidad",
    "porque": "Es solo una de las salidas."
   }
  ],
  "correcta": 0,
  "explicacion": "Entradas menos salidas reales de plata: eso es lo que el negocio deja en el bolsillo."
 },
 {
  "id": "C09",
  "bloque": "C",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "impuestos",
  "tipo": "calculo",
  "enunciado": "Año 1: ventas $150 M y gastos $50 M. El impuesto es el 25 % de lo que se gana (ventas − gastos). ¿Cuánta plata queda después de pagar el impuesto?",
  "opciones": [
   {
    "t": "$25 M",
    "porque": "Ese es el impuesto, no lo que queda."
   },
   {
    "t": "$62,5 M",
    "porque": "Calculaste el impuesto sobre las ventas (25 % de 150)."
   },
   {
    "t": "$75 M"
   },
   {
    "t": "$100 M",
    "porque": "No restaste el impuesto."
   }
  ],
  "correcta": 2,
  "explicacion": "Se gana 150 − 50 = 100. Impuesto = 25. Quedan $75 M.",
  "calc": {
   "formula": "fcOperativo",
   "datos": {
    "ingresos": 150,
    "costos": 50,
    "dep": 0,
    "t": 0.25
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 75
 },
 {
  "id": "C10",
  "bloque": "C",
  "uso": [
   "caza"
  ],
  "tiempo": 60,
  "leccion": "capital_trabajo",
  "tipo": "concepto",
  "enunciado": "Caza el error. Al inicio: máquina −100 y plata para operar −20. Años 1, 2 y 3: la operación deja +50. Último año: + venta de la máquina 10 → total del año 3 = 60. ¿Qué falta?",
  "opciones": [
   {
    "t": "Recuperar los 20 para operar en el año 3: el total es 80"
   },
   {
    "t": "No falta nada",
    "porque": "La plata para operar que se puso al inicio vuelve al final."
   },
   {
    "t": "Restar el desgaste de la máquina",
    "porque": "El desgaste no es plata que sale."
   },
   {
    "t": "Sumar los 20 en el año 1",
    "porque": "Se recuperan al final, no al inicio."
   }
  ],
  "correcta": 0,
  "explicacion": "Si se olvida recuperar la plata para operar, el proyecto parece peor de lo que es.",
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
  "tiempo": 60,
  "leccion": "flujo_relevante",
  "tipo": "concepto",
  "enunciado": "Caza el error. Para decidir si abren una heladería suman: máquinas 40 + plata para operar 10 + el estudio de mercado que pagaron el año pasado 5 = 55 de inversión. ¿Qué está mal?",
  "opciones": [
   {
    "t": "Faltó sumar el arriendo de todos los años",
    "porque": "El arriendo se paga cada año; no es parte de la inversión inicial."
   },
   {
    "t": "Nada, está bien",
    "porque": "Lo que ya se gastó y no se recupera no cambia con la decisión."
   },
   {
    "t": "El estudio ya pagado no cuenta: la inversión es 50"
   },
   {
    "t": "La plata para operar no cuenta",
    "porque": "Sí cuenta: hay que ponerla para poder abrir."
   }
  ],
  "correcta": 2,
  "explicacion": "Solo cuenta lo que cambia por hacer el proyecto: 40 + 10 = 50.",
  "chequeos": [
   {
    "formula": "suma",
    "datos": {
     "valores": [
      40,
      10
     ]
    },
    "esperado": 50
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
  "tiempo": 45,
  "leccion": "valor_tiempo",
  "tipo": "calculo",
  "enunciado": "Pones $100 M en una inversión segura que paga 10 % al año. ¿Cuánto tendrás dentro de un año?",
  "opciones": [
   {
    "t": "$10 M",
    "porque": "Esa es solo la ganancia; hay que sumarla a los 100."
   },
   {
    "t": "$90 M",
    "porque": "Restaste el 10 %; hay que sumarlo."
   },
   {
    "t": "$110 M"
   },
   {
    "t": "$100 M",
    "porque": "Te faltó sumar lo que ganas."
   }
  ],
  "correcta": 2,
  "explicacion": "100 + 10 % = $110 M.",
  "calc": {
   "formula": "vf",
   "datos": {
    "monto": 100,
    "tasa": 0.1,
    "n": 1
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 110.00000000000001
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
  "enunciado": "Te prometen $110 M dentro de un año. Tu plata podría ganar 10 % al año en otra parte. ¿Cuánto valen hoy esos $110 M? (Pista: 110 ÷ 1,1)",
  "opciones": [
   {
    "t": "$11 M",
    "porque": "Ese es el 10 %; hay que dividir 110 entre 1,1."
   },
   {
    "t": "$100 M"
   },
   {
    "t": "$110 M",
    "porque": "No los pasaste a pesos de hoy: la plata del futuro vale menos hoy."
   },
   {
    "t": "$121 M",
    "porque": "Multiplicaste por 1,1; hay que dividir."
   }
  ],
  "correcta": 1,
  "explicacion": "110 ÷ 1,1 = $100 M. Pasar plata del futuro a pesos de hoy se llama \"descontar\".",
  "calc": {
   "formula": "vp",
   "datos": {
    "monto": 110,
    "tasa": 0.1,
    "n": 1
   }
  },
  "unidad": "M",
  "dec": 1,
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
    "porque": "Eso no explica por qué la plata de hoy vale más."
   },
   {
    "t": "Porque si lo tengo hoy lo puedo poner a ganar"
   },
   {
    "t": "Porque los billetes se desgastan",
    "porque": "No es algo físico: es lo que la plata puede ganar mientras tanto."
   },
   {
    "t": "No es cierto: valen lo mismo",
    "porque": "Si la tienes antes, la puedes poner a ganar."
   }
  ],
  "correcta": 1,
  "explicacion": "Esperar tiene un costo: lo que dejas de ganar. Por eso la plata del futuro vale menos hoy."
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
  "enunciado": "Laura no le mete plata a ningún negocio que gane menos de 12 % al año, porque eso le paga un CDT seguro. ¿Qué es ese 12 %?",
  "opciones": [
   {
    "t": "Lo mínimo que ella exige ganar (en evaluación se llama TMAR)"
   },
   {
    "t": "Un impuesto",
    "porque": "No es un impuesto: es su exigencia mínima."
   },
   {
    "t": "Lo que gana el negocio",
    "porque": "Eso se calcula después; el 12 % es lo que ella exige."
   },
   {
    "t": "Lo que cobra el banco por un préstamo",
    "porque": "Es lo que ella quiere ganar, no lo que paga."
   }
  ],
  "correcta": 0,
  "explicacion": "Ese mínimo exigido es la vara con la que se mide el negocio: si no lo alcanza, mejor el CDT."
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
  "enunciado": "Recibirás $200 M dentro de un año. Tu plata podría ganar 25 % al año en otra parte. ¿Cuánto valen hoy? (Pista: 200 ÷ 1,25)",
  "opciones": [
   {
    "t": "$150 M",
    "porque": "Le restaste el 25 %; hay que dividir entre 1,25."
   },
   {
    "t": "$160 M"
   },
   {
    "t": "$200 M",
    "porque": "No los pasaste a pesos de hoy."
   },
   {
    "t": "$250 M",
    "porque": "Multiplicaste; hay que dividir."
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
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "valor_tiempo",
  "tipo": "concepto",
  "enunciado": "Opción 1: $100 M hoy. Opción 2: $105 M dentro de un año. Tu plata puede ganar 10 % al año. ¿Cuál conviene?",
  "opciones": [
   {
    "t": "No se puede saber",
    "porque": "Sí se puede: compara lo que tendrías en un año con cada opción."
   },
   {
    "t": "La de un año: es más plata",
    "porque": "Si recibes 100 hoy y los pones a ganar 10 %, en un año tienes 110, más que 105."
   },
   {
    "t": "Da igual",
    "porque": "Daría igual si te ofrecieran $110 M en un año."
   },
   {
    "t": "La de hoy: puestos a ganar, en un año serían $110 M"
   }
  ],
  "correcta": 3,
  "explicacion": "100 + 10 % = 110, que es más que 105. Mejor la plata hoy.",
  "chequeos": [
   {
    "formula": "vf",
    "datos": {
     "monto": 100,
     "tasa": 0.1,
     "n": 1
    },
    "esperado": 110
   }
  ]
 },
 {
  "id": "D07",
  "bloque": "D",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "valor_tiempo",
  "tipo": "concepto",
  "enunciado": "Opción 1: $100 M hoy. Opción 2: $125 M dentro de un año. Tu plata puede ganar 20 % al año. ¿Cuál conviene?",
  "opciones": [
   {
    "t": "La de hoy: la plata de hoy siempre gana",
    "porque": "La plata de hoy vale más, pero aquí 125 supera los 120 que tendrías."
   },
   {
    "t": "Da igual",
    "porque": "Daría igual con $120 M en un año."
   },
   {
    "t": "No se puede saber",
    "porque": "Sí se puede: 100 + 20 % = 120, y 125 es más."
   },
   {
    "t": "La de un año: los $100 M de hoy solo llegarían a $120 M"
   }
  ],
  "correcta": 3,
  "explicacion": "100 + 20 % = 120 < 125. Esta vez conviene esperar.",
  "chequeos": [
   {
    "formula": "vf",
    "datos": {
     "monto": 100,
     "tasa": 0.2,
     "n": 1
    },
    "esperado": 120
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
  "enunciado": "Tu plata puede ganar 10 % al año. ¿Cuánto deberían pagarte dentro de un año para que te dé lo mismo que recibir $50 M hoy?",
  "opciones": [
   {
    "t": "$55 M"
   },
   {
    "t": "$60 M",
    "porque": "Sumaste $10 M; el 10 % de 50 es 5."
   },
   {
    "t": "$50 M",
    "porque": "Recibir lo mismo más tarde es perder lo que podías ganar."
   },
   {
    "t": "$45,45 M",
    "porque": "Dividiste; aquí hay que sumar el 10 %."
   }
  ],
  "correcta": 0,
  "explicacion": "50 + 10 % = $55 M.",
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
  "tiempo": 60,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Un negocio cuesta $100 M hoy y devuelve $132 M en un año. Como tu plata podría ganar 10 % en otra parte, esos $132 M valen hoy $120 M. ¿Cuánto gana el negocio en pesos de hoy, después de restar lo que cuesta?",
  "opciones": [
   {
    "t": "$20 M"
   },
   {
    "t": "$32 M",
    "porque": "Restaste sin pasar a pesos de hoy: usa los $120 M."
   },
   {
    "t": "$120 M",
    "porque": "Te faltó restar lo que cuesta ($100 M)."
   },
   {
    "t": "$−20 M",
    "porque": "Restaste al revés: 120 − 100 es positivo."
   }
  ],
  "correcta": 0,
  "explicacion": "120 − 100 = $20 M. Positivo: conviene. Ese resultado se llama VPN.",
  "calc": {
   "formula": "vpn",
   "datos": {
    "flujos": [
     -100,
     132
    ],
    "tasa": 0.1
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 19.999999999999986
 },
 {
  "id": "E02",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 75,
  "leccion": "vpn",
  "tipo": "calculo",
  "enunciado": "Inviertes $100 M y recibes $150 M dentro de un año. Tu plata podría ganar 25 % en otra parte. Pasa los $150 M a pesos de hoy (÷ 1,25) y resta lo invertido. ¿Cuánto da?",
  "opciones": [
   {
    "t": "$20 M"
   },
   {
    "t": "$12,5 M",
    "porque": "Le restaste el 25 % a 150; hay que dividir entre 1,25."
   },
   {
    "t": "$120 M",
    "porque": "Ese es el valor hoy de lo que recibes; falta restar los $100 M."
   },
   {
    "t": "$50 M",
    "porque": "No pasaste los $150 M a pesos de hoy."
   }
  ],
  "correcta": 0,
  "explicacion": "150 ÷ 1,25 = 120. 120 − 100 = $20 M: gana más que tu mínimo. Conviene.",
  "calc": {
   "formula": "vpn",
   "datos": {
    "flujos": [
     -100,
     150
    ],
    "tasa": 0.25
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 20
 },
 {
  "id": "E03",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "tir",
  "tipo": "calculo",
  "enunciado": "Inviertes $200 M y en un año recibes $250 M. ¿Qué porcentaje ganaste? (ganancia ÷ lo invertido)",
  "opciones": [
   {
    "t": "20 %",
    "porque": "Dividiste entre 250; se divide entre lo invertido (200)."
   },
   {
    "t": "25 %"
   },
   {
    "t": "50 %",
    "porque": "Esa es la ganancia en millones, no el porcentaje."
   },
   {
    "t": "125 %",
    "porque": "Dividiste 250 entre 200 sin restar lo invertido."
   }
  ],
  "correcta": 1,
  "explicacion": "Ganancia = 50. 50 ÷ 200 = 25 %. Ese % por año es la rentabilidad del negocio (TIR).",
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
  "id": "E04",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "tir",
  "tipo": "calculo",
  "enunciado": "Inviertes $50 M y en un año recibes $60 M. ¿Qué porcentaje ganaste? (ganancia ÷ lo invertido)",
  "opciones": [
   {
    "t": "20 %"
   },
   {
    "t": "120 %",
    "porque": "Dividiste 60 entre 50 sin restar lo invertido."
   },
   {
    "t": "10 %",
    "porque": "Esa es la ganancia en millones, no el porcentaje."
   },
   {
    "t": "16,7 %",
    "porque": "Dividiste la ganancia entre 60; se divide entre lo invertido (50)."
   }
  ],
  "correcta": 0,
  "explicacion": "Ganancia = 10. 10 ÷ 50 = 20 %.",
  "calc": {
   "formula": "tir",
   "datos": {
    "flujos": [
     -50,
     60
    ]
   }
  },
  "unidad": "%",
  "dec": 1,
  "valor": 19.999999999999986
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
  "enunciado": "Un negocio rinde 18 % al año. Tú exiges ganar mínimo 15 % al año. ¿Te conviene?",
  "opciones": [
   {
    "t": "Sí: rinde más que lo mínimo que exiges"
   },
   {
    "t": "Da igual",
    "porque": "Daría igual si rindiera exactamente 15 %."
   },
   {
    "t": "Solo si rinde más de 20 %",
    "porque": "Tu mínimo es 15 %, no 20 %."
   },
   {
    "t": "No: 18 % es poco",
    "porque": "Lo que importa es compararlo con tu mínimo, y 18 es más que 15."
   }
  ],
  "correcta": 0,
  "explicacion": "Comparar lo que rinde el negocio (TIR) con lo mínimo que exiges (TMAR) es una forma de decidir."
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
  "enunciado": "En pesos de hoy, un negocio cuesta $250 M y devuelve $300 M. ¿Cuántos pesos devuelve por cada peso que cuesta? (devuelve ÷ cuesta)",
  "opciones": [
   {
    "t": "1,2"
   },
   {
    "t": "0,83",
    "porque": "Dividiste al revés: es lo que devuelve ÷ lo que cuesta."
   },
   {
    "t": "50",
    "porque": "Esa es la resta (300 − 250), no la división."
   },
   {
    "t": "0,2",
    "porque": "Dividiste solo la ganancia (50 ÷ 250); falta el peso que se recupera."
   }
  ],
  "correcta": 0,
  "explicacion": "300 ÷ 250 = 1,2: devuelve $1,20 por cada $1. Más de 1: conviene. Se llama relación beneficio/costo (B/C).",
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
  "enunciado": "En pesos de hoy, un negocio devuelve $0,90 por cada $1 que cuesta. ¿Conviene?",
  "opciones": [
   {
    "t": "Sí, porque devuelve algo",
    "porque": "Devolver 90 centavos por cada peso es perder 10 centavos."
   },
   {
    "t": "Sí, porque está cerca de 1",
    "porque": "Cerca no basta: sigue perdiendo plata."
   },
   {
    "t": "No se puede saber",
    "porque": "Sí se puede: si devuelve menos de $1 por cada $1, pierde."
   },
   {
    "t": "No: devuelve menos de lo que cuesta"
   }
  ],
  "correcta": 3,
  "explicacion": "Más de 1: gana. Menos de 1: pierde."
 },
 {
  "id": "E08",
  "bloque": "E",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 45,
  "leccion": "pr",
  "tipo": "calculo",
  "enunciado": "Inviertes $90 M y el negocio deja $30 M cada año. ¿En cuántos años recuperas lo invertido?",
  "opciones": [
   {
    "t": "3 años"
   },
   {
    "t": "9 años",
    "porque": "Dividiste 90 entre 10; cada año deja 30."
   },
   {
    "t": "4 años",
    "porque": "Al terminar el año 3 ya juntaste los $90 M."
   },
   {
    "t": "2 años",
    "porque": "En 2 años solo llevas $60 M; faltan 30."
   }
  ],
  "correcta": 0,
  "explicacion": "30 + 30 + 30 = 90: en 3 años vuelve la plata. Eso es el periodo de recuperación.",
  "calc": {
   "formula": "pr",
   "datos": {
    "flujos": [
     -90,
     30,
     30,
     30
    ]
   }
  },
  "unidad": "años",
  "dec": 0,
  "valor": 3
 },
 {
  "id": "E09",
  "bloque": "E",
  "uso": [
   "desafio"
  ],
  "tiempo": 45,
  "leccion": "pr",
  "tipo": "concepto",
  "enunciado": "¿Qué dice el \"tiempo de recuperación\" de un negocio?",
  "opciones": [
   {
    "t": "Cuánto gana el negocio en total",
    "porque": "Un negocio puede recuperar rápido y ganar poco."
   },
   {
    "t": "Qué tan rápido vuelve la plata invertida"
   },
   {
    "t": "Cuántos clientes tendrá",
    "porque": "Eso viene del estudio de mercado."
   },
   {
    "t": "El porcentaje que rinde por año",
    "porque": "Eso es la rentabilidad, no el tiempo."
   }
  ],
  "correcta": 1,
  "explicacion": "Sirve para saber qué tan rápido vuelve la plata, no si el negocio es bueno."
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
  "enunciado": "Pasando todo a pesos de hoy, un negocio queda exactamente en $0 después de restar lo que cuesta. ¿Qué significa?",
  "opciones": [
   {
    "t": "Pierde toda la plata",
    "porque": "No pierde: recupera lo invertido y gana tu mínimo."
   },
   {
    "t": "Es el mejor negocio posible",
    "porque": "Es apenas suficiente, no el mejor."
   },
   {
    "t": "Gana justo lo mínimo que exigías: da lo mismo hacerlo o no"
   },
   {
    "t": "No gana nada, ni siquiera el mínimo",
    "porque": "Sí gana: justo lo mínimo que exigías."
   }
  ],
  "correcta": 2,
  "explicacion": "En $0 (VPN = 0), el negocio devuelve lo invertido más justo tu mínimo exigido."
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
  "enunciado": "Un negocio rinde 8 % al año y tú exiges mínimo 10 %. ¿Qué haces?",
  "opciones": [
   {
    "t": "Invierto, porque 8 % es positivo",
    "porque": "Hay que compararlo con tu mínimo (10 %), no con cero."
   },
   {
    "t": "Invierto: algo gana",
    "porque": "Gana, pero menos que tu mínimo: otra opción te daría más."
   },
   {
    "t": "Da igual",
    "porque": "Daría igual si rindiera 10 %."
   },
   {
    "t": "No invierto: rinde menos de lo que exijo"
   }
  ],
  "correcta": 3,
  "explicacion": "Si el negocio rinde menos que tu mínimo, la inversión segura es mejor."
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
  "enunciado": "Solo puedes hacer UNO de dos negocios. A deja $50 M de ganancia en pesos de hoy y rinde 20 % al año. B deja $30 M y rinde 35 % al año. ¿Cuál escoges?",
  "opciones": [
   {
    "t": "Los dos",
    "porque": "Solo se puede uno."
   },
   {
    "t": "B: tiene el porcentaje más alto",
    "porque": "Un % alto sobre poca plata puede dejar menos. A deja 50; B, solo 30."
   },
   {
    "t": "Ninguno",
    "porque": "Los dos ganan: escoge el que deja más plata."
   },
   {
    "t": "A: deja más plata, aunque su porcentaje sea menor"
   }
  ],
  "correcta": 3,
  "explicacion": "Cuando solo se puede uno, gana el que deja más plata en pesos de hoy (mayor VPN)."
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
  "enunciado": "Solo puedes escoger una opción: ganar 50 % sobre $100 o ganar 20 % sobre $1.000. ¿Cuál deja más plata?",
  "opciones": [
   {
    "t": "Dejan lo mismo",
    "porque": "Una deja 50 y la otra 200."
   },
   {
    "t": "El 50 %: es un porcentaje más alto",
    "porque": "El 50 % de 100 son solo $50."
   },
   {
    "t": "El 20 % sobre $1.000: son $200, contra $50"
   },
   {
    "t": "No se puede saber",
    "porque": "Sí se puede: calcula cuánta plata deja cada una."
   }
  ],
  "correcta": 2,
  "explicacion": "Por eso, para escoger entre negocios, se mira la plata que dejan y no solo el porcentaje."
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
  "enunciado": "Un negocio recupera la inversión en solo 1 año, pero en pesos de hoy termina perdiendo $5 M. ¿Qué haces?",
  "opciones": [
   {
    "t": "Lo hago: recupera rapidísimo",
    "porque": "Recupera rápido, pero al final deja pérdida."
   },
   {
    "t": "Me da igual",
    "porque": "Daría igual si quedara en 0, no con pérdida."
   },
   {
    "t": "No lo hago: recuperar rápido no es lo mismo que ganar"
   },
   {
    "t": "Lo hago si me gusta el negocio",
    "porque": "La decisión se toma con los números."
   }
  ],
  "correcta": 2,
  "explicacion": "El tiempo de recuperación responde \"¿qué tan rápido vuelve la plata?\", no \"¿conviene?\"."
 },
 {
  "id": "F04",
  "bloque": "F",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "restriccion",
  "tipo": "concepto",
  "enunciado": "Tienes $100 M. Tres negocios que se pueden combinar: A cuesta $100 M y gana $30 M. B cuesta $50 M y gana $20 M. C cuesta $50 M y gana $18 M. ¿Qué haces?",
  "opciones": [
   {
    "t": "B y C: caben juntos y ganan $38 M"
   },
   {
    "t": "Solo A, el que más gana",
    "porque": "A gana 30; B + C caben en los $100 M y ganan 38."
   },
   {
    "t": "A y B",
    "porque": "Cuestan $150 M: no alcanza."
   },
   {
    "t": "Solo B",
    "porque": "Sobran $50 M que pueden ir a C y ganar 18 más."
   }
  ],
  "correcta": 0,
  "explicacion": "Con presupuesto limitado se busca la combinación que quepa y sume más.",
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
  "tiempo": 45,
  "leccion": "criterios",
  "tipo": "concepto",
  "enunciado": "Dos socios discuten. Uno dice: \"Escojamos el negocio con el porcentaje más alto\". El otro: \"Escojamos el que deje más plata en pesos de hoy\". Si solo pueden hacer uno, ¿quién tiene razón?",
  "opciones": [
   {
    "t": "Ninguno: hay que escoger el que recupere más rápido",
    "porque": "Recuperar rápido no dice cuánto gana."
   },
   {
    "t": "El primero",
    "porque": "Un % alto sobre poca plata puede dejar menos ganancia."
   },
   {
    "t": "Ninguno: hay que escoger el más barato",
    "porque": "El más barato no siempre gana más."
   },
   {
    "t": "El segundo: lo que importa es cuánta plata deja"
   }
  ],
  "correcta": 3,
  "explicacion": "Entre negocios de los que solo se puede uno, manda la plata en pesos de hoy (el VPN)."
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
  "enunciado": "El negocio A deja más plata en pesos de hoy, pero el negocio B tiene un porcentaje de ganancia más alto. ¿Cómo puede pasar?",
  "opciones": [
   {
    "t": "Alguno está mal calculado",
    "porque": "Pasa seguido con cálculos correctos."
   },
   {
    "t": "Es imposible",
    "porque": "Es muy común con negocios de distinto tamaño."
   },
   {
    "t": "B es más pequeño: gana un % alto, pero sobre menos plata"
   },
   {
    "t": "Porque A tiene más empleados",
    "porque": "El número de empleados no explica la diferencia."
   }
  ],
  "correcta": 2,
  "explicacion": "Un negocio pequeño puede tener un % altísimo y dejar poca plata."
 },
 {
  "id": "F07",
  "bloque": "F",
  "uso": [
   "desafio"
  ],
  "tiempo": 60,
  "leccion": "criterios",
  "tipo": "concepto",
  "enunciado": "Exiges ganar mínimo 12 % al año. Un negocio: en pesos de hoy pierde $5 M, rinde 10 % al año y devuelve $0,95 por cada $1. ¿Qué decides?",
  "opciones": [
   {
    "t": "Me da igual",
    "porque": "Daría igual si quedara en 0."
   },
   {
    "t": "Hacerlo: $0,95 es casi $1",
    "porque": "Casi no basta: pierde 5 centavos por cada peso."
   },
   {
    "t": "Hacerlo: rinde 10 %, que es positivo",
    "porque": "Hay que compararlo con tu mínimo (12 %), no con cero."
   },
   {
    "t": "No hacerlo: las tres cifras dicen que no alcanza"
   }
  ],
  "correcta": 3,
  "explicacion": "Pérdida en pesos de hoy, rinde menos que el mínimo y devuelve menos de $1: las tres dicen que no."
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
  "enunciado": "Tienes $150 M. Negocios que se pueden combinar: A cuesta $100 M y gana $40 M. B cuesta $50 M y gana $25 M. C cuesta $100 M y gana $45 M. ¿Cuál es la MAYOR ganancia total que cabe en tu plata?",
  "opciones": [
   {
    "t": "$45 M",
    "porque": "Escogiste solo C y te sobraron $50 M para B."
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
    "porque": "A + B cabe, pero C + B también cabe y gana más."
   }
  ],
  "correcta": 1,
  "explicacion": "Caben A + B (gana 65) o C + B (gana 70). Lo mejor: C + B = $70 M.",
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
  "tiempo": 60,
  "leccion": "criterios",
  "tipo": "calculo",
  "enunciado": "Solo puedes hacer uno. En pesos de hoy: A recibe $120 M y cuesta $100 M. B recibe $230 M y cuesta $200 M. ¿Cuánto gana el que conviene escoger?",
  "opciones": [
   {
    "t": "$30 M"
   },
   {
    "t": "$50 M",
    "porque": "Sumaste las dos ganancias; solo se puede uno."
   },
   {
    "t": "$230 M",
    "porque": "Olvidaste restar lo que cuesta."
   },
   {
    "t": "$20 M",
    "porque": "Esa es la ganancia de A; B gana más."
   }
  ],
  "correcta": 0,
  "explicacion": "A gana 120 − 100 = 20. B gana 230 − 200 = 30. Se escoge B: $30 M.",
  "calc": {
   "formula": "suma",
   "datos": {
    "valores": [
     230,
     -200
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 30
 },
 {
  "id": "G01",
  "bloque": "G",
  "uso": [
   "desafio",
   "duelo"
  ],
  "tiempo": 60,
  "leccion": "equilibrio",
  "tipo": "calculo",
  "enunciado": "Los gastos fijos de la tienda son $2.000.000 al mes. Cada caja de café se vende a $50.000 y cuesta $30.000 hacerla, así que cada caja deja $20.000. ¿Cuántas cajas hay que vender al mes para no ganar ni perder?",
  "opciones": [
   {
    "t": "67 unidades",
    "porque": "Dividiste entre lo que cuesta hacerla; se divide entre lo que deja cada caja."
   },
   {
    "t": "100 unidades"
   },
   {
    "t": "25 unidades",
    "porque": "Sumaste precio y costo; hay que restarlos."
   },
   {
    "t": "40 unidades",
    "porque": "Dividiste entre el precio; se divide entre lo que deja cada caja ($20.000)."
   }
  ],
  "correcta": 1,
  "explicacion": "2.000.000 ÷ 20.000 = 100 cajas. Ese es el punto de equilibrio.",
  "calc": {
   "formula": "peUnidades",
   "datos": {
    "cf": 2000000,
    "precio": 50000,
    "cv": 30000
   }
  },
  "unidad": "u",
  "dec": 0,
  "valor": 100
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
  "enunciado": "Gastos fijos: $30 M. De cada $100 que vendes, te quedan $40 para pagar esos gastos. ¿Cuánto hay que vender para no perder? (Pista: 30 ÷ 0,40)",
  "opciones": [
   {
    "t": "$12 M",
    "porque": "Multiplicaste 30 × 0,40; hay que dividir."
   },
   {
    "t": "$42 M",
    "porque": "Le sumaste 40 % a los gastos fijos."
   },
   {
    "t": "$50 M",
    "porque": "Dividiste entre 0,60; se divide entre lo que te queda (0,40)."
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
  "enunciado": "¿Qué es analizar la \"sensibilidad\" de un proyecto?",
  "opciones": [
   {
    "t": "Preguntarles a los clientes si les gusta el producto",
    "porque": "Eso es estudio de mercado."
   },
   {
    "t": "Cambiar todas las cifras al tiempo",
    "porque": "Eso es armar escenarios."
   },
   {
    "t": "Cambiar UNA cifra a la vez (precio, ventas o costos) y ver cuánto cambia la ganancia"
   },
   {
    "t": "Repetir las cuentas para ver si están bien",
    "porque": "Eso es revisar, no medir el riesgo."
   }
  ],
  "correcta": 2,
  "explicacion": "Así se descubre de qué cifra depende más el resultado."
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
  "enunciado": "En pesos de hoy, el negocio gana $60 M. Cada 1 % que baja el precio, esa ganancia baja $5 M. ¿Cuánto puede bajar el precio antes de que la ganancia llegue a 0?",
  "opciones": [
   {
    "t": "300 %",
    "porque": "Multiplicaste 60 × 5; hay que dividir."
   },
   {
    "t": "60 %",
    "porque": "Esa es la ganancia, no la caída en %."
   },
   {
    "t": "5 %",
    "porque": "Eso es lo que baja la ganancia por cada 1 %, no la caída máxima."
   },
   {
    "t": "12 %"
   }
  ],
  "correcta": 3,
  "explicacion": "60 ÷ 5 = 12 %. Si el precio baja más de 12 %, el negocio pierde.",
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
  "tiempo": 75,
  "leccion": "escenarios",
  "tipo": "calculo",
  "enunciado": "Tres futuros: malo, pierdes $20 M (25 % de probabilidad); normal, ganas $20 M (50 %); bueno, ganas $40 M (25 %). Multiplica cada resultado por su probabilidad y suma. ¿Cuánto se espera ganar?",
  "opciones": [
   {
    "t": "$13,3 M",
    "porque": "Promediaste los tres sin tener en cuenta las probabilidades."
   },
   {
    "t": "$15 M"
   },
   {
    "t": "$40 M",
    "porque": "Sumaste los tres resultados sin multiplicar por la probabilidad."
   },
   {
    "t": "$10 M",
    "porque": "Solo tomaste el futuro normal (20 × 50 %)."
   }
  ],
  "correcta": 1,
  "explicacion": "−20 × 0,25 + 20 × 0,5 + 40 × 0,25 = −5 + 10 + 10 = $15 M.",
  "calc": {
   "formula": "esperado",
   "datos": {
    "valores": [
     -20,
     20,
     40
    ],
    "probs": [
     0.25,
     0.5,
     0.25
    ]
   }
  },
  "unidad": "M",
  "dec": 1,
  "valor": 15
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
  "enunciado": "Si cada cifra sube 10 % (una a la vez), la ganancia cambia así: precio, +$50 M; materia prima, −$20 M; inversión, −$10 M. ¿Qué cifra hay que estimar con más cuidado?",
  "opciones": [
   {
    "t": "La materia prima",
    "porque": "Mueve 20, menos que el precio (50)."
   },
   {
    "t": "La inversión",
    "porque": "Es la que MENOS mueve la ganancia (10)."
   },
   {
    "t": "Todas por igual",
    "porque": "Con el mismo 10 % de cambio, cada una mueve la ganancia distinto."
   },
   {
    "t": "El precio: es la que más mueve la ganancia"
   }
  ],
  "correcta": 3,
  "explicacion": "La cifra que más mueve el resultado es la más delicada: hay que estimarla con mucho cuidado."
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
  "enunciado": "Las cuentas dicen que el negocio gana $40 M. ¿Para qué probar qué pasa si algo sale mal?",
  "opciones": [
   {
    "t": "Para que dé más ganancia",
    "porque": "Probar no cambia la ganancia: muestra qué tan frágil es."
   },
   {
    "t": "Porque son estimaciones: si cambian el precio, las ventas o los costos, la ganancia podría volverse pérdida"
   },
   {
    "t": "No hace falta: si dio ganancia, está garantizada",
    "porque": "Las cifras son estimaciones que pueden fallar."
   },
   {
    "t": "Solo porque lo pide el banco",
    "porque": "Lo necesita cualquiera que vaya a decidir."
   }
  ],
  "correcta": 1,
  "explicacion": "Una ganancia que depende de cifras frágiles puede ser una mala apuesta."
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
  "enunciado": "¿En qué se diferencian el análisis de sensibilidad y el de escenarios?",
  "opciones": [
   {
    "t": "Sensibilidad mueve una cifra a la vez; escenarios mueve varias juntas (futuro malo, normal, bueno)"
   },
   {
    "t": "Sensibilidad mueve varias y escenarios una",
    "porque": "Es al revés."
   },
   {
    "t": "Son lo mismo",
    "porque": "Uno mueve una sola cifra y el otro combina varias."
   },
   {
    "t": "Los escenarios solo sirven para el precio",
    "porque": "Pueden combinar cualquier cifra."
   }
  ],
  "correcta": 0,
  "explicacion": "Malo, normal y bueno son combinaciones de varias cifras a la vez."
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
  "enunciado": "Pones $100 M en un negocio y en un año te devuelve $120 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más?",
  "opciones": [
   {
    "t": "El negocio gana más: ¡conviene!"
   },
   {
    "t": "Dan lo mismo: da igual"
   },
   {
    "t": "La opción segura gana más: no conviene"
   }
  ],
  "correcta": 0,
  "flujos": [
   -100,
   120
  ],
  "tasa": 0.1,
  "valor": 9.09090909090908,
  "explicacion": "La opción segura te daría $110 M; el negocio, $120 M: el negocio gana más."
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
  "enunciado": "Pones $100 M en un negocio y en un año te devuelve $115 M. Si en cambio dejas esa plata en una opción segura que paga 20 % al año, ¿qué gana más?",
  "opciones": [
   {
    "t": "El negocio gana más: ¡conviene!"
   },
   {
    "t": "Dan lo mismo: da igual"
   },
   {
    "t": "La opción segura gana más: no conviene"
   }
  ],
  "correcta": 2,
  "flujos": [
   -100,
   115
  ],
  "tasa": 0.2,
  "valor": -4.166666666666657,
  "explicacion": "La opción segura te daría $120 M; el negocio, $115 M: la opción segura gana más."
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
  "enunciado": "Pones $100 M en un negocio y en un año te devuelve $110 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más?",
  "opciones": [
   {
    "t": "El negocio gana más: ¡conviene!"
   },
   {
    "t": "Dan lo mismo: da igual"
   },
   {
    "t": "La opción segura gana más: no conviene"
   }
  ],
  "correcta": 1,
  "flujos": [
   -100,
   110
  ],
  "tasa": 0.1,
  "valor": -1.4210854715202004e-14,
  "explicacion": "La opción segura te daría $110 M; el negocio, $110 M: dan lo mismo."
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
  "enunciado": "Pones $200 M en un negocio y en un año te devuelve $230 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más?",
  "opciones": [
   {
    "t": "El negocio gana más: ¡conviene!"
   },
   {
    "t": "Dan lo mismo: da igual"
   },
   {
    "t": "La opción segura gana más: no conviene"
   }
  ],
  "correcta": 0,
  "flujos": [
   -200,
   230
  ],
  "tasa": 0.1,
  "valor": 9.090909090909065,
  "explicacion": "La opción segura te daría $220 M; el negocio, $230 M: el negocio gana más."
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
  "enunciado": "Pones $50 M en un negocio y en un año te devuelve $60 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más?",
  "opciones": [
   {
    "t": "El negocio gana más: ¡conviene!"
   },
   {
    "t": "Dan lo mismo: da igual"
   },
   {
    "t": "La opción segura gana más: no conviene"
   }
  ],
  "correcta": 0,
  "flujos": [
   -50,
   60
  ],
  "tasa": 0.1,
  "valor": 4.54545454545454,
  "explicacion": "La opción segura te daría $55 M; el negocio, $60 M: el negocio gana más."
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
  "enunciado": "Pones $200 M en un negocio y en un año te devuelve $210 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más?",
  "opciones": [
   {
    "t": "El negocio gana más: ¡conviene!"
   },
   {
    "t": "Dan lo mismo: da igual"
   },
   {
    "t": "La opción segura gana más: no conviene"
   }
  ],
  "correcta": 2,
  "flujos": [
   -200,
   210
  ],
  "tasa": 0.1,
  "valor": -9.090909090909093,
  "explicacion": "La opción segura te daría $220 M; el negocio, $210 M: la opción segura gana más."
 }
];
export const MG_ENTRA = [
 {
  "t": "Comprar la maquinaria",
  "entra": true,
  "porque": "Es plata que sale al inicio."
 },
 {
  "t": "El desgaste de la máquina, como si fuera plata que sale",
  "entra": false,
  "porque": "No sale plata: la máquina ya se pagó."
 },
 {
  "t": "Un estudio que ya se pagó y no se devuelve",
  "entra": false,
  "porque": "Ya se gastó, hagan o no el proyecto."
 },
 {
  "t": "La plata para arrancar (mercancía y caja)",
  "entra": true,
  "porque": "Sale al inicio y vuelve al final."
 },
 {
  "t": "Lo que reciben al vender la máquina usada al final",
  "entra": true,
  "porque": "Es plata que entra el último año."
 },
 {
  "t": "Los impuestos",
  "entra": true,
  "porque": "Es plata que sale de verdad."
 },
 {
  "t": "El arriendo que dejan de recibir por usar su propio lote",
  "entra": true,
  "porque": "Es plata que dejan de ganar."
 },
 {
  "t": "Lo que la competencia gastó en publicidad",
  "entra": false,
  "porque": "No es plata de su proyecto."
 },
 {
  "t": "Las ventas del año",
  "entra": true,
  "porque": "Es plata que entra."
 },
 {
  "t": "El sueldo del administrador",
  "entra": true,
  "porque": "Es plata que sale cada mes."
 }
];
export const MG_CARRERA = [
 {
  "t": "El negocio gana más que tu mínimo exigido",
  "a": "Conviene",
  "b": "No conviene",
  "ok": 0
 },
 {
  "t": "Rinde 12 % al año y tú exiges 15 %",
  "a": "Conviene",
  "b": "No conviene",
  "ok": 1
 },
 {
  "t": "Devuelve $1,30 por cada $1 que cuesta",
  "a": "Conviene",
  "b": "No conviene",
  "ok": 0
 },
 {
  "t": "$110 M dentro de un año, si tu plata gana 10 %: ¿cuánto valen hoy?",
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
  "t": "¿Qué vale más: un peso hoy o un peso dentro de un año?",
  "a": "Hoy",
  "b": "En un año",
  "ok": 0
 },
 {
  "t": "En pesos de hoy el negocio queda en $0",
  "a": "Gana justo tu mínimo",
  "b": "Pierde todo",
  "ok": 0
 },
 {
  "t": "Solo puedes hacer uno: ¿el de % más alto o el que deja más plata?",
  "a": "Más %",
  "b": "Más plata",
  "ok": 1
 },
 {
  "t": "Devuelve $0,80 por cada $1 que cuesta",
  "a": "Gana",
  "b": "Pierde",
  "ok": 1
 },
 {
  "t": "$100 M que ganan 20 % en un año: ¿cuánto tienes?",
  "a": "$120 M",
  "b": "$80 M",
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
  "t": "El tiempo de recuperación dice…",
  "a": "Cuánto gana",
  "b": "Qué tan rápido vuelve la plata",
  "ok": 1
 }
];
export const MG_TERMOMETRO = [
 {
  "id": "T1",
  "enunciado": "Con un precio de $10.000 el negocio gana $120 M. Por cada $1.000 que baja el precio, la ganancia baja $40 M. ¿Con qué precio la ganancia llega a 0?",
  "base": 10000,
  "vpnBase": 120,
  "porPaso": 40,
  "paso": -1000,
  "min": 5000,
  "max": 10000,
  "salto": 250,
  "unidad": "$",
  "explicacion": "120 ÷ 40 = 3 bajadas de $1.000. Precio límite: $7.000. Por debajo de eso, el negocio pierde.",
  "respuesta": 7000
 },
 {
  "id": "T2",
  "enunciado": "Vendiendo 1.000 unidades el negocio gana $90 M. Por cada 100 unidades menos, la ganancia baja $15 M. ¿Con cuántas unidades la ganancia llega a 0?",
  "base": 1000,
  "vpnBase": 90,
  "porPaso": 15,
  "paso": -100,
  "min": 0,
  "max": 1000,
  "salto": 50,
  "unidad": "u",
  "explicacion": "90 ÷ 15 = 6 bajadas de 100. Límite: 400 unidades.",
  "respuesta": 400
 },
 {
  "id": "T3",
  "enunciado": "Si hacer cada unidad cuesta $4.000, el negocio gana $50 M. Por cada $500 que sube ese costo, la ganancia baja $10 M. ¿Con qué costo la ganancia llega a 0?",
  "base": 4000,
  "vpnBase": 50,
  "porPaso": 10,
  "paso": 500,
  "min": 4000,
  "max": 9000,
  "salto": 250,
  "unidad": "$",
  "explicacion": "50 ÷ 10 = 5 subidas de $500. Costo límite: $6.500. Por encima de eso, el negocio pierde.",
  "respuesta": 6500
 }
];
export const MG_ORDENA = [
 {
  "id": "O1",
  "titulo": "Ordena las cuentas de un año",
  "pasos": [
   "Ventas",
   "− Gastos",
   "= Ganancia antes de impuestos",
   "− Impuestos",
   "= Plata que queda en el bolsillo"
  ]
 },
 {
  "id": "O2",
  "titulo": "Ordena los pasos para decidir si un negocio conviene",
  "pasos": [
   "Reunir las cifras (costos, ventas, años)",
   "Calcular la plata que entra y sale cada año",
   "Pasar todo a pesos de hoy",
   "Ver si gana más que el mínimo exigido",
   "Probar qué pasa si algo sale mal",
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
  "pregunta": "Hay $400 M y solo se puede aprobar UNO. ¿Cuál aprueba la Junta?",
  "correcto": "P1",
  "justificaciones": [
   {
    "t": "Es el que deja más plata en pesos de hoy",
    "ok": true
   },
   {
    "t": "Es el que rinde el porcentaje más alto",
    "porque": "Ese es P2, pero es pequeño: deja menos plata ($38,8 M contra $97,4 M)."
   },
   {
    "t": "Es el que recupera la plata más rápido",
    "porque": "Ese es P3, y en pesos de hoy pierde plata."
   }
  ]
 },
 "fase2": {
  "pregunta": "¡Giro! El banco recortó el presupuesto: solo hay $100 M. ¿Cuál aprueba ahora la Junta?",
  "correcto": "P2",
  "justificaciones": [
   {
    "t": "Es el único que cabe y además gana plata en pesos de hoy",
    "ok": true
   },
   {
    "t": "Cabe y recupera la plata en menos de un año",
    "porque": "Ese es P3: cabe, pero en pesos de hoy pierde plata."
   },
   {
    "t": "Ninguno sirve, porque P1 ya no cabe",
    "porque": "P2 cabe y gana plata."
   }
  ]
 },
 "giroAlterno": "Plan B del presentador: \"¡Ahora la Junta exige ganar mínimo 25 % al año!\" P1 rinde 23 % (no alcanza) y P2 rinde 38 % (sí alcanza) → P2."
};
