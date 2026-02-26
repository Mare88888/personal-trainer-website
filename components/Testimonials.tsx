'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Maja Šercer',
    role: 'Online Coaching Client',
    duration: '12 Weeks',
    avatar: '/images/clients/client-1.jpg',
    rating: 5,
    quote:
      'Working with Petra completely changed my perspective on fitness. I never felt like a number — she treated me like an individual from day one. The results speak for themselves but honestly the mindset shift is what I value most.',
  },
  {
    id: 2,
    name: 'Nika Prelc',
    role: '1-on-1 Personal Training',
    duration: '6 Months',
    avatar: '/images/clients/client-2.jpg',
    rating: 5,
    quote:
      'I\'ve tried so many trainers before Petra. Nobody else took the time to understand my lifestyle, my schedule, my food preferences. The programme was genuinely built around me and I finally stuck to it. Highly recommend.',
  },
  {
    id: 3,
    name: 'Sara Mohorič',
    role: '12-Week Transformation',
    duration: '3 Months',
    avatar: '/images/clients/client-3.jpg',
    rating: 5,
    quote:
      'Post-pregnancy I felt so lost with my body. Petra guided me back gently but effectively. She always reminded me that this was a marathon, not a sprint. I lost 8kg but more importantly I feel like myself again.',
  },
  {
    id: 4,
    name: 'Ana Krajnc',
    role: 'Online Coaching Client',
    duration: '8 Weeks',
    avatar: '/images/clients/client-4.jpg',
    rating: 5,
    quote:
      'I had a wedding in 8 weeks and was desperate. Petra put together a plan that was tough but doable and never made me feel deprived. I looked and felt incredible on my wedding day. Worth every cent.',
  },
  {
    id: 5,
    name: 'Teja Novak',
    role: '1-on-1 Personal Training',
    duration: '4 Months',
    avatar: '/images/clients/client-5.jpg',
    rating: 5,
    quote:
      'The attention to form and technique is unmatched. Petra spotted and corrected a movement pattern that had been causing my lower back pain for years. I\'m stronger than I\'ve ever been and completely pain-free.',
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
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
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
          <span className="section-label block mb-4">Client Love</span>
          <h2 id="testimonials-heading" className="heading-lg text-charcoal">
            What They're <span className="italic text-terracotta-400">Saying</span>
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
                    alt={`${t.name} profile photo`}
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
                    alt={`${t.name} profile photo`}
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
