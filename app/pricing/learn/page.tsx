import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PricingTabs } from "@/components/pricing-tabs"
import { PricingCard, type PricingCardData } from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "Learn Pricing — SIMA-Ascend™ | SIMA360™",
  description:
    "SIMA-Ascend training pricing — individual online courses, domain courses, capability learning paths, complete curriculum, instructor-led workshops, and enterprise training.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/learn",
  },
}

const ascendPricing: PricingCardData[] = [
  {
    name: "Individual online course",
    price: "$99–199",
    features: [],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Individual%20Online%20Course",
    checkClass: "text-emerald-600",
  },
  {
    name: "Domain course",
    price: "$199–399",
    features: [],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Domain%20Course",
    checkClass: "text-emerald-600",
  },
  {
    name: "Capability learning path",
    price: "$499",
    features: [],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Capability%20Learning%20Path",
    checkClass: "text-emerald-600",
  },
  {
    name: "Complete curriculum",
    price: "$995",
    features: [],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Complete%20Curriculum",
    checkClass: "text-emerald-600",
  },
  {
    name: "Instructor-led workshop",
    price: "$1,995–4,995",
    features: [],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Instructor-Led%20Workshop",
    checkClass: "text-emerald-600",
  },
  {
    name: "Enterprise training",
    price: "Custom",
    features: [],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Enterprise%20Training%20Inquiry",
    checkClass: "text-emerald-600",
  },
]

export default function PricingLearnPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
                <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
              </div>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      <PricingTabs active="learn" />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">
              Learn with SIMA-Ascend™
            </p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Build capability, not just knowledge</h1>
            <p className="text-lg text-slate-600">
              Structured training programs and certification pathways for practitioners and teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {ascendPricing.map((card) => (
              <PricingCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
