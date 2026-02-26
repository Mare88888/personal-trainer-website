'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const words = ['Preoblikuj', 'Svoje Telo.', 'Dvigni Svojo', 'Samozavest.']

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-charcoal"
      aria-label="Uvodni razdelek"
    >
      {/* Background image */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/hero.png"
          alt="Petra Kovač osebna trenerka"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />
      </motion.div>

      {/* Decorative warm glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-terracotta-400/10 blur-[120px] pointer-events-none" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="container-wide pb-20 lg:pb-28 pt-32">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-12 bg-terracotta-400" aria-hidden="true" />
              <span className="section-label text-blush-100">
                Osebna Trenerka · Ljubljana, Slovenija
              </span>
            </motion.div>

            {/* Headline — word by word */}
            <h1 className="font-display font-light text-white overflow-hidden">
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + i * 0.12,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight"
                >
                  {i === 1 || i === 3 ? (
                    <span className="italic text-blush-300">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subheading + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <p className="text-white/60 text-base leading-relaxed max-w-sm font-light">
                Personalizirani coaching programi, zasnovani za ženske,
                ki želijo resnične, trajne rezultate – za telo in um.
              </p>
              <button
                onClick={scrollToContact}
                className="btn-primary shrink-0 group"
                aria-label="Začni svojo preobrazbo – pomakni se na kontakt"
              >
                Začni Svojo Preobrazbo
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="mt-16 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg"
            >
              {[
                { value: '7+', label: 'Let izkušenj' },
                { value: '200+', label: 'Strank' },
                { value: '95%', label: 'Uspešnost' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl lg:text-4xl text-white font-light">{stat.value}</p>
                  <p className="text-white/40 text-xs tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-y-6">
            Dol
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
