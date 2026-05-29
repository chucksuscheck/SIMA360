import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "People Domain — AI Domains | SIMA360™",
  description:
    "The People Domain focuses on workforce readiness, AI literacy, talent strategy, change management, and cultural adoption of responsible AI practices.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, AlertCircle, BookOpen, Briefcase, HeartHandshake, RefreshCw, GraduationCap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const capabilityLevels = [
  {
    level: 1,
    name: "Initial",
    color: "slate",
    description:
      "AI is viewed as a technology problem, not a people one. There are no training programs, no AI literacy initiatives, and no structured talent strategy. A few individuals may be self-educating. The organization as a whole is unprepared to work alongside AI systems.",
  },
  {
    level: 2,
    name: "Exploring",
    color: "sky",
    description:
      "Ad-hoc learning is occurring. Internal champions are advocating for AI literacy but without organizational support. Some individuals have completed self-directed courses. There is no structured program, no defined competency model, and no investment in change management.",
  },
  {
    level: 3,
    name: "Applying",
    color: "blue",
    description:
      "Training exists for specific roles involved in AI projects. Early cross-functional collaboration is beginning. Responsible AI (RAI) has not yet entered training curricula. Change management is acknowledged but not resourced or structured.",
  },
  {
    level: 4,
    name: "Formalizing",
    color: "violet",
    description:
      "A structured AI literacy program is in place. A defined talent strategy for AI covers hiring, reskilling, and retention. Change management processes are documented and staffed. Responsible AI principles are introduced in training programs.",
  },
  {
    level: 5,
    name: "Optimizing",
    color: "purple",
    description:
      "Enterprise-wide AI competency is building. Continuous learning is embedded in the culture. Responsible AI is central to training rather than a footnote. Cross-functional teams working on AI have the skills they need. Leadership actively models AI literacy.",
  },
  {
    level: 6,
    name: "Leading",
    color: "sky",
    description:
      "AI literacy is a defining organizational characteristic. The organization develops and shares AI education externally. Talent recognized for AI expertise attracts further expertise. The culture is AI-ready — adaptive, curious, and responsible by default.",
  },
]

const levelColorMap: Record<string, string> = {
  slate: "border-l-slate-400 bg-slate-50",
  sky: "border-l-sky-400 bg-sky-50",
  blue: "border-l-blue-400 bg-blue-50",
  violet: "border-l-violet-400 bg-violet-50",
  purple: "border-l-purple-400 bg-purple-50",
}

const numberColorMap: Record<string, string> = {
  slate: "bg-slate-100",
  sky: "bg-sky-100",
  blue: "bg-blue-100",
  violet: "bg-violet-100",
  purple: "bg-purple-100",
}

