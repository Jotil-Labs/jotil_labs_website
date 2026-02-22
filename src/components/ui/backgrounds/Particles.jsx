import { useEffect, useRef, useCallback } from 'react'
import { cn } from '../../../lib/utils'

const DEFAULT_CONFIG = {
  count: 50,
  color: '#2563EB',
  maxSize: 2.5,
  minSize: 0.8,
  speed: 0.3,
  connectDistance: 120,
  connectOpacity: 0.06,
}

export function Particles({
  className,
  config = {},
  ...props
}) {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const particlesRef = useRef([])

  const cfg = { ...DEFAULT_CONFIG, ...config }

  const initParticles = useCallback((w, h) => {
    return Array.from({ length: cfg.count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * cfg.speed,
      vy: (Math.random() - 0.5) * cfg.speed,
      size: cfg.minSize + Math.random() * (cfg.maxSize - cfg.minSize),
      opacity: 0.2 + Math.random() * 0.5,
    }))
  }, [cfg.count, cfg.speed, cfg.maxSize, cfg.minSize])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      particlesRef.current = initParticles(rect.width, rect.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const hexToRgb = (hex) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `${r},${g},${b}`
    }
    const rgb = hexToRgb(cfg.color)

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height

      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${p.opacity})`
        ctx.fill()
      }

      // Draw connections
      if (cfg.connectDistance > 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < cfg.connectDistance) {
              const opacity = cfg.connectOpacity * (1 - dist / cfg.connectDistance)
              ctx.beginPath()
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.strokeStyle = `rgba(${rgb}, ${opacity})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [cfg.color, cfg.connectDistance, cfg.connectOpacity, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 pointer-events-none', className)}
      aria-hidden="true"
      {...props}
    />
  )
}
