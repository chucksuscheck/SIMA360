import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "SIMA-Flow — Improvement Cycle Architecture | SIMA360™",
  description:
    "SIMA-Flow is the cycle architecture of SIMA360, connecting capability assessment to structured improvement through the Core Cycle and FLAI — the book's disciplined organizational-learning cycle, not a project-delivery methodology.",
  alternates: {
    canonical: "https://www.sima360.org/sima-flow",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Zap,
  RefreshCw,
  Target,
  Search,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Users,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ModuleTabs } from "@/components/module-tabs"

export default function SimaFlowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
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

      <ModuleTabs active="flow" />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="border-l-4 border-green-400 pl-6 mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-2 leading-tight">
              The Execution Engine
              <span className="text-green-600 block">Connecting Perspective to Results</span>
            </h1>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl">
            SIMA Flow™ serves as the execution engine, tying SIMA Core™ models to SIMA Kit™ resourced through two
            cycles that run simultaneously: the macro Core Cycle (Assess Capabilities → Set Groundwork → Execute)
            for business advancement, and the project-level FLAI Cycle for execution within it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-green-500 hover:bg-green-600">
              <a href="https://SIMA360Classes.eventbee.com/boxoffice" target="_blank" rel="noopener noreferrer">
                Register for Training <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                Download Guide
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Two Cycle Overview */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Two Interconnected Cycles</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              SIMA Flow™ operates through two complementary cycles — one for business alignment, one for
              disciplined, evidence-based learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <Layers className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Core Cycle (Macro)</CardTitle>
                <CardDescription>Enterprise-level perspective development and strategic alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Assess Capabilities</h4>
                      <p className="text-sm text-slate-600">Evaluate maturity across five perspectives</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Set Groundwork</h4>
                      <p className="text-sm text-slate-600">Prepare business for execution using SIMA Kit™</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Execute</h4>
                      <p className="text-sm text-slate-600">Run FLAI cycles as disciplined business learning</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <RefreshCw className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>FLAI Cycle (Micro)</CardTitle>
                <CardDescription>Project-level improvement, run as business learning — not delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">F</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Frame</h4>
                      <p className="text-sm text-slate-600">
                        Define the specific operational condition to study — narrow enough that two observers would
                        agree on it
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">L</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Learn</h4>
                      <p className="text-sm text-slate-600">
                        Introduce one deliberate, constrained intervention, treated as an experiment — not a rollout
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">A</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Assess</h4>
                      <p className="text-sm text-slate-600">
                        Observe whether behavior actually shifted, through controls tied to that behavior — not
                        whether activity happened
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">I</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Improve</h4>
                      <p className="text-sm text-slate-600">
                        Decide from what was learned: extend it, target what's still unstable, or reframe the
                        constraint
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Cycle Deep Dive */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">SIMA Flow™ Core Cycle</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The macro flow for evaluating, preparing, and executing AI initiatives with structured learning loops
            </p>
          </div>

          <div className="space-y-12">
            {/* Assess Capabilities */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Assess Capabilities</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  The diagnostic entry point that contextualizes readiness across the five Perspectives: Strategy,
                  Governance, Data, People, and Technology. This is the phase SIMA-Probe is built to support.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Evidence-based maturity level assessment</li>
                  <li>• Perspective-specific maturity evaluation</li>
                  <li>• Gap identification and risk assessment</li>
                  <li>• Readiness validation for next steps</li>
                </ul>
              </div>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Outcomes</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Current maturity level identification</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Perspective-specific readiness scores</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Risk and opportunity mapping</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Set Groundwork */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="bg-emerald-50 border-emerald-200 md:order-1">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Perspective Preparation</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Target className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>
                        <strong>Strategy:</strong> Define objectives and alignment
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>
                        <strong>Governance:</strong> Establish policies and compliance
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Layers className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>
                        <strong>Data:</strong> Validate quality and access
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>
                        <strong>People:</strong> Assign roles and assess skills
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Zap className="w-4 h-4 text-emerald-600 mr-2" />
                      <span>
                        <strong>Technology:</strong> Confirm infrastructure readiness
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="md:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Set Groundwork</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Prepare the business for execution using SIMA Kit™ tools and templates aligned to current
                  maturity levels and perspectives.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Perspective-specific preparation activities</li>
                  <li>• Role-based guidance and templates</li>
                  <li>• Risk validation and mitigation planning</li>
                  <li>• Resource allocation and scoping</li>
                </ul>
              </div>
            </div>

            {/* Execute */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mr-4">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Execute</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Run FLAI as disciplined business learning, not project delivery — each cycle targets
                  whichever perspective is currently the constraint, with what the cycle studies shifting as maturity
                  increases: clarity first, then consistency, then adaptability.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cycles scoped to the current constraint, not a delivery plan</li>
                  <li>• FLAI cycles run as controlled studies, not sprints</li>
                  <li>• Continuous learning and adaptation</li>
                  <li>• Knowledge asset accumulation</li>
                </ul>
              </div>
              <Card className="bg-teal-50 border-teal-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Execution Principles</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <RefreshCw className="w-4 h-4 text-teal-600 mr-2" />
                      <span>Iterative learning loops</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="w-4 h-4 text-teal-600 mr-2" />
                      <span>Evidence-based decision making</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 text-teal-600 mr-2" />
                      <span>Cumulative capability building</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FLAI Cycle Deep Dive */}
      <section id="flai" className="py-16 px-4 bg-green-50 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">FLAI: The Learning Cycle</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A structured method for examining how AI operates inside the business and whether that operation
              produces reliable outcomes over time. Improvement here is a business learning problem, not a
              delivery effort — something implemented, rolled out, and closed. FLAI treats each cycle as a controlled
              study, not a project plan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-2">
                  <Target className="w-6 h-6" />
                </div>
                <CardTitle>Frame</CardTitle>
                <CardDescription>Define the boundary of what's being studied — not the solution</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Start with the constraint — the lowest-scoring perspective from the diagnosis</li>
                  <li>• Isolate one specific operational condition, tied to one capability</li>
                  <li>• Narrow enough that two observers would describe it the same way</li>
                  <li>• Framing doesn't define the solution in advance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle>Learn</CardTitle>
                <CardDescription>Introduce a controlled intervention, treated as an experiment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Introduce one deliberate, constrained change — small enough to isolate its effects</li>
                  <li>• Treat the change as an experiment, not an endpoint</li>
                  <li>• Improvement must be demonstrated through observed behavior</li>
                  <li>• Deployment itself doesn't count as progress</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mb-2">
                  <Search className="w-6 h-6" />
                </div>
                <CardTitle>Assess</CardTitle>
                <CardDescription>Observe behavior through controls tied to what's being studied</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Use controls tied directly to the behavior being studied — not easy metrics</li>
                  <li>• Measure whether behavior shifted, not whether activity happened</li>
                  <li>• Compare decisions, escalations, or interpretation before and after</li>
                  <li>• Avoid governance theater — oversight that looks active but changes nothing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <CardTitle>Improve</CardTitle>
                <CardDescription>Decide what's next from what was actually learned</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• If behavior improved and holds, extend the change into adjacent contexts</li>
                  <li>• If it only improved partially, target where instability persists</li>
                  <li>• If it didn't improve, the constraint was likely misidentified — reframe</li>
                  <li>• The outcome becomes the next cycle's frame — nothing is planned in advance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Why FLAI vs. PDIA (Plan–Do–Inspect–Adapt)?</h3>
                <p className="text-slate-600">
                  PDIA is the established empirical cycle for defined execution work — it assumes the business
                  already knows what outcome it's pursuing. AI maturity improvement, especially at the ambiguous
                  early levels, often doesn't meet that assumption: the business has to learn its way to the
                  answer. Renaming the verbs isn't cosmetic. Plan assumes a known objective; Frame acknowledges the
                  objective must be discovered through careful constraint definition. Do assumes execution toward a
                  known outcome; Learn treats the intervention as an experiment. Inspect evaluates conformance to a
                  standard; Assess observes whether behavior actually shifted. Adapt optimizes a working system;
                  Improve may require reframing the constraint entirely.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">SIMA Flow™ Integration Benefits</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Connecting capability assessment with project execution through structured learning loops
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              SIMA-Flow is the cycle architecture. SIMA-Kit is the operational resource layer it draws from. Flow determines when and how guidance gets applied; Kit ensures that guidance exists at every Maturity Level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Prevents Overreach</h3>
              <p className="text-slate-600">
                Assessment ensures AI projects align with business maturity, avoiding both underperformance and
                overreach
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Generates Learning</h3>
              <p className="text-slate-600">
                Each project becomes both an application and generator of learning, building institutional knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Ensures Alignment</h3>
              <p className="text-slate-600">
                Groundwork phase ensures preparation efforts are tailored to maturity levels and perspectives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement SIMA Flow™?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Transform your AI initiatives from high-risk bets into structured, repeatable capability-building exercises
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-green-900 hover:bg-green-50">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-green-300 text-green-100 hover:bg-green-800 bg-transparent"
            >
              <Link href="/sima-kit">
                Explore SIMA Kit™ <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
