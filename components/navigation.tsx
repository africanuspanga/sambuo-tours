"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [safariDropdownOpen, setSafariDropdownOpen] = useState(false)
  const [trekkingDropdownOpen, setTrekkingDropdownOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="KiliSafari Organizing"
              width={120}
              height={80}
              className="h-16 w-auto"
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

            {/* Safaris Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-brand-dark hover:text-brand-orange font-medium">
                    SAFARIS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/northern-circuit"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Northern Circuit</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/southern-circuit"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Southern Circuit</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/day-safaris"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Day Safaris</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/cultural-safaris"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Cultural Safaris</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              href="/itineraries"
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

            {/* Trekking Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-brand-dark hover:text-brand-orange font-medium">
                    TREKKING
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/kilimanjaro"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Kilimanjaro</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/mt-meru"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Mt Meru</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/udzungwa"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Udzungwa</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/lushoto"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Lushoto</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
                </div>
              )}
            </div>

            <Link
              href="/itineraries"
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
