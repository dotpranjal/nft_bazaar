import { Navbar } from "../components/navbar"
import { InfoSection } from "../components/info-section"
import { FeaturesSection } from "../components/features-section"
import { Roadmap } from "../components/roadmap"
import { FAQ } from "../components/faq"
import { Footer } from "../components/footer"

export default function NFTClaimPage() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="container mx-auto px-4">
        <InfoSection />
        <FeaturesSection />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

