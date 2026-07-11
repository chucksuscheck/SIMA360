import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SIMA360™ — Framework Origin & Research Foundation",
  description:
    "SIMA360 was built on two years of comparative research across nine AI maturity frameworks — Element AI, Accenture, IBM, Metascient, Ovum, BCG/MIT Sloan, Microsoft, Gartner, and Deloitte. Learn about the research foundation, the gaps it addressed, and the framework that resulted.",
  alternates: {
    canonical: "https://www.sima360.org/about",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  ArrowRight,
  Users,
  Target,
  Shield,
  Lightbulb,
  CheckCircle,
  Brain,
  BookOpen,
  Home,
  AlertTriangle,
  TrendingUp,
  Eye,
  Building2,
  Layers,
  Zap,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
            <Button asChild className="hidden md:inline-flex">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Built on Research.
              <span className="text-blue-600 block">Designed for Operational Reality.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              SIMA360 emerged from two years of comparative analysis across nine leading AI maturity frameworks. The
              research revealed a consistent gap across all existing models: they describe what AI maturity looks like,
              but none provides a structured path to achieving it. SIMA360 was built to fill that gap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
                <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                  Download the Framework Guide <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Link href="/sima-core">Explore the Framework</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Research Foundation */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Layers className="w-4 h-4 mr-2" />
              Research Foundation
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Built on the Foundation of 9 Leading AI Maturity Models and 2 Years of Research
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              SIMA360 did not emerge in isolation and does not claim to have invented AI maturity thinking. It
              synthesized what the existing research got right, identified what it consistently missed, and built the
              missing layer.
            </p>
            <p className="text-lg text-slate-600">
              Through extensive comparative evaluation, we identified the strengths and limitations of existing
              frameworks, then combined their best features while addressing their collective blind spots.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">The Nine Frameworks</h3>
            <p className="text-sm text-slate-500 text-center mb-6 max-w-2xl mx-auto">
              A cross-section of enterprise, technology platform, responsible-AI, and industry-specific approaches —
              mapped against SIMA360's five perspectives and six maturity levels.
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">General AI Maturity</CardTitle>
                      <CardDescription className="text-sm">Enterprise-Scale Models</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Gartner — CIO's Guide to AI</span>
                      <Badge variant="outline" className="text-xs">Reference Architecture</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Element AI — AI Maturity Model</span>
                      <Badge variant="outline" className="text-xs">Stage Granularity</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Accenture — Art of AI Maturity</span>
                      <Badge variant="outline" className="text-xs">Strategy & Culture</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Deloitte — State of AI in the Enterprise</span>
                      <Badge variant="outline" className="text-xs">Risk & Process</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Metascient — AI Transformation Model</span>
                      <Badge variant="outline" className="text-xs">Behavioral Labels</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Responsible AI</CardTitle>
                      <CardDescription className="text-sm">Governance & Ethics</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Microsoft — Responsible AI Maturity Model</span>
                      <Badge variant="outline" className="text-xs">Accountability</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">BCG / MIT Sloan — Overestimating RAI Maturity</span>
                      <Badge variant="outline" className="text-xs">Structure vs. Behavior</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Technology & Industry-Specific</CardTitle>
                      <CardDescription className="text-sm">Platform & Deployment</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">IBM — The AI Ladder</span>
                      <Badge variant="outline" className="text-xs">MLOps Depth</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Ovum (Omdia) — AI Maturity for CSPs</span>
                      <Badge variant="outline" className="text-xs">Deployment Context</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">What SIMA360™ Learned and Improved</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Strengths We Incorporated
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Gartner's five-stage progression</strong> — Provided the reference architecture for SIMA360's maturity-level naming
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Element AI's stage-by-stage mapping</strong> — The most operationally useful template for describing what each maturity level looks like
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Accenture's foundational-vs-differentiation finding</strong> — Directly informed SIMA360's weakest-constraint principle
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Microsoft and BCG's governance depth</strong> — Informed the distinction between governance that exists formally and governance that functions operationally
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Gaps We Addressed
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>No improvement methodology</strong> — Every framework describes states; none describes
                      how to move between them. This is the gap FLAI (Frame–Learn–Assess–Improve) was built to fill.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Structural indicators, not behavioral ones</strong> — All nine frameworks assess
                      documents, training completion, and deployment counts, not whether structures hold under real pressure
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>No cross-perspective dependency</strong> — None address the interaction effect: weakness
                      in one perspective limits the effective maturity of the entire system
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>No AI-specific failure modes</strong> — Representational drift, recursive reinforcement,
                      and synthetic confidence appear in none of the nine source frameworks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Maturity Gap */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Gap No Framework Addressed</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Every framework analyzed in the foundational research describes organizational AI maturity at various
              stages. None of them explains how to get from one stage to the next. They produce assessments. They do not
              produce improvement paths. Organizations completing a Gartner or Deloitte AI maturity assessment know
              where they stand. They do not know what to do operationally to change their standing. SIMA360 provides
              that — the structured diagnostic, the improvement cycle, the implementation resources, and the
              practitioner capability development that turns a maturity score into a maturity trajectory.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Book */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">The Intellectual Foundation</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The five perspectives, six maturity levels, FLAI methodology, and diagnostic principles in SIMA360 are
              grounded in the book <em>The AI Rush: Too Much. Too Soon.</em> The book establishes the conceptual
              argument. SIMA360 operationalizes it. Organizations that want to understand why the framework is
              structured the way it is should start with the book.
            </p>
            <Link
              href="/the-book"
              className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              Learn more about the book <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why AI Implementation Fails */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What the Book's Case Studies Show</h2>
            <p className="text-lg text-slate-600">
              <em>The AI Rush</em> traces its argument through real organizational failures — not because the
              technology broke, but because the conditions surrounding it weren't mature enough to catch drift before
              it compounded. Two of those cases illustrate the pattern this book calls synthetic confidence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-red-500 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-red-800">Zillow's Home-Buying Algorithm</CardTitle>
                    <CardDescription className="text-sm text-red-600">Coherent Doesn't Mean Correct</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-700">
                  <p>
                    <strong>The Vision:</strong> Use pricing models to buy homes directly at scale, moving faster than
                    any team of human analysts could.
                  </p>
                  <p>
                    <strong>The Reality:</strong> The model's individual pricing decisions were defensible one at a
                    time. Thousands of them, leaning the same direction at once, produced a billions-of-dollars
                    exposure nobody was positioned to see until it was already there.
                  </p>
                  <p>
                    <strong>The Root Cause:</strong> The organization trusted the model because it was coherent, fast,
                    and consistent with what it already believed — not because anyone kept testing it against reality.
                    A single point of control watched one number while five other perspectives moved unmonitored.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-orange-800">Microsoft's Tay Chatbot</CardTitle>
                    <CardDescription className="text-sm text-orange-600">
                      Shipping Isn't Governing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-700">
                  <p>
                    <strong>The Vision:</strong> An AI personality that would learn to sound more natural through real
                    conversations with people on social media.
                  </p>
                  <p>
                    <strong>The Reality:</strong> Coordinated users shaped Tay's responses within hours. Microsoft
                    pulled it offline sixteen hours after launch.
                  </p>
                  <p>
                    <strong>The Root Cause:</strong> The technology worked exactly as designed — it learned from what
                    people fed it. What was missing was a way to watch what it was learning in real time, decide how
                    much drift was tolerable, and pull it back the moment reality stopped matching the plan. A rollout
                    plan is not a governance plan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">The Pattern Is Clear</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Synthetic Confidence</h4>
                <p className="text-sm text-slate-600">
                  Trusting an output because it's coherent and consistent with belief — not because anyone tested it
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">One Control Point</h4>
                <p className="text-sm text-slate-600">
                  A single dashboard or owner watching one number while four other perspectives go unmonitored
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Shipping Without Governing</h4>
                <p className="text-sm text-slate-600">
                  A rollout plan for how a system meets the world, with no plan for who watches it once it's there
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Capability Outrunning Maturity</h4>
                <p className="text-sm text-slate-600">
                  Expanding what AI is allowed to do faster than the organization can actually oversee it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The SIMA360 Framework */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The SIMA360™ Framework</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Five integrated components, each playing a specific role in the ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SIMA-Probe™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Diagnostic Assessment</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Measures organizational AI maturity across all five perspectives and six maturity levels, producing
                  diagnostic results that drive structured improvement. The assessment entry point for the ecosystem.
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto text-blue-600 hover:text-blue-800">
                  <Link href="/sima-probe">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-indigo-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SIMA-Core™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Framework Vocabulary</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  The vocabulary layer of the framework: three core models — Strategic Perspectives, AI Maturity Levels, and
                  AI Tool Categories — that every other component operates within.
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto text-indigo-600 hover:text-indigo-800">
                  <Link href="/sima-core">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SIMA-Flow™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Improvement Cycle Architecture</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  The cycle architecture that structures improvement — the macro Core Cycle (Assess Capabilities → Set
                  Groundwork → Execute) for organizational advancement and the FLAI Cycle (Frame, Learn, Assess,
                  Improve) for project-level execution within it.
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto text-green-600 hover:text-green-800">
                  <Link href="/sima-flow">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SIMA-Kit™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Implementation Resource Library</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  The resource layer — templates, rubrics, playbooks, and governance tools stratified by maturity
                  level and perspective that SIMA-Flow cycles require.
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto text-purple-600 hover:text-purple-800">
                  <Link href="/sima-kit">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500 lg:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SIMA-Ascend™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Practitioner Development & Certification</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Builds the organizational practitioner capability the framework requires — through three certification
                  levels and five structured training programs, available online or through approved trainers.
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto text-orange-600 hover:text-orange-800">
                  <Link href="/sima-ascend">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start with the Framework</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA360 is available under Creative Commons Attribution Share-Alike license. The Guide is a free download.
            Assessments, implementation tools, and training programs are available through the ecosystem components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-slate-900 hover:bg-slate-100">
              <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                Download the Guide <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent"
            >
              <Link href="/start">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default AboutPage
