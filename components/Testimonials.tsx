'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Maja Šercer',
    role: 'Stranka spletnega coachinga',
    duration: '12 tednov',
    avatar: '/images/clients/client-1.jpg',
    rating: 5,
    quote:
      'Sodelovanje s Petro je popolnoma spremenilo moj pogled na fitnes. Nikoli se nisem počutila kot številka – od prvega dne me je obravnavala kot posameznico. Rezultati govorijo sami zase, a sprememba v razmišljanju je tisto, česar si cenim najbolj.',
  },
  {
    id: 2,
    name: 'Nika Prelc',
    role: '1-na-1 Osebni trening',
    duration: '6 mesecev',
    avatar: '/images/clients/client-2.jpg',
    rating: 5,
    quote:
      'Preden sem spoznala Petro, sem preizkusila toliko trenerjev. Nihče ni vzel časa, da bi razumel moj življenjski slog, urnik in prehranske preference. Program je bil resnično zgrajen zame in prvič sem ga dejansko upoštevala. Toplo priporočam.',
  },
  {
    id: 3,
    name: 'Sara Mohorič',
    role: '12-tedenska Preobrazba',
    duration: '3 mesece',
    avatar: '/images/clients/client-3.jpg',
    rating: 5,
    quote:
      'Po porodu sem se počutila tako izgubljeno v svojem telesu. Petra me je vodila nazaj nežno, a učinkovito. Vedno mi je spomnila, da je to maraton, ne sprint. Izgubila sem 8 kg, a še pomembneje – spet se počutim kot sama.',
  },
  {
    id: 4,
    name: 'Ana Krajnc',
    role: 'Stranka spletnega coachinga',
    duration: '8 tednov',
    avatar: '/images/clients/client-4.jpg',
    rating: 5,
    quote:
      'Imela sem poroko čez 8 tednov in bila sem obupana. Petra je sestavila načrt, ki je bil zahteven, a izvedljiv, in nikoli me ni pustila, da bi se počutila prikrajšano. Na poročni dan sem izgledala in se počutila neverjetno. Vredno vsakega centa.',
  },
  {
    id: 5,
    name: 'Teja Novak',
    role: '1-na-1 Osebni trening',
    duration: '4 mesece',
    avatar: '/images/clients/client-5.jpg',
    rating: 5,
    quote:
      'Pozornost do forme in tehnike je neprimerljiva. Petra je opazila in popravila vzorec gibanja, ki je povzročal moje bolečine v ledvenem delu hrbta že leta. Zdaj sem močnejša kot kdaj koli prej in popolnoma brez bolečin.',
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

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} od 5 zvezdic`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-terracotta-400 text-terracotta-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-blush-50 overflow-hidden"
      aria-labelledby="testimonials-heading"
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
          <span className="section-label block mb-4">Mnenja strank</span>
          <h2 id="testimonials-heading" className="heading-lg text-charcoal">
            Kaj <span className="italic text-terracotta-400">Pravijo</span>
          </h2>
        </motion.div>

        {/* Top row — 3 cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-5 mb-5"
        >
          {testimonials.slice(0, 3).map((t) => (
            <motion.blockquote
              key={t.id}
              variants={cardAnim}
              className="bg-white rounded-2xl p-7 shadow-sm shadow-charcoal/4 flex flex-col"
            >
              <Stars count={t.rating} />

              <p className="mt-4 text-bark-500 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="mt-6 flex items-center gap-3 pt-6 border-t border-parchment">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden bg-blush-200 shrink-0 relative">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} profilna fotografija`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                    }}
                  />
                  {/* Fallback initials */}
                  <div className="absolute inset-0 flex items-center justify-center text-terracotta-400 font-display text-sm">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="text-charcoal text-sm font-medium">{t.name}</p>
                  <p className="text-bark-400 text-xs mt-0.5">{t.role} · {t.duration}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>

        {/* Bottom row — 2 cards (centered) */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 gap-5 md:max-w-[calc(66.66%+10px)] md:mx-auto"
        >
          {testimonials.slice(3).map((t) => (
            <motion.blockquote
              key={t.id}
              variants={cardAnim}
              className="bg-white rounded-2xl p-7 shadow-sm shadow-charcoal/4 flex flex-col"
            >
              <Stars count={t.rating} />

              <p className="mt-4 text-bark-500 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="mt-6 flex items-center gap-3 pt-6 border-t border-parchment">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-blush-200 shrink-0 relative">
                  <Image
                    src={t.avatar}
                    alt={`${t.name} profilna fotografija`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-terracotta-400 font-display text-sm">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="text-charcoal text-sm font-medium">{t.name}</p>
                  <p className="text-bark-400 text-xs mt-0.5">{t.role} · {t.duration}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
