import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { BookingModal } from "@/components/booking-modal"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Safari Itineraries | KiliSafari",
  description:
    "Explore our Tanzania safari packages from 1 to 8 days. Visit Serengeti, Ngorongoro, Tarangire, Manyara, Mikumi, Selous, and Ruaha with expert guides.",
}

const northernTours = [
  {
    id: "2-days-tarangire-ngorongoro",
    name: "2 Days: Tarangire & Ngorongoro Crater",
    subtitle: "The Perfect Short Safari",
    duration: "2 Days / 1 Night",
    lodgePrice: 700,
    campingPrice: 526,
    image: "/images/safari-2-days.jpg",
    highlights: [
      "Tarangire's famous elephant herds",
      "Ngorongoro Crater game drive",
      "Big Five opportunities",
      "Ideal for limited time",
    ],
  },
  {
    id: "3-days-tarangire-ngorongoro-manyara",
    name: "3 Days: Tarangire, Ngorongoro & Manyara",
    subtitle: "The Classic Northern Trio",
    duration: "3 Days / 2 Nights",
    lodgePrice: 1558,
    campingPrice: 628,
    image: "/images/safari-3-days.jpg",
    highlights: [
      "Three iconic Northern parks",
      "Ngorongoro Crater floor exploration",
      "Tree-climbing lions of Manyara",
      "Diverse landscapes & wildlife",
    ],
  },
  {
    id: "4-days-tarangire-serengeti-ngorongoro",
    name: "4 Days: Tarangire, Serengeti & Ngorongoro",
    subtitle: "The Serengeti Introduction",
    duration: "4 Days / 3 Nights",
    lodgePrice: 1850,
    campingPrice: 1000,
    image: "/images/safari-4-days.jpg",
    highlights: [
      "Full day in the Serengeti",
      "Great Migration possibilities",
      "Ngorongoro Crater descent",
      "Maasai cultural experience",
    ],
  },
  {
    id: "5-days-tarangire-serengeti-ngorongoro",
    name: "5 Days: Tarangire, Serengeti (2N) & Ngorongoro",
    subtitle: "The Extended Serengeti Experience",
    duration: "5 Days / 4 Nights",
    lodgePrice: 2820,
    campingPrice: 1350,
    image: "/images/safari-5-days.jpg",
    highlights: [
      "Two nights in the Serengeti",
      "Extended game viewing time",
      "Big cats & wildebeest herds",
      "Maasai village visit included",
    ],
  },
  {
    id: "6-days-tarangire-ngorongoro-serengeti-manyara",
    name: "6 Days: Tarangire, Ngorongoro, Serengeti (2N) & Manyara",
    subtitle: "The Comprehensive Northern Safari",
    duration: "6 Days / 5 Nights",
    lodgePrice: 3265,
    campingPrice: 1600,
    image: "/images/safari-6-days.jpg",
    highlights: [
      "Four major Northern parks",
      "Two full days in Serengeti",
      "Flamingos at Lake Manyara",
      "Complete wildlife experience",
    ],
  },
  {
    id: "7-days-arusha-tarangire-manyara-serengeti-ngorongoro",
    name: "7 Days: Arusha NP, Tarangire, Manyara, Serengeti (2N) & Ngorongoro",
    subtitle: "The Grand Northern Circuit",
    duration: "7 Days / 6 Nights",
    lodgePrice: 3800,
    campingPrice: 1850,
    image: "/images/safari-7-days.jpg",
    highlights: [
      "Five diverse national parks",
      "Walking safari in Arusha NP",
      "Momella Lakes & Mount Meru views",
      "Ultimate wildlife diversity",
    ],
  },
  {
    id: "8-days-arusha-tarangire-manyara-serengeti-ngorongoro",
    name: "8 Days: Arusha NP, Tarangire, Manyara, Serengeti (3N) & Ngorongoro",
    subtitle: "The Ultimate Tanzania Safari",
    duration: "8 Days / 7 Nights",
    lodgePrice: 4200,
    campingPrice: 2100,
    image: "/images/safari-8-days.jpg",
    highlights: [
      "Three nights in Serengeti",
      "Maximum wildlife encounters",
      "All major Northern parks",
      "Best value comprehensive tour",
    ],
  },
]

