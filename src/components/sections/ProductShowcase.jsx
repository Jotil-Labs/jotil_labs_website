import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
} from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'
import { IconBox } from '../ui/IconBox'
import { AnimatedSection } from '../ui/AnimatedSection'
import { productCategories } from '../../data/products'

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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text mt-3">
            Products Built for Growth
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            From inbound automation to enterprise AI, we have the tools to
            transform how your business communicates.
          </p>
        </AnimatedSection>

        {/* Tab navigation */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full border cursor-pointer transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                  : 'bg-white/60 text-text-secondary border-border hover:border-border-hover hover:text-text'
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {activeCategory?.products.map((product, i) => {
              const Icon = ICON_MAP[product.icon]
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <GlassCard className="h-full flex flex-col">
                    <IconBox className="mb-4">
                      {Icon && <Icon size={22} strokeWidth={1.5} className="text-primary" />}
                    </IconBox>
                    <h3 className="text-base font-semibold text-text mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1">
                      {product.description}
                    </p>
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
