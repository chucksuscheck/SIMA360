import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Governance Perspective — AI Perspectives | SIMA360™",
  description:
    "The Governance Perspective determines whether AI-influenced decisions stay inside their constraints once the system is running — watched continuously, not reviewed on a schedule. Six components, each answered for both the people and the AI system.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, AlertCircle, FileText, Scale, Eye, RefreshCw, Users } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const capabilityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "No AI governance structure exists. AI tools are adopted without formal review. Ethical risks are unaddressed. Compliance obligations related to AI are not tracked. Accountability for AI outcomes is unclear.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "indigo",
    description:
      "Awareness of governance needs is emerging. Informal discussions about AI risk are occurring but produce no formal policies. Compliance questions are being raised without consistent answers. A few individuals are concerned; the organization is not yet structured to act.",
  },
  {
    level: 3,
    name: "Applying",
    color: "purple",
    description:
      "Some governance policies exist for specific AI use cases. Compliance efforts are a patchwork — thorough for high-visibility projects, absent for others. Risk is managed reactively. Documentation is incomplete and inconsistent.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "violet",
    description:
      "A formal AI governance framework is in place with defined roles and responsibilities. Compliance documentation covers major regulatory requirements. Ethical review processes exist. Risk identification is proactive rather than reactive.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "blue",
    description:
      "Governance operates as a continuous function. Compliance is monitored in near-real time. Ethical review is embedded in the AI development lifecycle, not bolted on afterward. Risk posture is continuously assessed and communicated to leadership.",
  },
  {
    level: 6,
    name: "Leading",
    color: "indigo",
    description:
      "Governance is a source of organizational competitive advantage and trust. The organization contributes to shaping industry and regulatory standards. AI systems include built-in self-monitoring with human oversight. Governance practices are published and referenced by others.",
  },
]

const levelColorMap: Record<string, string> = {
  slate: "border-l-slate-400 bg-slate-50",
  indigo: "border-l-indigo-400 bg-indigo-50",
  purple: "border-l-purple-400 bg-purple-50",
  violet: "border-l-violet-400 bg-violet-50",
  blue: "border-l-blue-400 bg-blue-50",
}

const numberColorMap: Record<string, string> = {
  slate: "bg-slate-100",
  indigo: "bg-indigo-100",
  purple: "bg-purple-100",
  violet: "bg-violet-100",
  blue: "bg-blue-100",
}

