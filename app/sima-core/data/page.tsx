import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Perspective — AI Perspectives | SIMA360™",
  description:
    "The Data Perspective determines whether the organization keeps learning from the world or starts learning from itself — and whether data can still be trusted once it's in motion, not just on arrival. Eight components, each answered for both the people and the AI system.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, AlertCircle, CheckCircle, GitMerge, Lock, Target, Clock, GitBranch, Eye, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const capabilityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "Data is siloed across departments and systems. Quality is inconsistent and undocumented. There are no data governance policies. AI projects that require reliable data struggle to get it, or proceed on data that isn't trustworthy.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "cyan",
    description:
      "Awareness of data quality issues is growing. Some teams are cleaning data for specific projects. There is no formal governance, no stewardship roles, and no shared understanding of what 'good data' means across the organization.",
  },
  {
    level: 3,
    name: "Applying",
    color: "teal",
    description:
      "Data is made available and improved for targeted AI use cases. Quality is better for project-specific datasets but remains inconsistent across the organization. Data integration is partial — some silos have been addressed, others haven't.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "emerald",
    description:
      "Formal data governance policies are in place. Data stewardship roles are defined and staffed. A data catalog or registry exists. Quality standards are documented and enforced for critical datasets. Integration of key data sources is underway.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "green",
    description:
      "Real-time data quality monitoring is in place. Integrated data pipelines feed AI systems reliably. The data catalog is maintained and used. Data lineage is tracked. Quality issues are caught and resolved before they reach AI systems.",
  },
  {
    level: 6,
    name: "Leading",
    color: "cyan",
    description:
      "Data is treated as a strategic organizational asset. Pipelines are self-optimizing and continuously monitored. Data intelligence is enterprise-wide. The organization's data practices are referenced externally as exemplary.",
  },
]

const levelColorMap: Record<string, string> = {
  slate: "border-l-slate-400 bg-slate-50",
  cyan: "border-l-cyan-400 bg-cyan-50",
  teal: "border-l-teal-400 bg-teal-50",
  emerald: "border-l-emerald-400 bg-emerald-50",
  green: "border-l-green-400 bg-green-50",
}

const numberColorMap: Record<string, string> = {
  slate: "bg-slate-100",
  cyan: "bg-cyan-100",
  teal: "bg-teal-100",
  emerald: "bg-emerald-100",
  green: "bg-green-100",
}

