import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DaySafarisPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-dark to-brand-green">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Day Safaris</h1>
            <p className="text-lg md:text-xl text-white/90">Perfect wildlife experiences for limited time</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">Experience Tanzania in a Day</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our day safari options are perfect for travelers with limited time or those wanting to add a wildlife
              experience to their Tanzania visit. Explore nearby national parks and return to your accommodation the
              same day.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Plan Your Day Safari</h2>
            <p className="text-lg text-white/90 mb-8">Contact us to customize your perfect day safari experience</p>
            <Button
              asChild
              size="lg"
              className="bg-brand-orange hover:bg-brand-orange/90 text-white text-lg px-8 py-6 h-auto"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
