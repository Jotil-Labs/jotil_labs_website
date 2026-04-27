# CogniDrift-Style Content Expansion Plan

**Date:** 2026-04-21
**Author:** Planning doc
**Reference site:** https://www.cognidrift.com/
**Goal:** Bring JotilLabs's information architecture up to the breadth and depth of CogniDrift's site, while preserving our brand rules, 6-solution framework, and customer-outcome messaging style.

---

## 1. Reference site — what CogniDrift actually has

Pulled from their sitemap (31 URLs). The site is client-rendered so only structure was extractable, but the URL layout alone tells us the information architecture:

### Core pages (6)
- `/` — Home
- `/about`
- `/pricing`
- `/contact`
- `/faq`
- `/integrations`

### Product pages (12)
Phone Receptionist, Web Chatbot, Web Voicebot, SMS Agent, AI CRM, Smart Ticketing, AI Calendar, Automated Calls, Automated SMS, AI Automation, Dashboards, Multi-Model Chat

### Industry pages (4)
Healthcare, Local Services, Professional Services, Call Centers

### Resource pages (3)
Blog, Case Studies, Help Center

**SEO angle:** heavy keyword targeting — "AI automation solutions, AI agents for business, enterprise AI workflow automation, conversational AI platform, AI digital workforce, AI document processing, intelligent automation platform."

---

## 2. JotilLabs — current state

