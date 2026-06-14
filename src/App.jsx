import Navbar          from './components/Navbar'
import HeroSection     from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import FloopsCarousel  from './components/FloopsCarousel'
import GameplayPreview from './components/GameplayPreview'
import CTABanner       from './components/CTABanner'
import Footer          from './components/Footer'
import NewsSection from './components/NewsSection'

function App() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <div style={{ marginBottom: '1px' }}>
        <FeaturesSection />
      </div>
      <FloopsCarousel />
      <div style={{ marginTop: '-40px',marginBottom: '-60px' }}>
        <GameplayPreview />
      </div>
      <div className="bg-white">
      <div style={{ marginTop: '-20px' }}>
        <NewsSection />
      </div>
      <CTABanner />
      </div>
      <Footer />
    </main>
  )
}

export default App