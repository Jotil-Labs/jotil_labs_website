import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight,
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
} from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { IconBox } from '../ui/IconBox'
import { AnimatedSection } from '../ui/AnimatedSection'
import { productCategories } from '../../data/products'
import { DotPattern } from '../ui/backgrounds/DotPattern'

const ICON_MAP = {
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
}

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('inbound')
  const activeCategory = productCategories.find((c) => c.id === activeTab)

  return (
    <section className="py-32 relative">
      {/* SVG dot pattern background */}
      <DotPattern size={36} dotSize={1} color="rgba(37, 99, 235, 0.06)" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection blur className="text-center mb-14">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-[40px] font-bold tracking-[-0.03em] text-text mt-3 leading-tight">
            Products Built for{' '}
            <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-lg text-text-secondary mt-4 max-w-xl mx-auto leading-[1.8]">
            From inbound automation to enterprise AI, we have the tools to
            transform how your business communicates.
          </p>
        </AnimatedSection>

        {/* Tab navigation with connecting line */}
        <AnimatedSection delay={0.1} className="relative flex flex-wrap justify-center gap-2 mb-14">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-5 py-2.5 text-sm font-medium rounded-full border cursor-pointer transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                  : 'bg-white/60 text-text-secondary border-border hover:border-border-hover hover:text-text hover:shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Product cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {activeCategory?.products.map((product, i) => {
              const Icon = ICON_MAP[product.icon]
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GlassCard premium className="h-full flex flex-col group">
                    <IconBox glow className="mb-5 animate-icon-bob" style={{ animationDelay: `${i * 0.3}s` }}>
                      {Icon && <Icon size={22} strokeWidth={1.5} className="text-primary" />}
                    </IconBox>
                    <h3 className="text-base font-semibold text-text mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/40">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-300 cursor-pointer">
                        Learn more
                        <ArrowRight size={12} strokeWidth={1.5} />
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