### Pages we already have
- `/`, `/about`, `/blog`, `/blog/[slug]`
- `/contact` (with form + FAQ)
- `/products` + `/products/[slug]` (6 solutions: Receptionist, Messenger, Outreach, Space, Flow, Avatar)
- `/products/receptionist/pricing` (live Stripe tiers — shipped in #27)
- `/use-cases` (industries, single listing page)
- `/consultancy`, `/custom-development`, `/design`
- `/terms`, `/privacy`, `/opt-in` (legal — DO NOT MODIFY)

### Gaps vs. CogniDrift
| Area | CogniDrift | JotilLabs | Gap |
|---|---|---|---|
| Global pricing | `/pricing` covers all | Only `/products/receptionist/pricing` | **Missing global page** |
| FAQ | Standalone `/faq` | Only embedded in `/contact` and product pages | **Missing standalone page** |
| Integrations | Standalone `/integrations` | Strip on homepage only | **Missing standalone page** |
| Industries | 4 individual pages | 1 combined `/use-cases` page | **Missing per-industry pages** |
| Case studies | `/resources/case-studies` | None (testimonials only) | **Missing** |
| Help Center | `/resources/help-center` | None | **Missing** |
| Product depth | 12 narrow products | 6 broad solutions | Intentional difference (see §4) |

---

## 3. Proposed information architecture for JotilLabs

Keep our existing 6-solution brand story, but layer on the missing horizontal pages that CogniDrift has.

```
/
/about
/contact
/pricing                      ← NEW — all 6 solutions, tier grid
/faq                          ← NEW — standalone, grouped by topic
/integrations                 ← NEW — grid of CRM, telephony, calendar, messaging, etc.

/products                     (overview — keep)
/products/receptionist
/products/receptionist/pricing
/products/messenger
/products/messenger/pricing   ← NEW (repeat per solution as pricing firms up)
/products/outreach
/products/space
/products/flow
/products/avatar

/industries                   ← RENAME from /use-cases, becomes index
/industries/restaurants       ← NEW (per CLAUDE.md, Restaurant replaces Healthcare)
/industries/local-services    ← NEW
/industries/professional-services ← NEW
/industries/call-centers      ← NEW
(room to add: home-services, real-estate, legal, dental — later)

/resources                    ← NEW index
/resources/blog               ← move /blog here, or alias
/resources/case-studies       ← NEW
/resources/help-center        ← NEW (or link to external docs)

/consultancy, /custom-development, /design   (keep as-is)
/terms, /privacy, /opt-in                    (DO NOT TOUCH)
```

---

## 4. Product strategy — 6 vs. 12

CogniDrift splits features into 12 narrow products (Phone Receptionist, Automated Calls, AI Calendar, Dashboards, etc.). We should **not** expand beyond our 6 core solutions — that framework is part of the JotilLabs brand.

Instead, **each solution page should explicitly list the capabilities inside it**, using CogniDrift's narrower products as a capability checklist:

- **Receptionist** — inbound voice, web voicebot, SMS agent, AI calendar booking
- **Messenger** — web chatbot, SMS agent, multi-model chat, unified inbox
- **Outreach** — automated calls, automated SMS, sequences, follow-ups
- **Space** — AI CRM, smart ticketing, dashboards
- **Flow** — AI automation, workflow orchestration, document processing
- **Avatar** — video/voice avatar (already differentiated)

This lets us match CogniDrift's keyword/feature coverage without diluting the 6-solution story.

---

## 5. Page-by-page content brief

### 5.1 `/pricing` (NEW)
- Hero: "Pricing that scales with what you're trying to grow"
- Tier grid per solution (Starter / Growth / Scale / Enterprise) — pull shared shape from receptionist pricing page
- Toggle: monthly / annual
- Row: "All plans include" (US-based support, HIPAA-ready posture where applicable, onboarding, training)
- FAQ block (billing, overage, switching plans, enterprise)
- CTA: "Talk to sales" (we are contact-based sales — no self-signup)

### 5.2 `/faq` (NEW)
Group by: Getting Started, Solutions, Pricing & Billing, Integrations, Security & Compliance, Support. Pull existing FAQs from product pages and expand. Use `FAQAccordion` component.

### 5.3 `/integrations` (NEW)
Grid with filter chips by category:
- **CRM** — HubSpot, Salesforce, Pipedrive, Zoho
- **Calendar** — Google Calendar, Outlook, Calendly, Acuity
- **Telephony** — Twilio, Vonage, RingCentral
- **Messaging** — WhatsApp, iMessage for Business, Facebook Messenger, Instagram DM
- **Helpdesk** — Zendesk, Intercom, Freshdesk
- **Payments** — Stripe, Square
- **Automation** — Zapier, Make, n8n
Each tile: logo, one-line value, "Request integration" CTA if not yet supported.

### 5.4 `/industries/[slug]` (NEW — 4 pages)
Template per industry:
- Hero with industry-specific outcome headline
- "What's breaking today" (3 pain points)
- "How JotilLabs fixes it" (map to 2-3 of our 6 solutions)
- 1-2 mini case stories
- Industry-specific metrics (e.g., "Restaurants: 38% of after-hours calls convert to bookings")
- CTA

Launch set: Restaurants, Local Services, Professional Services, Call Centers.

### 5.5 `/resources/case-studies` (NEW)
- Grid of customer stories (logo, industry, one-line result)
- Per-study detail page: problem → solution → metrics → quote
- Start with 3-4 stories; grow over time
- MDX-based, mirror `content/blog/` structure

### 5.6 `/resources/help-center` (NEW)
- Option A (lighter): curated articles in MDX under `content/help/`, grouped by solution
- Option B (heavier): external docs site (docs.jotillabs.com) and link out
- Recommend **Option A** initially — lower ops cost, same SEO benefit

### 5.7 Homepage enrichment
Add a small **"Built for your industry"** strip above or below `IntegrationStrip`, linking to the 4 new industry pages. Adds internal links + SEO coverage.

---

## 6. Build sequence (phased)

### Phase 1 — high-leverage, low-risk (week 1)
1. `/pricing` (global) — reuse receptionist pricing components
2. `/faq` standalone page — reshuffle existing FAQs
3. `/integrations` page — mostly static grid

### Phase 2 — industry depth (week 2)
4. Rename `/use-cases` → `/industries` (add redirect)
5. Build 4 `/industries/[slug]` pages with shared template
6. Update nav + homepage strip

### Phase 3 — resources (week 3)
7. Add `/resources` index + move blog under `/resources/blog` (with redirect from `/blog`)
8. `/resources/case-studies` index + 3 seed stories
9. `/resources/help-center` with 10-15 seed articles

### Phase 4 — per-solution depth (ongoing)
10. Add pricing pages for Messenger, Outreach, Space, Flow, Avatar as tiers firm up
11. Expand capability lists on each `/products/[slug]` page per §4

Each phase = 1 feature branch + 1 PR with test plan. CI (lint + build) must pass.

---

## 7. Non-negotiable constraints (from CLAUDE.md)

- JSX only, no TypeScript
- Tailwind v4 with `@theme` in `app/globals.css`
- Customer-outcome messaging, "Solutions" in nav copy, no em-dashes, no emojis
- Light theme only, lucide-react icons (strokeWidth 1.5)
- No modifications to `/terms`, `/privacy`, `/opt-in`
- Contact-based sales — every CTA goes to `/contact`, never a self-signup
- Quality benchmark: Linear / Vercel / Stripe

---

## 8. Open questions for you

1. **Help Center** — Option A (in-repo MDX) or Option B (external docs site)?
2. **Case studies** — do we have 3 real customers we can feature with permission, or do we start with anonymized composites?
3. **Industries launch set** — stick with Restaurants + Local Services + Professional Services + Call Centers, or swap in dental/real-estate/legal instead?
4. **Pricing for all 6 solutions** — ready to publish tiers for all 6, or phase in after Receptionist?
5. **Blog URL migration** — move to `/resources/blog` with redirect, or keep `/blog` and just cross-link from `/resources`?

Once these are answered I can turn any phase into an implementation plan with files-to-create, components, and data shapes.
