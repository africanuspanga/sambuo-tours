import type { Metadata } from "next"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { MapPin, Star, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Safari Accommodation - Hotels & Lodges | KiliSafari",
  description:
    "Browse our curated selection of accommodation across Tanzania from budget-friendly options to luxury safari lodges in Dar es Salaam, Dodoma, Iringa, Mikumi, Saadani, and Ruaha.",
}

const accommodations = [
  {
    location: "Moshi",
    properties: [
      {
        name: "Parkview Inn",
        category: "Mid-Range",
        feature: "A central, comfortable hotel with gardens and good views.",
        image: "/images/parkview-inn.jpg",
      },
      {
        name: "Kili Wonders Hotel",
        category: "Mid-Range",
        feature: "Modern hotel with stunning pool and mountain views, perfect for Kilimanjaro climbers.",
        image: "/images/kili-wonders-hotel.jpg",
      },
      {
        name: "Keys Hotel",
        category: "Mid-Range",
        feature: "Colonial-style hotel with tropical gardens, pool, and a relaxed atmosphere.",
        image: "/images/keys-hotel.webp",
      },
    ],
  },
  {
    location: "Arusha",
    properties: [
      {
        name: "Outpost Lodge",
        category: "Mid-Range",
        feature: "Relaxed lodge with a pool and gardens, close to town.",
        image: "/images/outpost-lodge.jpg",
      },
      {
        name: "Arusha Planet Lodge",
        category: "Mid-Range",
        feature: "Peaceful setting with a pool and scenic surroundings.",
        image: "/images/arusha-planet-lodge.jpg",
      },
      {
        name: "Shoki Shoki Lodge",
        category: "Budget",
        feature: "Simple, modern lodge with pool access.",
        image: "/images/shoki-shoki-lodge.webp",
      },
    ],
  },
  {
    location: "Karatu (Gateway to Ngorongoro)",
    properties: [
      {
        name: "Kudu Lodge",
        category: "Mid-Range",
        feature: "Charming lodge with pool and gardens.",
        image: "/images/kudu-lodge.jpg",
      },
      {
        name: "Karatu Safari Camp Lodge",
        category: "Budget",
        feature: "Tented camp feel with comfortable facilities.",
        image: "/images/karatu-safari-camp-lodge.jpg",
      },
      {
        name: "Crater Rim View",
        category: "Budget",
        feature: "Budget inn with views toward the crater area.",
        image: "/images/crater-rim-view.jpg",
      },
    ],
  },
  {
    location: "Near Tarangire National Park",
    properties: [
      {
        name: "Sangaiwe Tented Lodge",
        category: "Mid-Range",
        feature: "Tented camp with lake views and wildlife nearby.",
        image: "/images/sangaiwe-tented-lodge.jpg",
      },
      {
        name: "Whistling Thorn Tented Camp",
        category: "Budget",
        feature: "Eco-friendly tented camp in a natural setting.",
        image: "/images/whistling-thorn-camp.jpg",
      },
      {
        name: "Tarangire Safari Lodge",
        category: "Mid-Range",
        feature: "Classic lodge with panoramic park views.",
        image: "/images/tarangire-safari-lodge.webp",
      },
    ],
  },
  {
    location: "Near Ngorongoro Crater",
    properties: [
      {
        name: "Bougainvillea Safari Lodge",
        category: "Mid-Range",
        feature: "Spacious lodge with pool and gardens.",
        image: "/images/bougainvillea-lodge.jpg",
      },
      {
        name: "Octagon Lodge",
        category: "Mid-Range",
        feature: "Unique, peaceful lodge with character.",
        image: "/images/octagon-lodge.jpg",
      },
      {
        name: "Country Lodge Karatu",
        category: "Budget",
        feature: "Cozy lodge ideal for crater access.",
        image: "/images/country-lodge.jpg",
      },
    ],
  },
  {
    location: "Serengeti National Park",
    properties: [
      {
        name: "Ang'ata Serengeti Camp",
        category: "Mid-Range",
        feature: "Mobile tented camp following the migration.",
        image: "/images/angata-serengeti-camp.jpg",
      },
      {
        name: "Serengeti Safari Lodge",
        category: "Mid-Range",
        feature: "Hilltop lodge with views over the plains.",
        image: "/images/serengeti-safari-lodge.jpeg",
      },
      {
        name: "Budget Tented Camp",
        category: "Budget",
        feature: "Basic tented setups for an immersive experience.",
        image: "/images/budget-tented-camp.jpg",
      },
    ],
  },
  {
    location: "Dar es Salaam",
    properties: [
      {
        name: "Hyatt Regency Dar Es Salaam, The Kilimanjaro",
        category: "Luxury",
        feature: "Central, iconic city hotel with superb service and views.",
        image: "/images/hyatt-regency.webp",
        disclaimer: "Additional costs may apply for this premium property.",
      },
      {
        name: "Seashells Millennium Hotel",
        category: "Mid-Range",
        feature: "Comfortable and popular option in a convenient city location.",
        image: "/images/seashells-millennium.jpg",
        disclaimer: "Additional costs may apply.",
      },
      {
        name: "Transit Motel Airport",
        category: "Budget",
        feature: "Excellent budget choice, especially for travelers needing an early airport departure/arrival.",
        image: "/images/transit-motel.jpg",
      },
    ],
  },
  {
    location: "Dodoma",
    properties: [
      {
        name: "Best Western Dodoma City Hotel",
        category: "Mid-Range/Luxury",
        feature: "Reputable international brand offering modern comfort and amenities (like a pool).",
        image: "/images/best-western-dodoma.jpg",
        disclaimer: "Additional costs may apply for this premium property.",
      },
      {
        name: "New Dodoma Hotel",
        category: "Budget",
        feature: "A long-standing, affordable hotel offering a good central base in the capital.",
        image: "/images/new-dodoma-hotel.jpg",
      },
    ],
  },
  {
    location: "Iringa",
    properties: [
      {
        name: "Zakinn Hotel Gangilonga",
        category: "Mid-Range",
        feature: "Well-located, clean, and comfortable—a great value-for-money choice in Iringa Town.",
        image: "/images/zakinn-hotel-new.webp",
        disclaimer: "Additional costs may apply.",
      },
      {
        name: "Hidden Valley Backpackers",
        category: "Budget/Hostel",
        feature: "Highly-rated, very social budget option with great views for the solo or budget traveler.",
        image: "/images/hidden-valley.jpg",
      },
    ],
  },
  {
    location: "Mikumi National Park Area",
    properties: [
      {
        name: "Camp Bastian Mikumi",
        category: "Budget/Mid-Range",
        feature: "Often used for transfer/day-trip lunch. Great value with a pool, just outside the park gate.",
        image: "/images/camp-bastian.jpg",
      },
      {
        name: "Tan-Swiss Lodge",
        category: "Budget",
        feature: "A highly-recommended and clean lodge, great for the budget traveler and known for good food.",
        image: "/images/tan-swiss-lodge.jpg",
      },
      {
        name: "Mikumi Safari Lodge",
        category: "Mid-Range",
        feature: "Offers a more traditional lodge feel with comfortable facilities close to the park.",
        image: "/images/mikumi-safari-lodge.jpg",
        disclaimer: "Additional costs may apply.",
      },
      {
        name: "Mikumi Adventure Lodge",
        category: "Budget",
        feature: "Budget to mid-range facility near the southern gate, offering room and camping options.",
        image: "/images/mikumi-adventure-lodge.jpg",
      },
      {
        name: "Sifa Safari Lodge and Campsite",
        category: "Budget",
        feature:
          "A pocket-friendly lodge with a pool, located outside the main gate, ideal for self-drive or budget group tours.",
        image: "/images/sifa-safari-lodge.jpg",
      },
    ],
  },
  {
    location: "Saadani National Park Area",
    properties: [
      {
        name: "Sanctuary Saadani River Lodge",
        category: "Luxury",
        feature: "High-end experience with views over the Wami River, perfect for luxury clients.",
        image: "/images/sanctuary-saadani.jpg",
        disclaimer: "Additional costs may apply for this premium property.",
      },
      {
        name: "Simply Saadani Camp",
        category: "Mid-Range",
        feature: 'Offers a fantastic "bush meets beach" experience at a great value.',
        image: "/images/simply-saadani.jpg",
        disclaimer: "Additional costs may apply.",
      },
      {
        name: "MISENI RETREAT",
        category: "Budget",
        feature: "A more basic, budget-friendly option in the area, offering a clean place to stay.",
        image: "/images/miseni-retreat.webp",
      },
    ],
  },
  {
    location: "Ruaha National Park Area",
    properties: [
      {
        name: "Jabali Ridge",
        category: "Luxury",
        feature: "Iconic, stylish luxury camp set on a rocky kopje with incredible panoramic views.",
        image: "/images/jabali-ridge.jpg",
        disclaimer: "Additional costs may apply for this premium property.",
      },
      {
        name: "Ruaha River Lodge (Foxes Safari Camps)",
        category: "Mid-Range",
        feature: "Fantastic location right on the Great Ruaha River, offering prime wildlife viewing from the deck.",
        image: "/images/ruaha-river-lodge.webp",
        disclaimer: "Additional costs may apply.",
      },
      {
        name: "Mdonya Old River Tented Camp",
        category: "Budget",
        feature: "Considered a great value camp in Ruaha, offering an authentic, classic safari tent experience.",
        image: "/images/mdonya-old-river.webp",
      },
    ],
  },
]

