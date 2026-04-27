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

const SCROLL_PER_PRODUCT = 1200
const TOTAL_SCROLL = PRODUCT_SLIDES.length * SCROLL_PER_PRODUCT

function ProgressDots({ activeIndex, total }) {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Go to ${PRODUCT_SLIDES[i].badge}`}
          className="group relative w-3 h-3 flex items-center justify-center"
        >
          <span
            className="absolute inset-0 rounded-full transition-all duration-500 ease-out"
            style={{
              backgroundColor: i === activeIndex ? '#3859a8' : 'rgba(56, 89, 168, 0.15)',
              transform: i === activeIndex ? 'scale(1)' : 'scale(0.65)',
              boxShadow: i === activeIndex ? '0 0 10px rgba(56,89,168,0.25)' : 'none',
            }}
          />
        </button>
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

    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const slides = container.querySelectorAll('.product-slide')
      const tl = gsap.timeline()

      slides.forEach((slide, i) => {
        if (i === 0) {
          gsap.set(slide, { opacity: 1, visibility: 'visible' })
          gsap.set(slide.querySelectorAll('.slide-text > *'), { y: 0, opacity: 1 })
          const deviceEl = slide.querySelector('[data-device]')
          if (deviceEl) gsap.set(deviceEl, { y: 0, opacity: 1, scale: 1 })
        } else {
          gsap.set(slide, { opacity: 0, visibility: 'hidden' })
          gsap.set(slide.querySelectorAll('.slide-text > *'), { y: 50, opacity: 0 })
          const deviceEl = slide.querySelector('[data-device]')
          if (deviceEl) gsap.set(deviceEl, { y: 40, opacity: 0, scale: 0.9 })
        }
      })

      slides.forEach((slide, i) => {
        const textEls = slide.querySelectorAll('.slide-text > *')
        const deviceEl = slide.querySelector('[data-device]')

        if (i > 0) {
          tl.addLabel(`enter-${i}`)
          tl.set(slide, { visibility: 'visible' }, `enter-${i}`)
          tl.to(slide, { opacity: 1, duration: 0.12, ease: 'power1.in' }, `enter-${i}`)
          tl.to(textEls, {
            y: 0, opacity: 1,
            stagger: 0.04,
            duration: 0.25,
            ease: 'power3.out',
          }, `enter-${i}+=0.04`)
          if (deviceEl) {
            tl.to(deviceEl, {
              y: 0, opacity: 1, scale: 1,
              duration: 0.3,
              ease: 'power3.out',
            }, `enter-${i}+=0.08`)
          }
        }

        tl.addLabel(`hold-${i}`)
        tl.to({}, { duration: 0.4 })

        if (i < slides.length - 1) {
          tl.addLabel(`exit-${i}`)
          tl.to(textEls, {
            y: -35, opacity: 0,
            stagger: 0.02,
            duration: 0.2,
            ease: 'power2.inOut',
          }, `exit-${i}`)
          if (deviceEl) {
            tl.to(deviceEl, {
              y: -25, opacity: 0, scale: 1.04,
              duration: 0.22,
              ease: 'power2.inOut',
            }, `exit-${i}`)
          }
          tl.to(slide, { opacity: 0, duration: 0.08, ease: 'power1.out' }, `exit-${i}+=0.18`)
          tl.set(slide, { visibility: 'hidden' }, `exit-${i}+=0.26`)
          tl.to({}, { duration: 0.04 })
        }
      })

      const totalDuration = tl.duration()
      const snapPoints = Array.from(slides).map((_, i) =>
        tl.labels[`hold-${i}`] / totalDuration
      )

      ScrollTrigger.create({
        trigger: container,
        pin: true,
        start: 'top top',
        end: `+=${TOTAL_SCROLL}`,
        scrub: 0.6,
        snap: {
          snapTo: snapPoints,
          duration: { min: 0.4, max: 0.9 },
          delay: 0.3,
          ease: 'power2.inOut',
          inertia: false,
        },
        animation: tl,
        onUpdate: (self) => {
          const progress = self.progress
          let closest = 0
          let minDist = Infinity
          for (let i = 0; i < snapPoints.length; i++) {
            const dist = Math.abs(progress - snapPoints[i])
            if (dist < minDist) {
              minDist = dist
              closest = i
            }
          }
          setActiveIndex(closest)
        },
      })
    })

    mm.add('(max-width: 767px)', () => {
      setIsMobile(true)
      const slides = container.querySelectorAll('.product-slide')
      gsap.set(slides, { position: 'relative', opacity: 1, visibility: 'visible' })
      slides.forEach(slide => {
        gsap.set(slide.querySelectorAll('.slide-text > *'), { y: 0, opacity: 1 })
        const deviceEl = slide.querySelector('[data-device]')
        if (deviceEl) gsap.set(deviceEl, { y: 0, opacity: 1, scale: 1 })
      })
      return () => setIsMobile(false)
    })

    mm.add('(prefers-reduced-motion: reduce)', () => {
      const slides = container.querySelectorAll('.product-slide')
      gsap.set(slides, { position: 'relative', opacity: 1, visibility: 'visible' })
      slides.forEach(slide => {
        gsap.set(slide.querySelectorAll('.slide-text > *'), { y: 0, opacity: 1 })
        const deviceEl = slide.querySelector('[data-device]')
        if (deviceEl) gsap.set(deviceEl, { y: 0, opacity: 1, scale: 1 })
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
