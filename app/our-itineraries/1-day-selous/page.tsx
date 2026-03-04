import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
import { ArrowLeft, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: `1 Day Selous (Nyerere NP) Safari | Sambuo Tours`,
  description:
    "Experience Africa's largest national park on this ultimate day trip. Boat safari on Rufiji River, huge elephant herds, hippos & crocodiles.",
}

export default function OneDaySelousPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/tour-zebras.jpg"
            alt="Selous Game Reserve Safari"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">1 Day Safari to Selous (Nyerere NP)</h1>
              <p className="text-xl md:text-2xl font-semibold text-brand-gold">The Ultimate Day Trip</p>
              <div className="mt-4 inline-block bg-brand-gold px-6 py-2 rounded-full">
                <span className="font-bold">1 Day</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <Clock className="text-brand-gold" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-xl font-bold text-brand-chocolate">1 Day</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Users className="text-brand-gold" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="text-xl font-bold text-brand-chocolate">1-10 pax</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day by Day Itinerary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-12 text-center">Detailed Itinerary</h2>

              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-gold text-white py-4 px-6">
                    <h3 className="text-2xl font-bold">Full Day - Nyerere National Park (Selous)</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 font-bold text-brand-chocolate">03:00 AM</div>
                        <div>
                          <h4 className="font-bold text-brand-chocolate mb-2">Very Early Morning Pickup</h4>
                          <p className="text-gray-700">
                            Your guide picks you up from your hotel in Dar es Salaam for the long drive (approx. 5-6
                            hours) to Nyerere National Park (Selous). This early start ensures maximum time in the park.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 font-bold text-brand-chocolate">08:30 AM</div>
                        <div>
                          <h4 className="font-bold text-brand-chocolate mb-2">Arrival & Morning Game Drive</h4>
                          <p className="text-gray-700">
                            Arrive at the Mtemere Gate and immediately begin your game drive. Nyerere is famous for its
                            vast elephant herds and the elusive African wild dog.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 font-bold text-brand-chocolate">01:00 PM</div>
                        <div>
                          <h4 className="font-bold text-brand-chocolate mb-2">Picnic Lunch</h4>
                          <p className="text-gray-700">
                            Enjoy a packed lunch at a designated picnic site inside the reserve.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 font-bold text-brand-chocolate">02:00 PM</div>
                        <div>
                          <h4 className="font-bold text-brand-chocolate mb-2">Boat Safari on the Rufiji River</h4>
                          <p className="text-gray-700">
                            The highlight of Nyerere NP! Embark on a spectacular Boat Safari on the mighty Rufiji River
                            to see huge pods of hippos, massive crocodiles, and incredible birdlife.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 font-bold text-brand-chocolate">04:30 PM</div>
                        <div>
                          <h4 className="font-bold text-brand-chocolate mb-2">Departure to Dar</h4>
                          <p className="text-gray-700">Exit the park and begin the long drive back to Dar es Salaam.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-24 font-bold text-brand-chocolate">10:00 PM</div>
                        <div>
                          <h4 className="font-bold text-brand-chocolate mb-2">Late Evening Drop-off</h4>
                          <p className="text-gray-700">Arrive back in Dar es Salaam and transfer to your hotel.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions/Exclusions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Included */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-ocean mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    What's Included
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Airport/hotel pickup & drop-off
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Picnic lunch
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Experienced English-speaking driver/guide
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      All park entrance fees & taxes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Game drive in 4x4 vehicle
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Boat safari on Rufiji River
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Drinking water (2.5L per person)
                    </li>
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    What's Not Included
                  </h3>
                  <ul className="space-y-3 text-gray-700">
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
                      Tips & gratuities (recommended)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Personal items & expenses
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Optional activities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-chocolate text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Nyerere National Park?</h2>
            <p className="text-xl mb-8 text-gray-300">Book your adventure today and discover Africa's largest park</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <BookingModal tourName="1 Day Safari to Selous (Nyerere NP)">
                <button className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                  Book This Tour
                </button>
              </BookingModal>
              <Link
                href="/our-itineraries"
                className="bg-white hover:bg-gray-100 text-brand-chocolate px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                View All Tours
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
