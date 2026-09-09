---
name: nuvi-copy
description: Improve Nuvi public-site copy (headlines, CTAs, FAQ, hero, form, WhatsApp messages) grounded in the PRD and its Bolivian health-and-esthetics audience. Use when writing, rewriting, editing, or reviewing marketing copy in nuvi-landing, especially src/content/site.ts, or when the user mentions copy, contenido, headlines, CTA, voz, audiencia, or PRD messaging.
---

# Nuvi landing copy

Orchestrator for marketing text on the public Nuvi site. Other marketing skills are tools; this file is the gate.

## Always read first (in this order)

1. [docs/prd-nuvi-v1.md](../../../../docs/prd-nuvi-v1.md) — product truth, V1 scope, out-of-scope (§4)
2. [.agents/product-marketing.md](../../product-marketing.md) — audience, pain, voice, objections, bans
3. [src/content/site.ts](../../../src/content/site.ts) — only place visible copy lives

Do not invent a second audience. The buyer manages a Bolivian appointment-based business with 1–6
professionals: an esthetics/beauty center, spa, medical practice, small clinic or health center. The
person receiving the service is not the buyer.

## Which skill to open next

Read the matching `SKILL.md` **before** drafting. Do not load all of them.

| Task | Skill |
| --- | --- |
| New section / rewrite from scratch | [copywriting](../copywriting/SKILL.md) |
| Tighten existing `site.ts` without changing the argument | [copy-editing](../copy-editing/SKILL.md) |
| Why a section fails to persuade | [marketing-psychology](../marketing-psychology/SKILL.md) then [cro](../cro/SKILL.md) |
| Page structure / conversion of the home | [cro](../cro/SKILL.md) |
| Lead dialog copy | [popups](../popups/SKILL.md) |
| Direct vs form CTA experiment | [ab-testing](../ab-testing/SKILL.md) |
| Meta title, description, crawl/index | [seo-audit](../seo-audit/SKILL.md) |
| JSON-LD | [schema](../schema/SKILL.md) |
| What to publish next (not this homepage) | [content-strategy](../content-strategy/SKILL.md) |
| Interviews, VOC, ICP refresh | [customer-research](../customer-research/SKILL.md) |
| Refresh `.agents/product-marketing.md` | [product-marketing](../product-marketing/SKILL.md) |

If a generic skill recommends social proof, scarcity timers, invented metrics, or features outside PRD §4, **discard that recommendation**. Local rules win.

## Non-negotiable copy rules

- Spanish of Bolivia, **vos**. Use the buyer's words: cita, seña, plantón, paquete, sesión, agenda,
  turno. Use neutral language in general copy because each tenant configures whether it says
  cliente, clienta or paciente.
- One primary action: **pedir una demo** (WhatsApp). Do not add a second conversion intent.
- Agent name is configurable (default Vale). Do not lock product behavior to the string "Vale".
- Money never passes through Nuvi. QR and seña belong to the business; verification is manual.
- No invented testimonials, logos, client counts, or result percentages. PRD goals are not results.
- No V1-out-of-scope promises: Google Calendar, campañas masivas, verificación bancaria automática,
  apps nativas, historial clínico or clinical advice.
- No "IA", "automatización", "leads", "workflow" in user-facing copy unless the buyer would say it.
- All visible strings go in `src/content/site.ts`, never inline in templates or scripts.

## Output

Propose copy in `site.ts` keys. For headlines and CTAs give 2–3 options with a one-line why. Keep annotations in English; keep user-facing strings in Spanish.
