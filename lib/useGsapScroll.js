'use client'

import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useGsapScroll(setup, deps = []) {
  const scopeRef = useRef(null)

  useLayoutEffect(() => {
    if (!scopeRef.current) return
    const ctx = gsap.context(() => setup({ gsap, ScrollTrigger }), scopeRef)
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return scopeRef
}
