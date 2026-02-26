import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Transformations from '@/components/Transformations'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Transformations />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
