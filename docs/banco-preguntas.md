# Banco de preguntas — Expedición VPN

> Archivo generado por `node tools/generar-banco.mjs`. Las respuestas numéricas las calcula el código y las verifica `node tools/verificar.mjs`. Cifras en millones de pesos ($ M) salvo que se indique otra cosa.

**Total:** 59 preguntas de zona/duelo, 6 chequeos de estrella, 25 ítems de mini-juegos y el jefe final.

## Mini-lecciones (máx. 30 s cada una)

- **para_que** (46 palabras): Evaluar financieramente un proyecto es responder UNA pregunta: ¿conviene invertir? Se comparan los flujos de caja que el proyecto devolverá contra la inversión, teniendo en cuenta el tiempo y la tasa mínima que exige el inversionista (TMAR). La decisión es aceptar, rechazar o escoger entre alternativas.
- **insumos** (44 palabras): Los insumos son las cifras con las que se arma el flujo: inversión inicial (activos y capital de trabajo), ingresos, costos y gastos, depreciación, impuestos, valor de salvamento y horizonte (cuántos años se evalúan). Si un insumo está mal, todo lo demás sale mal.
- **depreciacion** (52 palabras): La depreciación reparte el costo de un activo en su vida útil. En línea recta: (costo − valor de salvamento) ÷ vida útil. NO es plata que sale cada año: se resta para calcular impuestos y luego se vuelve a sumar en el flujo. Ese ahorro de impuestos se llama escudo fiscal.
- **impuestos** (30 palabras): El impuesto de renta se calcula sobre la utilidad gravable: ingresos − costos y gastos − depreciación. Nunca sobre los ingresos brutos. Impuesto = utilidad antes de impuestos × tasa.
- **capital_trabajo** (34 palabras): El capital de trabajo es la plata que el negocio necesita "amarrada" para operar: inventario, materia prima, caja. Se invierte al inicio (año 0) y se recupera al final del horizonte. No se deprecia.
- **salvamento** (38 palabras): El valor de salvamento es lo que valen los activos al final del horizonte (por ejemplo, vender la máquina usada). Entra como un ingreso en el último año. El horizonte es el número de periodos que se evalúan.
- **flujo_estructura** (49 palabras): Flujo de caja operativo: Ingresos − Costos − Depreciación = Utilidad antes de impuestos; − Impuestos = Utilidad neta; + Depreciación = Flujo operativo. Al flujo se le resta la inversión (año 0) y en el último año se suman el salvamento y la recuperación del capital de trabajo.
- **flujo_relevante** (51 palabras): Solo entra al flujo lo que cambia con la decisión. Costo hundido (ya gastado pase lo que pase): NO entra. Costo de oportunidad (lo que dejas de ganar por usar algo propio): SÍ entra. En el flujo del proyecto no se restan intereses: se evalúa el negocio, no cómo se paga.
- **valor_tiempo** (46 palabras): Un peso hoy vale más que un peso mañana, porque hoy lo puedes invertir. Valor futuro: VF = VP × (1 + i)ⁿ. Valor presente: VP = VF ÷ (1 + i)ⁿ. Traer al presente es "descontar". El interés es compuesto: los intereses también ganan intereses.
- **tmar** (45 palabras): La TMAR (tasa mínima atractiva de rendimiento) es lo mínimo que el inversionista le exige al proyecto. En este juego te la damos como dato. Es la tasa con la que se descuentan los flujos: si el proyecto no rinde al menos eso, no conviene.
- **vpn** (44 palabras): VPN = −Inversión + suma de cada flujo ÷ (1 + TMAR)ᵗ. Mide cuánto valor, en pesos de hoy, crea el proyecto por encima de la TMAR. VPN > 0: se acepta. VPN = 0: rinde justo la TMAR. VPN < 0: se rechaza.
- **tir** (45 palabras): La TIR es la tasa que hace el VPN igual a cero: la rentabilidad propia del proyecto, en % anual. Regla: si TIR > TMAR se acepta; si TIR < TMAR se rechaza. Con interés compuesto, la TIR no es un promedio simple de ganancias.
- **bc** (34 palabras): Relación B/C = VP de los beneficios ÷ VP de los costos (inversión incluida), todo descontado a la TMAR. B/C > 1: se acepta (equivale a VPN > 0). B/C < 1: se rechaza.
- **pr** (36 palabras): Periodo de recuperación: cuánto tarda el proyecto en devolver la inversión. Simple: con flujos sin descontar. Descontado: con flujos traídos a presente a la TMAR (siempre tarda igual o más). Mide liquidez y riesgo, NO rentabilidad.
- **criterios** (49 palabras): En proyectos convencionales, VPN > 0, TIR > TMAR y B/C > 1 dicen lo mismo. Si los indicadores se contradicen al elegir entre proyectos excluyentes, manda el VPN: mide valor en pesos. La TIR y la B/C son porcentajes o razones y no ven el tamaño del proyecto.
- **restriccion** (29 palabras): Con presupuesto limitado y proyectos independientes, se busca la combinación que quepa en el presupuesto y sume el MAYOR VPN total, no el proyecto con el mayor VPN individual.
- **sensibilidad** (42 palabras): El análisis de sensibilidad cambia UNA variable a la vez (precio, ventas, costos) y mide cuánto se mueve el VPN. La variable más sensible es la que más lo mueve. El valor crítico es el cambio que deja el VPN en cero.
- **escenarios** (28 palabras): Los escenarios mueven VARIAS variables juntas: pesimista, probable y optimista. Si cada escenario tiene probabilidad, el VPN esperado es la suma de cada VPN multiplicado por su probabilidad.
- **equilibrio** (34 palabras): Punto de equilibrio: las ventas con las que no se gana ni se pierde. En unidades: costos fijos ÷ (precio − costo variable unitario). En pesos: costos fijos ÷ % de margen de contribución.

## A · ¿Para qué se evalúa?

### A01 · Concepto · 45 s · uso: desafio, salida

Tu equipo tiene el plan de negocio de una tienda de café especial. ¿Qué decisión principal se toma con la evaluación financiera?

- A) A qué precio vender cada tinto — _El precio es un insumo que viene del estudio de mercado, no la decisión final._
- B) De qué banco sacar el préstamo — _Eso es financiación, otra gestión (la expone otro equipo)._
- C) Cuánta utilidad contable reportar el año 1 — _La evaluación mira todos los flujos del horizonte, no un solo año contable._
- **D) Si conviene invertir o no: aceptar, rechazar o escoger entre alternativas** ✅

