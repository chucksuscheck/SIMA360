import type { Metadata } from "next"

const HOMEPAGE_DESCRIPTION =
  "AI increases organizational capability and scales inconsistency. Whether it produces reliable outcomes depends on organizational maturity. SIMA360 diagnoses and builds that maturity — five perspectives, six Maturity Levels."

export const metadata: Metadata = {
  title: "SIMA360 Overview | SIMA360™",
  description: HOMEPAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.sima360.org/overview",
  },
  openGraph: {
    title: "SIMA360 Overview | SIMA360™",
    description: HOMEPAGE_DESCRIPTION,
    url: "https://www.sima360.org/overview",
    siteName: "SIMA360™",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SIMA360 Overview | SIMA360™",
    description: HOMEPAGE_DESCRIPTION,
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Zap, Target, BookOpen, CheckCircle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { FrameworkMap } from "@/components/framework-map"
import { ECOSYSTEM_COMPONENTS, type EcosystemComponent } from "@/lib/sima-ecosystem"

function ecosystemDescription(slug: EcosystemComponent["slug"]): string {
  return ECOSYSTEM_COMPONENTS.find((c) => c.slug === slug)!.description
}

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            Most organizations have deployed AI. Few have developed the maturity to support it.
          </h1>
          <div className="text-left max-w-3xl mx-auto space-y-5 text-lg text-slate-600 leading-relaxed mb-10">
            <p>
              AI risk doesn&rsquo;t always announce itself as failure. Sometimes it emerges quietly as drift — and
              AI gives that drift the ability to scale.
            </p>
            <p>
              It can be thousands of reasonable-looking decisions gradually moving the organization in the wrong
              direction. Individual AI errors may be manageable. At scale, they may not be.
            </p>
            <p>
              The key question becomes: Does your organization have the foundation to reliably control what AI can
              do — while allowing AI the flexibility to create value?
            </p>
            <p>
              The goal is an organizational foundation that keeps AI aligned with intent, detects drift early, and
              enables corrective action before small deviations become systemic problems.
            </p>
            <p>
              That&rsquo;s where SIMA360 comes in. SIMA360 provides the framework for building that foundation —
              giving your organization the steering, brakes, and instrumentation to remain in control, and the
              trained driver who knows how to use them, without limiting AI&rsquo;s potential.
            </p>
            <p>
              SIMA360 assesses Strategy, Governance, Data, People, and Technology to identify organizational
              weaknesses and, more importantly, help you determine what to do about them — making AI-enabled
              outcomes more deliberate, explainable, consistent, and controllable.
            </p>
            <p>
              This isn&rsquo;t a generic maturity checklist. SIMA360 was developed by Dr. Charles Suscheck, a
              leading expert in software development and organizational behavior, drawing together nine
              industry-leading evaluation frameworks and twelve months of focused research into how organizations
              actually govern complex technology at scale.
            </p>
            <p>
              Because when AI participates in decisions that can harm people — or threaten the organization itself
              — control isn&rsquo;t optional. It&rsquo;s the responsibility that comes with using the technology.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sima-probe/assessment">
                Take the sample assessment in 15 minutes and see where you stand <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/the-book">
                The Book
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How the Ecosystem Works — interactive diagram */}
      <FrameworkMap />

      {/* How the Ecosystem Works — five component cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">SIMA-Probe™</CardTitle>
                <CardDescription>{ecosystemDescription("sima-probe")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-probe">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle className="text-lg">SIMA-Core™</CardTitle>
                <CardDescription>{ecosystemDescription("sima-core")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-core">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">SIMA-Flow™</CardTitle>
                <CardDescription>{ecosystemDescription("sima-flow")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-flow">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">SIMA-Kit™</CardTitle>
                <CardDescription>{ecosystemDescription("sima-kit")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-kit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">SIMA-Ascend™</CardTitle>
                <CardDescription>Comprehensive training and certification programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-500 mb-3">
                  Explore and register for training at{" "}
                  <a
                    href="https://SIMA360Classes.eventbee.com/boxoffice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    SIMA360Classes.eventbee.com
                  </a>
                </p>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-ascend">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Five Components. One Integrated System. */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Five Components. One Integrated System.</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              SIMA360 is not a collection of independent tools. It is a structured ecosystem where each component plays
              a specific role and connects to the others in a defined sequence.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              SIMA-Core defines the framework's vocabulary: the five perspectives, <Link href="/maturity" className="text-blue-600 hover:text-blue-800 underline">six maturity levels</Link>, and tool
              categories that every other component operates within. SIMA-Probe applies that vocabulary diagnostically,
              measuring where the organization actually stands across all five perspectives. SIMA-Flow provides the
              improvement cycle architecture — the structured process for moving from current state to target state
              through disciplined, evidence-based iterations. SIMA-Kit supplies the level-specific guidance — entrance
              criteria, goals, strategies, exit criteria — those cycles require at every Maturity Level. SIMA-Ascend builds the practitioner
              capability organizations need to run the system consistently and advance it over time.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/start"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              New to SIMA360? Start here. <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why It's Built This Way */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why It's Built This Way</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Diagnostic first, not prescriptive first — activity and improvement aren't the same thing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Starts Where You Actually Are</h3>
              <p className="text-slate-600">
                Capability is what a system can do. Maturity is whether the organization can handle what it's doing.
                SIMA360 measures the second one first — five perspectives, six Maturity Levels — so improvement is
                grounded in evidence, not assumption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No Single Point of Control</h3>
              <p className="text-slate-600">
                AI touches strategy, governance, data, people, and technology at once — not one part of the
                organization in isolation. A model can be flawless and still fail if nobody defined which decisions
                it's allowed to influence, so SIMA360 tracks all five perspectives independently: the weakest one
                determines whether the system holds up.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Improves Through Disciplined Cycles</h3>
              <p className="text-slate-600">
                Maturity isn't earned in one deployment decision. It's built through repeated, evidence-based cycles
                of assessment and adjustment — the same discipline SIMA360 runs at every Maturity Level, so growth is
                earned one step at a time rather than assumed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built on Research */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Built on Research. Designed for Practice.</h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    SIMA360 is grounded in the research and maturity architecture established in{" "}
                    <Link href="/the-book" className="text-blue-600 hover:text-blue-800 underline">
                      <em>The AI Rush — Too Much Too Soon!</em>
                    </Link>{" "}
                    by Dr. Charles Suscheck. The framework's five perspectives, six maturity levels, and improvement cycle
                    design come directly from that foundation — not from consulting convention.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    The distinction matters. Most AI adoption frameworks are prescriptive — they tell you what to do.
                    SIMA360 is diagnostic first: it measures where you actually are, then structures how you advance.
                    The result is a system that works regardless of industry, technology stack, or current maturity level.
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Who it's for</p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      Leaders who need to move from AI experimentation to organizational capability
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      Governance and compliance teams navigating AI risk without adequate structure
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      Practitioners tasked with building repeatable AI capability, not just running projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      Organizations that have deployed AI but aren't producing reliable outcomes from it
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Know Where You Stand. Advance Deliberately.</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start with an assessment or explore the framework. Both paths lead to the same place: a clear picture of
            your current AI maturity and a structured way to improve it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe/assessment">Start Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent">
              <Link href="/start">Find Your Entry Point</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
