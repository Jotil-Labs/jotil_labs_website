'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PRODUCT_SLIDES } from './showcase/data'
import { ProductSlide } from './showcase/ProductSlide'
import { FlowCard } from './showcase/FlowCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SCROLL_PER_PRODUCT = 1500
const TOTAL_SCROLL = PRODUCT_SLIDES.length * SCROLL_PER_PRODUCT

function ProgressDots({ activeIndex, total }) {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to ${PRODUCT_SLIDES[i].badge}`}
          className="w-2.5 h-2.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: i === activeIndex ? '#3859a8' : 'rgba(56, 89, 168, 0.2)',
            transform: i === activeIndex ? 'scale(1.3)' : 'scale(1)',
          }}
        />
      ))}
    </div>
  )
}

function SectionHeading() {
  return (
    <AnimatedSection className="text-center pt-24 pb-12 px-6">
      <p
        className="text-sm font-semibold tracking-wide uppercase mb-3"
        style={{ color: '#3859a8' }}
      >
        What Changes for Your Business
      </p>
      <h2
        className="text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-[-0.03em] text-text max-w-2xl mx-auto"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        One platform. Every customer touchpoint.
      </h2>
    </AnimatedSection>
  )
}

export function ScrollProductShowcase() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useGSAP(() => {
    const container = containerRef.current
    if (!container) return

    const mm = gsap.matchMedia()

    // Desktop: full scroll-locked experience
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const slides = container.querySelectorAll('.product-slide')
      const tl = gsap.timeline()

      gsap.set(slides, { opacity: 0 })
      slides.forEach(slide => {
        gsap.set(slide.querySelectorAll('.slide-text > *'), { x: -80, opacity: 0 })
        const deviceEl = slide.querySelector('[data-device]')
        if (deviceEl) gsap.set(deviceEl, { x: 80, opacity: 0, scale: 0.95 })
      })

      const snapPoints = []

      slides.forEach((slide, i) => {
        const textEls = slide.querySelectorAll('.slide-text > *')
        const deviceEl = slide.querySelector('[data-device]')

        tl.addLabel(`enter-${i}`)
        tl.to(slide, { opacity: 1, duration: 0.01 }, `enter-${i}`)
        tl.to(textEls, { x: 0, opacity: 1, stagger: 0.02, duration: 0.15, ease: 'power2.out' }, `enter-${i}`)
        if (deviceEl) {
          tl.to(deviceEl, { x: 0, opacity: 1, scale: 1, duration: 0.18, ease: 'power2.out' }, `enter-${i}+=0.03`)
        }

        tl.addLabel(`hold-${i}`)
        snapPoints.push(tl.labels[`hold-${i}`] / tl.duration())
        tl.to({}, { duration: 0.35 })

        if (i < slides.length - 1) {
          tl.addLabel(`exit-${i}`)
          tl.to(textEls, { x: -120, opacity: 0, stagger: 0.01, duration: 0.15, ease: 'power2.in' }, `exit-${i}`)
          if (deviceEl) {
            tl.to(deviceEl, { x: 120, opacity: 0, scale: 0.95, duration: 0.15, ease: 'power2.in' }, `exit-${i}`)
          }
          tl.to(slide, { opacity: 0, duration: 0.01 }, `exit-${i}+=0.15`)
          tl.to({}, { duration: 0.08 })
        }
      })

      ScrollTrigger.create({
        trigger: container,
        pin: true,
        start: 'top top',
        end: `+=${TOTAL_SCROLL}`,
        scrub: 1,
        snap: {
          snapTo: snapPoints,
          duration: { min: 0.2, max: 0.8 },
          delay: 0.1,
          ease: 'power1.inOut',
        },
        animation: tl,
        onUpdate: (self) => {
          const idx = Math.round(self.progress * (slides.length - 1))
          setActiveIndex(idx)
        },
      })
    })

    // Mobile: no pin, show slides in normal flow
    mm.add('(max-width: 767px)', () => {
      setIsMobile(true)
      const slides = container.querySelectorAll('.product-slide')
      gsap.set(slides, { position: 'relative', opacity: 1 })
      slides.forEach(slide => {
        gsap.set(slide.querySelectorAll('.slide-text > *'), { x: 0, opacity: 1 })
        const deviceEl = slide.querySelector('[data-device]')
        if (deviceEl) gsap.set(deviceEl, { x: 0, opacity: 1, scale: 1 })
      })
      return () => setIsMobile(false)
    })

    // Reduced motion fallback (any screen size)
    mm.add('(prefers-reduced-motion: reduce)', () => {
      const slides = container.querySelectorAll('.product-slide')
      gsap.set(slides, { position: 'relative', opacity: 1 })
      slides.forEach(slide => {
        gsap.set(slide.querySelectorAll('.slide-text > *'), { x: 0, opacity: 1 })
        const deviceEl = slide.querySelector('[data-device]')
        if (deviceEl) gsap.set(deviceEl, { x: 0, opacity: 1, scale: 1 })
      })
    })
  }, { scope: containerRef })

  return (
    <>
      <SectionHeading />
      <section
        ref={containerRef}
        className={`relative overflow-hidden ${isMobile ? 'mobile-showcase' : 'h-screen'}`}
        aria-label="Product showcase"
        role="region"
      >
        {PRODUCT_SLIDES.map((product, i) => (
          <ProductSlide
            key={product.slug}
            product={product}
            index={i}
            isActive={isMobile || activeIndex === i}
          />
        ))}
        {!isMobile && (
          <ProgressDots activeIndex={activeIndex} total={PRODUCT_SLIDES.length} />
        )}
      </section>
      <FlowCard />
    </>
  )
}
