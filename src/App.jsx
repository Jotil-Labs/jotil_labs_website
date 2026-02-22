import { useState } from 'react'
import { GlassCard } from './components/ui/GlassCard'
import { Button } from './components/ui/Button'
import { Navbar } from './components/layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <Navbar />

      {/* Animated gradient blobs */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="blob blob-indigo" style={{ top: '-10%', left: '-5%' }} />
        <div className="blob blob-violet" style={{ top: '30%', right: '-8%' }} />
        <div className="blob blob-cyan" style={{ bottom: '-5%', left: '25%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24">
        {/* Hero */}
        <header className="text-center mb-20">
          <div className="inline-block mb-6">
            <span
              className="inline-block px-4 py-1.5 text-sm font-medium rounded-full"
              style={{
                background: 'rgba(79, 70, 229, 0.08)',
                color: '#4F46E5',
                border: '1px solid rgba(79, 70, 229, 0.15)',
              }}
            >
              Design System v0.1
            </span>
          </div>
          <h1
            className="text-6xl sm:text-7xl font-extrabold tracking-tight mb-6"
            style={{
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.1,
            }}
          >
            Jotil Labs
          </h1>
          <p className="text-text-muted text-xl max-w-2xl mx-auto leading-relaxed">
            A premium visual foundation built with glass morphism,
            fluid gradients, and meticulous attention to detail.
          </p>
        </header>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <GlassCard className="p-8 hover:scale-[1.02] hover:shadow-2xl">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(79, 70, 229, 0.04))',
              }}
            >
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Glass Morphism</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Frosted glass surfaces with precise blur, saturation, and layered shadows.
            </p>
          </GlassCard>

          <GlassCard className="p-8 hover:scale-[1.02] hover:shadow-2xl">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(124, 58, 237, 0.04))',
              }}
            >
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Fluid Gradients</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Animated background meshes with indigo, violet, and cyan tones.
            </p>
          </GlassCard>

          <GlassCard className="p-8 hover:scale-[1.02] hover:shadow-2xl">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
              style={{
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(6, 182, 212, 0.04))',
              }}
            >
              <svg className="w-6 h-6 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text mb-2">Pixel Perfect</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Every shadow, radius, and spacing crafted for visual harmony.
            </p>
          </GlassCard>
        </section>

        {/* Interactive Demo */}
        <GlassCard className="p-10 md:p-14 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-text mb-3">Interactive Components</h2>
              <p className="text-text-muted leading-relaxed mb-8">
                Every element responds to interaction with smooth transitions,
                subtle lifts, and glass fills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setCount((c) => c + 1)}>
                  Increment Counter
                </Button>
                <Button variant="ghost" onClick={() => setCount(0)}>
                  Reset
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div
                className="w-36 h-36 rounded-3xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(124, 58, 237, 0.05))',
                  border: '1px solid rgba(79, 70, 229, 0.1)',
                }}
              >
                <span
                  className="text-5xl font-extrabold"
                  style={{
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {count}
                </span>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Footer */}
        <footer className="text-center">
          <p className="text-text-muted text-sm">
            Built with React, Tailwind CSS &amp; glass morphism
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
