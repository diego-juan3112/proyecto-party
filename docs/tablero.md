# Tablero — Expedición VPN: Ruta al Nevado

Los valores salen de [js/config.js](../js/config.js), el archivo que se ajusta con la simulación (`node tools/simular.mjs`). Si se cambia algún valor allí, hay que actualizar esta página.

## Mapa general

```
                              🏔️ CUMBRE DEL NEVADO
                           Jefe final: Junta Directiva
                                     ▲
                    🌋 G · Volcán del Riesgo ──► 🎮 Termómetro del riesgo
                                     ▲
                    🧭 F · Encrucijada de Criterios
                                     ▲
                    ⛰️ E · Cordillera de los Indicadores ──► 🎮 Carrera relámpago
                                     ▲
                    ⏳ D · Valle del Tiempo        (desde aquí: eventos del mundo real)
                                     ▲
                    🌊 C · Río del Flujo ──► 🎮 ¿Cuenta o no cuenta?
                                     ▲
                    🧺 B · Plaza de Mercado de Insumos
                                     ▲
                    🚌 Salida: lección A "¿Para qué evaluamos?" + pregunta de práctica
```

Entre una zona y otra, **la Chiva** recoge a todos y los reparte en la nueva zona según el ranking (ver "Remontada").

## Zonas y temario

Las preguntas están escritas para cualquier público: cada término técnico se explica en palabras simples y cada cuenta es de uno o dos pasos, con pista cuando hay que dividir.

| Zona | Pregunta que se proyecta | Bloque del temario | Qué se practica en los desafíos |
|---|---|---|---|
| 🧺 B · Plaza de Mercado de Insumos | ¿Qué cifras necesito para evaluar un negocio? | B. Insumos | Desgaste de las máquinas, impuesto sobre la ganancia, inversión inicial, plata para arrancar, venta de lo usado, horizonte |
| 🌊 C · Río del Flujo | ¿Cuánta plata entra y sale de verdad? | C. Flujo de caja | Plata que queda en el año, inversión inicial y último año, lo ya gastado, lo que se deja de ganar, Caza el error |
| ⏳ D · Valle del Tiempo | ¿Por qué la plata de hoy vale más que la de mañana? | D. Valor del dinero / TMAR | Pasar plata a un año y traerla a hoy (un solo año), mínimo exigido, comparar ofertas |
| ⛰️ E · Cordillera de los Indicadores | ¿Cómo sé si el negocio conviene? | E. VPN, TIR, B/C, PR | Ganancia en pesos de hoy, % que rinde, pesos por cada peso, tiempo de recuperación (todos con casos de un año o cuentas directas) |
| 🧭 F · Encrucijada de Criterios | Si solo puedo hacer uno, ¿cuál escojo? | F. Criterios y contradicciones | Más plata contra más %, presupuesto limitado, recuperar rápido contra ganar |
| 🌋 G · Volcán del Riesgo | ¿Y si algo sale mal? | G. Riesgo | Sensibilidad, punto límite, tres futuros con probabilidades, punto de equilibrio |
| 🏔️ Cumbre | — | Integra B a G | Decidir entre 3 proyectos cuyas cifras no se ponen de acuerdo |

## Anillo de cada zona (12 casillas)

Todas las zonas tienen las mismas casillas, pero giradas, para que no se repita el patrón:

| Cantidad | Casilla |
|---|---|
| 4 | ❓ Desafío |
| 1 | 💰 Ingreso |
| 1 | 🧾 Costo |
| 1 | 🏛️ Impuesto |
| 1 | ⚡ Evento |
| 1 | 🏗️ Inversión |
| 1 | ⚔️ Duelo |
| 1 | 🛍️ Tienda |
| 1 | 🧩 Mini-juego |

La ⭐ se ubica encima de una casilla y cambia de lugar cuando alguien la compra.

| Zona | Casillas 0 → 11 |
|---|---|
| B | 0 ❓ · 1 💰 · 2 ❓ · 3 🛍️ · 4 ⚡ · 5 ❓ · 6 ⚔️ · 7 🧾 · 8 ❓ · 9 🏗️ · 10 🏛️ · 11 🧩 |
| C | 0 ❓ · 1 ⚔️ · 2 🧾 · 3 ❓ · 4 🏗️ · 5 🏛️ · 6 🧩 · 7 ❓ · 8 💰 · 9 ❓ · 10 🛍️ · 11 ⚡ |
| D | 0 🏛️ · 1 🧩 · 2 ❓ · 3 💰 · 4 ❓ · 5 🛍️ · 6 ⚡ · 7 ❓ · 8 ⚔️ · 9 🧾 · 10 ❓ · 11 🏗️ |
| E | 0 🛍️ · 1 ⚡ · 2 ❓ · 3 ⚔️ · 4 🧾 · 5 ❓ · 6 🏗️ · 7 🏛️ · 8 🧩 · 9 ❓ · 10 💰 · 11 ❓ |
| F | 0 ❓ · 1 🏗️ · 2 🏛️ · 3 🧩 · 4 ❓ · 5 💰 · 6 ❓ · 7 🛍️ · 8 ⚡ · 9 ❓ · 10 ⚔️ · 11 🧾 |
| G | 0 💰 · 1 ❓ · 2 🛍️ · 3 ⚡ · 4 ❓ · 5 ⚔️ · 6 🧾 · 7 ❓ · 8 🏗️ · 9 🏛️ · 10 🧩 · 11 ❓ |

