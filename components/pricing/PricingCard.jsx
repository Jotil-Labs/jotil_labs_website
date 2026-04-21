import { Check, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

/**
 * Tier card used in the per-product pricing grid.
 *
 * Props:
 *   tier        — standard tier object from data/products.js OR a synthesized
 *                 enterprise tier object ({ slug: 'enterprise', name: 'Enterprise',
 *                 price: 'Custom', features: [...], priceFrom?: string })
 *   productSlug — product slug for building contact URL
 *   unitLabel   — label for quota line (e.g. 'conversation', 'minute', 'credit')
 */
export function PricingCard({ tier, productSlug, unitLabel }) {
  const isHighlighted = tier.highlighted
  const isEnterprise = tier.slug === 'enterprise'
  const tierSlug = tier.slug || tier.name?.toLowerCase()
  const href = productSlug
    ? `/contact?product=${productSlug}&tier=${tierSlug}`
    : '/contact'

  // Derive a single-line quota summary from existing tier data.
  // For quota-based products: "500 conversations included".
  // For per-user: "per user".
  // For enterprise: "Custom quota" or the priceFrom as microcopy.
  const quotaLine = buildQuotaLine(tier, unitLabel, isEnterprise)

  return (
    <div className="relative flex flex-col h-full">
      {isHighlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-block rounded-full bg-navy px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white font-display whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`flex flex-col h-full rounded-2xl border p-8 transition-all ${
          isHighlighted
            ? 'border-primary/25 bg-primary-50 shadow-[0_12px_32px_rgba(15,17,41,0.08)]'
            : 'border-primary-100 bg-white shadow-[0_1px_3px_rgba(15,17,41,0.05)]'
        }`}
      >
        {/* Name */}
        <p
          className="text-xl font-bold text-primary mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {tier.name}
        </p>
        {tier.description && (
          <p className="text-sm text-text-secondary leading-relaxed mb-6 min-h-[3rem]">
            {tier.description}
          </p>
        )}

        {/* Price */}
        <div className="mb-6 flex items-baseline gap-1">
          <span
            className={`text-5xl font-extrabold tracking-tight ${
              isEnterprise ? 'text-text' : 'text-primary'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {tier.price}
          </span>
          {tier.period && !isEnterprise && (
            <span className="text-sm text-text-secondary">{tier.period}</span>
          )}
        </div>

        {/* Quota line — subtle, single sentence */}
        {quotaLine && (
          <p className="text-sm text-text font-semibold mb-4 pb-4 border-b border-black/5">
            {quotaLine}
          </p>
        )}

        {/* Features */}
        <ul className="space-y-2.5 mb-8 flex-1">
          {tier.features?.map((f, fi) => {
            const isInheritance = f.toLowerCase().startsWith('everything in')
            return (
              <li
                key={fi}
                className={`flex items-start gap-2.5 text-sm ${
                  isInheritance
                    ? 'text-text font-semibold pb-2 mb-1 border-b border-black/5'
                    : 'text-text-secondary'
                }`}
              >
                {!isInheritance && (
                  <span className="mt-0.5 shrink-0 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100">
                    <Check size={10} strokeWidth={3} className="text-emerald-600" />
                  </span>
                )}
                <span className={isInheritance ? 'pt-0' : ''}>{f}</span>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        {isEnterprise ? (
          <Link
            href={href}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-text no-underline hover:border-primary/40 hover:text-primary transition-colors"
          >
            <Mail size={14} strokeWidth={2} />
            Contact Sales
          </Link>
        ) : (
          <Button
            href={href}
            variant={isHighlighted ? 'primary' : 'outline'}
            size="md"
            className="w-full justify-center"
          >
            {isHighlighted ? 'Start 14-day trial' : 'Get started'}
          </Button>
        )}
      </div>
    </div>
  )
}

/**
 * Derive a single-line quota summary from existing tier fields.
 * Returns null when no useful quota can be expressed.
 */
function buildQuotaLine(tier, unitLabel, isEnterprise) {
  if (isEnterprise) {
    return tier.priceFrom ? `From ${tier.priceFrom}/mo` : 'Custom quota'
  }
  if (tier.includedUnits && unitLabel) {
    const label = tier.includedUnits === 1 ? unitLabel : `${unitLabel}s`
    return `${tier.includedUnits.toLocaleString()} ${label} included`
  }
  if (tier.unitLabel === 'user' || unitLabel === 'user') {
    return 'per user, per month'
  }
  return null
}
