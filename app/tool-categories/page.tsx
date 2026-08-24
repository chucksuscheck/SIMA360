import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Tool Categories — SIMA360™",
  description:
    "The five SIMA360 AI Tool Categories — Baseline, Business Assistance, Process Automation, Decision Optimization, and Autonomous Execution — grouped by autonomy and functional capability.",
  alternates: {
    canonical: "https://www.sima360.org/tool-categories",
  },
}

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Users, Cog, Target, Zap } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ToolCategoryTabs } from "@/components/tool-category-tabs"
import { toolCategories } from "@/lib/tool-categories"

const iconMap: Record<string, typeof Eye> = {
  baseline: Eye,
  "business-assistance": Users,
  "process-automation": Cog,
  "decision-optimization": Target,
  "autonomous-execution": Zap,
}

export default function ToolCategoriesPage() {
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

      <ToolCategoryTabs active="overview" />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            AI Tool Categories
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Five categories of AI tools based on autonomy and functional capability, from passive assistants to
            strategic, independent actors.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The goal isn't to use every category. It's matching tool autonomy to organizational maturity — using
            complex tools at low maturity levels is ill-advised.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((c) => {
              const Icon = iconMap[c.slug]
              return (
                <Link
                  key={c.slug}
                  href={`/tool-categories/${c.slug}`}
                  className={`group rounded-lg border-l-4 ${c.borderClass} border-t border-r border-b border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-slate-100">
                      <Icon className="w-4 h-4 text-slate-700" />
                    </div>
                    <Badge variant="outline" className={c.badgeClass}>
                      Category {c.number}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {c.name}
                  </h2>
                  <p className="text-sm text-slate-500 italic mb-3">{c.tagline}</p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">{c.shortDescription}</p>
                  <span className="text-sm font-medium text-blue-600 inline-flex items-center gap-1">
                    Explore {c.name} <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
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
            SIMA-Probe measures your current maturity level and tells you which tool categories are safe to adopt
            next.
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
