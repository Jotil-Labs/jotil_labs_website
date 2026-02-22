import { motion } from 'framer-motion'
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute w-[500px] h-[300px] opacity-20"
            style={{
              top: '10%',
              right: '5%',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              Our Products
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-text mt-3">
              Everything You Need to{' '}
              <span className="text-gradient">Automate</span>
            </h1>
            <p className="text-lg text-text-secondary mt-4 max-w-2xl mx-auto">
              From AI phone agents to enterprise automation, explore the full suite of
              tools designed to transform your customer communications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product categories */}
      {productCategories.map((category, catIdx) => (
        <section key={category.id} className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-primary" />
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-text">
                  {category.label}
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {category.products.map((product, i) => {
                const Icon = ICON_MAP[product.icon]
                return (
                  <AnimatedSection key={product.name} delay={i * 0.08}>
                    <GlassCard className="h-full flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <IconBox size="lg" className="shrink-0">
                          {Icon && <Icon size={24} strokeWidth={1.5} className="text-primary" />}
                        </IconBox>
                        <div>
                          <h3 className="text-lg font-semibold text-text">
                            {product.name}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed mt-1">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 mt-auto pt-4 border-t border-border/50">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                            <span className="text-sm text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary cursor-pointer bg-transparent border-none p-0 hover:gap-2.5 transition-all duration-200">
                        Learn More
                        <ArrowRight size={14} strokeWidth={1.5} />
                      </button>
                    </GlassCard>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <GlassCard className="text-center py-12 px-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-text mb-3">
                Not sure which product fits?
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto mb-6">
                Our team will analyze your current workflow and recommend the right
                combination of AI tools for your business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white btn-gradient px-6 py-3 rounded-[10px] shadow-lg shadow-primary/20 no-underline hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get a Free Consultation
                <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
