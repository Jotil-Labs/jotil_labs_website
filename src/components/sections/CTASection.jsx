import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-[28px] px-8 py-20 sm:px-16 sm:py-24 text-center"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #6366F1 100%)',
            }}
          >
            {/* Subtle radial overlays */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 40%)',
                }}
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] mb-5 leading-tight">
                Ready to Transform<br className="hidden sm:block" /> Your Business?
              </h2>
              <p className="text-lg text-white/90 max-w-xl mx-auto mb-10 leading-[1.8]">
                Join hundreds of businesses already using Jotil Labs to automate
                customer communications and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="!bg-white !text-primary hover:!bg-white/90 !shadow-xl !shadow-black/15"
                  >
                    Book a Demo
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="!border-white/25 !text-white !bg-white/10 hover:!bg-white/20 hover:!border-white/40"
                  >
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