export default function DataPerspectivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-core/data" />
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
              <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 border-cyan-200">
                Perspective
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                <Database className="w-8 h-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Data Perspective
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Data determines whether the organization keeps learning from the world or starts learning from itself
              — and whether data can still be trusted once it's in motion, not just on arrival.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the perspective that asks: <em>is this data still teaching the model something true?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/sima-probe/assessment">
                  Assess Your Data Maturity <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Components, Answered Twice */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Eight Components, Answered Twice</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Data is two jobs wearing one name: making sure what feeds the AI is something it can learn the right
              lessons from, and making sure what reaches people is something they can actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Accuracy and Completeness</CardTitle>
                <CardDescription>
                  Correct, and covering the whole picture — not just the convenient slice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: are the numbers you're deciding on actually correct, and are you seeing the whole
                  situation? For the AI system: is what's feeding the model verified as correct, and does it have the
                  full picture or the slice that was easiest to collect?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <Target className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Relevance and Representativeness</CardTitle>
                <CardDescription>
                  Matches the problem and the real population — including the edge cases.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: does this data actually match the problem, or is it just what happened to be available?
                  For the AI system: does training data reflect the real population it'll operate on, including rare
                  cases, or only the common ones that were easy to collect?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <GitMerge className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Consistency and Definition</CardTitle>
                <CardDescription>
                  A term means the same thing everywhere it shows up.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: do two teams looking at the same term actually mean the same thing? For the AI system:
                  does a given term mean the same thing everywhere it shows up in the pipeline? "Customer" and
                  "churn" shifting meaning isn't inconsistent data — it's several datasets wearing the same name.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Accessibility and Timeliness</CardTitle>
                <CardDescription>
                  Reaches the point of decision when it's actually needed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: can you get the data you need without filing a request and waiting a week? For the AI
                  system: can it reach the data it needs at the moment a decision runs, or does it only show up in
                  reporting after the fact?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <GitBranch className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Traceability and Lineage</CardTitle>
                <CardDescription>
                  Any number or output traced back to where it came from.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: can someone trace a number back to where it originated, and would you know if the
                  dataset changed last week? For the AI system: can you trace what trained this model — every input,
                  which version, where it came from?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Security and Ethics</CardTitle>
                <CardDescription>
                  Sensitive data protected and bias actively monitored — not checked once.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: do the people handling this data know what's sensitive and who's allowed to see it? For
                  the AI system: is output actively monitored for bias and misuse of sensitive information, or was
                  that only checked once, at launch?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <Eye className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Interpretation and Application</CardTitle>
                <CardDescription>
                  Data gets understood, not just seen — and used consistently.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: do decision-makers actually understand what a figure represents, or has each team
                  quietly built its own translation? For the AI system: does the same input get treated the same way
                  regardless of which part of the pipeline touches it?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <RefreshCw className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Continuous Monitoring and Correction</CardTitle>
                <CardDescription>
                  Performance and drift watched on an ongoing basis — and acted on.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: is there a real owner for each important dataset? For the AI system: is drift tracked
                  closely enough to catch a bad pattern before it compounds, with an actual mechanism to roll back or
                  retrain once one's found?
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cyan-50 border-cyan-200">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-200 rounded-lg flex items-center justify-center mb-2">
                  <Database className="w-5 h-5 text-cyan-700" />
                </div>
                <CardTitle className="text-base text-cyan-900">Data Evolves — Watching Has To Also</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-cyan-800">
                  The Boston Housing dataset passed every check anyone ran against it for decades and was still
                  teaching something false the entire time, because nobody was watching after the day it got
                  approved. Once a system starts generating its own data — recommendations, summaries, decisions —
                  the organization's record of "what happened" starts turning into a record of what the system did.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capability Progression */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Capability Progression</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What the Data perspective looks like at each of the six SIMA360 maturity levels.
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
                  <Link href={`/maturity#${lvl.name.toLowerCase()}`} className="font-semibold text-slate-900 hover:text-blue-600 hover:underline transition-colors">{lvl.name}</Link>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Data Gaps</h2>
          <div className="space-y-4">
            {[
              {
                gap: "Data quality is cleaned for the initial model training but not maintained as the system runs.",
                consequence: "Models degrade over time as production data drifts from what the model was trained on.",
              },
              {
                gap: "Integration is treated as a one-time data migration rather than an ongoing pipeline.",
                consequence: "AI systems fall out of sync with source systems and produce outputs that no longer reflect reality.",
              },
              {
                gap: "Data governance is delegated entirely to IT, with no business ownership.",
                consequence: "Governance policies are technically accurate but practically irrelevant to how business users work with data.",
              },
              {
                gap: "Stewardship roles are named but not resourced or empowered.",
                consequence: "Data quality accountability exists on an org chart but not in practice.",
              },
              {
                gap: "The organization assumes that more data is better without evaluating relevance or quality.",
                consequence: "AI systems trained on large volumes of poor-quality data underperform systems trained on smaller, curated datasets.",
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
      <section className="py-16 px-4 bg-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses Data</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current Data maturity level across accessibility, quality, integration, governance, and stewardship — revealing which gaps are most limiting your AI outcomes.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Structures the improvement cycle for data capability — from establishing baseline data quality standards to building continuous data monitoring into AI operations.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Provides data governance policy templates, stewardship role definitions, data quality frameworks, integration checklists, and data catalog starter resources.",
              },
              {
                component: "SIMA-Ascend™",
                href: "/sima-ascend",
                role: "Builds practitioner skills in data management for AI — including data literacy for non-technical stakeholders, data stewardship practices, and AI data pipeline operations.",
              },
            ].map((item) => (
              <Card key={item.component} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={item.href} className="text-cyan-600 hover:text-cyan-800 transition-colors">
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
              className="text-cyan-600 hover:text-cyan-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              View all five perspectives <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your AI Data Foundation Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your Data maturity level and identifies the gaps most likely to undermine your AI investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe/assessment">
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
