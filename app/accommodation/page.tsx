import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { company } from "@/lib/sambuo-data"
import { Wifi, Car, Wind, Coffee, Check } from "lucide-react"

export const metadata = {
  title: `Hotels & Accommodation in Tanga | ${company.name}`,
  description:
    "Find affordable and comfortable hotels in Tanga, Tanzania. Despacito Hotel and French Kiss Lodge offer clean rooms with modern amenities including free Wi-Fi, air conditioning, and more.",
}

const hotels = [
  {
    name: "Despacito Hotel",
    location: "Tanga City",
    description:
      "A nice and clean hotel found in Tanga offering affordable accommodation with modern amenities. Perfect for travelers looking for a comfortable stay with excellent service.",
    images: ["/Descpacito hotle tanga 1.jpg", "/despacityo hotel tang 2.jpg"],
    amenities: [
      { icon: Coffee, label: "Bar" },
      { icon: Car, label: "Free Parking" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Wind, label: "Air Conditioning" },
    ],
  },
  {
    name: "French Kiss Lodge",
    location: "Tanga City",
    description:
      "A charming and affordable lodge in Tanga providing clean and comfortable rooms. Enjoy a relaxing stay with all the essential amenities for a pleasant visit to Tanzania's coastal city.",
    images: ["/French kiss tanga 1.webp", "/french kiss tanga 2.webp"],
    amenities: [
      { icon: Coffee, label: "Bar" },
      { icon: Car, label: "Free Parking" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Wind, label: "Air Conditioning" },
    ],
  },
]

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-chocolate to-brand-ocean">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Accommodation</h1>
            <p className="text-lg md:text-xl text-white/90">Comfortable & Affordable Hotels in Tanga</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">Where to Stay in Tanga</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover comfortable and affordable accommodation options in Tanga City. Whether you&apos;re visiting for 
              business or leisure, our partner hotels provide clean, welcoming rooms with all the modern amenities 
              you need for a pleasant stay on Tanzania&apos;s beautiful coast.
            </p>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="py-16 md:py-20 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {hotels.map((hotel, index) => (
                <div
                  key={hotel.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Images */}
                  <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    {hotel.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg ${
                          imgIndex === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${hotel.name} - Image ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-2">{hotel.name}</h3>
                    <p className="text-brand-ocean font-bold text-lg mb-4">{hotel.location}</p>
                    <p className="text-gray-700 leading-relaxed mb-6">{hotel.description}</p>

                    {/* Amenities */}
                    <div className="mb-8">
                      <h4 className="font-bold text-brand-chocolate mb-4">Amenities:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {hotel.amenities.map((amenity) => (
                          <div key={amenity.label} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                              <amenity.icon size={20} className="text-brand-ocean" />
                            </div>
                            <span className="text-gray-700 font-medium">{amenity.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-8">
                      <div className="space-y-2">
                        {["Clean and comfortable rooms", "Friendly staff", "Great location", "Excellent value for money"].map(
                          (feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <Check size={18} className="text-brand-gold flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate font-bold"
                    >
                      <Link href="/contact">Inquire About Availability</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-chocolate text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Need Help Finding Accommodation?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us and we&apos;ll help you find the perfect place to stay during your visit to Tanga.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate font-bold"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
