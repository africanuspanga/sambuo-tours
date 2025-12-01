import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingModal } from "@/components/booking-modal"

const featuredTours = [
  {
    id: "1-day-mikumi",
    name: "1 Day Safari to Mikumi NP",
    subtitle: "The Dar Escape",
    duration: "1 Day",
    priceFrom: 790,
    image: "/images/tour-baobab.jpg",
    highlights: ["Perfect day trip from Dar es Salaam", "Elephants, zebras, giraffes & lions"],
  },
  {
    id: "3-days-southern-circuit",
    name: "3 Days 2 Nights: Mikumi & Selous",
    subtitle: "The Classic Combo",
    duration: "3 Days / 2 Nights",
    priceFrom: 1210,
    image: "/images/tour-crocodile.jpg",
    highlights: ["Multiple boat safaris", "African wild dog tracking"],
  },
  {
    id: "1-day-saadani",
    name: "1 Day Safari to Saadani NP",
    subtitle: "Bush Meets Beach",
    duration: "1 Day",
    priceFrom: 680,
    image: "/images/tour-saadani-beach.jpg",
    highlights: ["Tanzania's only coastal park", "Beach & bush combination"],
  },
  {
    id: "5-days-complete-south",
    name: "5 Days 4 Nights: Mikumi, Selous & Ruaha",
    subtitle: "The Grand Adventure",
    duration: "5 Days / 4 Nights",
    priceFrom: 2218,
    image: "/images/tour-lion.jpg",
    highlights: ["Three major Southern parks", "Massive lion prides"],
  },
]

export function FeaturedItinerariesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Featured Safari Itineraries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular Southern Circuit safari packages. From single-day adventures to extended
            expeditions across Tanzania's wildest parks.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Tour Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {tour.duration}
                </div>
              </div>

              {/* Tour Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-dark mb-1 line-clamp-2">{tour.name}</h3>
                <p className="text-brand-orange font-semibold text-sm mb-3">{tour.subtitle}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-4">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                      <svg
                        className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5"
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
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs text-gray-600">From</span>
                    <span className="text-2xl font-bold text-brand-orange">${tour.priceFrom}</span>
                    <span className="text-xs text-gray-600">pp</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/our-itineraries/${tour.id}`}
                    className="w-full bg-brand-dark text-white text-center py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    View Details
                  </Link>
                  <BookingModal tourName={tour.name}>
                    <button className="w-full bg-brand-orange text-white py-2.5 px-4 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors">
                      Book Tour
                    </button>
                  </BookingModal>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 text-lg font-semibold"
          >
            <Link href="/our-itineraries">View All Itineraries</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
