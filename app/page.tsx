import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { TopDestinationsSection } from "@/components/home/top-destinations-section"
import { FeaturedItinerariesSection } from "@/components/home/featured-itineraries-section"
import { ZanzibarSection } from "@/components/home/zanzibar-section"
import { KilimanjaroSection } from "@/components/home/kilimanjaro-section"
import { RecommendedBySection } from "@/components/home/recommended-by-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FinalCtaSection } from "@/components/home/final-cta-section"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `${company.name} | Authentic Tanzania Safari Adventures`,
  description:
    "Discover authentic Tanzania with SAMBUO TOURS & SAFARIS. Expert-guided safaris, Kilimanjaro treks, Zanzibar beach holidays & cultural experiences. Based in Tanga Region, Tanzania.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <TopDestinationsSection />
        <FeaturedItinerariesSection />
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
