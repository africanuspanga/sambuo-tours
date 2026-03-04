import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
export const metadata: Metadata = {
  title: `1 Day Ruaha Safari from Dodoma | Sambuo Tours`,
  description:
    "Full-day Ruaha National Park safari from Dodoma. Experience massive elephant herds, Greater Kudu, and lion prides along the Great Ruaha River.",
}

export default function RuahaDodomaPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/tour-ruaha-buffalo.jpg"
            alt="Ruaha National Park from Dodoma"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">1 Day Safari to Ruaha NP from Dodoma</h1>
              <p className="text-xl md:text-2xl">The Capital City Escape</p>
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
                <div className="text-3xl font-bold">8 Hours</div>
                <div className="text-sm text-gray-300">Game Drive</div>
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
                A full-day, deep-bush adventure starting directly from Tanzania's capital, giving you a taste of Ruaha's
                rugged wilderness. This tour requires a very early start for the long scenic drive (approximately 7-8
                hours) toward Ruaha National Park, but rewards you with incredible wildlife sightings in one of
                Tanzania's most remote and beautiful parks.
              </p>
            </section>

            {/* Detailed Itinerary */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-8">Detailed Itinerary</h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      04:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Early Morning Pickup & Departure</h3>
                      <p className="text-gray-700">
                        Your guide will pick you up from your hotel in Dodoma. This is a very early start for the long,
                        scenic drive (approx. 7-8 hours) toward Ruaha National Park. Enjoy the changing landscapes as
                        you travel through rural Tanzania.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      12:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Arrival & Picnic Lunch</h3>
                      <p className="text-gray-700">
                        Arrive at the Ruaha Gate and immediately begin a short game drive into the park, stopping at a
                        scenic spot for a packed picnic lunch surrounded by the wilderness.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      13:30
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Afternoon Game Drive</h3>
                      <p className="text-gray-700">
                        Explore the central areas of Ruaha, focusing on the Great Ruaha River. This is where you can
                        spot massive elephant herds, towering Greater Kudu, and large prides of Lion that stalk the
                        riverbanks. Look out for the rare African Wild Dogs and incredible birdlife.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      17:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Departure to Dodoma</h3>
                      <p className="text-gray-700">
                        Conclude your game drive and exit the park. Begin the long drive back to Dodoma, arriving late
                        at night.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      01:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Late Night Drop-off</h3>
                      <p className="text-gray-700">Arrive back in Dodoma and be dropped off at your accommodation.</p>
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
                      Pickup and drop-off from Dodoma
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
                Book your adventure from Dodoma and discover the wild beauty of Ruaha National Park
              </p>
              <BookingModal tourName="1 Day Safari to Ruaha NP from Dodoma">
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
