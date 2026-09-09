# AGENTS.md — nuvi-landing

Sitio informativo público de Nuvi (marketing, no producto): Astro + Tailwind v4, estático.
Package manager: **pnpm**. Requiere **Node >= 22.12**.

Antes de escribir copy o secciones, leé el producto ([../docs/prd-nuvi-v1.md](../docs/prd-nuvi-v1.md)).
Este sitio **no** consume la API ni comparte código con `nuvia-frontend`: es una superficie separada.

## Contexto obligatorio

| Doc                                                                  | Rol                                                                                                              |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [.agents/rules/design-language.md](.agents/rules/design-language.md) | Paleta, tipografía, radios, ritmo y lista de prohibiciones visuales. **Leelo antes de tocar `.astro` o `.css`.** |
| [.agents/product-marketing.md](.agents/product-marketing.md)         | Audiencia, dolor, voz, objeciones y qué no se puede prometer. **Leelo antes de escribir copy.**                  |

El sitio hereda la marca del producto. Los colores salen de `eduno-design-system/src/index.css` y de
`nuvia-frontend`; no se inventa una paleta de marketing.

## Skills

Los skills no se disparan solos. Leé el `SKILL.md` que toca antes de escribir, no todos.
Para copy y marketing, el orquestador es **nuvi-copy**: lee PRD + product-marketing y recién
después abre copywriting / copy-editing / CRO.

| Cuándo                                        | Skill                                                                                                                                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Siempre que toques UI                         | [.agents/skills/design-taste-frontend/SKILL.md](.agents/skills/design-taste-frontend/SKILL.md) — anti-slop, auditoría primero                                                         |
| Dirección estética de una sección nueva       | [.agents/skills/frontend-design/SKILL.md](.agents/skills/frontend-design/SKILL.md) + [.agents/skills/high-end-visual-design/SKILL.md](.agents/skills/high-end-visual-design/SKILL.md) |
| Elegir paleta, tipografía o patrón de UX      | [.agents/skills/ui-ux-pro-max/SKILL.md](.agents/skills/ui-ux-pro-max/SKILL.md) y su `scripts/search.py`                                                                               |
| Estructura, IA o crítica de una página        | [.agents/skills/designing-beautiful-websites/SKILL.md](.agents/skills/designing-beautiful-websites/SKILL.md)                                                                          |
| Cualquier copy o contenido de marketing       | [.agents/skills/nuvi-copy/SKILL.md](.agents/skills/nuvi-copy/SKILL.md) — PRD, audiencia, voz; elige el skill de abajo                                                                 |
| Copy nuevo (hero, secciones, CTA)             | [.agents/skills/copywriting/SKILL.md](.agents/skills/copywriting/SKILL.md)                                                                                                            |
| Pulir copy existente                          | [.agents/skills/copy-editing/SKILL.md](.agents/skills/copy-editing/SKILL.md)                                                                                                          |
| Persuasión / por qué no convence              | [.agents/skills/marketing-psychology/SKILL.md](.agents/skills/marketing-psychology/SKILL.md)                                                                                          |
| Conversión de la home                         | [.agents/skills/cro/SKILL.md](.agents/skills/cro/SKILL.md)                                                                                                                            |
| Diálogo / modal de lead                       | [.agents/skills/popups/SKILL.md](.agents/skills/popups/SKILL.md)                                                                                                                      |
| Experimento CTA direct vs form                | [.agents/skills/ab-testing/SKILL.md](.agents/skills/ab-testing/SKILL.md)                                                                                                              |
| SEO on-page                                   | [.agents/skills/seo-audit/SKILL.md](.agents/skills/seo-audit/SKILL.md)                                                                                                                |
| JSON-LD / rich results                        | [.agents/skills/schema/SKILL.md](.agents/skills/schema/SKILL.md)                                                                                                                      |
| Qué publicar además de la home                | [.agents/skills/content-strategy/SKILL.md](.agents/skills/content-strategy/SKILL.md)                                                                                                  |
| VOC / ICP / entrevistas                       | [.agents/skills/customer-research/SKILL.md](.agents/skills/customer-research/SKILL.md)                                                                                                |
| Actualizar el brief de marketing              | [.agents/skills/product-marketing/SKILL.md](.agents/skills/product-marketing/SKILL.md) → [.agents/product-marketing.md](.agents/product-marketing.md)                                 |
| Revisión final de accesibilidad e interacción | [.agents/skills/web-design-guidelines/SKILL.md](.agents/skills/web-design-guidelines/SKILL.md)                                                                                        |
| Dudas de API de Astro                         | [.agents/skills/astro/SKILL.md](.agents/skills/astro/SKILL.md)                                                                                                                        |

