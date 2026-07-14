import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA-Kit — Operational Resource Layer | SIMA360™",
  description:
    "SIMA-Kit is the operational resource layer of SIMA360 — level-specific guidance that turns a SIMA-Probe assessment into the structured improvement work SIMA-Flow's cycles carry out, not a static template library.",
  alternates: {
    canonical: "https://www.sima360.org/sima-kit",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Target,
  Layers,
  CheckCircle,
  Users,
  FileText,
  BarChart3,
  Shield,
  Lightbulb,
  Home,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const SIMAKitPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50">
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
              <BreadcrumbPage>SIMA Kit™</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              The Resource Layer of
              <span className="text-purple-600 block">the SIMA360 Framework</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              SIMA Kit™ doesn't run the improvement cycle — Flow does. It answers the question every organization
              hits right after an honest SIMA-Probe™ assessment: now what? Entrance criteria, goals, strategies, and
              exit criteria, specific to the Maturity Level and perspective the organization is actually in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-purple-500 hover:bg-purple-600">
                <a href="mailto:info@sima360.org?subject=SIMA%20Kit%20Access">
                  Request Access <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                  Download Guide
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Turns a Diagnosis Into Structured Work</h2>
            <p className="text-lg text-slate-600">
              SIMA-Probe identifies where the organization stands and which perspective is the constraint. What
              SIMA-Kit supplies next is what SIMA-Flow's cycles actually need to act on that finding, matched to the
              exact Maturity Level and perspective in play.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Constraint-Specific Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Targeted improvement approaches for the perspective SIMA-Probe identifies as the organization's
                  current constraint
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Entrance &amp; Exit Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  The readiness indicators and advancement benchmarks that mark when a perspective is ready for the
                  next Maturity Level
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Role-Based Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Tailored guidance for the people actually running SIMA-Flow's improvement cycles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Two Component Overview */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Two Complementary Components</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Both components are mapped directly to the five SIMA perspectives and aligned with SIMA Maturity Levels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-500 border-purple-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Layers className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Maturity Toolkit</CardTitle>
                    <CardDescription className="text-sm text-slate-500">(Macro Cycle)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Anchored by the SIMA-Probe™ assessment, providing the enterprise-level guidance that turns a
                  Maturity Level determination into planning, growth, and cross-functional alignment across
                  departments and portfolios.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Anchored by SIMA-Probe™</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    SIMA-Probe sits at the core of the Maturity Toolkit, producing the evidence-based Maturity Level
                    rating — from Initial to Leading — that every other resource here is keyed to
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Guidance Framework</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>
                      • <strong>Entrance Criteria:</strong> Readiness indicators
                    </li>
                    <li>
                      • <strong>Goals:</strong> Strategic objectives
                    </li>
                    <li>
                      • <strong>Strategies:</strong> Targeted approaches
                    </li>
                    <li>
                      • <strong>Exit Criteria:</strong> Advancement benchmarks
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Key Components</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Perspective-specific maturity characteristics</li>
                    <li>• Tool category selection guidance</li>
                    <li>• Role involvement recommendations</li>
                    <li>• Milestone plans and checkpoints</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-violet-500 border-purple-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-violet-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Project-Level Toolbox</CardTitle>
                    <CardDescription className="text-sm text-slate-500">(Per FLAI Cycle)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Supports each FLAI cycle Flow runs — Frame, Learn, Assess, Improve — with what a controlled study
                  of one operational condition actually needs, not a generic delivery kit.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Core Tools</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>
                      • <strong>Use Case Canvas:</strong> Defines, evaluates, and prioritizes AI opportunities before
                      resources are committed
                    </li>
                    <li>
                      • <strong>Vision and Value Development:</strong> Defines success in terms of decision behavior,
                      not adoption metrics
                    </li>
                    <li>
                      • <strong>Execution Control Materials:</strong> Capture what a FLAI cycle learns and convert it
                      into updated standards
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">FLAI Cycle Support</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>
                      • <strong>Framing Templates:</strong> Capture the operational condition, assumption, and
                      boundary being studied
                    </li>
                    <li>
                      • <strong>AI Risk Checklists:</strong> Ethical and compliance safeguards
                    </li>
                    <li>
                      • <strong>Results Analysis:</strong> Examines FLAI outcomes across iterations — is improvement
                      compounding or plateauing?
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Change Management</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Persona and stakeholder maps</li>
                    <li>• Change management strategies</li>
                    <li>• Adoption guidance frameworks</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Perspectives Integration */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Integrated Across All Perspectives</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              All SIMA Kit™ guidance is stratified by the five perspectives, ensuring context-specific, relevant, and
              actionable recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { name: "Strategy", icon: Target, color: "bg-blue-100 text-blue-600" },
              { name: "Governance", icon: Shield, color: "bg-green-100 text-green-600" },
              { name: "Data", icon: BarChart3, color: "bg-purple-100 text-purple-600" },
              { name: "People", icon: Users, color: "bg-orange-100 text-orange-600" },
              { name: "Technology", icon: Lightbulb, color: "bg-red-100 text-red-600" },
            ].map((perspective, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${perspective.color}`}
                  >
                    <perspective.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{perspective.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">SIMA Kit™ Within SIMA360™</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              SIMA Kit™ integrates both the macro Maturity Toolkit and the micro Project-Level Toolbox — but it
              doesn't direct the improvement cycle; Flow does. Kit ensures that when Flow's Core Cycle needs
              level-specific guidance, or a FLAI cycle needs a framing or control template, the right resource is
              already keyed to the right Maturity Level and perspective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Prevents Overreach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Keeps effort at the Maturity Level the organization is actually ready for, not the one it wishes it
                  were at
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Accelerates Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Keeps every FLAI cycle grounded in guidance matched to where the organization actually stands
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Embeds Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Integrates governance and ethical safeguards into daily operations
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Compounds Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Each cycle's outcome sharpens the next — understanding accumulates instead of resetting with every
                  initiative
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-purple-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your AI Implementation?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Access the resources that turn a SIMA-Probe™ diagnosis into SIMA-Flow's structured improvement work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-purple-900 hover:bg-purple-50">
              <a href="mailto:info@sima360.org?subject=SIMA%20Kit%20License%20Information">
                Request License Information
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-purple-300 text-purple-100 hover:bg-purple-800 bg-transparent"
            >
              <Link href="/sima-ascend">
                Explore SIMA Ascend™ <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <p className="text-sm font-semibold text-purple-100 mt-4">Pricing: Pending Announcement</p>
          <p className="text-sm text-purple-200 mt-1">
            SIMA Kit™ resources are available under license. Contact info@sima360.org for details.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default SIMAKitPage
