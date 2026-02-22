import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars -- motion is used as motion.span/div/a in JSX
import { AnimatePresence, motion } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Products', to: '/products' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Consultancy', to: '/consultancy' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const glassVisible = {
  background: 'rgba(255, 255, 255, 0.72)',
  backdropFilter: 'blur(24px) saturate(200%)',
  WebkitBackdropFilter: 'blur(24px) saturate(200%)',
  borderBottom: '1px solid rgba(209, 213, 255, 0.3)',
  boxShadow: '0 1px 8px rgba(79, 70, 229, 0.06)',
}

const glassHidden = {
  background: 'rgba(255, 255, 255, 0)',
  backdropFilter: 'blur(0px) saturate(100%)',
  WebkitBackdropFilter: 'blur(0px) saturate(100%)',
  borderBottom: '1px solid rgba(209, 213, 255, 0)',
  boxShadow: '0 0px 0px rgba(79, 70, 229, 0)',
}

const mobileMenuGlass = {
  background: 'rgba(255, 255, 255, 0.72)',
  backdropFilter: 'blur(24px) saturate(200%)',
  WebkitBackdropFilter: 'blur(24px) saturate(200%)',
  borderBottom: '1px solid rgba(209, 213, 255, 0.3)',
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const closeMobile = () => setMobileOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={scrolled ? glassVisible : glassHidden}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1280, padding: '0 24px', height: 64 }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <div
            className="flex items-center justify-center"
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            }}
          >
            <Zap size={18} color="#fff" strokeWidth={2.5} fill="rgba(255,255,255,0.2)" />
          </div>
          <span style={{ letterSpacing: '-0.02em', fontSize: 18 }}>
            <span className="font-bold" style={{ color: '#1E293B' }}>Jotil</span>
            <span className="font-bold" style={{ color: '#4F46E5' }}>Labs</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className="relative no-underline px-3.5 py-2 transition-colors duration-200 ease-out"
                style={{
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive ? '#4F46E5' : '#6B7280',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#4F46E5'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#6B7280'
                }}
              >
                {label}
                {/* Active dot */}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      bottom: 2,
                      width: 4,
                      height: 4,
                      borderRadius: '50%',
                      background: '#4F46E5',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {/* Hover underline */}
                <span
                  className="absolute left-1/2 -translate-x-1/2 transition-transform duration-200 ease-out origin-center scale-x-0 hover-line"
                  style={{
                    bottom: 2,
                    width: '60%',
                    height: 2,
                    borderRadius: 1,
                    background: '#4F46E5',
                    opacity: isActive ? 0 : 0.6,
                  }}
                />
              </Link>
            )
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Book a Demo — desktop */}
          <motion.a
            href="/contact"
            className="hidden md:inline-flex items-center no-underline"
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: 14,
              fontWeight: 500,
              color: '#fff',
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              padding: '8px 20px',
              borderRadius: 9999,
              boxShadow: '0 2px 12px rgba(79, 70, 229, 0.25)',
              cursor: 'pointer',
              transition: 'box-shadow 0.3s ease',
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Demo
          </motion.a>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex items-center justify-center cursor-pointer"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              border: 'none',
              background: mobileOpen ? 'rgba(79, 70, 229, 0.08)' : 'transparent',
              color: '#1E293B',
              transition: 'background 0.2s ease',
            }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <X size={20} strokeWidth={2} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Menu size={20} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden"
            style={mobileMenuGlass}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, to }, i) => {
                const isActive = location.pathname === to
                return (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={to}
                      onClick={closeMobile}
                      className="block no-underline rounded-xl px-4 py-2.5 transition-colors duration-200"
                      style={{
                        fontFamily: '"Inter", system-ui, sans-serif',
                        fontSize: 15,
                        fontWeight: 500,
                        color: isActive ? '#4F46E5' : '#6B7280',
                        background: isActive ? 'rgba(79, 70, 229, 0.06)' : 'transparent',
                      }}
                    >
                      {label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.2 }}
                className="pt-2"
              >
                <a
                  href="/contact"
                  onClick={closeMobile}
                  className="block no-underline text-center rounded-full py-2.5"
                  style={{
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: 15,
                    fontWeight: 500,
                    color: '#fff',
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    boxShadow: '0 2px 12px rgba(79, 70, 229, 0.25)',
                  }}
                >
                  Book a Demo
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