```bash
# cwd: nuvi-landing
python3 .agents/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Nuvi"
```

Se instalan con `npx skills add <owner/repo@skill>` y quedan fijadas en `skills-lock.json`. Revisá
un skill antes de usarlo: corren con permisos completos y varios del registro son publicidad de un
CLI de pago.

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm check          # astro check (typecheck)
pnpm lint           # check + prettier --check
pnpm format
```

## Decisiones fijas

- **Astro estático.** No agregues SSR ni un framework de UI si una isla de `<script>` alcanza.
- **Tailwind v4** vía `@tailwindcss/vite`. Los tokens viven en `@theme` de
  [src/styles/global.css](src/styles/global.css); no escribas hex sueltos en las plantillas.
- **Iconos:** `astro-icon` con Phosphor (`ph:*`) y la marca local en `src/icons/`. Una sola familia.
- **Imágenes:** siempre por `astro:assets` (`<Image />`) con `widths` + `sizes`, formato AVIF.

## Reglas del sitio

- **Todo el copy visible vive en [src/content/site.ts](src/content/site.ts)**, nunca inline en una
  plantilla ni en un script. Español de Bolivia; el código, en inglés.
- **No inventes prueba social.** Sin testimonios, logos de clientes, métricas de resultado ni
  porcentajes que no vengan de datos reales. Las metas del PRD no son resultados.
- **No prometas nada fuera de la V1** (PRD §4): sin Google Calendar, campañas masivas, verificación
  bancaria automática ni apps nativas.
- **Nuvi no custodia dinero.** El QR y la seña son del negocio; la verificación es manual.
- El número de WhatsApp y la URL del sitio salen de `PUBLIC_WHATSAPP_NUMBER` y `PUBLIC_SITE_URL`
  (ver [.env.example](.env.example)), nunca hardcodeados en una sección.

## Experimento de conversión

[src/scripts/experiment.ts](src/scripts/experiment.ts) asigna una variante estable por visitante
(`localStorage`) y la expone en `document.documentElement.dataset.experimentVariant`:

| Variante | Comportamiento del CTA                                                 |
| -------- | ---------------------------------------------------------------------- |
| `direct` | Abre WhatsApp con el mensaje inicial precargado                        |
| `form`   | Abre el diálogo, y al enviarlo abre WhatsApp con los datos precargados |

**El formulario no persiste nada**: solo arma el texto del mensaje. Si agregás un campo, sumá su
etiqueta a `site.form.whatsappLabels` en lugar de escribirla en el script.

Los eventos (`variant_assigned`, `cta_clicked`, `form_started`, `form_submitted`, `whatsapp_opened`)
se encolan en `window.nuviEvents` y se emiten como evento `nuvi:marketing`. Para conectar GA4 o
Plausible, suscribite a ese evento y reproducí la cola; no metas el proveedor dentro de
[src/scripts/analytics.ts](src/scripts/analytics.ts).

## Antes de terminar

`pnpm lint` y `pnpm build`. Revisá 375 / 768 / 1024 / 1440 px, foco visible por teclado y que
`prefers-reduced-motion` deje la página quieta.
