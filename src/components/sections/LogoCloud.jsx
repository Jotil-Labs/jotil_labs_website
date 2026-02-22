import { AnimatedSection } from '../ui/AnimatedSection'

const LOGOS = [
  'TechFlow', 'Meridian', 'Apex Digital', 'Summit AI',
  'Vertex', 'NovaCorp', 'BrightEdge', 'Catalyst',
]

function PlaceholderLogo({ name }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-300 to-slate-200 shrink-0" />
      <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{name}</span>
    </div>
  )
}

export function LogoCloud() {
  return (
    <section className="py-14 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm text-text-secondary font-medium">
            Trusted by innovative companies
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {LOGOS.map((name) => (
              <PlaceholderLogo key={name} name={name} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
