import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About SIMA360™ — Framework Origin & Research Foundation",
  description:
    "SIMA360 was built on two years of comparative research across nine leading AI maturity frameworks. Learn about the research foundation, the gaps it addressed, and the framework that resulted.",
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
        <link rel="canonical" href="https://www.sima360.org/about" />
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
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Layers className="w-4 h-4 mr-2" />
              Framework Origin
            </Badge>
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
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Foundational Research Sources</h3>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Enterprise Leaders</CardTitle>
                      <CardDescription className="text-sm">Industry Giants</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Gartner AI Maturity</span>
                      <Badge variant="outline" className="text-xs">Strategy & Culture</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">McKinsey AI Readiness</span>
                      <Badge variant="outline" className="text-xs">Diagnostics</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Deloitte AI Capability</span>
                      <Badge variant="outline" className="text-xs">Risk & Process</Badge>
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
                      <CardTitle className="text-lg">Standards Bodies</CardTitle>
                      <CardDescription className="text-sm">Governance & Ethics</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">NIST AI RMF</span>
                      <Badge variant="outline" className="text-xs">Trustworthiness</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">WEF Governance</span>
                      <Badge variant="outline" className="text-xs">Ethics & Rights</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">ISO/IEC Standards</span>
                      <Badge variant="outline" className="text-xs">Compliance</Badge>
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
                      <CardTitle className="text-lg">Technology Leaders</CardTitle>
                      <CardDescription className="text-sm">Platform & Tools</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Microsoft AI Maturity</span>
                      <Badge variant="outline" className="text-xs">Business-Friendly</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Google AI Principles</span>
                      <Badge variant="outline" className="text-xs">Technical Focus</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">IBM Watson Framework</span>
                      <Badge variant="outline" className="text-xs">Enterprise AI</Badge>
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
                      <strong>Gartner's AI dimension</strong> — High-level governance and adoption frameworks
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>McKinsey's diagnostic approach</strong> — Strong capability assessment methodologies
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>NIST's trustworthiness focus</strong> — Ethical AI and accountability frameworks
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Microsoft's business alignment</strong> — Practical, enterprise-ready approaches
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
                      <strong>Operational execution depth</strong> — Most frameworks lacked detailed implementation
                      guidance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Structured improvement paths</strong> — Assessments without actionable advancement
                      guidance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Human-AI collaboration focus</strong> — Emphasis on AI autonomy with human oversight
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Integrated improvement cycles</strong> — Continuous advancement at every maturity stage
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
              produce improvement paths. Organizations completing a Gartner or McKinsey AI maturity assessment know
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
              The five AI dimensions, six capability levels, FLAI methodology, and diagnostic principles in SIMA360 are
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

      {/* 5. Why AI Implementation Fails (demoted failure stories) */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What the Research Showed About AI Failures</h2>
            <p className="text-lg text-slate-600">
              The comparative research confirmed patterns that practitioners already recognize. Organizations fail at AI
              implementation in predictable ways — and those patterns point directly to the maturity gaps SIMA360 is
              designed to address.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-red-500 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-red-800">Amazon's Recruiting AI Disaster</CardTitle>
                    <CardDescription className="text-sm text-red-600">Gender Bias at Scale</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-700">
                  <p>
                    <strong>The Vision:</strong> Sift through thousands of resumes, identify top talent, and accelerate
                    recruitment with machine precision.
                  </p>
                  <p>
                    <strong>The Reality:</strong> The AI consistently ranked male candidates higher, penalized terms
                    like "women's chess club captain," and discriminated against graduates from all-women colleges.
                  </p>
                  <p>
                    <strong>The Root Cause:</strong> Training on ten years of biased historical data with no guardrails,
                    bias mitigation techniques, fairness audits, or data diversity reviews. Too much trust in AI
                    algorithms with little governance.
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
                    <CardTitle className="text-xl text-orange-800">Tesla's Autopilot Crashes</CardTitle>
                    <CardDescription className="text-sm text-orange-600">
                      Overconfidence in Partial Autonomy
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-700">
                  <p>
                    <strong>The Vision:</strong> Autopilot to drive cars more safely and easily than a human could.
                  </p>
                  <p>
                    <strong>The Reality:</strong> Multiple high-profile crashes where Autopilot failed to detect
                    stationary vehicles, misread road markings, and struggled with unpredictable conditions.
                  </p>
                  <p>
                    <strong>The Root Cause:</strong> Insufficient edge case testing, arrogant assumptions about driving
                    complexity, lack of human-in-the-loop safeguards, and messaging that amplified capabilities over
                    constraints.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">The Pattern is Clear</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Blind Trust in AI</h4>
                <p className="text-sm text-slate-600">
                  Organizations assume AI knows more than humans and can operate independently
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">No Governance</h4>
                <p className="text-sm text-slate-600">
                  Lack of proper oversight, bias detection, and risk management frameworks
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Rush to Deploy</h4>
                <p className="text-sm text-slate-600">
                  Pressure to implement AI quickly without proper preparation or testing
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Ignoring Edge Cases</h4>
                <p className="text-sm text-slate-600">
                  Insufficient testing for real-world complexity and unexpected scenarios
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
                  Measures organizational AI maturity across all five dimensions and six capability levels, producing
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
                  The vocabulary layer of the framework: three core models — AI Dimensions, AI Capability Levels, and
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
                  The cycle architecture that structures improvement — the Core Cycle for AI dimension development and
                  the FLAI Cycle (Frame, Learn, Assess, Improve) for project-level execution.
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
                  The resource layer — templates, rubrics, playbooks, and governance tools stratified by capability
                  level and AI dimension that SIMA-Flow cycles require.
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
