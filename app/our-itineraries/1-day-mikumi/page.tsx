import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: `1 Day Mikumi Safari | Sambuo Tours`,
  description:
    "Perfect day trip from Dar es Salaam to Mikumi National Park. See elephants, lions, zebras and more in Tanzania's accessible wilderness.",
}

export default function OneDayMikumiPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image src="/images/tour-baobab.jpg" alt="Mikumi National Park" fill className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="inline-block bg-brand-gold text-white px-4 py-2 rounded-full font-semibold mb-4">
              1 Day Safari
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">1 Day Safari to Mikumi NP</h1>
            <p className="text-xl text-gray-200">The Dar Escape</p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-brand-chocolate text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-center md:justify-around items-center">
            <div className="text-center">
              <div className="text-3xl font-bold">1 Day</div>
              <div className="text-sm text-gray-300">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1-10</div>
              <div className="text-sm text-gray-300">Group Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-brand-chocolate mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A perfect tour for those with limited time in Dar es Salaam who want a taste of the African wild.
                Experience the stunning Mkata Floodplain and encounter large herds of elephants, zebras, giraffes,
                buffalo, and a good chance of seeing lions and African wild dogs.
              </p>
            </div>

            {/* Detailed Itinerary */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-brand-chocolate mb-8">Detailed Itinerary</h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      05:00
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-2">Early Morning Pickup & Departure</h3>
                      <p className="text-gray-700">
                        Your private 4x4 safari vehicle and guide will pick you up from your hotel in Dar es Salaam.
                        Begin the scenic drive (approx. 5-6 hours) to Mikumi National Park via Morogoro.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      11:30
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-2">Arrival & Fresh Lunch</h3>
                      <p className="text-gray-700">
                        Arrive just outside the park gate and head directly to Camp Bastian for a fresh, hot lunch to
                        refuel before your adventure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      13:00
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-2">Afternoon Game Drive</h3>
                      <p className="text-gray-700">
                        Enter the park for your extensive 4 to 5-hour game drive. Explore the famous Mkata Floodplain,
                        where you can spot large herds of elephants, zebras, giraffes, buffalo, and a good chance of
                        seeing lions and African wild dogs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border-2 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      17:30
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-2">Exit Park & Departure to Dar</h3>
                      <p className="text-gray-700">
                        Conclude your game drive and exit the park. Begin the drive back to Dar es Salaam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      23:00
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-2">Late Evening Drop-off</h3>
                      <p className="text-gray-700">
                        Arrive back in Dar es Salaam and be dropped off safely at your hotel, concluding your
                        exhilarating day safari.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included/Excluded */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold text-brand-ocean mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  What's Included
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Airport pickup & drop-off</li>
                  <li>✓ Full board (Lunch)</li>
                  <li>✓ Experienced driver/guide</li>
                  <li>✓ All park entrance fees</li>
                  <li>✓ 4x4 safari vehicle</li>
                  <li>✓ Drinking water</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold text-red-600 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Not Included
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ International flights</li>
                  <li>✗ Travel insurance</li>
                  <li>✗ Alcoholic beverages</li>
                  <li>✗ Tips & gratuities</li>
                  <li>✗ Optional activities</li>
                  <li>✗ Personal items</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-brand-chocolate text-white p-8 rounded-2xl text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Ready to Book Your Adventure?</h2>
              <p className="text-gray-300 mb-6">Contact us now to secure your spot on this incredible day safari!</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <BookingModal tourName="1 Day Safari to Mikumi NP">
                  <button className="font-bold bg-brand-gold text-brand-chocolate px-8 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors">
                    Book This Tour
                  </button>
                </BookingModal>
                <Link
                  href="/contact"
                  className="bg-white text-brand-chocolate px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/our-itineraries"
                className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-chocolate transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Tours
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
