import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { BookingModal } from "@/components/booking-modal"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { southernTours, northernTours, company } from "@/lib/sambuo-data"
import { Clock, MapPin, Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: `Safari Itineraries | ${company.name}`,
  description:
    "Explore our Tanzania safari packages from 1 to 8 days. Visit Serengeti, Ngorongoro, Tarangire, Manyara, Mikumi, Selous, and Ruaha with expert guides from SAMBUO TOURS.",
}

export default function OurItinerariesPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        {/* Hero Section */}
        <section className="relative bg-brand-chocolate text-white pt-32 pb-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/images/serengeti.jpg')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
                Safari Packages
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Tanzania Safari Adventures
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Discover the best of Tanzania with our carefully crafted safari packages. 
                From the iconic Serengeti and Ngorongoro Crater to the untouched wilderness 
                of the Southern Circuit, we offer experiences for every traveler.
              </p>
            </div>
          </div>
        </section>

        {/* Southern Circuit Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-brand-ocean/10 rounded-full text-brand-ocean text-sm font-medium tracking-widest uppercase mb-4">
                Southern Tanzania
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-4">
                Southern Circuit Safaris
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover Tanzania&apos;s hidden gem with our Southern Circuit packages. 
                Experience untouched wilderness, diverse activities including boat and 
                walking safaris, and encounter incredible wildlife with far fewer crowds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {southernTours.map((tour) => (
                <div
                  key={tour.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  {/* Tour Image */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-chocolate px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1.5">
                      <Clock size={14} />
                      {tour.duration}
                    </div>
                  </div>

                  {/* Tour Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-brand-ocean text-xs font-medium mb-2 uppercase tracking-wide">
                      <MapPin size={12} />
                      Tanzania
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-2 leading-tight group-hover:text-brand-ocean transition-colors">
                      {tour.name}
                    </h3>
                    <p className="text-brand-gold font-medium text-sm mb-4">{tour.subtitle}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={16} className="text-brand-ocean flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-500">From</span>
                        <span className="text-3xl font-serif font-bold text-brand-chocolate">${tour.priceFrom}</span>
                        <span className="text-sm text-gray-500">per person</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Price range: {tour.priceRange}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/our-itineraries/${tour.id}`}
                        className="flex-1 bg-brand-chocolate/5 text-brand-chocolate text-center py-3 px-4 rounded-xl font-semibold hover:bg-brand-chocolate hover:text-white transition-all duration-300"
                      >
                        View Details
                      </Link>
                      <BookingModal tourName={tour.name}>
                        <button className="flex-1 bg-brand-gold text-brand-chocolate py-3 px-4 rounded-xl font-semibold hover:bg-brand-gold/90 transition-all duration-300">
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

        {/* Northern Circuit Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-4">
                Northern Tanzania
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-4">
                Northern Circuit Safaris
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience the world-famous Serengeti, Ngorongoro Crater, and Tarangire 
                with our Northern Circuit packages. Choose between comfortable camping 
                or mid-range lodge accommodations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {northernTours.map((tour) => (
                <div
                  key={tour.id}
                  className="group bg-brand-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-brand-sand"
                >
                  {/* Tour Image */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-brand-gold text-brand-chocolate px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1.5">
                      <Clock size={14} />
                      {tour.duration}
                    </div>
                  </div>

                  {/* Tour Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-brand-ocean text-xs font-medium mb-2 uppercase tracking-wide">
                      <MapPin size={12} />
                      Tanzania
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-2 leading-tight group-hover:text-brand-ocean transition-colors">
                      {tour.name}
                    </h3>
                    <p className="text-brand-gold font-medium text-sm mb-4">{tour.subtitle}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={16} className="text-brand-ocean flex-shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Prices */}
                    <div className="mb-6 pb-6 border-b border-brand-sand">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                          <p className="text-xs text-gray-500 mb-1">Camping</p>
                          <p className="text-xl font-serif font-bold text-brand-ocean">${tour.campingPrice}</p>
                          <p className="text-xs text-gray-400">per person</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                          <p className="text-xs text-gray-500 mb-1">Lodge</p>
                          <p className="text-xl font-serif font-bold text-brand-gold">${tour.lodgePrice}</p>
                          <p className="text-xs text-gray-400">per person</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/our-itineraries/${tour.id}`}
                        className="flex-1 bg-brand-chocolate/5 text-brand-chocolate text-center py-3 px-4 rounded-xl font-semibold hover:bg-brand-chocolate hover:text-white transition-all duration-300"
                      >
                        View Details
                      </Link>
                      <BookingModal tourName={tour.name}>
                        <button className="flex-1 bg-brand-gold text-brand-chocolate py-3 px-4 rounded-xl font-semibold hover:bg-brand-gold/90 transition-all duration-300">
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
        <section className="py-16 md:py-24 bg-brand-chocolate text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
                What&apos;s Included in Your Safari
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Included */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-serif font-bold text-brand-gold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center">
                      <Check size={20} className="text-brand-gold" />
                    </div>
                    Safari Package Inclusions
                  </h3>
                  <ul className="space-y-4 text-white/80">
                    {[
                      "All park entrance fees",
                      "Ngorongoro Crater service fees",
                      "Professional English-speaking guide",
                      "Hotel pick-up and drop-off",
                      "4x4 safari vehicle with viewing roof",
                      "Chef and driver salaries",
                      "Camping equipment (tents, mattresses, chairs)",
                      "Three meals per day during safari",
                      "Drinking water (1.5L per person daily)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <h3 className="text-2xl font-serif font-bold text-white/60 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <X size={20} className="text-white/60" />
                    </div>
                    Package Exclusions
                  </h3>
                  <ul className="space-y-4 text-white/60">
                    {[
                      "Tips for guide and chef (recommended)",
                      "Meals outside the regular itinerary",
                      "Travel and medical insurance",
                      "Tanzania visa fees",
                      "International flights",
                      "Single room supplement",
                      "Personal expenses and souvenirs",
                      "Alcoholic beverages",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <X size={18} className="flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">
              Ready to Start Your Safari?
            </h2>
            <p className="text-lg text-brand-chocolate/80 mb-8 max-w-2xl mx-auto">
              Contact us today to customize your perfect Tanzania safari adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookingModal tourName="Custom Safari Inquiry">
                <button className="bg-brand-chocolate text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-chocolate/90 transition-all duration-300 hover:scale-105">
                  Plan Your Safari
                </button>
              </BookingModal>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 border-brand-chocolate text-brand-chocolate hover:bg-brand-chocolate hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
