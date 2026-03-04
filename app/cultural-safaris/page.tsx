import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `Cultural Tours & Heritage Sites in Tanzania | ${company.shortName}`,
  description:
    "Explore Tanzania's rich cultural heritage with visits to Tanga City, Amboni Caves, Stone Town, Bagamoyo, Kilwa Ruins, and National Museum. Authentic cultural experiences and historical tours.",
}

const destinations = [
  {
    title: "Tanga City Tour",
    subtitle: "A Historic Coastal Gem of East Africa",
    image: "/tanga-city-sambuo.jpg",
    description:
      "Discover the historic coastal city of Tanga, one of the oldest towns in East Africa. The city was developed during the German colonial period in the late 1800s, when modern port facilities, railways, and administrative buildings were constructed. On this tour, visitors explore the charming old town with its colonial architecture, vibrant markets, and historic landmarks. You will also visit the famous Tanga Cement factory area and learn about the region's industrial history. The tour offers a mix of culture, history, and local life, making it a great introduction to Tanga and its unique heritage along the Indian Ocean coast.",
    historicalSignificance:
      "Tanga has been an important trading center for centuries, serving as a key port along the Indian Ocean trade routes. During German colonial rule, it became a major administrative and economic center. The city's architecture reflects this layered history, with German colonial buildings standing alongside traditional Swahili structures. The port of Tanga was once the starting point of the Usambara Railway, which connected the coast to the interior.",
    highlights: [
      "Colonial-era architecture and historic buildings",
      "Vibrant local markets and Swahili culture",
      "Tanga Port and railway heritage",
      "Mix of culture, history, and local coastal life",
    ],
  },
  {
    title: "Amboni Caves Tour",
    subtitle: "East Africa's Largest Limestone Caves",
    image: "/Amboni_Caves.jpg",
    description:
      "The Amboni Caves are the largest limestone caves in East Africa and one of the most fascinating natural attractions near Tanga. Located about 8 km north of the city, these caves were formed around 150 million years ago during the Jurassic period. Visitors can explore underground chambers filled with impressive rock formations, stalactites, and stalagmites. The caves are also home to many bats and have interesting shapes in the rocks that resemble animals and famous objects. Guided tours explain the geology, history, and local legends connected to the caves, making this adventure both educational and exciting.",
    historicalSignificance:
      "The Amboni Caves hold both geological and cultural significance. Formed over 150 million years ago, they have been used by local communities for generations. During the colonial era, the caves served as hiding places during conflicts. Today, they remain important for local traditions and are considered sacred by some communities. The caves provide valuable insights into the region's geological history and have been a focus of scientific study.",
    highlights: [
      "Explore East Africa's largest limestone cave system",
      "Impressive stalactites and stalagmite formations",
      "Learn about 150-million-year-old geology",
      "Discover local legends and cultural significance",
    ],
  },
  {
    title: "The National Museum and House of Culture, Dar es Salaam",
    subtitle: "A Journey Through Tanzania's Grand History",
    image: "/images/national-museum.jpg",
    description:
      "Located in the bustling heart of Dar es Salaam, the National Museum and House of Culture is the perfect starting point for any cultural exploration of Tanzania. It serves as the custodian of the nation's most treasured artifacts, offering a comprehensive narrative that spans from the origins of humankind to the modern-day republic. This is not just a collection of objects; it is the story of Tanzania under one roof.",
    historicalSignificance:
      "Originally opened in 1940 as a memorial to King George V, the museum has since expanded to become the country's most important historical institution. Its international fame rests on the priceless paleoanthropological discoveries from the Olduvai Gorge. Here, you can stand face-to-face with the history of our earliest ancestors. The museum houses some of the most significant finds by the Leakey family, including the skull of Paranthropus boisei (Zinjanthropus) and evidence of the Laetoli footprints, which prove that our ancestors walked upright 3.6 million years ago.",
    highlights: [
      "The Hall of Man - world-renowned exhibit proving East Africa as the 'Cradle of Mankind'",
      "Rich ethnographic collection showcasing Tanzania's 120+ ethnic groups",
      "History & Politics exhibits including the Maji Maji rebellion and independence journey",
      "The House of Culture with live performances and cultural events",
    ],
  },
  {
    title: "The Historic Town of Bagamoyo",
    subtitle: "Where History Whispers on the Indian Ocean Breeze",
    image: "/images/bagamoyo.jpg",
    description:
      "The name 'Bagamoyo' is Swahili for 'lay down your heart,' a haunting phrase that captures the town's dual legacy of immense sorrow and enduring hope. This quiet, coastal town, with its crumbling colonial architecture and ancient baobab trees, was once one of the most important trading posts in East Africa. To walk its streets is to step back in time, feeling the powerful echoes of its past as a terminus for both the slave and ivory trade caravans.",
    historicalSignificance:
      "In the 19th century, Bagamoyo was the capital of German East Africa and a major port for the Sultanate of Oman. Caravans would arrive here after months of trekking from the interior, bringing ivory, salt, and tragically, enslaved people to be shipped to Zanzibar and beyond. For the captives, Bagamoyo was their last sight of their mainland home, a place of profound despair. It was also a crucial entry point for Christian missionaries and European explorers, including David Livingstone.",
    highlights: [
      "The Old Fort (German Boma) - imposing 1897 structure from the colonial era",
      "The Catholic Mission and Museum with the Livingstone Memorial Chapel",
      "The Kaole Ruins - 13th-century Swahili trading town remains",
      "The Caravan Serai museum illustrating the slave trade history",
      "Traditional dhow building craft on the beach",
    ],
  },
  {
    title: "The Ruins of Kilwa Kisiwani and Songo Mnara",
    subtitle: "Echoes of a Forgotten Swahili Empire",
    image: "/images/kilwa.jpg",
    description:
      "Designated as a UNESCO World Heritage Site, the ruins of Kilwa Kisiwani ('Kilwa on the Island') and the nearby Songo Mnara are among the most significant historical sites in all of East Africa. Located on islands just off the coast, this was once the seat of a powerful and fabulously wealthy Swahili sultanate. From the 13th to the 15th centuries, Kilwa controlled the lucrative gold trade from the interior of Africa, minting its own currency and astonishing visitors with its sophistication.",
    historicalSignificance:
      "The Sultanate of Kilwa was a dominant maritime power, whose influence stretched along the entire Swahili Coast. The wealth generated from trading gold, ivory, and other goods funded the construction of magnificent stone mosques, palaces, and homes. The architecture was a masterful blend of Swahili and Islamic styles, utilizing local coral stone. The great explorer Ibn Battuta visited in the 1330s and described it as one of the most beautiful cities he had ever seen.",
    highlights: [
      "The Great Mosque of Kilwa - oldest standing mosque on the East African coast",
      "The Palace of Husuni Kubwa with over 100 rooms and an octagonal swimming pool",
      "The Gereza (Fort) offering panoramic views of the island",
      "Songo Mnara Ruins with well-preserved palaces, mosques, and city walls",
    ],
  },
  {
    title: "Stone Town, Zanzibar",
    subtitle: "The Labyrinthine Soul of the Spice Islands",
    image: "/images/stone-town.jpg",
    description:
      "No cultural tour of Tanzania is complete without immersing yourself in the sensory wonderland of Stone Town. The ancient heart of Zanzibar City, this UNESCO World Heritage Site is not a museum; it is a vibrant, living city where centuries of history unfold in a maze of narrow, winding alleys. The air is thick with the scent of cloves, cardamom, and fresh coffee, and the sounds of the call to prayer mingle with the chatter of the market.",
    historicalSignificance:
      "Stone Town's history and wealth were built on trade. For centuries, it was a pivotal hub for the spice trade and, more infamously, the East African slave trade. It became the capital of the Omani Empire in the 19th century, and the Sultans who ruled from here created an architectural legacy that defines the city today. The buildings are a unique blend of styles, characterized by their thick coral stone walls, expansive courtyards, and, most famously, their intricately carved wooden doors.",
    highlights: [
      "The labyrinthine alleys revealing hidden courtyards and bustling markets",
      "The famous Zanzibar Doors with intricate symbolic carvings",
      "The House of Wonders (Beit-al-Ajaib) - the Sultan's ceremonial palace",
      "The Anglican Cathedral built over the last open slave market site",
      "Darajani Market - a sensory experience of spices, fruits, and seafood",
    ],
  },
]

