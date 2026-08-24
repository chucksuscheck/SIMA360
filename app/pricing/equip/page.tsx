import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PricingTabs } from "@/components/pricing-tabs"
import { PricingCard, type PricingCardData } from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "Equip Pricing — SIMA-Kit™ | SIMA360™",
  description:
    "SIMA-Kit Marketplace pricing — individual resources, professional resources, premium playbooks, domain packs, capability packs, and recurring library subscriptions.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/equip",
  },
}

const pricingCards: PricingCardData[] = [
  {
    name: "Individual Resources",
    price: "$19–29",
    period: null,
    audience: "For a single, focused resource need.",
    features: ["Prompt checklist", "Meeting agenda", "AI project canvas", "Workshop worksheet"],
    ctaLabel: "Browse individual resources",
    ctaHref: "mailto:info@sima360.org?subject=Individual%20Resources%20Inquiry",
    checkClass: "text-orange-600",
    badge: null,
    featured: false,
  },
  {
    name: "Professional Resources",
    price: "$49–79",
    period: null,
    audience: "For teams standing up formal AI governance.",
    features: ["Governance Charter", "AI Policy Template", "Risk Register", "Data Inventory", "Stakeholder Analysis"],
    ctaLabel: "Browse professional resources",
    ctaHref: "mailto:info@sima360.org?subject=Professional%20Resources%20Inquiry",
    checkClass: "text-orange-600",
    badge: null,
    featured: false,
  },
  {
    name: "Premium Playbooks",
    price: "$149–299",
    period: null,
    audience: "For organizations executing a coordinated rollout.",
    features: [
      "AI Governance Playbook",
      "Executive AI Adoption Guide",
      "Change Management Playbook",
      "AI Strategy Workbook",
    ],
    ctaLabel: "Browse premium playbooks",
    ctaHref: "mailto:info@sima360.org?subject=Premium%20Playbooks%20Inquiry",
    checkClass: "text-orange-600",
    badge: null,
    featured: true,
  },
  {
    name: "Domain Packs",
    price: "$299",
    period: "each",
    audience:
      "Every resource for one functional domain — templates, worksheets, checklists, workshop guides, sample artifacts, and implementation guidance.",
    features: ["Strategy", "Governance", "Data", "People", "Technology"],
    ctaLabel: "Browse domain packs",
    ctaHref: "mailto:info@sima360.org?subject=Domain%20Packs%20Inquiry",
    checkClass: "text-orange-600",
    badge: null,
    featured: false,
  },
  {
    name: "Capability Packs",
    price: "By maturity level",
    period: null,
    audience:
      "Everything required for an organization operating at one AI Maturity Level, organized by that level.",
    features: ["Exploring Toolkit", "Applying Toolkit", "Formalizing Toolkit", "Optimizing Toolkit", "Leading Toolkit"],
    ctaLabel: "Browse capability packs",
    ctaHref: "mailto:info@sima360.org?subject=Capability%20Packs%20Inquiry",
    checkClass: "text-orange-600",
    badge: null,
    featured: false,
  },
]

const kitSubscriptions: PricingCardData[] = [
  {
    name: "Starter Library",
    price: "$29",
    period: "/mo",
    audience: "For individuals who need a steady trickle of new resources.",
    features: ["Two downloads each month", "Resource updates"],
    ctaLabel: "Start Starter Library",
    ctaHref: "mailto:info@sima360.org?subject=Start%20Starter%20Library",
    checkClass: "text-orange-600",
    badge: null,
    featured: false,
  },
  {
    name: "Professional Library",
    price: "$79",
    period: "/mo",
    audience: "For teams that draw on the Kit Marketplace regularly.",
    features: ["Unlimited downloads", "New resources", "Monthly webinars", "Office hours", "Best-practice updates"],
    ctaLabel: "Start Professional Library",
    ctaHref: "mailto:info@sima360.org?subject=Start%20Professional%20Library",
    checkClass: "text-orange-600",
    badge: null,
    featured: false,
  },
  {
    name: "Enterprise Library",
    price: "Included",
    period: null,
    audience: "For organizations already on a SIMA Enterprise plan.",
    features: ["Bundled with SIMA Enterprise"],
    ctaLabel: "Included with Enterprise",
    checkClass: "text-orange-600",
    badge: { label: "ENTERPRISE", className: "bg-slate-900 text-white" },
    featured: false,
  },
]

export default function PricingEquipPage() {
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

      <PricingTabs active="equip" />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 mb-2">
              Equip with SIMA-Kit™
            </p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Buy exactly the resources you need</h1>
            <p className="text-lg text-slate-600">
              No bloated bundle — organizations purchase precisely the implementation resources their maturity level
              calls for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
            {pricingCards.map((card) => (
              <PricingCard key={card.name} card={card} />
            ))}
          </div>

          <div className="mt-16">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Kit subscriptions</h2>
              <p className="text-sm text-slate-600">Recurring access to the full resource library.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
              {kitSubscriptions.map((sub) => (
                <PricingCard key={sub.name} card={sub} />
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
