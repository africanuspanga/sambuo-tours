import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section className="py-16 md:py-20 bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-balance">
          Ready for Your African Adventure?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Let us craft the perfect Tanzania experience tailored just for you
        </p>
        <Button
          asChild
          size="lg"
          className="bg-brand-orange hover:bg-brand-orange/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <Link href="/contact">Start Planning</Link>
        </Button>
      </div>
    </section>
  )
}
