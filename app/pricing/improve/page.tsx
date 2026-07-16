import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PricingTabs } from "@/components/pricing-tabs"
import { PricingCard, type PricingCardData } from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "Improve Pricing — SIMA-Flow™ | SIMA360™",
  description:
    "SIMA-Flow consulting pricing — Assessment Workshops, Governance Engagements, Organizational Roadmaps, Executive Advisory retainers, and Enterprise Transformation engagements.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/improve",
  },
}

const flowPricing: PricingCardData[] = [
  {
    name: "Assessment Workshop",
    price: "$2,500–5,000",
    features: [],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Assessment%20Workshop%20Inquiry",
    checkClass: "text-lime-700",
  },
  {
    name: "Governance Engagement",
    price: "$10,000–25,000",
    features: [],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Governance%20Engagement%20Inquiry",
    checkClass: "text-lime-700",
  },
  {
    name: "Organizational Roadmap",
    price: "$25,000+",
    features: [],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Organizational%20Roadmap%20Inquiry",
    checkClass: "text-lime-700",
  },
  {
    name: "Executive Advisory",
    price: "Monthly retainer",
    features: [],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Executive%20Advisory%20Inquiry",
    checkClass: "text-lime-700",
  },
  {
    name: "Enterprise Transformation",
    price: "Custom",
    features: [],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Enterprise%20Transformation%20Inquiry",
    checkClass: "text-lime-700",
  },
]

export default function PricingImprovePage() {
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

      <PricingTabs active="improve" />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-700 mb-2">Improve with SIMA-Flow™</p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Accelerate transformation with expert guidance</h1>
            <p className="text-lg text-slate-600">
              Consulting engagements that apply the Core Cycle directly inside your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {flowPricing.map((card) => (
              <PricingCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
