import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
export const metadata: Metadata = {
  title: `1 Day Saadani Safari from Dar es Salaam | Sambuo Tours`,
  description:
    "Tanzania's only park bordering the Indian Ocean. A unique day trip offering a rare combination of bush game drives and coastal wildlife.",
}

export default function SaadaniPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src="/images/tour-saadani-beach.jpg"
            alt="Saadani National Park from Dar es Salaam"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                1 Day Safari to Saadani NP from Dar es Salaam
              </h1>
              <p className="text-xl md:text-2xl">Bush Meets Beach</p>
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
                <div className="text-3xl font-bold text-brand-gold">$680</div>
                <div className="text-sm text-gray-300">Starting Price (1 pax)</div>
              </div>
              <div>
                <div className="text-3xl font-bold">1 Day</div>
                <div className="text-sm text-gray-300">Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold">Beach & Bush</div>
                <div className="text-sm text-gray-300">Unique Experience</div>
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
                Saadani is Tanzania's only park bordering the Indian Ocean. A unique day trip offering a rare
                combination of bush game drives and coastal wildlife. Experience the extraordinary sight of wildlife
                against the backdrop of the ocean, including giraffes and elephants that sometimes venture onto the
                beach. The Wami River boat safari adds another dimension to this incredible coastal safari experience.
              </p>
            </section>

            {/* Detailed Itinerary */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-chocolate mb-8">Detailed Itinerary</h2>

              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      05:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Early Morning Pickup & Departure</h3>
                      <p className="text-gray-700">
                        Your guide will pick you up from your Dar es Salaam hotel. Begin the drive (approx. 4-5 hours)
                        north via the coastal route to Saadani National Park. Enjoy views of the Indian Ocean and rural
                        coastal villages along the way.
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
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Arrival & Morning Game Drive</h3>
                      <p className="text-gray-700">
                        Enter the park and immediately begin your game drive. Saadani is known for wildlife spotting
                        near the beach, including giraffes and elephants that sometimes venture onto the sand. Look out
                        for waterbuck, warthogs, and the rare Roosevelt's sable antelope.
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
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Picnic Lunch on the Beach</h3>
                      <p className="text-gray-700">
                        Enjoy a packed lunch at a scenic spot near the Indian Ocean coastline. Feel the ocean breeze
                        while dining in this unique setting where the beach meets the bush.
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
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Wami River Boat Safari</h3>
                      <p className="text-gray-700">
                        Embark on a spectacular boat trip on the Wami River. This river is packed with wildlife,
                        including large pods of Hippos, Crocodiles, and a huge variety of water birds including
                        kingfishers, fish eagles, and flamingos. This is often the highlight of the day!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-gold">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-gold text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      16:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Departure to Dar es Salaam</h3>
                      <p className="text-gray-700">
                        Conclude your boat safari and begin the return drive to Dar es Salaam via the coastal route.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-ocean">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-ocean text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">
                      21:00
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-chocolate mb-2">Late Evening Drop-off</h3>
                      <p className="text-gray-700">Arrive back in Dar es Salaam and transfer to your hotel.</p>
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
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$680</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">2 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$434</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">3 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$334</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold">4 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$305</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-brand-gold/5">
                      <td className="py-4 px-6 font-semibold">5-10 People</td>
                      <td className="py-4 px-6 text-right text-brand-gold font-bold text-lg">$300</td>
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
                      <span className="text-brand-ocean mt-1">✓</span>
                      Wami River boat safari
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Saadani?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your adventure from Dar es Salaam and discover where the bush meets the beach
              </p>
              <BookingModal tourName="1 Day Safari to Saadani NP from Dar es Salaam">
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
