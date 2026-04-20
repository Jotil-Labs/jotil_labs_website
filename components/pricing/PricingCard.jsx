import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function PricingCard({ tier, productSlug }) {
  const isHighlighted = tier.highlighted
  const tierSlug = tier.slug || tier.name?.toLowerCase()
  const href = productSlug
    ? `/contact?product=${productSlug}&tier=${tierSlug}`
    : '/contact'

  return (
    <div
      className={`card-premium flex flex-col ${
        isHighlighted
          ? 'border-primary/30 shadow-lg shadow-primary/10 scale-[1.02] bg-gradient-to-b from-[#F4F8FF] to-white z-10'
          : ''
      }`}
    >
      {isHighlighted && (
        <div className="mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-[#EEF3FE] px-2.5 py-1 rounded-full font-display">
            Most Popular
          </span>
        </div>
      )}
      <p className="font-display text-xl font-bold text-text mb-1">{tier.name}</p>
      {tier.description && (
        <p className="text-sm text-text-secondary mb-5">{tier.description}</p>
      )}

      <div className="mb-6 flex items-end gap-1">
        <span
          className={`font-display text-4xl font-extrabold tracking-tight ${isHighlighted ? 'text-primary' : 'text-text'}`}
        >
          {tier.price}
        </span>
        {tier.period && <span className="text-sm text-text-secondary mb-1">{tier.period}</span>}
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
        {isHighlighted ? 'Start 14-day trial' : 'Get started'}
      </Button>
    </div>
  )
}
