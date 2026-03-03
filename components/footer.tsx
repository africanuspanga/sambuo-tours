import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { company } from "@/lib/sambuo-data"

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Northern Circuit", href: "/northern-circuit" },
  { label: "Southern Circuit", href: "/southern-circuit" },
  { label: "Zanzibar", href: "/zanzibar" },
  { label: "Kilimanjaro", href: "/kilimanjaro" },
  { label: "Contact", href: "/contact" },
]

const safariLinks = [
  { label: "Day Safaris", href: "/day-safaris" },
  { label: "Cultural Safaris", href: "/cultural-safaris" },
  { label: "Our Itineraries", href: "/our-itineraries" },
  { label: "Mount Meru", href: "/mt-meru" },
  { label: "Udzungwa", href: "/udzungwa" },
  { label: "Lushoto", href: "/lushoto" },
]

export function Footer() {
  return (
    <footer className="bg-brand-chocolate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center">
                <span className="text-brand-chocolate font-serif font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">SAMBUO</h3>
                <p className="text-xs text-brand-gold tracking-widest">TOURS & SAFARIS</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Your trusted partner for authentic Tanzanian adventures. Experience the wild 
              heart of Africa with expert local guides and personalized service.
            </p>
            <div className="flex gap-4">
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={`https://wa.me/${company.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-chocolate transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Tours */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Safari & Treks</h4>
            <ul className="space-y-3">
              {safariLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-brand-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  {company.name}
                  <br />
                  {company.address}
                  <br />
                  {company.location}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold flex-shrink-0" />
                <a
                  href={`tel:${company.phone}`}
                  className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-white/70 hover:text-brand-gold transition-colors text-sm"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/50 hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-brand-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
