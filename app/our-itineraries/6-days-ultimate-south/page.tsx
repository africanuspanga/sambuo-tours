import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
import { ArrowLeft, Clock, Users, DollarSign, Plane } from "lucide-react"

export const metadata: Metadata = {
  title: `6 Days Ultimate Southern Circuit Safari | Sambuo Tours`,
  description:
    "The ultimate Southern Circuit experience. Mikumi, 2 nights Selous, 2 nights Ruaha with flights. Maximum wildlife encounters and walking safari.",
}

export default function SixDaysUltimateSouthPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/tour-giraffes.jpg"
            alt="Ultimate Southern Circuit Safari"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">6 Days: Ultimate Southern Circuit</h1>
              <p className="text-xl md:text-2xl font-semibold text-brand-gold">
                Mikumi, Selous & Ruaha - The Complete Experience
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="bg-brand-gold px-6 py-2 rounded-full font-bold">6 Days / 5 Nights</span>
                <span className="bg-blue-500 px-6 py-2 rounded-full font-bold flex items-center gap-2">
                  <Plane size={18} />
                  Includes Flights
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <DollarSign className="text-brand-gold" size={24} />
                <div>
                  <p className="text-sm text-gray-600">From</p>
                  <p className="text-xl font-bold text-brand-chocolate">$2,499 pp</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Clock className="text-brand-gold" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-xl font-bold text-brand-chocolate">6 Days / 5 Nights</p>
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

        {/* Pricing Table */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-chocolate mb-8 text-center">Tour Pricing</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-brand-chocolate text-white">
                    <tr>
                      <th className="py-4 px-6 text-left">Number of People</th>
                      <th className="py-4 px-6 text-right">Price Per Person</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6">1 Person</td>
                      <td className="py-4 px-6 text-right font-bold text-brand-gold">$2,499 (Total Trip)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-4 px-6">2 People</td>
                      <td className="py-4 px-6 text-right font-bold">$1,562 pp</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">3 People</td>
                      <td className="py-4 px-6 text-right font-bold">$1,303 pp</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-4 px-6">4 People</td>
                      <td className="py-4 px-6 text-right font-bold">$1,165 pp</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">5-10 People</td>
                      <td className="py-4 px-6 text-right font-bold text-brand-ocean">$1,085 pp (Best Value!)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                * Price includes domestic flights between Nyerere NP and Ruaha NP
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
                    <h3 className="text-2xl font-bold">Day 1: Dar to Mikumi & Game Drive (L, D)</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">Overnight at: Mikumi NP Lodge/Camp</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Morning:</strong> Early pickup from Dar es Salaam and drive to Mikumi NP.
                      </p>
                      <p>
                        <strong>Afternoon:</strong> Check-in, hot lunch, and extensive game drive in Mikumi.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-gold text-white py-4 px-6">
                    <h3 className="text-2xl font-bold">Day 2: Mikumi to Selous & Boat Safari (B, L, D)</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">Overnight at: Nyerere NP (Selous) Lodge/Camp</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Morning:</strong> Sunrise game drive in Mikumi, then transfer to Nyerere NP (approx. 4-5
                        hours).
                      </p>
                      <p>
                        <strong>Afternoon:</strong> Check-in, hot lunch, followed by the Boat Safari on the Rufiji
                        River.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-500">
                  <div className="bg-blue-600 text-white py-4 px-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Plane size={24} />
                      Day 3: Full Day Selous Game Drive & Fly to Ruaha (B, L)
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">Overnight at: Ruaha NP Lodge/Camp</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Morning:</strong> Full game drive in Nyerere, searching for Wild Dogs and riverine
                        species.
                      </p>
                      <p className="flex items-start gap-2">
                        <Plane className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span>
                          <strong>Afternoon:</strong> Transfer to the local airstrip and Fly from Nyerere NP to Ruaha
                          NP. Met by your Ruaha guide and game drive transfer to your lodge.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-gold text-white py-4 px-6">
                    <h3 className="text-2xl font-bold">Day 4: Full Day Ruaha Exploration (B, L, D)</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">Overnight at: Ruaha NP Lodge/Camp</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Full Day:</strong> Full day of game driving in Ruaha, exploring the vast miombo
                        woodlands and the Great Ruaha River. This is the best place to find Greater Kudu, Roan Antelope,
                        and large lion prides.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-brand-gold text-white py-4 px-6">
                    <h3 className="text-2xl font-bold">Day 5: Ruaha Walking Safari & Game Drives (B, L, D)</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">Overnight at: Ruaha NP Lodge/Camp</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Morning:</strong> Optional Guided Walking Safari for an intimate bush experience.
                      </p>
                      <p>
                        <strong>Afternoon:</strong> Remainder of the day is dedicated to game drives and exploring
                        seasonal river beds where elephants dig for water.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 6 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-500">
                  <div className="bg-blue-600 text-white py-4 px-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <Plane size={24} />
                      Day 6: Ruaha Morning Game Drive & Fly to Dar (B, L)
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">End Point: Dar es Salaam</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Morning:</strong> Final sunrise game drive in Ruaha.
                      </p>
                      <p>
                        <strong>Lunch:</strong> Hot lunch at the lodge.
                      </p>
                      <p className="flex items-start gap-2">
                        <Plane className="text-blue-600 mt-1 flex-shrink-0" size={18} />
                        <span>
                          <strong>Afternoon:</strong> Transfer to the airstrip and Fly back to Dar es Salaam (approx. 2
                          hours), concluding your Southern Circuit safari.
                        </span>
                      </p>
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
                      <strong>Domestic flights (Nyerere to Ruaha, Ruaha to Dar)</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Full board accommodation (B, L, D)
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
                      Extensive game drives in 4x4 vehicle
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Boat safari on Rufiji River
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Optional guided walking safari
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-ocean mt-1">✓</span>
                      Drinking water (2.5L per person per day)
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
                      Optional activities (unless specified)
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for the Ultimate Southern Adventure?</h2>
            <p className="text-xl mb-8 text-gray-300">Book the most comprehensive 6-day Southern Circuit experience</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <BookingModal tourName="6 Days: Ultimate Southern Circuit Safari">
                <button className="bg-brand-gold hover:bg-brand-gold/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                  Book This Tour
                </button>
              </BookingModal>
              <Link
                href="/our-itineraries"
                className="bg-white hover:bg-gray-100 text-brand-chocolate px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to All Tours
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
