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

      const blobX = (currentX - 0.5) * -16
      const blobY = (currentY - 0.5) * -10
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${blobX}px, ${blobY}px, 0) scale(1.03)`
      }
      if (grainRef.current) {
        grainRef.current.style.transform = `translate3d(${blobX * 0.5}px, ${blobY * 0.5}px, 0) scale(1.03)`
      }

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
  const blobOpacity = isHero ? 1 : 0.6
  const grainOpacity = isHero ? 0.14 : 0.08

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Blob -- lavender-blue radial, bottom-left */}
      <div
        ref={blobRef}
        className="absolute inset-0 will-change-transform"
        style={{
          opacity: blobOpacity,
          background: `radial-gradient(ellipse 65% 72% at -6% 110%,
            rgba(90, 115, 185, 0.78) 0%,
            rgba(110, 140, 200, 0.52) 24%,
            rgba(155, 170, 215, 0.28) 44%,
            rgba(200, 210, 230, 0.10) 60%,
            transparent 72%)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Grain -- neutral noise tile, overlay blend, masked to blob region */}
      <div
        ref={grainRef}
        className="absolute inset-0 will-change-transform"
        style={{
          opacity: grainOpacity,
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`
          )}")`,
          backgroundSize: '200px 200px',
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 72% at -6% 110%, black 0%, black 38%, transparent 72%)',
          maskImage:
            'radial-gradient(ellipse 65% 72% at -6% 110%, black 0%, black 38%, transparent 72%)',
          mixBlendMode: 'overlay',
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Watermark -- brand logo, right-anchored, 40% pushed off-screen.
          White is invisible on our near-white bg so we use brand blue
          at low opacity for a subtle tinted watermark. */}
      {isHero && (
        <div
          className="absolute inset-y-0 right-0 hidden md:flex items-center"
          style={{ transform: 'translateX(40%)' }}
        >
          <div
            ref={watermarkRef}
            className="will-change-transform"
            style={{
              opacity: 0.055,
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