**Explicación:** La evaluación financiera existe para decidir si se invierte. Todo lo demás (flujo, indicadores, riesgo) sirve para tomar esa decisión con fundamento.

### A02 · Concepto · 45 s · uso: desafio

¿Desde qué punto de vista se hace la evaluación FINANCIERA de un proyecto?

- A) Del cliente: si el precio es justo — _El cliente no pone la inversión ni recibe los flujos._
- **B) Del inversionista: ¿la plata que pongo rinde al menos lo que exijo (TMAR)?** ✅
- C) Del gobierno: cuánto va a recaudar — _Los impuestos son un insumo del flujo, no el punto de vista._
- D) De la sociedad: empleos e impacto ambiental — _Eso corresponde a la evaluación económica o social._

**Explicación:** La evaluación financiera mira el proyecto con los ojos de quien pone la plata y espera recuperarla con un rendimiento mínimo (TMAR).

### A03 · Concepto · 45 s · uso: desafio

En una frase, la evaluación financiera compara…

- **A) Lo que el proyecto devuelve (flujos futuros) contra lo que cuesta, teniendo en cuenta el tiempo y la TMAR** ✅
- B) Las ventas totales contra las de la competencia — _Eso es análisis de mercado._
- C) Los ingresos del año 1 contra los costos del año 1 — _Un solo año no muestra todo el horizonte ni el valor del dinero en el tiempo._
- D) La utilidad contable acumulada, sin importar cuándo llega — _Sí importa cuándo llega la plata: un peso hoy vale más que uno mañana._

**Explicación:** Flujos que entran vs. inversión que sale, puestos en la misma fecha (descontados a la TMAR).

## B · Insumos

### B01 · Cálculo · 60 s · uso: desafio, duelo

Una tostadora industrial cuesta $50 M, vida útil 5 años, sin valor de salvamento. Depreciación en línea recta. ¿Cuánto se deprecia por año?

- A) $250 M — _Multiplicaste por la vida útil en vez de dividir._
- **B) $10 M** ✅
- C) $50 M — _Ese es el costo total, no el valor anual._
- D) $12,5 M — _Dividiste entre 4 años; la vida útil es 5._

**Explicación:** (50 − 0) ÷ 5 = $10 M por año.

### B02 · Cálculo · 75 s · uso: desafio, duelo

Un camión cuesta $90 M, vida útil 4 años y valor de salvamento contable de $10 M. ¿Depreciación anual en línea recta?

- **A) $20 M** ✅
- B) $80 M — _Ese es el total a depreciar; falta dividir entre 4 años._
- C) $22,5 M — _No le restaste el valor de salvamento al costo._
- D) $25 M — _Sumaste el salvamento en vez de restarlo._

**Explicación:** (90 − 10) ÷ 4 = $20 M por año.

### B03 · Cálculo · 75 s · uso: desafio, duelo

Año 1: ingresos $100 M, costos y gastos $40 M, depreciación $20 M. Impuesto de renta 30 %. ¿Cuánto impuesto se paga?

- A) $18 M — _No restaste la depreciación antes de calcular el impuesto._
- **B) $12 M** ✅
- C) $6 M — _Aplicaste el 30 % solo a la depreciación._
- D) $30 M — _Calculaste el impuesto sobre los ingresos; va sobre la utilidad._

**Explicación:** Utilidad gravable = 100 − 40 − 20 = 40. Impuesto = 40 × 30 % = $12 M.

### B04 · Concepto · 45 s · uso: desafio

¿Cuál de estos NO es un costo o gasto de operación del año?

- A) La nómina de los baristas — _Es un costo operativo: se paga cada año._
- **B) La compra de la máquina empacadora** ✅
- C) Los servicios públicos — _Es un gasto operativo: se paga cada año._
- D) El arriendo del local — _Es un gasto operativo: se paga cada año._

**Explicación:** Comprar la máquina es INVERSIÓN (año 0). Su costo llega a los años de operación solo a través de la depreciación.

### B05 · Concepto · 45 s · uso: desafio

Una panadería necesita $10 M en harina, empaques y caja menor para operar desde el día 1. ¿Cómo se trata esa plata en la evaluación?

- A) Como gasto deducible del año 1 — _No es un gasto: la plata queda amarrada en la operación y se recupera._
- B) Se deprecia en línea recta — _El capital de trabajo no es un activo fijo: no se deprecia._
- **C) Como inversión en capital de trabajo en el año 0, que se recupera al final del horizonte** ✅
- D) No se incluye, porque al final se recupera — _Mientras tanto la plata no está disponible: ese tiempo tiene costo._

**Explicación:** Sale en el año 0 (−10) y vuelve en el último año (+10). Como vuelve más tarde, en valor presente sí le cuesta al proyecto.

### B06 · Concepto · 45 s · uso: desafio

Al final del horizonte de 5 años, la tostadora se puede vender en $8 M. ¿Dónde va ese valor?

- A) Como gasto del año 5 — _Vender un activo trae plata, no la saca._
- B) Restándolo de la inversión del año 0 — _Se recibe al final, no al inicio: no se puede descontar de la inversión inicial._
- **C) Como entrada de dinero en el año 5** ✅
- D) No se incluye, porque la máquina ya está depreciada — _Aunque esté depreciada, si se puede vender, esa plata entra al proyecto._

**Explicación:** El salvamento es una entrada del último año. (Si se vende por encima de su valor en libros, la ganancia paga impuestos.)

### B07 · Concepto · 45 s · uso: desafio

¿Por qué la depreciación aparece en el flujo de caja si no es una salida de dinero?

- A) Porque es plata que sale cada año para reponer la máquina — _No sale efectivo: la máquina se pagó en el año 0._
- **B) Porque reduce la utilidad gravable y con ella los impuestos (escudo fiscal)** ✅
- C) Porque aumenta las ventas — _La depreciación no tiene que ver con las ventas._
- D) No debería aparecer en ninguna parte del flujo — _Sí aparece: se resta para calcular impuestos y luego se vuelve a sumar._

**Explicación:** Se resta antes de impuestos (paga menos impuesto) y se suma después (porque no salió plata).

### B08 · Cálculo · 60 s · uso: desafio, duelo

Depreciación anual $20 M, impuesto de renta 35 %. ¿Cuánto se ahorra en impuestos cada año gracias a la depreciación?

