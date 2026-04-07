# Jotil Labs Website

## Company
Jotil Labs — The AI-First Customer Platform (Founded 2024, Lehi, Utah). We help SMBs never miss a customer through AI-powered communication automation. 6 solutions: Receptionist, Messenger, Outreach, Space, Flow, Avatar. Target market: SMB, contact-based sales (no self-signup).

## Stack
- Next.js 15 App Router + React 19 + JSX (NOT TypeScript) + Tailwind CSS v4 + Framer Motion
- Tailwind v4 uses `@theme` directive in `app/globals.css` (no separate tailwind.config)
- `clsx` + `tailwind-merge` via `cn()` helper in `lib/utils.js`
- Fonts: `next/font/google` — Outfit (headings), Inter (body), JetBrains Mono (mono)
- MDX blog: `next-mdx-remote/rsc` + `gray-matter` + `reading-time`
- Path alias: `@/*` → `./` via jsconfig.json
- Deployment: Vercel at jotillabs.com

## File Structure
```
app/
  layout.jsx            — Root layout (fonts, metadata, Navbar, Footer)
  page.jsx              — Homepage (Hero + 7 sections)
  loading.jsx           — Global loading spinner
  og/route.jsx          — Dynamic OG image generation
  globals.css           — @theme, keyframes, glass/card system, utilities
  not-found.jsx         — 404 page
  sitemap.js            — Dynamic sitemap
  robots.js             — Robots config
  about/page.jsx        — About page
  blog/page.jsx         — Blog listing
  blog/[slug]/page.jsx  — Blog post (MDX)
  contact/page.jsx      — Contact form + FAQ
  products/page.jsx     — Products overview + comparison table
  products/[slug]/page.jsx — Individual product pages (SSG)
  use-cases/page.jsx    — Industry use cases
  terms/page.jsx        — Terms & Conditions (LIVE — DO NOT MODIFY CONTENT)
  privacy/page.jsx      — Privacy Policy (LIVE — DO NOT MODIFY CONTENT)
  opt-in/page.jsx       — Opt-In Consent (LIVE — DO NOT MODIFY CONTENT)
  api/contact/route.js  — Contact form API endpoint

components/
  ui/                   — Button, Badge, AnimatedSection, CountUp, SplitText,
                          IconBox, Logo, ProductLogos
  sections/             — Hero, LogoCloud, ProductShowcase, HowItWorks,
                          Stats, Testimonials, IntegrationStrip, CTASection,
                          ContactForm
  layout/               — Navbar, Footer, ScrollToTop, JsonLd
  product/              — DemoVisualization (interactive per-product), FAQAccordion
  widgets/              — AIWidget (Chat/Voice/Avatar floating panel)

lib/utils.js            — cn() helper
lib/mdx.js              — MDX blog utilities
data/products.js        — 6 solutions with full data
content/blog/           — 5 MDX blog posts
.github/workflows/      — CI pipeline (lint + build)
```

## Design System

### Fonts
- Headings: Outfit (via --font-outfit CSS variable)
- Body: Inter (via --font-inter)
- Mono: JetBrains Mono (via --font-jetbrains)

### Color Palette
- Primary: #3B7BF2
- Primary Dark: #1B4FBA
- Primary Accent: #2D6AE0
- Secondary: #6366F1
- Accent: #0EA5E9
- Background: #FAFBFD
- Background Alt: #F0F4FF
- Text: #111111 / Secondary: #6B7280 (WCAG AA compliant)
- Dark (footer): #0A0F1C

### CSS Utility Classes (defined in globals.css)
- `.glass` — frosted glass card
- `.glass-hover` — glass with hover lift
- `.glass-dark` — subtle dark surface
- `.card` — white card with hover shadow
- `.card-premium` — card with gradient border on hover
- `.text-gradient` — blue→indigo→cyan gradient text
- `.btn-gradient` — primary CTA background gradient
- `.gradient-divider` — 1px horizontal gradient separator
- `.badge` — small pill badge
- `.nav-link-hover` — underline on hover

### Design Rules
- Light theme ONLY
- NO emojis in UI
- Icons: lucide-react, strokeWidth 1.5
- Border radius: 10-12px buttons, 14-16px icons, 20px cards
- Quality benchmark: Linear.app, Vercel.com, Stripe.com
- Target audience: SMB (no self-signup, contact-based sales)

## Animation Rules (STRICT)
1. Scroll reveal: AnimatedSection (whileInView, 20px, easeOut)
2. Hover lift: translateY(-2px) + shadow (card/card-premium CSS)
3. Button: hover scale(1.02), tap scale(0.98)
4. Hero: CSS keyframe orbs, rings, orbit dots, waveform bars
5. CountUp: number animation on scroll
6. NO canvas backgrounds, particles, blur reveals

## Homepage Section Order
Hero > LogoCloud > ProductShowcase > HowItWorks > Stats > Testimonials > IntegrationStrip > CTASection

## Contact Info
- Email: contact@jotillabs.com
- Phone: +1 (358) 900-0040
- Location: Lehi, Utah

## Critical Legal Pages — DO NOT MODIFY CONTENT
- /terms — Terms & Conditions (Twilio/TCPA compliance, LIVE with customers)
- /opt-in — Opt-In Consent (Twilio A2P 10DLC compliance, LIVE with customers)
- /privacy — Privacy Policy (LIVE with customers)
- All linked in footer

## Git Info
- Remote: https://github.com/Jotil-Labs/jotil_labs_website.git
- Branch: redesign/nextjs-migration (current work)
- Production: main branch → Vercel auto-deploy

## Build Commands
- `npm run dev` — dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint

## Messaging Rules (STRICT)
- Present from the CUSTOMER's perspective, not the company's
- Frame everything as outcomes: what the customer GETS, not what we built
- No product catalog language ("Six AI Products", "Inbound Voice", "Outbound")
- Use "Solutions" not "Products" in navigation
- No em-dashes in customer-facing copy (use periods or commas)
- No emojis anywhere
- No technical jargon (API, SDK, LLM, pipeline, etc.) in customer-facing copy
- Benchmark: Intercom, HubSpot, Dialpad messaging style

## Conventions
- JSX only (NOT TypeScript)
- PascalCase components
- Tailwind utility classes preferred
- No Co-Authored-By in commits
- No Lorem ipsum, real copy only
- Responsive mobile-first
- GitHub Issues for tracking, feature branches, PRs with test plans
- CI must pass (lint + build) before merge
