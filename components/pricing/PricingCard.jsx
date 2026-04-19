import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function PricingCard({ tier, ctaHref = '/contact' }) {
  const isHighlighted = tier.highlighted
  const isCustom = tier.price === 'Custom'
  const href = isCustom ? '/contact' : ctaHref

  return (
    <div
      className={`card-premium flex flex-col ${
        isHighlighted
          ? 'border-[#3B7BF2]/30 shadow-lg shadow-[#3B7BF2]/10 scale-[1.02] bg-gradient-to-b from-[#F4F8FF] to-white z-10'
          : ''
      }`}
    >
      {isHighlighted && (
        <div className="mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-[#EEF3FE] px-2.5 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <p
        className="text-xl font-bold text-text mb-1"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {tier.name}
      </p>
      <p className="text-sm text-text-secondary mb-5">{tier.description}</p>

      <div className="mb-6 flex items-end gap-1">
        <span
          className={`text-4xl font-extrabold tracking-tight ${isHighlighted ? 'text-primary' : 'text-text'}`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {tier.price}
        </span>
        {tier.period && (
          <span className="text-sm text-text-secondary mb-1">{tier.period}</span>
        )}
      </div>

      <ul className="space-y-2.5 mb-8 flex-1">
        {tier.features.map((f, fi) => (
          <li key={fi} className="flex items-start gap-2.5 text-sm text-text-secondary">
            <Check
              size={14}
              className={`mt-0.5 shrink-0 ${isHighlighted ? 'text-primary' : 'text-text-secondary'}`}
              strokeWidth={2.5}
            />
            {f}
          </li>
        ))}
      </ul>

      <Button
        href={href}
        variant={isHighlighted ? 'primary' : 'outline'}
        size="md"
        className="w-full justify-center"
      >
        {isCustom ? 'Contact Sales' : 'Start Free Trial'}
      </Button>
    </div>
  )
}
