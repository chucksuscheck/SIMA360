import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strategy Perspective — AI Perspectives | SIMA360™",
  description:
    "The Strategy Perspective determines which decisions AI is actually supposed to improve — and what the organization holds constant while it finds out. Eight components, each answered for both the people and the AI system.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target, CheckCircle, AlertCircle, BarChart3, Compass, Eye, Award, Layers, GitBranch, RefreshCw, ClipboardList } from "lucide-react"
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

export default function StrategyPerspectivePage() {
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
                Perspective
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Strategy Perspective
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              Strategy determines which decisions AI is actually supposed to improve, and what the organization holds
              constant while it finds out. It runs on two tracks at once — a Human-Direction System for aligning
              people, and an AI-Application System for applying, watching, and growing the AI itself.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the perspective that answers: <em>which decisions is AI supposed to change, and how would we know if it stopped?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/sima-probe/assessment">
                  Assess Your Strategy Maturity <ArrowRight className="ml-2 w-4 h-4" />
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
              Every AI strategy runs on two tracks at once: a Human-Direction System for aligning people, and an
              AI-Application System for applying, watching, and growing the AI itself. Eight components do the real
              work — and each one has to be answered for both.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Compass className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Current Situation</CardTitle>
                <CardDescription>
                  Where judgment actually holds up today — for people, and for the AI system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: where is judgment strong right now, and where does escalation already fall apart? For
                  the AI system: what can it be trusted to do on the decisions that matter most if they go wrong —
                  and what does its confidence-versus-accuracy record actually say?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Vision</CardTitle>
                <CardDescription>
                  What changes for people, not just what the technology will eventually be allowed to do.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: who's still supposed to step in, and when? For the AI system: what will it eventually
                  be trusted to do, and what monitored evidence — not one successful pilot — gets it there? Leave the
                  people half unanswered and the AI half fills the vacuum by default.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Competitive Advantage</CardTitle>
                <CardDescription>
                  What a competitor licensing the same model still can't reproduce.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: judgment, escalation discipline, and earned trust — slow to copy because it doesn't
                  transfer with a vendor contract. For the AI system: your data, model quality, and how deep it's
                  wired into operations — fragile unless something proprietary keeps it differentiated.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <ClipboardList className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Strategic Choices Roadmap</CardTitle>
                <CardDescription>
                  A set of choices about restraint — what stays out, not just what's expanding.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: what will they keep deciding, and what will they stop deciding — said out loud, not
                  left to default. For the AI system: where does it deliberately stay out for now, and what evidence
                  has to accumulate before that boundary moves?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Required Capabilities</CardTitle>
                <CardDescription>
                  Capability requirements run on two different clocks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: training and escalation instinct built up gradually, through repetition. For the AI
                  system: clean data pipelines, drift monitoring, and a disciplined retraining cadence — built before
                  it's asked to carry weight, not bolted on after something breaks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <GitBranch className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Execution Model</CardTitle>
                <CardDescription>
                  Who acts when something goes wrong.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: who owns escalation, who resources overrides, who's on the hook when a decision goes
                  sideways? For the AI system: who owns the decision to retrain it, and what drift threshold triggers
                  an automatic rollback rather than waiting for someone to notice?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Measures of Success</CardTitle>
                <CardDescription>
                  What gets measured is what gets managed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: override frequency, escalation speed, whether two people reading the same input reach
                  the same conclusion. For the AI system: drift, how well stated confidence matches actual accuracy,
                  and performance on the decisions that matter most — not just the easy ones.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <RefreshCw className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-base">Learning and Adaptation</CardTitle>
                <CardDescription>
                  A strategy that can't change what it learned isn't disciplined — it's static.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: figure out why overrides happened and adjust who has authority to decide. For the AI
                  system: figure out why performance shifted, then retrain against the corrected pattern, adjust what
                  it's allowed to touch, or roll it back until the cause is understood.
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
                  Strategy sets the target the other four perspectives have to hit — pull on any one perspective and
                  the other four move. Governance rigor, clean data, calibrated judgment, and technology readiness are
                  all wasted if the organization never named which decisions AI is actually supposed to improve.
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
              What the Strategy perspective looks like at each of the six SIMA360 maturity levels.
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
                role: "Measures your current Strategy maturity level across all eight components. Produces a scored assessment showing exactly where strategy gaps exist.",
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
              View all five perspectives <ArrowRight className="w-4 h-4" />
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
