import { SlideText } from './SlideText'
import { SlideDevice } from './SlideDevice'

export function ProductSlide({ product, index, isActive, messengerProgressRef, spaceProgressRef }) {
  const isEven = index % 2 === 1

  return (
    <div
      className="product-slide md:absolute md:inset-0 flex items-center justify-center px-6 md:px-[60px] py-16 md:py-0"
      data-index={index}
    >
      <div
        className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        style={{ direction: isEven ? 'rtl' : 'ltr' }}
      >
        <div style={{ direction: 'ltr' }}>
          <SlideText product={product} />
        </div>
        <div style={{ direction: 'ltr' }}>
          <SlideDevice
            slug={product.slug}
            deviceType={product.deviceType}
            isActive={isActive}
            messengerProgressRef={messengerProgressRef}
            spaceProgressRef={spaceProgressRef}
          />
        </div>
      </div>
    </div>
  )
}
