'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Instagram, MapPin, Mail, CheckCircle, AlertCircle, Send } from 'lucide-react'

type FormValues = {
  name: string
  email: string
  message: string
  _gotcha: string // honeypot
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    if (data._gotcha) return

    const endpointId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID
    if (!endpointId) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${endpointId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase =
    'w-full px-5 py-4 rounded-xl bg-white border text-charcoal placeholder-bark-300 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400/40 transition-all duration-200'

  return (
    <section id="contact" className="section-padding bg-ivory-100" aria-labelledby="contact-heading">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-4">Stopite v stik</span>
          <h2 id="contact-heading" className="heading-lg text-charcoal">
            Začni Svojo <span className="italic text-terracotta-400">Pot</span>
          </h2>
          <p className="mt-4 text-bark-500 max-w-xl mx-auto leading-relaxed">
            Pripravljena na preobrazbo? Izpolni obrazec in se ti oglasim v 24 urah,
            da skupaj poiščeva pravi program zate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Form — 3/5 */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl p-12 text-center"
              >
                <CheckCircle size={40} className="text-terracotta-400 mx-auto mb-4" />
                <h3 className="font-display text-3xl text-charcoal mb-2">Sporočilo poslano!</h3>
                <p className="text-bark-500 leading-relaxed">
                  Hvala za tvoje sporočilo. Oglasim se v 24 urah.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 btn-outline text-charcoal border-parchment hover:border-charcoal"
                >
                  Pošlji novo sporočilo
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Kontaktni obrazec"
                className="space-y-5"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute opacity-0 w-0 h-0 pointer-events-none"
                  {...register('_gotcha')}
                />

                {/* Name */}
                <motion.div variants={item}>
                  <label htmlFor="contact-name" className="block text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-2">
                    Ime in priimek <span aria-hidden="true" className="text-terracotta-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jana Novak"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`${inputBase} ${errors.name ? 'border-red-300' : 'border-parchment focus:border-terracotta-400/50'}`}
                    {...register('name', { required: 'Vnesite svoje ime' })}
                  />
                  {errors.name && (
                    <p id="contact-name-error" role="alert" className="mt-1.5 text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </motion.div>

                {/* Email */}
                <motion.div variants={item}>
                  <label htmlFor="contact-email" className="block text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-2">
                    E-poštni naslov <span aria-hidden="true" className="text-terracotta-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="jana@primer.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`${inputBase} ${errors.email ? 'border-red-300' : 'border-parchment focus:border-terracotta-400/50'}`}
                    {...register('email', {
                      required: 'Vnesite e-poštni naslov',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Vnesite veljaven e-poštni naslov',
                      },
                    })}
                  />
                  {errors.email && (
                    <p id="contact-email-error" role="alert" className="mt-1.5 text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </motion.div>

                {/* Message */}
                <motion.div variants={item}>
                  <label htmlFor="contact-message" className="block text-xs font-medium tracking-[0.15em] uppercase text-charcoal mb-2">
                    Sporočilo <span aria-hidden="true" className="text-terracotta-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Povej mi o svojih ciljih, trenutni kondicijski ravni in vprašanjih, ki jih imaš…"
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={`${inputBase} resize-none ${errors.message ? 'border-red-300' : 'border-parchment focus:border-terracotta-400/50'}`}
                    {...register('message', {
                      required: 'Vnesite sporočilo',
                      minLength: { value: 20, message: 'Sporočilo mora vsebovati vsaj 20 znakov' },
                    })}
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="mt-1.5 text-red-500 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    className="flex items-center gap-2 text-red-500 text-sm"
                  >
                    <AlertCircle size={14} />
                    <span>Prišlo je do napake. Poskusi znova ali me kontaktiraj neposredno.</span>
                  </motion.div>
                )}

                <motion.div variants={item}>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Pošiljam…</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Pošlji sporočilo</span>
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Info sidebar — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 lg:pt-2"
          >
            <div className="bg-white rounded-2xl p-8 mb-6">
              <h3 className="font-display text-2xl text-charcoal mb-6">Povežimo se</h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-terracotta-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-charcoal text-sm font-medium">Lokacija</p>
                    <p className="text-bark-500 text-sm mt-0.5">Ljubljana, Slovenija</p>
                    <p className="text-bark-400 text-xs mt-0.5">Osebno in na daljavo po vsem svetu</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-terracotta-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-charcoal text-sm font-medium">E-pošta</p>
                    <a
                      href="mailto:petra@petrakovac.com"
                      className="text-bark-500 text-sm mt-0.5 hover:text-terracotta-400 transition-colors"
                    >
                      petra@petrakovac.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                    <Instagram size={16} className="text-terracotta-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-charcoal text-sm font-medium">Instagram</p>
                    <a
                      href="https://instagram.com/petrakovac.fit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bark-500 text-sm mt-0.5 hover:text-terracotta-400 transition-colors"
                    >
                      @petrakovac.fit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-blush-50 rounded-xl px-6 py-5 border border-blush-200">
              <p className="text-charcoal text-sm font-medium mb-1">⚡ Hiter odziv</p>
              <p className="text-bark-500 text-sm leading-relaxed">
                Osebno odgovorim na vsako povpraševanje v 24 urah, od ponedeljka do sobote.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
