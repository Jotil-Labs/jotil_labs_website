'use client'

import { useState, useCallback, useRef } from 'react'
import { PhoneMockup } from './devices/PhoneMockup'
import { LaptopMockup } from './devices/LaptopMockup'
import { MonitorMockup } from './devices/MonitorMockup'
import { FloatingCards } from './cards/FloatingCards'
import { ReceptionistScreen } from './screens/ReceptionistScreen'
import { MessengerScreen } from './screens/MessengerScreen'
import { OutreachScreen } from './screens/OutreachScreen'
import { SpaceScreen } from './screens/SpaceScreen'
import { AvatarScreen } from './screens/AvatarScreen'

const SCREENS = {
  receptionist: ReceptionistScreen,
  messenger: MessengerScreen,
  outreach: OutreachScreen,
  space: SpaceScreen,
  avatar: AvatarScreen,
}

const DEVICES = {
  phone: PhoneMockup,
  laptop: LaptopMockup,
  monitor: MonitorMockup,
}

const TILT = {
  phone: 'rotateY(-8deg) rotateX(4deg)',
  laptop: 'rotateY(-6deg) rotateX(3deg)',
  monitor: 'rotateY(-5deg) rotateX(2deg)',
}

export function SlideDevice({ slug, deviceType, isActive }) {
  const Device = DEVICES[deviceType]
  const Screen = SCREENS[slug]
  const vibrate = deviceType === 'phone' && slug === 'receptionist'
  const [highlightedCards, setHighlightedCards] = useState(new Set())
  const timersRef = useRef({})

  const onAction = useCallback((cardId) => {
    setHighlightedCards((prev) => new Set([...prev, cardId]))
    if (timersRef.current[cardId]) clearTimeout(timersRef.current[cardId])
    timersRef.current[cardId] = setTimeout(() => {
      setHighlightedCards((prev) => {
        const next = new Set(prev)
        next.delete(cardId)
        return next
      })
    }, 1800)
  }, [])

  return (
    <div
      className="relative flex justify-center items-center scale-[0.85] md:scale-100 origin-center"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
      data-device
    >
      {/* 3D scene container -- everything inside shares the same 3D space */}
      <div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: TILT[deviceType],
        }}
      >
        {/* Floating cards at different Z depths (behind the phone) */}
        <FloatingCards slug={slug} highlightedCards={highlightedCards} />

        {/* Device at z=0 (front layer) */}
        <div className="relative" style={{ transform: 'translateZ(0px)' }}>
          <Device vibrate={vibrate && isActive} glass>
            <Screen isActive={isActive} onAction={onAction} />
          </Device>
        </div>
      </div>
    </div>
  )
}
