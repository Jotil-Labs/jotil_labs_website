import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PricingCard } from '@/components/pricing/PricingCard'
import { FeatureComparison } from '@/components/pricing/FeatureComparison'
import { FAQAccordion } from '@/components/product/FAQAccordion'

export async function generateStaticParams() {
  const { productSlugs } = await import('@/data/products')
  return productSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { getProductBySlug } = await import('@/data/products')
  const product = getProductBySlug(slug)
  return {
    title: product ? `${product.name} Pricing` : 'Pricing',
    description: product
      ? `Simple, transparent pricing for ${product.name}. Plans starting from ${product.pricing?.tiers?.[0]?.price}${product.pricing?.tiers?.[0]?.period}.`
      : 'Pricing',
  }
}

/**
 * Build the feature comparison matrix from the tier features.
 * Handles "Everything in X" inheritance between tiers.
 */
function buildComparisonMatrix(tiers) {
  // Start with each tier's own features (excluding "Everything in X" sentences)
  const tierFeatureSets = tiers.map((tier) => {
    return new Set(
      tier.features.filter((f) => !f.toLowerCase().startsWith('everything in'))
    )
  })

  // Apply inheritance — if a tier says "Everything in X", it inherits the previous tier's set
  tiers.forEach((tier, i) => {
    if (
      i > 0 &&
      tier.features.some((f) => f.toLowerCase().startsWith('everything in'))
    ) {
      tierFeatureSets[i - 1].forEach((f) => tierFeatureSets[i].add(f))
    }
  })

  // Collect every unique feature across all tiers (preserving order from lowest tier first)
  const seen = new Set()
  const ordered = []
  tierFeatureSets.forEach((set) => {
    set.forEach((f) => {
      if (!seen.has(f)) {
        seen.add(f)
        ordered.push(f)
      }
    })
  })

  return ordered.map((feature) => ({
    label: feature,
    values: tierFeatureSets.map((set) => set.has(feature)),
  }))
}

export default async function ProductPricingPage({ params }) {
  const { slug } = await params
  const { getProductBySlug } = await import('@/data/products')
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const tiers = product.pricing?.tiers ?? []
  const pricingFaq = product.pricingFaq ?? []
  const comparisonRows = buildComparisonMatrix(tiers)

  return (
    <>
      {/* ─── 1. Hero ─── */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden bg-gradient-to-br from-[#F0F4FF] via-[#F7F9FF] to-white">
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-40 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse, #3B7BF215 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <Link
              href={`/products/${slug}`}
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to {product.name}
            </Link>
            <Badge variant="blue" className="mb-5">
              {product.name} Pricing
            </Badge>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-text tracking-tight leading-[1.07] mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Simple pricing.{' '}
              <span className="text-gradient">Every call handled.</span>
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              Start with a 14-day free trial. No setup fees. Cancel anytime.
              All plans include full features; only the minutes scale.
            </p>
            <div className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full px-4 py-2 text-sm text-text-secondary">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              14-day free trial · No credit card charged until trial ends
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── 2. Pricing tiers ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.slug ?? i} delay={i * 0.08}>
                <PricingCard
                  tier={tier}
                  ctaHref={`/contact?product=${slug}&plan=${tier.slug ?? tier.name.toLowerCase()}`}
                />
              </AnimatedSection>
            ))}
          </div>

          {product.pricing?.overageRatePerMinute && (
            <AnimatedSection delay={0.25}>
              <p className="text-center text-sm text-text-secondary mt-10">
                Need more minutes? Overages are billed at{' '}
                <span className="font-semibold text-text">
                  ${product.pricing.overageRatePerMinute.toFixed(2)}/min
                </span>
                . You are alerted at 90% and 100% usage.
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── 3. Feature comparison ─── */}
      {comparisonRows.length > 0 && (
        <section className="py-20 px-4 bg-[#FAFBFD]">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Compare plans
              </p>
              <h2
                className="text-3xl font-bold text-text tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Everything at a glance
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="card-premium">
                <FeatureComparison tiers={tiers} features={comparisonRows} />
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <div className="gradient-divider" />

      {/* ─── 4. Pricing FAQ ─── */}
      {pricingFaq.length > 0 && <FAQAccordion faq={pricingFaq} />}

      <div className="gradient-divider" />

      {/* ─── 5. Bottom CTA ─── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-text tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to try{' '}
              <span className="text-gradient">{product.name}</span>?
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
              Start your 14-day free trial. No credit card charged until trial
              ends.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button
                href={`/contact?product=${slug}`}
                variant="primary"
                size="lg"
              >
                Start Free Trial
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Talk to Sales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
