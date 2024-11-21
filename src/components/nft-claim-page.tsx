import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { InfoSection } from "./components/info-section"
import { FeaturesSection } from "./components/features-section"
import { CollectionPreview } from "./components/collection-preview"
import { Roadmap } from "./components/roadmap"
import { FAQ } from "./components/faq"
import { Footer } from "./components/footer"

export default function NFTClaimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-900">
      <Navbar />
      <main className="container mx-auto px-4">
        <HeroSection />
        <InfoSection />
        <CollectionPreview />
        <FeaturesSection />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

