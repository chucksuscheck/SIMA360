import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA360 Basis — Framework Origin & Purpose | SIMA360™",
  description:
    "SIMA360 was built on two years of comparative research across nine AI maturity frameworks — Element AI, Accenture, IBM, Metascient, Ovum, BCG/MIT Sloan, Microsoft, Gartner, and Deloitte — research that revealed why organizational maturity, not tool capability, determines whether AI produces reliable outcomes. Learn how the Five Perspectives emerged from that research and why SIMA360 exists to turn a diagnosis into a trajectory.",
  alternates: {
    canonical: "https://www.sima360.org/foundation",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  BookOpen,
  Layers,
  Building2,
  Zap,
  CheckCircle,
  Target,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const FoundationPage = () => {
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
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Built on Research.
              <span className="text-blue-600 block">Designed for Operational Reality.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Most organizations that adopt AI don't fail because the technology breaks. They fail because AI
              amplifies whatever was already unclear, inconsistent, or unmonitored in the organization around it —
              and capability and maturity are not the same thing. SIMA360 emerged from two years of comparative
              analysis across nine leading AI maturity frameworks, built to answer the question those frameworks
              left open: not just where an organization stands, but what to do next, and why organizational
              maturity — not tool capability — is what actually determines whether AI produces reliable outcomes.
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
            <p className="text-lg text-slate-600 mb-4">
              Through extensive comparative evaluation, we identified the strengths and limitations of existing
              frameworks, then combined their best features while addressing their collective blind spots.
            </p>
            <p className="text-lg text-slate-600">
              The five perspectives at the center of SIMA360 — Strategy, Governance, Data, People, and Technology —
              weren't chosen in advance. They were the consistent underlying structure that kept showing up, under
              different names and with different degrees of coverage, across all nine frameworks once they were
              compared side by side. That consistency is the evidence these are the right five, not a preference for
              a clean list.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center">The Nine Frameworks</h3>
            <p className="text-sm text-slate-500 text-center mb-6 max-w-2xl mx-auto">
              A cross-section of enterprise, technology platform, responsible-AI, and industry-specific approaches —
              mapped against SIMA360's five perspectives and six maturity levels.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Gartner</CardTitle>
                      <CardDescription className="text-sm">CIO's Guide to AI</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">General AI Maturity</p>
                  <Badge variant="outline" className="text-xs">Reference Architecture</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Element AI</CardTitle>
                      <CardDescription className="text-sm">AI Maturity Model</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">General AI Maturity</p>
                  <Badge variant="outline" className="text-xs">Stage Granularity</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Accenture</CardTitle>
                      <CardDescription className="text-sm">Art of AI Maturity</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">General AI Maturity</p>
                  <Badge variant="outline" className="text-xs">Strategy & Culture</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Deloitte</CardTitle>
                      <CardDescription className="text-sm">State of AI in the Enterprise</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">General AI Maturity</p>
                  <Badge variant="outline" className="text-xs">Risk & Process</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Metascient</CardTitle>
                      <CardDescription className="text-sm">AI Transformation Model</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">General AI Maturity</p>
                  <Badge variant="outline" className="text-xs">Behavioral Labels</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Microsoft</CardTitle>
                      <CardDescription className="text-sm">Responsible AI Maturity Model</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">Responsible AI</p>
                  <Badge variant="outline" className="text-xs">Accountability</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">BCG / MIT Sloan</CardTitle>
                      <CardDescription className="text-sm">Overestimating RAI Maturity</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">Responsible AI</p>
                  <Badge variant="outline" className="text-xs">Structure vs. Behavior</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">IBM</CardTitle>
                      <CardDescription className="text-sm">The AI Ladder</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">Technology & Industry-Specific</p>
                  <Badge variant="outline" className="text-xs">MLOps Depth</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-base">Ovum (Omdia)</CardTitle>
                      <CardDescription className="text-sm">AI Maturity for CSPs</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-500 mb-2">Technology & Industry-Specific</p>
                  <Badge variant="outline" className="text-xs">Deployment Context</Badge>
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
                      <strong>A five-stage progression model</strong> — Provided the reference architecture for SIMA360's maturity-level naming
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Stage-by-stage mapping</strong> — The most operationally useful template for describing what each maturity level looks like
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>A foundational-vs-differentiation finding</strong> — Directly informed SIMA360's weakest-constraint principle
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 text-sm">
                      <strong>Governance-depth analysis</strong> — Informed the distinction between governance that exists formally and governance that functions operationally
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
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Every framework analyzed in the foundational research describes organizational AI maturity at various
              stages. None of them explains how to get from one stage to the next. They produce assessments. They do not
              produce improvement paths. Organizations completing an AI maturity assessment know where they stand.
              They do not know what to do operationally to change their standing.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              That gap shows up the same way in practice: organizations work through the framework's diagnostic
              principles, understand exactly where they stand, and still ask the same question — now what do I
              actually do with this? SIMA360 exists to answer it, with structured tools, role-specific guidance, and
              a formal way to evaluate where the organization actually stands, so a maturity gap turns into a
              maturity trajectory instead of stopping at a diagnosis.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              That distinction matters because capability and maturity are not the same thing. Capability is what an
              organization's AI can do. Maturity is the harder question — whether the organization can handle what
              it's doing without losing its grip as it gets more complicated. A framework that only measures the
              first can certify an organization as advanced while the second is quietly missing, and it's the second
              one that determines whether AI produces reliable outcomes over time.
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
              grounded in the book <em>The AI Rush — Too Much Too Soon!</em> The book establishes the conceptual
              argument. SIMA360 operationalizes it. Organizations that want to understand why the framework is
              structured the way it is should start with the book.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              The book's argument is that the technology is rarely what separates organizations with similar AI
              budgets and wildly different outcomes. It's the operating system underneath it — the five
              perspectives, working together or quietly working against each other — that determines whether an
              organization is mature enough to grow. A system behaves at the level of its least mature perspective,
              not its most advanced one; that weakest-constraint principle is why SIMA360 measures all five
              independently instead of producing a single blended score.
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

      {/* 5. Closing CTA */}
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
          <Link
            href="/framework"
            className="mt-6 inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
          >
            Explore the five framework components <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default FoundationPage
