import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA-Core — Framework Foundation | SIMA360™",
  description:
    "SIMA-Core defines the conceptual vocabulary of the SIMA360 framework: five domains, six capability levels, and five tool categories that every other component operates within.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Brain,
  Database,
  Cog,
  Shield,
  Users,
  Target,
  Building,
  Scale,
  Zap,
  Eye,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function SimaCorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-core" />
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
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Brain className="w-4 h-4 mr-2" />
              SIMA Core™ Framework
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              The Core Elements
              <span className="text-blue-600 block">of SIMA360</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              SIMA Core™ is the static structural foundation consisting of three core models: Domains, AI
              Capability Levels, and AI Tool Categories. It provides the organizing principles for effective and
              responsible AI maturity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-500 hover:bg-blue-600">
                <a href="https://SIMA360Classes.eventbee.com/boxoffice" target="_blank" rel="noopener noreferrer">
                  Register for Training <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                  Download Guide
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What SIMA-Core Is and Is Not */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What SIMA-Core Is and Is Not</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              SIMA-Core is the vocabulary layer of the SIMA360 framework. It defines the terms, structures, and
              categories that every other component operates within. It does not prescribe action — that is
              SIMA-Flow's role. It does not supply implementation resources — that is SIMA-Kit's role. It does not
              assess your organization — that is SIMA-Probe's role. It does not build practitioner capability — that
              is SIMA-Ascend's role.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              SIMA-Core answers one question: what are the conceptual structures this framework uses to describe AI
              maturity? The answer is three interconnected models: the Domains model, the AI Capability Levels
              model, and the AI Tool Categories model. Everything else in the SIMA360 ecosystem operates within the
              vocabulary these three models define.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Models Overview */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Three Core Models</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              SIMA Core™ consists of three interconnected models that provide the foundation for strategic AI
              implementation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Domains</CardTitle>
                <CardDescription>
                  Five domains to categorize effective and responsible AI maturity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Strategy, Governance, Data, People, and Technology domains serve as organizing principles for
                  assessing organizational readiness.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">AI Capability Levels</CardTitle>
                <CardDescription>Five progressive levels of increasing AI maturity and capability</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Initial, Exploring, Applying, Formalizing, Optimizing, and Leading levels provide a roadmap for AI
                  advancement.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">AI Tool Categories</CardTitle>
                <CardDescription>Five categories based on autonomy and functional capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Baseline, Business Assistance, Process Automation, Decision Optimization, and Autonomous Execution
                  tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Domains Model */}
      <section id="dimensions" className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Domains Model</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Five domains that serve as organizing principles for assessing organizational readiness and
              implementing AI in a scalable, ethical, and value-generating manner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Target className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Strategy Domain</CardTitle>
                <CardDescription>Ensures AI initiatives align with broader business goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Vision Alignment with strategic outcomes</li>
                  <li>• Prioritization based on impact and feasibility</li>
                  <li>• Investment Planning with long-term ROI</li>
                  <li>• Integration with digital transformation</li>
                  <li>• Evaluation with clear success metrics</li>
                </ul>
                <Link href="/sima-core/strategy" className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1">
                  Explore Strategy dimension <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Shield className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Governance Domain</CardTitle>
                <CardDescription>Manages AI risks, ensures compliance, and upholds ethical standards</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Ethical Oversight for fairness and bias</li>
                  <li>• Regulatory Compliance across geographies</li>
                  <li>• Risk Management with proactive mitigation</li>
                  <li>• Documentation for auditability</li>
                  <li>• Communication of AI usage and responsibilities</li>
                </ul>
                <Link href="/sima-core/governance" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1">
                  Explore Governance dimension <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Database className="w-8 h-8 text-cyan-600 mb-2" />
                <CardTitle>Data Domain</CardTitle>
                <CardDescription>Encompasses data quality, access, governance, and strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Accessibility with well-organized data</li>
                  <li>• Quality through cleansing and validation</li>
                  <li>• Integration of siloed data sources</li>
                  <li>• Governance with formal policies</li>
                  <li>• Stewardship with defined roles</li>
                </ul>
                <Link href="/sima-core/data" className="text-sm text-cyan-600 hover:text-cyan-800 font-medium inline-flex items-center gap-1">
                  Explore Data dimension <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Users className="w-8 h-8 text-sky-600 mb-2" />
                <CardTitle>People Domain</CardTitle>
                <CardDescription>Focuses on workforce readiness and cultural adoption</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• AI Literacy across all employees</li>
                  <li>• Talent Strategy for hiring and training</li>
                  <li>• Cross-functional Teams collaboration</li>
                  <li>• Change Management support</li>
                  <li>• RAI Awareness and training</li>
                </ul>
                <Link href="/sima-core/people" className="text-sm text-sky-600 hover:text-sky-800 font-medium inline-flex items-center gap-1">
                  Explore People dimension <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Cog className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Technology Domain</CardTitle>
                <CardDescription>Infrastructure, tools, and technical practices for scalable AI</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Infrastructure for compute-intensive workloads</li>
                  <li>• Tools that are standardized and efficient</li>
                  <li>• Lifecycle Management with structured pipelines</li>
                  <li>• Security against threats and misuse</li>
                  <li>• Innovation supporting rapid experimentation</li>
                </ul>
                <Link href="/sima-core/technology" className="text-sm text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1">
                  Explore Technology dimension <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Capability Levels Model */}
      <section id="capability-levels" className="py-16 px-4 bg-blue-50 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Capability Levels Model</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Five progressive levels of increasing maturity and capability, each with increasing levels of AI control
              and growth objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card id="initial" className="scroll-mt-20 border-l-4 border-l-slate-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <CardTitle className="text-lg">Initial</CardTitle>
                </div>
                <CardDescription>
                  All initiatives start here. AI is being considered with curious but unstructured application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI vision and leadership support begins. Organizations build awareness and start exploring
                  possibilities.
                </p>
              </CardContent>
            </Card>

            <Card id="exploring" className="scroll-mt-20 border-l-4 border-l-blue-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <CardTitle className="text-lg">Exploring</CardTitle>
                </div>
                <CardDescription>
                  Structured experimentation and foundational skill development with isolated experiments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Early AI awareness with disconnected experiments, limited awareness, and lack of strategic direction.
                </p>
              </CardContent>
            </Card>

            <Card id="applying" className="scroll-mt-20 border-l-4 border-l-indigo-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <CardTitle className="text-lg">Applying</CardTitle>
                </div>
                <CardDescription>
                  Piloting AI projects with limited scope and success, often opportunistic rather than strategic.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Foundational investments in talent, data quality, and tooling begin to emerge with growing momentum.
                </p>
              </CardContent>
            </Card>

            <Card id="formalizing" className="scroll-mt-20 border-l-4 border-l-cyan-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <CardTitle className="text-lg">Formalizing</CardTitle>
                </div>
                <CardDescription>
                  Standardizing governance, workflows, and initial AI applications with repeatable practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI is prioritized by leadership and increasingly integrated into business processes with formal
                  frameworks.
                </p>
              </CardContent>
            </Card>

            <Card id="optimizing" className="scroll-mt-20 border-l-4 border-l-sky-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <CardTitle className="text-lg">Optimizing</CardTitle>
                </div>
                <CardDescription>
                  Refining systems with feedback loops, proactive governance, and operational AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI leveraged strategically across functions with robust governance and real-time analytics.
                </p>
              </CardContent>
            </Card>

            <Card id="leading" className="scroll-mt-20 border-l-4 border-l-blue-600 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  <CardTitle className="text-lg">Leading</CardTitle>
                </div>
                <CardDescription>
                  Continuous AI-driven innovation and enterprise-wide integration with industry leadership.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI is core to strategic differentiation, driving innovation and shaping industry standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Tool Categories Model */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Tool Categories Model</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Five categories of AI tools based on autonomy and functional capabilities, from passive assistants to
              strategic, independent actors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Eye className="w-6 h-6 text-slate-600" />
                </div>
                <CardTitle className="text-center">Baseline</CardTitle>
                <CardDescription className="text-center">
                  Foundational tier with passive AI tools requiring human initiation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    <strong>Purpose:</strong> Learn basics, gather usage data
                  </p>
                  <p>
                    <strong>Examples:</strong> FAQs, internal wikis, chatbots
                  </p>
                  <p>
                    <strong>Characteristics:</strong> Low autonomy, high guidance, static knowledge bases
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-center">Business Assistance</CardTitle>
                <CardDescription className="text-center">
                  Tools designed to actively enhance human productivity and decision-making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    <strong>Purpose:</strong> Boost productivity and creativity
                  </p>
                  <p>
                    <strong>Examples:</strong> Writing assistants, coding copilots, research summarizers
                  </p>
                  <p>
                    <strong>Characteristics:</strong> Dynamic support, task-specific boundaries
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Cog className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-center">Process Automation</CardTitle>
                <CardDescription className="text-center">
                  AI systems handling predefined, rule-based tasks and structured workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    <strong>Purpose:</strong> Free resources, gain efficiency
                  </p>
                  <p>
                    <strong>Examples:</strong> RPA bots, automated schedulers, workflow orchestrators
                  </p>
                  <p>
                    <strong>Characteristics:</strong> Rule-based logic, deterministic outcomes
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle className="text-center">Decision Optimization</CardTitle>
                <CardDescription className="text-center">
                  AI-enhanced strategy and foresight tools for complex decision-making
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    <strong>Purpose:</strong> Find insights, adapt to dynamic input
                  </p>
                  <p>
                    <strong>Examples:</strong> Dynamic pricing, route optimization, scenario planners
                  </p>
                  <p>
                    <strong>Characteristics:</strong> Predictive modeling, evidence-based recommendations
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-6 h-6 text-sky-600" />
                </div>
                <CardTitle className="text-center">Autonomous Execution</CardTitle>
                <CardDescription className="text-center">
                  Most advanced AI systems operating independently across domains
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600 space-y-2">
                  <p>
                    <strong>Purpose:</strong> Drive autonomous execution safely
                  </p>
                  <p>
                    <strong>Examples:</strong> Self-managing infrastructure, autonomous vehicles, AI command centers
                  </p>
                  <p>
                    <strong>Characteristics:</strong> Full autonomy, continuous learning, self-regulation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Important Note</h3>
            <p className="text-amber-800">
              The purpose of each tool category is not to encourage the use of all tools, but to provide groupings that
              can be safely applied with reduced risk based on your AI Capability Level. Using complex tools at low
              capability levels is ill-advised.
            </p>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">SIMA Core™ Key Principles</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Understanding the foundational principles that guide SIMA Core™ implementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Static Foundation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  SIMA Core™ is static and provides the structural foundation. SIMA Flow™ provides the dynamic
                  application of the core models, while SIMA Kit™ provides the necessary collateral to apply the Core
                  Models.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Progressive Maturity</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The point is not to reach the highest capability, but to use the capability assessment to lay the
                  groundwork for projects and identify areas for improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Risk-Based Approach</h3>
                <p className="text-slate-600 text-sm mb-4">
                  As organizations mature, they can safely enact AI tools at higher levels with controlled risk.
                  Starting with lower-level tools enhances learning in a less impactful environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Holistic Integration</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The Domains work together to provide a comprehensive approach to AI maturity, ensuring all
                  aspects of the organization are considered and aligned.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Position */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Where SIMA-Core Fits in the Ecosystem</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Core defines the vocabulary → Probe applies it diagnostically → Flow structures the improvement cycle
                → Kit supplies the cycle's resources → Ascend builds the practitioners who run the system.
              </p>
              <Link
                href="/start"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 transition-colors"
              >
                See how the full ecosystem works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement SIMA Core™?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your organization with the structural foundation of strategic intelligence management architecture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-blue-900 hover:bg-blue-50">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-blue-300 text-blue-100 hover:bg-blue-800 bg-transparent"
            >
              <Link href="/sima-flow">
                Explore SIMA Flow™ <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
