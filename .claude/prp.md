name: Harmoniq PRP v2 - Context-Rich AI Website & E-Course Generator
description: |

  ## Purpose
  This PRP is optimized for AI agents to iteratively generate working, validated code across full-stack modules within the Harmoniq Sites project. It emphasizes:
  - Context-rich instructions with relevant design patterns
  - Self-healing validation loops (lint, type, test)
  - Scaffolding AI-driven site builders with course delivery logic

---

## Goal

Build the core feature set of Harmoniq Sites: an AI-powered modular framework that generates **custom websites with embedded e-course platforms** for wellness and therapy providers.

---

## Why

- Providers need a *beautiful, modern digital presence* without technical expertise.
- Most DIY site builders are either too limited or too generic.
- Our stack offers:
  - Fully branded front-ends
  - Embedded e-course systems
  - Smart workflows and automation
  - Stripe/Shopify monetization
- This allows creators to launch not just a website—but an income stream.

---

## What

### User-facing behavior

- Fill out an intake form → Receive a live, hosted site
- Includes:
  - Homepage with custom layout
  - Embedded course page
  - Booking / Contact CTA
  - Testimonials and brand voice
- Users can:
  - Browse courses
  - Purchase via Stripe or Shopify
  - View course details and content (PDFs, videos, etc.)

### Technical features

- JSON-driven site config auto-generates layout and content
- Claude CLI + `generate-site.ts` script reads the config
- Embedded e-course system supports:
  - Course list view
  - Detail view
  - Media blocks (PDF, video, quiz placeholder)
- Stripe products feed courses

---

## Success Criteria

- [ ] Working JSON-based config drives full homepage layout
- [ ] Course system supports at least 3 mock courses
- [ ] Stripe checkout integrated on CTA
- [ ] Design passes Tailwind mobile responsiveness test
- [ ] Code is fully typed, linted, and tested
- [ ] Deployed to Vercel with domain switching for multiple clients

---

## All Needed Context

### Required Docs

```yaml
- docfile: ClaudePRPs/site-structure-v1.md
  why: Explains how `site.json` maps to components

- docfile: ClaudePRPs/e-course-embedding.md
  why: Covers course player structure and logic

- file: scripts/generate-site.ts
  why: Main generation logic (read, parse, output)

- url: https://stripe.com/docs/api/products
  why: Stripe Products API drives course metadata