export default function GovernancePerspectivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-core/governance" />
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
              <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-200">
                Perspective
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Governance Perspective
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Governance keeps AI-influenced decisions inside their constraints once the system is actually running —
              watched continuously, not reviewed on a schedule, with the AI enforcing part of that control itself.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the perspective that asks: <em>does control hold when a decision is contested, urgent, or high-consequence — not just on paper?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/sima-probe/assessment">
                  Assess Your Governance Maturity <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Six Components, Answered Twice */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Six Components, Answered Twice</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Governance is two jobs within one system: one aimed at people interpreting or overriding AI, one aimed
              at keeping the AI itself inside its boundaries. Six components cover both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-indigo-100">
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                  <Scale className="w-5 h-5 text-indigo-600" />
                </div>
                <CardTitle className="text-base">Decision Rights</CardTitle>
                <CardDescription>
                  Which decisions are made by people, assisted by AI, or automated.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: where must a human sign off before a decision takes effect, and where is discretion
                  allowed? For the AI system: what is it authorized to decide or execute entirely on its own — and
                  where does that authority end?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-indigo-100">
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <CardTitle className="text-base">Roles and Accountability</CardTitle>
                <CardDescription>
                  Clear ownership for AI systems, models, data, and outcomes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: who's accountable when a decision made with, around, or against an AI recommendation
                  turns out wrong? For the AI system: who owns its behavior over time — who can retrain, constrain,
                  or roll it back?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-indigo-100">
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                <CardTitle className="text-base">Policies and Standards</CardTitle>
                <CardDescription>
                  How AI-assisted decisions are supposed to be read.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: does written policy say how a recommendation should be read — authoritative, one input
                  among several, or requiring escalation? For the AI system: what confidence thresholds trigger an
                  automatic hold or flag before a human sees the output?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-indigo-100">
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                  <AlertCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <CardTitle className="text-base">Risk, Compliance, and Controls</CardTitle>
                <CardDescription>
                  Continuously identified and mitigated — not certified once and forgotten.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: do the people acting on AI-influenced outputs actually know which obligations attach to
                  that decision? For the AI system: what risks does it get checked against continuously — and does
                  that check actually stop anything, or just log it after the fact?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-indigo-100">
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                  <Eye className="w-5 h-5 text-indigo-600" />
                </div>
                <CardTitle className="text-base">Transparency and Traceability</CardTitle>
                <CardDescription>
                  A decision reconstructed end to end, not just a model dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: are override and escalation patterns actually visible to leadership, or only known
                  informally inside individual teams? For the AI system: can an output be traced back to the specific
                  model version, data, and policy that produced it?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-indigo-100">
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-2">
                  <RefreshCw className="w-5 h-5 text-indigo-600" />
                </div>
                <CardTitle className="text-base">Continuous Monitoring and Improvement</CardTitle>
                <CardDescription>
                  Checking whether the other five components still match how the system actually behaves.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: is escalation guidance actually updated as teams learn where the system earns trust —
                  or does it sit still until something breaks? For the AI system: is drift watched closely enough to
                  trigger retraining or rollback before it strays too far?
                </p>
              </CardContent>
            </Card>

            <Card className="bg-indigo-50 border-indigo-200 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <div className="w-10 h-10 bg-indigo-200 rounded-lg flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-indigo-700" />
                </div>
                <CardTitle className="text-base text-indigo-900">Governance Is Not a Checkpoint</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-indigo-800">
                  Most governance gets built around checkpoints: review before it ships, escalate when something
                  breaks, meet when the committee's already on the calendar. Agentic AI doesn't wait for the schedule
                  — once a system is executing decisions on its own, it can act a thousand times before the committee
                  opens its calendar invite. The critical question shifts from "was the process followed correctly?"
                  to two questions: is the person still behaving the way the boundary intended, and is the AI still
                  behaving the way its authorization intended?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capability Progression */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Capability Progression</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What the Governance perspective looks like at each of the six SIMA360 maturity levels.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common Governance Gaps</h2>
          <div className="space-y-4">
            {[
              {
                gap: "Governance policies exist on paper but are not enforced in practice.",
                consequence: "Compliance risk accumulates silently until an audit, incident, or regulatory action forces a reckoning.",
              },
              {
                gap: "Ethical review is treated as a one-time pre-launch checkpoint.",
                consequence: "AI systems that were fair at launch can drift into bias as data distributions shift over time.",
              },
              {
                gap: "Risk ownership is diffused — everyone is responsible, which means no one is.",
                consequence: "When an AI system causes harm, the response is slow and accountability is contested.",
              },
              {
                gap: "Legal and compliance teams are informed of AI deployments after the fact.",
                consequence: "Regulatory exposure is not caught until remediation is more expensive than prevention would have been.",
              },
              {
                gap: "Documentation is treated as overhead, not as a governance asset.",
                consequence: "The organization cannot answer basic questions about its AI systems in an audit or public inquiry.",
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
      <section className="py-16 px-4 bg-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses Governance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current Governance maturity level — identifying whether your ethical oversight, compliance, and risk management practices are ad-hoc, partial, or systematic.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Structures the improvement cycle for building governance capability — from identifying gaps in ethical oversight to formalizing audit-ready documentation processes.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Provides governance templates, risk registers, ethical review checklists, compliance mapping tools, and accountability frameworks ready for immediate use.",
              },
              {
                component: "SIMA-Ascend™",
                href: "/sima-ascend",
                role: "Builds practitioner competency in responsible AI governance — including training on AI ethics, regulatory landscape, and how to lead governance conversations with executives.",
              },
            ].map((item) => (
              <Card key={item.component} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={item.href} className="text-indigo-600 hover:text-indigo-800 transition-colors">
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
              className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              View all five perspectives <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your AI Governance Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your Governance maturity level and identifies your highest-priority compliance and accountability gaps.
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