- A) $35 M — _Usaste la tasa de impuesto como si fuera el monto._
- B) $20 M — _Ese es el valor de la depreciación, no el ahorro en impuestos._
- **C) $7 M** ✅
- D) $13 M — _Calculaste 20 × 65 %; el ahorro es 20 × 35 %._

**Explicación:** Escudo fiscal = depreciación × tasa = 20 × 0,35 = $7 M por año.

### B09 · Concepto · 45 s · uso: desafio

¿Qué es el horizonte de evaluación?

- A) El año en que el proyecto da su primera utilidad — _Eso no define cuántos años se evalúan._
- **B) El número de periodos (por ejemplo, 5 años) para los que se proyectan los flujos** ✅
- C) El tiempo que tarda en recuperarse la inversión — _Ese es el periodo de recuperación (bloque E)._
- D) La fecha en que se pide el préstamo — _Eso es financiación, no el horizonte._

**Explicación:** El horizonte suele relacionarse con la vida útil de los activos, pero lo define quien evalúa según el proyecto.

## C · Flujo de caja

### C01 · Cálculo · 90 s · uso: desafio, duelo

Año 2: ingresos $200 M, costos y gastos $80 M, depreciación $40 M, impuesto 30 %. ¿Flujo de caja operativo del año?

- **A) $96 M** ✅
- B) $120 M — _No restaste los impuestos._
- C) $56 M — _Olvidaste volver a sumar la depreciación (no es salida de dinero)._
- D) $84 M — _Calculaste el impuesto sin restar antes la depreciación: perdiste el escudo fiscal._

**Explicación:** UAI = 200 − 80 − 40 = 80. Impuesto = 24. Utilidad neta = 56. + Depreciación 40 → FC = $96 M.

### C02 · Cálculo · 60 s · uso: desafio, duelo

Para arrancar se necesitan maquinaria por $100 M y capital de trabajo por $20 M. El mes pasado se pagaron $10 M por un estudio de mercado. ¿Flujo del año 0?

- A) $−100 M — _Olvidaste el capital de trabajo._
- **B) $−120 M** ✅
- C) $−130 M — _Incluiste el estudio de mercado: es un costo hundido, ya se pagó pase lo que pase._
- D) $−80 M — _Sumaste el capital de trabajo como si fuera una entrada._

**Explicación:** Año 0 = −100 (maquinaria) − 20 (capital de trabajo) = −$120 M. El estudio ya pagado no cambia con la decisión.

### C03 · Cálculo · 60 s · uso: desafio, duelo

Año 5 (el último): flujo operativo $50 M. Además se recupera el capital de trabajo ($20 M) y se vende la maquinaria en $10 M (sin impuesto sobre la venta). ¿Flujo total del año 5?

- A) $70 M — _Olvidaste el valor de salvamento._
- **B) $80 M** ✅
- C) $50 M — _Olvidaste la recuperación del capital de trabajo y el salvamento._
- D) $60 M — _Olvidaste recuperar el capital de trabajo._

**Explicación:** 50 + 20 + 10 = $80 M. El último año "devuelve" el capital de trabajo y el salvamento.

### C04 · Concepto · 75 s · uso: desafio, caza

Caza el error. (1) Ingresos 100 · (2) − Costos 40 · (3) − Depreciación 20 → UAI 40 · (4) − Impuestos 30 % = 12 → Utilidad neta 28 · (5) − Depreciación 20 → Flujo de caja 8. ¿Qué línea está mal?

- A) La 3: la depreciación no se resta antes de impuestos — _Sí se resta antes de impuestos: así se obtiene el escudo fiscal._
- B) La 4: el impuesto debía ser sobre 100 — _El impuesto va sobre la utilidad (40), no sobre los ingresos._
- C) La 2: los costos no se restan — _Los costos sí se restan de los ingresos._
- **D) La 5: la depreciación se SUMA de nuevo; el flujo correcto es 48** ✅

**Explicación:** Restar la depreciación dos veces es el error más común. Utilidad neta 28 + 20 = 48.

### C05 · Concepto · 45 s · uso: desafio

Hace dos meses pagaron $5 M por un estudio de mercado, y ese pago no se devuelve se haga o no el proyecto. ¿Va en el flujo de caja?

- **A) No: es un costo hundido, ya se gastó pase lo que pase** ✅
- B) Sí, repartido en los años de operación — _No es un costo futuro del proyecto._
- C) Solo si el proyecto da VPN positivo — _Un costo hundido no entra en ningún caso._
- D) Sí, en el año 0 — _Esa plata ya se fue y no cambia con la decisión: no es relevante._

**Explicación:** Pregunta clave para cada cifra: ¿esto cambia si decido invertir o no? Si no cambia, no entra.

### C06 · Concepto · 45 s · uso: desafio

El proyecto usará un lote propio que hoy podrían arrendar en $10 M al año. ¿Cómo se trata?

- **A) Como un costo de $10 M al año (costo de oportunidad)** ✅
- B) Como un ingreso de $10 M al año — _El proyecto no recibe ese arriendo; lo deja de recibir._
- C) No se incluye, porque el lote ya es nuestro — _Usarlo implica dejar de recibir el arriendo: es un costo real de la decisión._
- D) Como inversión de $10 M en el año 0 — _El arriendo perdido ocurre cada año, no una sola vez._

**Explicación:** El costo de oportunidad es lo que se deja de ganar por usar un recurso propio en el proyecto.

### C07 · Concepto · 45 s · uso: desafio

Están armando el flujo de caja DEL PROYECTO (se evalúa el negocio, sin importar de dónde sale la plata). ¿Se restan los intereses de un préstamo?

- A) Solo los del primer año — _En el flujo del proyecto no van intereses de ningún año._
- **B) No: el flujo del proyecto no incluye cómo se financia** ✅
- C) Sí, siempre — _Eso corresponde a otro flujo (el del inversionista con financiación), que no es el que se está armando._
- D) Sí, pero sin descontarlos — _En el flujo del proyecto no van intereses._

**Explicación:** Primero se mira si el negocio vale la pena por sí mismo. Cómo se financia lo trata otra gestión.

### C08 · Concepto · 45 s · uso: desafio

Partiendo de la utilidad neta, ¿cómo se llega al flujo de caja del proyecto?

