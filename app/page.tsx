import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProductOverview from './components/ProductOverview'
import SecuritySection from './components/SecuritySection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import DecorativeBackground from './components/DecorativeBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-body relative">
      <DecorativeBackground />
      <Navigation />
      <Hero />
      <ProductOverview />
      <SecuritySection />
      <PricingSection />
      <Footer />
    </main>
  )
}
