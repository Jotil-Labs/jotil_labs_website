import { Hero } from '../components/sections/Hero'
import { LogoCloud } from '../components/sections/LogoCloud'
import { ProductShowcase } from '../components/sections/ProductShowcase'
import { FeatureHighlight } from '../components/sections/FeatureHighlight'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Stats } from '../components/sections/Stats'
import { Testimonials } from '../components/sections/Testimonials'
import { IntegrationStrip } from '../components/sections/IntegrationStrip'
import { CTASection } from '../components/sections/CTASection'

export function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ProductShowcase />
      <FeatureHighlight />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <IntegrationStrip />
      <CTASection />
    </>
  )
}
