import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PricingTabs } from "@/components/pricing-tabs"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Ascend Pricing — SIMA-Ascend™ | SIMA360™",
  description:
    "SIMA-Ascend training pricing — individual online courses, domain courses, capability learning paths, complete curriculum, instructor-led workshops, and enterprise training.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/ascend",
  },
}

const ascendPricing = [
  { name: "Individual online course", price: "$99–199" },
  { name: "Domain course", price: "$199–399" },
  { name: "Capability learning path", price: "$499" },
  { name: "Complete curriculum", price: "$995" },
  { name: "Instructor-led workshop", price: "$1,995–4,995" },
  { name: "Enterprise training", price: "Custom" },
]

export default function PricingAscendPage() {
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

      <PricingTabs active="ascend" />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">SIMA-Ascend™</p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Build capability, not just knowledge</h1>
            <p className="text-lg text-slate-600">
              Structured training programs and certification pathways for practitioners and teams.
            </p>
          </div>
          <details className="group rounded-lg border border-slate-200 bg-white" open>
            <summary className="flex items-center justify-between cursor-pointer list-none px-5 py-4 [&::-webkit-details-marker]:hidden">
              <span className="font-semibold text-slate-900 text-sm">Training pricing</span>
              <ChevronDown className="w-4 h-4 text-slate-400 transition-transform group-open:rotate-180" />
            </summary>
            <div className="px-5 pb-5 pt-0 border-t border-slate-100">
              <div className="divide-y divide-slate-100 mt-2">
                {ascendPricing.map((row) => (
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
