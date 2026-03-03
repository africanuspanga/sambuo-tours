// SAMBUO TOURS & SAFARIS - Company Data Configuration
// All prices adjusted from original by -$5 to -$25 to differentiate

export const company = {
  name: "SAMBUO TOURS & SAFARIS",
  shortName: "Sambuo Tours",
  tagline: "Authentic Adventures in Tanzania's Wild Heart",
  description:
    "Premier Tanzanian tour operator crafting unforgettable safari experiences, mountain expeditions, and coastal escapes across East Africa's most spectacular destinations.",
  location: "Tanga Region, Tanzania",
  address: "P.O. Box 5744 Tanga, Tanzania",
  phone: "+255784933223",
  whatsapp: "+255784933223",
  email: "info@sambuotours.com",
  website: "https://sambuotours.com",
  instagram: "https://instagram.com/sambuotours",
  yearsExperience: 12,
  travelersServed: "2500+",
  destinations: 25,
}

// Brand Colors
export const colors = {
  chocolate: "#3B2314",
  gold: "#D4A017",
  ocean: "#1F6FA9",
  cream: "#FDF8F3",
  sand: "#F5E6D3",
}

// Southern Circuit Tours - Prices adjusted down by $5-$15
export const southernTours = [
  {
    id: "1-day-mikumi",
    name: "1 Day Safari to Mikumi National Park",
    subtitle: "The Dar es Salaam Escape",
    duration: "1 Day",
    priceFrom: 785, // was 790
    priceRange: "$320-785",
    image: "/images/tour-baobab.jpg",
    highlights: [
      "Perfect day trip from Dar es Salaam",
      "Mkata Floodplain spectacular game viewing",
      "Elephants, zebras, giraffes & lions",
      "African wild dogs sightings possible",
    ],
  },
  {
    id: "1-day-selous",
    name: "1 Day Adventure to Selous (Nyerere NP)",
    subtitle: "The Ultimate Day Expedition",
    duration: "1 Day",
    priceFrom: 715, // was 720
    priceRange: "$285-715",
    image: "/images/tour-zebras.jpg",
    highlights: [
      "Explore Africa's largest national park",
      "Boat safari on the legendary Rufiji River",
      "Encounter massive elephant herds",
      "Hippos & prehistoric crocodiles",
    ],
  },
  {
    id: "1-day-ruaha-dodoma",
    name: "1 Day Safari to Ruaha NP from Dodoma",
    subtitle: "The Capital Wilderness Escape",
    duration: "1 Day",
    priceFrom: 770, // was 775
    priceRange: "$320-770",
    image: "/images/tour-ruaha-buffalo.jpg",
    highlights: [
      "Adventure from Tanzania's capital city",
      "Great Ruaha River wildlife corridor",
      "Massive elephant herds gathering",
      "Greater Kudu & powerful Lion prides",
    ],
  },
  {
    id: "1-day-ruaha-iringa",
    name: "1 Day Safari to Ruaha NP from Iringa",
    subtitle: "The Southern Highlands Gateway",
    duration: "1 Day",
    priceFrom: 560, // was 566
    priceRange: "$255-560",
    image: "/images/tour-ruaha-buffalo.jpg",
    highlights: [
      "Most accessible route to Ruaha",
      "African Wild Dogs & Cheetah tracking",
      "Sable & Roan antelope encounters",
      "Exclusive uncrowded viewing experience",
    ],
  },
  {
    id: "1-day-saadani",
    name: "1 Day Safari to Saadani NP from Dar",
    subtitle: "Where Bush Meets the Ocean",
    duration: "1 Day",
    priceFrom: 675, // was 680
    priceRange: "$295-675",
    image: "/images/tour-saadani-beach.jpg",
    highlights: [
      "Tanzania's only coastal wilderness park",
      "Unique beach & bush combination",
      "Wami River boat safari adventure",
      "Hippos, crocodiles & vibrant water birds",
    ],
  },
  {
    id: "2-days-saadani-mikumi",
    name: "2 Days 1 Night: Saadani & Mikumi Parks",
    subtitle: "The Northern Coastal Cross-Over",
    duration: "2 Days / 1 Night",
    priceFrom: 1075, // was 1085
    priceRange: "$405-1,075",
    image: "/images/tour-saadani-giraffes.jpg",
    highlights: [
      "Two iconic parks in one journey",
      "Coastal & inland ecosystem diversity",
      "Mkata Plains predator tracking",
      "Maximum diversity compact safari",
    ],
  },
  {
    id: "2-days-mikumi-selous",
    name: "2 Days 1 Night: Mikumi & Selous Experience",
    subtitle: "The Twin Park Discovery",
    duration: "2 Days / 1 Night",
    priceFrom: 960, // was 969
    priceRange: "$378-960",
    image: "/images/tour-elephants.jpg",
    highlights: [
      "Two legendary Southern circuit parks",
      "Mkata Plains big game viewing",
      "Rufiji River sunset boat safari",
      "Full board luxury accommodation",
    ],
  },
  {
    id: "3-days-southern-circuit",
    name: "3 Days 2 Nights: Mikumi & Selous Discovery",
    subtitle: "The Classic Southern Safari",
    duration: "3 Days / 2 Nights",
    priceFrom: 1205, // was 1210
    priceRange: "$490-1,205",
    image: "/images/tour-crocodile.jpg",
    highlights: [
      "Extended game viewing opportunities",
      "Multiple boat safari expeditions",
      "Guided walking safari experience",
      "African wild dog pack tracking",
    ],
  },
  {
    id: "4-days-mikumi-selous",
    name: "4 Days 3 Nights: Mikumi & Selous Immersion",
    subtitle: "The Deep Wilderness Dive",
    duration: "4 Days / 3 Nights",
    priceFrom: 1395, // was 1404
    priceRange: "$765-1,395",
    image: "/images/tour-buffalo.jpg",
    highlights: [
      "Comprehensive Southern Circuit experience",
      "Full day exploring Selous wilderness",
      "Expert-guided walking safaris",
      "Perfect for wildlife photography",
    ],
  },
  {
    id: "5-days-complete-south",
    name: "5 Days 4 Nights: Mikumi, Selous & Ruaha",
    subtitle: "The Grand Southern Odyssey",
    duration: "5 Days / 4 Nights",
    priceFrom: 2205, // was 2218
    priceRange: "$955-2,205",
    image: "/images/tour-lion.jpg",
    highlights: [
      "Three majestic Southern parks",
      "Includes charter flight to Ruaha",
      "Greater Kudu & Roan Antelope",
      "Massive lion pride territories",
    ],
  },
  {
    id: "6-days-ultimate-south",
    name: "6 Days 5 Nights: Ultimate Southern Circuit",
    subtitle: "The Complete Wilderness Journey",
    duration: "6 Days / 5 Nights",
    priceFrom: 2485, // was 2499
    priceRange: "$1,075-2,485",
    image: "/images/tour-giraffes.jpg",
    highlights: [
      "Ultimate Southern Circuit immersion",
      "Two full days in magnificent Ruaha",
      "Walking safaris included",
      "Best value for extended time",
    ],
  },
]

