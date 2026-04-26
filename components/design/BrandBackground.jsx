'use client'

import { useEffect, useRef } from 'react'
import Logo from '@/components/ui/Logo'

const NOISE_SVG = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E`

export function BrandBackground({ variant = 'quiet' }) {
  const watermarkRef = useRef(null)

  useEffect(() => {
    if (variant !== 'hero') return
    if (typeof window === 'undefined') return

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

      const tiltX = (currentY - 0.5) * -14
      const tiltY = (currentX - 0.5) * 18
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
  }, [variant])

  const isHero = variant === 'hero'

  return (
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
          opacity: isHero ? 1 : 0.55,
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
          opacity: isHero ? 1 : 0.55,
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
          opacity: 0.35,
          mixBlendMode: 'overlay',
          backgroundImage: `url("${NOISE_SVG}")`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Watermark logo (above noise, no grain on it) */}
      {isHero && (
        <div
          className="absolute inset-y-0 right-0 hidden md:flex items-center"
          style={{ transform: 'translateX(40%)', zIndex: 2 }}
        >
          <div
            ref={watermarkRef}
            className="will-change-transform"
            style={{
              opacity: 0.06,
              transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              transformStyle: 'preserve-3d',
            }}
          >
            <Logo size={1600} tone="brand" animate={false} />
          </div>
        </div>
      )}
    </div>
  )
}
