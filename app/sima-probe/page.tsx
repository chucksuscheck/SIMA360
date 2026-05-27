"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
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
  Brain,
  Lock,
} from "lucide-react"

export default function SIMAProbe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SIMA360™
              </span>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Diagnostic Assessment Tool</Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SIMA Probe™
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Measure your organization's AI maturity across five AI Dimensions with actionable insights and
              prescriptive guidance
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Assessment
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">What is SIMA Probe?</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              SIMA-Probe is the diagnostic assessment tool within the SIMA360™ framework, designed to measure an
              organization's AI maturity across five AI Dimensions: <strong>Strategy</strong>,{" "}
              <strong>Governance</strong>,<strong> Data</strong>, <strong>People</strong>, and{" "}
              <strong>Technology</strong>. Each AI Dimension is evaluated across the SIMA360 Maturity Model's five
              capability levels: Exploring, Applying, Formalizing, Optimizing, and Leading.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              SIMA-Probe serves as the guide for organizations within their AI maturity journey, providing the
              foundational assessment that informs capability-building roadmaps, project planning, and resource
              allocation decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Five AI Dimensions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Five AI Dimensions</h2>
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
                  <p className="text-slate-600">Establishes current maturity across all five AI Dimensions</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 mb-2 text-purple-600" />
                  <CardTitle className="text-lg">Guidance Activation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Triggers appropriate recommendations from SIMA-Kit™, matched to organizational readiness
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
                  <CardTitle className="text-lg">Gap Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Highlights specific areas requiring attention before advancing to higher capability levels
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
            <p className="text-lg text-slate-700 mb-12 text-center leading-relaxed">
              SIMA-Probe evaluates organizational readiness across all AI Dimensions to determine which maturity level
              accurately reflects current maturity.
            </p>
            <div className="space-y-4">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 1</Badge>
                    Exploring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Structured experimentation begins. Foundational skill development occurs through isolated pilots and
                    proof-of-concept projects. Awareness is growing, but governance and infrastructure remain informal.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 2</Badge>
                    Applying
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Limited-scope AI projects are actively piloted. Early success is achieved in specific use cases.
                    Investments in talent, data quality, and tooling begin to formalize.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 3</Badge>
                    Formalizing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Repeatable practices and governance frameworks are established. AI is prioritized by leadership and
                    integrated into business processes. Cross-functional teams adopt standardized approaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 4</Badge>
                    Optimizing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    AI is leveraged strategically across functions and business units. Governance is robust and
                    proactive. Real-time analytics, feedback mechanisms, and ethical audits become standard practice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="outline">Level 5</Badge>
                    Leading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    AI is core to strategic differentiation. Organizations drive industry innovation, shape standards,
                    and generate new revenue streams through AI. Ethical design and societal impact are embedded
                    throughout the development lifecycle.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Subscription Levels</h2>
            <p className="text-lg text-slate-700 mb-12 text-center">
              Choose the level that matches your organization's needs
            </p>

            <Tabs defaultValue="foundation" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="foundation">Foundation</TabsTrigger>
                <TabsTrigger value="insight">Insight</TabsTrigger>
                <TabsTrigger value="advisory">Advisory</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
              </TabsList>

              <TabsContent value="foundation" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 1 – Foundation</CardTitle>
                        <CardDescription className="text-lg mt-2">Free Access</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">FREE</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      The minimal viable product level, designed for small organizations, individuals exploring
                      SIMA-Probe capabilities, or those at the Initial or early Exploring stage.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>3-5 basic questions per AI Dimension (15-25 questions total)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Simple yes/no assessment interface</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Single maturity level rating per AI Dimension</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Text-based results summary</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Overall organizational maturity level determination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Basic improvement guidance per AI Dimension</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Organizations conducting initial feasibility assessment, small teams (fewer than 50 people), or
                        those seeking a quick maturity snapshot.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="insight" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 2 – Insight</CardTitle>
                        <CardDescription className="text-lg mt-2">Basic Subscription</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">PAID</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Designed for organizations actively engaging with AI at the Exploring or Applying stages,
                      typically small to medium-sized organizations using SIMA-Probe to guide AI readiness and
                      improvement planning.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>20-30 expanded questions per AI Dimension (100-150 questions total)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Detailed explanations with relevant examples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Percentage-based maturity distribution showing progression through capability levels
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Radar chart visualizations displaying relative maturity across all five AI Dimensions
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>3-10 targeted guidance statements per AI Dimension</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Downloadable summary report (PDF)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Organizations piloting AI initiatives, mid-sized teams, or those needing detailed
                        cross-perspective visibility for strategic planning.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advisory" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 3 – Advisory</CardTitle>
                        <CardDescription className="text-lg mt-2">Organizational Subscription</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">PREMIUM</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      The comprehensive level for organizations at the Formalizing stage or higher, requiring full
                      visibility into AI implementation readiness and detailed, actionable guidance.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive 50+ questions per AI Dimension (250+ questions total)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Detailed explanations with industry-specific examples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Full percentage-based maturity distribution across all capability levels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Advanced radar charts with drill-down capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Complete guidance set with customizable recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Access to complete SIMA-Kit™ resources (templates, rubrics, playbooks)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Training recommendations via SIMA-Ascend™ courses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Downloadable comprehensive report with executive summary</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Reassessment tracking and progress monitoring over time</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Enterprise deployments, organizations at Formalizing stage or higher, or those requiring
                        comprehensive governance documentation and training integration.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="consulting" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 3A – Consulting Extension</CardTitle>
                        <CardDescription className="text-lg mt-2">Enterprise Consulting</CardDescription>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-4 py-2">
                        ENTERPRISE
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      An enhancement to Level 3 that includes tailored consulting support, interview-based evaluation,
                      and customized organizational guidance.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>All Level 3 features plus:</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Survey combined with tailored consulting interview sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Consultant-facilitated capability assessment sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive evaluation report with consultant analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Custom organizational reports and dashboards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Fully customized guidance and expansion recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Implementation roadmap co-developed with consultants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Quarterly check-ins and progress reviews</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Organizations requiring hands-on consulting support, complex multi-unit enterprises, or those
                        undertaking major AI transformation initiatives.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                Available from Level 3
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Adaptive AI Evaluation Features</h2>
              <p className="text-lg text-slate-700">
                SIMA-Probe incorporates Adaptive AI capabilities to enhance both the accuracy and relevance of
                evaluations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-t-blue-500">
                <CardHeader>
                  <Brain className="w-12 h-12 mb-4 text-blue-600" />
                  <CardTitle className="text-xl">Contextual Tailoring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">
                    The AI dynamically adjusts question sets and examples based on organizational context such as
                    industry, size, and operational maturity.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>Industry-specific scenarios and examples</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>Calibrated technical language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>Progressive question sequencing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-purple-500">
                <CardHeader>
                  <FileText className="w-12 h-12 mb-4 text-purple-600" />
                  <CardTitle className="text-xl">Automated Document Intelligence</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">
                    AI analyzes uploaded organizational materials to pre-populate or validate answers, transforming the
                    evaluation into a hybrid evidence-based process.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span>Reduces assessment time by 40-60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span>Grounds evaluation in documented evidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                      <span>Identifies policy vs. practice gaps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
                  <CardTitle>Complete Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Answer questions honestly based on current practices</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                  <CardTitle>Take Action</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Use results to inform your AI maturity journey</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Start Your Assessment
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
                    <span>Assessment results visible only to authorized users within your organization</span>
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
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Assessment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="mailto:info@sima360.ai">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">SIMA360™</h3>
              <p className="text-sm">A Structured Maturity Framework for AI Adoption</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/sima-probe" className="hover:text-white transition-colors">
                    SIMA Probe™
                  </Link>
                </li>
                <li>
                  <Link href="/sima-core" className="hover:text-white transition-colors">
                    SIMA Core™
                  </Link>
                </li>
                <li>
                  <Link href="/sima-flow" className="hover:text-white transition-colors">
                    SIMA Flow™
                  </Link>
                </li>
                <li>
                  <Link href="/sima-kit" className="hover:text-white transition-colors">
                    SIMA Kit™
                  </Link>
                </li>
                <li>
                  <Link href="/sima-ascend" className="hover:text-white transition-colors">
                    SIMA Ascend™
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/SIMA360_Guide.pdf" target="_blank" className="hover:text-white transition-colors">
                    Download Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://SIMA360Classes.eventbee.com/boxoffice"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Class List
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.sima360.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    www.sima360.ai
                  </a>
                </li>
                <li>
                  <a href="mailto:info@sima360.ai" className="hover:text-white transition-colors">
                    info@sima360.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 SIMA360. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
