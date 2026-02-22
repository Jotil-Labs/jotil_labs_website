import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight,
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
} from 'lucide-react'
import { IconBox } from '../ui/IconBox'
import { AnimatedSection } from '../ui/AnimatedSection'
import { productCategories } from '../../data/products'

const ICON_MAP = {
  Phone, MessageSquare, Mic, MessageCircle,
  Users, Ticket, Calendar,
  PhoneOutgoing, Send,
  BarChart3, GraduationCap,
}

const FEATURE_TAGS = {
  'AI Phone Receptionist': ['24/7', 'No Code', 'Real-time'],
  'AI Web Chatbot': ['Multi-turn', 'Lead Capture', 'API Ready'],
  'AI Web Voicebot': ['Browser-based', 'Multi-language'],
  'SMS Texting Agent': ['A2P Compliant', 'Two-way', 'Automated'],
  'AI CRM': ['Auto-logging', 'Lead Scoring', 'Analytics'],
  'Smart Ticketing': ['Auto-categorize', 'SLA Tracking'],
  'AI Calendar': ['Multi-calendar', 'Natural Language'],
  'Automated Calls': ['Human-like', 'DNC Compliant', 'Analytics'],
  'Automated SMS': ['Personalized', 'A/B Testing', 'Opt-in'],
  'AI Automation': ['Custom Workflows', 'Multi-system'],
  'AI Consultancy': ['Strategy', 'Implementation', 'Training'],
}

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('inbound')
  const activeCategory = productCategories.find((c) => c.id === activeTab)

  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
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

        {/* Pill tab navigation */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-14">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full border cursor-pointer transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
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
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {activeCategory?.products.map((product, i) => {
              const Icon = ICON_MAP[product.icon]
              const tags = FEATURE_TAGS[product.name] || []
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                >
                  <div className="glass-premium rounded-[20px] p-7 h-full flex flex-col group">
                    <IconBox glow className="mb-5">
                      {Icon && <Icon size={22} strokeWidth={1.5} className="text-primary" />}
                    </IconBox>
                    <h3 className="text-base font-semibold text-text mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-4">
                      {product.description}
                    </p>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-medium text-primary/70 bg-primary/5 border border-primary/10 rounded-full px-2.5 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="pt-4 border-t border-border/40">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:gap-2.5 transition-all duration-200 cursor-pointer">
                        Learn more
                        <ArrowRight size={12} strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
