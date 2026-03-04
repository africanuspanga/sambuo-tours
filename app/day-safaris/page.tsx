import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin } from "lucide-react"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `Day Safaris & Excursions in Tanzania | ${company.name}`,
  description:
    "Discover Tanzania's best day trips including Materuni Waterfalls, Chemka Hot Springs, Lake Duluti, and Kilimanjaro day hikes. Perfect adventures for any schedule.",
}

const dayTrips = [
  {
    id: "tanga-beaches",
    title: "Tanga Beaches",
    location: "Tanga",
    duration: "Full Day",
    image: "/tanga_Sandbank.jpg",
    description:
      "Tanga is home to beautiful and peaceful beaches along the Indian Ocean, offering a relaxing escape from the busy city life. The coastline features soft white sand, warm turquoise water, and stunning ocean views. Visitors can enjoy swimming, sunbathing, beach walks, and fresh seafood from nearby fishing villages. The beaches around Tanga are less crowded than many other coastal destinations in Tanzania, making them perfect for travelers who want a quiet and authentic beach experience. It is also a great place to watch traditional dhow boats sailing along the coast and enjoy unforgettable sunsets over the ocean.",
    highlights: [
      "Soft white sand and warm turquoise water",
      "Quiet, uncrowded beach experience",
      "Fresh seafood from local fishing villages",
      "Traditional dhow boats and sunset views",
    ],
  },
  {
    id: "pangani-beaches",
    title: "Pangani Beaches",
    location: "Pangani",
    duration: "Full Day",
    image: "/pangani beaches.jpg",
    description:
      "Pangani is a historic coastal town located south of Tanga, famous for its pristine beaches and rich Swahili culture. The area offers long stretches of untouched white sand and clear blue waters along the Indian Ocean. Visitors can relax on quiet beaches, take boat trips along the Pangani River, or explore the town's historic buildings that reflect Arab, German, and British influences. Pangani is also known for its peaceful atmosphere and natural beauty, making it an ideal destination for beach holidays, cultural exploration, and romantic seaside escapes.",
    highlights: [
      "Pristine white sand beaches",
      "Pangani River boat trips",
      "Historic Swahili culture and architecture",
      "Peaceful, romantic coastal atmosphere",
    ],
  },
  {
    id: "bike-tourism",
    title: "Bike Tourism",
    location: "Tanga Region",
    duration: "Half/Full Day",
    image: "/biking tourism.webp",
    description:
      "Explore the scenic beauty of Tanga Region on two wheels with our guided bike tourism experiences. Ride through lush coconut plantations, traditional villages, and along the stunning coastline. This eco-friendly adventure allows you to experience the local culture up close, interact with friendly communities, and discover hidden gems that are inaccessible by car. Whether you're a casual rider or an experienced cyclist, our bike tours offer a unique perspective on Tanzania's coastal landscapes.",
    highlights: [
      "Scenic rides through plantations and villages",
      "Eco-friendly exploration of the region",
      "Close interaction with local communities",
      "Suitable for all fitness levels",
    ],
  },
  {
    id: "sandbank-snorkeling",
    title: "Visit Sandbank & Snorkeling in Tanga",
    location: "Tanga",
    duration: "Full Day",
    image: "/tanga_Sandbank.jpg",
    description:
      "Experience the magic of Tanga's sandbanks - pristine, uninhabited strips of white sand emerging from the turquoise Indian Ocean. Our sandbank excursion includes a boat ride to these secluded paradises where you can relax, swim, and enjoy a seafood barbecue picnic. The crystal-clear waters around the sandbanks offer excellent snorkeling opportunities, with colorful coral reefs teeming with tropical fish, sea stars, and other marine life. A perfect day trip for beach lovers and ocean enthusiasts.",
    highlights: [
      "Secluded sandbank paradise experience",
      "Excellent snorkeling with tropical marine life",
      "Seafood barbecue picnic on the sandbank",
      "Crystal-clear turquoise waters",
    ],
  },
  {
    id: "materuni-waterfalls",
    title: "Materuni Waterfalls & Coffee Tour",
    location: "Arusha/Moshi",
    duration: "Full Day",
    image: "/images/materuni-waterfalls.jpg",
    description:
      "Explore the lush foothills of Mount Kilimanjaro with a visit to the authentic Chagga village of Materuni. Hike through scenic farmlands and rainforests to the magnificent Materuni Waterfalls, then enjoy a hands-on Chagga Coffee Tour where you learn the entire coffee process from bean to cup.",
    highlights: [
      "Stunning waterfall with swimming opportunity",
      "Traditional coffee-making experience",
      "Cultural immersion with Chagga people",
      "Local lunch included",
    ],
  },
  {
    id: "rundugai-hot-springs",
    title: "Rundugai (Chemka) Hot Springs",
    location: "Near Moshi",
    duration: "Half Day",
    image: "/images/rundugai-hot-springs.jpg",
    description:
      "Escape to a hidden oasis in the Tanzanian bush. Discover stunning natural pools of crystal-clear, warm turquoise water sourced from underground springs. Surrounded by towering fig trees, it's perfect for swimming, relaxing, or swinging from a rope into the deeper pool.",
    highlights: [
      "Crystal-clear turquoise hot springs",
      "Natural fish spa experience",
      "Rope swing into the pool",
      "Shaded picnic spots",
    ],
  },
  {
    id: "lake-duluti",
    title: "Lake Duluti Crater Lake",
    location: "Near Arusha",
    duration: "Half Day",
    image: "/images/lake-duluti.jpg",
    description:
      "A tranquil volcanic crater lake just a short drive from Arusha city center, framed by thick forest reserve. Enjoy canoeing or kayaking across calm emerald waters with excellent birdwatching opportunities. The surrounding forest trails are perfect for guided nature walks to spot Blue Monkeys and over 130 bird species.",
    highlights: ["Canoeing and kayaking", "130+ bird species", "Guided nature walks", "Blue Monkey sightings"],
  },
  {
    id: "pugu-hills",
    title: "Pugu Hills Nature Forest Reserve",
    location: "Dar es Salaam",
    duration: "Full Day",
    image: "/images/pugu-hills.webp",
    description:
      "Located just 20 km southwest of Dar es Salaam, this biodiverse coastal forest is home to endemic plant species and diverse wildlife including colobus monkeys. Enjoy guided hiking to viewpoints like Msolo Hill Peak with stunning views, plus birdwatching and canoeing on Minaki Dam.",
    highlights: [
      "Msolo Hill Peak viewpoint",
      "Colobus monkey sightings",
      "Canoeing on Minaki Dam",
      "Endemic plant species",
    ],
  },
  {
    id: "themi-falls",
    title: "Themi Falls Leisure Park",
    location: "Arusha",
    duration: "Half Day",
    image: "/images/themi-falls.jpg",
    description:
      "Situated in the scenic countryside near Olgilai village, this park combines natural beauty with recreational facilities. Enjoy a leisurely hike to the picturesque Themi Waterfalls, explore beautiful gardens, and experience guided cultural walks through the village. Perfect for families seeking a relaxing day trip.",
    highlights: [
      "Scenic waterfall hike",
      "Cultural village experience",
      "Beautiful gardens",
      "Family-friendly activities",
    ],
  },
  {
    id: "kilimanjaro-day-hike",
    title: "Kilimanjaro Day Hike",
    location: "Marangu Gate",
    duration: "Full Day",
    image: "/images/kilimanjaro-day-hike.jpg",
    description:
      "Experience Africa's highest peak without a multi-day trek. Starting from Marangu Gate, trek through lush rainforest to Mandara Hut (2,700m). Encounter towering eucalyptus trees, colorful birds, and black-and-white colobus monkeys. A detour to Maundi Crater rim offers stunning panoramic views of northern Tanzania.",
    highlights: [
      "Trek to 2,700m elevation",
      "Lush rainforest experience",
      "Colobus monkey sightings",
      "Panoramic mountain views",
    ],
  },
]

export default function DaySafarisPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-chocolate to-brand-ocean">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">Day Safaris & Excursions</h1>
            <p className="text-lg md:text-xl text-white/90">Unforgettable adventures perfect for any schedule</p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-chocolate mb-6">Experience Tanzania in a Day</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our carefully curated day trips offer the perfect blend of adventure, culture, and natural beauty. Whether
              you're short on time or looking to complement your safari with unique experiences, these excursions
              showcase the best of Tanzania's diverse landscapes and rich heritage.
            </p>
          </div>
        </section>

        {/* Day Trips Grid */}
        <section className="py-16 md:py-20 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dayTrips.map((trip) => (
                <Card key={trip.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-brand-cream">
                  <div className="relative h-64 w-full">
                    <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{trip.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{trip.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-chocolate mb-3">{trip.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">{trip.description}</p>
                    <div className="mb-6">
                      <h4 className="font-bold text-brand-chocolate mb-2 text-sm">Highlights:</h4>
                      <ul className="space-y-1">
                        {trip.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-brand-gold mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate font-bold">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-chocolate text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready for Your Adventure?</h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us to customize your perfect day trip experience or combine multiple excursions for an
              unforgettable journey
            </p>
            <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate font-bold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
