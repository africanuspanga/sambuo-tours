"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Mountain, TrendingUp, Calendar, Award } from "lucide-react"

const routes = [
  { name: "Machame", days: "6-7 Days", difficulty: "Moderate" },
  { name: "Lemosho", days: "7-8 Days", difficulty: "Moderate" },
  { name: "Marangu", days: "5-6 Days", difficulty: "Easier" },
  { name: "Rongai", days: "6-7 Days", difficulty: "Moderate" },
]

export function KilimanjaroSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-brand-chocolate overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/kilimanjaro-uhuru-peak.jpg"
                  alt="Mount Kilimanjaro summit"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-chocolate/60 to-transparent" />
                
                {/* Altitude Badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                      <Mountain size={24} className="text-brand-chocolate" />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-bold text-brand-chocolate">5,895m</div>
                      <div className="text-sm text-gray-600">Uhuru Peak</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-2 border-brand-gold/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-brand-gold/20 rounded-full text-brand-gold text-sm font-medium tracking-widest uppercase mb-6">
              Mountain Expeditions
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Conquer Africa&apos;s Highest Peak
              <span className="block text-brand-gold mt-2">Mount Kilimanjaro</span>
            </h2>
            
            <p className="text-white/80 leading-relaxed text-lg mb-6">
              Stand atop the Roof of Africa. Mount Kilimanjaro, the world&apos;s highest 
              free-standing mountain, beckons adventurers from across the globe. 
              Our expert guides will lead you through five distinct climate zones 
              to the snow-capped summit.
            </p>
            
            <p className="text-white/70 leading-relaxed mb-8">
              Whether you choose the scenic Machame route, the gradual Lemosho trail, 
              or the classic Marangu path, we ensure your safety and maximize your 
              summit success with proper acclimatization and experienced support teams.
            </p>

            {/* Route Cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={14} className="text-brand-gold" />
                    <span className="font-semibold text-white text-sm">{route.name} Route</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {route.days}
                    </span>
                    <span>|</span>
                    <span>{route.difficulty}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kilimanjaro"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-chocolate font-semibold rounded-full hover:bg-brand-gold/90 transition-all duration-300 hover:scale-105"
              >
                Explore Routes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Award size={18} className="text-brand-gold" />
                <span>95% Summit Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
