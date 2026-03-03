import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, DollarSign } from "lucide-react"

export const metadata = {
  title: "Safari Itineraries & Tour Packages | Sambuo Tours",
  description:
    "Browse our curated Tanzania safari itineraries including Serengeti, Ngorongoro, Zanzibar beach escapes, and Kilimanjaro treks. Custom packages available.",
}

const tours = [
  {
    id: "zanzibar-beach-escape",
    title: "10-Day Zanzibar Island & Beach Relaxation Escape",
    shortTitle: "Zanzibar Beach Escape",
    description:
      "Immerse yourself in the tropical paradise of Zanzibar with pristine beaches, historic Stone Town, spice tours, and unforgettable island experiences.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2151176260-612x612-9iXIBoOwLtsgsFnC1dp2sXU9XFSAGC.jpg",
    duration: "10 Days",
    price: "3,056",
    highlights: [
      "Stone Town UNESCO Heritage Site",
      "Spice Farm Tours",
      "Prison Island & Giant Tortoises",
      "Dolphin Watching at Mnemba",
      "Jozani Forest Red Colobus Monkeys",
    ],
  },
  {
    id: "southern-tanzania-safari",
    title: "13-Day Southern Tanzania Safari: Mikumi, Ruaha & Nyerere",
    shortTitle: "Southern Tanzania Safari",
    description:
      "Explore Tanzania's wild and remote southern circuit with incredible wildlife encounters in Mikumi, Ruaha, and Nyerere National Parks.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1500893945-612x612-H3XutuKdkcJrIzNxduGF3GEgSJW8m3.jpg",
    duration: "13 Days",
    price: "8,361",
    highlights: [
      "Ruaha National Park - Tanzania's Best-Kept Secret",
      "Boat Safari on Rufiji River",
      "Walking Safari in Nyerere",
      "Udzungwa Mountain Rainforest",
      "Mufindi Highlands Tea Estates",
    ],
  },
  {
    id: "northern-tanzania-safari",
    title: "11-Day Northern Tanzania Safari: Serengeti & Ngorongoro",
    shortTitle: "Northern Tanzania Safari",
    description:
      "Witness the legendary Great Migration, explore the Ngorongoro Crater, and experience authentic cultural encounters with the Hadzabe tribe.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2170086127-612x612-x6PQjdm2JNRPMlhFH9sNmdSZ2Hh15T.jpg",
    duration: "11 Days",
    price: "2,546",
    highlights: [
      "Great Wildebeest Migration",
      "Ngorongoro Crater - 7th Wonder",
      "Serengeti Big Five Safari",
      "Hadzabe Tribe Cultural Experience",
      "Lake Manyara Tree-Climbing Lions",
    ],
  },
  {
    id: "safari-zanzibar-combo",
    title: "14-Day Tanzania Safari & Zanzibar Beach Escape",
    shortTitle: "Safari & Beach Combo",
    description:
      "The ultimate Tanzania experience combining thrilling wildlife safaris in Serengeti and Ngorongoro with relaxing beach days in Zanzibar.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2119638133-612x612-5PrgfinWlkNRXJ2LdXzWqVUqHCidKa.jpg",
    duration: "14 Days",
    price: "3,000",
    highlights: [
      "Serengeti & Ngorongoro Safari",
      "Optional Hot Air Balloon Safari",
      "Lake Natron & Flamingos",
      "Zanzibar Beach Relaxation",
      "Stone Town & Spice Tours",
    ],
  },
  {
    id: "ruaha-zanzibar-combo",
    title: "7-Day Southern Tanzania Safari (Ruaha) & Zanzibar Escape",
    shortTitle: "Ruaha & Zanzibar Combo",
    description:
      "Experience the wild beauty of Ruaha National Park followed by tropical relaxation in Zanzibar with dolphin tours and forest exploration.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1375721633-612x612-eXdErxdsJmfeKxKfjbIEHoJrCb7rwC.jpg",
    duration: "7 Days",
    price: "3,920",
    highlights: [
      "Ruaha National Park Game Drives",
      "Prison Island Giant Tortoises",
      "Kizimkazi Dolphin Tour",
      "Jozani Forest Red Colobus Monkeys",
      "Stone Town Cultural Experience",
    ],
  },
  {
    id: "kilimanjaro-marangu",
    title: "8-Day Mount Kilimanjaro Marangu Route Trek",
    shortTitle: "Kilimanjaro Marangu Route",
    description:
      "Climb Africa's highest peak via the Marangu Route with comfortable hut accommodation. Known as the 'Coca-Cola Route' for its gradual ascent.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-172311128-612x612-2HtPQZn30zdZ1kVMyul4DqEX0WncWD.jpg",
    duration: "8 Days",
    price: "2,486",
    highlights: [
      "Hut Accommodation on Mountain",
      "Acclimatization Day at Horombo",
      "Summit Uhuru Peak (5,895m)",
      "Rainforest & Alpine Desert Zones",
      "Summit Certificate Included",
    ],
  },
  {
    id: "kilimanjaro-machame",
    title: "9-Day Mount Kilimanjaro Machame Route Trek",
    shortTitle: "Kilimanjaro Machame Route",
    description:
      "Conquer Kilimanjaro via the scenic Machame Route, known as the 'Whiskey Route'. Features stunning views and excellent acclimatization.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1159163245-612x612-yKxAbhGcLslXY2NjMcaIxJvbKFQqwu.jpg",
    duration: "9 Days",
    price: "2,486",
    highlights: [
      "Scenic Machame Route",
      "Great Barranco Wall Climb",
      "Summit Uhuru Peak (5,895m)",
      "Camping Under the Stars",
      "Professional Mountain Crew",
    ],
  },
  {
    id: "northern-circuit-safari",
    title: "8-Day Tanzania Northern Safari Circuit",
    shortTitle: "Northern Circuit Safari",
    description:
      "Explore Tanzania's iconic northern parks including Tarangire, Ngorongoro Crater, Serengeti, and the stunning Lake Natron with its flamingos.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1373541504-612x612-6WH8bDJO7OqLqKeZ3NoF8ZmJS1QgTC.jpg",
    duration: "8 Days",
    price: "2,400",
    highlights: [
      "Tarangire Elephant Herds",
      "Ngorongoro Crater Floor Safari",
      "Serengeti Wildebeest Migration",
      "Lake Natron Flamingos",
      "Ngare Sero Waterfall Hike",
    ],
  },
]

