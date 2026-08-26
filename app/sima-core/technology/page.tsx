import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Technology Perspective — AI Perspectives | SIMA360™",
  description:
    "The Technology Perspective determines whether the business can change the model, the environment, or the data underneath it without renegotiating everything built around it. Six components, each answered for both the people and the AI system.",
  alternates: {
    canonical: "https://www.sima360.org/sima-core/technology",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Cog, Server, Wrench, GitBranch, Lock, Zap, Eye } from "lucide-react"
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
      "Technology hasn't formed into a real AI operating environment — tools get tested informally with no stable pattern of business use. The work is identifying where AI use should begin and what basic conditions need to exist first.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "slate2",
    description:
      "Technology is fragmented and isolated in small pilots. Change is easy here, but not usefully so — if a model is replaced, very little breaks, because very little is actually supported yet. Stable integration points need to be built.",
  },
  {
    level: 3,
    name: "Applying",
    color: "orange",
    description:
      "Technology supports real workflows, creating value and dependency at the same time. The test is what happens when a component changes: if it causes unexpected downstream issues, the system is stable only until it's touched.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "amber",
    description:
      "Technology is structured and integrated, but the limitation is inflexibility rather than instability. Changes are possible but expensive, slow, or require coordination across components — stable in a way that resists improvement.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "yellow",
    description:
      "The system is designed to evolve — dependencies are understood and changes can be introduced without destabilizing decisions. The failure to watch for is overextension: adding complexity faster than it can be governed.",
  },
  {
    level: 6,
    name: "Leading",
    color: "lime",
    description:
      "Technology is deliberately structured to support ongoing change, managing dependency as a first-class concern. The failure mode here runs the other way: building for flexibility that isn't yet needed.",
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

export default function TechnologyPerspectivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
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

      <PerspectiveTabs active="technology" />

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="border-l-4 border-slate-400 pl-6 mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Technology Perspective
            </h1>
            <p className="text-lg text-slate-500 italic">
              It is the perspective that asks: <em>can this system sustain change without degrading decision quality?</em>
            </p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl">
            Technology determines whether the business can change the model, the environment, or the data
            underneath it — separately, and not always at the same pace — without renegotiating everything built
            around it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-slate-700 hover:bg-slate-800">
              <Link href="/sima-probe/assessment">
                Assess Your Technology Maturity <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Six Components, Answered Twice */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Six Components, Answered Twice</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Six components, each answering its own version of "is this good enough to carry what we're about to
              put on it" — for the Human-Direction System (who builds and owns the architecture) and the
              AI-Application System (the model's own technical behavior) alike, technology's version of the same
              split every perspective runs on. The weakest one sets the ceiling — readiness isn't an average, it's
              the lowest score.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Server className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Architecture and Adaptability</CardTitle>
                <CardDescription>
                  A component gets replaced instead of the whole system rebuilt.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: could your team swap a major vendor without a multi-quarter rebuild? For the AI system:
                  is model access abstracted behind a service layer, so a model swap doesn't require rebuilding the
                  workflows around it?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Wrench className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Integration</CardTitle>
                <CardDescription>
                  AI that doesn't connect to the rest of the business stays a demo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: does AI fit into how work actually gets done? For the AI system: can it reach the data
                  and tools it needs inside existing workflows, or does someone manually bridge the gap every time?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Zap className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Reliability</CardTitle>
                <CardDescription>
                  A model that's right most of the time but unavailable when it matters trains people to stop trusting it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: if this system went down during your highest-stakes decision window, would anyone
                  notice before a customer did? For the AI system: does it have the fault tolerance to keep
                  performing consistently under real, not ideal, conditions?
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
                  AI expands what's worth attacking — more data flowing through more places.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: do you know everywhere this system's outputs and underlying data can be accessed, and
                  by whom? For the AI system: are its APIs and infrastructure secured and monitored, or trusted by
                  default because they're internal?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <GitBranch className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">AI Operations and Automation</CardTitle>
                <CardDescription>
                  Deploying a model is the easy part. Maintaining it is where most businesses get surprised.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: if this model needs to be rolled back tomorrow, does anyone know exactly how? For the
                  AI system: are deployment, testing, and rollback automated enough that a correction doesn't depend
                  on one engineer's memory?
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-2">
                  <Eye className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base">Observability</CardTitle>
                <CardDescription>
                  Model drift, environment drift, and data drift move on three schedules that rarely announce themselves.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  For people: if behavior shifted last month, could you tell which of the three actually caused it?
                  For the AI system: is drift tracked continuously across all three, or only checked when someone
                  notices something's off?
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-100 border-slate-300 md:col-span-2 lg:col-span-3">
              <CardHeader>
                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center mb-2">
                  <Cog className="w-5 h-5 text-slate-700" />
                </div>
                <CardTitle className="text-base text-slate-900">Success Creates Its Own Lock-In</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">
                  A powerful model bolted onto infrastructure that was never built to carry it is a jet engine on a
                  horse-drawn wagon. Businesses that avoid this assume from day one that the model, the technology
                  around it, and the data flowing through it will all keep moving — separately, and not always at the
                  same pace — and build for replaceability instead of permanence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <MaturityProgression
        perspectiveName="Technology"
        levels={maturityLevels}
        levelColorMap={levelColorMap}
        numberColorMap={numberColorMap}
        sectionBgClass="bg-slate-100"
      />

      <PerspectiveSymptoms
        perspectiveName="Technology"
        items={[
          {
            symptom: "Teams avoid an obvious model upgrade because migration feels too expensive to attempt.",
            explanation:
              "Unmanaged Model Drift — dependency that accumulated quietly during normal operation. Traces to Architecture and Adaptability left unbuilt, and Observability that never flagged it while it was still small.",
          },
          {
            symptom:
              "Similar workflows start producing inconsistent results, and the usual suspects — the model, the code — haven't changed.",
            explanation:
              "Usually Environment Drift: something the AI depends on moved. Integration and Observability failing together — the dependency existed, but nobody was watching the seam.",
          },
          {
            symptom: "Nothing in the release history changed, but the behavior did.",
            explanation:
              "Data Drift — the one most monitoring setups are least equipped to catch, because they're built to flag model and code changes, not shifts in what's flowing through an unchanged system.",
          },
          {
            symptom:
              "When the system actually goes down, nobody can execute the fix quickly — the rollback plan has never been rehearsed.",
            explanation:
              "Reliability and AI Operations and Automation failing together: disaster recovery was assumed, not tested.",
          },
          {
            symptom: "Nobody can produce a current list of who or what can reach this system's outputs and underlying data.",
            explanation: "Security treated as a launch-day checklist instead of a standing condition.",
          },
        ]}
      />

      {/* Ecosystem Connection */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses Technology</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current Technology maturity level — assessing Architecture and Adaptability, Integration, Reliability, Security, AI Operations and Automation, and Observability.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Structures improvement cycles for building sustainable technology capability — from abstracting a dependency behind a service layer to building model, environment, and data drift observability.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Provides architecture-readiness checklists, integration and reliability templates, AI operations and rollback runbooks, and drift-observability references.",
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
              View all five perspectives <ArrowRight className="w-4 h-4" />
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
