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
  Award,
  Home,
  AlertTriangle,
  TrendingUp,
  Eye,
  Building2,
  Layers,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

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
            <Button asChild>
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800 border-red-200">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Learning from AI Failures
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Born from the Need to
              <span className="text-red-600 block">Prevent AI Disasters</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              SIMA360™ was created after witnessing too many organizations make costly, avoidable mistakes with AI
              implementation. We exist to ensure your organization doesn't become the next cautionary tale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="/">
                  Protect Your Organization <ArrowRight className="ml-2 w-4 h-4" />
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

      {/* The Problem Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The AI Implementation Crisis</h2>
            <p className="text-lg text-slate-600">
              Organizations worldwide are rushing into AI without proper governance, leading to spectacular failures
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

          <div className="bg-white border border-red-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">The Pattern is Clear</h3>
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

      {/* The Myths Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Dangerous AI Myths We Must Dispel</h2>
            <p className="text-lg text-slate-600">
              These common misconceptions lead organizations down the path to AI disasters
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Myth: AI Generally Knows More Than We Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  <strong>Reality:</strong> AI systems are only as good as their training data and are often limited by
                  the biases and gaps in that data. They lack human judgment, context, and ethical reasoning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Myth: The Best AI Runs By Itself
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  <strong>Reality:</strong> Autonomous AI systems are prone to catastrophic failures. The most
                  successful AI implementations maintain human oversight and intervention capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Myth: AI Will Take Away Our Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  <strong>Reality:</strong> AI augments human capabilities rather than replacing them. The most
                  effective AI implementations enhance human decision-making and productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Myth: You Must Jump Fully Into AI or Fall Behind
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  <strong>Reality:</strong> Rushed AI implementation leads to failures. Methodical, capability-based
                  progression ensures sustainable success and avoids costly mistakes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Framework Foundation Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Layers className="w-4 h-4 mr-2" />
              Framework Foundation
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Built on the Foundation of 9 Leading AI Maturity Models and 2 years of research
            </h2>
            <p className="text-lg text-slate-600">
              SIMA360™ didn't emerge in isolation. It was carefully crafted by analyzing and synthesizing the best
              elements from the world's leading AI maturity frameworks, creating a comprehensive solution that addresses
              the gaps left by existing models.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Foundational Research Sources</h3>
            <p className="text-slate-700 mb-6 text-center max-w-3xl mx-auto">
              Through extensive comparative evaluation, we identified the strengths and limitations of existing
              frameworks, then combined their best features while addressing their collective blind spots.
            </p>

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
                      <Badge variant="outline" className="text-xs">
                        Strategy & Culture
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">McKinsey AI Readiness</span>
                      <Badge variant="outline" className="text-xs">
                        Diagnostics
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Deloitte AI Capability</span>
                      <Badge variant="outline" className="text-xs">
                        Risk & Process
                      </Badge>
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
                      <Badge variant="outline" className="text-xs">
                        Trustworthiness
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">WEF Governance</span>
                      <Badge variant="outline" className="text-xs">
                        Ethics & Rights
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">ISO/IEC Standards</span>
                      <Badge variant="outline" className="text-xs">
                        Compliance
                      </Badge>
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
                      <Badge variant="outline" className="text-xs">
                        Business-Friendly
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">Google AI Principles</span>
                      <Badge variant="outline" className="text-xs">
                        Technical Focus
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">IBM Watson Framework</span>
                      <Badge variant="outline" className="text-xs">
                        Enterprise AI
                      </Badge>
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
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>Gartner's AI dimension</strong> - High-level governance and adoption frameworks
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>McKinsey's diagnostic approach</strong> - Strong capability assessment methodologies
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>NIST's trustworthiness focus</strong> - Ethical AI and accountability frameworks
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>Microsoft's business alignment</strong> - Practical, enterprise-ready approaches
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
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>Operational execution depth</strong> - Most frameworks lacked detailed implementation
                      guidance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>Granular maturity stages</strong> - 10-stage model vs. typical 3-5 stage approaches
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>Human-AI collaboration focus</strong> - Emphasis on AI autonomy with human oversight
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 text-sm">
                      <strong>Integrated PDCA cycles</strong> - Continuous improvement at every maturity stage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-3 text-center">The SIMA360™ Advantage</h4>
              <p className="text-slate-700 text-center">
                By synthesizing the best elements from 9 leading frameworks and addressing their collective limitations,
                SIMA360™ provides the most comprehensive, operationally-focused AI maturity model available. It combines
                strategic vision with tactical execution, governance with innovation, and human insight with AI
                capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The SIMA360™ Solution</h2>
            <p className="text-lg text-slate-600">
              A structured approach to AI governance that prevents disasters before they happen
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-8 border-l-4 border-l-blue-500">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
                <p className="text-slate-700 mb-4">
                  For organizations implementing AI initiatives across the enterprise, there are many risks, such as AI
                  dimension misalignment, technical debt, and unintended consequences.
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h3>
                <p className="text-slate-700">
                  We need a way to control AI initiatives with proven, safe, and practical guidance. The control must be
                  based on evidence-based research on how to position tools, roles, and activities to help organizations
                  progress methodically and safely when applying AI.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">Reverse Your Thinking</h4>
                <div className="space-y-4">
                  <div className="bg-red-100 border border-red-200 rounded p-3">
                    <p className="text-red-800 font-medium">❌ Wrong Way:</p>
                    <p className="text-red-700 text-sm">"I have a problem → Let's use AI to solve it"</p>
                  </div>
                  <div className="bg-green-100 border border-green-200 rounded p-3">
                    <p className="text-green-800 font-medium">✅ Better Way:</p>
                    <p className="text-green-700 text-sm">
                      "What do I need to do to be prepared? → What can AI do for me?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              AI Maturity is Capability-Based, Not Time-Based
            </h3>
            <p className="text-lg text-slate-600 text-center mb-8">
              Organizations must build foundational capabilities before advancing to more complex AI implementations
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">AI Dimension Alignment</h4>
                <p className="text-slate-600 text-sm">
                  Ensure AI initiatives support business objectives before implementation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Governance Framework</h4>
                <p className="text-slate-600 text-sm">
                  Establish proper oversight and risk management before deployment
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Iterative Approach</h4>
                <p className="text-slate-600 text-sm">Use cyclical methodology to continuously improve and adapt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The SIMA360™ Framework</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Four integrated components working together to prevent AI disasters and accelerate safe transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SIMA Core™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">AI Dimension Foundation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  The foundational framework providing three core models: AI Dimensions (Strategy, Governance, Data,
                  People, Technology), AI Capability Levels, and AI Tool Categories. Establishes the AI dimension
                  foundation for all AI initiatives.
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto text-blue-600 hover:text-blue-800">
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
                    <CardTitle className="text-xl">SIMA Flow™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Process Methodology</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  The FLAI cycle methodology (Frame, Learn, Assess, Improve) that guides project execution and ensures
                  continuous improvement throughout the AI implementation process. Similar to Plan-Do-Check-Act but
                  optimized for AI projects.
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
                    <CardTitle className="text-xl">SIMA Kit™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Operational Tools</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Ready-to-use tools, templates, and guidance that bridge strategy and execution. Includes capability
                  assessment tools, project planning templates, and governance frameworks to prevent the mistakes that
                  led to AI disasters.
                </p>
                <Button variant="ghost" asChild className="p-0 h-auto text-purple-600 hover:text-purple-800">
                  <Link href="/sima-kit">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SIMA Ascend™</CardTitle>
                    <CardDescription className="text-sm text-slate-500">Training & Certification</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Comprehensive training programs and certification pathways that build organizational capability and
                  ensure successful framework adoption across all levels. Learn from real-world failures to avoid
                  repeating them.
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

      {/* Early Adopter Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Become an Early Adopter</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Join forward-thinking organizations using SIMA360™ to implement AI safely and strategically
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Early Adopter Benefits</h3>
              <p className="text-slate-600">
                Get access to the framework, tools, and training before general availability. Shape the future of AI
                governance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Consulting Partners</h3>
              <p className="text-slate-600">
                Consulting companies can use SIMA360™ to help their clients avoid AI disasters and implement AI
                successfully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Risk Mitigation</h3>
              <p className="text-slate-600">
                Avoid becoming the next AI disaster story. Implement AI with confidence, clarity, and control from day
                one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Don't Let Your Organization Become the Next AI Disaster
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Connect with Dr. Charles (Chuck) Suscheck and our team to learn how SIMA360™ can protect your organization
              from AI implementation failures
            </p>

            <div className="bg-slate-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <p className="text-slate-600">
                      <strong>General Information:</strong>{" "}
                      <a href="mailto:info@sima360.org" className="text-blue-600 hover:text-blue-800 underline">
                        info@sima360.org
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <strong>Dr. Charles Suscheck:</strong>{" "}
                      <a
                        href="mailto:charles.suscheck@sima360.org"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        charles.suscheck@sima360.org
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <strong>Schedule a Conversation:</strong>{" "}
                      <a
                        href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        info@sima360.org
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Training Programs</h3>
                  <p className="text-slate-600 mb-3">Explore and register for SIMA Ascend™ training programs:</p>
                  <a
                    href="https://SIMA360Classes.eventbee.com/boxoffice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline text-sm"
                  >
                    SIMA360Classes.eventbee.com/boxoffice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Implement AI with Confidence, Clarity, and Control</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't let your organization become another AI failure story. Join the early adopters using SIMA360™ to
            implement AI safely and strategically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-blue-900 hover:bg-blue-50">
              <a href="mailto:info@sima360.org?subject=Early%20Adopter%20Program">Become an Early Adopter</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-blue-300 text-blue-100 hover:bg-blue-800 bg-transparent"
            >
              <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                Download Framework Guide <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-50 border-t">
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

export default AboutPage