const southernTours = [
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Tanzania Safari Adventures</h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Discover the best of Tanzania with our carefully crafted safari packages. From the iconic Serengeti and
                Ngorongoro Crater to the untouched wilderness of the Southern Circuit, we offer experiences for every
                traveler.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Southern Circuit Safaris</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover Tanzania's hidden gem with our Southern Circuit packages. Experience untouched wilderness,
                diverse activities including boat and walking safaris, and encounter incredible wildlife with far fewer
                crowds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {southernTours.map((tour) => (
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
                    <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark px-4 py-2 rounded-full font-semibold text-sm">
                      {tour.duration}
                    </div>
                  </div>

                  {/* Tour Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-2 leading-tight">{tour.name}</h3>
                    <p className="text-brand-green font-semibold mb-4">{tour.subtitle}</p>

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
                        <span className="text-3xl font-bold text-brand-yellow">${tour.priceFrom}</span>
                        <span className="text-sm text-gray-600">per person</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Price range: {tour.priceRange}</p>
                    </div>

                    {/* Action Buttons - yellow brand color for Book Now */}
                    <div className="flex gap-3">
                      <Link
                        href={`/our-itineraries/${tour.id}`}
                        className="flex-1 bg-brand-dark text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                      >
                        View Details
                      </Link>
                      <BookingModal tourName={tour.name}>
                        <button className="flex-1 bg-brand-yellow text-brand-dark py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap">
                          Book Now
                        </button>
                      </BookingModal>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Northern Circuit Safaris</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the world-famous Serengeti, Ngorongoro Crater, and Tarangire with our Northern Circuit
                packages. Choose between comfortable camping or mid-range lodge accommodations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {northernTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark px-4 py-2 rounded-full font-semibold text-sm">
                      {tour.duration}
                    </div>
                  </div>

                  {/* Tour Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-dark mb-2 leading-tight">{tour.name}</h3>
                    <p className="text-brand-green font-semibold mb-4">{tour.subtitle}</p>

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

                    {/* Prices */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Camping</p>
                          <p className="text-xl font-bold text-brand-green">${tour.campingPrice}</p>
                          <p className="text-xs text-gray-500">per person</p>
                        </div>
                        <div className="text-center p-3 bg-amber-50 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Lodge</p>
                          <p className="text-xl font-bold text-brand-yellow">${tour.lodgePrice}</p>
                          <p className="text-xs text-gray-500">per person</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - yellow brand color for Book Now */}
                    <div className="flex gap-3">
                      <Link
                        href={`/our-itineraries/${tour.id}`}
                        className="flex-1 bg-brand-dark text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                      >
                        View Details
                      </Link>
                      <BookingModal tourName={tour.name}>
                        <button className="flex-1 bg-brand-yellow text-brand-dark py-3 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap">
                          Book Now
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-12">
                What's Included in Your Safari
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Included */}
                <div className="bg-green-50 p-8 rounded-lg border-l-4 border-brand-green">
                  <h3 className="text-2xl font-bold text-brand-green mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Safari Package Inclusions
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      All park fees
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Ngorongoro Crater fees
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Hotel pick-up and drop-off
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Transportation in 4x4 vehicles with viewing roof and qualified driver/guide
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Salary for cook and driver
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Camping equipment (for camping safaris): tent, table, chairs, sleeping mattress, cooking gas
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>3 meals per day during the safari
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-green mt-1">✓</span>
                      Bottled water/drinks (1.5 liters per person on the first day)
                    </li>
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Safari Package Exclusions
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Tips for driver and cook
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Meals outside the regular itinerary
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Medical/evacuation trip insurance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      International visa for Tanzania
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Airfares and airport taxes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      Single room supplement for hotels
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Safari?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to customize your perfect Tanzania safari adventure.
            </p>
            <BookingModal tourName="Custom Safari Inquiry">
              <button className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors">
                Plan Your Safari
              </button>
            </BookingModal>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
