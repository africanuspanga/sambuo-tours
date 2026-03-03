"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Palmtree, Umbrella, Waves, Utensils } from "lucide-react"

const features = [
  { icon: Palmtree, text: "Pristine white-sand beaches" },
  { icon: Waves, text: "Crystal-clear turquoise waters" },
  { icon: Utensils, text: "Exotic spice tours" },
  { icon: Umbrella, text: "Luxury beach resorts" },
]

export function ZanzibarSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-brand-ocean/10 rounded-full text-brand-ocean text-sm font-medium tracking-widest uppercase mb-6">
              Beach Paradise
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-chocolate mb-6 leading-tight">
              Zanzibar: The Spice Island
              <span className="block text-brand-ocean mt-2">Awaits</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              After the thrill of safari, unwind on Zanzibar&apos;s legendary beaches. 
              This exotic archipelago offers powder-white sands, warm turquoise waters, 
              and a rich cultural tapestry woven from African, Arab, and European influences.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Explore the UNESCO-listed Stone Town, embark on a spice plantation tour, 
              snorkel vibrant coral reefs, or simply relax under a palm tree with the 
              Indian Ocean breeze. Zanzibar is the perfect finale to your Tanzanian adventure.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-10 h-10 bg-brand-ocean/10 rounded-lg flex items-center justify-center">
                    <feature.icon size={18} className="text-brand-ocean" />
                  </div>
                  <span className="text-sm font-medium text-brand-chocolate">{feature.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/zanzibar"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-ocean text-white font-semibold rounded-full hover:bg-brand-ocean/90 transition-all duration-300 hover:scale-105"
            >
              Explore Zanzibar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/zanzibar-beach-paradise.jpg"
                  alt="Zanzibar beach paradise"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 md:left-8 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-brand-ocean/10 rounded-full flex items-center justify-center">
                    <Waves size={24} className="text-brand-ocean" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-brand-chocolate">26°C</div>
                    <div className="text-sm text-gray-600">Average Temperature</div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-brand-ocean/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
