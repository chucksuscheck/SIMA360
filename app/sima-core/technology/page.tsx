import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technology Domain — AI Domains | SIMA360™",
  description:
    "The Technology Domain covers the infrastructure, tools, lifecycle management, security, and innovation practices needed to deploy and scale AI reliably.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cog, AlertCircle, Server, Wrench, GitBranch, Lock, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const capabilityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "No AI-specific infrastructure exists. AI tools are used ad-hoc, often as consumer or departmental applications with no formal selection or evaluation. Security implications of AI tools are not reviewed. There is no model or pipeline lifecycle management.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "slate2",
    description:
      "Experimenting with AI tools using available cloud resources. No standardization of tools or platforms across teams. Minimal security review of AI tool usage. Teams are learning what infrastructure AI actually requires through trial and error.",
  },
  {
    level: 3,
    name: "Applying",
    color: "orange",
    description:
      "Specific AI tools are selected for pilot projects. Some initial infrastructure investment is underway. Basic security considerations are being addressed for high-visibility use cases. MLOps practices are nascent or absent.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "amber",
    description:
      "A standardized AI technology stack is defined and governed. Formal security policies cover AI tool adoption and data use. MLOps practices are emerging — structured pipelines for model development, testing, and deployment are taking shape.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "yellow",
    description:
      "Infrastructure is scalable and cost-optimized. Automated ML pipelines are in production. Proactive security monitoring for AI systems is in place. Model performance is tracked and models are retrained or retired on a defined schedule.",
  },
  {
    level: 6,
    name: "Leading",
    color: "lime",
    description:
      "State-of-the-art infrastructure supports autonomous AI operations with robust human oversight. The organization contributes to technology innovation and open-source tooling. AI infrastructure is a competitive differentiator. Operational AI is self-monitoring within defined governance boundaries.",
  },
]

const levelColorMap: Record<string, string> = {
  slate: "border-l-slate-400 bg-slate-50",
  slate2: "border-l-slate-500 bg-slate-100",
  orange: "border-l-orange-400 bg-orange-50",
  amber: "border-l-amber-400 bg-amber-50",
  yellow: "border-l-yellow-400 bg-yellow-50",
  lime: "border-l-lime-400 bg-lime-50",
}

const numberColorMap: Record<string, string> = {
  slate: "bg-slate-100",
  slate2: "bg-slate-200",
  orange: "bg-orange-100",
  amber: "bg-amber-100",
  yellow: "bg-yellow-100",
  lime: "bg-lime-100",
}

export default function TechnologyDomainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-core/technology" />
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
              <Badge variant="secondary" className="bg-slate-200 text-slate-800 border-slate-300">
                Domain
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                <Cog className="w-8 h-8 text-slate-700" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Technology Domain
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              AI requires infrastructure — compute, storage, pipelines, security controls, and lifecycle management — that most organizations have not purpose-built for the demands AI actually places on them. The Technology domain assesses whether those foundations are in place.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the domain that asks: <em>can our technology infrastructure reliably support AI at the scale we need?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-slate-700 hover:bg-slate-800">
                <Link href="/sima-probe">
                  Assess Your Technology Maturity <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
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
              Technology maturity is assessed across five focus areas that together determine whether the organization's technical foundation can support scalable, secure, and sustainable AI operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Server className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Infrastructure</CardTitle>
                <CardDescription>
                  Compute, storage, and network resources capable of supporting AI workloads at scale.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI workloads — particularly training and inference for large models — have resource requirements that differ significantly from traditional enterprise workloads. Infrastructure planning accounts for those requirements, whether on-premises, cloud-native, or hybrid, and scales with usage rather than being provisioned once and forgotten.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Wrench className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Tools</CardTitle>
                <CardDescription>
                  A standardized, evaluated set of AI platforms and tools that the organization has selected and governs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI tool selection is not ad-hoc. A defined evaluation and approval process exists. Standardized tools reduce the operational burden of supporting a fragmented toolscape and allow the organization to build shared expertise rather than re-learning across different platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <GitBranch className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Lifecycle Management</CardTitle>
                <CardDescription>
                  Structured pipelines for developing, testing, deploying, monitoring, and retiring AI models.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI models are not static. They degrade, they drift, and they need to be retrained or replaced. Lifecycle management — sometimes called MLOps — provides the structured processes for managing models from development through retirement, treating AI operations with the same rigor as software engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Lock className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Security</CardTitle>
                <CardDescription>
                  Controls that protect AI systems and the data they use from threats and misuse.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI introduces attack surfaces that traditional security frameworks were not designed to address: adversarial inputs, model theft, data poisoning, prompt injection, and the exposure of sensitive training data. AI-specific security controls are defined, implemented, and reviewed alongside general security practices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Innovation Enablement</CardTitle>
                <CardDescription>
                  Infrastructure and processes that support rapid, safe experimentation with new AI approaches.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Mature AI organizations don't only operate existing systems — they experiment with new capabilities in structured, low-risk environments. Sandbox environments, experimentation platforms, and rapid prototyping processes allow innovation to occur without disrupting production systems.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-100 border-slate-300">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center mb-2">
                  <Cog className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base text-slate-900">Technology Follows Maturity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  A common mistake is deploying sophisticated AI infrastructure before the organization has the people, governance, and data to use it. SIMA360 explicitly matches technology adoption to capability level — tools that require Level 4 or 5 capabilities are ill-advised at Level 1 or 2, regardless of vendor claims.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capability Progression */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Capability Progression</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What the Technology domain looks like at each of the six SIMA360 capability levels.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Technology Gaps</h2>
          <div className="space-y-4">
            {[
              {
                gap: "AI tools are adopted by individual teams without central evaluation or approval.",
                consequence: "The organization ends up with a fragmented toolscape, duplicated costs, and inconsistent security posture across AI deployments.",
              },
              {
                gap: "Models are deployed but not monitored — no drift detection, no performance tracking.",
                consequence: "Models degrade silently. Stakeholders lose trust in AI outputs without understanding why quality has declined.",
              },
              {
                gap: "Security reviews for AI systems reuse general IT frameworks without addressing AI-specific risks.",
                consequence: "Attack surfaces like adversarial inputs, prompt injection, and training data exposure remain unaddressed.",
              },
              {
                gap: "Infrastructure is provisioned for the pilot and not scaled for production.",
                consequence: "AI systems that work in testing fail under production load, creating the impression that AI doesn't work when the real problem is infrastructure.",
              },
              {
                gap: "Experimentation happens in production environments because no sandbox infrastructure exists.",
                consequence: "Failed experiments disrupt live systems. Risk-aversion grows. Innovation slows.",
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
      <section className="py-16 px-4 bg-slate-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses Technology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current Technology maturity level — assessing infrastructure readiness, tool governance, lifecycle management, and security posture for AI operations.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Structures improvement cycles for building technology capability — from selecting and governing AI tools to implementing MLOps pipelines and proactive security monitoring.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Provides AI tool evaluation frameworks, infrastructure readiness checklists, MLOps pipeline templates, and AI-specific security control references.",
              },
              {
                component: "SIMA-Ascend™",
                href: "/sima-ascend",
                role: "Builds practitioner skill in AI technology operations — including infrastructure planning, model lifecycle management, and AI security awareness for technical and non-technical roles.",
              },
            ].map((item) => (
              <Card key={item.component} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
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
              className="text-slate-700 hover:text-slate-900 font-medium inline-flex items-center gap-1 transition-colors"
            >
              View all five domains <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your AI Technology Foundation Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your Technology maturity level and identifies the infrastructure and operational gaps most likely to limit your AI outcomes.
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
