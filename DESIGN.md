---
version: alpha
name: Nuvi Landing
description: Public SaaS landing where a WhatsApp conversation visibly becomes an appointment.
colors:
  brand-50: '#f0fdfa'
  brand-100: '#ccfbf1'
  brand-200: '#99f6e4'
  brand-400: '#2dd4bf'
  brand-500: '#14b8a6'
  brand-600: '#0d9488'
  brand-700: '#0f766e'
  brand-800: '#115e59'
  canvas: '#f7faf9'
  surface: '#ffffff'
  ink-950: '#10211f'
  ink-900: '#19312e'
  ink-700: '#334f4b'
  ink-500: '#647b77'
  ink-300: '#9fb1ae'
  line: '#dce8e5'
  whatsapp-header: '#008069'
  whatsapp-accent: '#00a884'
  whatsapp-wallpaper: '#efeae2'
  whatsapp-outgoing: '#d9fdd3'
  whatsapp-meta: '#667781'
  whatsapp-check: '#53bdeb'
  whatsapp-ink: '#111b21'
  whatsapp-choice: '#f4fffc'
typography:
  sans:
    fontFamily: Poppins
---

## Overview

Nuvi serves beauty-center owners. Its public site uses a light, teal-led visual language built around one product story: a WhatsApp conversation becoming a confirmed appointment.

## Colors

Use teal for the brand symbol, actions, selected times, created appointments, and large supporting fields. Keep the rest of the interface on cool canvas, white surfaces, and green-tinted ink.

## Typography

Use Poppins throughout. Headlines are heavy and compact; body copy stays conversational and easy to scan.

## Layout

The hero pairs concise copy with a phone-only preview and a compact appointment receipt. The full phone-to-calendar demonstration belongs to its own section, where both surfaces remain independently legible. Collapse that demonstration into a strict single column below desktop width. Keep section families varied and use no more than three eyebrow labels on the home page.

## Elevation & Depth

Tint shadows toward teal or ink. Elevation identifies real hierarchy such as the phone, calendar, dialog, and primary action; it is not ornamental.

## Shapes

Product surfaces use soft corners, the phone follows a physical-device silhouette, buttons are pills, and form controls use tighter corners.

## Components

The canonical brand lockup combines the exact teal symbol from `nuvia-frontend/public/favicon.svg`, copied as `public/nuvi-logo.svg`, with the Nuvi wordmark. The phone reproduces the client-side structure of a WhatsApp conversation: client messages leave on the right, Vale replies on the left, and every reply identifies Vale as a virtual assistant. The main demo follows one appointment through booking, deposit by the business's QR, reminder, and rescheduling. Every chapter changes both the WhatsApp conversation and its operational consequence in the agenda or deposit panel. It automatically plays the beauty-center case followed by the medical-center case; choosing a vertical, chapter, time, reminder response, or verification action transfers control to the visitor. Reduced-motion users receive the resolved state immediately.

## Do's and Don'ts

- Do treat the phone-to-calendar sequence as the signature visual.
- Do use the teal token system instead of component-local hex values.
- Do preserve the exact sidebar logo asset.
- Do keep medical demonstrations operational: scheduling and handoff only, never clinical advice.
- Do not use violet as the primary color.
- Do not use warm-paper editorial styling, generic icon-card grids, gradient text, decorative glass, or unsupported social proof.
- Do not animate a phone or calendar unless both tell the same appointment story.
