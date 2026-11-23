# Banco de preguntas — Expedición VPN

> Archivo generado por `node tools/generar-banco.mjs`. Las respuestas numéricas las calcula el código y las verifica `node tools/verificar.mjs`. Cifras en millones de pesos ($ M) salvo que se indique otra cosa.

**Total:** 59 preguntas de zona/duelo, 6 chequeos de estrella, 25 ítems de mini-juegos y el jefe final.

## Mini-lecciones (máx. 30 s cada una)

- **para_que** (48 palabras): Evaluar un proyecto es responder una sola pregunta: ¿vale la pena meterle plata? Para saberlo se compara lo que cuesta montarlo con lo que va a devolver. Y como un peso hoy vale más que un peso dentro de un año, todo se compara en pesos de hoy.
- **insumos** (41 palabras): Para evaluar un negocio se necesitan unas cifras básicas: cuánto cuesta montarlo, cuánto va a vender, cuánto gasta cada año, cuánto paga de impuestos y cuántos años se van a mirar. Si una de esas cifras está mal, la decisión también.
- **depreciacion** (44 palabras): Las máquinas se desgastan. Ese desgaste (depreciación) reparte el costo de la máquina entre los años que dura: costo ÷ años. No es plata que sale del bolsillo, porque la máquina se pagó al comprarla. Solo sirve para pagar un poco menos de impuesto.
- **impuestos** (34 palabras): El impuesto no se cobra sobre todo lo que vendes, sino sobre lo que ganas: ventas menos gastos. Si vendes 100 y gastas 60, ganas 40, y el impuesto se calcula sobre esos 40.
- **capital_trabajo** (37 palabras): Para abrir el primer día hay que tener mercancía, materia prima y algo de efectivo en caja. Esa plata para arrancar (capital de trabajo) se pone al inicio y se recupera al final, cuando el negocio termina.
- **salvamento** (21 palabras): Cuando el proyecto termina, las máquinas usadas todavía se pueden vender. Esa plata (valor de salvamento) entra en el último año.
- **flujo_estructura** (42 palabras): El flujo de caja es la plata que de verdad entra y sale del negocio cada año. Entran las ventas. Salen los gastos, los impuestos y lo que se invierte. Lo que queda es lo que el negocio deja en el bolsillo.
- **flujo_relevante** (39 palabras): Pregunta clave para cada cifra: ¿esto cambia si hago el proyecto? Lo que ya se gastó y no se recupera no cuenta. Lo que dejas de ganar por usar algo tuyo, como un local que podrías arrendar, sí cuenta.
- **valor_tiempo** (49 palabras): Un peso hoy vale más que un peso dentro de un año, porque hoy lo puedes poner a ganar. Si una inversión segura paga 10 % al año, $100 de hoy serán $110 en un año. Al revés: $110 dentro de un año valen $100 hoy (110 ÷ 1,1).
- **tmar** (37 palabras): Antes de invertir, cada quien decide lo mínimo que quiere ganar al año, por ejemplo lo que le pagaría una inversión segura. Ese mínimo se llama TMAR. Si un negocio no lo alcanza, no vale la pena.
- **vpn** (42 palabras): Para saber si un negocio conviene: pasa a pesos de hoy lo que va a devolver y réstale lo que cuesta. Si queda positivo, gana más que lo mínimo que pedías: conviene. Si queda negativo, no conviene. Ese resultado se llama VPN.
- **tir** (31 palabras): La rentabilidad de un negocio (TIR) es cuánto gana en % por año. Se compara con lo mínimo que quieres ganar: si el negocio rinde más, conviene; si rinde menos, no.
- **bc** (33 palabras): La relación beneficio/costo (B/C) dice cuántos pesos devuelve el negocio por cada peso que cuesta, todo en pesos de hoy. Más de 1: devuelve más de lo que cuesta. Menos de 1: pierde.
- **pr** (30 palabras): El periodo de recuperación es cuánto tarda el negocio en devolver la plata invertida. Dice qué tan rápido vuelve la plata, pero no si el negocio gana mucho o poco.
- **criterios** (32 palabras): Si solo puedes escoger un negocio, escoge el que deja más plata en pesos de hoy. Un porcentaje alto sobre poca plata puede dejar menos que un porcentaje menor sobre mucha plata.
- **restriccion** (32 palabras): Si tienes poco presupuesto y varios negocios que se pueden combinar, busca la combinación que quepa y sume más ganancia en total. A veces dos negocios pequeños dejan más que uno grande.
- **sensibilidad** (41 palabras): Las cifras de un proyecto son estimaciones. Por eso se prueba qué pasa si algo sale distinto: si el precio baja, si se vende menos, si los costos suben. Mover una sola cifra a la vez se llama análisis de sensibilidad.
- **escenarios** (29 palabras): Otra forma de medir el riesgo es imaginar tres futuros: uno malo, uno normal y uno bueno, cambiando varias cifras a la vez. Eso es el análisis de escenarios.
- **equilibrio** (35 palabras): El punto de equilibrio es cuánto hay que vender para no ganar ni perder. Cada unidad vendida deja algo (precio menos lo que cuesta hacerla). Hay que vender las suficientes para pagar los gastos fijos.

## A · ¿Para qué se evalúa?

### A01 · Concepto · 45 s · uso: desafio, salida

Un amigo quiere abrir una tienda de café y te pide ayuda con la "evaluación financiera". ¿Qué pregunta responde esa evaluación?

- A) Qué nombre ponerle a la tienda — _Eso es mercadeo, no evaluación financiera._
- B) De qué banco sacar el préstamo — _Eso es cómo conseguir la plata. Primero hay que saber si el negocio vale la pena._
- C) Cuántos empleados contratar — _Ese es un dato de la operación; la evaluación lo usa para decidir si conviene invertir._
- **D) Si vale la pena meterle plata al negocio** ✅

**Explicación:** La evaluación financiera existe para decidir si se invierte. Todo lo demás del juego sirve para tomar esa decisión con buenos argumentos.

### A02 · Concepto · 45 s · uso: desafio

La evaluación financiera mira el proyecto con los ojos de una persona. ¿De quién?

- A) Del gobierno — _El gobierno cobra impuestos, pero no invierte en el proyecto._
- **B) De quien pone la plata y quiere saber si le conviene** ✅
- C) De la competencia — _A la competencia no le interesa si tu negocio conviene._
- D) Del cliente que compra el producto — _El cliente no pone la plata del proyecto._

