'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Menu, X, ChevronDown, Layers, Briefcase, Users, BookOpen, Mail, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo, { LogoText } from '@/components/ui/Logo'
import { products } from '@/data/products'

const NAV_LINKS = [
  { label: 'Solutions', to: '/products', hasDropdown: true, icon: Layers },
  { label: 'Use Cases', to: '/use-cases', icon: Briefcase },
  { label: 'About', to: '/about', icon: Users },
  { label: 'Blog', to: '/blog', icon: BookOpen },
  { label: 'Contact', to: '/contact', icon: Mail },
]

// Derive nav items from centralized product data
const PRODUCT_ITEMS = products.map((p) => ({
  name: p.shortName,
  slug: p.slug,
  description: p.oneLiner,
  icon: LucideIcons[p.icon] || LucideIcons.Sparkles,
  color: p.iconColor,
}))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    closeMobile()
  }, [pathname, closeMobile])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
        scrolled
          ? 'bg-white/80 backdrop-blur-[24px] saturate-[180%] border-b border-border shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div
        className={cn(
          'mx-auto flex items-center justify-between max-w-7xl px-6 transition-all duration-300',
          scrolled ? 'h-16' : 'h-20'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline group">
          <Logo size={32} />
          <LogoText className="text-xl" />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to, hasDropdown, icon: NavIcon }) => {
            const isActive = pathname === to || (hasDropdown && pathname.startsWith('/products'))

            if (hasDropdown) {
              return (
                <div
                  key={to}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={to}
                    className={cn(
                      'relative no-underline px-4 py-2 text-sm font-medium rounded-[10px] nav-link-hover transition-colors duration-200 inline-flex items-center gap-1.5',
                      isActive ? 'text-primary' : 'text-text-secondary hover:text-text'
                    )}
                  >
                    <NavIcon size={14} strokeWidth={1.5} />
                    {label}
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={cn('transition-transform duration-200', productsOpen && 'rotate-180')}
                    />
                  </Link>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full -left-4 pt-3 w-[580px]"
                      >
                        <div className="bg-white rounded-2xl border border-black/[0.06] shadow-2xl shadow-black/[0.08] overflow-hidden">
                          {/* Solutions grid */}
                          <div className="p-4">
                            <p className="text-[10px] font-semibold text-text-secondary uppercase tracking-widest px-2 mb-3">Solutions</p>
                            <div className="grid grid-cols-2 gap-1">
                              {PRODUCT_ITEMS.map((item) => {
                                const ItemIcon = item.icon
                                return (
                                  <Link
                                    key={item.slug}
                                    href={`/products/${item.slug}`}
                                    className={cn(
                                      'flex items-start gap-3 px-3 py-3 rounded-xl no-underline transition-all duration-150 group',
                                      pathname === `/products/${item.slug}` ? 'bg-bg-alt' : 'hover:bg-[#F8FAFF]'
                                    )}
                                  >
                                    <div
                                      className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 transition-colors duration-150"
                                      style={{ background: `${item.color}10`, border: `1px solid ${item.color}18` }}
                                    >
                                      <ItemIcon size={16} strokeWidth={1.5} style={{ color: item.color }} />
                                    </div>
                                    <div className="flex-1 min-w-0 pt-0.5">
                                      <span className="text-[13px] font-semibold text-text group-hover:text-primary transition-colors">{item.name}</span>
                                      <p className="text-[11px] text-text-secondary mt-0.5 leading-snug">{item.description}</p>
                                    </div>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>

                          {/* Bottom bar */}
                          <div className="border-t border-black/[0.05] bg-[#FAFBFD] px-5 py-3 flex items-center justify-between">
                            <Link
                              href="/products"
                              className="text-xs font-semibold text-primary no-underline inline-flex items-center gap-1 hover:gap-2 transition-all"
                            >
                              See all solutions
                              <ArrowRight size={12} strokeWidth={2} />
                            </Link>
                            <Link
                              href="/contact"
                              className="text-xs font-semibold text-white no-underline inline-flex items-center gap-1.5 bg-primary hover:bg-primary-dark px-3.5 py-1.5 rounded-lg transition-colors"
                            >
                              <Sparkles size={11} strokeWidth={2} />
                              Book a Demo
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            return (
              <Link
                key={to}
                href={to}
                className={cn(
                  'relative no-underline px-4 py-2 text-sm font-medium rounded-[10px] nav-link-hover transition-colors duration-200 inline-flex items-center gap-1.5',
                  isActive ? 'text-primary' : 'text-text-secondary hover:text-text'
                )}
              >
                <NavIcon size={14} strokeWidth={1.5} />
                {label}
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center no-underline text-sm font-semibold text-white btn-gradient px-5 py-2.5 rounded-[10px] shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
          >
            Book a Demo
          </Link>

          <button
            className={cn(
              'lg:hidden flex items-center justify-center w-10 h-10 rounded-[12px] border-none cursor-pointer transition-colors duration-200',
              mobileOpen ? 'bg-primary/5 text-primary' : 'bg-transparent text-text'
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }} className="flex">
                  <X size={20} strokeWidth={1.5} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }} className="flex">
                  <Menu size={20} strokeWidth={1.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 top-[64px] bg-black/20 backdrop-blur-sm z-40"
              onClick={closeMobile}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed right-0 top-[64px] bottom-0 w-[300px] bg-white/95 backdrop-blur-[24px] border-l border-border z-50 overflow-y-auto"
            >
              <div className="px-6 py-6 flex flex-col gap-1">
                {NAV_LINKS.map(({ label, to, hasDropdown }, i) => {
                  const isActive = pathname === to

                  if (hasDropdown) {
                    return (
                      <div key={to}>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05, duration: 0.2 }}
                        >
                          <button
                            onClick={() => setProductsOpen((v) => !v)}
                            className={cn(
                              'w-full flex items-center justify-between rounded-[12px] px-4 py-3 text-[15px] font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer',
                              isActive ? 'text-primary bg-primary/5' : 'text-text-secondary hover:text-text hover:bg-surface'
                            )}
                          >
                            {label}
                            <ChevronDown size={16} strokeWidth={1.5} className={cn('transition-transform', productsOpen && 'rotate-180')} />
                          </button>
                        </motion.div>
                        <AnimatePresence>
                          {productsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-1 space-y-0.5">
                                {PRODUCT_ITEMS.map((item) => (
                                  <Link
                                    key={item.slug}
                                    href={`/products/${item.slug}`}
                                    onClick={closeMobile}
                                    className="block no-underline rounded-lg px-3 py-2.5 hover:bg-surface transition-colors"
                                  >
                                    <span className="text-sm font-medium text-text">{item.name}</span>
                                    <span className="block text-[11px] text-text-secondary mt-0.5">{item.description}</span>
                                  </Link>
                                ))}
                                <Link
                                  href="/products"
                                  onClick={closeMobile}
                                  className="block no-underline rounded-lg px-3 py-2 text-sm text-primary font-medium"
                                >
                                  View all
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <motion.div
                      key={to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={to}
                        onClick={closeMobile}
                        className={cn(
                          'block no-underline rounded-[12px] px-4 py-3 text-[15px] font-medium transition-colors duration-200',
                          isActive ? 'text-primary bg-primary/5' : 'text-text-secondary hover:text-text hover:bg-surface'
                        )}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.2 }}
                  className="pt-4 mt-2 border-t border-border"
                >
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="block no-underline text-center text-[15px] font-semibold text-white btn-gradient rounded-[10px] py-3 shadow-lg shadow-primary/20"
                  >
                    Book a Demo
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
