"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/lib/sambuo-data"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [safariDropdownOpen, setSafariDropdownOpen] = useState(false)
  const [trekkingDropdownOpen, setTrekkingDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-chocolate/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-brand-gold flex items-center justify-center">
              <span className="text-brand-chocolate font-serif font-bold text-xl lg:text-2xl">S</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-serif font-bold text-lg lg:text-xl tracking-wide transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`}>
                SAMBUO
              </span>
              <span className={`block text-xs tracking-widest transition-colors duration-300 ${
                scrolled ? "text-brand-gold" : "text-brand-gold"
              }`}>
                TOURS & SAFARIS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/90 hover:text-brand-gold transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-brand-gold transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setSafariDropdownOpen(true)}
              onMouseLeave={() => setSafariDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-brand-gold transition-colors duration-300 font-medium text-sm tracking-wide uppercase">
                Safaris
                <ChevronDown size={14} />
              </button>

              {safariDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                    <Link
                      href="/northern-circuit"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Northern Circuit
                    </Link>
                    <Link
                      href="/southern-circuit"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Southern Circuit
                    </Link>
                    <Link
                      href="/day-safaris"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Day Safaris
                    </Link>
                    <Link
                      href="/cultural-safaris"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Cultural Safaris
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/our-itineraries"
              className="text-white/90 hover:text-brand-gold transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              Itineraries
            </Link>
            <Link
              href="/zanzibar"
              className="text-white/90 hover:text-brand-gold transition-colors duration-300 font-medium text-sm tracking-wide uppercase"
            >
              Zanzibar
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setTrekkingDropdownOpen(true)}
              onMouseLeave={() => setTrekkingDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-white/90 hover:text-brand-gold transition-colors duration-300 font-medium text-sm tracking-wide uppercase">
                Trekking
                <ChevronDown size={14} />
              </button>

              {trekkingDropdownOpen && (
                <div className="absolute top-full left-0 w-56 pt-2">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                    <Link
                      href="/kilimanjaro"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Mount Kilimanjaro
                    </Link>
                    <Link
                      href="/mt-meru"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Mount Meru
                    </Link>
                    <Link
                      href="/udzungwa"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Udzungwa Mountains
                    </Link>
                    <Link
                      href="/lushoto"
                      className="block px-5 py-4 text-brand-chocolate hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-200 font-medium"
                    >
                      Lushoto Usambara
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-2 text-white/90 hover:text-brand-gold transition-colors duration-300"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">{company.phone}</span>
            </a>
            <Button
              asChild
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate font-semibold px-6 rounded-full"
            >
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-chocolate border-t border-white/10">
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              className="block text-white hover:text-brand-gold transition-colors py-3 font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-brand-gold transition-colors py-3 font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Safaris Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-white hover:text-brand-gold transition-colors py-3 font-medium uppercase tracking-wide"
                onClick={() => setSafariDropdownOpen(!safariDropdownOpen)}
              >
                Safaris
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${safariDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {safariDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2 border-l-2 border-brand-gold">
                  <Link
                    href="/northern-circuit"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Northern Circuit
                  </Link>
                  <Link
                    href="/southern-circuit"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Southern Circuit
                  </Link>
                  <Link
                    href="/day-safaris"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Day Safaris
                  </Link>
                  <Link
                    href="/cultural-safaris"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cultural Safaris
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-itineraries"
              className="block text-white hover:text-brand-gold transition-colors py-3 font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Itineraries
            </Link>
            <Link
              href="/zanzibar"
              className="block text-white hover:text-brand-gold transition-colors py-3 font-medium uppercase tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Zanzibar
            </Link>

            {/* Mobile Trekking Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-white hover:text-brand-gold transition-colors py-3 font-medium uppercase tracking-wide"
                onClick={() => setTrekkingDropdownOpen(!trekkingDropdownOpen)}
              >
                Trekking
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${trekkingDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {trekkingDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2 border-l-2 border-brand-gold">
                  <Link
                    href="/kilimanjaro"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mount Kilimanjaro
                  </Link>
                  <Link
                    href="/mt-meru"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mount Meru
                  </Link>
                  <Link
                    href="/udzungwa"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Udzungwa Mountains
                  </Link>
                  <Link
                    href="/lushoto"
                    className="block text-white/80 hover:text-brand-gold transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Lushoto Usambara
                  </Link>
                </div>
              )}
            </div>

            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-2 text-brand-gold py-3"
            >
              <Phone size={18} />
              <span className="font-medium">{company.phone}</span>
            </a>

            <Button
              asChild
              className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate font-semibold mt-4 rounded-full"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Book Your Adventure
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