**Explicación:** Se evalúa desde quien invierte: ¿mi plata va a ganar al menos lo que espero?

### A03 · Concepto · 45 s · uso: desafio

Para decidir si un negocio conviene, ¿qué se compara?

- **A) Lo que cuesta montarlo contra lo que va a devolver, todo en pesos de hoy** ✅
- B) Lo que venden los competidores — _Eso ayuda a estimar las ventas, pero no decide si conviene invertir._
- C) Solo las ventas del primer mes — _Un mes no muestra toda la vida del negocio._
- D) Cuánto cuesta la decoración — _Es solo uno de los costos._

**Explicación:** Lo que entra contra lo que sale, y todo llevado a la misma fecha: hoy.

## B · Las cifras del negocio (insumos)

### B01 · Cálculo · 60 s · uso: desafio, duelo

Una tostadora cuesta $50 M y dura 5 años. Su desgaste se reparte igual cada año: costo ÷ años. ¿Cuánto se desgasta por año?

- A) $250 M — _Multiplicaste por los años; hay que dividir._
- **B) $10 M** ✅
- C) $50 M — _Ese es el costo total, no lo de un año._
- D) $12,5 M — _Dividiste entre 4; la tostadora dura 5 años._

**Explicación:** 50 ÷ 5 = $10 M por año.

### B02 · Cálculo · 60 s · uso: desafio, duelo

Un camión cuesta $90 M, dura 4 años y al final se vende usado en $10 M. El desgaste por año es (costo − lo que se vende al final) ÷ años. ¿Cuánto da?

- **A) $20 M** ✅
- B) $80 M — _Ese es el total; falta dividir entre los 4 años._
- C) $22,5 M — _No le restaste los $10 M de la venta final._
- D) $25 M — _Sumaste los $10 M en vez de restarlos._

**Explicación:** (90 − 10) ÷ 4 = $20 M por año.

### B03 · Cálculo · 60 s · uso: desafio, duelo

En un año la cafetería vendió $100 M y gastó $60 M. El impuesto es el 30 % de lo que ganó (ventas − gastos). ¿Cuánto paga de impuesto?

- A) $30 M — _Calculaste el 30 % de las ventas; es sobre lo que ganó (40)._
- **B) $12 M** ✅
- C) $28 M — _Eso es lo que queda después de pagar el impuesto (40 − 12)._
- D) $18 M — _Calculaste el 30 % de los gastos._

**Explicación:** Ganó 100 − 60 = 40. Impuesto = 30 % de 40 = $12 M.

### B04 · Concepto · 45 s · uso: desafio

¿Cuál de estas cosas se paga UNA sola vez, al montar el negocio, y no cada año?

- A) Los sueldos de los baristas — _Se pagan cada mes._
- **B) Comprar la máquina empacadora** ✅
- C) Los servicios públicos — _Llegan cada mes._
- D) El arriendo del local — _Se paga cada mes, todos los años._

**Explicación:** Lo que se compra al inicio para montar el negocio es la inversión. Lo que se paga cada año son los gastos de operación.

### B05 · Concepto · 45 s · uso: desafio

Una panadería necesita $10 M en harina, empaques y efectivo en caja para poder abrir. Cuando el negocio termina, esa plata se recupera. ¿Cuándo sale y cuándo vuelve?

- A) Sale cada año y no vuelve — _Se pone una vez, al inicio, y al final se recupera._
- B) Sale al final — _Se necesita desde el primer día._
- **C) Sale al inicio y vuelve al final** ✅
- D) No sale nunca — _Sí sale: sin esa plata no se puede abrir._

**Explicación:** Esa plata para arrancar (capital de trabajo) sale al inicio y vuelve al final.

### B06 · Concepto · 45 s · uso: desafio

Al terminar el proyecto, la tostadora usada se vende en $8 M. ¿Cómo cuenta esa plata?

- A) Como plata que entra el primer año — _Se recibe al final, cuando se vende._
- B) Como plata que sale — _Vender algo trae plata, no la saca._
- **C) Como plata que entra en el último año** ✅
- D) No cuenta, porque la máquina es vieja — _Aunque sea vieja, si se vende, esa plata entra._

**Explicación:** Lo que se recibe al vender lo usado (valor de salvamento) entra en el último año.

### B07 · Concepto · 45 s · uso: desafio

La depreciación es el desgaste de la máquina, repartido por años. ¿Sale plata del bolsillo cada año por ese desgaste?

- A) Sí: cada año se vuelve a pagar la máquina — _La máquina se pagó una sola vez, al comprarla._
- **B) No: la máquina se pagó al comprarla; el desgaste es solo una cuenta** ✅
- C) Sí: se le paga al banco — _El desgaste no tiene que ver con el banco._
- D) Solo si la máquina se daña — _Una reparación sí es un gasto, pero eso no es la depreciación._

**Explicación:** La depreciación no saca plata. Solo sirve para pagar un poco menos de impuesto, porque la ley deja restarla.

### B08 · Cálculo · 60 s · uso: desafio, duelo

Para montar la cafetería hay que comprar máquinas por $60 M, arreglar el local por $25 M y tener $15 M para arrancar (mercancía y caja). ¿Cuánto hay que invertir al inicio?

- A) $40 M — _Te faltaron las máquinas._
- B) $85 M — _Olvidaste la plata para arrancar ($15 M)._
- **C) $100 M** ✅
- D) $75 M — _Olvidaste el arreglo del local._

**Explicación:** 60 + 25 + 15 = $100 M.

### B09 · Concepto · 45 s · uso: desafio

En evaluación de proyectos, el "horizonte" es…

- A) La vista que tiene el local — _¡No! Aquí es cuántos años se proyectan las cuentas._
- **B) El número de años que se van a mirar en las cuentas (por ejemplo, 5 años)** ✅
- C) El tiempo que tarda en volver la plata — _Eso es el periodo de recuperación._
- D) La fecha en que abre el negocio — _Eso es el inicio, no cuántos años se miran._

**Explicación:** El horizonte es cuántos años se miran. Suele ser lo que duran las máquinas o el negocio.

## C · La plata que entra y sale (flujo de caja)

