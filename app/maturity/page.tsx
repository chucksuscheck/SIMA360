import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Maturity Levels — SIMA360™",
  description:
    "The six SIMA360 maturity levels — Initial through Leading — and what each level looks like across the five organizational perspectives: Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity",
  },
}

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { maturityLevels } from "@/lib/maturity-levels"
import { MaturityTabs } from "@/components/maturity-tabs"

export default function MaturityPage() {
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

      <MaturityTabs active="overview" />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The Six Maturity Levels
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            SIMA360 measures AI maturity across six progressive maturity levels — from Initial through Leading. Each level describes where an organization stands across all five perspectives: Strategy, Governance, Data, People, and Technology.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The goal is not to reach Level 6. The goal is to know where you are, understand what it means, and advance deliberately.
          </p>
        </div>
      </section>

      {/* Level cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maturityLevels.map((lvl) => (
              <Link
                key={lvl.slug}
                href={`/maturity/${lvl.slug}`}
                className={`group rounded-lg border-l-4 ${lvl.borderClass} border-t border-r border-b border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline" className={lvl.badgeClass}>
                    Level {lvl.number}
                  </Badge>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {lvl.name}
                </h2>
                <p className="text-sm text-slate-500 italic mb-3">{lvl.tagline}</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{lvl.shortDescription}</p>
                <span className="text-sm font-medium text-blue-600 inline-flex items-center gap-1">
                  Explore Level {lvl.number} <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
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
