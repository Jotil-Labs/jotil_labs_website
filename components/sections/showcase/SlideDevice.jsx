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

export function SlideDevice({ slug, deviceType, isActive }) {
  const Device = DEVICES[deviceType]
  const Screen = SCREENS[slug]
  const vibrate = deviceType === 'phone' && slug === 'receptionist'

  return (
    <div className="flex justify-center items-center" data-device>
      <Device vibrate={vibrate && isActive}>
        <Screen isActive={isActive} />
      </Device>
    </div>
  )
}