### C01 · Cálculo · 60 s · uso: desafio, duelo

En el año 2 la tienda vendió $200 M, gastó $80 M y pagó $30 M de impuestos. ¿Cuánta plata le quedó en el bolsillo ese año?

- **A) $90 M** ✅
- B) $170 M — _No restaste los gastos._
- C) $120 M — _No restaste los impuestos._
- D) $310 M — _Sumaste todo; los gastos y los impuestos se restan._

**Explicación:** 200 − 80 − 30 = $90 M. Esa es la plata que de verdad quedó (el flujo de caja del año).

### C02 · Cálculo · 60 s · uso: desafio, duelo

Para arrancar hay que comprar máquinas por $100 M y tener $20 M para operar. El mes pasado ya pagaron $10 M por un estudio que no se devuelve. ¿Cuánta plata hay que poner AHORA si deciden hacer el proyecto?

- A) $100 M — _Olvidaste la plata para operar._
- **B) $120 M** ✅
- C) $130 M — _Sumaste el estudio: ya se pagó, hagan o no el proyecto._
- D) $110 M — _Sumaste el estudio y olvidaste la plata para operar._

**Explicación:** 100 + 20 = $120 M. El estudio ya se pagó y no cambia con la decisión.

### C03 · Cálculo · 60 s · uso: desafio, duelo

Último año: la operación deja $50 M. Además recuperan los $20 M que tenían para operar y venden la maquinaria usada en $10 M. ¿Cuánta plata entra en total ese año?

- A) $70 M — _Olvidaste la venta de la maquinaria._
- **B) $80 M** ✅
- C) $50 M — _Olvidaste lo que se recupera y lo que se vende al final._
- D) $60 M — _Olvidaste recuperar los $20 M para operar._

**Explicación:** 50 + 20 + 10 = $80 M. El último año devuelve la plata para operar y lo que se vende.

### C04 · Concepto · 60 s · uso: desafio, caza

Caza el error. Ventas 100 − gastos 40 = 60 de ganancia. Impuesto: 30 % de las VENTAS = 30. Queda: 60 − 30 = 30. ¿Qué está mal?

- A) Los gastos no se restan — _Sí se restan: es plata que sale._
- B) Nada, está bien — _El impuesto se calculó sobre las ventas, y va sobre la ganancia._
- C) Faltó sumar el impuesto — _El impuesto es plata que sale: se resta._
- **D) El impuesto va sobre la ganancia (30 % de 60 = 18): quedan 42** ✅

**Explicación:** El impuesto se calcula sobre lo que se gana, no sobre lo que se vende: 60 − 18 = 42.

### C05 · Concepto · 45 s · uso: desafio

Hace dos meses pagaron $5 M por un estudio de mercado. Esa plata no se recupera, hagan o no el proyecto. ¿Se cuenta al decidir?

- **A) No: ya se gastó y no cambia con la decisión** ✅
- B) Sí, repartida en los años — _No es un gasto futuro del proyecto._
- C) Solo si el proyecto sale bien — _Lo ya gastado no cuenta en ningún caso._
- D) Sí, al inicio del proyecto — _Esa plata ya se fue, decidan lo que decidan._

**Explicación:** Lo que ya se gastó y no se recupera (costo hundido) no cuenta. Pregunta clave: ¿esto cambia si hago el proyecto?

### C06 · Concepto · 45 s · uso: desafio

El proyecto usará un lote de la familia que hoy podrían arrendar en $10 M al año. ¿Se cuenta algo?

- **A) Sí: los $10 M al año que dejan de recibir por el arriendo** ✅
- B) Sí, como un ingreso de $10 M al año — _El proyecto no recibe ese arriendo: lo deja de recibir._
- C) No, porque el lote ya es de la familia — _Al usarlo, dejan de recibir el arriendo: eso es un costo real._
- D) Sí, el precio total del lote — _No lo van a comprar: lo que se pierde es el arriendo._

**Explicación:** Lo que dejas de ganar por usar algo tuyo (costo de oportunidad) sí cuenta.

### C07 · Concepto · 45 s · uso: desafio

El flujo de caja es la plata que de verdad entra y sale. ¿Cuál de estas NO es plata que entre o salga?

- A) Las ventas — _Entra plata._
- **B) El desgaste de la máquina (depreciación)** ✅
- C) El pago del arriendo — _Sale plata cada mes._
- D) El pago de impuestos — _Sale plata._

**Explicación:** El desgaste es una cuenta, no un pago: la máquina se pagó al comprarla.

### C08 · Concepto · 45 s · uso: desafio

¿Qué es el flujo de caja de un año?

- **A) La plata que de verdad entra menos la que de verdad sale ese año** ✅
- B) La lista de clientes del año — _Los clientes generan ventas, pero el flujo es plata que entra y sale._
- C) Solo las ventas — _Faltan las salidas: gastos, impuestos e inversiones._
- D) Todo lo que se gastó en publicidad — _Es solo una de las salidas._

**Explicación:** Entradas menos salidas reales de plata: eso es lo que el negocio deja en el bolsillo.

### C09 · Cálculo · 60 s · uso: desafio, duelo

Año 1: ventas $150 M y gastos $50 M. El impuesto es el 25 % de lo que se gana (ventas − gastos). ¿Cuánta plata queda después de pagar el impuesto?

- A) $25 M — _Ese es el impuesto, no lo que queda._
- B) $62,5 M — _Calculaste el impuesto sobre las ventas (25 % de 150)._
- **C) $75 M** ✅
- D) $100 M — _No restaste el impuesto._

**Explicación:** Se gana 150 − 50 = 100. Impuesto = 25. Quedan $75 M.

### C10 · Concepto · 60 s · uso: caza

Caza el error. Al inicio: máquina −100 y plata para operar −20. Años 1, 2 y 3: la operación deja +50. Último año: + venta de la máquina 10 → total del año 3 = 60. ¿Qué falta?

- **A) Recuperar los 20 para operar en el año 3: el total es 80** ✅
- B) No falta nada — _La plata para operar que se puso al inicio vuelve al final._
- C) Restar el desgaste de la máquina — _El desgaste no es plata que sale._
- D) Sumar los 20 en el año 1 — _Se recuperan al final, no al inicio._

**Explicación:** Si se olvida recuperar la plata para operar, el proyecto parece peor de lo que es.

