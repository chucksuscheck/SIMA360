import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Perspective — AI Perspectives | SIMA360™",
  description:
    "The Data Perspective determines whether the organization keeps learning from the world or starts learning from itself — and whether data can still be trusted once it's in motion, not just on arrival. Eight components, each answered for both the people and the AI system.",
  alternates: {
    canonical: "https://www.sima360.org/sima-core/data",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Database, CheckCircle, GitMerge, Lock, Target, Clock, GitBranch, Eye, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { PerspectiveTabs } from "@/components/perspective-tabs"
import { MaturityProgression } from "@/components/sima-core/maturity-progression"
import { PerspectiveSymptoms } from "@/components/sima-core/perspective-symptoms"

const maturityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "Data is present but not yet a managed decision asset. Teams can't reliably say what data would be needed to support a given decision. The work is narrow: identify the elements that matter most to the first decisions to improve.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "cyan",
    description:
      "Data exists but isn't a reliable decision asset — fragmented across systems, definitions varying by team, reconciliation happening informally. Shared definitions for the critical elements are what's needed, not a full data strategy.",
  },
  {
    level: 3,
    name: "Applying",
    color: "teal",
    description:
      "Data supports specific use cases, but the improvements are context-bound — dependent on local assumptions that don't generalize. A data-driven decision that works in one area often degrades when tried elsewhere.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "emerald",
    description:
      "Definitions are standardized and governed across the organization — which creates a new blind spot. The system can't tell a quality failure from representational drift: data that passes every check while no longer representing reality.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "green",
    description:
      "Feedback loops are operational rather than theoretical. When a decision fails, the organization can trace whether the cause was completeness, timeliness, relevance, or drift, and correct it. The temptation is expanding faster than feedback can keep up.",
  },
  {
    level: 6,
    name: "Leading",
    color: "cyan",
    description:
      "Data strategy is tied directly to decision strategy — the organization anticipates where current data will fall short before a new decision gets introduced, rather than waiting for the failure.",
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

      <PerspectiveTabs active="data" />

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
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
              lessons from, and making sure what reaches people is something they can actually use — the
              Human-Direction System and the AI-Application System, data's version of the same split every
              perspective runs on.
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

      <MaturityProgression
        perspectiveName="Data"
        levels={maturityLevels}
        levelColorMap={levelColorMap}
        numberColorMap={numberColorMap}
        sectionBgClass="bg-cyan-50"
      />

      <PerspectiveSymptoms
        perspectiveName="Data"
        items={[
          {
            symptom:
              "Validation scores hold and the model looks fine on paper, but people are quietly working around it, overriding it, redoing the work themselves.",
            explanation:
              "Interpretation and Application and Continuous Monitoring and Correction failing together — nobody built a way to act on what the workarounds are actually saying.",
          },
          {
            symptom:
              "A growing share of what feeds the next version is the system's own prior output, not anything observed independently.",
            explanation:
              "Recursive reinforcement inside the data pipeline — exactly what Traceability and Lineage and Continuous Monitoring and Correction are supposed to catch together.",
          },
          {
            symptom:
              "The system performs well on common cases and poorly on rare, consequential ones — the rare cases don't move a dashboard average.",
            explanation:
              "Relevance and Representativeness failing exactly where it matters most — the edge cases were never represented on purpose.",
          },
          {
            symptom:
              "A workflow changes, customer behavior shifts, an upstream system updates — and the meaning of the incoming data moves before anyone catches it.",
            explanation:
              "Consistency and Definition and Accessibility and Timeliness failing together — the term still looks the same, but what it actually measures has quietly changed.",
          },
          {
            symptom:
              "Past decisions get fed back into training as if they were objectively correct, now repeated by a machine at scale and with total confidence.",
            explanation:
              "Traceability and Lineage and Accuracy and Completeness both skipped — nobody traced where the label came from, and nobody checked whether it was actually right.",
          },
        ]}
      />

      {/* Ecosystem Connection */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses Data</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current Data maturity level across Accuracy and Completeness, Relevance and Representativeness, Consistency and Definition, Traceability and Lineage, Security and Ethics, and Continuous Monitoring and Correction.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Structures the improvement cycle for data capability — from separating a structural quality failure out from representational drift to building the feedback loop that catches recursive reinforcement.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Provides shared-definition templates, representativeness and lineage-tracing checklists, security-and-ethics review guides, and drift-monitoring playbooks.",
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

      <SiteFooter />
    </div>
  )
}
