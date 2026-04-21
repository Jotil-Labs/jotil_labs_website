import { Hero } from '@/components/sections/Hero'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { IntegrationStrip } from '@/components/sections/IntegrationStrip'
import { CTASection } from '@/components/sections/CTASection'
import { AtmosphericDivider } from '@/components/design'

export const metadata = {
  title: 'JotilLabs - AI Voice, Chat & Automation Platform',
  description:
    'Never miss a customer again. JotilLabs AI voice agents, chatbots, and SMS automation handle your calls, chats, leads, and workflows 24/7.',
}

// Surface color references — keep in sync with app/globals.css @theme tokens.
// Used by the AtmosphericDividers on this page to bleed between sections
// where colors change (no divider needed when neighbors share a color).
const BG = 'var(--color-bg)'
const SUNKEN = 'var(--color-primary-50)'
const PRIMARY = 'var(--color-primary)'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Hero wash → flat bg (LogoCloud) — very subtle */}

      <LogoCloud />
      {/* Flat bg → sunken cool (ProductShowcase) */}
      <AtmosphericDivider from={BG} to={SUNKEN} height={80} />

      <ProductShowcase />
      {/* Sunken → flat bg (HowItWorks) */}
      <AtmosphericDivider from={SUNKEN} to={BG} height={80} />

      <HowItWorks />
      {/* Flat bg → sunken cool (Stats) */}
      <AtmosphericDivider from={BG} to={SUNKEN} height={80} />

      <Stats />
      {/* Sunken → flat bg (Testimonials) */}
      <AtmosphericDivider from={SUNKEN} to={BG} height={80} />

      <Testimonials />
      {/* Testimonials and IntegrationStrip both flat bg — no divider */}

      <IntegrationStrip />
      {/* Flat bg → navy CTASection — dramatic radial closer */}
      <AtmosphericDivider from={BG} to={PRIMARY} height={140} direction="radial" />

      <CTASection />
    </>
  )
}
