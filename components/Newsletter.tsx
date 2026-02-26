'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

type FormValues = {
  email: string
  _gotcha: string // honeypot
}

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    // Honeypot check
    if (data._gotcha) return

    const endpointId = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID
    if (!endpointId) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${endpointId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: data.email }),
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

  return (
    <section
      className="relative py-24 lg:py-28 bg-charcoal overflow-hidden"
      aria-labelledby="newsletter-heading"
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-terracotta-400/8 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-grain pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label text-terracotta-300 block mb-5">Ostani v stiku</span>

          <h2
            id="newsletter-heading"
            className="heading-lg text-white mb-5"
          >
            Pridruži se <span className="italic text-terracotta-300">Skupnosti</span>
          </h2>

          <p className="text-white/50 leading-relaxed mb-10 max-w-md mx-auto">
            Tedni nasveti o treningu, prehrani in miselnosti – ter ekskluzivne novosti o programih,
            zgodnje cene in zakulisne vsebine.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-white py-6"
            >
              <CheckCircle size={22} className="text-terracotta-400 shrink-0" />
              <p className="text-lg font-display">
                Uspelo! Dobrodošla v skupnost.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Obrazec za naročnino na novice"
            >
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute opacity-0 w-0 h-0 pointer-events-none"
                {...register('_gotcha')}
              />

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    E-poštni naslov
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    placeholder="Vnesite vaš e-poštni naslov"
                    aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className={`w-full px-5 py-4 rounded-full bg-white border text-charcoal placeholder-bark-400 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-400/40 transition-all duration-200 ${
                      errors.email ? 'border-red-400' : 'border-white focus:border-terracotta-400'
                    }`}
                    {...register('email', {
                      required: 'E-poštni naslov je obvezen',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Vnesite veljaven e-poštni naslov',
                      },
                    })}
                  />
                  {errors.email && (
                    <p id="newsletter-email-error" role="alert" className="mt-2 text-red-400 text-xs text-left pl-5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-7 py-4 bg-terracotta-400 hover:bg-terracotta-500 disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-full text-sm font-medium tracking-[0.12em] uppercase transition-all duration-200 hover:shadow-lg hover:shadow-terracotta-400/30 shrink-0 flex items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Prijavljam…</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Prijavi se</span>
                    </>
                  )}
                </button>
              </div>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="mt-4 flex items-center justify-center gap-2 text-red-400 text-sm"
                >
                  <AlertCircle size={14} />
                  <span>Prišlo je do napake. Poskusi znova.</span>
                </motion.div>
              )}

              <p className="mt-5 text-white/25 text-xs">
                Brez neželene pošte. Odjava kadarkoli.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
