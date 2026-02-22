import { AnimatedSection } from '../ui/AnimatedSection'

const LOGOS = [
  'TechFlow', 'Meridian', 'Apex Digital', 'Summit AI',
  'Vertex', 'NovaCorp', 'BrightEdge', 'Catalyst',
]

function PlaceholderLogo({ name }) {
  return (
    <div className="flex items-center gap-2 px-6 select-none">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-300 to-slate-200" />
      <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{name}</span>
    </div>
  )
}

export function LogoCloud() {
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm text-text-secondary font-medium">
            Trusted by innovative companies
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite scroll */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-bg to-transparent pointer-events-none" />

        <div className="flex animate-scroll-x" style={{ width: 'max-content' }}>
          {doubled.map((name, i) => (
            <PlaceholderLogo key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
