import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black font-serif mb-4">KiliSafari</h3>
            <p className="text-gray-300 text-sm mb-4">
              Your gateway to Tanzania's wonders. Experience authentic safaris, epic mountain treks, and cultural
              adventures with 10+ years of expertise.
            </p>
            <div className="flex gap-4">{/* Social media icons can be added here */}</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/northern-circuit"
                  className="text-gray-300 hover:text-brand-orange transition-colors text-sm"
                >
                  Northern Circuit
                </Link>
              </li>
              <li>
                <Link
                  href="/southern-circuit"
                  className="text-gray-300 hover:text-brand-orange transition-colors text-sm"
                >
                  Southern Circuit
                </Link>
              </li>
              <li>
                <Link href="/zanzibar" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Zanzibar
                </Link>
              </li>
              <li>
                <Link href="/kilimanjaro" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Kilimanjaro
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Safari Tours */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-4">Safari Tours</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/day-safaris" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Day Safaris
                </Link>
              </li>
              <li>
                <Link
                  href="/cultural-safaris"
                  className="text-gray-300 hover:text-brand-orange transition-colors text-sm"
                >
                  Cultural Safaris
                </Link>
              </li>
              <li>
                <Link href="/itineraries" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Custom Itineraries
                </Link>
              </li>
              <li>
                <Link href="/mt-meru" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Mt Meru
                </Link>
              </li>
              <li>
                <Link href="/udzungwa" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Udzungwa
                </Link>
              </li>
              <li>
                <Link href="/lushoto" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  Lushoto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-serif mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-brand-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  KiliSafari Organizing
                  <br />
                  Dar es Salaam, Tanzania
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <a href="tel:+255713883303" className="text-gray-300 hover:text-brand-orange transition-colors text-sm">
                  +255 713 883 303
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-brand-orange flex-shrink-0" />
                <a
                  href="mailto:Kilisafariorganising@gmail.com"
                  className="text-gray-300 hover:text-brand-orange transition-colors text-sm"
                >
                  Kilisafariorganising@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={18} className="text-brand-orange flex-shrink-0" />
                <a
                  href="https://wa.me/255769418702"
                  className="text-gray-300 hover:text-brand-orange transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 KiliSafari Organizing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
