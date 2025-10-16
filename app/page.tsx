import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { TopDestinationsSection } from "@/components/home/top-destinations-section"
import { ZanzibarSection } from "@/components/home/zanzibar-section"
import { KilimanjaroSection } from "@/components/home/kilimanjaro-section"
import { RecommendedBySection } from "@/components/home/recommended-by-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FinalCtaSection } from "@/components/home/final-cta-section"

export const metadata = {
  title: "KiliSafari Organizing | Tanzania Safari Tours, Kilimanjaro Treks & Zanzibar Holidays",
  description:
    "Experience authentic Tanzania safaris, Mount Kilimanjaro treks, and Zanzibar beach holidays with KiliSafari. Expert guides, custom itineraries, and unforgettable adventures await.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <TopDestinationsSection />
        <ZanzibarSection />
        <KilimanjaroSection />
        <RecommendedBySection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
