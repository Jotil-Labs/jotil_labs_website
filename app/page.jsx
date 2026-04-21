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
// Used only by the AtmosphericDividers on this page to bleed from one
// section's bottom color into the next section's top color.
const BG = 'var(--color-bg)'
const WARM = 'var(--color-warm)'
const SUNKEN = 'var(--color-primary-50)'
const NAVY = 'var(--color-navy)'
const PRIMARY = 'var(--color-primary)'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Hero wash → warm cream (LogoCloud) */}
      <AtmosphericDivider from={BG} to={WARM} height={100} />

      <LogoCloud />
      {/* Warm → sunken cool (ProductShowcase) */}
      <AtmosphericDivider from={WARM} to={SUNKEN} height={100} />

      <ProductShowcase />
      {/* Sunken → raised (HowItWorks) — small lift */}
      <AtmosphericDivider from={SUNKEN} to="#FFFFFF" height={60} />

      <HowItWorks />
      {/* Raised-bottom (primary-50) → sunken (primary-50) — seamless, no divider */}

      <Stats />
      {/* Stats sunken → warm cream (Testimonials) */}
      <AtmosphericDivider from={SUNKEN} to={WARM} height={100} />

      <Testimonials />
      {/* Warm → raised (IntegrationStrip) */}
      <AtmosphericDivider from={WARM} to="#FFFFFF" height={100} />

      <IntegrationStrip />
      {/* Raised-bottom → navy CTASection — dramatic radial closer */}
      <AtmosphericDivider from={SUNKEN} to={PRIMARY} height={140} direction="radial" />

      <CTASection />
    </>
  )
}
