import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { ArrowLeft, Clock, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "2 Days Mikumi & Selous Safari | KiliSafari",
  description:
    "Experience two of Tanzania's top southern parks. Game drives in Mikumi and boat safari on Rufiji River in Selous.",
}

export default function TwoDaysMikumiSelousPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/tour-elephants.jpg"
            alt="Mikumi and Selous Safari"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">2 Days Mikumi NP & Selous Safari</h1>
              <p className="text-xl md:text-2xl font-semibold text-brand-orange">The Two-Park Taster</p>
              <div className="mt-4 inline-block bg-brand-orange px-6 py-2 rounded-full">
                <span className="font-bold">2 Days / 1 Night</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center">
                <DollarSign className="text-brand-orange" size={24} />
                <div>
                  <p className="text-sm text-gray-600">From</p>
                  <p className="text-xl font-bold text-brand-dark">$969 pp</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Clock className="text-brand-orange" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-xl font-bold text-brand-dark">2 Days / 1 Night</p>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Users className="text-brand-orange" size={24} />
                <div>
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="text-xl font-bold text-brand-dark">1-10 pax</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Tour Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      <th className="py-4 px-6 text-left">Number of People</th>
                      <th className="py-4 px-6 text-right">Price Per Person</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6">1 Person</td>
                      <td className="py-4 px-6 text-right font-bold text-brand-orange">$969 (Total Trip)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-4 px-6">2 People</td>
                      <td className="py-4 px-6 text-right font-bold">$605 pp</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">3 People</td>
                      <td className="py-4 px-6 text-right font-bold">$499 pp</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-4 px-6">4 People</td>
                      <td className="py-4 px-6 text-right font-bold">$453 pp</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">5-10 People</td>
                      <td className="py-4 px-6 text-right font-bold text-brand-green">$385 pp (Best Value!)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Day by Day Itinerary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">Detailed Itinerary</h2>

              <div className="space-y-6">
                {/* Day 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-brand-orange text-white py-4 px-6">
                    <h3 className="text-2xl font-bold">Day 1: Dar to Mikumi & Game Drive (L, D)</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">Overnight at: Mikumi NP Lodge/Camp</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Morning:</strong> Early 5:00 AM pickup from Dar es Salaam and drive to Mikumi NP.
                      </p>
                      <p>
                        <strong>Lunch:</strong> Hot lunch at Camp Bastian.
                      </p>
                      <p>
                        <strong>Afternoon:</strong> Extensive game drive in Mikumi, exploring the Mkata Plains for
                        iconic plains animals like Giraffe, Elephant, and Zebra.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-brand-orange text-white py-4 px-6">
                    <h3 className="text-2xl font-bold">Day 2: Mikumi to Selous & Boat Safari (B, L)</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 font-semibold">End Point: Dar es Salaam (Drop-off)</p>
                    <div className="space-y-3 text-gray-700">
                      <p>
                        <strong>Morning:</strong> Early sunrise game drive in Mikumi, then check out and drive south
                        toward Nyerere NP (approx. 4-5 hours).
                      </p>
                      <p>
                        <strong>Lunch:</strong> Picnic lunch en-route.
                      </p>
                      <p>
                        <strong>Afternoon:</strong> Arrive at Nyerere NP (Selous) for a thrilling Boat Safari on the
                        Rufiji River, searching for hippos and crocodiles.
                      </p>
                      <p>
                        <strong>Evening:</strong> Begin the drive back to Dar es Salaam for late drop-off.
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
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-brand-green mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    What's Included
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Airport/hotel pickup & drop-off
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Full board accommodation (B, L, D)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Experienced English-speaking driver/guide
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      All park entrance fees & taxes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Game drives in 4x4 vehicle
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Boat safari on Rufiji River
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Drinking water (2.5L per person per day)
                    </li>
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
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
        <section className="py-16 bg-brand-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Two-Park Adventure?</h2>
            <p className="text-xl mb-8 text-gray-300">Book now and explore Mikumi and Selous in 2 days</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <BookingModal tourName="2 Days Mikumi NP & Selous Safari">
                <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
                  Book This Tour
                </button>
              </BookingModal>
              <Link
                href="/our-itineraries"
                className="bg-white hover:bg-gray-100 text-brand-dark px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center gap-2"
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
