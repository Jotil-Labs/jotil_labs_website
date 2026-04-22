'use client'

import { useEffect, useRef } from 'react'

/**
 * Signature site background: asymmetric blue radial blob bottom-left,
 * grain masked to the blob area, optional logo watermark on the right.
 *
 * Variants:
 *   - "hero"  — homepage treatment: blob + grain + watermark + mouse parallax
 *   - "quiet" — other pages: blob + grain only, no watermark, no parallax
 *
 * Implementation notes:
 *   - All CSS + SVG. No canvas, no per-frame JS work except parallax transforms
 *     when enabled.
 *   - Parallax gated on (pointer: fine) and prefers-reduced-motion: no-preference
 *     via matchMedia. Touch + reduced-motion users get static composition.
 *   - Fixed-positioned; passes through pointer events so nothing below it
 *     is click-blocked.
 *   - Watermark hidden below md breakpoint via CSS (no render cost on mobile).
 */
export function BrandBackground({ variant = 'quiet' }) {
  const blobRef = useRef(null)
  const watermarkRef = useRef(null)
  const grainRef = useRef(null)

  // Mouse parallax — only on hero variant, only on fine pointer + no reduced motion
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
      // Smooth lerp toward mouse position — lighter than hard cursor tracking
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

      // Continue lerp until we're near the target
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

  const blobOpacity = variant === 'hero' ? 0.85 : 0.5

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Blob — asymmetric radial gradient bottom-left. Uses brand primary.
          Fixed position, fades up-and-right into page bg. */}
      <div
        ref={blobRef}
        className="absolute inset-0 will-change-transform"
        style={{
          opacity: blobOpacity,
          background: `radial-gradient(ellipse 62% 68% at -8% 112%,
            rgba(56, 89, 168, 0.45) 0%,
            rgba(56, 89, 168, 0.30) 22%,
            rgba(140, 155, 210, 0.18) 42%,
            rgba(200, 210, 232, 0.08) 58%,
            transparent 70%)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Grain — masked to the same blob shape so texture only shows where
          there is color. SVG fractal noise inline-encoded; no network cost. */}
      <div
        ref={grainRef}
        className="absolute inset-0 will-change-transform"
        style={{
          opacity: 0.12,
          backgroundImage: `url("data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.22 0 0 0 0 0.35 0 0 0 0 0.66 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`
          )}")`,
          // Mask grain to the blob's shape — ellipse bottom-left
          WebkitMaskImage: `radial-gradient(ellipse 62% 68% at -8% 112%, black 0%, black 40%, transparent 70%)`,
          maskImage: `radial-gradient(ellipse 62% 68% at -8% 112%, black 0%, black 40%, transparent 70%)`,
          mixBlendMode: 'multiply',
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Watermark — logo hex on right edge, partially revealed.
          Hero variant only. Hidden below md breakpoint. */}
      {variant === 'hero' && (
        <div
          ref={watermarkRef}
          className="absolute inset-0 hidden md:block"
          style={{
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            transformStyle: 'preserve-3d',
          }}
        >
          <svg
            viewBox="0 0 116 124"
            className="absolute top-1/2 -translate-y-1/2 right-[-18%] h-[90vh] w-auto opacity-[0.045]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="29,28  75,28  98,68  75,108  29,108  6,68"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinejoin="round"
              className="text-primary"
            />
            <polygon points="52,36 80,52 52,68 24,52" fill="currentColor" className="text-primary-300" />
            <polygon points="24,52 52,68 52,100 24,84" fill="currentColor" className="text-navy" />
            <polygon points="80,52 52,68 52,100 80,84" fill="currentColor" className="text-primary" />
          </svg>
        </div>
      )}
    </div>
  )
}
