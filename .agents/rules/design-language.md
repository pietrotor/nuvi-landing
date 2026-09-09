---
description: Obligatorio - lenguaje visual del sitio público de Nuvi
activation: paths
paths:
  - 'src/**/*.astro'
  - 'src/**/*.css'
---

# Lenguaje visual - nuvi-landing

## Tesis

Nuvi hace visible un traspaso: una conversación en WhatsApp se convierte en una cita real sin que
quien administra el centro toque el teléfono. El sitio debe sentirse como ese movimiento, no como un folleto de
software ni como el panel administrativo ampliado.

## Marca confirmada

- Primario: `#14B8A6`, configurado por `ThemeProvider` en `nuvia-frontend/src/main.tsx`.
- Marca: el SVG exacto de `nuvia-frontend/public/favicon.svg`, copiado a
  `public/nuvi-logo.svg` y usado junto al wordmark Nuvi.
- Tipografía: Poppins, la misma del producto.
- El símbolo y el sistema interactivo usan el teal confirmado de la marca.

## Dirección

**Flujo vivo**: una superficie clara y fresca donde grandes campos mint organizan la página. La
animación celular → agenda es la firma. Todo lo demás es soporte silencioso.

Diseño: varianza 8, movimiento 8, densidad 4.

## Paleta

Todo vive como token de `src/styles/global.css`; no usar hex sueltos en componentes.

| Rol         | Valor     |
| ----------- | --------- |
| `brand-500` | `#14B8A6` |
| `brand-600` | `#0D9488` |
| `brand-700` | `#0F766E` |
| `brand-100` | `#CCFBF1` |
| `brand-50`  | `#F0FDFA` |
| `canvas`    | `#F7FAF9` |
| `surface`   | `#FFFFFF` |
| `ink-950`   | `#10211F` |
| `ink-700`   | `#334F4B` |
| `ink-500`   | `#647B77` |
| `line`      | `#DCE8E5` |

El teal ocupa regiones completas, no aparece como confeti: escenario del hero, CTA, selección de
horario y cita recién creada. Los colores semánticos de estados del panel se mantienen solo cuando
la demostración muestra estados reales.

## Composición

- Hero de dos columnas; máximo dos líneas de título en desktop y CTA visible en el primer viewport.
- El hero muestra una vista previa del chat; la demostración completa vive en una sección propia.
- La demostración interactiva ocupa más área visual que cualquier decoración.
- Máximo tres eyebrows en toda la home.
- No repetir dos veces la misma familia de sección.
- No bento de seis tarjetas con icono.
- No listas largas separadas por una línea en cada fila.
- Un solo tema claro. El teal puede cubrir secciones, pero no convertirlas en una segunda web oscura.

## Forma

- Contenedores de producto: radio 16px a 24px.
- Celular: marco oscuro con radio exterior 42px e interior 35px, sin rotación.
- Botones: pill.
- Inputs: radio 12px.
- Sombras tintadas en teal/ink; nunca glow de neón.

## Composición de la escena

En el hero aparece solo el celular con un comprobante pequeño de cita confirmada. En la sección de
demo, celular y agenda se leen en paralelo sin solaparse. Debajo de 1024px la escena se apila en
vertical.

La agenda muestra citas previas reales además del horario libre donde va a caer la nueva reserva.
Así la cita nueva aparece por contraste, no sobre un calendario vacío.

El celular refleja el punto de vista de quien pide la cita: sus mensajes salen a la derecha en verde claro y
las respuestas del centro entran a la izquierda en blanco. Vale se identifica como asistente virtual
dentro de cada respuesta.

## Movimiento

La interacción protagonista cuenta el ciclo de una cita en cuatro capítulos conectados:

1. Vale ofrece horarios reales y la elección aparece en la agenda;
2. envía el QR del negocio, recibe el comprobante y espera la verificación manual;
3. manda el recordatorio y permite confirmar o pedir un cambio;
4. libera el horario anterior, ofrece alternativas y guarda el nuevo.

La secuencia se reproduce automáticamente una vez para el centro de estética y luego para el centro
médico. Si la visitante elige un vertical, capítulo, horario, respuesta o acción de verificación,
toma el control y se detiene el avance automático. El chat y la superficie operativa deben mostrar
siempre el mismo estado. Animar `transform`, `opacity` y sombras, no ancho, alto, `top` o `left`.
Bajo `prefers-reduced-motion`, cada capítulo llega a su estado resuelto sin espera.

La demo médica solo muestra gestión de agenda. Las dudas clínicas se derivan a la profesional y
nunca se simula consejo médico.

Las demás animaciones son de apoyo: entrada inicial coordinada, reveal de secciones y feedback de
CTA. No poner una animación diferente en cada tarjeta.

## Prohibido

- La dirección anterior de papel cálido y negro editorial.
- Violeta como color primario.
- El SVG local `nuvi-mark` como marca.
- Teléfono o calendario que sean solo decoración: deben contar la misma cita.
- Tres tarjetas iguales con icono, título y descripción.
- Gradiente de texto, glassmorphism, grillas decorativas y orbes sin función.
- Prueba social, métricas o testimonios inventados.
- Animación sin fallback estático y sin `prefers-reduced-motion`.