### C11 · Concepto · 60 s · uso: caza

Caza el error. Para decidir si abren una heladería suman: máquinas 40 + plata para operar 10 + el estudio de mercado que pagaron el año pasado 5 = 55 de inversión. ¿Qué está mal?

- A) Faltó sumar el arriendo de todos los años — _El arriendo se paga cada año; no es parte de la inversión inicial._
- B) Nada, está bien — _Lo que ya se gastó y no se recupera no cambia con la decisión._
- **C) El estudio ya pagado no cuenta: la inversión es 50** ✅
- D) La plata para operar no cuenta — _Sí cuenta: hay que ponerla para poder abrir._

**Explicación:** Solo cuenta lo que cambia por hacer el proyecto: 40 + 10 = 50.

## D · El valor del tiempo

### D01 · Cálculo · 45 s · uso: desafio, duelo

Pones $100 M en una inversión segura que paga 10 % al año. ¿Cuánto tendrás dentro de un año?

- A) $10 M — _Esa es solo la ganancia; hay que sumarla a los 100._
- B) $90 M — _Restaste el 10 %; hay que sumarlo._
- **C) $110 M** ✅
- D) $100 M — _Te faltó sumar lo que ganas._

**Explicación:** 100 + 10 % = $110 M.

### D02 · Cálculo · 60 s · uso: desafio, duelo

Te prometen $110 M dentro de un año. Tu plata podría ganar 10 % al año en otra parte. ¿Cuánto valen hoy esos $110 M? (Pista: 110 ÷ 1,1)

- A) $11 M — _Ese es el 10 %; hay que dividir 110 entre 1,1._
- **B) $100 M** ✅
- C) $110 M — _No los pasaste a pesos de hoy: la plata del futuro vale menos hoy._
- D) $121 M — _Multiplicaste por 1,1; hay que dividir._

**Explicación:** 110 ÷ 1,1 = $100 M. Pasar plata del futuro a pesos de hoy se llama "descontar".

### D03 · Concepto · 45 s · uso: desafio

¿Por qué $1 M hoy vale más que $1 M dentro de un año?

- A) Porque el banco cobra cuota de manejo — _Eso no explica por qué la plata de hoy vale más._
- **B) Porque si lo tengo hoy lo puedo poner a ganar** ✅
- C) Porque los billetes se desgastan — _No es algo físico: es lo que la plata puede ganar mientras tanto._
- D) No es cierto: valen lo mismo — _Si la tienes antes, la puedes poner a ganar._

**Explicación:** Esperar tiene un costo: lo que dejas de ganar. Por eso la plata del futuro vale menos hoy.

### D04 · Concepto · 45 s · uso: desafio

Laura no le mete plata a ningún negocio que gane menos de 12 % al año, porque eso le paga un CDT seguro. ¿Qué es ese 12 %?

- **A) Lo mínimo que ella exige ganar (en evaluación se llama TMAR)** ✅
- B) Un impuesto — _No es un impuesto: es su exigencia mínima._
- C) Lo que gana el negocio — _Eso se calcula después; el 12 % es lo que ella exige._
- D) Lo que cobra el banco por un préstamo — _Es lo que ella quiere ganar, no lo que paga._

**Explicación:** Ese mínimo exigido es la vara con la que se mide el negocio: si no lo alcanza, mejor el CDT.

### D05 · Cálculo · 60 s · uso: desafio, duelo

Recibirás $200 M dentro de un año. Tu plata podría ganar 25 % al año en otra parte. ¿Cuánto valen hoy? (Pista: 200 ÷ 1,25)

- A) $150 M — _Le restaste el 25 %; hay que dividir entre 1,25._
- **B) $160 M** ✅
- C) $200 M — _No los pasaste a pesos de hoy._
- D) $250 M — _Multiplicaste; hay que dividir._

**Explicación:** 200 ÷ 1,25 = $160 M.

### D06 · Concepto · 45 s · uso: desafio

Opción 1: $100 M hoy. Opción 2: $105 M dentro de un año. Tu plata puede ganar 10 % al año. ¿Cuál conviene?

- A) No se puede saber — _Sí se puede: compara lo que tendrías en un año con cada opción._
- B) La de un año: es más plata — _Si recibes 100 hoy y los pones a ganar 10 %, en un año tienes 110, más que 105._
- C) Da igual — _Daría igual si te ofrecieran $110 M en un año._
- **D) La de hoy: puestos a ganar, en un año serían $110 M** ✅

**Explicación:** 100 + 10 % = 110, que es más que 105. Mejor la plata hoy.

### D07 · Concepto · 45 s · uso: desafio

Opción 1: $100 M hoy. Opción 2: $125 M dentro de un año. Tu plata puede ganar 20 % al año. ¿Cuál conviene?

- A) La de hoy: la plata de hoy siempre gana — _La plata de hoy vale más, pero aquí 125 supera los 120 que tendrías._
- B) Da igual — _Daría igual con $120 M en un año._
- C) No se puede saber — _Sí se puede: 100 + 20 % = 120, y 125 es más._
- **D) La de un año: los $100 M de hoy solo llegarían a $120 M** ✅

**Explicación:** 100 + 20 % = 120 < 125. Esta vez conviene esperar.

### D08 · Cálculo · 60 s · uso: desafio, duelo

Tu plata puede ganar 10 % al año. ¿Cuánto deberían pagarte dentro de un año para que te dé lo mismo que recibir $50 M hoy?

- **A) $55 M** ✅
- B) $60 M — _Sumaste $10 M; el 10 % de 50 es 5._
- C) $50 M — _Recibir lo mismo más tarde es perder lo que podías ganar._
- D) $45,45 M — _Dividiste; aquí hay que sumar el 10 %._

**Explicación:** 50 + 10 % = $55 M.

## E · ¿Conviene? (indicadores)

### E01 · Cálculo · 60 s · uso: desafio, duelo

Un negocio cuesta $100 M hoy y devuelve $132 M en un año. Como tu plata podría ganar 10 % en otra parte, esos $132 M valen hoy $120 M. ¿Cuánto gana el negocio en pesos de hoy, después de restar lo que cuesta?

- **A) $20 M** ✅
- B) $32 M — _Restaste sin pasar a pesos de hoy: usa los $120 M._
- C) $120 M — _Te faltó restar lo que cuesta ($100 M)._
- D) $−20 M — _Restaste al revés: 120 − 100 es positivo._

