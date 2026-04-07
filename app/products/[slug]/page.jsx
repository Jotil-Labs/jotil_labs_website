import { notFound } from 'next/navigation'
import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { Check } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { IconBox } from '@/components/ui/IconBox'
import {
  ReceptionistLogo,
  MessengerLogo,
  OutreachLogo,
  SpaceLogo,
  FlowLogo,
  AvatarLogo,
} from '@/components/ui/ProductLogos'
import { DemoVisualization } from '@/components/product/DemoVisualization'
import { FAQAccordion } from '@/components/product/FAQAccordion'

const LOGO_MAP = {
  receptionist: ReceptionistLogo,
  messenger: MessengerLogo,
  outreach: OutreachLogo,
  space: SpaceLogo,
  flow: FlowLogo,
  avatar: AvatarLogo,
}

/* ─── Static generation ─── */

export async function generateStaticParams() {
  const { productSlugs } = await import('@/data/products')
  return productSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { getProductBySlug } = await import('@/data/products')
  const product = getProductBySlug(slug)
  return {
    title: product?.name ?? 'Product',
    description: product?.tagline ?? '',
  }
}

/* ─── Helpers ─── */

function getLucideIcon(name) {
  // PascalCase lookup
  const Icon = LucideIcons[name]
  if (Icon) return Icon
  // Try common fallback
  return LucideIcons['Sparkles']
}

function PricingCard({ tier, index }) {
  return (
    <div
      className={`card-premium flex flex-col ${
        tier.highlighted
          ? 'border-[#3B7BF2]/30 shadow-lg shadow-[#3B7BF2]/10 scale-[1.02] bg-gradient-to-b from-[#F4F8FF] to-white z-10'
          : ''
      }`}
    >
      {tier.highlighted && (
        <div className="mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-[#EEF3FE] px-2.5 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <p
        className="text-xl font-bold text-text mb-1"
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        {tier.name}
      </p>
      <p className="text-sm text-text-secondary mb-5">{tier.description}</p>

      <div className="mb-6 flex items-end gap-1">
        <span
          className={`text-4xl font-extrabold tracking-tight ${tier.highlighted ? 'text-primary' : 'text-text'}`}
          style={{ fontFamily: 'var(--font-outfit)' }}
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
              className={`mt-0.5 shrink-0 ${tier.highlighted ? 'text-primary' : 'text-text-secondary'}`}
              strokeWidth={2.5}
            />
            {f}
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={tier.highlighted ? 'primary' : 'outline'}
        size="md"
        className="w-full justify-center"
      >
        {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
      </Button>
    </div>
  )
}

/* ─── Page ─── */

export default async function ProductPage({ params }) {
  const { slug } = await params
  const { getProductBySlug } = await import('@/data/products')
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const Logo = LOGO_MAP[slug]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ─── 1. Hero ─── */}
      <section className="relative pt-28 pb-20 px-4 overflow-hidden bg-gradient-to-br from-[#F0F4FF] via-[#F7F9FF] to-white">
        {/* Background orbs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full opacity-40 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse, #3B7BF215 0%, transparent 65%)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-25 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse, #6366F110 0%, transparent 70%)', filter: 'blur(60px)' }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <AnimatedSection>
              <Badge variant="blue" className="mb-5">{product.badge}</Badge>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text tracking-tight leading-[1.07] mb-5"
                style={{ fontFamily: 'var(--font-outfit)', fontWeight: 800 }}
              >
                {product.displayName[0]}
                <span className="text-gradient">{product.displayName[1]}</span>
              </h1>
              <p
                className="text-xl font-semibold text-text-secondary mb-4"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                {product.tagline}
              </p>
              <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-lg">
                {product.heroDescription}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <Button href="/contact" variant="primary" size="lg">
                  Book a Demo
                </Button>
                <Button
                  href="#pricing"
                  variant="outline"
                  size="lg"
                >
                  View Pricing
                </Button>
              </div>
            </AnimatedSection>

            {/* Right column - Product visual / placeholder */}
            <AnimatedSection delay={0.15} className="flex justify-center lg:justify-end">
              <div
                className="relative w-full max-w-md aspect-[4/3] rounded-3xl flex flex-col items-center justify-center gap-4 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #F0F4FF, #F7F9FF, #FFFFFF)',
                  border: '1px solid rgba(59,123,242,0.1)',
                  boxShadow: '0 16px 48px rgba(59,123,242,0.08), 0 4px 16px rgba(0,0,0,0.04)',
                }}
              >
                {Logo && <Logo size={80} />}
                <p className="text-sm font-medium text-text-secondary">Product demo coming soon</p>
                <div
                  className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm rounded-xl px-3 py-1.5 flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-medium text-text-secondary">Live preview</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── 2. Services breakdown ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">What you get</p>
            <h2
              className="text-3xl font-bold text-text tracking-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              What&apos;s included
            </h2>
          </AnimatedSection>

          <div
            className={`grid gap-6 ${
              product.services.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {product.services.map((svc, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card-premium h-full flex flex-col">
                  <h3
                    className="text-lg font-bold text-text mb-3"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {svc.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {svc.description}
                  </p>
                  <ul className="space-y-2.5">
                    {svc.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-text-secondary">
                        <span className="mt-0.5 h-4 w-4 rounded-full bg-[#EEF3FE] flex items-center justify-center shrink-0">
                          <Check size={9} className="text-primary" strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── 3. Demo visualization (client component) ─── */}
      <DemoVisualization slug={slug} />

      <div className="gradient-divider" />

      {/* ─── 4. Features grid ─── */}
      <section className="py-20 px-4 bg-[#FAFBFD]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Why it works</p>
            <h2
              className="text-3xl font-bold text-text tracking-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Built for results
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feat, i) => {
              const Icon = getLucideIcon(feat.icon)
              return (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="card h-full">
                    <IconBox size="md" glow className="mb-4">
                      <Icon strokeWidth={1.5} />
                    </IconBox>
                    <h3
                      className="text-base font-semibold text-text mb-2"
                      style={{ fontFamily: 'var(--font-outfit)' }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{feat.description}</p>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── 5. Pricing ─── */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Pricing</p>
            <h2
              className="text-3xl font-bold text-text tracking-tight"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Simple, transparent pricing
            </h2>
            <p className="text-text-secondary mt-3 max-w-md mx-auto">
              Start free, scale when you need to. Every plan includes onboarding support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {product.pricing.tiers.map((tier, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <PricingCard tier={tier} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="gradient-divider" />

      {/* ─── 6. FAQ (client accordion) ─── */}
      <FAQAccordion faq={product.faq} />

      <div className="gradient-divider" />

      {/* ─── 7. Bottom CTA ─── */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Get Started</p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-text tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              Ready to try{' '}
              <span className="text-gradient">{product.name}</span>?
            </h2>
            <p className="text-text-secondary mb-8 max-w-md mx-auto leading-relaxed">
              Join businesses already using {product.name} to handle their customer communications automatically.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button href="/contact" variant="primary" size="lg">
                Book a Demo
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Explore the Platform
              </Button>
            </div>

            {/* Integration logos row */}
            {product.integrations?.length > 0 && (
              <div className="mt-10 pt-8 border-t border-black/5">
                <p className="text-xs font-medium text-text-secondary mb-3 uppercase tracking-wider">
                  Integrates with
                </p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {product.integrations.map((name) => (
                    <span
                      key={name}
                      className="text-xs font-medium text-text-secondary bg-white border border-black/5 rounded-full px-3 py-1"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
