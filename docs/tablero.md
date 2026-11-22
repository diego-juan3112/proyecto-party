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
                    ⛰️ E · Cordillera de los Indicadores ──► 🎮 Carrera del descuento
                                     ▲
                    ⏳ D · Valle del Tiempo        (desde aquí: eventos del mundo real)
                                     ▲
                    🌊 C · Río del Flujo ──► 🎮 ¿Entra o no entra al flujo?
                                     ▲
                    🧺 B · Plaza de Mercado de Insumos
                                     ▲
                    🚌 Salida: lección A "¿Para qué evaluamos?" + pregunta de práctica
```

Entre una zona y otra, **la Chiva** recoge a todos y los reparte en la nueva zona según el ranking (ver "Remontada").

## Zonas y temario

| Zona | Bloque del temario | Mini-lección proyectada al entrar | Qué se practica en los desafíos |
|---|---|---|---|
| 🧺 B · Plaza de Mercado de Insumos | B. Insumos | `insumos` | Depreciación, escudo fiscal, impuestos, capital de trabajo, salvamento, horizonte |
| 🌊 C · Río del Flujo | C. Flujo de caja | `flujo_estructura` | Armar el flujo operativo, año 0 y último año, costos hundidos, costo de oportunidad, Caza el error |
| ⏳ D · Valle del Tiempo | D. Valor del dinero / TMAR | `valor_tiempo` | VP, VF, TMAR como dato, equivalencias |
| ⛰️ E · Cordillera de los Indicadores | E. VPN, TIR, B/C, PR | `vpn` | Cálculo e interpretación de los 4 indicadores (PR simple y descontado) |
| 🧭 F · Encrucijada de Criterios | F. Criterios y contradicciones | `criterios` | Excluyentes, restricción de capital, PR vs. VPN, varias TIR |
| 🌋 G · Volcán del Riesgo | G. Riesgo | `sensibilidad` | Sensibilidad, valor crítico, escenarios ponderados, punto de equilibrio |
| 🏔️ Cumbre | Integra B a G | — | Decidir entre 3 proyectos con indicadores contradictorios |

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
| 💰 Ingreso | +5 (doble con el evento "Boom exportador") | Ingresos = entradas del flujo |
| 🧾 Costo | −3 (doble con "Devaluación"); el escudo lo bloquea | Costos y gastos = salidas |
| 🏛️ Impuesto | −20 % de las monedas (30 % con "Reforma tributaria"); el escudo lo bloquea | El impuesto se paga sobre la utilidad |
| 🏗️ Inversión | Opcional: pagar 6 ahora → +3 al entrar a cada zona siguiente, +2 de salvamento al final. En B devuelve 3×5 + 2 = 17; en G solo devuelve los 2 de salvamento. | Inversión, flujos futuros, horizonte, salvamento |
| ⚡ Evento | Evento personal al azar: +3 a +5 o −3 a −4; el escudo bloquea los negativos | Riesgo y sensibilidad |
| ⚔️ Duelo | Duelo de cálculo contra el rival libre de puesto más cercano (prefiere al que va justo adelante). El primero que acierta le quita 5. Si no hay rival libre: duelo contra el Banco (+4). | Cálculo bajo presión |
| 🛍️ Tienda | Comprar 1 objeto (máximo 3 en el bolsillo) | Decidir con recursos limitados |
| 🧩 Mini-juego | "Ordena el flujo" o "Ordena la evaluación" (+6 si todo queda en orden, +3 si la mitad o más), o "Caza el error" (+6) | Estructura del flujo y errores típicos |
| ⭐ Estrella | Al pasar o caer en ella: pagar 15 (10 con subsidio, +5 con "Alza de tasas") y acertar en 30 s el signo de un VPN | VPN > 0 = crea valor |

## Eventos globales (uno al entrar a D, E, F y G; no se repiten)

| Evento | Efecto en la zona | Frase para el VPN |
|---|---|---|
| Alza de tasas | La estrella cuesta 5 más | Tasa más alta → flujos futuros valen menos → VPN baja |
| Nuevo competidor | Los desafíos pagan 2 menos | Menos ingresos → menor VPN |
| Reforma tributaria | Impuesto del 30 % | Más impuestos → menor flujo |
| Devaluación | El costo cobra el doble | Costos más altos → menor VPN; por eso se hace sensibilidad |
| Fenómeno de El Niño | Todos −2 (el escudo protege) | Un choque externo puede volver negativo el VPN |
| Boom exportador | El ingreso paga el doble | El riesgo también tiene lado bueno |
| Paro camionero | El dado va de 1 a 4 | Los retrasos corren los flujos al futuro y valen menos |

## Remontada

1. **La Chiva:** la estrella aparece en una casilla al azar. El último sale 2 casillas antes de ella y el líder 10 casillas antes; los demás quedan repartidos entre esos dos extremos.
2. **Capital semilla:** +6, +4 y +2 para el último, el penúltimo y el antepenúltimo en cada cambio de zona.
3. **Subsidio:** los 3 últimos al entrar a la zona pagan 10 por la estrella.
4. **Últimas paradas** (zonas E, F y G): los 3 últimos reciben un objeto gratis.
5. **Estrellas sorpresa:** Analista siempre, más 2 al azar entre Duelista, Remontada (escaló ≥ 2 puestos), Sobreviviente (más monedas perdidas por golpes) e Inversionista.

**Resultado de 1.000 partidas simuladas por escenario (8 y 10 equipos):**
- El último después de la zona D termina en el top 3 en el **19–25 %** de las partidas, y en la mitad superior en el **36–44 %**.
- Solo el 0,4–1,3 % de los equipos termina sin estrellas.
- Saber sí importa: la correlación entre habilidad y puesto final está entre **0,38 y 0,54**.
