"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Car, Shield, Users } from "lucide-react"

export function LandCruiserSection() {
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

  const features = [
    {
      icon: Car,
      title: "4x4 Capability",
      description: "Navigate any terrain with confidence",
    },
    {
      icon: Users,
      title: "Spacious & Comfortable",
      description: "Plenty of room for your group and gear",
    },
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "Professionally maintained for your safety",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-brand-chocolate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/4x4 land cruiser .jpg"
                alt="4x4 Land Cruiser Safari Vehicle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-chocolate p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-black">4x4</p>
              <p className="text-sm font-semibold">Land Cruiser</p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
              Our Safari Vehicles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Your Adventure Ride Awaits
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              This is what you will be riding on your safari with Sambuo Tours. Our fleet of 
              well-maintained 4x4 Land Cruisers is specifically designed for African safari 
              adventures, ensuring you have the best viewing experience while traveling in comfort 
              and safety.
            </p>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Each vehicle features a pop-up roof for unobstructed wildlife viewing, large windows, 
              air conditioning, and comfortable seating. Our experienced drivers know every 
              corner of the parks and will get you up close to the action.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 transition-all duration-700 hover:bg-white/10 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-brand-gold mb-3" />
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
