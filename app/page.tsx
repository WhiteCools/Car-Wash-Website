import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Services from '../components/Services'
import Packages from '../components/Packages'
import Products from '../components/Products'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Packages />
      <Products />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}