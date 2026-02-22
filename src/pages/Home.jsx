import { Hero } from '../components/sections/Hero'
import { ProductShowcase } from '../components/sections/ProductShowcase'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Stats } from '../components/sections/Stats'
import { Testimonials } from '../components/sections/Testimonials'
import { CTASection } from '../components/sections/CTASection'

export function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  )
}