**Explicación:** 120 − 100 = $20 M. Positivo: conviene. Ese resultado se llama VPN.

### E02 · Cálculo · 75 s · uso: desafio, duelo

Inviertes $100 M y recibes $150 M dentro de un año. Tu plata podría ganar 25 % en otra parte. Pasa los $150 M a pesos de hoy (÷ 1,25) y resta lo invertido. ¿Cuánto da?

- **A) $20 M** ✅
- B) $12,5 M — _Le restaste el 25 % a 150; hay que dividir entre 1,25._
- C) $120 M — _Ese es el valor hoy de lo que recibes; falta restar los $100 M._
- D) $50 M — _No pasaste los $150 M a pesos de hoy._

**Explicación:** 150 ÷ 1,25 = 120. 120 − 100 = $20 M: gana más que tu mínimo. Conviene.

### E03 · Cálculo · 60 s · uso: desafio, duelo

Inviertes $200 M y en un año recibes $250 M. ¿Qué porcentaje ganaste? (ganancia ÷ lo invertido)

- A) 20 % — _Dividiste entre 250; se divide entre lo invertido (200)._
- **B) 25 %** ✅
- C) 50 % — _Esa es la ganancia en millones, no el porcentaje._
- D) 125 % — _Dividiste 250 entre 200 sin restar lo invertido._

**Explicación:** Ganancia = 50. 50 ÷ 200 = 25 %. Ese % por año es la rentabilidad del negocio (TIR).

### E04 · Cálculo · 60 s · uso: desafio, duelo

Inviertes $50 M y en un año recibes $60 M. ¿Qué porcentaje ganaste? (ganancia ÷ lo invertido)

- **A) 20 %** ✅
- B) 120 % — _Dividiste 60 entre 50 sin restar lo invertido._
- C) 10 % — _Esa es la ganancia en millones, no el porcentaje._
- D) 16,7 % — _Dividiste la ganancia entre 60; se divide entre lo invertido (50)._

**Explicación:** Ganancia = 10. 10 ÷ 50 = 20 %.

### E05 · Concepto · 45 s · uso: desafio

Un negocio rinde 18 % al año. Tú exiges ganar mínimo 15 % al año. ¿Te conviene?

- **A) Sí: rinde más que lo mínimo que exiges** ✅
- B) Da igual — _Daría igual si rindiera exactamente 15 %._
- C) Solo si rinde más de 20 % — _Tu mínimo es 15 %, no 20 %._
- D) No: 18 % es poco — _Lo que importa es compararlo con tu mínimo, y 18 es más que 15._

**Explicación:** Comparar lo que rinde el negocio (TIR) con lo mínimo que exiges (TMAR) es una forma de decidir.

### E06 · Cálculo · 60 s · uso: desafio, duelo

En pesos de hoy, un negocio cuesta $250 M y devuelve $300 M. ¿Cuántos pesos devuelve por cada peso que cuesta? (devuelve ÷ cuesta)

- **A) 1,2** ✅
- B) 0,83 — _Dividiste al revés: es lo que devuelve ÷ lo que cuesta._
- C) 50 — _Esa es la resta (300 − 250), no la división._
- D) 0,2 — _Dividiste solo la ganancia (50 ÷ 250); falta el peso que se recupera._

**Explicación:** 300 ÷ 250 = 1,2: devuelve $1,20 por cada $1. Más de 1: conviene. Se llama relación beneficio/costo (B/C).

### E07 · Concepto · 45 s · uso: desafio

En pesos de hoy, un negocio devuelve $0,90 por cada $1 que cuesta. ¿Conviene?

- A) Sí, porque devuelve algo — _Devolver 90 centavos por cada peso es perder 10 centavos._
- B) Sí, porque está cerca de 1 — _Cerca no basta: sigue perdiendo plata._
- C) No se puede saber — _Sí se puede: si devuelve menos de $1 por cada $1, pierde._
- **D) No: devuelve menos de lo que cuesta** ✅

**Explicación:** Más de 1: gana. Menos de 1: pierde.

### E08 · Cálculo · 45 s · uso: desafio, duelo

Inviertes $90 M y el negocio deja $30 M cada año. ¿En cuántos años recuperas lo invertido?

- **A) 3 años** ✅
- B) 9 años — _Dividiste 90 entre 10; cada año deja 30._
- C) 4 años — _Al terminar el año 3 ya juntaste los $90 M._
- D) 2 años — _En 2 años solo llevas $60 M; faltan 30._

**Explicación:** 30 + 30 + 30 = 90: en 3 años vuelve la plata. Eso es el periodo de recuperación.

### E09 · Concepto · 45 s · uso: desafio

¿Qué dice el "tiempo de recuperación" de un negocio?

- A) Cuánto gana el negocio en total — _Un negocio puede recuperar rápido y ganar poco._
- **B) Qué tan rápido vuelve la plata invertida** ✅
- C) Cuántos clientes tendrá — _Eso viene del estudio de mercado._
- D) El porcentaje que rinde por año — _Eso es la rentabilidad, no el tiempo._

**Explicación:** Sirve para saber qué tan rápido vuelve la plata, no si el negocio es bueno.

### E10 · Concepto · 45 s · uso: desafio, salida

Pasando todo a pesos de hoy, un negocio queda exactamente en $0 después de restar lo que cuesta. ¿Qué significa?

- A) Pierde toda la plata — _No pierde: recupera lo invertido y gana tu mínimo._
- B) Es el mejor negocio posible — _Es apenas suficiente, no el mejor._
- **C) Gana justo lo mínimo que exigías: da lo mismo hacerlo o no** ✅
- D) No gana nada, ni siquiera el mínimo — _Sí gana: justo lo mínimo que exigías._

**Explicación:** En $0 (VPN = 0), el negocio devuelve lo invertido más justo tu mínimo exigido.

### E11 · Concepto · 45 s · uso: desafio

Un negocio rinde 8 % al año y tú exiges mínimo 10 %. ¿Qué haces?

- A) Invierto, porque 8 % es positivo — _Hay que compararlo con tu mínimo (10 %), no con cero._
- B) Invierto: algo gana — _Gana, pero menos que tu mínimo: otra opción te daría más._
- C) Da igual — _Daría igual si rindiera 10 %._
- **D) No invierto: rinde menos de lo que exijo** ✅

