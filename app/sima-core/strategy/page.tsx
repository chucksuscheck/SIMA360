import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Strategy Perspective — AI Perspectives | SIMA360™",
  description:
    "The Strategy Perspective determines which decisions AI is actually supposed to improve — and what the business holds constant while it finds out. Eight components, each answered for both the people and the AI system.",
  alternates: {
    canonical: "https://www.sima360.org/sima-core/strategy",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Target, BarChart3, Compass, Eye, Award, Layers, GitBranch, RefreshCw, ClipboardList } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PerspectiveTabs } from "@/components/perspective-tabs"
import { MaturityProgression } from "@/components/sima-core/maturity-progression"
import { PerspectiveSymptoms } from "@/components/sima-core/perspective-symptoms"

const maturityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "Strategy hasn't formed enough to guide decisions. Leaders speak in terms of opportunity or competitive pressure, but nothing yet points at a specific decision. Success here is narrowing general awareness down to a small number of candidate decisions worth examining.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "blue",
    description:
      "Strategy is conceptual. Leaders agree AI matters but describe different objectives when asked directly. Initiatives are driven by tools and enthusiasm rather than defined decision problems, so work spreads without learning accumulating anywhere.",
  },
  {
    level: 3,
    name: "Applying",
    color: "indigo",
    description:
      "Individual teams can explain what they're improving and show measurable gains — but there's no shared logic for prioritizing across teams, so everything looks equally worth pursuing. The constraint is the inability to stop work.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "cyan",
    description:
      "Strategy is explicit and aligned — priority decisions are identified and connected to outcomes. The weakness shows up when evidence contradicts the plan: divergence gets treated as an execution problem, not a signal to reconsider the framing.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "sky",
    description:
      "Strategy is continuously tested against outcomes, and what's learned changes what happens next. Movement becomes selective. The challenge is resisting expansion driven by capability rather than readiness.",
  },
  {
    level: 6,
    name: "Leading",
    color: "blue",
    description:
      "Strategy isn't separate from operations — it's the mechanism decisions improve through. The business anticipates where its approach will fail and adjusts before degradation shows up.",
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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/SIMA360 Bare Logo.png"
                alt="SIMA360™"
                width={1659}
                height={948}
                className="h-10 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
                <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
              </div>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      <PerspectiveTabs active="strategy" />

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="border-l-4 border-blue-400 pl-6 mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Strategy Perspective
            </h1>
            <p className="text-lg text-slate-500 italic">
              It is the perspective that answers: <em>which decisions is AI supposed to change, and how would we know if it stopped?</em>
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl">
            Strategy determines which decisions AI is actually supposed to improve, and what the business holds
            constant while it finds out. It runs on two tracks at once — a Human-Direction System for aligning
            people, and an AI-Application System for applying, watching, and growing the AI itself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/sima-probe/assessment">
                Assess Your Strategy Maturity <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
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
                  all wasted if the business never named which decisions AI is actually supposed to improve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MaturityProgression
        perspectiveName="Strategy"
        levels={maturityLevels}
        levelColorMap={levelColorMap}
        numberColorMap={numberColorMap}
        sectionBgClass="bg-blue-50"
      />

      <PerspectiveSymptoms
        perspectiveName="Strategy"
        items={[
          {
            symptom:
              "Activity outpaces understanding — more automation gets rolled out while nobody can explain what's actually improving operationally.",
            explanation:
              "What happens when Required Capabilities and Vision get answered for the AI system but left blank for people — the infrastructure gets built, but the evidence of what it's earned the right to do never does.",
          },
          {
            symptom: "The same AI recommendation leads three different teams to three different decisions.",
            explanation:
              "The direct symptom of an unanswered Strategic Choices Roadmap and Measures of Success — if neither specified how a recommendation should be read, three teams will reasonably read it three different ways.",
          },
          {
            symptom:
              "Model accuracy climbs while customer trust erodes, or escalations get worse — the AI's numbers and the business's actual outcomes stop matching up.",
            explanation:
              "Traces to Measures of Success and Learning and Adaptation breaking down together — the metrics were tracked, but nothing fed what they showed back into how either system operates.",
          },
          {
            symptom: "Overrides stop making sense, and the pattern becomes messy or invisible to leadership.",
            explanation:
              "Almost always Execution Model or Learning and Adaptation left undefined — nobody owns the override, or nobody's studying what it means.",
          },
          {
            symptom:
              "People start trusting AI output because it sounds right, not because anyone checked it — synthetic confidence takes hold.",
            explanation:
              "Unlike the other four, this doesn't trace to a single component — it's what happens when several of the eight go unanswered at once and the gap between them stops being visible.",
          },
        ]}
      />

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
                Start Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent">
              <Link href="/sima-kit">
                Explore SIMA-Kit™ Resources <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
