import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politika zasebnosti | Petra Kovač',
  description: 'Politika zasebnosti spletne strani Petra Kovač – osebna trenerka.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ivory-100 py-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="text-terracotta-400 text-sm tracking-wide hover:underline block mb-10"
        >
          ← Nazaj na začetek
        </Link>

        <h1 className="font-display text-5xl text-charcoal mb-10">Politika zasebnosti</h1>

        <div className="prose prose-stone max-w-none text-bark-500 leading-relaxed space-y-6">
          <p className="text-sm text-bark-400">
            Nazadnje posodobljeno:{' '}
            {new Date().toLocaleDateString('sl-SI', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <h2 className="font-display text-2xl text-charcoal mt-10">1. Podatki, ki jih zbiramo</h2>
          <p>
            Zbiramo podatke, ki nam jih neposredno posredujete, kot so vaše ime, e-poštni naslov in
            sporočilo, ko izpolnite kontaktni obrazec ali se naročite na naše novice.
          </p>

          <h2 className="font-display text-2xl text-charcoal mt-8">2. Uporaba vaših podatkov</h2>
          <p>
            Zbrane podatke uporabljamo za odgovarjanje na vaša povpraševanja, zagotavljanje coaching
            storitev in pošiljanje novic, če ste se nanje naročili.
          </p>

          <h2 className="font-display text-2xl text-charcoal mt-8">3. Tretje osebe</h2>
          <p>
            Za obdelavo obrazcev uporabljamo storitev Formspree. Vaši podatki so obravnavani v skladu
            s politiko zasebnosti Formspree. Vaših osebnih podatkov ne prodajamo tretjim osebam.
          </p>

          <h2 className="font-display text-2xl text-charcoal mt-8">4. Hramba podatkov</h2>
          <p>
            Vaše osebne podatke hranimo le toliko časa, kolikor je potrebno za uresničitev namenov,
            za katere so bili zbrani.
          </p>

          <h2 className="font-display text-2xl text-charcoal mt-8">5. Vaše pravice</h2>
          <p>
            Imate pravico do dostopa, popravka ali izbrisa svojih osebnih podatkov. Za uveljavljanje
            teh pravic nas kontaktirajte na{' '}
            <a href="mailto:petra@petrakovac.com" className="text-terracotta-400 hover:underline">
              petra@petrakovac.com
            </a>
            .
          </p>

          <h2 className="font-display text-2xl text-charcoal mt-8">6. Kontakt</h2>
          <p>
            Za vsa vprašanja v zvezi z zasebnostjo nas kontaktirajte:{' '}
            <a href="mailto:petra@petrakovac.com" className="text-terracotta-400 hover:underline">
              petra@petrakovac.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
