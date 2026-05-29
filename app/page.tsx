import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA360™ — Structured AI Maturity Framework",
  description:
    "SIMA360 is the operational framework for organizational AI maturity. Five integrated components: assessment, improvement cycles, implementation tools, and practitioner development.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Zap, Target, Users, BookOpen, Lightbulb, CheckCircle, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { FrameworkMap } from "@/components/framework-map"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org" />
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            AI Maturity Framework
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            Most organizations have deployed AI. Few have developed the capability to produce reliable outcomes from it.
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            SIMA360 is the operational framework built for that gap. Five integrated components — assessment,
            improvement cycles, implementation tools, and practitioner development — built on the diagnostic and
            maturity architecture established in the book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sima-probe">
                Start with the Assessment <ArrowRight className="ml-2 w-4 h-4" />
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
                <CardDescription>
                  Diagnostic assessment tool that measures organizational AI maturity across all five dimensions and six
                  capability levels. The assessment entry point for the ecosystem.
                </CardDescription>
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
                <CardDescription>Foundational framework for strategic AI implementation</CardDescription>
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
                <CardDescription>Streamlined processes for AI workflow optimization</CardDescription>
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
                <CardDescription>Ready-to-use tools and templates for rapid deployment</CardDescription>
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
              SIMA-Core defines the framework's vocabulary: the five domains, <Link href="/maturity" className="text-blue-600 hover:text-blue-800 underline">six capability levels</Link>, and tool
              categories that every other component operates within. SIMA-Probe applies that vocabulary diagnostically,
              measuring where the organization actually stands across all five dimensions. SIMA-Flow provides the
              improvement cycle architecture — the structured process for moving from current state to target state
              through disciplined, evidence-based iterations. SIMA-Kit supplies the templates, rubrics, playbooks, and
              governance tools those cycles require at every capability level. SIMA-Ascend builds the practitioner
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

      {/* Why Choose SIMA360? */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose SIMA360™?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodology backed by strategic intelligence principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Starts Where You Actually Are</h3>
              <p className="text-slate-600">
                Most frameworks tell you where to go. SIMA360 starts by measuring where you actually are — five
                dimensions, six capability levels — so improvement cycles are grounded in evidence, not assumption.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Closes Every Gap</h3>
              <p className="text-slate-600">
                Assessment, improvement cycles, governance tools, and practitioner development — in one integrated
                system. Most organizations are missing two or three of those. SIMA360 closes all the gaps.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Works at Any Maturity Level</h3>
              <p className="text-slate-600">
                It's a structured operating system that works regardless of your stack, industry, or current maturity
                level — and takes into consideration learning over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The SIMA360 Solution */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The SIMA360™ Solution</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear, practical path for turning AI implementations into sustainable value
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  SIMA360™ exists to provide organizations with a clear, practical path for turning AI implementations
                  into sustainable value while reducing the risks inherent with this type of technology. In a world
                  where artificial intelligence is evolving faster than most businesses can adapt, SIMA360™ serves as
                  both a compass and a playbook—helping leaders, teams, and stakeholders navigate AI adoption with
                  confidence, clarity, and governance.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  SIMA360™ is not tied to a single industry or technology stack. It is adaptable, scalable, and relevant
                  whether you are deploying predictive analytics in healthcare, automating workflows in manufacturing,
                  or experimenting with generative AI in creative fields. The Guide is intended for anyone approaching
                  AI adoption—executives, innovators, compliance officers, technologists, and change leaders alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your AI Strategy?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations using SIMA360™ to drive strategic AI transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                Download Framework Guide
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
