import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, ArrowRight } from "lucide-react"
import { BookingModal } from "@/components/booking-modal"

const featuredAccommodations = [
  {
    name: "Hyatt Regency Dar Es Salaam",
    location: "Dar es Salaam",
    category: "Luxury",
    description:
      "Central, iconic city hotel with superb service and views. Experience world-class hospitality in Tanzania's bustling commercial capital.",
    image: "/images/hyatt-regency.webp",
  },
  {
    name: "Best Western Dodoma City Hotel",
    location: "Dodoma",
    category: "Mid-Range/Luxury",
    description:
      "Reputable international brand offering modern comfort and amenities including a refreshing pool, perfect for your capital city stay.",
    image: "/images/best-western-dodoma.jpg",
  },
  {
    name: "Mdonya Old River Tented Camp",
    location: "Ruaha National Park",
    category: "Budget",
    description:
      "Great value camp in Ruaha, offering an authentic, classic safari tent experience with incredible wildlife viewing opportunities.",
    image: "/images/mdonya-old-river.webp",
  },
]

export function FeaturedAccommodationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">Featured Accommodation</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From luxury city hotels to authentic safari camps, we've handpicked the finest places to stay across
            Tanzania
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredAccommodations.map((accommodation, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={accommodation.image || "/placeholder.svg"}
                  alt={accommodation.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {accommodation.category}
                </div>
                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2 shadow-md">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span className="text-sm font-semibold text-brand-dark">{accommodation.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-dark mb-3 leading-tight">{accommodation.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{accommodation.description}</p>

                {/* Features */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>Verified Partner</span>
                </div>

                <BookingModal tourName={`${accommodation.name} - ${accommodation.location}`}>
                  <button className="w-full bg-brand-orange text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand-orange/90 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]">
                    Book Now
                  </button>
                </BookingModal>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/accommodation"
            className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-dark/90 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            View All Accommodation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
