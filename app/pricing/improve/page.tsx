import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PricingTabs } from "@/components/pricing-tabs"
import { PricingCard, type PricingCardData } from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "Improve Pricing — SIMA-Flow™ | SIMA360™",
  description:
    "SIMA-Flow consulting pricing — Assessment Workshops, Governance Engagements, Business Roadmaps, Executive Advisory retainers, and Enterprise Transformation engagements.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/improve",
  },
}

const flowPricing: PricingCardData[] = [
  {
    name: "Assessment Workshop",
    price: "$2,500–5,000",
    period: null,
    audience: "For teams that need an expert-facilitated read on where they stand across the five Perspectives.",
    features: [
      "Evidence-based maturity level assessment",
      "Perspective-specific maturity evaluation",
      "Gap identification and risk assessment",
      "Readiness validation for next steps",
    ],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Assessment%20Workshop%20Inquiry",
    checkClass: "text-lime-700",
    badge: null,
    featured: false,
  },
  {
    name: "Governance Engagement",
    price: "$10,000–25,000",
    period: null,
    audience: "For businesses establishing policy and compliance ahead of AI execution.",
    features: [
      "Perspective-specific preparation activities",
      "Governance and compliance framework setup",
      "Role-based guidance and templates",
      "Risk validation and mitigation planning",
    ],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Governance%20Engagement%20Inquiry",
    checkClass: "text-lime-700",
    badge: null,
    featured: true,
  },
  {
    name: "Business Roadmap",
    price: "$25,000+",
    period: null,
    audience: "For businesses translating an assessment into a sequenced, org-wide execution plan.",
    features: [
      "Multi-perspective execution roadmap",
      "FLAI cycle sequencing across teams",
      "Milestone and ownership mapping",
      "Progress checkpoints tied to reassessment",
    ],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Business%20Roadmap%20Inquiry",
    checkClass: "text-lime-700",
    badge: null,
    featured: false,
  },
  {
    name: "Executive Advisory",
    price: "Monthly retainer",
    period: null,
    audience: "For leadership teams that want ongoing access to expert guidance between engagements.",
    features: [
      "Recurring strategy sessions",
      "Direct access to a SIMA360 practitioner",
      "Ad hoc decision support",
      "Priority scheduling for engagements",
    ],
    ctaLabel: "Schedule a conversation",
    ctaHref: "mailto:info@sima360.org?subject=Executive%20Advisory%20Inquiry",
    checkClass: "text-lime-700",
    badge: null,
    featured: false,
  },
  {
    name: "Enterprise Transformation",
    price: "Included",
    period: null,
    audience: "For businesses already on a SIMA Enterprise plan.",
    features: [
      "Bundled with SIMA Enterprise",
      "Embedded practitioner support",
      "Coordinated multi-team FLAI cycles",
      "Custom governance and reporting",
      "Executive steering committee facilitation",
    ],
    ctaLabel: "Included with Enterprise",
    checkClass: "text-lime-700",
    badge: { label: "ENTERPRISE", className: "bg-slate-900 text-white" },
    featured: false,
  },
]

export default function PricingImprovePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/SIMA360 Bare Logo.png"
                alt="SIMA360™"
                width={1659}
                height={948}
                className="h-10 w-auto object-contain"
              />
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
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-700 mb-2">Improve with SIMA-Flow™</p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Accelerate transformation with expert guidance</h1>
            <p className="text-lg text-slate-600">
              Consulting engagements that apply the Core Cycle directly inside your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
            {flowPricing.map((card) => (
              <PricingCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
