import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { company } from "@/lib/sambuo-data"
import { Clock, MapPin, Users, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: `3 Days Tarangire, Ngorongoro & Manyara Safari | Sambuo Tours`,
  description:
    "Experience three iconic Northern Tanzania parks in 3 days. Visit Tarangire, Ngorongoro Crater, and Lake Manyara National Park.",
}

const itinerary = [
  {
    day: 1,
    title: "Tarangire National Park",
    description:
      "After breakfast, you will be driven from lodge Arusha/Moshi to Tarangire with a packed lunch. You will then have a game drive up to evening when you will be driven to the Manyara Safari Lodge for dinner and overnight. Animals found there include lions, elephants, buffaloes, wildebeest, gazelles, zebras, cheetah, hartebeest, impala, eland, leopard, oryx, gerenuk, dwarf mongoose, kori bustard, ostrich, hornbills, lovebirds, and yellow barbet.",
    accommodation: "Manyara Safari Lodge or similar",
    meals: "Lunch, Dinner",
  },
  {
    day: 2,
    title: "Ngorongoro Crater",
    description:
      "Early in the morning after breakfast you will leave from the hotel to Ngorongoro Crater, where you will enjoy a boxed lunch. For the remainder of the afternoon, you will have a game drive inside the Crater. Thereafter, you will return to Eileen's Tree Inn for dinner and overnight. Animals found there include lions, elephants, buffaloes, wildebeest, Thomson's gazelles, zebras, reedbucks, flamingos, black rhino, hyenas, cheetah, hippos, eland, waterbucks, dikdik, bushbuck, jackals, and vervet monkeys.",
    accommodation: "Eileen's Tree Inn or similar",
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    day: 3,
    title: "Lake Manyara National Park to Arusha/Moshi",
    description:
      "After breakfast, you will be driven from the hotel to Manyara National Park for a half-day game drive. Then afternoon you will be driven back Arusha/Moshi for overnight at lodge. Animals found there include lions, elephants, buffaloes, wildebeest, zebras, reedbucks, flamingos, blue monkeys, hundred-strong baboon troops, waterbucks, Kirk's dikdik, klipspringer, mongoose, bushbuck, vervet monkeys, and water birds such as pelicans, cormorants, and storks.",
    accommodation: "Hotel in Arusha/Moshi",
    meals: "Breakfast, Lunch",
  },
]

export default function ThreeDaysTarangireNgorongoroManyaraPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-brand-cream">
        <section className="relative h-[50vh] md:h-[60vh]">
          <Image
            src="/images/safari-3-days.jpg"
            alt="Buffalo in African grassland at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <Link
                href="/our-itineraries"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Itineraries
              </Link>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
                3 Days: Tarangire, Ngorongoro & Manyara
              </h1>
              <p className="text-xl text-white/90">The Classic Northern Trio</p>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-brand-chocolate text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-gold" />
                <span>3 Days / 2 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-gold" />
                <span>Tarangire, Ngorongoro, Manyara</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-gold" />
                <span>1-6 People</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-gold" />
                <span>Year Round</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-chocolate mb-6">Safari Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This classic 3-day safari takes you through three of Northern Tanzania's most spectacular parks.
                  Experience Tarangire's legendary elephant herds, descend into the Ngorongoro Crater for Big Five
                  wildlife viewing, and explore Lake Manyara known for its tree-climbing lions and flocks of flamingos.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-chocolate mb-8">Day by Day Itinerary</h2>
                <div className="space-y-8">
                  {itinerary.map((day) => (
                    <div key={day.day} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-brand-gold text-brand-chocolate px-4 py-2 rounded-full font-bold">
                            Day {day.day}
                          </span>
                          <h3 className="text-xl font-serif font-bold text-brand-chocolate">{day.title}</h3>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{day.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                            {day.accommodation}
                          </span>
                          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{day.meals}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included/Excluded */}
              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-chocolate mb-8">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-brand-ocean">
                    <h3 className="text-xl font-serif font-bold text-brand-ocean mb-4">Included</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-ocean">✓</span>All park fees
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-ocean">✓</span>Ngorongoro Crater fees
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-ocean">✓</span>Hotel pick-up and drop-off
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-ocean">✓</span>4x4 vehicle with viewing roof
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-ocean">✓</span>Qualified driver/guide
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-ocean">✓</span>3 meals per day
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-ocean">✓</span>Bottled water
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
                    <h3 className="text-xl font-serif font-bold text-red-600 mb-4">Not Included</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>Tips for driver and cook
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>Meals outside itinerary
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>Travel insurance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>Tanzania visa
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>International flights
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600">✗</span>Single room supplement
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-brand-chocolate rounded-lg p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Ready to Book This Safari?</h3>
                <p className="text-gray-300 mb-6">Contact us today to start planning your Tanzanian adventure.</p>
                <BookingModal tourName="3 Days: Tarangire, Ngorongoro & Manyara">
                  <button className="bg-brand-gold text-brand-chocolate px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors">
                    Book This Safari
                  </button>
                </BookingModal>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
