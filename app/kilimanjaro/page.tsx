import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, TrendingUp, Check, Mountain } from "lucide-react"

const routes = [
  {
    title: "Machame Route",
    subtitle: '"Whiskey Route"',
    image: "/images/machame.jpg",
    duration: "6-7 days",
    difficulty: "Moderate to Challenging",
    successRate: "85%",
    description:
      "The most popular route offering stunning scenery and excellent acclimatization. Approaches from the south through lush rainforest, ascending through diverse vegetation zones. Known for its 'climb high, sleep low' approach which aids acclimatization. The route is challenging but incredibly rewarding with spectacular views throughout.",
    highlights: [
      "Scenic and diverse landscapes",
      "Good acclimatization profile",
      '"Climb high, sleep low" approach',
      "Challenging but rewarding",
      "Most popular route",
    ],
  },
  {
    title: "Marangu Route",
    subtitle: '"Coca-Cola Route"',
    image: "/images/marangu.jpg",
    duration: "5-6 days",
    difficulty: "Moderate",
    successRate: "75%",
    description:
      "The only route with hut accommodation, eliminating the need for camping. Features a gradual ascent through varied vegetation zones from rainforest to alpine desert. The same path is used for ascent and descent. Often considered the easiest route, making it popular with beginners, though the shorter duration can affect acclimatization.",
    highlights: [
      "Hut accommodation (no camping)",
      "Gradual, steady ascent",
      "Most established route",
      "Good for beginners",
      "Comfortable sleeping huts",
    ],
  },
  {
    title: "Rongai Route",
    subtitle: "The Northern Approach",
    image: "/images/rongai.jpg",
    duration: "6-7 days",
    difficulty: "Moderate",
    successRate: "80%",
    description:
      "Approaches from the north near the Kenyan border, offering a quieter experience with fewer climbers. Features gradual ascent with beautiful wilderness scenery and good wildlife viewing opportunities in the lower elevations. The drier northern side provides different perspectives of the mountain and more consistent weather.",
    highlights: [
      "Less crowded than other routes",
      "Gradual ascent profile",
      "Approaches from north (Kenya border)",
      "Good wildlife viewing",
      "Drier conditions",
    ],
  },
  {
    title: "Lemosho Route",
    subtitle: "The Scenic Route",
    image: "/images/lemosho.jpg",
    duration: "7-8 days",
    difficulty: "Moderate",
    successRate: "90%",
    description:
      "One of the most scenic routes with excellent acclimatization due to longer duration. Approaches from the west through pristine wilderness with spectacular views. The extended itinerary allows for better altitude adjustment, resulting in the highest success rates. Considered by many to be the most beautiful route up Kilimanjaro.",
    highlights: [
      "Highest success rate",
      "Excellent acclimatization",
      "Stunning scenery throughout",
      "Less crowded",
      "Longer, more gradual ascent",
    ],
  },
  {
    title: "Northern Circuit",
    subtitle: "The Grand Traverse",
    image: "/images/northern-circuit-route.jpg",
    duration: "8-9 days",
    difficulty: "Moderate",
    successRate: "95%",
    description:
      "The longest and newest route, circling around the northern slopes of Kilimanjaro. Offers unparalleled views from all sides of the mountain and the best acclimatization profile. The extended duration and gradual ascent result in the highest success rates. Perfect for those wanting the most comprehensive Kilimanjaro experience in remote, pristine wilderness.",
    highlights: [
      "Highest success rate of all routes",
      "Most scenic route",
      "Best acclimatization profile",
      "Remote and pristine",
      "360-degree mountain views",
    ],
  },
]

const included = [
  "Professional mountain guides",
  "Porters and support crew",
  "All park fees and permits",
  "Camping equipment (tents, sleeping mats)",
  "Meals on the mountain",
  "Emergency oxygen",
  "First aid kit and safety equipment",
  "Pre-climb briefing",
]

const preparationTips = [
  {
    title: "Physical Fitness",
    description:
      "Start training 2-3 months before your climb. Focus on cardiovascular fitness, hiking with a backpack, and leg strength exercises.",
  },
  {
    title: "Best Time to Climb",
    description:
      "January-March and June-October offer the best weather. Avoid April-May (long rains) and November (short rains).",
  },
  {
    title: "What to Pack",
    description:
      "Layered clothing for varying temperatures, quality hiking boots, sleeping bag rated to -10°C, headlamp, and personal medications.",
  },
  {
    title: "Altitude Sickness Prevention",
    description:
      "Climb slowly (pole pole), stay hydrated, consider Diamox medication, and listen to your guide's advice about acclimatization.",
  },
]

export default function KilimanjaroPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-600">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <Mountain size={64} className="text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4">Climb Mount Kilimanjaro</h1>
            <p className="text-lg md:text-2xl text-white/90 mb-2">Conquer Africa's Highest Peak</p>
            <p className="text-xl md:text-3xl text-white font-bold">5,895m / 19,341ft</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-6">Reach the Roof of Africa</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Mount Kilimanjaro, standing at 5,895 meters (19,341 feet), is the highest peak in Africa and the world's
              tallest free-standing mountain. This dormant volcano offers one of the most accessible high-altitude
              climbs, requiring no technical climbing skills, making the summit achievable for determined trekkers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Climbing Kilimanjaro is a journey through five distinct climate zones, from tropical rainforest to arctic
              summit. Each day brings new landscapes and challenges as you ascend toward the snow-capped peak. The
              experience is both physically demanding and spiritually rewarding.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With KiliSafari, you'll benefit from our experienced guides, excellent safety record, and high success
              rates. Our team has summited Kilimanjaro hundreds of times and knows exactly how to maximize your chances
              of reaching Uhuru Peak while ensuring your safety and enjoyment throughout the journey.
            </p>
          </div>
        </section>

        {/* Routes Grid */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">Choose Your Route</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Each route offers unique experiences and challenges - select the one that matches your goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  {/* Image Container */}
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={route.image || "/placeholder.svg"}
                      alt={route.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-brand-dark mb-1">{route.title}</h3>
                    <p className="text-brand-orange font-semibold mb-4 italic">{route.subtitle}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-brand-orange" />
                        <span className="text-sm text-gray-700">
                          <span className="font-semibold">Duration:</span> {route.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-brand-orange" />
                        <span className="text-sm text-gray-700">
                          <span className="font-semibold">Difficulty:</span> {route.difficulty}
                        </span>
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold">Success Rate:</span>{" "}
                        <span className="text-brand-green font-bold">{route.successRate}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{route.description}</p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-brand-dark mb-2">Highlights:</p>
                      <ul className="space-y-1">
                        {route.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <Check size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button asChild className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
                      <Link href="/contact">Choose {route.title.split(" ")[0]}</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-8 text-center">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-brand-green mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Tips Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-12 text-center">Preparation Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {preparationTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{tip.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-dark text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Reach the Summit?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experienced team guide you to the Roof of Africa
            </p>
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white">
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
