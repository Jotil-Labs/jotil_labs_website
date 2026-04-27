# JotilLabs Website

Marketing website for **JotilLabs** (Jotil Labs LLC) — The AI-First Customer Platform helping SMBs never miss a customer through AI-powered communication automation.

Live: [jotillabs.com](https://jotillabs.com)

## Solutions

Six AI-powered solutions for customer communication:

1. **Receptionist** — AI voice answering
2. **Messenger** — AI chat across web and messaging apps
3. **Outreach** — AI outbound calling and follow-up
4. **Space** — Branded customer portal
5. **Flow** — Automation and workflow engine
6. **Avatar** — AI video agents

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19
- **Language:** JavaScript (JSX, not TypeScript)
- **Styling:** Tailwind CSS v4 (via `@theme` in [app/globals.css](app/globals.css))
- **Animation:** Framer Motion
- **Content:** MDX blog via `next-mdx-remote` + `gray-matter`
- **Fonts:** Montserrat Alternates (display), Inter (body), JetBrains Mono (mono) via `next/font/google`
- **Icons:** lucide-react (strokeWidth 1.5)
- **Email:** Resend (contact form)
- **Analytics:** Vercel Analytics + Speed Insights
- **Testing:** Playwright (visual regression)
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server at localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test:visual` | Run Playwright visual tests |
| `npm run test:visual:update` | Update visual snapshots |

## Project Structure

```
app/                    Next.js App Router pages
  layout.jsx            Root layout (fonts, metadata, Navbar, Footer)
  page.jsx              Homepage
  about/                About page
  blog/                 MDX blog listing + posts
  contact/              Contact form + FAQ
  products/             Products overview + SSG product detail pages
  use-cases/            Industry use cases
  terms/ privacy/ opt-in/  Legal pages (LIVE — do not modify content)
  api/contact/          Contact form API route
  og/                   Dynamic OG image generation
  sitemap.js robots.js  SEO

components/
  ui/                   Button, Badge, AnimatedSection, CountUp, etc.
  sections/             Hero, ProductShowcase, Stats, CTASection, etc.
  layout/               Navbar, Footer, ScrollToTop, JsonLd
  product/              DemoVisualization, FAQAccordion
  widgets/              AIWidget (floating chat/voice/avatar)

content/blog/           MDX blog posts
data/products.js        Solution definitions
lib/
  brand.js              Brand colors + tokens (single source of truth)
  utils.js              cn() helper
  mdx.js                MDX blog utilities
```

## Design System

- **Light theme only.** No dark mode.
- **No emojis** in UI or customer-facing copy.
- **Colors** (edit in [lib/brand.js](lib/brand.js), sync to `@theme` tokens in [app/globals.css](app/globals.css)):
  - Primary `#3859a8` · Navy `#0f1129` · Accent `#22D3EE`
- **Radii:** 10–12px buttons, 14–16px icons, 20px cards
- **Utility classes:** `.glass`, `.card`, `.card-premium`, `.text-gradient`, `.btn-gradient`, `.gradient-divider`, `.badge`
- **Quality benchmark:** Linear, Vercel, Stripe

## Messaging Rules

- Present from the **customer's** perspective — outcomes, not features
- Use **"Solutions"** not "Products" in navigation
- No em-dashes, no emojis, no technical jargon in customer-facing copy
- Benchmark: Intercom, HubSpot, Dialpad

## Contact

- **Email:** contact@jotillabs.com
- **Phone:** +1 (358) 900-0040
- **Location:** Lehi, Utah

## Contributing

- Work on feature branches, open PRs against `main` with a test plan
- CI must pass (lint + build) before merge
- Do not modify legal page content ([/terms](app/terms/page.jsx), [/privacy](app/privacy/page.jsx), [/opt-in](app/opt-in/page.jsx)) — they are live with customers
- See [CLAUDE.md](CLAUDE.md) for full conventions

## License

Proprietary © Jotil Labs LLC. All rights reserved.
