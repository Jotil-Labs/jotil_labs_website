'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { PRODUCT_SLIDES } from './showcase/data'
import { ProductSlide } from './showcase/ProductSlide'
import { FlowCard } from './showcase/FlowCard'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const SCROLL_PER_PRODUCT = 1500
const TOTAL_SCROLL = PRODUCT_SLIDES.length * SCROLL_PER_PRODUCT

export function ScrollProductShowcase() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useGSAP(() => {
    const container = containerRef.current
    if (!container) return

    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const slides = container.querySelectorAll('.product-slide')
      const tl = gsap.timeline()

      // Initial state: all slides hidden except first
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

        // ENTER
        tl.addLabel(`enter-${i}`)
        tl.to(slide, { opacity: 1, duration: 0.01 }, `enter-${i}`)
        tl.to(textEls, { x: 0, opacity: 1, stagger: 0.02, duration: 0.15, ease: 'power2.out' }, `enter-${i}`)
        if (deviceEl) {
          tl.to(deviceEl, { x: 0, opacity: 1, scale: 1, duration: 0.18, ease: 'power2.out' }, `enter-${i}+=0.03`)
        }

        // HOLD
        tl.addLabel(`hold-${i}`)
        snapPoints.push(tl.labels[`hold-${i}`] / tl.duration())
        tl.to({}, { duration: 0.35 })

        // EXIT (skip for last slide)
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

    // Reduced motion fallback
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
      <section
        ref={containerRef}
        className="relative h-screen overflow-hidden"
        aria-label="Product showcase"
        role="region"
      >
        {PRODUCT_SLIDES.map((product, i) => (
          <ProductSlide
            key={product.slug}
            product={product}
            index={i}
            isActive={activeIndex === i}
          />
        ))}
      </section>
      <FlowCard />
    </>
  )
}
