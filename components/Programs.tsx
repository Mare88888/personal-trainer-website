'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const programs = [
  {
    number: '01',
    title: '1-na-1 Osebni Coaching',
    tagline: 'Osebno · Ljubljana',
    description:
      'Najosebnejša izkušnja treninga, ki je na voljo. Skupaj delava iz oči v oči, da oblikujeva program, ki je v celoti prilagojen tebi.',
    benefits: [
      'Popolnoma prilagojen plan treninga',
      'Tedenske prilagoditve programa',
      'Vključeno prehransko svetovanje',
      'Sledenje napredku in redni check-ini',
      'Prioritetna podpora na WhatsAppu',
    ],
    cta: 'Povpraši zdaj',
    accent: 'bg-blush-50 border-blush-200',
    badge: null,
  },
  {
    number: '02',
    title: 'Spletni Coaching',
    tagline: 'Na daljavo · Po vsem svetu',
    description:
      'Treniraj kjerkoli na svetu z enako ravnjo strokovnega vodenja. Programiranje prek aplikacije z rednimi video klici in dnevno odgovornostjo.',
    benefits: [
      'Prilagojen program v coaching aplikaciji',
      'Video pregledi tehnike gibanja',
      'Makro načrt in planiranje obrokov',
      'Dvotedenski video klici',
      'Dostop do skupnosti in podpora',
    ],
    cta: 'Prijavi se',
    accent: 'bg-charcoal border-charcoal',
    badge: 'Najbolj priljubljen',
  },
  {
    number: '03',
    title: '12-tedenska Preobrazba',
    tagline: 'Spletno · Določeno trajanje',
    description:
      'Preverjen, strukturiran program z jasnim začetkom in koncem. Zasnovan za popolne začetnike ali tiste, ki potrebujejo svež začetek.',
    benefits: [
      'Celoten 12-tedenski načrt',
      'Stopnjevanje treninga po fazah',
      'Popoln prehranski načrt',
      'Tedenski video moduli',
      'Dostop do materialov za vse življenje',
    ],
    cta: 'Pridruži se programu',
    accent: 'bg-ivory-100 border-parchment',
    badge: null,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Programs() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="programs" className="section-padding bg-blush-50" aria-labelledby="programs-heading">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label block mb-4">Kaj ponujam</span>
          <h2 id="programs-heading" className="heading-lg text-charcoal">
            Coaching <span className="italic text-terracotta-400">Programi</span>
          </h2>
          <p className="mt-4 text-bark-500 max-w-xl mx-auto leading-relaxed">
            Tri različne poti – vsaka zasnovana tako, da te sreča tam, kjer si, in te pelje tja, kamor želiš.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {programs.map((program) => {
            const isDark = program.accent.includes('bg-charcoal')

            return (
              <motion.article
                key={program.number}
                variants={card}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl border p-8 flex flex-col ${program.accent} transition-shadow duration-300 hover:shadow-xl ${
                  isDark
                    ? 'hover:shadow-charcoal/20'
                    : 'hover:shadow-terracotta-400/10'
                }`}
                aria-labelledby={`program-${program.number}`}
              >
                {/* Badge */}
                {program.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-terracotta-400 rounded-full text-white text-[10px] font-medium tracking-[0.15em] uppercase">
                    {program.badge}
                  </div>
                )}

                {/* Number */}
                <span
                  className={`font-display text-6xl font-light leading-none mb-6 ${
                    isDark ? 'text-white/15' : 'text-terracotta-400/20'
                  }`}
                  aria-hidden="true"
                >
                  {program.number}
                </span>

                {/* Title & tagline */}
                <div className="mb-4">
                  <p
                    className={`text-[10px] font-medium tracking-[0.2em] uppercase mb-2 ${
                      isDark ? 'text-terracotta-300' : 'text-terracotta-400'
                    }`}
                  >
                    {program.tagline}
                  </p>
                  <h3
                    id={`program-${program.number}`}
                    className={`font-display text-2xl leading-snug ${
                      isDark ? 'text-white' : 'text-charcoal'
                    }`}
                  >
                    {program.title}
                  </h3>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-7 ${
                    isDark ? 'text-white/60' : 'text-bark-500'
                  }`}
                >
                  {program.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2.5 mb-8 flex-1" aria-label="Ugodnosti programa">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          isDark ? 'text-terracotta-300' : 'text-terracotta-400'
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={`text-sm ${
                          isDark ? 'text-white/70' : 'text-bark-500'
                        }`}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`group inline-flex items-center gap-2 text-sm font-medium tracking-[0.12em] uppercase transition-all duration-200 ${
                    isDark
                      ? 'text-white hover:text-terracotta-300'
                      : 'text-charcoal hover:text-terracotta-400'
                  }`}
                  aria-label={`${program.cta} – ${program.title}`}
                >
                  {program.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
