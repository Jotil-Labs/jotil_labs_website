'use client'

const NOISE_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E`

export function BrandBackground({ variant = 'quiet' }) {
  const isHero = variant === 'hero'

  return (
    <>
      {/* Atmosphere + grain — fixed at z-0, behind main content */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Atmosphere layer 1: violet + pink wash, top-left biased */}
        <div
          className={isHero ? 'atmosphere-drift-1' : ''}
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '70%',
            height: '80%',
            background:
              'radial-gradient(circle at 30% 30%, rgba(138, 107, 255, 0.35), transparent 60%), radial-gradient(circle at 70% 60%, rgba(255, 122, 182, 0.25), transparent 55%)',
            filter: 'blur(60px)',
            opacity: (isHero ? 1 : 0.72) * 0.4,
            willChange: isHero ? 'transform' : 'auto',
          }}
        />

        {/* Atmosphere layer 2: blue + peach wash, bottom-right biased */}
        <div
          className={isHero ? 'atmosphere-drift-2' : ''}
          style={{
            position: 'absolute',
            top: '10%',
            right: '-15%',
            width: '65%',
            height: '70%',
            background:
              'radial-gradient(circle at 60% 40%, rgba(47, 91, 255, 0.28), transparent 60%), radial-gradient(circle at 30% 70%, rgba(255, 201, 163, 0.3), transparent 55%)',
            filter: 'blur(70px)',
            opacity: (isHero ? 1 : 0.72) * 0.4,
            willChange: isHero ? 'transform' : 'auto',
          }}
        />

        {/* Noise grain overlay */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.35 * 0.4,
            mixBlendMode: 'overlay',
            backgroundImage: `url("${NOISE_SVG}")`,
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>
    </>
  )
}
