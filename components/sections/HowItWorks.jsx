'use client'

import { forwardRef, useRef } from 'react'
import { Plug, SlidersHorizontal, Zap } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useGsapScroll } from '@/lib/useGsapScroll'

const STEPS = [
  {
    number: '01',
    icon: Plug,
    title: 'Connect',
    desc: 'Link your phone numbers, website, and tools. No code required.',
    detail:
      'Bring your existing systems online in minutes. Twilio, HubSpot, Calendar, your CRM. Everything plugs in without engineering.',
    color: '#3B7BF2',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Configure',
    desc: 'Tell the AI about your business. Train it on your FAQs and workflows.',
    detail:
      'Drop in your knowledge base, set escalation rules, choose a voice. The AI learns how you talk and how you handle every kind of customer.',
    color: '#6366F1',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Automate',
    desc: 'Go live. Your AI handles calls, chats, and follow-ups around the clock.',
    detail:
      'Every call answered. Every lead followed up. Every conversation logged. You watch it run while your team focuses on closing.',
    color: '#0EA5E9',
  },
]

export function HowItWorks() {
  const stageRef = useRef(null)
  const railFillRef = useRef(null)
  const stepRefs = useRef([])
  const setStepRef = el => {
    if (el && !stepRefs.current.includes(el)) stepRefs.current.push(el)
  }

  const scopeRef = useGsapScroll(({ gsap, ScrollTrigger }) => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const stage = stageRef.current
      const fill = railFillRef.current
      if (!stage || !fill) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: '+=90%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            const idx = Math.min(
              STEPS.length - 1,
              Math.floor(self.progress * STEPS.length * 0.999),
            )
            stepRefs.current.forEach((el, i) => {
              if (!el) return
              const dot = el.querySelector('.step-dot')
              const card = el.querySelector('.step-card')
              const isReached = i <= idx
              const isCurrent = i === idx
              const accent = STEPS[i].color
              if (dot) {
                dot.style.background = isReached ? accent : 'rgba(15,17,41,0.18)'
                dot.style.transform = `translateX(-50%) scale(${isReached ? 1.15 : 1})`
                dot.style.boxShadow = isReached
                  ? `0 0 0 6px #fff, 0 0 24px ${accent}66`
                  : '0 0 0 6px #fff'
              }
              if (card) {
                card.style.transform = isCurrent ? 'translateY(-6px)' : 'translateY(0)'
                card.style.boxShadow = isCurrent
                  ? `0 24px 60px -24px ${accent}55, 0 4px 16px rgba(15,17,41,0.05)`
                  : '0 8px 24px -16px rgba(15,17,41,0.12)'
                card.style.borderColor = isCurrent ? `${accent}55` : 'rgba(15,17,41,0.06)'
              }
            })
          },
        },
      })

      tl.fromTo(fill, { scaleX: 0 }, { scaleX: 1, ease: 'none' })
    })
  }, [])

  return (
    <section
      ref={scopeRef}
      className="relative"
      style={{ background: '#FFFFFF' }}
      aria-label="How it works"
    >
      <div ref={stageRef} className="relative lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
        {/* Background flourish */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(59,123,242,0.08), transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(59,123,242,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(59,123,242,0.035) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,0.7), transparent 75%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-16 w-full">
          {/* Heading */}
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="badge mx-auto mb-4 w-fit">How it works</p>
            <h2
              className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.04em] text-text mb-3"
              style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
            >
              Up and running in{' '}
              <span className="text-gradient">hours, not months</span>
            </h2>
            <p
              className="text-base text-text-secondary leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              Three straightforward steps. Scroll to follow the path.
            </p>
          </AnimatedSection>

          {/* Steps grid */}
          <div className="relative mt-12 lg:mt-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:gap-x-8 lg:pt-8 w-full">
              {/* Continuous rail (desktop only) — sits above the cards, aligned with dot centers */}
              <div
                className="hidden lg:block absolute h-[2px] overflow-hidden"
                style={{
                  top: '23px',
                  left: 'calc(100% / 6 - 10.667px)',
                  right: 'calc(100% / 6 - 10.667px)',
                  background: 'rgba(15,17,41,0.07)',
                }}
                aria-hidden="true"
              >
                <div
                  ref={railFillRef}
                  className="absolute inset-0 origin-left"
                  style={{
                    background:
                      'linear-gradient(90deg, #3B7BF2, #6366F1, #0EA5E9)',
                    transform: 'scaleX(0)',
                  }}
                />
              </div>

              {STEPS.map(step => (
                <StepPanel
                  key={step.number}
                  step={step}
                  ref={setStepRef}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const StepPanel = forwardRef(function StepPanel({ step }, ref) {
  const { number, icon: Icon, title, desc, detail, color } = step

  return (
      <div ref={ref} className="relative">
        {/* Rail dot — sits above the card on the rail line */}
        <div
          className="step-dot hidden lg:block absolute z-10 w-4 h-4 rounded-full"
          style={{
            top: '-16px',
            left: '50%',
            background: 'rgba(15,17,41,0.18)',
            boxShadow: '0 0 0 6px #fff',
            transform: 'translateX(-50%) scale(1)',
            transition: 'background-color 400ms ease, transform 400ms cubic-bezier(0.22,1,0.36,1), box-shadow 400ms ease',
          }}
          aria-hidden="true"
        />

        <div
          className="step-card relative h-full p-7 lg:p-8 rounded-3xl flex flex-col gap-5"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(15,17,41,0.06)',
            boxShadow: '0 8px 24px -16px rgba(15,17,41,0.12)',
            transition: 'transform 500ms cubic-bezier(0.22,1,0.36,1), box-shadow 500ms ease, border-color 500ms ease',
          }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span
              className="text-[3.25rem] font-extrabold leading-none select-none"
              style={{
                fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace',
                background: `linear-gradient(135deg, ${color}, ${color}55)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.04em',
              }}
            >
              {number}
            </span>
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center"
              style={{
                background: `${color}12`,
                border: `1px solid ${color}26`,
              }}
            >
              <Icon size={20} strokeWidth={1.75} style={{ color }} />
            </div>
          </div>

          {/* Body */}
          <div>
            <h3
              className="text-xl font-bold text-text mb-2 tracking-[-0.025em]"
              style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
            >
              {title}
            </h3>
            <p
              className="text-sm text-text-secondary leading-relaxed mb-3"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {desc}
            </p>
            <p
              className="hidden lg:block text-[13px] text-text-secondary/85 leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
            >
              {detail}
            </p>
        </div>
      </div>
    </div>
  )
})