**Explicación:** Si el negocio rinde menos que tu mínimo, la inversión segura es mejor.

## F · Escoger entre negocios (criterios)

### F01 · Concepto · 60 s · uso: desafio, salida

Solo puedes hacer UNO de dos negocios. A deja $50 M de ganancia en pesos de hoy y rinde 20 % al año. B deja $30 M y rinde 35 % al año. ¿Cuál escoges?

- A) Los dos — _Solo se puede uno._
- B) B: tiene el porcentaje más alto — _Un % alto sobre poca plata puede dejar menos. A deja 50; B, solo 30._
- C) Ninguno — _Los dos ganan: escoge el que deja más plata._
- **D) A: deja más plata, aunque su porcentaje sea menor** ✅

**Explicación:** Cuando solo se puede uno, gana el que deja más plata en pesos de hoy (mayor VPN).

### F02 · Concepto · 45 s · uso: desafio

Solo puedes escoger una opción: ganar 50 % sobre $100 o ganar 20 % sobre $1.000. ¿Cuál deja más plata?

- A) Dejan lo mismo — _Una deja 50 y la otra 200._
- B) El 50 %: es un porcentaje más alto — _El 50 % de 100 son solo $50._
- **C) El 20 % sobre $1.000: son $200, contra $50** ✅
- D) No se puede saber — _Sí se puede: calcula cuánta plata deja cada una._

**Explicación:** Por eso, para escoger entre negocios, se mira la plata que dejan y no solo el porcentaje.

### F03 · Concepto · 45 s · uso: desafio

Un negocio recupera la inversión en solo 1 año, pero en pesos de hoy termina perdiendo $5 M. ¿Qué haces?

- A) Lo hago: recupera rapidísimo — _Recupera rápido, pero al final deja pérdida._
- B) Me da igual — _Daría igual si quedara en 0, no con pérdida._
- **C) No lo hago: recuperar rápido no es lo mismo que ganar** ✅
- D) Lo hago si me gusta el negocio — _La decisión se toma con los números._

**Explicación:** El tiempo de recuperación responde "¿qué tan rápido vuelve la plata?", no "¿conviene?".

### F04 · Concepto · 60 s · uso: desafio, duelo

Tienes $100 M. Tres negocios que se pueden combinar: A cuesta $100 M y gana $30 M. B cuesta $50 M y gana $20 M. C cuesta $50 M y gana $18 M. ¿Qué haces?

- **A) B y C: caben juntos y ganan $38 M** ✅
- B) Solo A, el que más gana — _A gana 30; B + C caben en los $100 M y ganan 38._
- C) A y B — _Cuestan $150 M: no alcanza._
- D) Solo B — _Sobran $50 M que pueden ir a C y ganar 18 más._

**Explicación:** Con presupuesto limitado se busca la combinación que quepa y sume más.

### F05 · Concepto · 45 s · uso: desafio

Dos socios discuten. Uno dice: "Escojamos el negocio con el porcentaje más alto". El otro: "Escojamos el que deje más plata en pesos de hoy". Si solo pueden hacer uno, ¿quién tiene razón?

- A) Ninguno: hay que escoger el que recupere más rápido — _Recuperar rápido no dice cuánto gana._
- B) El primero — _Un % alto sobre poca plata puede dejar menos ganancia._
- C) Ninguno: hay que escoger el más barato — _El más barato no siempre gana más._
- **D) El segundo: lo que importa es cuánta plata deja** ✅

**Explicación:** Entre negocios de los que solo se puede uno, manda la plata en pesos de hoy (el VPN).

### F06 · Concepto · 45 s · uso: desafio

El negocio A deja más plata en pesos de hoy, pero el negocio B tiene un porcentaje de ganancia más alto. ¿Cómo puede pasar?

- A) Alguno está mal calculado — _Pasa seguido con cálculos correctos._
- B) Es imposible — _Es muy común con negocios de distinto tamaño._
- **C) B es más pequeño: gana un % alto, pero sobre menos plata** ✅
- D) Porque A tiene más empleados — _El número de empleados no explica la diferencia._

**Explicación:** Un negocio pequeño puede tener un % altísimo y dejar poca plata.

### F07 · Concepto · 60 s · uso: desafio

Exiges ganar mínimo 12 % al año. Un negocio: en pesos de hoy pierde $5 M, rinde 10 % al año y devuelve $0,95 por cada $1. ¿Qué decides?

- A) Me da igual — _Daría igual si quedara en 0._
- B) Hacerlo: $0,95 es casi $1 — _Casi no basta: pierde 5 centavos por cada peso._
- C) Hacerlo: rinde 10 %, que es positivo — _Hay que compararlo con tu mínimo (12 %), no con cero._
- **D) No hacerlo: las tres cifras dicen que no alcanza** ✅

**Explicación:** Pérdida en pesos de hoy, rinde menos que el mínimo y devuelve menos de $1: las tres dicen que no.

### F08 · Cálculo · 75 s · uso: desafio, duelo

Tienes $150 M. Negocios que se pueden combinar: A cuesta $100 M y gana $40 M. B cuesta $50 M y gana $25 M. C cuesta $100 M y gana $45 M. ¿Cuál es la MAYOR ganancia total que cabe en tu plata?

- A) $45 M — _Escogiste solo C y te sobraron $50 M para B._
- **B) $70 M** ✅
- C) $110 M — _Sumaste los tres: cuestan $250 M y no caben._
- D) $65 M — _A + B cabe, pero C + B también cabe y gana más._

**Explicación:** Caben A + B (gana 65) o C + B (gana 70). Lo mejor: C + B = $70 M.

### F09 · Cálculo · 60 s · uso: desafio, duelo

Solo puedes hacer uno. En pesos de hoy: A recibe $120 M y cuesta $100 M. B recibe $230 M y cuesta $200 M. ¿Cuánto gana el que conviene escoger?

- **A) $30 M** ✅
- B) $50 M — _Sumaste las dos ganancias; solo se puede uno._
- C) $230 M — _Olvidaste restar lo que cuesta._
- D) $20 M — _Esa es la ganancia de A; B gana más._

**Explicación:** A gana 120 − 100 = 20. B gana 230 − 200 = 30. Se escoge B: $30 M.