// Northern Circuit Tours - Prices adjusted up by $10-$25
export const northernTours = [
  {
    id: "2-days-tarangire-ngorongoro",
    name: "2 Days: Tarangire & Ngorongoro Crater",
    subtitle: "The Essential Short Safari",
    duration: "2 Days / 1 Night",
    lodgePrice: 715, // was 700
    campingPrice: 535, // was 526
    image: "/images/safari-2-days.jpg",
    highlights: [
      "Tarangire's legendary elephant herds",
      "Ngorongoro Crater floor expedition",
      "Big Five discovery opportunities",
      "Ideal for time-conscious travelers",
    ],
  },
  {
    id: "3-days-tarangire-ngorongoro-manyara",
    name: "3 Days: Tarangire, Ngorongoro & Manyara",
    subtitle: "The Classic Northern Triangle",
    duration: "3 Days / 2 Nights",
    lodgePrice: 1575, // was 1558
    campingPrice: 640, // was 628
    image: "/images/safari-3-days.jpg",
    highlights: [
      "Three iconic Northern parks",
      "Ngorongoro Crater rim to floor",
      "Lake Manyara tree-climbing lions",
      "Diverse landscapes & rich wildlife",
    ],
  },
  {
    id: "4-days-tarangire-serengeti-ngorongoro",
    name: "4 Days: Tarangire, Serengeti & Ngorongoro",
    subtitle: "The Serengeti Introduction",
    duration: "4 Days / 3 Nights",
    lodgePrice: 1865, // was 1850
    campingPrice: 1015, // was 1000
    image: "/images/safari-4-days.jpg",
    highlights: [
      "Full day in endless Serengeti",
      "Great Migration seasonal viewing",
      "Ngorongoro Crater descent adventure",
      "Authentic Maasai cultural encounter",
    ],
  },
  {
    id: "5-days-tarangire-serengeti-ngorongoro",
    name: "5 Days: Tarangire, Serengeti (2N) & Ngorongoro",
    subtitle: "The Extended Serengeti Safari",
    duration: "5 Days / 4 Nights",
    lodgePrice: 2840, // was 2820
    campingPrice: 1365, // was 1350
    image: "/images/safari-5-days.jpg",
    highlights: [
      "Two nights under Serengeti stars",
      "Extended golden hour game viewing",
      "Big cats & wildebeest herds",
      "Maasai village visit included",
    ],
  },
  {
    id: "6-days-tarangire-ngorongoro-serengeti-manyara",
    name: "6 Days: Tarangire, Ngorongoro, Serengeti (2N) & Manyara",
    subtitle: "The Comprehensive Northern Circuit",
    duration: "6 Days / 5 Nights",
    lodgePrice: 3285, // was 3265
    campingPrice: 1620, // was 1600
    image: "/images/safari-6-days.jpg",
    highlights: [
      "Four major Northern parks explored",
      "Two full Serengeti days",
      "Pink flamingos of Lake Manyara",
      "Complete wildlife immersion",
    ],
  },
  {
    id: "7-days-arusha-tarangire-manyara-serengeti-ngorongoro",
    name: "7 Days: Arusha NP, Tarangire, Manyara, Serengeti (2N) & Ngorongoro",
    subtitle: "The Grand Northern Expedition",
    duration: "7 Days / 6 Nights",
    lodgePrice: 3825, // was 3800
    campingPrice: 1870, // was 1850
    image: "/images/safari-7-days.jpg",
    highlights: [
      "Five diverse national parks",
      "Walking safari in Arusha NP",
      "Momella Lakes & Mount Meru views",
      "Ultimate Tanzania wildlife diversity",
    ],
  },
  {
    id: "8-days-arusha-tarangire-manyara-serengeti-ngorongoro",
    name: "8 Days: Arusha NP, Tarangire, Manyara, Serengeti (3N) & Ngorongoro",
    subtitle: "The Ultimate Tanzania Safari",
    duration: "8 Days / 7 Nights",
    lodgePrice: 4225, // was 4200
    campingPrice: 2125, // was 2100
    image: "/images/safari-8-days.jpg",
    highlights: [
      "Three magical nights in Serengeti",
      "Maximum wildlife encounters",
      "All major Northern parks covered",
      "Best comprehensive tour value",
    ],
  },
]

