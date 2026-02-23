# Jotil Labs Website

## Company
Jotil Labs — AI Automation Company (Founded 2024, Lehi, Utah). We help businesses automate customer communications through AI voice agents, chatbots, SMS, and CRM tools. Voice AI is our core product. 11 products across 4 categories.

## Stack
- React 19 + Vite 7 + JSX (NOT TypeScript) + Tailwind CSS v4 + Framer Motion
- Tailwind v4 uses `@theme` directive in `src/index.css` (no separate tailwind.config)
- `clsx` + `tailwind-merge` via `cn()` helper in `src/lib/utils.js`
- Routing: `react-router-dom` v7 with BrowserRouter
- Deployment: Vercel (see `vercel.json` for SPA rewrites)

## File Structure
```
src/
  main.jsx              — BrowserRouter entry
  App.jsx               — AnimatedRoutes with AnimatePresence mode="wait"
  index.css             — @theme, keyframes, glass system, utilities
  lib/utils.js          — cn() helper
  data/products.js      — 11 products in 4 categories
  components/
    ui/                 — Button, GlassCard, Logo, SplitText, CountUp,
                          AnimatedSection, IconBox, SpotlightCard
    sections/           — Hero, LogoCloud, ProductShowcase, FeatureHighlight,
                          HowItWorks, Stats, Testimonials, IntegrationStrip, CTASection
    layout/             — Navbar, Footer, ScrollToTop, PageTransition
    widgets/            — ChatWidget
  pages/                — Home, Products, About, Contact, Terms, OptIn, NotFound
```

## Design System

### Font
- Primary: Space Grotesk (Google Fonts) — weights 400-700
- Monospace accent: JetBrains Mono

### Color Palette
- Primary: #2563EB (Royal Blue)
- Secondary: #6366F1 (Blue Violet)
- Accent: #0EA5E9 (Sky Cyan)
- Glow: #3B82F6
- Background: #F1F5F9
- Text: #020617 / Secondary: #64748B
- Footer: #020617

### Glass System (defined in index.css)
- `.glass` — basic glass card
- `.glass-premium` — gradient border on hover, translateY(-6px) lift
- `.glass-hover` — hover lift for non-premium glass
- `.text-gradient` — 3-color gradient text
- `.btn-gradient` — primary CTA gradient
- `.gradient-divider` — horizontal gradient separator

### Design Rules
- Light theme ONLY
- NO emojis anywhere in the UI
- Icons: lucide-react, strokeWidth 1.5, outline only
- Border radius: 10-12px buttons, 14-16px icon containers, 20px cards
- Letter spacing: -0.03em headings, normal body
- Quality benchmark: Linear.app, Vercel.com, Stripe.com

## Animation Rules (STRICT)
Only these animations are allowed:
1. **Scroll reveal**: fade from 20px below, 500ms duration, easeOut, stagger 80ms (via AnimatedSection)
2. **Hover lift**: translateY(-6px) + shadow increase (via glass-premium CSS)
3. **Button**: scale(1.02) on hover, scale(0.98) on tap
4. **Word-by-word headline**: SplitText component
5. **CSS keyframe orb rings**: ring-pulse, ring-pulse-reverse, ring-rotate, orbit (Hero only)
6. **CSS gradient orb drifts**: orb-drift-1 through orb-drift-4 (Hero only)
7. **CountUp**: number animation on scroll into view
8. **Page transitions**: 200ms opacity fade (via PageTransition)
9. **NO** canvas backgrounds, continuous floating particles, traveling dots, blur reveals, or any other animations

## Background Strategy
- Hero: 4 CSS-only gradient orb divs with blur(80px) and slow 30s keyframe drifts
- Other pages: 1-2 static blurred gradient divs per hero section
- Section separators: `.gradient-divider` CSS class
- NO canvas elements, NO Particles, NO Aurora, NO LightWaves

## Homepage Section Order
Hero > LogoCloud > ProductShowcase > HowItWorks > FeatureHighlight > Stats > Testimonials > IntegrationStrip > CTASection

## Contact Info
- Email: hello@jotillabs.com
- Location: Lehi, Utah
- Git remote: https://github.com/Jotil-Labs/jotil_labs_website.git (main branch)

## Conventions
- JSX (not TypeScript)
- Components in PascalCase
- Tailwind utility classes preferred; inline styles only for dynamic values
- Git commit after each major section with descriptive messages
- Responsive: mobile-first approach
- No Lorem ipsum — real copy for an AI automation company

## Critical Legal Pages
- /terms — Terms & Conditions (Twilio/TCPA compliance)
- /opt-in — Opt-In Consent (Twilio A2P 10DLC compliance)
- Both linked in footer

## Integration Placeholders
- AI Chat Widget: UI only, `// TODO: Connect to OpenAI API`
- Voice Bot Widget: UI only, `// TODO: Connect to Retell API`
- Contact form: UI only, `// TODO: Connect to backend API`

## Build Commands
- `npm run dev` — start dev server
- `npm run build` — production build to dist/
- `npm run preview` — preview production build
- `npm run lint` — ESLint