## G · ¿Y si algo sale mal? (riesgo)

### G01 · Cálculo · 60 s · uso: desafio, duelo

Los gastos fijos de la tienda son $2.000.000 al mes. Cada caja de café se vende a $50.000 y cuesta $30.000 hacerla, así que cada caja deja $20.000. ¿Cuántas cajas hay que vender al mes para no ganar ni perder?

- A) 67 unidades — _Dividiste entre lo que cuesta hacerla; se divide entre lo que deja cada caja._
- **B) 100 unidades** ✅
- C) 25 unidades — _Sumaste precio y costo; hay que restarlos._
- D) 40 unidades — _Dividiste entre el precio; se divide entre lo que deja cada caja ($20.000)._

**Explicación:** 2.000.000 ÷ 20.000 = 100 cajas. Ese es el punto de equilibrio.

### G02 · Cálculo · 60 s · uso: desafio, duelo

Gastos fijos: $30 M. De cada $100 que vendes, te quedan $40 para pagar esos gastos. ¿Cuánto hay que vender para no perder? (Pista: 30 ÷ 0,40)

- A) $12 M — _Multiplicaste 30 × 0,40; hay que dividir._
- B) $42 M — _Le sumaste 40 % a los gastos fijos._
- C) $50 M — _Dividiste entre 0,60; se divide entre lo que te queda (0,40)._
- **D) $75 M** ✅

**Explicación:** 30 ÷ 0,40 = $75 M en ventas.

### G03 · Concepto · 45 s · uso: desafio

¿Qué es analizar la "sensibilidad" de un proyecto?

- A) Preguntarles a los clientes si les gusta el producto — _Eso es estudio de mercado._
- B) Cambiar todas las cifras al tiempo — _Eso es armar escenarios._
- **C) Cambiar UNA cifra a la vez (precio, ventas o costos) y ver cuánto cambia la ganancia** ✅
- D) Repetir las cuentas para ver si están bien — _Eso es revisar, no medir el riesgo._

**Explicación:** Así se descubre de qué cifra depende más el resultado.

### G04 · Cálculo · 60 s · uso: desafio, duelo

En pesos de hoy, el negocio gana $60 M. Cada 1 % que baja el precio, esa ganancia baja $5 M. ¿Cuánto puede bajar el precio antes de que la ganancia llegue a 0?

- A) 300 % — _Multiplicaste 60 × 5; hay que dividir._
- B) 60 % — _Esa es la ganancia, no la caída en %._
- C) 5 % — _Eso es lo que baja la ganancia por cada 1 %, no la caída máxima._
- **D) 12 %** ✅

**Explicación:** 60 ÷ 5 = 12 %. Si el precio baja más de 12 %, el negocio pierde.

### G05 · Cálculo · 75 s · uso: desafio, duelo

Tres futuros: malo, pierdes $20 M (25 % de probabilidad); normal, ganas $20 M (50 %); bueno, ganas $40 M (25 %). Multiplica cada resultado por su probabilidad y suma. ¿Cuánto se espera ganar?

- A) $13,3 M — _Promediaste los tres sin tener en cuenta las probabilidades._
- **B) $15 M** ✅
- C) $40 M — _Sumaste los tres resultados sin multiplicar por la probabilidad._
- D) $10 M — _Solo tomaste el futuro normal (20 × 50 %)._

**Explicación:** −20 × 0,25 + 20 × 0,5 + 40 × 0,25 = −5 + 10 + 10 = $15 M.

### G06 · Concepto · 45 s · uso: desafio

Si cada cifra sube 10 % (una a la vez), la ganancia cambia así: precio, +$50 M; materia prima, −$20 M; inversión, −$10 M. ¿Qué cifra hay que estimar con más cuidado?

- A) La materia prima — _Mueve 20, menos que el precio (50)._
- B) La inversión — _Es la que MENOS mueve la ganancia (10)._
- C) Todas por igual — _Con el mismo 10 % de cambio, cada una mueve la ganancia distinto._
- **D) El precio: es la que más mueve la ganancia** ✅

**Explicación:** La cifra que más mueve el resultado es la más delicada: hay que estimarla con mucho cuidado.

### G07 · Concepto · 45 s · uso: desafio

Las cuentas dicen que el negocio gana $40 M. ¿Para qué probar qué pasa si algo sale mal?

- A) Para que dé más ganancia — _Probar no cambia la ganancia: muestra qué tan frágil es._
- **B) Porque son estimaciones: si cambian el precio, las ventas o los costos, la ganancia podría volverse pérdida** ✅
- C) No hace falta: si dio ganancia, está garantizada — _Las cifras son estimaciones que pueden fallar._
- D) Solo porque lo pide el banco — _Lo necesita cualquiera que vaya a decidir._

**Explicación:** Una ganancia que depende de cifras frágiles puede ser una mala apuesta.

### G08 · Concepto · 45 s · uso: desafio

¿En qué se diferencian el análisis de sensibilidad y el de escenarios?

- **A) Sensibilidad mueve una cifra a la vez; escenarios mueve varias juntas (futuro malo, normal, bueno)** ✅
- B) Sensibilidad mueve varias y escenarios una — _Es al revés._
- C) Son lo mismo — _Uno mueve una sola cifra y el otro combina varias._
- D) Los escenarios solo sirven para el precio — _Pueden combinar cualquier cifra._

**Explicación:** Malo, normal y bueno son combinaciones de varias cifras a la vez.

## Chequeo de estrella "Sello Buen Negocio" (30 s)

- **S01.** Pones $100 M en un negocio y en un año te devuelve $120 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más? → **El negocio gana más: ¡conviene!** (La opción segura te daría $110 M; el negocio, $120 M: el negocio gana más.)
- **S02.** Pones $100 M en un negocio y en un año te devuelve $115 M. Si en cambio dejas esa plata en una opción segura que paga 20 % al año, ¿qué gana más? → **La opción segura gana más: no conviene** (La opción segura te daría $120 M; el negocio, $115 M: la opción segura gana más.)
- **S03.** Pones $100 M en un negocio y en un año te devuelve $110 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más? → **Dan lo mismo: da igual** (La opción segura te daría $110 M; el negocio, $110 M: dan lo mismo.)
- **S04.** Pones $200 M en un negocio y en un año te devuelve $230 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más? → **El negocio gana más: ¡conviene!** (La opción segura te daría $220 M; el negocio, $230 M: el negocio gana más.)
- **S05.** Pones $50 M en un negocio y en un año te devuelve $60 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más? → **El negocio gana más: ¡conviene!** (La opción segura te daría $55 M; el negocio, $60 M: el negocio gana más.)
- **S06.** Pones $200 M en un negocio y en un año te devuelve $210 M. Si en cambio dejas esa plata en una opción segura que paga 10 % al año, ¿qué gana más? → **La opción segura gana más: no conviene** (La opción segura te daría $220 M; el negocio, $210 M: la opción segura gana más.)

