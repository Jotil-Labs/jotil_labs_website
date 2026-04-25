'use client'

import { useRef, useState } from 'react'
import { PRODUCT_SLIDES } from './showcase/data'
import { ProductSlide } from './showcase/ProductSlide'
import { FlowCard } from './showcase/FlowCard'

export function ScrollProductShowcase() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

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
