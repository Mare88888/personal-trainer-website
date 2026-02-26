'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const transformations = [
  {
    id: 1,
    name: 'Maja S.',
    duration: '12 tednov',
    result: '−14 kg · Rekompozicija telesa',
    beforeSrc: '/images/transforms/before1.png',
    afterSrc: '/images/transforms/after1.png',
    beforeAlt: 'Maja pred preobrazbo',
    afterAlt: 'Maja po 12 tednih coachinga',
  },
  {
    id: 2,
    name: 'Nika P.',
    duration: '6 mesecev',
    result: 'Pridobljene suhe mišice · 18% na 24% mišične mase',
    beforeSrc: '/images/transforms/before3.png',
    afterSrc: '/images/transforms/after3.png',
    beforeAlt: 'Nika pred preobrazbo',
    afterAlt: 'Nika po 6 mesecih coachinga',
  },
  {
    id: 3,
    name: 'Sara M.',
    duration: '16 tednov',
    result: 'Po porodu · −8 kg',
    beforeSrc: '/images/transforms/before4.png',
    afterSrc: '/images/transforms/after4.png',
    beforeAlt: 'Sara pred preobrazbo',
    afterAlt: 'Sara po 16 tednih coachinga',
  },
  {
    id: 4,
    name: 'Ana K.',
    duration: '8 tednov',
    result: 'Priprava na dogodek · −6 kg čiste maščobe',
    beforeSrc: '/images/transforms/before5.png',
    afterSrc: '/images/transforms/after5.png',
    beforeAlt: 'Ana pred preobrazbo',
    afterAlt: 'Ana po 8 tednih coachinga',
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
      aria-label={`Preobrazba: ${item.name} – ${item.duration}`}
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
            Prej
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
            Potem
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
          <span className="section-label block mb-4">Dokazani Rezultati</span>
          <h2 id="transformations-heading" className="heading-lg text-charcoal">
            Resnične <span className="italic text-terracotta-400">Preobrazbe</span>
          </h2>
          <p className="mt-4 text-bark-500 max-w-xl mx-auto leading-relaxed">
            To so resnične ženske s pravimi življenji. Brez trikov, brez filtrov – samo vztrajnost,
            trdo delo in pravo vodenje.
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
          Individualni rezultati se razlikujejo. Vse stranke so opravile celoten coaching program
          z doslednim treningom in upoštevanjem prehranskih priporočil.
        </motion.p>
      </div>
    </section>
  )
}