## Mini-juego global 1 · ¿Cuenta o no cuenta?

- Comprar la maquinaria → **CUENTA** (Es plata que sale al inicio.)
- El desgaste de la máquina, como si fuera plata que sale → **NO CUENTA** (No sale plata: la máquina ya se pagó.)
- Un estudio que ya se pagó y no se devuelve → **NO CUENTA** (Ya se gastó, hagan o no el proyecto.)
- La plata para arrancar (mercancía y caja) → **CUENTA** (Sale al inicio y vuelve al final.)
- Lo que reciben al vender la máquina usada al final → **CUENTA** (Es plata que entra el último año.)
- Los impuestos → **CUENTA** (Es plata que sale de verdad.)
- El arriendo que dejan de recibir por usar su propio lote → **CUENTA** (Es plata que dejan de ganar.)
- Lo que la competencia gastó en publicidad → **NO CUENTA** (No es plata de su proyecto.)
- Las ventas del año → **CUENTA** (Es plata que entra.)
- El sueldo del administrador → **CUENTA** (Es plata que sale cada mes.)

## Mini-juego global 2 · Carrera relámpago

- El negocio gana más que tu mínimo exigido → **Conviene** (la otra opción: No conviene)
- Rinde 12 % al año y tú exiges 15 % → **No conviene** (la otra opción: Conviene)
- Devuelve $1,30 por cada $1 que cuesta → **Conviene** (la otra opción: No conviene)
- $110 M dentro de un año, si tu plata gana 10 %: ¿cuánto valen hoy? → **$100 M** (la otra opción: $110 M)
- ¿Qué vale más: un peso hoy o un peso dentro de un año? → **Hoy** (la otra opción: En un año)
- En pesos de hoy el negocio queda en $0 → **Gana justo tu mínimo** (la otra opción: Pierde todo)
- Solo puedes hacer uno: ¿el de % más alto o el que deja más plata? → **Más plata** (la otra opción: Más %)
- Devuelve $0,80 por cada $1 que cuesta → **Pierde** (la otra opción: Gana)
- $100 M que ganan 20 % en un año: ¿cuánto tienes? → **$120 M** (la otra opción: $80 M)
- El tiempo de recuperación dice… → **Qué tan rápido vuelve la plata** (la otra opción: Cuánto gana)

## Mini-juego global 3 · Termómetro del riesgo

- **T1.** Con un precio de $10.000 el negocio gana $120 M. Por cada $1.000 que baja el precio, la ganancia baja $40 M. ¿Con qué precio la ganancia llega a 0? → **7.000** (120 ÷ 40 = 3 bajadas de $1.000. Precio límite: $7.000. Por debajo de eso, el negocio pierde.)
- **T2.** Vendiendo 1.000 unidades el negocio gana $90 M. Por cada 100 unidades menos, la ganancia baja $15 M. ¿Con cuántas unidades la ganancia llega a 0? → **400 unidades** (90 ÷ 15 = 6 bajadas de 100. Límite: 400 unidades.)
- **T3.** Si hacer cada unidad cuesta $4.000, el negocio gana $50 M. Por cada $500 que sube ese costo, la ganancia baja $10 M. ¿Con qué costo la ganancia llega a 0? → **6.500** (50 ÷ 10 = 5 subidas de $500. Costo límite: $6.500. Por encima de eso, el negocio pierde.)

## Mini-juego individual · Ordena

- **Ordena las cuentas de un año:** Ventas → − Gastos → = Ganancia antes de impuestos → − Impuestos → = Plata que queda en el bolsillo
- **Ordena los pasos para decidir si un negocio conviene:** Reunir las cifras (costos, ventas, años) → Calcular la plata que entra y sale cada año → Pasar todo a pesos de hoy → Ver si gana más que el mínimo exigido → Probar qué pasa si algo sale mal → Decidir

## Mini-juego individual · Caza el error

Usa las preguntas con uso `caza` (C04, C10, C11).

## Jefe final · Junta Directiva del Nevado (mínimo exigido o TMAR: 10 %)

| Proyecto | Flujos | VPN | TIR | B/C | PR simple | PR descontado |
|---|---|---|---|---|---|---|
| P1 Planta de café liofilizado | -400 / 200 / 200 / 200 | 97,4 | 23,4 % | 1,24 | 2 años | 2,35 años |
| P2 App de domicilios de arepas | -100 / 80 / 80 | 38,8 | 38 % | 1,39 | 1,25 años | 1,41 años |
| P3 Puesto de raspados en la feria | -100 / 105 | −4,5 | 5 % | 0,95 | 0,95 años | no recupera |

**Fase 1:** Hay $400 M y solo se puede aprobar UNO. ¿Cuál aprueba la Junta? → **P1**

- **Es el que deja más plata en pesos de hoy** ✅
- Es el que rinde el porcentaje más alto — _Ese es P2, pero es pequeño: deja menos plata ($38,8 M contra $97,4 M)._
- Es el que recupera la plata más rápido — _Ese es P3, y en pesos de hoy pierde plata._

**Fase 2:** ¡Giro! El banco recortó el presupuesto: solo hay $100 M. ¿Cuál aprueba ahora la Junta? → **P2**

- **Es el único que cabe y además gana plata en pesos de hoy** ✅
- Cabe y recupera la plata en menos de un año — _Ese es P3: cabe, pero en pesos de hoy pierde plata._
- Ninguno sirve, porque P1 ya no cabe — _P2 cabe y gana plata._

_Plan B del presentador: "¡Ahora la Junta exige ganar mínimo 25 % al año!" P1 rinde 23 % (no alcanza) y P2 rinde 38 % (sí alcanza) → P2._
