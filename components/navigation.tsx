"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [safariDropdownOpen, setSafariDropdownOpen] = useState(false)
  const [trekkingDropdownOpen, setTrekkingDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kilisafari-logo.png"
              alt="KiliSafari Organizing"
              width={140}
              height={90}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              ABOUT
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setSafariDropdownOpen(true)}
              onMouseLeave={() => setSafariDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium"
                style={{ color: "#251b0b" }}
              >
                SAFARIS
                <ChevronDown size={16} />
              </button>

              {safariDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-56 rounded-lg shadow-lg border border-gray-200"
                  style={{
                    backgroundColor: "#ffffff",
                    zIndex: 1000,
                    paddingTop: "8px",
                  }}
                >
                  <div className="p-2">
                    <Link
                      href="/northern-circuit"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Northern Circuit</div>
                    </Link>
                    <Link
                      href="/southern-circuit"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Southern Circuit</div>
                    </Link>
                    <Link
                      href="/day-safaris"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Day Safaris</div>
                    </Link>
                    <Link
                      href="/cultural-safaris"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Cultural Safaris</div>
                    </Link>
                    <Link
                      href="/accommodation"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Accommodation</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/our-itineraries"
              className="text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              ITINERARIES
            </Link>
            <Link
              href="/zanzibar"
              className="text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium"
            >
              ZANZIBAR
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setTrekkingDropdownOpen(true)}
              onMouseLeave={() => setTrekkingDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium"
                style={{ color: "#251b0b" }}
              >
                TREKKING
                <ChevronDown size={16} />
              </button>

              {trekkingDropdownOpen && (
                <div
                  className="absolute top-full left-0 w-56 rounded-lg shadow-lg border border-gray-200"
                  style={{
                    backgroundColor: "#ffffff",
                    zIndex: 1000,
                    paddingTop: "8px",
                  }}
                >
                  <div className="p-2">
                    <Link
                      href="/kilimanjaro"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Kilimanjaro</div>
                    </Link>
                    <Link
                      href="/mt-meru"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Mt Meru</div>
                    </Link>
                    <Link
                      href="/udzungwa"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Udzungwa</div>
                    </Link>
                    <Link
                      href="/lushoto"
                      className="block px-4 py-3 rounded-md transition-colors"
                      style={{ color: "#251b0b", textDecoration: "none" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e67e22"
                        e.currentTarget.style.color = "#ffffff"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#251b0b"
                      }}
                    >
                      <div className="font-medium">Lushoto</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Button asChild className="bg-brand-orange hover:bg-brand-orange/90 text-white">
              <Link href="/contact">CONTACT</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-brand-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/"
              className="block text-brand-dark hover:text-brand-orange transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-brand-dark hover:text-brand-orange transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>

            {/* Mobile Safaris Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-brand-dark hover:text-brand-orange transition-colors py-2 font-medium"
                onClick={() => setSafariDropdownOpen(!safariDropdownOpen)}
              >
                SAFARIS
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${safariDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {safariDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/northern-circuit"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Northern Circuit
                  </Link>
                  <Link
                    href="/southern-circuit"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Southern Circuit
                  </Link>
                  <Link
                    href="/day-safaris"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Day Safaris
                  </Link>
                  <Link
                    href="/cultural-safaris"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Cultural Safaris
                  </Link>
                  <Link
                    href="/accommodation"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Accommodation
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/our-itineraries"
              className="block text-brand-dark hover:text-brand-orange transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              ITINERARIES
            </Link>
            <Link
              href="/zanzibar"
              className="block text-brand-dark hover:text-brand-orange transition-colors py-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              ZANZIBAR
            </Link>

            {/* Mobile Trekking Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full text-brand-dark hover:text-brand-orange transition-colors py-2 font-medium"
                onClick={() => setTrekkingDropdownOpen(!trekkingDropdownOpen)}
              >
                TREKKING
                <ChevronDown
                  size={20}
                  className={`transform transition-transform ${trekkingDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {trekkingDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/kilimanjaro"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kilimanjaro
                  </Link>
                  <Link
                    href="/mt-meru"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mt Meru
                  </Link>
                  <Link
                    href="/udzungwa"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Udzungwa
                  </Link>
                  <Link
                    href="/lushoto"
                    className="block text-brand-dark hover:text-brand-orange transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Lushoto
                  </Link>
                </div>
              )}
            </div>

            <Button asChild className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white mt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                CONTACT
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
