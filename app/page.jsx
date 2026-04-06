import { Hero } from '@/components/sections/Hero'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { ProductShowcase } from '@/components/sections/ProductShowcase'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { IntegrationStrip } from '@/components/sections/IntegrationStrip'
import { CTASection } from '@/components/sections/CTASection'

export const metadata = {
  title: 'Jotil Labs — AI Voice, Chat & Automation Platform',
  description:
    'Never miss a customer again. Jotil Labs AI voice agents, chatbots, and SMS automation handle your calls, chats, leads, and workflows 24/7.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ProductShowcase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <IntegrationStrip />
      <CTASection />
    </>
  )
}
