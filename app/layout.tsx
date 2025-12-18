import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kilisafariorgansing.com"),
  title: {
    default: "KiliSafari Organizing | Tanzania Safari Tours, Kilimanjaro Treks & Zanzibar Holidays",
    template: "%s | KiliSafari Organizing",
  },
  description:
    "Experience authentic Tanzania safaris, Mount Kilimanjaro treks, and Zanzibar beach holidays with KiliSafari. Expert guides, custom itineraries, and unforgettable adventures await. 10+ years of expertise.",
  keywords: [
    "Tanzania safari",
    "Kilimanjaro trekking",
    "Kilimanjaro climbing",
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
    "Lemosho route",
    "Tanzania travel",
    "African adventure",
    "Big Five safari",
    "Great Migration",
  ],
  authors: [{ name: "KiliSafari Organizing" }],
  creator: "KiliSafari Organizing",
  publisher: "KiliSafari Organizing",
  generator: "Next.js",
  applicationName: "KiliSafari Organizing",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kilisafariorgansing.com",
    siteName: "KiliSafari Organizing",
    title: "KiliSafari Organizing | Tanzania Safari Tours, Kilimanjaro Treks & Zanzibar Holidays",
    description:
      "Experience authentic Tanzania safaris, Mount Kilimanjaro treks, and Zanzibar beach holidays with expert guides and custom itineraries.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KiliSafari Organizing - Tanzania Safari Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KiliSafari Organizing | Tanzania Safari Tours & Kilimanjaro Treks",
    description:
      "Experience authentic Tanzania safaris, Mount Kilimanjaro treks, and Zanzibar beach holidays with expert guides.",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://kilisafariorgansing.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="canonical" href="https://kilisafariorgansing.com" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
