"use client"

import Image from "next/image"
import Link from "next/link"
import { featuredTours } from "@/lib/sambuo-data"
import { BookingModal } from "@/components/booking-modal"
import { useEffect, useRef, useState } from "react"
import { Clock, MapPin, Star } from "lucide-react"

export function FeaturedItinerariesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-brand-ocean/10 rounded-full text-brand-ocean text-sm font-medium tracking-widest uppercase mb-6">
            Safari Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-chocolate mb-6">
            Curated Safari Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked itineraries designed to showcase the very best of Tanzania&apos;s 
            wildlife, landscapes, and cultural treasures.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <div
              key={tour.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Tour Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-chocolate px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Clock size={12} />
                  {tour.duration}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-chocolate px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <Star size={10} fill="currentColor" />
                  4.9
                </div>
              </div>

              {/* Tour Content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-brand-ocean text-xs font-medium mb-2">
                  <MapPin size={12} />
                  <span className="uppercase tracking-wide">Tanzania</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-brand-chocolate mb-1 line-clamp-2 group-hover:text-brand-ocean transition-colors">
                  {tour.name}
                </h3>
                <p className="text-brand-gold font-medium text-sm mb-4">{tour.subtitle}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {tour.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-brand-ocean flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="line-clamp-1">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    href={`/our-itineraries/${tour.id}`}
                    className="flex-1 bg-brand-chocolate/5 text-brand-chocolate text-center py-2.5 px-3 rounded-xl text-sm font-semibold hover:bg-brand-chocolate hover:text-white transition-all duration-300"
                  >
                    Details
                  </Link>
                  <BookingModal tourName={tour.name}>
                    <button className="flex-1 bg-brand-gold text-brand-chocolate py-2.5 px-3 rounded-xl text-sm font-semibold hover:bg-brand-gold/90 transition-all duration-300">
                      Book Now
                    </button>
                  </BookingModal>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/our-itineraries"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-chocolate text-white font-semibold rounded-full hover:bg-brand-chocolate/90 transition-all duration-300 hover:scale-105"
          >
            View All Safari Packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
