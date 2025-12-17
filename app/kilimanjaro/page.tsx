import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mountain, ArrowRight } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Mount Kilimanjaro Climbing Tours | KiliSafari Organizing",
  description:
    "Climb Africa's highest peak with expert guides. Choose from Machame, Marangu, Lemosho, Rongai, and Northern Circuit routes. High success rates and professional support.",
}

const routes = [
  {
    title: "Marangu Route",
    subtitle: "Coca-Cola Route",
    duration: "6 Days",
    description:
      "The oldest and most established path with hut accommodations. Ideal for those who want a classic experience without sleeping in tents.",
    pricePerPerson: "$2,349",
    slug: "marangu",
    image: "/images/kilimanjaro-arms-open.jpg",
  },
  {
    title: "Machame Route",
    subtitle: "Whiskey Route",
    duration: "7 Days",
    description:
      "Steeper and more challenging with excellent acclimatization. The climb high, sleep low topography offers spectacular views throughout.",
    pricePerPerson: "$2,589",
    slug: "machame",
    image: "/images/kilimanjaro-sunset-hiker.jpg",
  },
  {
    title: "Lemosho Route",
    subtitle: "The Scenic Route",
    duration: "8 Days",
    description:
      "The most beautiful route with remote wilderness feel. Perfect acclimatization with 8 day duration for excellent success rates.",
    pricePerPerson: "$2,829",
    slug: "lemosho",
    image: "/images/kilimanjaro-porters-sunrise.jpg",
  },
  {
    title: "Rongai Route",
    subtitle: "The Northern Approach",
    duration: "7 Days",
    description:
      "Approaches from the north near Kenya border. Drier and flatter, making it the best choice during the rainy season.",
    pricePerPerson: "$2,589",
    slug: "rongai",
    image: "/images/kilimanjaro-aerial-crater.jpg",
  },
  {
    title: "Northern Circuit",
    subtitle: "The Grand Traverse",
    duration: "9 Days",
    description:
      "The ultimate Kilimanjaro experience with 360 degree views. Longest route with the highest success rate of any route.",
    pricePerPerson: "$3,069",
    slug: "northern-circuit",
    image: "/images/kilimanjaro-uhuru-peak.jpg",
  },
]

export default function KilimanjaroPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <Mountain size={64} className="text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">Climb Mount Kilimanjaro</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-3">Conquer Africa's Highest Peak</p>
            <p className="text-2xl md:text-4xl text-white font-bold">5,895m / 19,341ft</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Reach the Roof of Africa</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Mount Kilimanjaro stands at 5,895 meters, making it the highest peak in Africa and the world's tallest
              free-standing mountain. This dormant volcano offers one of the most accessible high altitude climbs,
              requiring no technical climbing skills.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              With KiliSafari, you'll benefit from our experienced guides, excellent safety record, and high success
              rates. Choose from five distinct routes, each offering unique landscapes and challenges on your journey to
              the summit.
            </p>
          </div>
        </section>

        {/* Routes Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Choose Your Route</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Each route offers a unique experience and varying difficulty levels. Select the one that best matches
                your adventure style and fitness level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="relative h-64 w-full bg-gray-200">
                    <Image src={route.image || "/placeholder.svg"} alt={route.title} fill className="object-cover" />
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{route.title}</h3>
                      <p className="text-teal-700 font-bold text-lg mb-1">{route.subtitle}</p>
                      <p className="text-gray-600 font-semibold">{route.duration}</p>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-6 flex-1">{route.description}</p>

                    <div className="mt-auto">
                      <div className="bg-gray-50 rounded-xl p-4 mb-6">
                        <p className="text-sm text-gray-600 mb-1">Starting from</p>
                        <p className="text-3xl font-black text-gray-900">{route.pricePerPerson}</p>
                        <p className="text-sm text-gray-600">per person</p>
                      </div>

                      <Button
                        asChild
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-6 text-base"
                      >
                        <Link href={`/kilimanjaro/${route.slug}`}>
                          View Details
                          <ArrowRight className="ml-2" size={20} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Our experienced team is ready to guide you to the summit of Africa's highest peak
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-6 text-lg"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
