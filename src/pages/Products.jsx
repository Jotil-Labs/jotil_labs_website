import { Link } from 'react-router-dom'
import {
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { GlassCard } from '../components/ui/GlassCard'
import { IconBox } from '../components/ui/IconBox'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { productCategories } from '../data/products'

const ICON_MAP = {
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
}

export function Products() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-dot-grid opacity-40" />
          <div
            className="absolute w-[600px] h-[400px] opacity-20"
            style={{
              top: '5%',
              right: '-5%',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 60%)',
              filter: 'blur(100px)',
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] opacity-15"
            style={{
              bottom: '-10%',
              left: '10%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 60%)',
              filter: 'blur(100px)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection blur>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-text mt-3 leading-tight">
              Everything You Need to{' '}
              <span className="text-gradient">Automate</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mt-5 max-w-2xl mx-auto leading-[1.8]">
              From AI phone agents to enterprise automation, explore the full suite of
              tools designed to transform your customer communications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product categories */}
      {productCategories.map((category) => (
        <section key={category.id} className="py-14">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-1 h-7 rounded-full bg-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-text">
                  {category.label}
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, i) => {
                const Icon = ICON_MAP[product.icon]
                return (
                  <AnimatedSection key={product.name} delay={i * 0.08}>
                    <GlassCard premium className="h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-5">
                        <IconBox size="lg" glow className="shrink-0">
                          {Icon && <Icon size={24} strokeWidth={1.5} className="text-primary" />}
                        </IconBox>
                        <div>
                          <h3 className="text-lg font-semibold text-text">
                            {product.name}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed mt-1.5">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2.5 mt-auto pt-5 border-t border-border/40">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                            <span className="text-sm text-text-secondary leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 pt-4 border-t border-border/40">
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary cursor-pointer hover:gap-2.5 transition-all duration-300">
                          Learn More
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </span>
                      </div>
                    </GlassCard>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <GlassCard premium className="text-center py-14 px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-text mb-4">
                Not sure which product fits?
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto mb-8 leading-[1.8]">
                Our team will analyze your current workflow and recommend the right
                combination of AI tools for your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-gradient px-6 py-3.5 rounded-[12px] shadow-lg shadow-primary/25 no-underline hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
