import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { Button } from '../ui/Button'

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div
            className="relative overflow-hidden rounded-[24px] px-8 py-16 sm:px-16 sm:py-20 text-center"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)',
            }}
          >
            {/* Subtle floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-white/10 animate-float"
                  style={{
                    left: `${15 + i * 14}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${4 + i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
                Join hundreds of businesses already using Jotil Labs to automate
                customer communications and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="!bg-white !text-primary hover:!bg-white/90 !shadow-xl !shadow-black/10"
                  >
                    Book a Demo
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button
                    variant="outline"
                    size="lg"
                    className="!border-white/30 !text-white !bg-white/10 hover:!bg-white/20 hover:!border-white/50"
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