- **A) Utilidad neta + depreciación − inversiones + salvamento y recuperación del capital de trabajo** ✅
- B) Utilidad antes de impuestos + depreciación — _Faltan los impuestos, que sí se pagan._
- C) Utilidad neta − depreciación — _La depreciación ya se restó una vez; ahora se suma._
- D) Ingresos − costos, sin impuestos — _Los impuestos sí son una salida de dinero._

**Explicación:** La utilidad contable no es plata en la mano: hay que devolver lo que no fue salida (depreciación) y agregar lo que sí lo fue (inversiones).

### C09 · Cálculo · 90 s · uso: desafio, duelo

Año 1: ingresos $150 M, costos y gastos $50 M, depreciación $20 M, impuesto 25 %. ¿Flujo de caja operativo?

- A) $100 M — _No restaste los impuestos._
- B) $75 M — _Calculaste el impuesto sin restar la depreciación (25 % de 100)._
- **C) $80 M** ✅
- D) $60 M — _Olvidaste volver a sumar la depreciación._

**Explicación:** UAI = 150 − 50 − 20 = 80. Impuesto = 20. Utilidad neta = 60. + 20 → FC = $80 M.

### C10 · Concepto · 75 s · uso: caza

Caza el error. Año 0: máquina −100 y capital de trabajo −20 → −120. Años 1, 2 y 3: flujo operativo +50. Año 3: + salvamento 10 → total año 3 = +60. ¿Qué falta?

- **A) Recuperar el capital de trabajo (+20) en el año 3: el total es +80** ✅
- B) No falta nada — _El capital de trabajo invertido en el año 0 se recupera en el último año._
- C) Restar la depreciación en el año 3 — _La depreciación ya está dentro del flujo operativo._
- D) Sumar los 20 de capital de trabajo en el año 1 — _Se recupera al final, no al inicio._

**Explicación:** Olvidar la recuperación del capital de trabajo subvalora el proyecto.

### C11 · Concepto · 75 s · uso: caza

Caza el error. Ingresos 100, costos 60, sin depreciación. Impuestos = 30 % × 100 = 30. Flujo = 100 − 60 − 30 = 10. ¿Qué está mal?

- A) Los costos no se restan — _Los costos sí se restan._
- B) Faltó sumar 30 de depreciación — _El enunciado dice que no hay depreciación._
- **C) El impuesto va sobre la utilidad (40 × 30 % = 12): el flujo correcto es 28** ✅
- D) Nada, está bien — _El impuesto se calculó sobre los ingresos; va sobre la utilidad._

**Explicación:** (100 − 60) × (1 − 0,30) = 28.

## D · Valor del dinero en el tiempo

### D01 · Cálculo · 60 s · uso: desafio, duelo

Inviertes $100 M a la TMAR del 10 % anual compuesto. ¿Cuánto tienes en 2 años?

- A) $100 M — _La plata no se queda quieta: gana la TMAR cada año._
- B) $82,64 M — _Eso es descontar (traer al presente), no capitalizar._
- **C) $121 M** ✅
- D) $110 M — _Solo calculaste un año._

**Explicación:** 100 × 1,1 × 1,1 = $121 M. (Con interés simple darían 120: el compuesto gana interés sobre el interés.)

### D02 · Cálculo · 60 s · uso: desafio, duelo

Te prometen $121 M dentro de 2 años. Con una TMAR del 10 %, ¿cuánto valen hoy?

- A) $146,41 M — _Multiplicaste por 1,21 en vez de dividir._
- **B) $100 M** ✅
- C) $110 M — _Descontaste solo un año._
- D) $121 M — _No descontaste: la plata futura vale menos hoy._

**Explicación:** 121 ÷ 1,1² = 121 ÷ 1,21 = $100 M.

### D03 · Concepto · 45 s · uso: desafio

¿Por qué $1 M hoy vale más que $1 M dentro de un año?

- A) Porque el banco cobra cuota de manejo — _Eso no explica el valor del dinero en el tiempo._
- **B) Porque hoy lo puedo invertir y ganar al menos la TMAR** ✅
- C) Porque los billetes se desgastan — _No es un tema físico: es lo que el dinero puede rendir._
- D) No es cierto: valen exactamente lo mismo — _Al tener la plata antes, puedes ponerla a rendir._

**Explicación:** El costo de esperar es lo que dejas de ganar. Por eso los flujos futuros se descuentan.

### D04 · Concepto · 45 s · uso: desafio

¿Qué es la TMAR?

- **A) La tasa mínima que el inversionista le exige al proyecto para aceptarlo** ✅
- B) El porcentaje de impuestos — _Los impuestos son un insumo del flujo._
- C) La rentabilidad que da el proyecto — _Esa es la TIR (bloque E)._
- D) El porcentaje de ganancia sobre las ventas — _Ese es el margen, un dato contable._

**Explicación:** La TMAR es la vara con la que se mide el proyecto. Se usa para descontar los flujos. (Cómo se calcula lo expone otro equipo.)

### D05 · Cálculo · 60 s · uso: desafio, duelo

Recibirás $200 M dentro de un año. TMAR 25 %. ¿Cuál es su valor presente?

- A) $150 M — _Le restaste el 25 %; hay que DIVIDIR entre 1,25._
- **B) $160 M** ✅
- C) $200 M — _No descontaste._
- D) $250 M — _Multiplicaste: eso es valor futuro._

**Explicación:** 200 ÷ 1,25 = $160 M.

### D06 · Cálculo · 90 s · uso: desafio, duelo

Recibirás $110 M en el año 1 y $121 M en el año 2. TMAR 10 %. ¿Cuál es el valor presente de los dos?

- A) $181,8 M — _Descontaste cada flujo un año de más._
- B) $231 M — _Sumaste sin descontar._
- C) $210 M — _Descontaste los dos flujos un solo año._
- **D) $200 M** ✅

**Explicación:** 110 ÷ 1,1 = 100; 121 ÷ 1,21 = 100. VP = $200 M.

### D07 · Concepto · 60 s · uso: desafio

¿Qué prefieres: $100 M hoy o $115 M dentro de un año? Tu TMAR es 20 %.

- A) Los $115 M: es más plata — _Es más plata en pesos de dentro de un año. Traída a hoy (÷ 1,2) vale menos que 100._
- B) Da igual — _Daría igual solo si los $115 M valieran hoy exactamente $100 M (con TMAR del 15 %)._
- C) No se puede saber sin la inflación — _La TMAR ya permite comparar las dos opciones._
- **D) Los $100 M hoy: los $115 M valen hoy unos $95,8 M** ✅

