'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'O meni' },
  { href: '#programs', label: 'Programi' },
  { href: '#transformations', label: 'Rezultati' },
  { href: '#testimonials', label: 'Mnenja' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory-100/95 backdrop-blur-md shadow-sm border-b border-parchment'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Glavna navigacija"
      >
        <div className="container-wide h-16 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-xl lg:text-2xl tracking-wider focus:outline-none"
            aria-label="Na vrh strani"
          >
            <span className={`transition-colors duration-500 ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              PETRA
            </span>
            <span className="text-terracotta-400 ml-1.5">KOVAČ</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
                  scrolled
                    ? 'text-bark-500 hover:text-charcoal'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 bg-terracotta-400 text-white hover:bg-terracotta-500 hover:shadow-lg hover:shadow-terracotta-400/25"
            >
              Rezerviraj klic
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none"
            aria-label={mobileOpen ? 'Zapri meni' : 'Odpri meni'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} className="text-charcoal" />
            ) : (
              <Menu size={22} className={scrolled ? 'text-charcoal' : 'text-white'} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ivory-100 flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobilna navigacija">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left font-display text-4xl sm:text-5xl text-charcoal hover:text-terracotta-400 transition-colors duration-200 py-3 border-b border-parchment"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-primary"
                >
                  Rezerviraj klic
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
