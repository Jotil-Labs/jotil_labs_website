# Jotil Labs Website

## Company
Jotil Labs — AI Automation Company. We help businesses automate customer communications through AI voice agents, chatbots, SMS, and CRM tools. Voice AI is our core product.

## Stack
React + Vite + TypeScript + Tailwind CSS + Framer Motion

## Design System

### Font
- Primary: Space Grotesk (Google Fonts) — all weights 400-700
- Monospace accent: JetBrains Mono (for code/tech elements)

### Color Palette (Cool Blue)
- Primary: Royal Blue #2563EB
- Secondary: Blue Violet #6366F1
- Accent: Sky Cyan #0EA5E9
- Glow: Electric Blue #3B82F6
- Background: Cool Gray #F1F5F9
- Dark Glass Surface: rgba(15, 23, 42, 0.07)
- Text Primary: Slate 950 #020617
- Text Secondary: Slate 500 #64748B
- Footer/Dark: #020617

### Glass Effect (Darker Glass)
- Background: rgba(15, 23, 42, 0.04) to rgba(15, 23, 42, 0.07)
- Backdrop filter: blur(24px)
- Border: 1px solid rgba(15, 23, 42, 0.08-0.12)
- Box shadow: 0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.4)
- Hover: border shifts to rgba(37, 99, 235, 0.2), shadow increases

### Gradients
- Primary CTA: linear-gradient(135deg, #2563EB, #4F46E5)
- Accent CTA: linear-gradient(135deg, #0EA5E9, #2563EB)
- Text gradient: linear-gradient(135deg, #2563EB, #6366F1, #0EA5E9)
- Icon bg: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.08))

### Design Rules
- Light theme ONLY
- NO emojis anywhere in the UI
- Icons: Use lucide-react with stroke/outline style only (strokeWidth 1.5), never filled
- Glassmorphism on all cards and surfaces
- All animations via framer-motion
- Quality benchmark: Linear.app, Vercel.com, Stripe.com
- Generous spacing, clean typography, premium feel
- Border radius: 10-12px buttons, 14-16px icon containers, 20px cards
- Letter spacing: -0.03em headings, normal body

### React Bits Components (from reactbits.dev)
Install via: npx jsrepo add or copy-paste from reactbits.dev
Use TS-TW variants (TypeScript + Tailwind).

Recommended components:
- Hero text: SplitText, BlurText, or GradualSpacing
- Backgrounds: Particles, Hyperspeed, or Threads (subtle, blue-toned)
- Cards: TiltCard or SpotlightCard for product cards
- Scroll animations: ScrollReveal, FadeContent
- Cursor effects: SplashCursor or BlobCursor (optional, subtle)
- Lists: AnimatedList for features/testimonials
- Text: FuzzyText, CountUp for stats section

If a React Bits component has external dependencies (like gsap), install them.

## Conventions
- TypeScript strict mode
- Components in PascalCase
- Tailwind only (no inline styles except where dynamic values needed)
- Git commit after each major section with descriptive messages
- Responsive: mobile-first approach
- No Lorem ipsum — write real, relevant copy for an AI automation company

## Critical Legal Pages
- /terms — Terms & Conditions page (Twilio/TCPA compliance required)
- /opt-in — Opt-In Consent page (Twilio A2P 10DLC compliance required)
- Both MUST be linked in the footer

## Integration Placeholders
- AI Chat Widget: UI only, comment "// TODO: Connect to OpenAI API"
- Voice Bot Widget: UI only, comment "// TODO: Connect to Retell API"
- All forms: UI only, no backend yet