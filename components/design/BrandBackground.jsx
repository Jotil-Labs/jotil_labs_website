'use client'

import { useEffect, useRef } from 'react'
import Logo from '@/components/ui/Logo'

/**
 * Signature site background: asymmetric blue radial blob bottom-left,
 * visible grain masked to the blob area, optional real-logo watermark
 * on the right edge (homepage only).
 *
 * Variants:
 *   - "hero"  — homepage: blob + grain + real logo watermark + mouse parallax
 *   - "quiet" — other pages: blob + grain at lower intensity, no watermark
 *
 * Notes:
 *   - Uses the real brand <Logo> component for the watermark (not a simplified
 *     mockup). Animate=false so the dots don't pulse distractingly behind
 *     content.
 *   - All CSS + SVG; no canvas, no per-frame JS at rest. Parallax loop
 *     self-cancels when lerp is near target.
 *   - Parallax gated on (pointer: fine) AND prefers-reduced-motion:
 *     no-preference. Touch + reduced-motion users get static composition.
 */
export function BrandBackground({ variant = 'quiet' }) {
  const blobRef = useRef(null)
  const watermarkRef = useRef(null)
  const grainRef = useRef(null)

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

      const blobX = (currentX - 0.5) * -18
      const blobY = (currentY - 0.5) * -10
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${blobX}px, ${blobY}px, 0)`
      }
      if (grainRef.current) {
        grainRef.current.style.transform = `translate3d(${blobX * 0.5}px, ${blobY * 0.5}px, 0)`
      }

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
  }, [variant])

  // Hero variant: stronger blob + grain + watermark.
  // Quiet variant: softer blob + softer grain, no watermark.
  const blobOpacity = variant === 'hero' ? 0.95 : 0.55
  const grainOpacity = variant === 'hero' ? 0.38 : 0.22

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Blob — asymmetric radial gradient bottom-left. Brand primary #3859a8. */}
      <div
        ref={blobRef}
        className="absolute inset-0 will-change-transform"
        style={{
          opacity: blobOpacity,
          background: `radial-gradient(ellipse 62% 68% at -8% 112%,
            rgba(56, 89, 168, 0.55) 0%,
            rgba(56, 89, 168, 0.38) 22%,
            rgba(140, 155, 210, 0.22) 42%,
            rgba(200, 210, 232, 0.08) 58%,
            transparent 70%)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Grain — high-frequency SVG noise masked to the same blob shape.
          Multiply blend darkens where there's already color; invisible where
          the blob fades to transparent. */}
      <div
        ref={grainRef}
        className="absolute inset-0 will-change-transform"
        style={{
          opacity: grainOpacity,
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg viewBox='0 0 260 260' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.15' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0 0.42 0 0 0 0.85 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`
          )}")`,
          backgroundSize: '260px 260px',
          WebkitMaskImage:
            'radial-gradient(ellipse 62% 68% at -8% 112%, black 0%, black 35%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse 62% 68% at -8% 112%, black 0%, black 35%, transparent 70%)',
          mixBlendMode: 'multiply',
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Logo watermark — real brand Logo, partially revealed on right edge.
          Hero variant only. Hidden below md breakpoint. Uses the actual
          Logo component (hex body + depth + 3 dots), not a simplified mockup. */}
      {variant === 'hero' && (
        <div
          ref={watermarkRef}
          className="absolute inset-y-0 hidden md:flex items-center will-change-transform"
          style={{
            right: '-18%',
            opacity: 0.07,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            transformStyle: 'preserve-3d',
          }}
        >
          <Logo size={800} tone="brand" animate={false} />
        </div>
      )}
    </div>
  )
}
