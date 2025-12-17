import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Check } from "lucide-react"

export const metadata = {
  title: "Udzungwa Mountains National Park - Waterfalls & Hiking | KiliSafari",
  description:
    "Explore Udzungwa Mountains National Park with Sanje Waterfall hikes, endemic primates, bird watching, and pristine montane rainforest. Biodiversity hotspot in Tanzania.",
}

export default function UdzungwaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-green-800 to-green-600">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Udzungwa Mountains</h1>
            <p className="text-lg md:text-xl text-white/90">Biodiversity Hotspot & Waterfall Paradise</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6 text-center">
              A Hiker's Paradise with Unique Wildlife
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Udzungwa Mountains National Park is a biodiversity hotspot with endemic primate species found nowhere
                else on Earth. This pristine montane forest offers hiking through lush vegetation to spectacular
                waterfalls, including the impressive 170-meter Sanje Falls.
              </p>
              <p>
                The park is home to several endemic species including the Udzungwa red colobus monkey and the Sanje
                mangabey. Bird watchers will delight in spotting numerous endemic bird species. The diverse ecosystems
                range from lowland rainforest to montane forest and grassland.
              </p>
              <p>
                Hiking trails vary from half-day walks to multi-day treks, with the Sanje Waterfall trail being the most
                popular. Swimming in natural pools at the base of waterfalls provides refreshing rewards after
                challenging hikes through this pristine wilderness.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-12 bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-black text-brand-dark mb-6">Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Sanje Waterfall (170 meters high)",
                  "Endemic primate species - Udzungwa red colobus and Sanje mangabey",
                  "Pristine montane rainforest",
                  "Bird watching paradise with endemic species",
                  "Swimming in natural pools",
                  "Various hiking trails from easy to challenging",
                  "Biodiversity hotspot with unique flora and fauna",
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check size={20} className="text-brand-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trail Options */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-brand-dark mb-2">Half Day</h4>
                <p className="text-sm text-gray-600">Sanje Waterfall trail - 4 hours round trip</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-brand-dark mb-2">Full Day</h4>
                <p className="text-sm text-gray-600">Extended forest trails with primate viewing</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold text-brand-dark mb-2">Multi-Day</h4>
                <p className="text-sm text-gray-600">2-3 day camping treks through the mountains</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/udzungwa-waterfall.jpg"
                  alt="Sanje Waterfall cascading through lush forest"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/udzungwa-entrance.jpg"
                  alt="Udzungwa National Park entrance sign"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden md:col-span-2 lg:col-span-1">
                <Image
                  src="/images/udzungwa-vista.jpg"
                  alt="Panoramic mountain vista from Udzungwa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Explore Udzungwa Mountains</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discover unique wildlife and stunning waterfalls in this pristine mountain paradise
            </p>
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              <Link href="/contact">Plan Your Hike</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
