import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-dark to-brand-green">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Custom Itineraries</h1>
            <p className="text-lg md:text-xl text-white/90">Your adventure, your way</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">Personalized Tanzania Experiences</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every traveler is unique, and so should be their journey. We specialize in creating custom itineraries
              tailored to your interests, budget, and time frame. Whether you want to combine safari with beach,
              trekking with culture, or create your own unique adventure, we'll make it happen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our expert team will work with you to design the perfect Tanzania experience, taking into account your
              preferences, travel style, and dreams. From luxury lodges to budget camping, from fast-paced adventures to
              relaxed explorations, we craft itineraries that exceed expectations.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Let's Plan Your Perfect Trip</h2>
            <p className="text-lg text-white/90 mb-8">
              Tell us about your dream Tanzania adventure and we'll create a custom itinerary just for you
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-6 h-auto"
            >
              <Link href="/contact">Start Planning</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
