import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Petra Kovač',
  description: 'Privacy Policy for Petra Kovač Personal Training website.',
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
          ← Back to Home
        </Link>

        <h1 className="font-display text-5xl text-charcoal mb-10">Privacy Policy</h1>

        <div className="prose prose-stone max-w-none text-bark-500 leading-relaxed space-y-6">
          <p className="text-sm text-bark-400">Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2 className="font-display text-2xl text-charcoal mt-10">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, and message when you submit a contact form or subscribe to our newsletter.</p>

          <h2 className="font-display text-2xl text-charcoal mt-8">2. How We Use Your Information</h2>
          <p>We use the information collected to respond to your enquiries, provide coaching services, and send you newsletters if you have subscribed.</p>

          <h2 className="font-display text-2xl text-charcoal mt-8">3. Third-Party Services</h2>
          <p>We use Formspree to process form submissions. Your data is handled according to Formspree&apos;s Privacy Policy. We do not sell your personal information to any third parties.</p>

          <h2 className="font-display text-2xl text-charcoal mt-8">4. Data Retention</h2>
          <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected.</p>

          <h2 className="font-display text-2xl text-charcoal mt-8">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. Please contact us at petra@petrakovac.com to exercise these rights.</p>

          <h2 className="font-display text-2xl text-charcoal mt-8">6. Contact</h2>
          <p>For any privacy-related questions, please contact: <a href="mailto:petra@petrakovac.com" className="text-terracotta-400 hover:underline">petra@petrakovac.com</a></p>
        </div>
      </div>
    </main>
  )
}
