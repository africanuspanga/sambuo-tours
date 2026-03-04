import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
export const metadata: Metadata = {
  title: `1 Day Ruaha Safari from Iringa | Sambuo Tours`,
  description:
    "Most efficient way to experience Ruaha! Iringa is the gateway city, minimizing driving time and maximizing game drive hours.",
}

export default function RuahaIringaPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/tour-ruaha-buffalo.jpg"
            alt="Ruaha National Park from Iringa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">1 Day Safari to Ruaha NP from Iringa</h1>
              <p className="text-xl md:text-2xl">The Shortest Route</p>
              <div className="mt-6 inline-block bg-brand-gold text-brand-chocolate px-6 py-2 rounded-full font-semibold">
                1 Day Safari
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="bg-brand-chocolate text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">1 Day</div>
                <div className="text-sm text-gray-300">Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2.5 Hours</div>
                <div className="text-sm text-gray-300">Drive Time</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Tour Overview */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-6">Tour Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The most efficient way to experience Ruaha! Iringa is the gateway city, minimizing driving time and
                maximizing game drive hours. This tour allows for a comfortable start time and extensive game viewing in
                Tanzania's largest national park. Witness African Wild Dogs, Cheetahs, and unique antelopes like the
                Sable and Roan in their natural habitat.
              </p>
            </section>

            {/* Detailed Itinerary */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-8">Detailed Itinerary</h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      06:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Morning Pickup & Departure</h3>
                      <p className="text-gray-700">
                        Your guide will pick you up from your hotel in Iringa. Begin the relatively short and
                        comfortable drive (approx. 2.5 hours) to Ruaha National Park through scenic highland landscapes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      08:30
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Arrival & Morning Game Drive</h3>
                      <p className="text-gray-700">
                        Arrive at the Msembe Gate and start your full-day game drive. The park is less crowded, allowing
                        for private viewing experiences of African Wild Dogs, Cheetahs, and unique antelopes like the
                        Sable and Roan. The morning light is perfect for photography.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      13:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Picnic Lunch</h3>
                      <p className="text-gray-700">
                        Enjoy a hot or cold picnic lunch at a designated viewing point overlooking the river or a
                        baobab-studded landscape. Watch wildlife at a distance while you dine in the African bush.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      14:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Afternoon Game Drive</h3>
                      <p className="text-gray-700">
                        Continue your game drive, following the course of the Ruaha River, a magnet for wildlife during
                        the dry season. Watch for crocodiles, hippos, and the magnificent Greater Kudu. Massive elephant
                        herds gather at the riverbanks to drink and bathe.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      17:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Departure to Iringa</h3>
                      <p className="text-gray-700">
                        Conclude your safari and begin the return drive to Iringa, enjoying the sunset views along the
                        way.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      19:30
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Evening Drop-off</h3>
                      <p className="text-gray-700">Arrive back in Iringa and transfer to your hotel.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-8">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-brand-ocean mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Included
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Pickup and drop-off from Iringa
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Professional driver/guide
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      4x4 safari vehicle with pop-up roof
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      All park entrance fees
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Picnic lunch
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      2.5L drinking water per person
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Government taxes
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Not Included
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      International flights & visas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Travel/medical insurance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Alcoholic & soft drinks
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Tips & gratuities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Personal items
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="bg-brand-chocolate text-white rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Ruaha?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your adventure from Iringa and discover the wild beauty of Ruaha National Park
              </p>
              <BookingModal tourName="1 Day Safari to Ruaha NP from Iringa">
                <button className="font-bold text-lg bg-brand-gold text-brand-chocolate px-8 py-4 rounded-xl text-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Book This Tour Now
                </button>
              </BookingModal>
            </section>

            {/* Back Button */}
            <div className="mt-12 text-center">
              <Link
                href="/our-itineraries"
                className="inline-flex items-center gap-2 text-brand-chocolate hover:text-brand-gold transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Tours
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
