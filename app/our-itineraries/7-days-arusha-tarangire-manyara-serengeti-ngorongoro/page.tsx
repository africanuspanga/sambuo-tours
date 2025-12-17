import Image from "next/image"
import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BookingModal } from "@/components/booking-modal"
import { Clock, MapPin, Users, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "7 Days Grand Northern Circuit Safari | KiliSafari",
  description:
    "Experience five national parks in 7 days. Arusha NP walking safari, Tarangire, Manyara, two nights in Serengeti, and Ngorongoro Crater.",
}

const itinerary = [
  {
    day: 1,
    title: "Arusha National Park",
    description:
      "Early in the morning after breakfast, we will drive you from Hotel Arusha/Moshi to Arusha National Park with your packed lunch box for 4 hours of walking and game drive. You will have a break for lunch and continue viewing around Momella Lake and the Ngurdoto Crater. Dinner and overnight at Hotel. There you will see buffaloes, warthogs, zebras, giraffes, waterbucks, and black and white Colobus monkey.",
    accommodation: "Hotel in Arusha or similar",
    meals: "Lunch, Dinner",
  },
  {
    day: 2,
    title: "Tarangire National Park",
    description:
      "After breakfast early in the morning you will be driven from Hotel to Tarangire with your packed lunch. You will then have a game drive up to evening, then you will drive to Manyara Safari Lodge for dinner and overnight. Animals found there include lions, elephants, buffaloes, wildebeest, gazelles, zebras, cheetah, hartebeest, impala, eland, leopard, oryx, gerenuk, dwarf mongoose, kori bustard, ostrich, hornbills, lovebirds, and yellow barbet.",
    accommodation: "Manyara Safari Lodge or similar",
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    day: 3,
    title: "Serengeti National Park",
    description:
      "After breakfast, you will be driven from Tarangire to Serengeti along the way. You will have game viewing and pass Maasai boma culture to see Maasai culture, continue to Serengeti with a break for lunch. In Serengeti you will have a game drive then drive to Heritage Luxury Tented Camp for dinner and overnight. Animals found there include lions, elephants, buffaloes, wildebeest, Thomson's gazelles, zebras, reedbucks, leopard, hyenas, cheetah, hippos, eland, waterbucks, dikdik, bushbuck, jackals, vervet monkeys, impala, klipspringer, warthogs, kongoni, and topi.",
    accommodation: "Heritage Luxury Tented Camp or similar",
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    day: 4,
    title: "Full Day Serengeti Game Drive",
    description:
      "After breakfast, you will have a full day game drive in Serengeti with your heavy packed lunch box. In the afternoon, break for lunch, then continue with game drive Serengeti until evening, then drive back to the lodge for dinner and overnight.",
    accommodation: "Heritage Luxury Tented Camp or similar",
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    day: 5,
    title: "Serengeti to Ngorongoro",
    description:
      "After breakfast, you will have a half game drive in Serengeti with your heavy lunch. In the afternoon, drive to Ngorongoro at Rhino Lodge for dinner and overnight.",
    accommodation: "Ngorongoro Rhino Lodge or similar",
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    day: 6,
    title: "Ngorongoro Crater",
    description:
      "After breakfast early in the morning we will drive you to Ngorongoro Crater for half game drive with your heavy packed lunch. At 3pm drive to Eileen's Tree Inn for dinner and overnight. There you will see lions, elephants, buffaloes, wildebeest, Thomson's gazelles, zebras, reedbucks, flamingos, black rhino, hyenas, cheetah, hippos, eland, waterbucks, dikdik, bushbuck, jackals, and vervet monkeys.",
    accommodation: "Eileen's Tree Inn or similar",
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    day: 7,
    title: "Lake Manyara to Arusha/Moshi",
    description:
      "Early in the morning after breakfast, you will enjoy a final game drive in Manyara National Park with your heavy lunch box, then afternoon we will drive you back to Hotel Arusha/Moshi for dinner and overnight. There you will see lions, elephants, buffaloes, wildebeest, zebras, reedbucks, flamingos, blue monkeys, hundred-strong baboon troops, waterbucks, Kirk's dikdik, klipspringer, mongoose, bushbuck, vervet monkeys, and water birds such as pelicans, cormorants, and storks.",
    accommodation: "Hotel in Arusha/Moshi",
    meals: "Breakfast, Lunch",
  },
]

