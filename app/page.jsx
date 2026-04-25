import { Hero } from '@/components/sections/Hero'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { ScrollProductShowcase } from '@/components/sections/ScrollProductShowcase'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { IntegrationStrip } from '@/components/sections/IntegrationStrip'
import { CTASection } from '@/components/sections/CTASection'

export const metadata = {
  title: 'JotilLabs - AI Voice, Chat & Automation Platform',
  description:
    'Never miss a customer again. JotilLabs AI voice agents, chatbots, and SMS automation handle your calls, chats, leads, and workflows 24/7.',
}

/**
 * Sections stack with transparent bgs so the fixed BrandBackground
 * (mounted in app/layout.jsx) shows through consistently as visitors
 * scroll. Glass cards inside each section blur whatever bg is behind
 * them — which is now always BrandBackground, not a section-level
 * opaque color.
 *
 * No AtmosphericDividers between sections: the bg is already unified,
 * so section-to-section color transitions aren't needed. CTASection
 * keeps its own internal dark gradient for the closer.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ScrollProductShowcase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <IntegrationStrip />
      <CTASection />
    </>
  )
}
