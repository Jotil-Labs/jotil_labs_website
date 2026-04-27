'use client'

import { useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Phone,
  MessageCircle,
  TrendingUp,
  LayoutGrid,
  GitBranch,
  UserCircle,
} from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { useGsapScroll } from '@/lib/useGsapScroll'

const CAPABILITIES = [
  {
    slug: 'receptionist',
    icon: Phone,
    title: 'Answer every call',
    desc: 'Your customers call and someone always picks up. Instantly. 24/7. No hold music, no voicemail, no missed opportunities.',
    outcome: '80% fewer missed calls',
    accent: '#3B7BF2',
  },
  {
    slug: 'messenger',
    icon: MessageCircle,
    title: 'Handle every conversation',
    desc: 'Whether it is a website visitor, a text message, or a WhatsApp chat, your business responds in seconds, not hours.',
    outcome: 'Under 3s response time',
    accent: '#6366F1',
  },
  {
    slug: 'outreach',
    icon: TrendingUp,
    title: 'Grow your pipeline',
    desc: 'Reach more leads with intelligent outbound campaigns that sound human and convert. Follow up automatically so nothing falls through.',
    outcome: '3x more leads contacted',
    accent: '#0EA5E9',
  },
  {
    slug: 'space',
    icon: LayoutGrid,
    title: 'Stay organized',
    desc: 'Every interaction logged. Every lead scored. Every appointment scheduled. One workspace that keeps your whole team aligned.',
    outcome: 'Zero manual data entry',
    accent: '#3B7BF2',
  },
  {
    slug: 'flow',
    icon: GitBranch,
    title: 'Automate the repetitive',
    desc: 'Connect your tools and let intelligent workflows handle the busy work. From follow-ups to invoicing, it runs while you sleep.',
    outcome: '12+ hours saved per week',
    accent: '#6366F1',
  },
  {
    slug: 'avatar',
    icon: UserCircle,
    title: 'Meet customers face to face',
    desc: 'A lifelike digital assistant that greets visitors on your website with real conversation, real expressions, and real personality.',
    outcome: '2x visitor engagement',
    accent: '#0EA5E9',
  },
]

