import ContactClientPage from "./contact-client"
import { company } from "@/lib/sambuo-data"

export const metadata = {
  title: `Contact Us - ${company.name} | Plan Your Tanzania Adventure`,
  description:
    `Get in touch with ${company.name} to plan your perfect Tanzania safari, Kilimanjaro trek, or Zanzibar beach holiday. Expert advice and custom itineraries available.`,
}

export default function ContactPage() {
  return <ContactClientPage />
}
