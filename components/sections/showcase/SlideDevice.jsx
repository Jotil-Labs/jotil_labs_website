'use client'

import { useState, useCallback, useRef } from 'react'
import { PhoneMockup } from './devices/PhoneMockup'
import { LaptopMockup } from './devices/LaptopMockup'
import { MonitorMockup } from './devices/MonitorMockup'
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
  phone: 'none',
  laptop: 'none',
  monitor: 'none',
}

export function SlideDevice({ slug, deviceType, isActive, messengerProgressRef, spaceProgressRef }) {
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

  const isMessenger = slug === 'messenger'

  return (
    <div
      className="relative flex justify-center items-center scale-[0.72] md:scale-100 origin-center"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
      }}
      data-device
    >
      <div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: TILT[deviceType],
        }}
      >
        <div className="relative" style={{ transform: 'translateZ(0px)' }}>
          {isMessenger ? (
            <div className="relative" style={{ width: 320, height: 660 }}>
              <Device glass>
                <div className="w-full h-full bg-gray-50/50" />
              </Device>
              <div
                className="absolute"
                style={{
                  top: 10, left: 10,
                  width: 300, height: 640,
                  overflow: 'visible',
                }}
              >
                <Screen
                  isActive={isActive}
                  onAction={onAction}
                  progressRef={messengerProgressRef}
                />
              </div>
            </div>
          ) : (
            <Device vibrate={vibrate && isActive} glass>
              <Screen
                isActive={isActive}
                onAction={onAction}
                progressRef={spaceProgressRef}
              />
            </Device>
          )}
        </div>
      </div>
    </div>
  )
}
