'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Logo from '@/components/ui/Logo'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const BLOBS = [
  {
    id: 'anchor',
    color: 'rgba(56, 89, 168, 0.35)',
    size: '45vw',
    minSize: '320px',
    blur: 70,
    position: { bottom: '-12%', left: '-8%' },
    drift: {
      x: [0, 50, -25, 40, 0],
      y: [0, -35, 45, -20, 0],
      duration: 15,
    },
    pulse: { scale: 1.06, duration: 9 },
    scrollShift: { yPercent: -28, xPercent: 15 },
  },
  {
    id: 'cyan',
    color: 'rgba(34, 211, 238, 0.18)',
    size: '35vw',
    minSize: '260px',
    blur: 65,
    position: { top: '-8%', right: '-5%' },
    drift: {
      x: [0, -40, 25, -30, 0],
      y: [0, 30, -40, 20, 0],
      duration: 13,
    },
    pulse: { scale: 1.05, duration: 8 },
    scrollShift: { yPercent: 35, xPercent: -12 },
  },
  {
    id: 'sapphire',
    color: 'rgba(59, 130, 246, 0.25)',
    size: '40vw',
    minSize: '280px',
    blur: 75,
    position: { top: '25%', left: '15%' },
    drift: {
      x: [0, 30, -35, 20, 0],
      y: [0, -25, 30, -35, 0],
      duration: 17,
    },
    pulse: { scale: 1.04, duration: 10 },
    scrollShift: { yPercent: 22, xPercent: -10 },
  },
  {
    id: 'violet',
    color: 'rgba(99, 102, 241, 0.12)',
    size: '30vw',
    minSize: '220px',
    blur: 60,
    position: { bottom: '5%', right: '8%' },
    drift: {
      x: [0, -25, 35, -18, 0],
      y: [0, 35, -22, 28, 0],
      duration: 18,
    },
    pulse: { scale: 1.05, duration: 11 },
    scrollShift: { yPercent: -18, xPercent: -14 },
  },
]

const GRAIN_SVG = encodeURIComponent(
  `<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.22 0 0 0 0 0.24 0 0 0 0 0.38 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`
)

export function BrandBackground({ variant = 'quiet' }) {
  const containerRef = useRef(null)
  const watermarkRef = useRef(null)
  const blobScrollRefs = useRef([])
  const blobDriftRefs = useRef([])

  const isHero = variant === 'hero'
  const blobOpacity = isHero ? 1 : 0.55
  const grainOpacity = isHero ? 0.18 : 0.08

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const blobCount = window.innerWidth < 768 ? 2 : BLOBS.length

        BLOBS.forEach((blob, i) => {
          const driftEl = blobDriftRefs.current[i]
          const scrollEl = blobScrollRefs.current[i]
          if (!driftEl || !scrollEl) return

          if (i >= blobCount) {
            gsap.set(scrollEl, { autoAlpha: 0 })
            return
          }

          gsap.to(driftEl, {
            keyframes: blob.drift.x.map((xVal, j) => ({
              x: xVal,
              y: blob.drift.y[j],
              ease: 'sine.inOut',
            })),
            duration: blob.drift.duration,
            repeat: -1,
            ease: 'none',
          })

          gsap.to(driftEl, {
            scale: blob.pulse.scale,
            duration: blob.pulse.duration,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })

          gsap.to(scrollEl, {
            yPercent: blob.scrollShift.yPercent * (isHero ? 1 : 0.6),
            xPercent: blob.scrollShift.xPercent * (isHero ? 1 : 0.6),
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1.5,
            },
          })
        })
      })
    },
    { scope: containerRef, dependencies: [variant] }
  )

  useEffect(() => {
    if (!isHero || typeof window === 'undefined') return

    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    let mouseX = 0.5
    let mouseY = 0.5
    let currentX = 0.5
    let currentY = 0.5
    let rafId = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
      if (!rafId) rafId = requestAnimationFrame(update)
    }

    const update = () => {
      rafId = 0
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08

      const tiltX = (currentY - 0.5) * -6
      const tiltY = (currentX - 0.5) * 10
      if (watermarkRef.current) {
        watermarkRef.current.style.transform = `perspective(1100px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      }

      if (
        Math.abs(mouseX - currentX) > 0.002 ||
        Math.abs(mouseY - currentY) > 0.002
      ) {
        rafId = requestAnimationFrame(update)
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isHero])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {BLOBS.map((blob, i) => (
        <div
          key={blob.id}
          ref={(el) => (blobScrollRefs.current[i] = el)}
          className="absolute will-change-transform"
          style={blob.position}
        >
          <div
            ref={(el) => (blobDriftRefs.current[i] = el)}
            className="will-change-transform"
            style={{
              width: blob.size,
              height: blob.size,
              minWidth: blob.minSize,
              minHeight: blob.minSize,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
              filter: `blur(${blob.blur}px)`,
              opacity: blobOpacity,
            }}
          />
        </div>
      ))}

      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `url("data:image/svg+xml;utf8,${GRAIN_SVG}")`,
          backgroundSize: '512px 512px',
          opacity: grainOpacity,
          mixBlendMode: 'multiply',
          animation: 'grain-shift 0.6s steps(8) infinite',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {isHero && (
        <div
          ref={watermarkRef}
          className="absolute inset-y-0 hidden md:flex items-center will-change-transform"
          style={{
            right: '-18%',
            opacity: 0.07,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            transformStyle: 'preserve-3d',
            zIndex: 2,
          }}
        >
          <Logo size={800} tone="brand" animate={false} />
        </div>
      )}
    </div>
  )
}
