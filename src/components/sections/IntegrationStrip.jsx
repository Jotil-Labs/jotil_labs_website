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

export function IntegrationStrip() {
  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-text mt-3">
            Works With Your{' '}
            <span className="text-gradient">Favorite Tools</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto leading-[1.8]">
            Seamlessly connects with the platforms you already use.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <GlassCard className="py-10 px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
              {INTEGRATIONS.map((integration) => (
                <div
                  key={integration.name}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div
                    className="w-14 h-14 rounded-[16px] flex items-center justify-center text-lg font-bold text-white shadow-lg group-hover:-translate-y-1.5 group-hover:shadow-xl transition-all duration-200"
                    style={{
                      background: `linear-gradient(135deg, ${integration.color}dd, ${integration.color})`,
                      boxShadow: `0 4px 16px ${integration.color}25`,
                    }}
                  >
                    {integration.letter}
                  </div>
                  <span className="text-xs text-text-secondary font-medium text-center">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