export function ProductShowcase() {
  const trackRef = useRef(null)
  const progressRef = useRef(null)
  const counterRef = useRef(null)

  const scopeRef = useGsapScroll(({ gsap, ScrollTrigger }) => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current
      if (!track) return

      const panels = gsap.utils.toArray('[data-panel]', track)
      const distance = () => track.scrollWidth - window.innerWidth

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
      })

      ScrollTrigger.create({
        trigger: scopeRef.current,
        start: 'top top',
        end: () => '+=' + distance(),
        pin: true,
        scrub: true,
        anticipatePin: 1,
        animation: tween,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / Math.max(1, panels.length - 1),
          delay: 0.08,
          duration: { min: 0.18, max: 0.4 },
          ease: 'power2.out',
        },
        onUpdate: self => {
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${self.progress})`
          }
          if (counterRef.current) {
            const idx = Math.min(
              panels.length,
              Math.floor(self.progress * panels.length) + 1,
            )
            counterRef.current.textContent =
              String(idx).padStart(2, '0') +
              ' / ' +
              String(panels.length).padStart(2, '0')
          }
        },
      })

      panels.forEach((panel, i) => {
        const inner = panel.querySelector('[data-panel-inner]')
        if (!inner) return
        gsap.fromTo(
          inner,
          { opacity: 0.35, scale: 0.92, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: 'left center',
              end: 'right center',
              scrub: true,
            },
          },
        )
      })
    })
  }, [])

  return (
    <section
      ref={scopeRef}
      className="relative overflow-hidden lg:h-screen"
      style={{ background: 'var(--color-bg)' }}
      aria-label="Product showcase"
    >
      {/* Soft background mesh */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,123,242,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,123,242,0.04) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage:
              'radial-gradient(ellipse at center, rgba(0,0,0,0.85), transparent 75%)',
          }}
        />
        <div
          className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59,123,242,0.10), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute -bottom-32 -right-24 w-[560px] h-[560px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(99,102,241,0.10), transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Heading + chrome (desktop) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-20 lg:pb-6">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <p className="badge mx-auto mb-4 w-fit">
            What changes for your business
          </p>
          <h2
            className="text-[clamp(1.9rem,3.5vw,2.75rem)] font-extrabold tracking-[-0.04em] text-text mb-3"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            One platform.{' '}
            <span className="text-gradient">Every customer touchpoint.</span>
          </h2>
          <p
            className="text-base text-text-secondary leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            Scroll to explore each capability. Your business runs on
            conversations, and every one of them gets handled.
          </p>
        </AnimatedSection>

        {/* Progress + counter — desktop only */}
        <div className="hidden lg:flex items-center gap-5 mt-10 max-w-3xl mx-auto">
          <span
            ref={counterRef}
            className="text-xs font-semibold text-text-secondary tracking-[0.2em]"
            style={{
              fontFamily: 'var(--font-jetbrains), JetBrains Mono, monospace',
            }}
          >
            01 / 06
          </span>
          <div
            className="flex-1 h-px relative overflow-hidden"
            style={{ background: 'rgba(15,17,41,0.08)' }}
          >
            <div
              ref={progressRef}
              className="absolute inset-0 origin-left"
              style={{
                background:
                  'linear-gradient(90deg, #3B7BF2, #6366F1, #0EA5E9)',
                transform: 'scaleX(0)',
              }}
            />
          </div>
          <span
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-secondary"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            Scroll
          </span>
        </div>
      </div>

      {/* Horizontal track — desktop pin+scrub, mobile vertical scroll */}
      <div className="relative z-10 mt-10 lg:mt-8">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 lg:gap-6 px-6 lg:pl-[6vw] lg:pr-6 pb-16 lg:pb-0 lg:will-change-transform"
        >
          {CAPABILITIES.map(cap => (
            <CapabilityPanel key={cap.slug} capability={cap} />
          ))}

          {/* Final outro panel — desktop only */}
          <OutroPanel />
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="lg:hidden relative z-10 text-center pb-20 px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary no-underline group"
          style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
        >
          See how it all works together
          <ArrowRight
            size={15}
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  )
}

function CapabilityPanel({ capability }) {
  const { slug, icon: Icon, title, desc, outcome, accent } = capability

  return (
    <div
      data-panel
      className="shrink-0 w-full lg:w-[clamp(360px,28vw,440px)] lg:h-[58vh] lg:min-h-[420px] flex"
    >
      <Link
        href={`/products/${slug}`}
        data-panel-inner
        className="group relative flex-1 flex flex-col justify-between p-7 lg:p-8 rounded-[28px] no-underline overflow-hidden transition-shadow duration-500"
        style={{
          background: '#FFFFFF',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow:
            '0 24px 60px -28px rgba(15,17,41,0.18), 0 2px 8px rgba(15,17,41,0.04)',
        }}
      >
        {/* Glow */}
        <span
          className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />

        {/* Top: icon + outcome */}
        <div className="relative flex items-start justify-between">
          <div
            className="w-14 h-14 rounded-[18px] flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${accent}1A, ${accent}08)`,
              border: `1px solid ${accent}26`,
            }}
          >
            <Icon size={22} strokeWidth={1.5} style={{ color: accent }} />
          </div>
          <span
            className="text-[10px] font-semibold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
            style={{
              background: `${accent}10`,
              color: accent,
              fontFamily: 'var(--font-outfit), Outfit, sans-serif',
            }}
          >
            {outcome}
          </span>
        </div>

        {/* Middle: copy */}
        <div className="relative mt-10 lg:mt-0">
          <h3
            className="text-2xl lg:text-[28px] font-extrabold text-text leading-[1.15] tracking-[-0.025em] mb-3"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            {title}
          </h3>
          <p
            className="text-sm lg:text-[15px] text-text-secondary leading-[1.65]"
            style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}
          >
            {desc}
          </p>
        </div>

        {/* Bottom: CTA row */}
        <div
          className="relative mt-8 pt-5 flex items-center justify-between"
          style={{ borderTop: '1px solid rgba(15,17,41,0.06)' }}
        >
          <span
            className="text-xs font-semibold tracking-[0.16em] uppercase text-text-secondary"
            style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
          >
            Explore
          </span>
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
            style={{
              background: accent,
              color: '#fff',
              boxShadow: `0 8px 24px ${accent}40`,
            }}
          >
            <ArrowRight size={15} strokeWidth={2.25} />
          </span>
        </div>
      </Link>
    </div>
  )
}

function OutroPanel() {
  return (
    <div
      data-panel
      className="hidden lg:flex shrink-0 w-[clamp(360px,28vw,440px)] h-[58vh] min-h-[420px]"
    >
      <div
        data-panel-inner
        className="relative flex-1 flex flex-col items-center justify-center text-center p-10 rounded-[28px] overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #1B4FBA 0%, #3B7BF2 55%, #6366F1 100%)',
          boxShadow: '0 30px 80px -30px rgba(59,123,242,0.55)',
        }}
      >
        <span
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <p
          className="relative text-[11px] font-semibold tracking-[0.25em] uppercase text-white/70 mb-4"
          style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
        >
          The full picture
        </p>
        <h3
          className="relative text-[clamp(1.6rem,2.4vw,2.1rem)] font-extrabold text-white leading-tight tracking-[-0.025em] mb-5 max-w-md"
          style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
        >
          Six capabilities. One platform that grows with you.
        </h3>
        <Link
          href="/products"
          className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary text-sm font-semibold no-underline transition-transform duration-200 hover:-translate-y-0.5"
          style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
        >
          See how it all works together
          <ArrowRight size={15} strokeWidth={2.25} />
        </Link>
      </div>
    </div>
  )
}
