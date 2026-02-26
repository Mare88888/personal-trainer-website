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
  { value: '7+', label: 'Let izkušenj' },
  { value: '200+', label: 'Žensk' },
  { value: '3', label: 'Specializacij' },
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
                src="/images/pt_hero.png"
                alt="Petra Kovač — certificirana osebna trenerka"
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
              <p className="text-bark-500 text-xs tracking-wide mt-0.5">Let odličnosti</p>
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
              Spoznaj svojo trenerko
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
              Verjamem, da si vsaka ženska zasluži, da se počuti močna v svojem telesu. Po letih
              pomoči strankam pri preobrazbi ne le njihove postave, ampak celotnega odnosa z gibanjem
              in prehrano, sem razvila coaching metodo, zasnovano na znanosti, empatiji in
              dolgoročnih rezultatih.
            </motion.p>

            <motion.p variants={item} className="text-bark-500 leading-relaxed mb-10">
              Delam v Ljubljani in s svojimi spletnimi programi pomagam ženskam po vsej Sloveniji
              in svetu – srečam te tam, kjer si, in te vodim tja, kamor želiš priti.
            </motion.p>

            {/* Certifications */}
            <motion.div variants={item} className="mb-10">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-charcoal mb-4">
                Certifikati
              </p>
              <ul className="space-y-2.5" aria-label="Poklicni certifikati">
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
