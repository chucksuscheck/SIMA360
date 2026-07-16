import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PricingTabs } from "@/components/pricing-tabs"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Improve Pricing — SIMA-Flow™ | SIMA360™",
  description:
    "SIMA-Flow consulting pricing — Assessment Workshops, Governance Engagements, Organizational Roadmaps, Executive Advisory retainers, and Enterprise Transformation engagements.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/improve",
  },
}

const flowPricing = [
  { name: "Assessment Workshop", price: "$2,500–5,000" },
  { name: "Governance Engagement", price: "$10,000–25,000" },
  { name: "Organizational Roadmap", price: "$25,000+" },
  { name: "Executive Advisory", price: "Monthly retainer" },
  { name: "Enterprise Transformation", price: "Custom" },
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-700 mb-2">Improve with SIMA-Flow™</p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Accelerate transformation with expert guidance</h1>
            <p className="text-lg text-slate-600">
              Consulting engagements that apply the Core Cycle directly inside your organization.
            </p>
          </div>
          <details className="group rounded-lg border border-slate-200 bg-white" open>
            <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
              <span className="font-semibold text-slate-900 text-sm">Consulting pricing</span>
              <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-5 pt-0 border-t border-slate-100">
              <div className="divide-y divide-slate-100 mt-2">
                {flowPricing.map((row) => (
                  <div key={row.name} className="flex items-center justify-between py-3">
                    <span className="text-sm text-slate-700">{row.name}</span>
                    <span className="text-sm font-semibold text-slate-900">{row.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
