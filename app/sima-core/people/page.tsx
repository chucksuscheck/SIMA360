import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "People Perspective — AI Perspectives | SIMA360™",
  description:
    "The People Perspective determines how AI outputs get interpreted, trusted, challenged, or waved through — and whether the organization is building calibrated judgment or just moving fast. Five components, each answered for both the people and the AI system.",
  alternates: {
    canonical: "https://www.sima360.org/sima-core/people",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Users, BookOpen, Eye, RefreshCw, GraduationCap, Shield } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { MaturityProgression } from "@/components/sima-core/maturity-progression"
import { PerspectiveSymptoms } from "@/components/sima-core/perspective-symptoms"

const maturityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "People don't yet share a frame for AI's role in their work — they can't explain what it's supposed to change, what stays their responsibility, or where judgment is expected. Basic role clarity has to exist first.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "sky",
    description:
      "Expectations are unclear and behavior reflects it. Some people lean heavily on AI outputs, others ignore them, with no shared guidance. What's needed is just basic expectations for when AI should be used, and how.",
  },
  {
    level: 3,
    name: "Applying",
    color: "blue",
    description:
      "Usage shows real value, but interpretation stays local — two experienced people can act on the same output differently and both believe they're right. The inconsistency hides behind case complexity instead of missing standards.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "violet",
    description:
      "The problem looks solved: training exists, guidance is documented. What completion rates can't show is what happens under pressure — people revert to personal judgment, and the variation training was supposed to eliminate comes back.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "purple",
    description:
      "Interpretation is consistent and explainable. People understand why the guidance exists and apply it similarly across contexts. The difficulty is sustaining that as the system reaches new users and new use cases.",
  },
  {
    level: 6,
    name: "Leading",
    color: "sky",
    description:
      "Interpretation itself becomes a source of improvement — differences in how outputs get applied are analyzed and fed back into guidance and training. The failure to watch for is complacency.",
  },
]

const levelColorMap: Record<string, string> = {
  slate: "border-l-slate-400 bg-slate-50",
  sky: "border-l-sky-400 bg-sky-50",
  blue: "border-l-blue-400 bg-blue-50",
  violet: "border-l-violet-400 bg-violet-50",
  purple: "border-l-purple-400 bg-purple-50",
}

const numberColorMap: Record<string, string> = {
  slate: "bg-slate-100",
  sky: "bg-sky-100",
  blue: "bg-blue-100",
  violet: "bg-violet-100",
  purple: "bg-purple-100",
}

export default function PeoplePerspectivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
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
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-sky-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              People Perspective
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              People determines how AI outputs get interpreted, trusted, challenged, or waved through. It's where the
              Human-Direction System and the AI-Application System actually touch — and the contact runs both ways.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the perspective that asks: <em>would two experienced people reach the same conclusion from the same output, for the same reason?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/sima-probe/assessment">
                  Assess Your People Maturity <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Five Components */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Five Components</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Five components build calibrated judgment across an organization — and they only work as one connected
              system, not five separate activities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Interpretation Rules</CardTitle>
                <CardDescription>
                  Shared guidance for when a recommendation gets acted on, verified, or escalated.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Not a rigid manual — just explicit enough that no team is left inventing its own rules. Can your
                  organization say, in one sentence, why the same recommendation got followed by one team last week
                  and ignored by another?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <Eye className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Visibility</CardTitle>
                <CardDescription>
                  A way to see when outputs are followed, adjusted, ignored, or overridden — and why.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Lightweight decision logs or exception tracking are usually enough. If an output got quietly
                  overridden three times this week, would anyone know?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <RefreshCw className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Training as an Evolving System</CardTitle>
                <CardDescription>
                  Teaching gets revised on a real cadence, not installed once at rollout.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Teach the current rules, let people use the system under them for a real stretch of time, then
                  revise the training based on what the AI actually did in that window — because the AI keeps
                  changing after training day.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <GraduationCap className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Learning From Failure</CardTitle>
                <CardDescription>
                  Mistakes get examined as evidence, not treated as a performance problem.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  People need to be able to say "the recommendation looked right and the outcome wasn't" without it
                  becoming a performance conversation. A mistake examined within days changes behavior before the
                  pattern repeats.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <Shield className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Guarding Against Overtrust</CardTitle>
                <CardDescription>
                  Friction gets built in on purpose, so trust stays earned rather than assumed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Trust in AI is earned the way trust in a new colleague is earned — incrementally, tied to a track
                  record, and revocable the moment the evidence changes: mandatory second checks, spot audits, and
                  explicit permission to say a recommendation looks wrong.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sky-50 border-sky-200">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-200 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-sky-700" />
                </div>
                <CardTitle className="text-base text-sky-900">Assistant, Not Replacement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-sky-800">
                  The line isn't philosophical — it's a design choice visible in any workflow: does a human have to
                  affirmatively act on a recommendation, or does it execute unless someone intervenes? The moment
                  it's the second one, overtrust stops being occasional and becomes structural.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MaturityProgression
        perspectiveName="People"
        levels={maturityLevels}
        levelColorMap={levelColorMap}
        numberColorMap={numberColorMap}
        sectionBgClass="bg-sky-50"
      />

      <PerspectiveSymptoms
        perspectiveName="People"
        items={[
          {
            symptom: "Decisions that should land the same way stop lining up across teams.",
            explanation:
              "Traces to Interpretation Rules: without shared guidance, each team is quietly deciding the rule for itself.",
          },
          {
            symptom: "Outputs get accepted quickly because they're well-formed, not because anyone checked them.",
            explanation:
              "Guarding Against Overtrust with no friction left in the system — the same failure that put fabricated case law into a federal court filing.",
          },
          {
            symptom: "People quietly fix, bypass, or reinterpret outputs without surfacing any of it.",
            explanation:
              "A Visibility failure: the correction is real, but nothing captured it — usually a culture signal before it's a process signal.",
          },
          {
            symptom:
              "Experienced people stop forming independent judgments because the system has been right often enough to feel authoritative, and expertise atrophies from disuse.",
            explanation:
              "What happens when Training as an Evolving System stalls: nobody recalibrated guidance often enough to catch the erosion while it was still reversible.",
          },
          {
            symptom: "The system's recent behavior lines up suspiciously well with what your most vocal team already believed.",
            explanation:
              "Learning From Failure skipped at the verification step — a correction propagated before anyone confirmed it was right.",
          },
        ]}
      />

      {/* Ecosystem Connection */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses People</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current People maturity level — assessing Interpretation Rules, Visibility, Training as an Evolving System, Learning From Failure, and Guarding Against Overtrust.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Structures improvement cycles for building calibrated judgment — from closing a specific interpretation gap to building organization-wide guarding against overtrust.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Provides interpretation-rule templates, visibility and override-logging patterns, evolving-training cadences, and guarding-against-overtrust playbooks.",
              },
              {
                component: "SIMA-Ascend™",
                href: "/sima-ascend",
                role: "Is the People perspective's primary delivery mechanism — structured training programs that build AI literacy, responsible AI competency, and practitioner capability at every level of the organization.",
              },
            ].map((item) => (
              <Card key={item.component} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={item.href} className="text-sky-600 hover:text-sky-800 transition-colors">
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
              className="text-sky-600 hover:text-sky-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              View all five perspectives <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your AI People Readiness Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your People maturity level and identifies the literacy and capability gaps most likely to limit your AI outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe/assessment">
                Start Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent">
              <Link href="/sima-ascend">
                Explore SIMA-Ascend™ Training <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
