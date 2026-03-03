import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sambuotours.com"),
  title: {
    default: "SAMBUO TOURS & SAFARIS | Authentic Tanzania Safari Adventures",
    template: "%s | SAMBUO TOURS & SAFARIS",
  },
  description:
    "Discover authentic Tanzania with SAMBUO TOURS & SAFARIS. Expert-guided safaris, Kilimanjaro treks, Zanzibar beach holidays & cultural experiences. Based in Tanga Region, Tanzania. Book your adventure today!",
  keywords: [
    "Tanzania safari",
    "SAMBUO TOURS",
    "Tanga safari",
    "Kilimanjaro trekking",
    "Serengeti tours",
    "Ngorongoro Crater safari",
    "Zanzibar holidays",
    "Northern Circuit safari",
    "Southern Circuit safari",
    "Tanzania tour operator",
    "African wildlife safari",
    "Mount Kilimanjaro climb",
    "Marangu route",
    "Machame route",
    "Tanzania travel",
    "Big Five safari",
    "Great Migration",
    "Mikumi National Park",
    "Selous Game Reserve",
    "Ruaha National Park",
  ],
  authors: [{ name: "SAMBUO TOURS & SAFARIS" }],
  creator: "SAMBUO TOURS & SAFARIS",
  publisher: "SAMBUO TOURS & SAFARIS",
  generator: "Next.js",
  applicationName: "SAMBUO TOURS & SAFARIS",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sambuotours.com",
    siteName: "SAMBUO TOURS & SAFARIS",
    title: "SAMBUO TOURS & SAFARIS | Authentic Tanzania Safari Adventures",
    description:
      "Discover authentic Tanzania with expert-guided safaris, Kilimanjaro treks, and Zanzibar beach holidays. Your adventure starts here.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SAMBUO TOURS & SAFARIS - Tanzania Safari Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAMBUO TOURS & SAFARIS | Authentic Tanzania Safari Adventures",
    description:
      "Discover authentic Tanzania with expert-guided safaris, Kilimanjaro treks, and Zanzibar beach holidays.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://sambuotours.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://sambuotours.com" />
      </head>
      <body className="font-sans antialiased bg-brand-cream">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
