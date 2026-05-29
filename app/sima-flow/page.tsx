import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA-Flow — Improvement Cycle Architecture | SIMA360™",
  description:
    "SIMA-Flow is the cycle architecture of SIMA360, connecting capability assessment to structured improvement through the Core Cycle and FLAI project execution methodology.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { SiteFooter } from "@/components/site-footer"

export default function SimaFlowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-flow" />
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
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800 border-green-200">
              <Zap className="w-4 h-4 mr-2" />
              SIMA Flow™ Framework
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              The Execution Engine
              <span className="text-green-600 block">Connecting AI Dimension to Results</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              SIMA Flow™ serves as the execution engine, tying SIMA Core™ models to SIMA Kit™ resourced through two
              powerful cycles: the Core Cycle for AI dimension development and the FLAI Cycle for project execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
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
        </div>
      </section>

      {/* Two Cycle Overview */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Two Interconnected Cycles</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              SIMA Flow™ operates through two complementary cycles that ensure both AI dimension alignment and tactical
              execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <Layers className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Core Cycle (Macro)</CardTitle>
                <CardDescription>Enterprise-level AI dimension development and strategic alignment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Assess AI Dimensions</h4>
                      <p className="text-sm text-slate-600">Evaluate maturity across five AI dimensions</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Set Groundwork</h4>
                      <p className="text-sm text-slate-600">Prepare organization for execution using SIMA Kit™</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Execute</h4>
                      <p className="text-sm text-slate-600">Run projects through iterative FLAI cycles</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <RefreshCw className="w-8 h-8 text-emerald-600 mb-2" />
                <CardTitle>FLAI Cycle (Micro)</CardTitle>
                <CardDescription>Project-level execution with continuous learning and improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">F</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Frame</h4>
                      <p className="text-sm text-slate-600">Identify objectives, boundaries, and risks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">L</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Learn</h4>
                      <p className="text-sm text-slate-600">Deploy tools, collect data, explore capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">A</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Assess</h4>
                      <p className="text-sm text-slate-600">Evaluate outcomes, detect gaps, benchmark progress</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold text-sm">I</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Improve</h4>
                      <p className="text-sm text-slate-600">Apply learnings to iterate forward</p>
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
            {/* Assess AI Dimensions */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Assess AI Dimensions</h3>
                </div>
                <p className="text-slate-600 mb-4">
                  The diagnostic entry point that contextualizes readiness across the five AI Dimensions: Strategy,
                  Governance, Data, People, and Technology.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Evidence-based capability level assessment</li>
                  <li>• Dimension-specific maturity evaluation</li>
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
                      <span>Current capability level identification</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span>Dimension-specific readiness scores</span>
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
                  <h4 className="font-semibold text-slate-900 mb-3">AI Dimension Preparation</h4>
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
                  Prepare the organization for execution using SIMA Kit™ tools and templates aligned to current
                  capability levels and AI dimensions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Dimension-specific preparation activities</li>
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
                  Operationalize strategic intent through iterative FLAI cycles, with complexity and iterations matched
                  to organizational capability levels.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Capability-matched project complexity</li>
                  <li>• Iterative FLAI cycle execution</li>
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
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">FLAI Project Cycle</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Designed for strategy, innovation, and hypothesis-driven work - treating learning as a primary deliverable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-2">
                  <Target className="w-6 h-6" />
                </div>
                <CardTitle>Frame</CardTitle>
                <CardDescription>Structure ambiguity without false certainty</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Establish boundaries and assumptions</li>
                  <li>• Define problem space clearly</li>
                  <li>• Articulate working hypotheses</li>
                  <li>• Surface key unknowns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle>Learn</CardTitle>
                <CardDescription>Prioritize insight over output</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Conduct exploration and research</li>
                  <li>• Prototype and test assumptions</li>
                  <li>• Gather relevant data</li>
                  <li>• Embrace failure as learning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mb-2">
                  <Search className="w-6 h-6" />
                </div>
                <CardTitle>Assess</CardTitle>
                <CardDescription>Interpret learnings in context</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Analyze patterns and implications</li>
                  <li>• Evaluate system dynamics</li>
                  <li>• Validate or challenge assumptions</li>
                  <li>• Understand broader context</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-600 text-white rounded-full flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <CardTitle>Improve</CardTitle>
                <CardDescription>Intentional, directional refinement</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Refine strategy and focus</li>
                  <li>• Update guiding assumptions</li>
                  <li>• Plan next iteration</li>
                  <li>• Integrate learnings</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Why FLAI vs. Plan-Do-Check-Act (PDCA)?</h3>
                <p className="text-slate-600">
                  While PDCA is ideal for agile delivery, FLAI was designed for strategy, innovation, and
                  hypothesis-driven work. Language shapes mindset - FLAI encourages reflection, discovery, and
                  intentional change.
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
              SIMA-Flow is the cycle architecture. SIMA-Kit is the resource library it draws from. Flow determines when and how resources are deployed; Kit ensures those resources exist at every capability level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Prevents Overreach</h3>
              <p className="text-slate-600">
                Assessment ensures AI projects align with organizational maturity, avoiding both underperformance and
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
                Groundwork phase ensures preparation efforts are tailored to capability levels and AI dimensions
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

      <SiteFooter />
    </div>
  )
}
