import Link from 'next/link'
import { ArrowRight, Building2, Check } from 'lucide-react'

export function EnterpriseBanner({ product, enterprise }) {
  const contactHref = `/contact?product=${product.slug}&tier=enterprise`
  const lastTier = product.pricing.tiers?.[product.pricing.tiers.length - 1]

  return (
    <div className="mt-12 rounded-2xl border border-navy/10 bg-gradient-to-br from-navy/[0.03] to-primary/[0.03] p-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center shrink-0">
          <Building2 size={20} strokeWidth={1.5} className="text-navy" />
        </div>
        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/70 font-display mb-1">
            Enterprise
          </p>
          <h3 className="text-xl font-bold text-text mb-2 font-display">
            Need more than {lastTier?.name ?? 'Business'}?
          </h3>
          <p className="text-sm text-text-secondary mb-4 leading-relaxed">
            {enterprise.description}. From{' '}
            <span className="font-semibold text-text">{enterprise.priceFrom}/mo</span>.
          </p>
          {enterprise.features?.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-5">
              {enterprise.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <Check size={14} strokeWidth={2} className="text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
          <Link
            href={contactHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary no-underline hover:gap-2 transition-all"
          >
            Talk to sales
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  )
}