## Efecto de cada casilla

| Casilla | Efecto | Qué enseña |
|---|---|---|
| ❓ Desafío | Mini-lección de máx. 30 s (se puede saltar) y reto de 45–90 s. Acierto: +6, más +2 si se responde en la primera mitad del tiempo. Si se equivocan, el celular explica **el error típico que lleva a esa opción**. | El bloque de la zona |
| 💰 Ingreso | +5 (doble con el evento "Boom exportador") | Las ventas son plata que entra |
| 🧾 Costo | −3 (doble con "Devaluación"); el escudo lo bloquea | Los gastos son plata que sale |
| 🏛️ Impuesto | −20 % de las monedas (30 % con "Reforma tributaria"); el escudo lo bloquea | El impuesto se paga sobre lo que se gana |
| 🏗️ Inversión | Opcional: pagar 6 ahora → +3 al entrar a cada zona siguiente, +2 más al final. En B devuelve 3×5 + 2 = 17; en G solo devuelve los 2 del final. El celular dice si conviene, ya pasado a monedas de hoy. | Invertir, plata que llega después, horizonte |
| ⚡ Evento | Evento personal al azar: +3 a +5 o −3 a −4; el escudo bloquea los negativos | Riesgo y sensibilidad |
| ⚔️ Duelo | Duelo de cálculo contra el rival libre de puesto más cercano (prefiere al que va justo adelante). El primero que acierta le quita 5. Si no hay rival libre: duelo contra el Banco (+4). | Cálculo bajo presión |
| 🛍️ Tienda | Comprar 1 objeto (máximo 3 en el bolsillo) | Decidir con recursos limitados |
| 🧩 Mini-juego | "Ordena las cuentas" o "Ordena los pasos para decidir" (+6 si todo queda en orden, +3 si la mitad o más), o "Caza el error" (+6) | Las cuentas de un año y errores típicos |
| ⭐ Estrella | Al pasar o caer en ella: pagar 15 (10 con subsidio, +5 con "Alza de tasas") y acertar en 30 s si un negocio gana más, igual o menos que una opción segura | Un negocio conviene si le gana a lo mínimo exigido (VPN > 0) |

## Eventos globales (uno al entrar a D, E, F y G; no se repiten)

| Evento | Efecto en la zona | Frase que se proyecta |
|---|---|---|
| Alza de tasas | La estrella cuesta 5 más | Si la opción segura paga más, a un negocio le cuesta más ganarle |
| Nuevo competidor | Los desafíos pagan 2 menos | Menos ventas → el negocio gana menos |
| Reforma tributaria | Impuesto del 30 % | Más impuestos → queda menos plata |
| Devaluación | El costo cobra el doble | Costos más altos → el negocio gana menos; por eso hay que probar qué pasa si algo sube |
| Fenómeno de El Niño | Todos −2 (el escudo protege) | Algo que nadie controla puede volver pérdida una ganancia |
| Boom exportador | El ingreso paga el doble | El riesgo también tiene lado bueno |
| Paro camionero | El dado va de 1 a 4 | Si la plata llega más tarde, vale menos hoy |

## Remontada

1. **La Chiva:** la estrella aparece en una casilla al azar. El último sale 2 casillas antes de ella y el líder 10 casillas antes; los demás quedan repartidos entre esos dos extremos.
2. **Capital semilla:** +6, +4 y +2 para el último, el penúltimo y el antepenúltimo en cada cambio de zona.
3. **Subsidio:** los 3 últimos al entrar a la zona pagan 10 por la estrella.
4. **Últimas paradas** (zonas E, F y G): los 3 últimos reciben un objeto gratis.
5. **Estrellas sorpresa:** Analista siempre, más 2 al azar entre Duelista, Remontada (escaló ≥ 2 puestos), Sobreviviente (más monedas perdidas por golpes) e Inversionista.

**Resultado de 1.000 partidas simuladas por escenario (8 y 10 equipos):**
- Duración de la parte jugable: p50 de **33–34 min** y p90 de **34–35 min**.
- El último después de la zona D termina en el top 3 en el **16–29 %** de las partidas, y en la mitad superior en el **35–39 %**.
- Solo el 0,9–1,2 % de los equipos termina sin estrellas.
- Saber sí importa: la correlación entre habilidad y puesto final es de **0,51–0,52**.
