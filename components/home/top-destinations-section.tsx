"use client"

import Image from "next/image"
import Link from "next/link"
import { destinations } from "@/lib/sambuo-data"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export function TopDestinationsSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-brand-chocolate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
            Destinations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Explore Tanzania&apos;s Crown Jewels
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From the endless Serengeti plains to the spice-scented shores of Zanzibar, 
            discover the destinations that make Tanzania Africa&apos;s ultimate safari paradise.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              href={`/our-itineraries`}
              className={`group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Background Image */}
              <Image
                src={destination.image || "/placeholder.svg"}
                alt={destination.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate via-brand-chocolate/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                  {destination.name}
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center gap-2 text-brand-gold font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>Discover More</span>
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-brand-gold/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/our-itineraries"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-chocolate font-semibold rounded-full hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105"
          >
            View All Destinations
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
