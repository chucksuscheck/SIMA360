import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PricingTabs } from "@/components/pricing-tabs"
import { PricingCard, type PricingCardData } from "@/components/pricing-card"
import { CheckCircle2, ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Equip Pricing — SIMA-Kit™ | SIMA360™",
  description:
    "SIMA-Kit Marketplace pricing — individual resources, professional resources, premium playbooks, domain packs, capability packs, and recurring library subscriptions.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/equip",
  },
}

const kitAccordion: { title: string; items: string[]; note?: string }[] = [
  {
    title: "Individual resources ($19–29)",
    items: ["Prompt checklist", "Meeting agenda", "AI project canvas", "Workshop worksheet"],
  },
  {
    title: "Professional resources ($49–79)",
    items: ["Governance Charter", "AI Policy Template", "Risk Register", "Data Inventory", "Stakeholder Analysis"],
  },
  {
    title: "Premium playbooks ($149–299)",
    items: [
      "AI Governance Playbook",
      "Executive AI Adoption Guide",
      "Change Management Playbook",
      "AI Strategy Workbook",
    ],
  },
  {
    title: "Domain packs ($299 each)",
    items: ["Strategy", "Governance", "Data", "People", "Technology"],
    note: "Each includes templates, worksheets, checklists, workshop guides, sample artifacts, and implementation guidance.",
  },
  {
    title: "Capability packs (by maturity level)",
    items: ["Exploring Toolkit", "Applying Toolkit", "Formalizing Toolkit", "Optimizing Toolkit", "Leading Toolkit"],
    note: "Organized by AI Maturity Level. Each toolkit contains everything required for an organization operating at that level.",
  },
]

const kitSubscriptions: PricingCardData[] = [
  {
    name: "Starter Library",
    price: "$29",
    period: "/mo",
    features: ["Two downloads each month", "Resource updates"],
    ctaLabel: "Start Starter Library",
    ctaHref: "mailto:info@sima360.org?subject=Start%20Starter%20Library",
    checkClass: "text-orange-600",
  },
  {
    name: "Professional Library",
    price: "$79",
    period: "/mo",
    features: ["Unlimited downloads", "New resources", "Monthly webinars", "Office hours", "Best-practice updates"],
    ctaLabel: "Start Professional Library",
    ctaHref: "mailto:info@sima360.org?subject=Start%20Professional%20Library",
    checkClass: "text-orange-600",
  },
  {
    name: "Enterprise Library",
    price: "Included",
    features: ["Bundled with SIMA Enterprise"],
    ctaLabel: "Included with Enterprise",
    checkClass: "text-orange-600",
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-orange-600 mb-2">
              Equip with SIMA-Kit™
            </p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Buy exactly the resources you need</h1>
            <p className="text-lg text-slate-600 mb-8">
              No bloated bundle — organizations purchase precisely the implementation resources their maturity level
              calls for.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#kit-marketplace">Browse the Kit Marketplace</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:info@sima360.org?subject=Kit%20Marketplace%20Inquiry">
                  Talk to us about Kit resources
                </a>
              </Button>
            </div>
          </div>

          <div id="kit-marketplace" className="space-y-3 scroll-mt-24">
            {kitAccordion.map((item, i) => (
              <details key={item.title} className="group rounded-lg border border-slate-200 bg-white" open={i === 0}>
                <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-slate-900 text-sm">{item.title}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 pt-0 border-t border-slate-100">
                  <ul className="grid sm:grid-cols-2 gap-2 mt-4 text-sm text-slate-700">
                    {item.items.map((entry) => (
                      <li key={entry} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                  {item.note && <p className="text-xs text-slate-500 mt-4">{item.note}</p>}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Kit subscriptions</h2>
            <p className="text-sm text-slate-600 mb-6">Recurring access to the full resource library.</p>
            <div className="grid sm:grid-cols-3 gap-6 items-stretch">
              {kitSubscriptions.map((sub) => (
                <PricingCard key={sub.name} card={sub} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
