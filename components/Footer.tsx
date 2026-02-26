'use client'

import { motion } from 'framer-motion'
import { Instagram, Heart } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'O meni' },
  { href: '#programs', label: 'Programi' },
  { href: '#transformations', label: 'Rezultati' },
  { href: '#testimonials', label: 'Mnenja' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-charcoal text-white" role="contentinfo">
      {/* Main footer */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-2xl tracking-wider mb-4 block focus:outline-none"
              aria-label="Na vrh strani"
            >
              PETRA<span className="text-terracotta-400 ml-1.5">KOVAČ</span>
            </button>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium osebni trening in spletni coaching za ženske, ki so pripravljene preobraziti
              telo in um.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/petrakovac.fit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sledi Petri Kovač na Instagramu"
                className="w-10 h-10 rounded-full bg-white/8 hover:bg-terracotta-400 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/40 mb-5">
              Navigacija
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/40 mb-5">
              Kontakt
            </p>
            <div className="space-y-3">
              <p className="text-white/60 text-sm">Ljubljana, Slovenija</p>
              <a
                href="mailto:petra@petrakovac.com"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200 block"
              >
                petra@petrakovac.com
              </a>
              <a
                href="https://instagram.com/petrakovac.fit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200 block"
              >
                @petrakovac.fit
              </a>
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className="mt-8 px-6 py-3 rounded-full bg-terracotta-400 hover:bg-terracotta-500 text-white text-xs font-medium tracking-[0.15em] uppercase transition-all duration-200 hover:shadow-lg hover:shadow-terracotta-400/20"
            >
              Rezerviraj klic
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Petra Kovač. Vse pravice pridržane.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200"
            >
              Politika zasebnosti
            </a>
            <span className="text-white/10" aria-hidden="true">·</span>
            <p className="text-white/20 text-xs flex items-center gap-1.5">
              Ustvarjeno z <Heart size={10} className="text-terracotta-400 fill-current" aria-hidden="true" /> v Ljubljani
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
