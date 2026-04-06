import Link from 'next/link'

const PRODUCT_LINKS = [
  { label: 'JotilReceptionist', to: '/products/receptionist' },
  { label: 'JotilMessenger', to: '/products/messenger' },
  { label: 'JotilOutreach', to: '/products/outreach' },
  { label: 'JotilSpace', to: '/products/space' },
  { label: 'JotilFlow', to: '/products/flow' },
]

const COMPANY_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Use Cases', to: '/use-cases' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Opt-In Consent', to: '/opt-in' },
]

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-5" style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}>
        {title}
      </h4>
      <ul className="space-y-3 list-none p-0 m-0">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              href={to}
              className="text-sm text-slate-400 no-underline hover:text-white transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-dark text-white relative">
      {/* Gradient line at top */}
      <div
        className="h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, #3B7BF2, #6366F1, #0EA5E9, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <span
                className="text-xl font-extrabold tracking-tight"
                style={{ fontFamily: 'var(--font-outfit), Outfit, sans-serif' }}
              >
                <span className="text-white">Jotil</span>
                <span className="text-primary">Labs</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-8">
              AI-powered automation for customer communications. We help
              businesses scale with intelligent voice agents, chatbots, SMS, and
              workflow tools.
            </p>

            {/* Contact info */}
            <div className="space-y-2 mb-6">
              <p className="text-sm text-slate-400">
                <a
                  href="mailto:contact@jotillabs.com"
                  className="no-underline text-slate-400 hover:text-white transition-colors"
                >
                  contact@jotillabs.com
                </a>
              </p>
              <p className="text-sm text-slate-400">
                <a
                  href="tel:+13589000040"
                  className="no-underline text-slate-400 hover:text-white transition-colors"
                >
                  +1 (358) 900-0040
                </a>
              </p>
              <p className="text-sm text-slate-400">Lehi, Utah</p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 no-underline"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 no-underline"
                aria-label="X (Twitter)"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200 no-underline"
                aria-label="YouTube"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2 lg:col-start-6">
            <FooterColumn title="Products" links={PRODUCT_LINKS} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Company" links={COMPANY_LINKS} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Legal" links={LEGAL_LINKS} />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            {new Date().getFullYear()} Jotil Labs. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with AI-first principles.
          </p>
        </div>
      </div>
    </footer>
  )
}
