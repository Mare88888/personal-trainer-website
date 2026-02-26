'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const certifications = [
  'NASM Certified Personal Trainer (CPT)',
  'Precision Nutrition Level 1 Coach',
  'TRX Suspension Training Instructor',
  'FMS Functional Movement Specialist',
  '200hr Yoga Alliance RYT',
]

const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '200+', label: 'Women Coached' },
  { value: '3', label: 'Specialisations' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-ivory-100" aria-labelledby="about-heading">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative background shape */}
            <div
              className="absolute -top-6 -left-6 w-full h-full rounded-2xl bg-blush-100"
              aria-hidden="true"
            />
            {/* Decorative corner accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-2 border-terracotta-400/30"
              aria-hidden="true"
            />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-blush-200">
              <Image
                src="/images/trainer.jpg"
                alt="Petra Kovač — certified personal trainer"
                fill
                quality={90}
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              {/* Warm color overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-8 -right-4 lg:-right-8 bg-white rounded-xl px-5 py-4 shadow-xl shadow-charcoal/8"
            >
              <p className="text-terracotta-400 font-display text-2xl font-semibold">7+</p>
              <p className="text-bark-500 text-xs tracking-wide mt-0.5">Years of excellence</p>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={item} className="section-label block mb-4">
              Meet Your Coach
            </motion.span>

            <motion.h2
              variants={item}
              id="about-heading"
              className="heading-lg text-charcoal mb-6"
            >
              Petra<br />
              <span className="italic text-terracotta-400">Kovač</span>
            </motion.h2>

            <motion.p variants={item} className="text-bark-500 leading-relaxed mb-4">
              I believe every woman deserves to feel powerful in her own body. After years of helping
              clients transform not just their physique but their entire relationship with movement and
              nutrition, I've built a coaching method rooted in science, empathy, and long-term results.
            </motion.p>

            <motion.p variants={item} className="text-bark-500 leading-relaxed mb-10">
              Based in Ljubljana, I work with women across Slovenia and worldwide through my online
              programmes — meeting you exactly where you are and guiding you to where you want to be.
            </motion.p>

            {/* Certifications */}
            <motion.div variants={item} className="mb-10">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-charcoal mb-4">
                Certifications
              </p>
              <ul className="space-y-2.5" aria-label="Professional certifications">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-terracotta-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-bark-500 text-sm leading-snug">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-parchment"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-charcoal font-light">{stat.value}</p>
                  <p className="text-bark-400 text-xs tracking-wide mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
