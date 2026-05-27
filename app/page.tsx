import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Zap, Target, Users, BookOpen, Lightbulb, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.ai" />
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
              <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
            </div>
            <Navigation />
            <Button asChild>
              <a href="mailto:info@sima360.ai?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Controlled implementation of AI
          </Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Implement AI at the organizaitonal level while
            <span className="text-blue-600 block">Contolling Risk and Maximizing Value</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            SIMA360™ is a comprehensive framework for implementing AI across your entire organization with control and
            safety
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/sima-core">
                Explore Framework <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                Download Guide
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* SIMA360 Solution */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The SIMA360™ Solution</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A clear, practical path for turning AI implementations into sustainable value
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  SIMA360™ exists to provide organizations with a clear, practical path for turning AI implementations
                  into sustainable value while reducing the risks inherent with this type of tchnology . In a world
                  where artificial intelligence is evolving faster than most businesses can adapt, SIMA360™ serves as
                  both a compass and a playbook—helping leaders, teams, and stakeholders navigate AI adoption with
                  confidence, clarity, and governance.
                </p>

                <p className="text-slate-700 leading-relaxed mb-6">
                  SIMA360™ framework: a structured, evidence-based approach to assessing AI maturity, uncovering gaps,
                  and building the capabilities needed to achieve responsible, high-impact AI outcomes. Every approach
                  described in the framework serves a specific role in guiding the application of SIMA360™ to real-world
                  challenges.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <p className="text-slate-700 leading-relaxed">
                    Following these approaches ensures that AI initiatives deliver measurable results, reduce risks, and
                    align with strategic goals. Skipping components or altering the intended application weakens those
                    results and can lead to wasted investment, compliance failures, or missed opportunities.
                  </p>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">
                  SIMA360™ is not tied to a single industry or technology stack. It is adaptable, scalable, and relevant
                  whether you are deploying predictive analytics in healthcare, automating workflows in manufacturing,
                  or experimenting with generative AI in creative fields. The Guide is intended for anyone approaching
                  AI adoption—executives, innovators, compliance officers, technologists, and change leaders alike.
                </p>

                <p className="text-slate-700 leading-relaxed mb-8">
                  While the framework provides the foundation, we recognize that every organization's AI journey is
                  unique. New methods, tools, and adaptations will emerge as you apply SIMA360™. These context-specific
                  applications may vary widely—but all can be anchored back to the approaches and practices described in
                  this Guide.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                    Training Programs Available
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Training programs from SIMA-Ascend™ can be explored and registered for at:
                  </p>
                  <div className="mb-4">
                    <a
                      href="https://SIMA360Classes.eventbee.com/boxoffice"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      https://SIMA360Classes.eventbee.com/boxoffice
                    </a>
                  </div>
                  <p className="text-slate-700">
                    For more information, please contact us at{" "}
                    <a href="mailto:info@sima360.ai" className="text-blue-600 hover:text-blue-800 underline">
                      info@sima360.ai
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Evidence-Based</h3>
                  <p className="text-slate-600 text-sm">
                    Structured approach grounded in proven methodologies and best practices
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Industry Agnostic</h3>
                  <p className="text-slate-600 text-sm">
                    Adaptable framework that works across all industries and technology stacks
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Comprehensive</h3>
                  <p className="text-slate-600 text-sm">
                    Designed for all stakeholders from executives to technologists
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete AI Framework Suite</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four integrated components designed to accelerate your AI transformation journey
            </p>
          </div>

          {/* SIMA Core Cycle Image */}
          <div className="flex justify-center mb-12">
            <div className="max-w-2xl">
              <Image
                src="/images/sima-core-cycle.svg"
                alt="SIMA360 Core Cycle - Assess Capabilities, Set Groundwork, Execute with FLAI Project Cycle"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Click below to learn more</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">SIMA Core™</CardTitle>
                <CardDescription>Foundational framework for strategic AI implementation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-core">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">SIMA Flow™</CardTitle>
                <CardDescription>Streamlined processes for AI workflow optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-flow">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">SIMA Kit™</CardTitle>
                <CardDescription>Ready-to-use tools and templates for rapid deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-kit">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">SIMA Ascend™</CardTitle>
                <CardDescription>Comprehensive training and certification programs</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/sima-ascend">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose SIMA360™?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Proven methodology backed by strategic intelligence principles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Strategic Alignment</h3>
              <p className="text-slate-600">Align AI initiatives with business objectives for maximum impact and ROI</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Innovation Framework</h3>
              <p className="text-slate-600">
                Structured approach to AI innovation that reduces risk and accelerates adoption
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Measurable Results</h3>
              <p className="text-slate-600">Clear metrics and KPIs to track progress and demonstrate value creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your AI Strategy?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join leading organizations using SIMA360™ to drive strategic AI transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:info@sima360.ai?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                Download Framework Guide
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