export default function CulturalSafarisPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center bg-gradient-to-r from-brand-chocolate to-brand-ocean">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">Cultural Tours</h1>
            <p className="text-lg md:text-xl text-white/90">Journey into the Heart of East Africa's Rich Heritage</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 bg-brand-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-brand-chocolate mb-6">
              Discover Tanzania's Cultural Treasures
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tanzania is a land of breathtaking landscapes and iconic wildlife, but its soul is found in its rich,
              diverse, and ancient culture. From the dawn of humanity to the rise and fall of powerful empires, our
              nation's story is written in stone, song, and the vibrant spirit of its people.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A cultural tour with {company.shortName} is more than a holiday; it's a journey into the heart of East Africa. We
              invite you to walk through living history, explore mystical sites, and connect with the traditions that
              make Tanzania truly unique.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 md:py-20 bg-brand-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {destinations.map((destination, index) => (
                <div key={index} className="space-y-8">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative h-96 rounded-2xl overflow-hidden bg-gray-200 ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <h3 className="text-3xl font-black text-brand-chocolate mb-2">{destination.title}</h3>
                      <p className="text-xl text-brand-ocean font-bold mb-4 italic">{destination.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed mb-4">{destination.description}</p>

                      {/* Historical Significance */}
                      <div className="bg-brand-cream p-4 rounded-lg mb-6">
                        <h4 className="font-bold text-brand-chocolate mb-2">Historical Significance:</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{destination.historicalSignificance}</p>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-bold text-brand-chocolate mb-3">What Makes It Special to Visit?</h4>
                        <div className="space-y-2">
                          {destination.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Check size={20} className="text-brand-ocean mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate">
                        <Link href="/contact">Book This Experience</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Divider between destinations */}
                  {index < destinations.length - 1 && <div className="border-t border-gray-300 pt-8" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-chocolate text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Ready to Explore Tanzania's Cultural Heritage?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let us create a meaningful cultural experience that connects you with the heart and soul of Tanzania
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-chocolate">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-brand-chocolate bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
