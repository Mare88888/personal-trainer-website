'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const transformations = [
  {
    id: 1,
    name: 'Maja S.',
    duration: '12 Weeks',
    result: '−14 kg · Body recomposition',
    beforeSrc: '/images/transforms/t1-before.jpg',
    afterSrc: '/images/transforms/t1-after.jpg',
    beforeAlt: 'Maja before transformation',
    afterAlt: 'Maja after 12 weeks of coaching',
  },
  {
    id: 2,
    name: 'Nika P.',
    duration: '6 Months',
    result: 'Built lean muscle · 18% to 24% muscle mass',
    beforeSrc: '/images/transforms/t2-before.jpg',
    afterSrc: '/images/transforms/t2-after.jpg',
    beforeAlt: 'Nika before transformation',
    afterAlt: 'Nika after 6 months of coaching',
  },
  {
    id: 3,
    name: 'Sara M.',
    duration: '16 Weeks',
    result: 'Post-pregnancy comeback · −8 kg',
    beforeSrc: '/images/transforms/t3-before.jpg',
    afterSrc: '/images/transforms/t3-after.jpg',
    beforeAlt: 'Sara before transformation',
    afterAlt: 'Sara after 16 weeks of coaching',
  },
  {
    id: 4,
    name: 'Ana K.',
    duration: '8 Weeks',
    result: 'Event prep · −6 kg pure fat',
    beforeSrc: '/images/transforms/t4-before.jpg',
    afterSrc: '/images/transforms/t4-after.jpg',
    beforeAlt: 'Ana before transformation',
    afterAlt: 'Ana after 8 weeks of coaching',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function TransformCard({ item }: { item: (typeof transformations)[0] }) {
  return (
    <motion.article
      variants={cardAnim}
      className="group relative rounded-xl overflow-hidden bg-blush-100"
      aria-label={`Transformation: ${item.name} — ${item.duration}`}
    >
      {/* Before / After images side by side */}
      <div className="grid grid-cols-2 aspect-[4/3]">
        {/* Before */}
        <div className="relative overflow-hidden">
          <Image
            src={item.beforeSrc}
            alt={item.beforeAlt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
            onError={(e) => {
              const el = e.target as HTMLImageElement
              el.style.display = 'none'
            }}
          />
          {/* Fallback gradient when no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-blush-200 to-blush-300 -z-10" />
          <span className="absolute top-3 left-3 text-[10px] font-medium tracking-[0.18em] uppercase text-white bg-charcoal/60 rounded-full px-2.5 py-1 backdrop-blur-sm">
            Before
          </span>
        </div>

        {/* After */}
        <div className="relative overflow-hidden border-l border-white/20">
          <Image
            src={item.afterSrc}
            alt={item.afterAlt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
            onError={(e) => {
              const el = e.target as HTMLImageElement
              el.style.display = 'none'
            }}
          />
          {/* Fallback gradient when no image */}
          <div className="absolute inset-0 bg-gradient-to-br from-terracotta-400/60 to-terracotta-500/80 -z-10" />
          <span className="absolute top-3 left-3 text-[10px] font-medium tracking-[0.18em] uppercase text-white bg-terracotta-400/80 rounded-full px-2.5 py-1 backdrop-blur-sm">
            After
          </span>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm flex flex-col justify-center items-center text-center p-6 pointer-events-none"
        aria-hidden="true"
      >
        <p className="font-display text-white text-2xl mb-1">{item.name}</p>
        <p className="text-terracotta-300 text-xs tracking-[0.18em] uppercase mb-3">{item.duration}</p>
        <div className="w-8 h-px bg-terracotta-400 mx-auto mb-3" />
        <p className="text-white/80 text-sm leading-relaxed max-w-xs">{item.result}</p>
      </motion.div>

      {/* Always-visible info bar */}
      <div className="px-4 py-3 bg-white/90 backdrop-blur-sm flex items-center justify-between">
        <p className="text-charcoal text-sm font-medium">{item.name}</p>
        <div className="flex items-center gap-3">
          <span className="text-bark-400 text-xs">{item.duration}</span>
          <span className="w-1 h-1 rounded-full bg-terracotta-400" aria-hidden="true" />
          <span className="text-bark-400 text-xs hidden sm:block">{item.result.split('·')[0].trim()}</span>
        </div>
      </div>
    </motion.article>
  )
}

export default function Transformations() {
  return (
    <section
      id="transformations"
      className="section-padding bg-ivory-100"
      aria-labelledby="transformations-heading"
    >
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">Proven Results</span>
          <h2 id="transformations-heading" className="heading-lg text-charcoal">
            Real <span className="italic text-terracotta-400">Transformations</span>
          </h2>
          <p className="mt-4 text-bark-500 max-w-xl mx-auto leading-relaxed">
            These are real women with real lives. No tricks, no filters — just consistency, hard work,
            and the right guidance.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-6"
        >
          {transformations.map((t) => (
            <TransformCard key={t.id} item={t} />
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-bark-300 text-xs mt-10 max-w-lg mx-auto"
        >
          Individual results vary. All clients completed a full coaching programme with
          consistent training and nutritional adherence.
        </motion.p>
      </div>
    </section>
  )
}