**Explicación:** 115 ÷ 1,2 ≈ 95,8 < 100. Mejor la plata hoy.

### D08 · Cálculo · 60 s · uso: desafio, duelo

Con TMAR del 10 %, ¿cuánto deberías recibir dentro de un año para que te dé igual que tener $50 M hoy?

- **A) $55 M** ✅
- B) $60 M — _Sumaste 10 dos veces._
- C) $50 M — _Recibir lo mismo más tarde es perder lo que podías ganar._
- D) $45,45 M — _Descontaste en vez de capitalizar._

**Explicación:** 50 × 1,1 = $55 M. A eso se le llama valor equivalente.

## E · Indicadores

### E01 · Cálculo · 90 s · uso: desafio, duelo

Inversión $150 M. Flujos: año 1 $110 M, año 2 $121 M. TMAR 10 %. ¿Cuál es el VPN?

- **A) $50 M** ✅
- B) $81 M — _Sumaste los flujos sin descontarlos._
- C) $200 M — _Olvidaste restar la inversión._
- D) $60 M — _Descontaste los dos flujos un solo año._

**Explicación:** VP = 100 + 100 = 200. VPN = 200 − 150 = $50 M > 0 → se acepta.

### E02 · Cálculo · 60 s · uso: desafio, duelo

Inviertes $100 M y recibes $132 M dentro de un año. TMAR 20 %. ¿Cuál es el VPN?

- **A) $10 M** ✅
- B) $5,6 M — _Le restaste el 20 % a 132; hay que dividir entre 1,2._
- C) $110 M — _Ese es el VP de los flujos: falta restar la inversión._
- D) $32 M — _No descontaste el flujo._

**Explicación:** 132 ÷ 1,2 = 110. VPN = 110 − 100 = $10 M.

### E03 · Cálculo · 75 s · uso: desafio, duelo

Inviertes $100 M y recibes $121 M en el año 2 (nada en el año 1). ¿Cuál es la TIR?

- A) 21 % — _Esa es la ganancia total de los 2 años, no la tasa anual._
- **B) 10 %** ✅
- C) 10,5 % — _Promediaste 21 % entre 2; con interés compuesto no funciona así._
- D) 0 % — _Que el año 1 sea cero no hace cero la TIR._

**Explicación:** 100 × 1,1² = 121, así que la tasa que hace VPN = 0 es 10 %.

### E04 · Cálculo · 60 s · uso: desafio, duelo

Inviertes $200 M y recibes $250 M dentro de un año. ¿Cuál es la TIR?

- **A) 25 %** ✅
- B) 125 % — _Dividiste 250 entre 200 sin restar 1._
- C) 20 % — _Dividiste la ganancia entre 250; se divide entre lo invertido (200)._
- D) 50 % — _Esa es la ganancia en millones, no la tasa._

**Explicación:** 250 ÷ 200 = 1,25 → TIR = 25 %.

### E05 · Concepto · 45 s · uso: desafio

Un proyecto tiene TIR = 18 % y la TMAR es 15 %. ¿Qué se decide?

- **A) Se acepta: rinde más de lo mínimo exigido (y su VPN es positivo)** ✅
- B) Es indiferente — _Sería indiferente si la TIR fuera igual a la TMAR._
- C) Se acepta solo si la TIR supera el 20 % — _La vara es la TMAR (15 %), no un número arbitrario._
- D) Se rechaza: 18 % es poco — _Lo que importa es comparar con la TMAR, y 18 % > 15 %._

**Explicación:** TIR > TMAR ⇔ VPN > 0 (en proyectos convencionales).

### E06 · Cálculo · 60 s · uso: desafio, duelo

VP de los beneficios (entradas): $300 M. VP de los costos (inversión + egresos): $250 M. ¿Cuál es la relación B/C?

- **A) 1,2** ✅
- B) 0,83 — _Invertiste la división: es beneficios ÷ costos._
- C) 50 — _Eso es el VPN (una resta), no la relación._
- D) 0,2 — _Calculaste (300 − 250) ÷ 250: eso no es la B/C._

**Explicación:** 300 ÷ 250 = 1,2 > 1 → se acepta.

### E07 · Concepto · 45 s · uso: desafio

Un proyecto tiene B/C = 0,9. ¿Qué se puede decir de su VPN?

- A) Es positivo pero pequeño — _B/C < 1 significa beneficios < costos, es decir, VPN < 0._
- B) Es igual a 0,9 — _La B/C es una razón; el VPN está en pesos._
- C) No se puede saber — _Con B/C < 1 se sabe que el VPN es negativo._
- **D) Es negativo: los beneficios no alcanzan a cubrir los costos** ✅

**Explicación:** B/C > 1 ⇔ VPN > 0; B/C < 1 ⇔ VPN < 0.

### E08 · Cálculo · 75 s · uso: desafio, duelo

Inversión $90 M. Flujos de $40 M cada año durante 3 años. ¿Periodo de recuperación simple?

- **A) 2,25 años** ✅
- B) 2,5 años — _Faltan 10 de 40: eso es 0,25 de año, no 0,5._
- C) 2 años — _Al final del año 2 llevas 80: faltan 10._
- D) 3 años — _Se recupera durante el año 3, no al final._

**Explicación:** Al final del año 2 se recuperan 80. Faltan 10 de los 40 del año 3: 10 ÷ 40 = 0,25 → 2,25 años.

### E09 · Cálculo · 90 s · uso: desafio, duelo

Inversión $150 M. Flujos: año 1 $110 M, año 2 $121 M. TMAR 10 %. ¿Periodo de recuperación DESCONTADO?

- A) 1,33 años — _Ese es el periodo simple: no descontaste los flujos._
- **B) 1,5 años** ✅
- C) 1,41 años — _Usaste el faltante descontado (50) pero el flujo sin descontar (121)._
- D) 2 años — _Se recupera antes de terminar el año 2._

**Explicación:** VP año 1 = 100, VP año 2 = 100. Tras el año 1 faltan 50: 50 ÷ 100 = 0,5 → 1,5 años.

### E10 · Concepto · 45 s · uso: desafio, salida

Si el VPN de un proyecto es exactamente 0, significa que…