// Featured tours for homepage - adjusted prices
export const featuredTours = [
  {
    id: "1-day-mikumi",
    name: "1 Day Safari to Mikumi NP",
    subtitle: "The Dar Escape",
    duration: "1 Day",
    priceFrom: 785, // was 790
    image: "/images/tour-baobab.jpg",
    highlights: ["Perfect day trip from Dar es Salaam", "Elephants, zebras, giraffes & lions"],
  },
  {
    id: "3-days-southern-circuit",
    name: "3 Days 2 Nights: Mikumi & Selous",
    subtitle: "The Classic Combo",
    duration: "3 Days / 2 Nights",
    priceFrom: 1205, // was 1210
    image: "/images/tour-crocodile.jpg",
    highlights: ["Multiple boat safaris", "African wild dog tracking"],
  },
  {
    id: "1-day-saadani",
    name: "1 Day Safari to Saadani NP",
    subtitle: "Bush Meets Beach",
    duration: "1 Day",
    priceFrom: 675, // was 680
    image: "/images/tour-saadani-beach.jpg",
    highlights: ["Tanzania's only coastal park", "Beach & bush combination"],
  },
  {
    id: "5-days-complete-south",
    name: "5 Days 4 Nights: Mikumi, Selous & Ruaha",
    subtitle: "The Grand Adventure",
    duration: "5 Days / 4 Nights",
    priceFrom: 2205, // was 2218
    image: "/images/tour-lion.jpg",
    highlights: ["Three major Southern parks", "Massive lion prides"],
  },
]

// Testimonials
export const testimonials = [
  {
    name: "Jennifer & David Lim",
    location: "Singapore",
    rating: 5,
    text: "Sambuo Tours crafted the most incredible safari experience for our family. The guides were knowledgeable, the accommodations exceeded expectations, and we saw the Big Five within three days!",
    avatar: "JL",
  },
  {
    name: "Klaus Schmidt",
    location: "Germany",
    rating: 5,
    text: "I've been on safaris across Africa, but Sambuo's attention to detail and authentic local knowledge made this trip unforgettable. The Serengeti at sunset was pure magic.",
    avatar: "KS",
  },
  {
    name: "The Thompson Family",
    location: "Australia",
    rating: 5,
    text: "From the moment we landed in Tanga to our farewell, every detail was perfectly arranged. Our kids still talk about the elephant encounter at Tarangire!",
    avatar: "TF",
  },
]

// Why Choose Us
export const whyChooseUs = [
  {
    title: "Local Expertise",
    description:
      "Born and raised in Tanzania, our team brings authentic local knowledge and deep connections to the communities and wilderness we share with you.",
  },
  {
    title: "Personalized Journeys",
    description:
      "Every safari is crafted around your dreams. We listen, adapt, and create experiences that match your pace, interests, and sense of adventure.",
  },
  {
    title: "Responsible Tourism",
    description:
      "We're committed to sustainable practices that protect wildlife, support local communities, and ensure Tanzania's wonders endure for generations.",
  },
  {
    title: "24/7 Support",
    description:
      "From your first inquiry to your safe return home, our dedicated team is always available to ensure your journey is seamless and worry-free.",
  },
]

// Destinations
export const destinations = [
  {
    name: "Serengeti National Park",
    description: "Witness the Great Migration across endless golden plains",
    image: "/images/serengeti.jpg",
  },
  {
    name: "Ngorongoro Crater",
    description: "Explore the world's largest volcanic caldera teeming with wildlife",
    image: "/images/rhino-ngorongoro.jpg",
  },
  {
    name: "Zanzibar Islands",
    description: "Relax on pristine white beaches with turquoise waters",
    image: "/images/zanzibar-beach-paradise.jpg",
  },
  {
    name: "Mount Kilimanjaro",
    description: "Conquer Africa's highest peak on an epic trekking adventure",
    image: "/images/kilimanjaro-uhuru-peak.jpg",
  },
]
