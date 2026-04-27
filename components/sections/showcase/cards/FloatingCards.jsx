'use client'

import { motion } from 'framer-motion'
import { FLOATING_CARDS } from './cardData'

export function FloatingCards({ slug, highlightedCards = new Set() }) {
  const cards = FLOATING_CARDS[slug]
  if (!cards) return null

  return (
    <>
      {cards.map((card) => {
        const Icon = card.icon
        const isHighlighted = highlightedCards.has(card.id)

        const posStyle = {}
        if (card.top) posStyle.top = card.top
        if (card.bottom) posStyle.bottom = card.bottom
        if (card.left) posStyle.left = card.left
        if (card.right) posStyle.right = card.right

        return (
          <motion.div
            key={card.id}
            className="absolute z-0 hidden md:flex"
            style={{
              ...posStyle,
              transform: `rotate(${card.rotate})`,
            }}
            animate={{
              opacity: isHighlighted ? 1 : 0.4,
              scale: isHighlighted ? 1.05 : 0.95,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div
              className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(8px)',
                border: `1px solid ${isHighlighted ? 'rgba(56, 89, 168, 0.25)' : 'rgba(0,0,0,0.06)'}`,
                boxShadow: isHighlighted
                  ? '0 4px 20px rgba(56, 89, 168, 0.15), 0 2px 8px rgba(0,0,0,0.06)'
                  : '0 2px 8px rgba(0,0,0,0.04)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: isHighlighted ? 'rgba(56, 89, 168, 0.1)' : 'rgba(0,0,0,0.03)',
                  transition: 'background 0.3s',
                }}
              >
                <Icon
                  size={15}
                  strokeWidth={1.5}
                  style={{
                    color: isHighlighted ? '#3859a8' : '#9ca3af',
                    transition: 'color 0.3s',
                  }}
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-800 leading-tight">{card.label}</p>
                <p className="text-[9px] text-gray-400 leading-tight">{card.sublabel}</p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}
