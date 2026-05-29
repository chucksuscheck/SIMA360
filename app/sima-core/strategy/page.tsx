import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategy Domain — AI Domains | SIMA360™",
  description:
    "The Strategy Domain ensures AI initiatives align with broader business goals through vision alignment, prioritization, investment planning, and measurable evaluation.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, CheckCircle, AlertCircle, BarChart3, Lightbulb, TrendingUp, DollarSign, ClipboardList } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const capabilityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "AI is viewed as a point solution, not a strategic capability. Decisions about AI initiatives are ad-hoc. No formal vision, prioritization criteria, or success metrics exist. Individual departments may pursue AI independently of organizational direction.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "blue",
    description:
      "Strategic discussion is beginning. A few champions are advocating for AI. There is no shared prioritization framework and no formal process for evaluating which AI investments make sense. Strategy exists in conversation, not in documents.",
  },
  {
    level: 3,
    name: "Applying",
    color: "indigo",
    description:
      "An informal AI roadmap exists. Some alignment to business goals is present for specific projects, but it is project-level, not organizational. Investment planning and ROI tracking are absent or inconsistent.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "cyan",
    description:
      "A documented AI strategy exists that is aligned to organizational objectives. Prioritization criteria are defined. Initial investment tracking is in place. Leadership has formally endorsed the strategy.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "sky",
    description:
      "The AI strategy is dynamic — it is reviewed and updated on a defined cadence. KPIs are measured and tied to business outcomes. AI planning is integrated into the broader organizational strategic planning cycle.",
  },
  {
    level: 6,
    name: "Leading",
    color: "blue",
    description:
      "AI is a core component of organizational strategy and competitive differentiation. The organization contributes to shaping industry direction. Strategic AI governance is sophisticated and self-reinforcing.",
  },
]

const levelColorMap: Record<string, string> = {
  slate: "border-l-slate-400 bg-slate-50",
  blue: "border-l-blue-400 bg-blue-50",
  indigo: "border-l-indigo-400 bg-indigo-50",
  cyan: "border-l-cyan-400 bg-cyan-50",
  sky: "border-l-sky-400 bg-sky-50",
}

const numberColorMap: Record<string, string> = {
  slate: "bg-slate-100",
  blue: "bg-blue-100",
  indigo: "bg-indigo-100",
  cyan: "bg-cyan-100",
  sky: "bg-sky-100",
}

export default function StrategyDomainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-core/strategy" />
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
              <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
            </div>
            <Navigation />
            <Button asChild className="hidden md:inline-flex">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                Domain
              </Badge>
              <Badge variant="outline" className="text-slate-600">
                <Link href="/sima-core" className="hover:text-blue-600 transition-colors">SIMA-Core™</Link>
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Strategy Domain
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              AI without organizational direction is experimentation without purpose. The Strategy domain ensures every AI initiative is anchored to a business outcome, evaluated on evidence, and resourced intentionally.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the domain that answers: <em>why are we doing this, and how will we know it worked?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/sima-probe">
                  Assess Your Strategy Maturity <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sima-core">Back to SIMA-Core™</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Five Focus Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Five Focus Areas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The Strategy domain is assessed across five interconnected focus areas that together determine whether an organization's AI investments are purposeful and sustainable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Vision Alignment</CardTitle>
                <CardDescription>
                  AI initiatives are tied to strategic outcomes, not pursued for their own sake.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Leaders have articulated where AI fits in the organization's future. Individual projects can be traced back to that vision. AI strategy is not separate from business strategy — it is embedded within it.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <ClipboardList className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Prioritization</CardTitle>
                <CardDescription>
                  AI opportunities are evaluated on impact and feasibility before resources are committed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  A defined framework exists for deciding which AI initiatives to pursue, which to defer, and which to abandon. Prioritization is explicit, documented, and revisited as conditions change.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Investment Planning</CardTitle>
                <CardDescription>
                  AI spending is planned with long-term ROI in view, not just near-term cost or novelty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Budgets for AI account for data infrastructure, talent, governance, and ongoing iteration — not just tool licenses. Investment decisions are made with an understanding of what AI actually costs to do well.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Digital Integration</CardTitle>
                <CardDescription>
                  AI strategy is coordinated with broader digital transformation efforts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI is not treated as a separate track. It is integrated into existing technology roadmaps, process improvement initiatives, and organizational change programs so that investments reinforce each other.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Evaluation</CardTitle>
                <CardDescription>
                  Clear success metrics exist and are tracked for each AI initiative.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  What success looks like is defined before a project begins. Results are measured against those definitions. Underperforming initiatives are adjusted or stopped. Learning from outcomes informs future decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-blue-700" />
                </div>
                <CardTitle className="text-base text-blue-900">Why Strategy Comes First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-800">
                  Without strategic alignment, the other four domains produce capability without direction. Data quality, governance rigor, talent investment, and technology infrastructure are all wasted if the organization doesn't know what it's trying to accomplish with AI — and why.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capability Progression */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Capability Progression</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What the Strategy domain looks like at each of the six SIMA360 capability levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilityLevels.map((lvl) => (
              <div
                key={lvl.level}
                className={`rounded-lg border-l-4 p-5 ${levelColorMap[lvl.color] ?? "border-l-slate-300 bg-slate-50"}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${numberColorMap[lvl.color] ?? "bg-slate-100"}`}>
                    {lvl.level}
                  </div>
                  <span className="font-semibold text-slate-900">{lvl.name}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{lvl.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Gaps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Strategy Gaps</h2>
          <div className="space-y-4">
            {[
              {
                gap: "AI strategy lives in the IT department, not in leadership.",
                consequence: "Projects get funded and executed but never connect to business value.",
              },
              {
                gap: "Success metrics are defined after the project is running.",
                consequence: "There is no baseline, so there is no way to know if anything improved.",
              },
              {
                gap: "Investment planning accounts for tools but not for data, talent, or governance.",
                consequence: "Projects stall when the tooling is in place but the infrastructure to use it isn't.",
              },
              {
                gap: "AI roadmaps are built in isolation from the rest of digital transformation.",
                consequence: "Redundant investments, conflicting systems, and organizational confusion about priorities.",
              },
              {
                gap: "Prioritization is driven by enthusiasm rather than evidence.",
                consequence: "High-visibility, low-value projects consume resources that could have moved the organization forward.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">{item.gap}</p>
                  <p className="text-sm text-slate-600">{item.consequence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Connection */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses Strategy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current Strategy maturity level across all five focus areas. Produces a scored assessment showing exactly where strategy gaps exist.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Provides the improvement cycle architecture for closing strategy gaps — from defining the target state to running evidence-based iterations.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Supplies the templates, rubrics, and playbooks needed to build and maintain an AI strategy: vision documents, prioritization frameworks, ROI calculators.",
              },
              {
                component: "SIMA-Ascend™",
                href: "/sima-ascend",
                role: "Builds the practitioner capability to develop, communicate, and sustain an AI strategy — including executive alignment and cross-functional leadership skills.",
              },
            ].map((item) => (
              <Card key={item.component} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={item.href} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {item.component}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/sima-core"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              View all five domains <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your AI Strategy Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your Strategy maturity level and tells you exactly what to do next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe">
                Start the Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