export default function ItinerariesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-chocolate to-brand-ocean">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Safari Itineraries</h1>
            <p className="text-lg md:text-xl text-white/90">Carefully crafted adventures across Tanzania</p>
          </div>
        </section>

        {/* Tour Cards Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-chocolate mb-4">Our Featured Tours</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover our handpicked safari and beach experiences, each designed to showcase the very best of
                Tanzania
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 w-full">
                    <Image src={tour.image || "/placeholder.svg"} alt={tour.shortTitle} fill className="object-cover" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-brand-gold text-white text-sm px-3 py-1">From ${tour.price}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl font-black text-brand-chocolate mb-2">{tour.shortTitle}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{tour.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>From ${tour.price} pp</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-bold text-brand-chocolate text-sm">Tour Highlights:</h4>
                      <ul className="space-y-1">
                        {tour.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button asChild className="flex-1 bg-brand-chocolate hover:bg-brand-chocolate/90 text-white">
                      <Link href={`/itineraries/${tour.id}`}>View Tour</Link>
                    </Button>
                    <Button asChild className="flex-1 bg-brand-gold hover:bg-brand-gold/90 text-white">
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Itinerary CTA */}
        <section className="py-16 md:py-20 bg-brand-chocolate text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Need a Custom Itinerary?</h2>
            <p className="text-lg text-white/90 mb-8">
              Don't see exactly what you're looking for? We specialize in creating personalized itineraries tailored to
              your dreams, budget, and schedule.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-gold hover:bg-brand-gold/90 text-white text-lg px-8 py-6 h-auto"
            >
              <Link href="/contact">Plan Your Custom Safari</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
