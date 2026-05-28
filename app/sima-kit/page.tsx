import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA-Kit — Implementation Resource Library | SIMA360™",
  description:
    "SIMA-Kit provides the templates, rubrics, playbooks, and governance tools stratified by capability level and AI dimension that SIMA-Flow cycles require.",
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
  Package,
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

const SIMAKitPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-kit" />
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
                <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
              </div>
            </Link>
            <Navigation />
            <Button asChild>
              <a href="mailto:charles.suscheck@sima360.org?subject=Schedule%20a%20Conversation">
                Schedule a Conversation
              </a>
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
              <BreadcrumbPage>SIMA Kit™</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Package className="w-4 h-4 mr-2" />
              SIMA Kit™ - Operational Heart
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              The Resource Layer of
              <span className="text-purple-600 block">the SIMA360 Framework</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              SIMA Kit™ is the operational heart of SIMA360™'s execution model, providing practical tools, templates,
              and guidance to turn strategic intent into real-world AI maturity gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Toolkit for AI Transformation</h2>
            <p className="text-lg text-slate-600">
              SIMA-Kit supplies the templates, rubrics, playbooks, and governance tools that SIMA-Flow cycles require — stratified by capability level and AI dimension so every resource matches the organization's current state.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Gap Analysis Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Identify specific capability gaps across all AI dimensions</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Capability Scoring Rubrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">Assess AI maturity with structured evaluation mechanisms</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Role-Based Playbooks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Tailored guidance for different roles and organizational levels
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
              Both components are mapped directly to the five SIMA AI dimensions and aligned with SIMA Capability Levels
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
                    <CardTitle className="text-xl">Capabilities Toolkit</CardTitle>
                    <CardDescription className="text-sm text-slate-500">(Macro Cycle)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Enterprise-level assessment, planning, and capability growth across departments, portfolios, and
                  enterprise functions with cross-functional alignment.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Capability Evaluation Checklist</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    Based on 15+ AI maturity models, providing AI Capability Level ratings from Exploring to Leading
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
                    <li>• Dimension-specific maturity characteristics</li>
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
                    <CardDescription className="text-sm text-slate-500">(Per Project)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Initiative-level delivery, experimentation, and iteration using the FLAI cycle (Frame, Learn, Assess,
                  Improve) for pilots, POCs, and scaled deployments.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Core Tools</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>
                      • <strong>Use Case Canvas:</strong> Define and prioritize AI opportunities
                    </li>
                    <li>
                      • <strong>Vision & Value Templates:</strong> Articulate purpose and benefits
                    </li>
                    <li>
                      • <strong>Project Planning Patterns:</strong> Capability-tailored playbooks
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-800 mb-2">Risk & Learning</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>
                      • <strong>AI Risk Checklists:</strong> Ethical and compliance safeguards
                    </li>
                    <li>
                      • <strong>Test & Learning Cards:</strong> Capture experiments and results
                    </li>
                    <li>
                      • <strong>Analysis Templates:</strong> Post-iteration reflection
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

      {/* Strategic Domains Integration */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Integrated Across All AI Dimensions</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              All SIMA Kit™ guidance is stratified by the five AI dimensions, ensuring context-specific, relevant, and
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
            ].map((domain, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${domain.color}`}
                  >
                    <domain.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800">{domain.name}</h3>
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
              By integrating both macro (capability-level) and micro (project-level) tooling, SIMA Kit™ becomes a
              catalyst for sustainable AI transformation
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-4">
              Kit does not direct the improvement cycle — Flow does. Kit ensures that when Flow requires a capability assessment, a project planning template, or a governance checklist, the right resource is available at the right level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Reduces Waste</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Eliminates wasted effort on misaligned projects through structured guidance
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
                  Speeds organizational learning through repeatable templates and playbooks
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
                <CardTitle className="text-lg">Creates Repository</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Builds living repository of best practices, artifacts, and lessons learned
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
            Access the operational heart of SIMA360™ and bridge the gap between strategy and execution with
            comprehensive tools and guidance
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
          <p className="text-sm text-purple-200 mt-4">
            SIMA Kit™ resources are available under license. Contact info@sima360.org for details.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-purple-50 border-t">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <span className="text-lg font-semibold text-slate-900">SIMA360™</span>
          </div>
          <p className="text-slate-600 mb-4">Structured AI Maturity Accelerator</p>
          <p className="text-sm text-slate-500">© 2025 SIMA360™. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default SIMAKitPage