- A) No gana nada: mejor no invertir — _Ganar la TMAR sí es ganar: es justo lo mínimo que exigías._
- B) Su TIR es 0 % — _TIR = 0 % sería no ganar nada; VPN = 0 implica TIR = TMAR._
- **C) Rinde exactamente la TMAR (su TIR es igual a la TMAR)** ✅
- D) Pierde toda la inversión — _VPN = 0 significa que recupera la inversión más la TMAR._

**Explicación:** VPN = 0 → indiferente: el proyecto paga la inversión y exactamente la TMAR.

### E11 · Concepto · 45 s · uso: desafio

¿Qué es la TIR?

- A) La utilidad dividida entre las ventas — _Ese es el margen, un dato contable._
- B) La TMAR que exige el inversionista — _La TMAR se exige; la TIR la da el proyecto._
- C) El tiempo que tarda en recuperar la inversión — _Ese es el periodo de recuperación._
- **D) La tasa de descuento que hace el VPN igual a cero** ✅

**Explicación:** La TIR es la rentabilidad propia del proyecto. Se compara con la TMAR.

## F · Criterios de decisión

### F01 · Concepto · 60 s · uso: desafio, salida

Proyectos EXCLUYENTES (solo puedes hacer uno) y hay plata para cualquiera. TMAR 12 %. A: VPN $50 M, TIR 20 %. B: VPN $30 M, TIR 35 %. ¿Cuál eliges?

- A) Los dos — _Son excluyentes: solo se puede uno._
- B) B, porque tiene mayor TIR — _La TIR es un %: no dice cuánto valor crea. B es más pequeño._
- C) Ninguno, se contradicen — _Que se contradigan no impide decidir: manda el VPN._
- **D) A, porque crea más valor (mayor VPN)** ✅

**Explicación:** Ante un conflicto entre proyectos excluyentes, el VPN es el criterio que manda.

### F02 · Concepto · 45 s · uso: desafio

En un proyecto convencional (inversión al inicio y luego flujos positivos), si VPN > 0, entonces necesariamente…

- A) B/C < 1 — _B/C < 1 equivale a VPN < 0._
- B) TIR < TMAR — _Si la TIR fuera menor que la TMAR, el VPN sería negativo._
- **C) TIR > TMAR y B/C > 1** ✅
- D) PR menor a un año — _El PR no está atado al signo del VPN._

**Explicación:** En proyectos convencionales, VPN, TIR y B/C siempre coinciden en aceptar o rechazar un proyecto solo.

### F03 · Concepto · 45 s · uso: desafio

Un proyecto recupera la inversión en 1 año (PR simple), pero su VPN es −$5 M. ¿Qué haces?

- A) Lo acepto: recupera rapidísimo — _El PR mide liquidez, no rentabilidad. VPN < 0 destruye valor._
- B) Me es indiferente — _Sería indiferente con VPN = 0, no con VPN negativo._
- **C) Lo rechazo: recuperar rápido no significa crear valor** ✅
- D) Lo acepto si la TIR es positiva — _Una TIR positiva pero menor que la TMAR da VPN < 0._

**Explicación:** El PR responde "¿en cuánto tiempo vuelve la plata?", no "¿conviene?".

### F04 · Concepto · 75 s · uso: desafio, duelo

Presupuesto $100 M. Proyectos INDEPENDIENTES: A (inversión $100 M, VPN $30 M), B (inversión $50 M, VPN $20 M), C (inversión $50 M, VPN $18 M). ¿Qué haces?

- **A) B y C: VPN total $38 M** ✅
- B) Solo A, el de mayor VPN — _A usa todo el presupuesto y suma 30; B + C cabe y suma 38._
- C) A y B — _Cuestan 150: no alcanza el presupuesto._
- D) Solo B, el de mejor VPN por peso invertido — _Sobran 50 que pueden ir a C y sumar 18 más._

**Explicación:** Con restricción de capital se maximiza el VPN TOTAL de la combinación que cabe en el presupuesto.

### F05 · Concepto · 60 s · uso: desafio

Un proyecto tiene flujos −100, +230, −132 (el signo cambia dos veces). Tiene dos TIR: 10 % y 20 %. ¿Qué indicador usas para decidir?

- A) El periodo de recuperación — _El PR no mide rentabilidad._
- B) La TIR mayor (20 %) — _Ninguna de las dos TIR es "la" rentabilidad del proyecto._
- C) El promedio de las dos TIR — _Promediar TIR no tiene sentido financiero._
- **D) El VPN a la TMAR: con varias TIR, la TIR no sirve para decidir** ✅

**Explicación:** Con flujos no convencionales pueden aparecer varias TIR. El VPN siempre da una sola respuesta.

### F06 · Concepto · 45 s · uso: desafio

Entre dos proyectos excluyentes, A tiene mayor VPN y B mayor TIR, y ambos cálculos están bien. ¿Por qué puede pasar?

- A) Porque alguno está mal calculado — _Puede pasar con cálculos correctos._
- B) Porque la TMAR es negativa — _No tiene que ver con el signo de la TMAR._
- **C) Por diferencias de tamaño de la inversión o de cuándo llegan los flujos** ✅
- D) Nunca pasa — _Pasa seguido con proyectos de distinta escala._

**Explicación:** Un proyecto pequeño puede tener una TIR altísima y crear poco valor en pesos. Por eso manda el VPN.

### F07 · Concepto · 45 s · uso: desafio

TMAR 12 %. Proyecto: VPN −$5 M, TIR 10 %, B/C 0,95. ¿Decisión?

- A) Indiferente — _Sería indiferente con VPN = 0._
- B) Aceptar: la B/C es casi 1 — _"Casi 1" sigue siendo menor que 1: destruye valor._
- C) Aceptar: la TIR es positiva — _La TIR se compara con la TMAR (12 %), no con cero._
- **D) Rechazar: los tres indicadores coinciden** ✅

**Explicación:** VPN < 0, TIR < TMAR y B/C < 1 dicen lo mismo: rechazar.

### F08 · Cálculo · 75 s · uso: desafio, duelo

Presupuesto $150 M, proyectos INDEPENDIENTES. A: inversión $100 M, VPN $40 M. B: inversión $50 M, VPN $25 M. C: inversión $100 M, VPN $45 M. ¿Cuál es el MAYOR VPN total que cabe en el presupuesto?

- A) $45 M — _Escogiste solo el de mayor VPN individual (C) y dejaste $50 M sin usar._
- **B) $70 M** ✅
- C) $110 M — _Sumaste los tres: cuestan $250 M y no caben._
- D) $65 M — _A + B cabe, pero C + B cabe y suma más._

