import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { BookingModal } from "@/components/booking-modal"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Southern Circuit Safari Itineraries | KiliSafari",
  description:
    "Explore our Southern Tanzania safari packages from 1 to 6 days. Visit Mikumi, Selous, and Ruaha National Parks with expert guides.",
}

const tours = [
  {
    id: "1-day-mikumi",
    name: "1 Day Safari to Mikumi NP",
    subtitle: "The Dar Escape",
    duration: "1 Day",
    priceFrom: 790,
    priceRange: "$325-790",
    image: "/images/tour-baobab.jpg",
    highlights: [
      "Perfect day trip from Dar es Salaam",
      "Mkata Floodplain game viewing",
      "Elephants, zebras, giraffes & lions",
      "African wild dogs sightings possible",
    ],
  },
  {
    id: "1-day-selous",
    name: "1 Day Safari to Selous (Nyerere NP)",
    subtitle: "The Ultimate Day Trip",
    duration: "1 Day",
    priceFrom: 720,
    priceRange: "$290-720",
    image: "/images/tour-zebras.jpg",
    highlights: [
      "Experience Africa's largest park",
      "Boat safari on Rufiji River",
      "Huge elephant herds",
      "Hippos & massive crocodiles",
    ],
  },
  {
    id: "1-day-ruaha-dodoma",
    name: "1 Day Safari to Ruaha NP from Dodoma",
    subtitle: "The Capital City Escape",
    duration: "1 Day",
    priceFrom: 775,
    priceRange: "$325-775",
    image: "/images/tour-ruaha-buffalo.jpg",
    highlights: [
      "Adventure from Tanzania's capital",
      "Great Ruaha River wildlife",
      "Massive elephant herds",
      "Greater Kudu & Lion prides",
    ],
  },
  {
    id: "1-day-ruaha-iringa",
    name: "1 Day Safari to Ruaha NP from Iringa",
    subtitle: "The Shortest Route",
    duration: "1 Day",
    priceFrom: 566,
    priceRange: "$258-566",
    image: "/images/tour-ruaha-buffalo.jpg",
    highlights: [
      "Most efficient Ruaha access",
      "African Wild Dogs & Cheetahs",
      "Sable & Roan antelopes",
      "Less crowded viewing",
    ],
  },
  {
    id: "1-day-saadani",
    name: "1 Day Safari to Saadani NP from Dar es Salaam",
    subtitle: "Bush Meets Beach",
    duration: "1 Day",
    priceFrom: 680,
    priceRange: "$300-680",
    image: "/images/tour-saadani-beach.jpg",
    highlights: [
      "Tanzania's only coastal park",
      "Beach & bush combination",
      "Wami River boat safari",
      "Hippos, crocodiles & water birds",
    ],
  },
  {
    id: "2-days-saadani-mikumi",
    name: "2 Days 1 Night: Saadani NP & Mikumi NP",
    subtitle: "The Northern Cross-Over",
    duration: "2 Days / 1 Night",
    priceFrom: 1085,
    priceRange: "$412-1,085",
    image: "/images/tour-saadani-giraffes.jpg",
    highlights: [
      "Two major parks in 2 days",
      "Coastal & inland wildlife",
      "Mkata Plains exploration",
      "Maximum diversity short tour",
    ],
  },
  {
    id: "2-days-mikumi-selous",
    name: "2 Days 1 Night: Mikumi & Selous",
    subtitle: "The Two-Park Taster",
    duration: "2 Days / 1 Night",
    priceFrom: 969,
    priceRange: "$385-969",
    image: "/images/tour-elephants.jpg",
    highlights: [
      "Two iconic Southern parks",
      "Mkata Plains exploration",
      "Rufiji River boat safari",
      "Full board accommodation",
    ],
  },
  {
    id: "3-days-southern-circuit",
    name: "3 Days 2 Nights: Mikumi & Selous",
    subtitle: "The Classic Combo",
    duration: "3 Days / 2 Nights",
    priceFrom: 1210,
    priceRange: "$495-1,210",
    image: "/images/tour-crocodile.jpg",
    highlights: [
      "Extended game viewing time",
      "Multiple boat safaris",
      "Walking safari option",
      "African wild dog tracking",
    ],
  },
  {
    id: "4-days-mikumi-selous",
    name: "4 Days 3 Nights: Mikumi & Selous",
    subtitle: "The Deep Dive",
    duration: "4 Days / 3 Nights",
    priceFrom: 1404,
    priceRange: "$776-1,404",
    image: "/images/tour-buffalo.jpg",
    highlights: [
      "Comprehensive Southern Circuit",
      "Full day in Selous",
      "Guided walking safaris",
      "Best for wildlife photography",
    ],
  },
  {
    id: "5-days-complete-south",
    name: "5 Days 4 Nights: Mikumi, Selous & Ruaha",
    subtitle: "The Grand Adventure",
    duration: "5 Days / 4 Nights",
    priceFrom: 2218,
    priceRange: "$965-2,218",
    image: "/images/tour-lion.jpg",
    highlights: [
      "Three major Southern parks",
      "Includes flight to Ruaha",
      "Greater Kudu & Roan Antelope",
      "Massive lion prides",
    ],
  },
  {
    id: "6-days-ultimate-south",
    name: "6 Days 5 Nights: Ultimate Southern Circuit",
    subtitle: "The Complete Experience",
    duration: "6 Days / 5 Nights",
    priceFrom: 2499,
    priceRange: "$1,085-2,499",
    image: "/images/tour-giraffes.jpg",
    highlights: [
      "Ultimate wildlife experience",
      "Two full days in Ruaha",
      "Walking safaris included",
      "Best value for time & money",
    ],
  },
]

export default function OurItinerariesPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-brand-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Southern Circuit Safari Adventures</h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Discover Tanzania's hidden gem - the Southern Circuit. Experience untouched wilderness, diverse
                activities including boat and walking safaris, and encounter incredible wildlife with far fewer crowds
                than the Northern parks.
              </p>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Tour Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-brand-orange text-white px-4 py-2 rounded-full font-semibold">
                      {tour.duration}
                    </div>
                  </div>

                  {/* Tour Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">{tour.name}</h3>
                    <p className="text-brand-orange font-semibold mb-4">{tour.subtitle}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <svg
                            className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-600">From</span>
                        <span className="text-3xl font-bold text-brand-orange">${tour.priceFrom}</span>
                        <span className="text-sm text-gray-600">per person</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Price range: {tour.priceRange}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/our-itineraries/${tour.id}`}
                        className="flex-1 bg-brand-dark text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                      >
                        View Details
                      </Link>
                      <BookingModal tourName={tour.name}>
                        <button className="flex-1 bg-brand-orange text-white py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap">
                          Book Tour
                        </button>
                      </BookingModal>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
                What's Included in Your Safari
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Included */}
                <div className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-2xl font-bold text-brand-green mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Included
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Airport pickup & drop-off
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Full board accommodation (Breakfast, Lunch, Dinner)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Experienced English-speaking driver/guide
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      All park entrance fees & government taxes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Extensive game drives in 4x4 with pop-up roof
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      2.5L drinking water per person per day
                    </li>
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-white p-8 rounded-lg shadow">
                  <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Not Included
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
                      Tips & gratuities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Optional activities (balloon safari, etc.)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Personal items & laundry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
