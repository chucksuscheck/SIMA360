import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Perspectives — SIMA360™",
  description:
    "The five SIMA360 perspectives — Strategy, Governance, Data, People, and Technology — the organizing principles for assessing organizational readiness and implementing AI in a scalable, ethical, and value-generating manner.",
  alternates: {
    canonical: "https://www.sima360.org/perspectives",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Target, Shield, Database, Users, Cog } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PerspectiveTabs } from "@/components/perspective-tabs"

const perspectives = [
  {
    icon: Target,
    name: "Strategy",
    href: "/sima-core/strategy",
    color: "text-blue-600",
    description: "Ensures AI initiatives align with broader business goals",
    components: [
      "Current Situation and Vision",
      "Competitive Advantage",
      "Strategic Choices Roadmap",
      "Required Capabilities and Execution Model",
      "Measures of Success and Learning and Adaptation",
    ],
  },
  {
    icon: Shield,
    name: "Governance",
    href: "/sima-core/governance",
    color: "text-indigo-600",
    description: "Keeps AI-influenced decisions inside their constraints once the system is running",
    components: [
      "Decision Rights",
      "Roles and Accountability",
      "Policies and Standards",
      "Risk, Compliance, and Controls",
      "Transparency and Traceability",
      "Continuous Monitoring and Improvement",
    ],
  },
  {
    icon: Database,
    name: "Data",
    href: "/sima-core/data",
    color: "text-cyan-600",
    description: "Determines whether the organization keeps learning from the world or from itself",
    components: [
      "Accuracy and Completeness",
      "Relevance and Representativeness",
      "Consistency and Definition",
      "Accessibility and Timeliness",
      "Traceability and Lineage, Security and Ethics",
      "Interpretation and Application, Continuous Monitoring and Correction",
    ],
  },
  {
    icon: Users,
    name: "People",
    href: "/sima-core/people",
    color: "text-sky-600",
    description: "Determines how AI outputs get interpreted, trusted, challenged, or waved through",
    components: [
      "Interpretation Rules",
      "Visibility",
      "Training as an Evolving System",
      "Learning From Failure",
      "Guarding Against Overtrust",
    ],
  },
  {
    icon: Cog,
    name: "Technology",
    href: "/sima-core/technology",
    color: "text-slate-600",
    description: "Determines whether the system can sustain change without degrading decision quality",
    components: [
      "Architecture and Adaptability",
      "Integration",
      "Reliability",
      "Security",
      "AI Operations and Automation",
      "Observability",
    ],
  },
]

export default function PerspectivesPage() {
  return (
    <div className="min-h-screen bg-white">
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

      <PerspectiveTabs active="overview" />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The Five Perspectives
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            SIMA360 organizes AI readiness around five perspectives — Strategy, Governance, Data, People, and Technology. Each one answers a different question about whether AI can be trusted to influence a decision.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Maturity is measured across all five at once. Strength in one doesn't compensate for weakness in another.
          </p>
        </div>
      </section>

      {/* Perspective cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perspectives.map((p) => {
              const Icon = p.icon
              return (
                <Card key={p.name} className="hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <Icon className={`w-8 h-8 ${p.color} mb-2`} />
                    <CardTitle>{p.name} Perspective</CardTitle>
                    <CardDescription>{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-slate-600 space-y-2 mb-4">
                      {p.components.map((c) => (
                        <li key={c}>• {c}</li>
                      ))}
                    </ul>
                    <Link
                      href={p.href}
                      className={`text-sm font-medium inline-flex items-center gap-1 ${p.color} hover:underline`}
                    >
                      Explore {p.name} perspective <ArrowRight className="w-3 h-3" />
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your Organization Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your current maturity level across all five perspectives and tells you exactly what to address next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe/assessment">
                Start Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
