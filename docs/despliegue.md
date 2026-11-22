# Cómo ensayar y publicar Expedición VPN

## 1. Ensayar en el computador (sin internet ni Firebase)

```
npm run local
```

Abre `http://localhost:8080` y escoge una opción:

- **Proyectar la partida:** abre la pantalla con el QR. Para hacer de equipo, copia el enlace del pie de la pantalla en **otra pestaña del mismo navegador**. Repítelo por cada equipo que quieras simular.
- **Ver una partida de demostración:** 8 equipos simulados juegan solos a velocidad ×3. Sirve para ensayar el guion.
- `http://localhost:8080/?modo=pantalla&demo=10&vel=1` corre una demo con 10 equipos a velocidad real.

En `localhost` el juego usa automáticamente el **modo local**, que conecta pestañas del mismo navegador sin pasar por Firebase.

### Controles de la pantalla
| Tecla / botón | Acción |
|---|---|
| Barra espaciadora / ⏯ Pausa | Pausar o reanudar el reloj del juego |
| → / ⏭ Siguiente | Cerrar el momento actual (vence lo pendiente) y pasar al siguiente |
| F / ⛶ | Pantalla completa |
| ⬇ CSV | Descargar resultados por equipo (para el profesor) |
| Clic en un equipo del marcador | **Modo presentador:** responder por ese equipo (si se quedó sin batería o sin señal) |

Si se recarga la pantalla en plena partida, el juego pregunta si quieres **continuarla**. El estado queda guardado en el navegador.

## 2. Publicar en internet (una vez, y cada vez que cambies algo)

Requisitos: `firebase-tools` instalado y `firebase login` hecho.

**Una sola vez: activar la autenticación anónima.** Las reglas la usan para que solo la pantalla pueda escribir el estado del juego y solo cada celular pueda enviar las acciones de su equipo. A los jugadores no se les pide ningún dato.
1. En la consola de Firebase: **Build → Authentication → Comenzar**.
2. Pestaña **Método de acceso** → **Anónimo** → **Habilitar** → Guardar.

Luego, publicar la página y las reglas:

```
firebase deploy
```

Al terminar, el juego queda en **https://expedicion-vpn.web.app**:
- Pantalla: `https://expedicion-vpn.web.app/?modo=pantalla`
- Los celulares entran escaneando el QR. Si no, en `https://expedicion-vpn.web.app` escriben el código de la sala.

Solo se suben la página, `css/`, `js/` y `data/`. Las carpetas `tools/` y `docs/`, las capturas y `node_modules` no se publican (ver `firebase.json`).

## 3. Prueba real antes de la exposición (10 minutos)
1. En el portátil, abre `https://expedicion-vpn.web.app/?modo=pantalla`.
2. Con 2 o 3 celulares **con datos móviles**, escanea el QR y únete con mascotas distintas.
3. Presiona **Empezar** y juega la pregunta de práctica y un turno.
4. Recarga uno de los celulares a propósito: debe volver a su equipo sin pedir datos.
5. Prueba **Siguiente** y **Pausa** desde el portátil.

## 4. Si algo falla el día de la exposición
| Problema | Solución |
|---|---|
| Los celulares no cargan | Revisen que usen datos móviles. La U a veces bloquea conexiones en el wifi. |
| Un equipo no logra entrar | Que juegue con otro equipo, o que el operador responda por ellos (clic en su fila del marcador). |
| Se cae el internet del portátil | Abre `https://expedicion-vpn.web.app/?modo=pantalla&red=local` (o `npm run local`). Los equipos dicen sus respuestas en voz alta y el operador las marca en el modo presentador. |
| La pantalla se recargó | Acepta "continuar la partida": la sala y los equipos se mantienen. |

## 5. Herramientas de verificación
```
npm run verificar   # recalcula todas las respuestas del banco y revisa ambigüedad
npm run simular     # 1.000 partidas simuladas: duración y balance
npm run e2e         # partida completa con 10 celulares simulados en Edge (capturas en /capturas)
```
