import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ModuleTabs } from "@/components/module-tabs"
import { SubscriptionLevels } from "@/components/sima-probe/subscription-levels"
import {
  Target,
  BarChart3,
  CheckCircle2,
  FileText,
  Lightbulb,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Lock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "SIMA-Probe — AI Maturity Assessment | SIMA360™",
  description:
    "SIMA-Probe is SIMA360's behavioral diagnostic instrument — evaluating business AI maturity across the five Perspectives through evidence of how decisions actually hold up under pressure, revealing which perspective is the business's current constraint.",
  alternates: {
    canonical: "https://www.sima360.org/sima-probe",
  },
}

export default function SIMAProbe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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

      <ModuleTabs active="probe" />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="border-l-4 border-blue-400 pl-6 mb-12">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SIMA Probe™
            </h1>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl">
            Diagnose your business's AI maturity across the five Perspectives — behavioral evidence of how
            decisions actually hold up, not a checklist of what's documented
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Link href="/sima-probe/assessment">Begin Free Assessment</Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#what-you-get">See What You Get</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/SIMA360_Sample_Report.pdf" target="_blank" rel="noopener noreferrer">
                See a Sample Report
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is SIMA Probe?</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              SIMA-Probe is SIMA360's maturity evaluation instrument — behavioral, not structural. Where a
              conventional assessment asks whether governance policies exist, whether training programs have been
              completed, or whether systems have been deployed, SIMA-Probe asks how those structures actually
              perform when a decision is contested, when data conditions change, and when the system operates under
              real operational pressure. Those questions produce documentation. SIMA-Probe produces evidence.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              The assessment evaluates each of the five Perspectives — <strong>Strategy</strong>,{" "}
              <strong>Governance</strong>, <strong>Data</strong>, <strong>People</strong>, and{" "}
              <strong>Technology</strong> — independently against the six Maturity Levels, producing a
              perspective-by-perspective maturity profile rather than a single business score. That
              differentiation is the point: it reveals which perspective is currently constraining the
              business's AI reliability, since the system behaves at the level of its least mature perspective,
              not its most advanced one. Knowing which perspective is the constraint is what makes improvement
              sequencing possible.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              The result isn't a score to interpret on your own. Each Maturity Level determination connects directly
              into the Set Groundwork phase of the SIMA-Flow™ Core Cycle — triggering the entrance criteria, goals,
              strategies, and exit criteria SIMA-Kit™ provides for the actual level and perspective the business
              is operating in.
            </p>
            <p className="text-base text-slate-500 leading-relaxed">
              The free assessment below is the Foundation tier: a fixed set of 30 questions, self-scored on a
              6-point scale — a fast, honest starting point. Adaptive question flow and AI-analyzed responses are
              unlocked starting at the Insight tier.
            </p>
          </div>
        </div>
      </section>

      {/* Five Perspectives */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Five Perspectives</h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-12 h-12 mx-auto mb-2 text-blue-600" />
                <CardTitle className="text-lg">Strategy</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 mx-auto mb-2 text-purple-600" />
                <CardTitle className="text-lg">Governance</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-12 h-12 mx-auto mb-2 text-green-600" />
                <CardTitle className="text-lg">Data</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-2 text-orange-600" />
                <CardTitle className="text-lg">People</CardTitle>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 mx-auto mb-2 text-red-600" />
                <CardTitle className="text-lg">Technology</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Within SIMA360 Context */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">SIMA-Probe Within SIMA360</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              SIMA-Probe is specifically designed to support the <strong>Assess Capabilities</strong> phase of the
              SIMA-Flow™ cycle. Results from SIMA-Probe directly inform:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CheckCircle2 className="w-8 h-8 mb-2 text-blue-600" />
                  <CardTitle className="text-lg">Maturity Level Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Establishes current maturity across all five Perspectives</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 mb-2 text-purple-600" />
                  <CardTitle className="text-lg">Guidance Activation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Triggers appropriate recommendations from SIMA-Kit™, matched to business readiness
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-green-600" />
                  <CardTitle className="text-lg">AI Tool Category Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Determines safe starting points from Baseline tools through Autonomous Execution systems
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="w-8 h-8 mb-2 text-orange-600" />
                  <CardTitle className="text-lg">Project Planning Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Identifies entrance criteria and readiness indicators for AI initiatives
                  </p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <TrendingUp className="w-8 h-8 mb-2 text-red-600" />
                  <CardTitle className="text-lg">Constraint Identification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Surfaces which perspective is currently the constraint — the one governing overall reliability —
                    before advancing to higher Maturity Levels
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Maturity Levels */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The SIMA360 Maturity Levels</h2>
            <p className="text-lg text-slate-700 mb-4 text-center leading-relaxed">
              SIMA-Probe evaluates business readiness across all Perspectives to determine which maturity level
              accurately reflects current maturity.
            </p>
            <p className="text-center mb-12">
              <Link href="/maturity" className="text-blue-600 hover:text-blue-800 underline text-sm font-medium">
                View the full maturity guide — what each level means across all five perspectives →
              </Link>
            </p>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-slate-400">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 1</Badge>
                    Initial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    AI interest is real, but nothing yet coordinates it. Activity is possible; consistency isn't.
                    Success here isn't a strategy document — it's narrowing general awareness down to the small
                    number of decisions worth examining first.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 2</Badge>
                    Exploring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Multiple efforts are underway, but they're disconnected — each built on its own assumptions, with
                    no shared standard connecting them. Work spreads across many places without learning
                    accumulating anywhere.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-indigo-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 3</Badge>
                    Applying
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Individual efforts work and can be defended on their own terms, but they don't generalize past the
                    specific context that produced them. The business is productive in ways that don't add up —
                    opportunism, not architecture, is driving outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 4</Badge>
                    Formalizing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Structure exists and holds under normal conditions. The gap shows up specifically when something
                    is contested, urgent, or the world changes underneath it — documentation looks complete before
                    the pressure test runs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-sky-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 5</Badge>
                    Optimizing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    The system is tested against outcomes continuously, and what's learned changes what happens next,
                    not just what gets documented. The challenge is resisting expansion driven by capability rather
                    than readiness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 6</Badge>
                    Leading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Improvement is built into how the business operates day to day, rather than something applied
                    to it periodically. This isn't the final destination — it's the beginning of stewardship.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SubscriptionLevels />

      {/* Getting Started */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Getting Started</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <CardTitle>Choose Your Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Select the subscription level that matches your needs</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                  </div>
                  <CardTitle>Provide Behavioral Evidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Respond based on how decisions actually hold up under pressure — not what the policy says should
                    happen
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <CardTitle>Address the Constraint</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Use your constraining perspective to sequence the next improvement cycle
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                <Link href="/sima-probe/assessment">Begin Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Lock className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h2 className="text-3xl font-bold mb-4">Privacy and Security Commitment</h2>
              <p className="text-lg text-slate-700">
                SIMA-Probe is built with enterprise-grade security and privacy protections
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All data is encrypted in transit and at rest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Role-based access controls ensure data confidentiality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Assessment results visible only to authorized users within your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No data shared with third parties without explicit consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Regular security audits and compliance certifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Data retention policies aligned with industry standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Assess Your AI Maturity?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Start your SIMA-Probe assessment today and get actionable insights to guide your AI journey
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
                <Link href="/sima-probe/assessment">Begin Free Assessment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="mailto:info@sima360.org">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