**Explicación:** Combinaciones que caben en $150 M: A + B = 65; C + B = 70. Lo mejor es C + B = $70 M.

### F09 · Cálculo · 90 s · uso: desafio, duelo

Proyectos EXCLUYENTES, TMAR 10 %. A: inviertes $100 M y recibes $132 M en un año (TIR 32 %). B: inviertes $200 M y recibes $253 M en un año (TIR 26,5 %). ¿Cuál es el VPN del proyecto que debes escoger?

- **A) $30 M** ✅
- B) $53 M — _No descontaste el flujo de B._
- C) $230 M — _Olvidaste restar la inversión._
- D) $20 M — _Ese es el VPN de A: lo escogiste por la TIR, pero entre excluyentes manda el VPN._

**Explicación:** VPN A = 132 ÷ 1,1 − 100 = 20. VPN B = 253 ÷ 1,1 − 200 = 30. Se escoge B: $30 M, aunque su TIR sea menor.

## G · Riesgo

### G01 · Cálculo · 75 s · uso: desafio, duelo

Costos fijos: $20.000.000 al año. Cada caja de café se vende a $50.000 y cuesta $30.000 producirla. ¿Cuántas cajas hay que vender para el punto de equilibrio?

- A) 667 unidades — _Dividiste entre el costo variable; se divide entre el margen._
- **B) 1.000 unidades** ✅
- C) 250 unidades — _Sumaste precio y costo variable; hay que restarlos._
- D) 400 unidades — _Dividiste entre el precio; se divide entre el margen (50.000 − 30.000)._

**Explicación:** Margen por caja = 20.000. 20.000.000 ÷ 20.000 = 1.000 cajas.

### G02 · Cálculo · 60 s · uso: desafio, duelo

Costos fijos $30 M. El margen de contribución es el 40 % de las ventas. ¿Cuáles son las ventas de equilibrio?

- A) $12 M — _Multiplicaste 30 × 40 %; hay que dividir._
- B) $42 M — _Le sumaste el 40 % a los costos fijos._
- C) $50 M — _Dividiste entre 60 % (el costo variable), no entre el margen._
- **D) $75 M** ✅

**Explicación:** 30 ÷ 0,40 = $75 M en ventas.

### G03 · Concepto · 45 s · uso: desafio

¿Qué es el análisis de sensibilidad?

- A) Pedir otra cotización de la maquinaria — _Eso mejora un insumo, pero no es el análisis._
- B) Cambiar todas las variables al tiempo — _Eso es análisis de escenarios._
- **C) Cambiar UNA variable a la vez (precio, ventas, costos) y ver cuánto cambia el VPN** ✅
- D) Calcular la TIR dos veces para confirmarla — _Eso es verificar un cálculo, no analizar riesgo._

**Explicación:** La sensibilidad muestra de qué variable depende más el resultado.

### G04 · Cálculo · 60 s · uso: desafio, duelo

VPN base: $60 M. Por cada 1 % que cae el precio, el VPN baja $5 M. ¿Cuánto puede caer el precio antes de que el VPN llegue a 0?

- A) 300 % — _Multiplicaste 60 × 5; hay que dividir._
- B) 60 % — _Ese es el VPN, no la caída en %._
- C) 5 % — _Ese es el impacto de cada punto, no la caída máxima._
- **D) 12 %** ✅

**Explicación:** 60 ÷ 5 = 12 %. Con una caída mayor del 12 %, el VPN se vuelve negativo.

### G05 · Cálculo · 90 s · uso: desafio, duelo

Escenarios: pesimista VPN −$20 M (probabilidad 20 %), probable $30 M (50 %), optimista $70 M (30 %). ¿Cuál es el VPN esperado?

- A) $80 M — _Sumaste los tres VPN._
- **B) $32 M** ✅
- C) $26,7 M — _Promediaste sin ponderar por la probabilidad._
- D) $21 M — _Solo ponderaste el escenario optimista._

**Explicación:** −20 × 0,2 + 30 × 0,5 + 70 × 0,3 = −4 + 15 + 21 = $32 M.

### G06 · Concepto · 45 s · uso: desafio

Si cada variable sube 10 % (una a la vez), el VPN cambia así: precio +$50 M, costo de materia prima −$20 M, inversión −$10 M. ¿Cuál es la variable más sensible?

- A) La materia prima — _Mueve 20, menos que el precio (50)._
- B) La inversión — _Es la que MENOS mueve el VPN (10)._
- C) Todas por igual — _Con el mismo 10 % de cambio, el impacto es distinto en cada una._
- **D) El precio** ✅

**Explicación:** El precio mueve 50, el mayor cambio: hay que estimarlo con mucho cuidado.

### G07 · Concepto · 45 s · uso: desafio

El VPN dio $40 M. ¿Para qué hacer análisis de riesgo?

- A) Para subir el VPN — _El análisis de riesgo no cambia el VPN; muestra qué tan frágil es._
- **B) Porque se basa en supuestos: si cambian el precio, las ventas o los costos, el VPN podría volverse negativo** ✅
- C) No hace falta: un VPN positivo es una garantía — _El VPN es una estimación: depende de supuestos que pueden fallar._
- D) Solo porque lo exige el banco — _Lo necesita cualquiera que tome la decisión._

**Explicación:** Un VPN positivo con supuestos frágiles puede ser una mala apuesta.

### G08 · Concepto · 45 s · uso: desafio

¿Cuál es la diferencia entre análisis de sensibilidad y análisis de escenarios?

- **A) La sensibilidad mueve una variable a la vez; los escenarios mueven varias juntas** ✅
- B) La sensibilidad mueve varias y los escenarios una — _Es al revés._
- C) Son lo mismo — _Uno aísla una variable y el otro combina varias._
- D) Los escenarios solo se usan para calcular la TIR — _Los escenarios sirven para cualquier indicador._

**Explicación:** Pesimista, probable y optimista son combinaciones de varias variables a la vez.

## Chequeo de estrella "Sello VPN+" (30 s)