export default function AccommodationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hyatt-regency.webp"
            alt="Luxury accommodation in Tanzania"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Your Perfect Safari Stay</h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            From luxury lodges to budget-friendly camps, we offer handpicked accommodation across Tanzania to suit every
            traveler's style and budget.
          </p>
        </div>
      </section>

      {/* Accommodations by Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {accommodations.map((locationGroup, idx) => (
            <div key={idx} className={idx > 0 ? "mt-20" : ""}>
              {/* Location Header */}
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-8 h-8 text-brand-orange" />
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">{locationGroup.location}</h2>
              </div>

              {/* Properties Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {locationGroup.properties.map((property, propIdx) => (
                  <div
                    key={propIdx}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      {property.image ? (
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.name}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <span className="text-sm">Image coming soon</span>
                        </div>
                      )}
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-brand-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {property.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2">{property.name}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{property.feature}</p>

                      {/* Disclaimer */}
                      {property.disclaimer && (
                        <p className="text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-md mb-4 leading-snug">
                          {property.disclaimer}
                        </p>
                      )}

                      {/* Features */}
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>Verified Partner</span>
                      </div>

                      <BookingModal tourName={`${property.name} - ${locationGroup.location}`}>
                        <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3.5 px-6 rounded-lg font-semibold text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]">
                          Book Now
                        </button>
                      </BookingModal>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our travel experts are here to help you find the perfect accommodation for your Tanzania adventure. Get
            personalized recommendations based on your budget and preferences.
          </p>

          <BookingModal tourName="Accommodation Consultation">
            <button className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]">
              <Phone className="w-5 h-5" />
              Get Expert Advice
            </button>
          </BookingModal>

          <p className="mt-6 text-gray-400">
            Or call us directly:{" "}
            <a href="tel:+255769418702" className="text-brand-orange hover:underline">
              +255 769 418 702
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
