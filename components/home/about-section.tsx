"use client"

import Image from "next/image"
import { company, whyChooseUs } from "@/lib/sambuo-data"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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
      { threshold: 0.2 }
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
          {/* Image Container */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/NEW SAMBUO IMAGES/ABOUT OF HOMEPAGE.jpg"
                  alt="Sambuo Tours safari experience in Tanzania"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-[200px]">
                <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">
                  {company.yearsExperience}+
                </div>
                <div className="text-brand-chocolate font-medium text-sm uppercase tracking-wide">
                  Years of Excellence
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-gold/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-chocolate mb-6 text-balance leading-tight">
              Your Gateway to Tanzania&apos;s
              <span className="text-brand-ocean"> Untamed Wilderness</span>
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Based in the heart of Tanga Region, {company.shortName} is a premier Tanzanian-owned tour company 
                dedicated to crafting extraordinary journeys across East Africa&apos;s most spectacular destinations. 
                With over {company.yearsExperience} years of expertise, we specialize in authentic safari adventures, 
                challenging mountain expeditions, and immersive cultural experiences.
              </p>
              <p>
                Our passionate team of expert guides brings intimate local knowledge and genuine warmth to every 
                journey. From the endless golden plains of the Serengeti to the snow-capped summit of Kilimanjaro, 
                we transform Tanzania&apos;s natural wonders into lifelong memories.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-brand-sand">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-brand-ocean mb-1">
                  {company.travelersServed}
                </div>
                <div className="text-sm text-gray-600 font-medium">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-brand-ocean mb-1">
                  {company.destinations}+
                </div>
                <div className="text-sm text-gray-600 font-medium">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-brand-ocean mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">Local Expertise</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="mt-20 md:mt-32">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-brand-ocean/10 rounded-full text-brand-ocean text-sm font-medium tracking-widest uppercase mb-4">
              Why Travel With Us
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate">
              The Sambuo Difference
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-brand-gold/20 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-serif font-bold text-brand-gold group-hover:text-brand-chocolate">
                    0{index + 1}
                  </span>
                </div>
                <h4 className="text-xl font-serif font-bold text-brand-chocolate mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
