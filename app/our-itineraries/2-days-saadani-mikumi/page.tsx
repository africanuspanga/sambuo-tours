import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
export const metadata: Metadata = {
  title: `2 Days Saadani & Mikumi Safari | Sambuo Tours`,
  description:
    "Intense 2-day tour covering two major parks. Experience the unique coastal park Saadani and the wildlife-rich Mikumi National Park.",
}

export default function SaadaniMikumiPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/tour-saadani-giraffes.jpg"
            alt="Saadani & Mikumi Safari"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Safari 2 Days 1 Night: Saadani NP & Mikumi NP
              </h1>
              <p className="text-xl md:text-2xl">The Northern Cross-Over</p>
              <div className="mt-6 inline-block bg-brand-gold text-brand-chocolate px-6 py-2 rounded-full font-semibold">
                2 Days / 1 Night
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Bar */}
        <div className="bg-brand-chocolate text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-gold">$1,085</div>
                <div className="text-sm text-gray-300">Starting Price (1 pax)</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2 Days</div>
                <div className="text-sm text-gray-300">Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2 Parks</div>
                <div className="text-sm text-gray-300">Saadani & Mikumi</div>
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
                This intense 2-day tour covers two major parks, requiring quick travel but giving you maximum diversity
                in a short time. Experience the unique coastal environment of Saadani where the savannah meets the sea,
                followed by the wildlife-rich Mkata Plains of Mikumi National Park. This tour is perfect for travelers
                who want to see the best of both worlds in a short timeframe.
              </p>
            </section>

            {/* Detailed Itinerary */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-8">Detailed Itinerary</h2>

              <div className="space-y-12">
                {/* Day 1 */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-gold mb-6 flex items-center gap-3">
                    <span className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                      1
                    </span>
                    Day 1: Dar to Saadani & Coastal Safari (L, D)
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          05:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">
                            Early Morning Pickup & Drive to Saadani
                          </h4>
                          <p className="text-gray-700">
                            Early 5:00 AM pickup from Dar es Salaam and drive to Saadani NP. Enjoy the scenic coastal
                            route north, passing through traditional villages and palm-lined roads.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          10:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Arrival & Check-in at Lodge</h4>
                          <p className="text-gray-700">
                            Arrive at your Saadani lodge/camp. Check in and enjoy a hot lunch with views of the Indian
                            Ocean or the bush.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          14:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Afternoon Wami River Boat Safari</h4>
                          <p className="text-gray-700">
                            Embark on a spectacular boat trip on the Wami River. Witness large pods of Hippos,
                            Crocodiles, and a huge variety of water birds including kingfishers, fish eagles, and
                            herons. This unique river safari is the highlight of Saadani.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          16:30
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Short Coastal Game Drive</h4>
                          <p className="text-gray-700">
                            Short game drive near the coastline. Witness the unique environment where the savannah meets
                            the sea. Look out for giraffes, elephants, and waterbuck that venture close to the beach.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          19:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Dinner & Overnight</h4>
                          <p className="text-gray-700">
                            Return to your lodge for dinner and overnight stay. Enjoy the sounds of the ocean and the
                            African bush.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div>
                  <h3 className="text-2xl font-bold text-brand-gold mb-6 flex items-center gap-3">
                    <span className="bg-brand-gold text-white rounded-full w-10 h-10 flex items-center justify-center text-lg">
                      2
                    </span>
                    Day 2: Saadani to Mikumi Game Drive & Return to Dar (B, L)
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          06:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Breakfast & Very Early Departure</h4>
                          <p className="text-gray-700">
                            Early breakfast followed by check-out. Very early departure from Saadani. Drive south
                            through Dar es Salaam and west toward Mikumi NP (approx. 8-10 hours total transfer). Enjoy
                            the changing landscapes from coast to interior.
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
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Picnic Lunch En-Route</h4>
                          <p className="text-gray-700">
                            Stop for a picnic lunch en-route to Mikumi. Stretch your legs and enjoy the packed meal
                            before continuing the journey.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          15:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Arrival at Mikumi & Game Drive</h4>
                          <p className="text-gray-700">
                            Arrive at Mikumi NP and immediately enter for a 3-hour Afternoon Game Drive. Focus on the
                            Mkata Plains for large concentrations of Giraffe, Zebra, and Lion. Watch for the unique
                            yellow baboons and elephants crossing the plains.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          18:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Departure to Dar es Salaam</h4>
                          <p className="text-gray-700">
                            Exit Mikumi and begin the return drive to Dar es Salaam. Relax and reflect on your two-park
                            adventure.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                          23:00
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-brand-chocolate mb-2">Late Drop-off in Dar es Salaam</h4>
                          <p className="text-gray-700">
                            Arrive back in Dar es Salaam for late drop-off at your hotel. End of safari.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Pricing Table */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-8">Pricing</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-brand-chocolate text-white">
                    <tr>
                      <th className="py-4 px-6 text-left">Number of People</th>
                      <th className="py-4 px-6 text-right">Price Per Person</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">1 Person</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$1,085</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">2 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$556</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">3 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$470</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">4 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$430</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-brand-gold/5">
                      <td className="py-4 px-6 font-semibold">5-10 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$412</td>
                    </tr>
                  </tbody>
                </table>
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
                      Pickup and drop-off from Dar es Salaam
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
                      <span className="text-brand-ocean mt-1">✓</span>1 night mid-range accommodation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      All meals (1L, 1D, 1B, 1L)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Wami River boat safari
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      2.5L drinking water per day
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Epic 2-Park Adventure?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Book now and experience the best of coastal Saadani and wildlife-rich Mikumi
              </p>
              <BookingModal tourName="Safari 2 Days 1 Night: Saadani NP & Mikumi NP from Dar es Salaam">
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