- **S01.** Sello VPN+ · Inviertes $100 M y recibes $120 M en el año 1. TMAR 10 %. ¿Cómo es el VPN? → **VPN > 0: ¡crea valor!** (VP de lo que recibes = 109,09; VPN = 9,09.)
- **S02.** Sello VPN+ · Inviertes $100 M y recibes $115 M en el año 1. TMAR 20 %. ¿Cómo es el VPN? → **VPN < 0: destruye valor** (VP de lo que recibes = 95,83; VPN = −4,17.)
- **S03.** Sello VPN+ · Inviertes $100 M y recibes $121 M en el año 2. TMAR 10 %. ¿Cómo es el VPN? → **VPN = 0: rinde justo la TMAR** (VP de lo que recibes = 100; VPN = 0.)
- **S04.** Sello VPN+ · Inviertes $50 M y recibes $30 M en el año 1 y $30 M en el año 2. TMAR 10 %. ¿Cómo es el VPN? → **VPN > 0: ¡crea valor!** (VP de lo que recibes = 52,07; VPN = 2,07.)
- **S05.** Sello VPN+ · Inviertes $200 M y recibes $110 M en el año 1 y $110 M en el año 2. TMAR 10 %. ¿Cómo es el VPN? → **VPN < 0: destruye valor** (VP de lo que recibes = 190,91; VPN = −9,09.)
- **S06.** Sello VPN+ · Inviertes $100 M y recibes $125 M en el año 1. TMAR 25 %. ¿Cómo es el VPN? → **VPN = 0: rinde justo la TMAR** (VP de lo que recibes = 100; VPN = 0.)

## Mini-juego global 1 · ¿Entra o no entra?

- Compra de la maquinaria → **ENTRA** (Inversión del año 0.)
- La depreciación como salida de dinero → **NO ENTRA** (No sale plata: solo reduce impuestos.)
- Estudio de mercado que ya se pagó → **NO ENTRA** (Costo hundido.)
- Capital de trabajo → **ENTRA** (Inversión que se recupera al final.)
- Valor de salvamento al final → **ENTRA** (Entrada del último año.)
- Impuesto de renta → **ENTRA** (Es una salida real de dinero.)
- Arriendo que dejas de recibir por usar tu lote → **ENTRA** (Costo de oportunidad.)
- Intereses del préstamo (en el flujo del proyecto) → **NO ENTRA** (El flujo del proyecto no incluye la financiación.)
- Ventas del año → **ENTRA** (Ingreso operativo.)
- Sueldo del administrador → **ENTRA** (Gasto operativo.)

## Mini-juego global 2 · Carrera del descuento

- VPN = +$20 M → **Aceptar** (la otra opción: Rechazar)
- TIR 12 %, TMAR 15 % → **Rechazar** (la otra opción: Aceptar)
- B/C = 1,3 → **Aceptar** (la otra opción: Rechazar)
- VP de $110 M dentro de 1 año (TMAR 10 %) → **$100 M** (la otra opción: $110 M)
- ¿El PR descontado es mayor o igual que el simple? → **Sí** (la otra opción: No)
- VPN = 0 implica… → **TIR = TMAR** (la otra opción: TIR = 0 %)
- Proyectos excluyentes en conflicto: manda… → **El VPN** (la otra opción: La TIR)
- B/C = 0,8 → **VPN < 0** (la otra opción: VPN > 0)
- VF de $100 M en 1 año al 20 % → **$120 M** (la otra opción: $83 M)
- El PR mide… → **Liquidez** (la otra opción: Rentabilidad)

## Mini-juego global 3 · Termómetro del riesgo

- **T1.** Con un precio de $10.000 el VPN es $120 M. Por cada $1.000 que baja el precio, el VPN baja $40 M. ¿Con qué precio el VPN llega a 0? → **7.000** (120 ÷ 40 = 3 bajadas de $1.000 → precio crítico $7.000.)
- **T2.** Vendiendo 1.000 unidades el VPN es $90 M. Por cada 100 unidades menos, el VPN baja $15 M. ¿Con cuántas unidades el VPN llega a 0? → **400 unidades** (90 ÷ 15 = 6 bajadas de 100 → 400 unidades.)
- **T3.** Con una TMAR del 10 % el VPN es $50 M. Por cada punto que sube la TMAR, el VPN baja unos $10 M. ¿Con qué TMAR el VPN llega a 0 (≈ la TIR)? → **15 %** (50 ÷ 10 = 5 puntos → 15 %, que es aproximadamente la TIR (aproximación lineal).)

## Mini-juego individual · Ordena

- **Ordena el flujo de caja operativo:** Ingresos → − Costos y gastos → − Depreciación → = Utilidad antes de impuestos → − Impuestos → = Utilidad neta → + Depreciación → = Flujo de caja operativo
- **Ordena los pasos de la evaluación financiera:** Definir horizonte e insumos → Armar el flujo de caja → Descontar a la TMAR → Calcular VPN, TIR, B/C y PR → Analizar el riesgo → Decidir

## Mini-juego individual · Caza el error

Usa las preguntas con uso `caza` (C04, C10, C11).

## Jefe final · Junta Directiva del Nevado (TMAR 10 %)

| Proyecto | Flujos | VPN | TIR | B/C | PR simple | PR descontado |
|---|---|---|---|---|---|---|
| P1 Planta de café liofilizado | -400 / 200 / 200 / 200 | 97,4 | 23,4 % | 1,24 | 2 años | 2,35 años |
| P2 App de domicilios de arepas | -100 / 80 / 80 | 38,8 | 38 % | 1,39 | 1,25 años | 1,41 años |
| P3 Puesto de raspados en la feria | -100 / 105 | −4,5 | 5 % | 0,95 | 0,95 años | no recupera |

**Fase 1:** La empresa tiene $400 M disponibles y solo puede hacer UNO. ¿Cuál aprueba la Junta? → **P1**

- **Tiene el mayor VPN: es el que más valor crea en pesos de hoy** ✅
- Tiene la mayor TIR — _La mayor TIR es de P2, y la TIR no ve el tamaño del proyecto._
- Recupera la inversión más rápido — _El más rápido es P3, y tiene VPN negativo._

**Fase 2:** ¡Giro! El presupuesto se recorta a $100 M. ¿Cuál aprueba ahora la Junta? → **P2**

- **Es el único que cabe en el presupuesto con VPN > 0** ✅
- P3, porque cabe y recupera en menos de un año — _P3 cabe, pero su VPN es negativo: destruye valor._
- Ninguno, porque P1 ya no cabe — _P2 cabe y crea valor._

_Plan B del presentador: "¡La TMAR sube al 25 %!" → P1 (TIR ≈ 23 %) queda con VPN negativo y P2 (TIR ≈ 38 %) sigue siendo positivo → P2._
