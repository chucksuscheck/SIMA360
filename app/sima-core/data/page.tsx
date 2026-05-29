import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Dimension — AI Domains | SIMA360™",
  description:
    "The Data Domain encompasses data quality, accessibility, governance, integration, and stewardship — the foundation that every AI system depends on.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, AlertCircle, FolderOpen, CheckCircle, GitMerge, UserCheck, Lock } from "lucide-react"
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

export default function DataDimensionPage() {
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
                Domain
              </Badge>
              <Badge variant="outline" className="text-slate-600">
                <Link href="/sima-core" className="hover:text-cyan-600 transition-colors">SIMA-Core™</Link>
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                <Database className="w-8 h-8 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Data Dimension
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Every AI system is only as reliable as the data it runs on. The Data dimension ensures the organization's information assets are accessible, trustworthy, governed, and structured in a way that AI can actually use.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the dimension that asks: <em>do we have the data AI needs, and can we trust it?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-cyan-600 hover:bg-cyan-700">
                <Link href="/sima-probe">
                  Assess Your Data Maturity <ArrowRight className="ml-2 w-4 h-4" />
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
              Data maturity is assessed across five focus areas that together determine whether the organization's data infrastructure can support reliable AI outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <FolderOpen className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Accessibility</CardTitle>
                <CardDescription>
                  Data that AI needs can be found, retrieved, and used by authorized teams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Data is organized, cataloged, and retrievable. Access controls are defined and enforced. Teams working on AI projects don't spend weeks locating, extracting, and reformatting data before any modeling can begin.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Quality</CardTitle>
                <CardDescription>
                  Data is accurate, complete, consistent, and validated before AI systems consume it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Quality standards are defined for critical datasets. Cleansing and validation processes exist. Quality is monitored continuously, not just checked at the start of a project and forgotten as the system runs in production.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <GitMerge className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Integration</CardTitle>
                <CardDescription>
                  Data from different systems and sources flows together in ways that AI can use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Siloed data sources are connected through integration pipelines, APIs, or data lakes. AI systems can access the full picture they need, not just the subset that happens to be in one easily accessible system.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Governance</CardTitle>
                <CardDescription>
                  Formal policies define how data is collected, retained, accessed, and protected.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Data governance is not just about privacy and compliance — it is about ensuring data can be trusted and used responsibly. Policies are documented, enforced, and reviewed as AI use cases evolve and regulations change.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-cyan-100">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-2">
                  <UserCheck className="w-5 h-5 text-cyan-600" />
                </div>
                <CardTitle className="text-base">Stewardship</CardTitle>
                <CardDescription>
                  Named individuals are accountable for data quality, access, and lifecycle management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Data stewardship roles are defined: who owns which datasets, who is responsible for quality, who approves access. Accountability is not organizational — it is personal and tracked.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cyan-50 border-cyan-200">
              <CardHeader>
                <div className="w-10 h-10 bg-cyan-200 rounded-lg flex items-center justify-center mb-2">
                  <Database className="w-5 h-5 text-cyan-700" />
                </div>
                <CardTitle className="text-base text-cyan-900">Data Is the Limiting Factor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-cyan-800">
                  Most AI projects that fail to deliver results don't fail because of the model — they fail because of the data. Incomplete, inconsistent, or inaccessible data produces unreliable outputs regardless of how sophisticated the AI system is. The Data dimension is where most organizations underinvest and most AI projects stall.
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
              What the Data dimension looks like at each of the six SIMA360 capability levels.
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
              View all five domains <ArrowRight className="w-4 h-4" />
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
