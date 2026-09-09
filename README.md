# nuvi-landing

Sitio informativo público de [Nuvi](../docs/prd-nuvi-v1.md): un asistente por WhatsApp que atiende,
agenda, ordena señas y controla paquetes para centros de estética en Bolivia.

Construido con **Astro** (estático) y **Tailwind v4**. Es una superficie de marketing independiente:
no consume la API de `nuvia-backend` ni comparte componentes con `nuvia-frontend`.

## Requisitos

- Node >= 22.12
- pnpm

## Puesta en marcha

```bash
pnpm install
cp .env.example .env   # completá PUBLIC_WHATSAPP_NUMBER y PUBLIC_SITE_URL
pnpm dev
```

| Comando        | Qué hace                                    |
| -------------- | ------------------------------------------- |
| `pnpm dev`     | Servidor de desarrollo                      |
| `pnpm build`   | Build estático en `dist/` (incluye sitemap) |
| `pnpm preview` | Sirve el build                              |
| `pnpm check`   | Typecheck de Astro y TypeScript             |
| `pnpm lint`    | `check` + verificación de formato           |
| `pnpm format`  | Aplica Prettier                             |

## Variables de entorno

| Variable                 | Uso                                                       |
| ------------------------ | --------------------------------------------------------- |
| `PUBLIC_SITE_URL`        | URL canónica, Open Graph y sitemap                        |
| `PUBLIC_WHATSAPP_NUMBER` | Destino de todos los CTA, solo dígitos con código de país |

## Estructura

```
.agents/
  product-marketing.md   audiencia, voz y qué no se puede prometer
  rules/                 lenguaje visual del sitio
  skills/                skills de diseño y copy, fijadas en skills-lock.json
src/
  assets/      imágenes optimizadas por astro:assets
  components/  secciones y piezas reutilizables
  content/     site.ts: todo el copy visible y la configuración comercial
  icons/       marca de Nuvi para astro-icon
  layouts/     BaseLayout: metadatos, SEO, JSON-LD, header y footer
  lib/         helpers compartidos
  scripts/     experimento de conversión, cola de analítica y reveal al scroll
  styles/      tokens de Tailwind y estilos base
```

El copy se edita en `src/content/site.ts`, no en las plantillas.

## Diseño

El sitio **hereda la marca del producto**: el primario es el teal `#14B8A6` configurado en
`nuvia-frontend/src/main.tsx`, usa Poppins y copia el símbolo exacto desde
`nuvia-frontend/public/favicon.svg`.

Las reglas completas — paleta, escala tipográfica, radios, ritmo de secciones y lista de
prohibiciones — están en [.agents/rules/design-language.md](.agents/rules/design-language.md).
Leelas antes de tocar un `.astro` o el CSS.

`HeroWhatsApp.astro` y `WhatsAppDemo.astro` muestran el recorrido automático de una consulta por
WhatsApp hasta la cita y la seña verificadas. Con `prefers-reduced-motion` muestran directamente
el estado final completo.

## Conversión y A/B testing

Cada visitante recibe una variante estable del CTA principal: `direct` abre WhatsApp de inmediato y
`form` pide antes unos datos básicos para precargar el mensaje. El formulario no guarda información
en ningún lado: solo arma el texto que se abre en WhatsApp.

Los eventos quedan encolados en `window.nuviEvents` y se emiten como `nuvi:marketing`, listos para
conectar el proveedor de analítica que se elija.

Detalles de convenciones para agentes de código: [AGENTS.md](AGENTS.md).