const pricingCamping = [
  { people: "2 People", price: "$1,850" },
  { people: "3 People", price: "$1,750" },
  { people: "4 People", price: "$1,650" },
  { people: "5 People", price: "$1,550" },
  { people: "6 People", price: "$1,450" },
]

const pricingLodge = [
  { people: "2 People", price: "$3,800" },
  { people: "3 People", price: "$3,600" },
  { people: "4 People", price: "$3,200" },
  { people: "5 People", price: "$3,000" },
  { people: "6 People", price: "$2,800" },
]

export default function SevenDaysGrandNorthernCircuitPage() {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-background">
        <section className="relative h-[50vh] md:h-[60vh]">
          <Image
            src="/images/safari-7-days.jpg"
            alt="Leopard resting in a tree"
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                7 Days: Grand Northern Circuit
              </h1>
              <p className="text-xl text-white/90">Arusha NP, Tarangire, Manyara, Serengeti (2N) & Ngorongoro</p>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-brand-dark text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-yellow" />
                <span>7 Days / 6 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-yellow" />
                <span>5 National Parks</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-yellow" />
                <span>2-6 People</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-yellow" />
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
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Safari Overview</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This grand 7-day safari covers five diverse national parks in Northern Tanzania. Begin with a walking
                  safari in Arusha National Park with stunning views of Mount Meru, then explore Tarangire's elephant
                  herds, the Serengeti's endless plains, the Ngorongoro Crater, and Lake Manyara's tree-climbing lions.
                  This is the ultimate wildlife diversity experience.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-8">Day by Day Itinerary</h2>
                <div className="space-y-8">
                  {itinerary.map((day) => (
                    <div key={day.day} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-brand-yellow text-brand-dark px-4 py-2 rounded-full font-bold">
                            Day {day.day}
                          </span>
                          <h3 className="text-xl font-bold text-brand-dark">{day.title}</h3>
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

              {/* Pricing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-8">Pricing</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 rounded-lg p-6 border-l-4 border-brand-green">
                    <h3 className="text-xl font-bold text-brand-green mb-4">Basic Camping</h3>
                    <div className="space-y-3">
                      {pricingCamping.map((item) => (
                        <div key={item.people} className="flex justify-between items-center">
                          <span className="text-gray-700">{item.people}</span>
                          <span className="text-xl font-bold text-brand-green">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-4">Price per person</p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-brand-yellow">
                    <h3 className="text-xl font-bold text-brand-yellow mb-4">Mid-Range Lodge</h3>
                    <div className="space-y-3">
                      {pricingLodge.map((item) => (
                        <div key={item.people} className="flex justify-between items-center">
                          <span className="text-gray-700">{item.people}</span>
                          <span className="text-xl font-bold text-brand-yellow">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-4">Price per person</p>
                  </div>
                </div>
              </div>

              {/* What's Included/Excluded */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-8">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-brand-green">
                    <h3 className="text-xl font-bold text-brand-green mb-4">Included</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>All park fees
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>Ngorongoro Crater fees
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>Hotel pick-up and drop-off
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>4x4 vehicle with viewing roof
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>Qualified driver/guide
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>Camping equipment (for camping)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>3 meals per day
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-green">✓</span>Bottled water
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Not Included</h3>
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
              <div className="bg-brand-dark rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Book This Safari?</h3>
                <p className="text-gray-300 mb-6">Contact us today to start planning your Tanzanian adventure.</p>
                <BookingModal tourName="7 Days: Grand Northern Circuit">
                  <button className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors">
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
