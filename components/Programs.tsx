'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const programs = [
  {
    number: '01',
    title: '1-on-1 Personal Coaching',
    tagline: 'In-person · Ljubljana',
    description:
      'The most personalised training experience available. We work together face-to-face to sculpt a programme built entirely around you.',
    benefits: [
      'Fully customised training plan',
      'Weekly programme adjustments',
      'Nutrition guidance included',
      'Progress tracking & check-ins',
      'Priority WhatsApp support',
    ],
    cta: 'Enquire Now',
    accent: 'bg-blush-50 border-blush-200',
    badge: null,
  },
  {
    number: '02',
    title: 'Online Coaching',
    tagline: 'Remote · Worldwide',
    description:
      'Train anywhere in the world with the same level of expert guidance. App-based programming with regular video check-ins and daily accountability.',
    benefits: [
      'Custom programme in coaching app',
      'Video form reviews',
      'Macro & meal planning',
      'Bi-weekly video calls',
      'Community access & support',
    ],
    cta: 'Apply Now',
    accent: 'bg-charcoal border-charcoal',
    badge: 'Most Popular',
  },
  {
    number: '03',
    title: '12-Week Transformation',
    tagline: 'Online · Fixed Duration',
    description:
      'A proven, structured programme with a clear start and finish. Designed for total beginners or those who need a dedicated reset.',
    benefits: [
      'Complete 12-week blueprint',
      'Phased training progression',
      'Full nutrition plan',
      'Weekly video modules',
      'Lifetime access to materials',
    ],
    cta: 'Join the Programme',
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
          <span className="section-label block mb-4">What I Offer</span>
          <h2 id="programs-heading" className="heading-lg text-charcoal">
            Coaching <span className="italic text-terracotta-400">Programmes</span>
          </h2>
          <p className="mt-4 text-bark-500 max-w-xl mx-auto leading-relaxed">
            Three distinct pathways, each designed to meet you where you are and take you where you want to be.
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
                <ul className="space-y-2.5 mb-8 flex-1" aria-label="Programme benefits">
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
                  aria-label={`${program.cta} — ${program.title}`}
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
