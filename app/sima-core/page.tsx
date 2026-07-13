import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA-Core — Framework Foundation | SIMA360™",
  description:
    "SIMA-Core defines the conceptual vocabulary of the SIMA360 framework: five strategic perspectives, six maturity levels, and five AI tool categories that every other component operates within.",
  alternates: {
    canonical: "https://www.sima360.org/sima-core",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
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
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              The Core Elements
              <span className="text-blue-600 block">of SIMA360</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              SIMA Core™ is the static structural foundation consisting of three core models: the Strategic
              Perspectives model, the AI Maturity Levels model, and the AI Tool Categories model. It provides the
              organizing principles for effective and responsible AI maturity — the same three models developed
              throughout <em>The AI Rush: Too Much. Too Soon.</em>
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
              maturity? The answer is three interconnected models: the Strategic Perspectives model, the AI Maturity
              Levels model, and the AI Tool Categories model. Everything else in the SIMA360 ecosystem operates within the
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
                <CardTitle className="text-xl">Strategic Perspectives</CardTitle>
                <CardDescription>
                  Five perspectives to categorize effective and responsible AI maturity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Strategy, Governance, Data, People, and Technology perspectives serve as organizing principles for
                  assessing organizational readiness.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">AI Maturity Levels</CardTitle>
                <CardDescription>Six progressive levels of increasing AI maturity and capability</CardDescription>
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

      {/* Strategic Perspectives Model */}
      <section id="perspectives" className="py-16 px-4 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Strategic Perspectives Model</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Five perspectives that serve as organizing principles for assessing organizational readiness and
              implementing AI in a scalable, ethical, and value-generating manner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Target className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Strategy Perspective</CardTitle>
                <CardDescription>Ensures AI initiatives align with broader business goals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Current Situation and Vision</li>
                  <li>• Competitive Advantage</li>
                  <li>• Strategic Choices Roadmap</li>
                  <li>• Required Capabilities and Execution Model</li>
                  <li>• Measures of Success and Learning and Adaptation</li>
                </ul>
                <Link href="/sima-core/strategy" className="text-sm text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1">
                  Explore Strategy perspective <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Shield className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle>Governance Perspective</CardTitle>
                <CardDescription>Keeps AI-influenced decisions inside their constraints once the system is running</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Decision Rights</li>
                  <li>• Roles and Accountability</li>
                  <li>• Policies and Standards</li>
                  <li>• Risk, Compliance, and Controls</li>
                  <li>• Transparency and Traceability</li>
                  <li>• Continuous Monitoring and Improvement</li>
                </ul>
                <Link href="/sima-core/governance" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1">
                  Explore Governance perspective <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Database className="w-8 h-8 text-cyan-600 mb-2" />
                <CardTitle>Data Perspective</CardTitle>
                <CardDescription>Determines whether the organization keeps learning from the world or from itself</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Accuracy and Completeness</li>
                  <li>• Relevance and Representativeness</li>
                  <li>• Consistency and Definition</li>
                  <li>• Accessibility and Timeliness</li>
                  <li>• Traceability and Lineage, Security and Ethics</li>
                  <li>• Interpretation and Application, Continuous Monitoring and Correction</li>
                </ul>
                <Link href="/sima-core/data" className="text-sm text-cyan-600 hover:text-cyan-800 font-medium inline-flex items-center gap-1">
                  Explore Data perspective <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Users className="w-8 h-8 text-sky-600 mb-2" />
                <CardTitle>People Perspective</CardTitle>
                <CardDescription>Determines how AI outputs get interpreted, trusted, challenged, or waved through</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Interpretation Rules</li>
                  <li>• Visibility</li>
                  <li>• Training as an Evolving System</li>
                  <li>• Learning From Failure</li>
                  <li>• Guarding Against Overtrust</li>
                </ul>
                <Link href="/sima-core/people" className="text-sm text-sky-600 hover:text-sky-800 font-medium inline-flex items-center gap-1">
                  Explore People perspective <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <Cog className="w-8 h-8 text-slate-600 mb-2" />
                <CardTitle>Technology Perspective</CardTitle>
                <CardDescription>Determines whether the system can sustain change without degrading decision quality</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-slate-600 space-y-2 mb-4">
                  <li>• Architecture and Adaptability</li>
                  <li>• Integration</li>
                  <li>• Reliability</li>
                  <li>• Security</li>
                  <li>• AI Operations and Automation</li>
                  <li>• Observability</li>
                </ul>
                <Link href="/sima-core/technology" className="text-sm text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1">
                  Explore Technology perspective <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Maturity Levels Model */}
      <section id="capability-levels" className="py-16 px-4 bg-blue-50 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Maturity Levels Model</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Six progressive levels of increasing maturity and capability. Select any level to see what it means across all five perspectives.{" "}
              <Link href="/maturity" className="text-blue-600 hover:text-blue-800 underline">
                View the full maturity guide →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card id="initial" className="scroll-mt-20 border-l-4 border-l-slate-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <CardTitle className="text-lg"><Link href="/maturity#initial" className="hover:text-blue-600 hover:underline transition-colors">Initial</Link></CardTitle>
                </div>
                <CardDescription>
                  AI interest is real, but nothing yet coordinates it. Activity is possible; consistency isn't.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Success here isn't a strategy document or a policy — it's narrowing general awareness down to the
                  small number of decisions worth examining first.
                </p>
              </CardContent>
            </Card>

            <Card id="exploring" className="scroll-mt-20 border-l-4 border-l-blue-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <CardTitle className="text-lg"><Link href="/maturity#exploring" className="hover:text-blue-600 hover:underline transition-colors">Exploring</Link></CardTitle>
                </div>
                <CardDescription>
                  Multiple efforts are underway, but they're disconnected — each built on its own assumptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  No shared standard connects the work yet, so effort spreads across many places without learning
                  accumulating anywhere.
                </p>
              </CardContent>
            </Card>

            <Card id="applying" className="scroll-mt-20 border-l-4 border-l-indigo-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <CardTitle className="text-lg"><Link href="/maturity#applying" className="hover:text-blue-600 hover:underline transition-colors">Applying</Link></CardTitle>
                </div>
                <CardDescription>
                  Individual efforts work and can be defended on their own terms, but they don't generalize.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  The organization is productive in ways that don't add up — opportunism, not architecture, is
                  driving outcomes.
                </p>
              </CardContent>
            </Card>

            <Card id="formalizing" className="scroll-mt-20 border-l-4 border-l-cyan-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <CardTitle className="text-lg"><Link href="/maturity#formalizing" className="hover:text-blue-600 hover:underline transition-colors">Formalizing</Link></CardTitle>
                </div>
                <CardDescription>
                  Structure exists and holds under normal conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  The gap shows up specifically when something is contested, urgent, or the world changes underneath
                  it — the paperwork looks complete before the pressure test runs.
                </p>
              </CardContent>
            </Card>

            <Card id="optimizing" className="scroll-mt-20 border-l-4 border-l-sky-400 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  <CardTitle className="text-lg"><Link href="/maturity#optimizing" className="hover:text-blue-600 hover:underline transition-colors">Optimizing</Link></CardTitle>
                </div>
                <CardDescription>
                  The system is tested against outcomes continuously.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  What's learned changes what happens next, not just what gets documented. The challenge is resisting
                  expansion driven by capability rather than readiness.
                </p>
              </CardContent>
            </Card>

            <Card id="leading" className="scroll-mt-20 border-l-4 border-l-blue-600 bg-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  <CardTitle className="text-lg"><Link href="/maturity#leading" className="hover:text-blue-600 hover:underline transition-colors">Leading</Link></CardTitle>
                </div>
                <CardDescription>
                  Improvement is built into how the organization operates day to day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Not something applied to the system periodically — this is not the final destination, it's the
                  beginning of stewardship.
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
                  Most advanced AI systems operating independently across the organization
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
              can be safely applied with reduced risk based on your AI Maturity Level. Using complex tools at low
              maturity levels is ill-advised.
            </p>
          </div>

          <div className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Relationship to AI Maturity Levels</h3>
            <p className="text-blue-800">
              The AI Tool Categories roughly parallel the AI Maturity Levels — organizations at earlier Levels are
              generally better served by lower-autonomy categories, while higher Levels create the governance and
              oversight needed to safely adopt higher-autonomy categories. The relationship is directional, not
              one-to-one: with five categories and six Levels, maturity is the gating condition for tool adoption,
              not a fixed lockstep pairing.
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
                  The point is not to reach the highest Maturity Level, but to use the maturity assessment to lay the
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
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Weakest-Constraint Principle</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The system behaves at the level of its least mature perspective, not its most advanced one. A
                  strong Technology perspective can't compensate for weak Governance — sophisticated technology can
                  scale a governance failure faster than weak governance could ever generate one on its own.
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
