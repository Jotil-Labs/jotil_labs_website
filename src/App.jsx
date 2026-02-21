import { useState } from 'react'
import { GlassCard } from './components/ui/GlassCard'
import { Button } from './components/ui/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-bg to-accent/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Jotil Labs
          </h1>
          <p className="text-text-muted text-lg">Design System Foundation</p>
        </div>

        {/* GlassCard Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-6">GlassCard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-8">
              <h3 className="text-xl font-semibold text-text mb-2">Default Card</h3>
              <p className="text-text-muted">
                Glass morphism effect with backdrop blur and subtle border.
              </p>
            </GlassCard>
            <GlassCard className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-cyan" />
                <h3 className="text-xl font-semibold text-text">With Content</h3>
              </div>
              <p className="text-text-muted mb-4">Cards accept any children and className.</p>
              <div className="text-4xl font-bold text-primary">{count}</div>
            </GlassCard>
          </div>
        </section>

        {/* Button Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text mb-6">Button Variants</h2>
          <GlassCard className="p-8">
            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={() => setCount((c) => c + 1)}>
                Primary — Count {count}
              </Button>
              <Button variant="outline" onClick={() => setCount(0)}>
                Outline — Reset
              </Button>
              <Button variant="ghost" onClick={() => setCount((c) => c - 1)}>
                Ghost — Decrement
              </Button>
            </div>
          </GlassCard>
        </section>

        {/* Combined Demo */}
        <section>
          <h2 className="text-2xl font-semibold text-text mb-6">Combined</h2>
          <GlassCard className="p-8 text-center">
            <p className="text-text-muted mb-2">Colors</p>
            <div className="flex justify-center gap-4 mb-6">
              <span className="w-12 h-12 rounded-xl bg-primary shadow-lg" title="Primary" />
              <span className="w-12 h-12 rounded-xl bg-accent shadow-lg" title="Accent" />
              <span className="w-12 h-12 rounded-xl bg-cyan shadow-lg" title="Cyan" />
            </div>
            <div className="flex justify-center gap-3">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  )
}

export default App
