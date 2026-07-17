import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PricingTabs } from "@/components/pricing-tabs"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | SIMA360™",
  description:
    "SIMA360 pricing — one platform for every stage of AI maturity. Compare SIMA-Probe assessments, SIMA-Kit resources, SIMA-Flow consulting, and SIMA-Ascend training at a glance.",
  alternates: {
    canonical: "https://www.sima360.org/pricing",
  },
}

const compareColumns = [
  { stage: "Assess", product: "SIMA-Probe™", dot: "#378ADD", href: "/pricing/assess" },
  { stage: "Equip", product: "SIMA-Kit™", dot: "#D85A30", href: "/pricing/equip" },
  { stage: "Improve", product: "SIMA-Flow™", dot: "#639922", href: "/pricing/improve" },
  { stage: "Learn", product: "SIMA-Ascend™", dot: "#1D9E75", href: "/pricing/learn" },
]

type CompareCell = { price: string; descriptor?: string } | null

const compareRows: { tier: string; cells: CompareCell[] }[] = [
  {
    tier: "Entry",
    cells: [
      { price: "Free", descriptor: "Basic assessment" },
      { price: "$19–29", descriptor: "Individual resources" },
      null,
      { price: "$99–199", descriptor: "Individual course" },
    ],
  },
  {
    tier: "Professional",
    cells: [
      { price: "$99–249", descriptor: "Adaptive assessment" },
      { price: "$49–79", descriptor: "Professional resources" },
      { price: "$2,500–5,000", descriptor: "Assessment Workshop" },
      { price: "$199–499", descriptor: "Domain course / learning path" },
    ],
  },
  {
    tier: "Team / Organization",
    cells: [
      { price: "$599/yr", descriptor: "Organization plan" },
      { price: "$149+", descriptor: "Premium Playbooks, Domain & Capability Packs, plus $29–79/mo subscriptions" },
      { price: "$10,000–25,000+", descriptor: "Governance Engagement, Organizational Roadmap, or Executive Advisory retainer" },
      { price: "$995–4,995", descriptor: "Complete curriculum / instructor-led workshop" },
    ],
  },
  {
    tier: "Enterprise",
    cells: [
      { price: "Custom" },
      { price: "Included", descriptor: "with Enterprise" },
      { price: "Included", descriptor: "with Enterprise" },
      { price: "Included", descriptor: "with Enterprise" },
    ],
  },
]

const journeySteps = [
  { stage: "Entry", goal: "Determine current maturity", primary: "SIMA-Probe™", secondary: "The Book" },
  { stage: "Professional", goal: "Begin implementation", primary: "SIMA-Kit™", secondary: "SIMA-Flow™" },
  { stage: "Team", goal: "Train individuals and teams", primary: "SIMA-Ascend™", secondary: "SIMA-Kit™" },
  { stage: "Enterprise", goal: "Enterprise implementation", primary: "Consulting", secondary: "Licensing" },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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

      <PricingTabs active="overview" />

      {/* 1. Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">SIMA360 Pricing</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">One platform. Every stage of AI maturity.</h1>
          <p className="text-lg text-slate-600">
            SIMA360 isn&rsquo;t a maturity score — it&rsquo;s a complete operational maturity ecosystem. Assess where
            you stand, implement with proven resources, build capability across your teams, and transform at scale.
          </p>
        </div>
      </section>

      {/* 2. Capability + price summary table */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Compare</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Every stage, one platform</h2>
          </div>

          <h3 className="text-sm font-semibold text-slate-700 mb-4">Pricing by tier</h3>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 align-bottom border-r-2 border-slate-300">
                    Product
                  </th>
                  {compareRows.map((row) => (
                    <th
                      key={row.tier}
                      className="px-5 py-3 text-center align-bottom text-sm font-semibold text-slate-900 whitespace-nowrap"
                    >
                      {row.tier}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareColumns.map((col, i) => (
                  <tr key={col.stage} className="border-b border-slate-100 last:border-0">
                    <td className="px-5 py-4 align-top bg-slate-50 border-r-2 border-slate-300">
                      <div className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: col.dot }}
                        />
                        <span className="text-sm font-semibold text-slate-900 whitespace-nowrap">{col.stage}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{col.product}</p>
                      <Link
                        href={col.href}
                        className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors whitespace-nowrap mt-1"
                      >
                        View pricing <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                    {compareRows.map((row) => {
                      const cell = row.cells[i]
                      return (
                        <td key={row.tier} className="px-5 py-4 align-top text-center">
                          {cell ? (
                            <>
                              <p className="text-sm font-semibold text-slate-900 whitespace-nowrap">{cell.price}</p>
                              {cell.descriptor && (
                                <p className="text-sm text-slate-600 mt-1">{cell.descriptor}</p>
                              )}
                            </>
                          ) : (
                            <p className="text-sm text-slate-400">—</p>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Journey — stages and the six-step path combined */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Your journey</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Your path through SIMA360</h2>
            <p className="text-lg text-slate-600">
              Each stage has a primary product to buy next and a secondary product that deepens the work — six
              purchases in sequence, each designed to lead naturally into the next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {journeySteps.map((step, i) => (
              <div key={step.stage} className="rounded-lg p-5 border border-slate-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">{step.stage}</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">{step.goal}</p>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Primary</span>
                    <Badge variant="outline" className="bg-slate-900 text-white border-transparent">
                      {step.primary}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Secondary</span>
                    <Badge variant="outline" className="text-slate-700 border-slate-300">
                      {step.secondary}
                    </Badge>
                  </div>
                </div>
                {step.stage === "Enterprise" && (
                  <a
                    href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation"
                    className="mt-3 inline-block text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Schedule a conversation
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">See where your organization stands today.</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start with a free assessment — no account required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe/assessment">
                Start your free assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent"
            >
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a conversation</a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
