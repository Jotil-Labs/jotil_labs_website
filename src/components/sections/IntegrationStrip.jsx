import { motion } from 'framer-motion'
import { GlassCard } from '../ui/GlassCard'
import { AnimatedSection } from '../ui/AnimatedSection'

const INTEGRATIONS = [
  { name: 'Twilio', letter: 'T', color: '#F22F46' },
  { name: 'OpenAI', letter: 'O', color: '#10A37F' },
  { name: 'Retell', letter: 'R', color: '#6366F1' },
  { name: 'Zapier', letter: 'Z', color: '#FF4A00' },
  { name: 'HubSpot', letter: 'H', color: '#FF7A59' },
  { name: 'Salesforce', letter: 'S', color: '#00A1E0' },
  { name: 'Google Calendar', letter: 'G', color: '#4285F4' },
  { name: 'Slack', letter: 'S', color: '#4A154B' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function IntegrationStrip() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text mt-3">
            Works With Your{' '}
            <span className="text-gradient">Favorite Tools</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto">
            Seamlessly connects with the platforms you already use.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GlassCard className="py-10 px-6">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {INTEGRATIONS.map((integration, i) => (
                <motion.div
                  key={integration.name}
                  className="flex flex-col items-center gap-3 group"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-14 h-14 rounded-[16px] flex items-center justify-center text-lg font-bold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${integration.color}dd, ${integration.color})`,
                      boxShadow: `0 4px 16px ${integration.color}25`,
                    }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    // Continuous subtle float staggered by index
                    {...{
                      transition: {
                        y: {
                          duration: 3 + (i % 3) * 0.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        },
                      },
                    }}
                  >
                    {integration.letter}
                  </motion.div>
                  <span className="text-xs text-text-secondary font-medium text-center">
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
