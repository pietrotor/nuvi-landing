# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary buyer and operator is the owner or administrator of a Bolivian beauty, esthetics,
medical, or outpatient center with a small professional team. They commonly serve clients or
patients while also answering WhatsApp, managing appointments, checking deposits when applicable,
and tracking the daily schedule.

The end user is the center's client or patient, who expects to ask operational questions, book,
change, or cancel an appointment through WhatsApp without learning a new app.

## Product Purpose

Nuvi gives beauty and medical centers a 24/7 virtual assistant for WhatsApp. It answers operational
questions, offers only real available slots, books into the shared agenda, requests deposits using
the business's bank QR when applicable, sends reminders, and supports multi-session package
balances for businesses that use them.

The public site's primary action is requesting a personalized demo through WhatsApp. A client-side
experiment may open a short form first; the form only pre-fills the WhatsApp message and stores no
lead data.

## Positioning

The same scheduling truth powers WhatsApp, the owner panel, and the public booking page. Nuvi does
not merely collect booking requests: the assistant checks real availability and writes the confirmed
appointment into the agenda the team already operates.

## Operating Context

- Clients contact the business through its existing WhatsApp number.
- The owner may be physically serving a client when new messages arrive.
- Deposits are paid to the business's own Bolivian bank QR and verified manually by the team.
- The owner monitors appointments, conversations, receipts, and packages from the Nuvi panel.
- Founding customers receive assisted onboarding for services, professionals, schedules, policies,
  FAQs, and the assistant's configurable name and tone.

## Capabilities and Constraints

- The assistant always identifies itself honestly and never pretends to be human.
- It gives no medical or personalized esthetic advice and hands those conversations to a professional.
- It never offers or books an unavailable slot and rechecks availability before booking.
- Package balance is decremented only when an appointment is marked attended.
- Money never passes through Nuvi.
- Records are not deleted; cancellations and other outcomes are state transitions.
- Strict tenant isolation applies to all product data.
- V1 excludes Google Calendar, mass campaigns, automatic bank verification, native apps, and other
  features explicitly outside PRD scope.
- User-facing language is Bolivian Spanish. Currency is tenant-configurable and defaults to BOB,
  displayed as Bs.

## Brand Commitments

- Product name: Nuvi.
- Default assistant name: Vale, configurable per business.
- Primary product color: `#14B8A6`, configured in `nuvia-frontend/src/main.tsx`.
- The landing uses the same teal mark as `nuvia-frontend/public/favicon.svg`.
- Product typography is Poppins.
- Voice is direct, warm, and concrete, using the vocabulary of appointments, deposits, clients,
  packages, and schedules rather than technical AI language.

## Evidence on Hand

- Product requirements: `../docs/prd-nuvi-v1.md`.
- Technical boundaries: `../docs/architecture.md`.
- Existing product color: `../nuvia-frontend/src/main.tsx`.
- Current brand source: `../nuvia-frontend/public/favicon.svg`.
- Existing product motion reference: the animated WhatsApp-to-agenda sequence under
  `../nuvia-frontend/src/features/auth/components/LoginAside/`.
- No customer logos, testimonials, measured outcomes, or conversion benchmarks are available.
  Future work must not fabricate them.

## Product Principles

1. Show the real workflow instead of describing generic AI benefits.
2. Keep the owner in control of conversations, money, and the final deposit verification.
3. Make availability and package balances trustworthy across every channel.
4. Meet owners where they already work: their existing WhatsApp and their daily agenda.
5. Keep V1 focused and honest; never market unavailable features as coming capabilities.

## Accessibility & Inclusion

The public site must support keyboard navigation, visible focus, WCAG AA contrast, responsive layouts
from small phones through desktop, and a complete static state under `prefers-reduced-motion`.