export default function PeopleDomainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/sima-core/people" />
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

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-sky-100 text-sky-800 border-sky-200">
                Domain
              </Badge>
              <Badge variant="outline" className="text-slate-600">
                <Link href="/sima-core" className="hover:text-sky-600 transition-colors">SIMA-Core™</Link>
              </Badge>
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-sky-600" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              People Domain
            </h1>
            <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
              AI systems don't implement themselves. The People domain determines whether an organization's workforce has the literacy, skill, and cultural readiness to work with AI productively and responsibly — at every level, from the executive team to the frontline.
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              It is the domain that asks: <em>do our people know how to work with AI, and do they want to?</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-sky-600 hover:bg-sky-700">
                <Link href="/sima-probe">
                  Assess Your People Maturity <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sima-core">Back to SIMA-Core™</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Five Focus Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Five Focus Areas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              People maturity is assessed across five focus areas that together determine whether the organization's workforce can support, advance, and responsibly govern AI adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">AI Literacy</CardTitle>
                <CardDescription>
                  Employees at all levels understand what AI is, what it can do, and what its limitations are.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI literacy is not just for data scientists. Executives who commission AI projects, managers who oversee AI-assisted workflows, and frontline employees who interact with AI systems all need a foundational understanding suited to their role. Literacy programs are structured, role-specific, and updated as AI capabilities evolve.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <Briefcase className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Talent Strategy</CardTitle>
                <CardDescription>
                  A defined approach to acquiring, developing, and retaining AI-capable talent.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Talent strategy addresses both building and buying capability. It includes hiring for AI-adjacent roles, upskilling existing employees whose roles are being transformed by AI, and building retention structures that keep AI expertise in the organization rather than cycling through contract workers.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <HeartHandshake className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Cross-functional Collaboration</CardTitle>
                <CardDescription>
                  AI projects bring together the right mix of technical, business, and domain expertise.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Effective AI outcomes require collaboration between people who understand the technology and people who understand the business problem. Cross-functional team structures, shared language, and defined collaboration practices make that possible rather than accidental.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <RefreshCw className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">Change Management</CardTitle>
                <CardDescription>
                  Structured support for the organizational transitions that AI adoption requires.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  AI changes how people work. Change management ensures those transitions are planned, communicated, and supported — not imposed. It addresses resistance, identifies the people most affected by AI-driven change, and provides tools for navigating the transition without losing productivity or trust.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center mb-2">
                  <GraduationCap className="w-5 h-5 text-sky-600" />
                </div>
                <CardTitle className="text-base">RAI Awareness</CardTitle>
                <CardDescription>
                  Employees understand and apply responsible AI principles in their work.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Responsible AI (RAI) is not the exclusive concern of the legal or ethics team. Everyone who works with AI — who uses its outputs, who designs its workflows, who approves its deployment — needs to understand what responsible use means in practice and what to do when something looks wrong.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sky-50 border-sky-200">
              <CardHeader>
                <div className="w-10 h-10 bg-sky-200 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-sky-700" />
                </div>
                <CardTitle className="text-base text-sky-900">AI Is a Human System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-sky-800">
                  Every AI system is designed, deployed, monitored, and interpreted by people. Organizations that invest heavily in AI technology but neglect the People domain consistently underperform those that invest in both. The organizations that get the most from AI are the ones that have prepared their people to work with it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capability Progression */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Capability Progression</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              What the People domain looks like at each of the six SIMA360 capability levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {capabilityLevels.map((lvl) => (
              <div
                key={lvl.level}
                className={`rounded-lg border-l-4 p-5 ${levelColorMap[lvl.color] ?? "border-l-slate-300 bg-slate-50"}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${numberColorMap[lvl.color] ?? "bg-slate-100"}`}>
                    {lvl.level}
                  </div>
                  <span className="font-semibold text-slate-900">{lvl.name}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{lvl.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Gaps */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Common People Gaps</h2>
          <div className="space-y-4">
            {[
              {
                gap: "AI literacy programs target data scientists and engineers but exclude business stakeholders.",
                consequence: "Leaders commission AI projects they don't understand and can't evaluate. Frontline employees resist AI tools they weren't prepared to use.",
              },
              {
                gap: "Talent strategy focuses on hiring without addressing reskilling for existing employees.",
                consequence: "A two-tier workforce emerges: AI-capable new hires and an existing workforce that feels displaced and disengaged.",
              },
              {
                gap: "Change management is treated as a communication exercise rather than a structured process.",
                consequence: "AI adoption encounters sustained resistance that wasn't anticipated because no one mapped who would be most affected.",
              },
              {
                gap: "Cross-functional AI teams exist on paper but the collaboration structures to make them work don't.",
                consequence: "Technical teams build things business teams don't understand. Business teams ask for things technical teams can't safely build.",
              },
              {
                gap: "Responsible AI training is a one-hour module delivered once at onboarding.",
                consequence: "Employees know the principles exist but don't know how to apply them when an ambiguous situation arises.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">{item.gap}</p>
                  <p className="text-sm text-slate-600">{item.consequence}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Connection */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How SIMA360 Addresses People</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                component: "SIMA-Probe™",
                href: "/sima-probe",
                role: "Measures your current People maturity level — assessing AI literacy, talent strategy, change management readiness, and RAI awareness across the organization.",
              },
              {
                component: "SIMA-Flow™",
                href: "/sima-flow",
                role: "Structures improvement cycles for building organizational AI capability — from closing specific skills gaps to developing a long-term workforce readiness strategy.",
              },
              {
                component: "SIMA-Kit™",
                href: "/sima-kit",
                role: "Provides AI literacy curriculum frameworks, change management planning templates, cross-functional team charters, and RAI training resources.",
              },
              {
                component: "SIMA-Ascend™",
                href: "/sima-ascend",
                role: "Is the People domain's primary delivery mechanism — structured training programs that build AI literacy, responsible AI competency, and practitioner capability at every level of the organization.",
              },
            ].map((item) => (
              <Card key={item.component} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">
                    <Link href={item.href} className="text-sky-600 hover:text-sky-800 transition-colors">
                      {item.component}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{item.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/sima-core"
              className="text-sky-600 hover:text-sky-800 font-medium inline-flex items-center gap-1 transition-colors"
            >
              View all five domains <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your AI People Readiness Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your People maturity level and identifies the literacy and capability gaps most likely to limit your AI outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe">
                Start the Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent">
              <Link href="/sima-ascend">
                Explore SIMA-Ascend™ Training <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
