import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { toolCategories, type MaturityStatus } from "@/lib/tool-categories"
import { ToolCategoryTabs, type ToolCategoryKey } from "@/components/tool-category-tabs"

// Neutral three-tier scheme (solid / outlined / muted) rather than a
// red/yellow/green treatment — those colors already carry other reserved
// meanings elsewhere in the app (e.g. SIMA-Probe severity and maturity
// level colors), so reusing them here would conflict with those.
const maturityStatusClass: Record<MaturityStatus, string> = {
  Safe: "bg-slate-900 text-white border-transparent",
  Risky: "bg-white text-slate-700 border-slate-400",
  Avoid: "bg-slate-100 text-slate-400 border-slate-200",
}

export function ToolCategoryPage({ slug }: { slug: string }) {
  const i = toolCategories.findIndex((c) => c.slug === slug)
  const category = toolCategories[i]
  const prev = toolCategories[i - 1]
  const next = toolCategories[i + 1]

  return (
    <div className={`min-h-screen ${category.bgGradientClass}`}>
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

      <ToolCategoryTabs active={slug as ToolCategoryKey} />

      {/* Category header + overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className={`border-l-4 ${category.borderClass} pl-6 mb-12`}>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{category.name}</h1>
            <p className="text-lg text-slate-500 italic">{category.tagline}</p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl">{category.shortDescription}</p>

          {/* Purpose / Characteristics */}
          <div className="mb-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-lg p-5 border border-slate-200 bg-slate-50">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Purpose</p>
                <p className="text-sm text-slate-700 leading-relaxed">{category.purpose}</p>
              </div>
              <div className="rounded-lg p-5 border border-slate-200 bg-slate-50">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Characteristics</p>
                <p className="text-sm text-slate-700 leading-relaxed">{category.characteristics}</p>
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mb-8">
            <div className="rounded-lg p-5 border border-slate-200 bg-slate-50">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Examples</p>
              <div className="space-y-3">
                {category.examples.map((ex) => (
                  <div key={ex.name}>
                    <p className="text-sm font-semibold text-slate-900">{ex.name}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{ex.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg mb-8">
            <h3 className="text-sm font-semibold text-amber-900 mb-2">Important Note</h3>
            <p className="text-sm text-amber-800">
              The purpose of each tool category is not to encourage the use of all tools, but to provide groupings
              that can be safely applied with reduced risk based on your AI Maturity Level. Using complex tools at
              low maturity levels is ill-advised.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg mb-8">
            <h3 className="text-sm font-semibold text-blue-900 mb-4">Relationship to AI Maturity Levels</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {category.maturityRelationship.map((entry) => (
                <div
                  key={entry.level}
                  className="flex items-center justify-between rounded-lg border border-blue-100 bg-white px-4 py-2.5"
                >
                  <span className="text-sm font-medium text-slate-700">{entry.level}</span>
                  <span className="group relative inline-flex">
                    <Badge
                      variant="outline"
                      tabIndex={0}
                      className={`cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${maturityStatusClass[entry.status]}`}
                    >
                      {entry.status}
                    </Badge>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full right-0 z-50 mb-2 w-56 rounded border border-slate-200 bg-white px-3 py-2 text-xs leading-relaxed text-slate-600 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
                    >
                      {entry.reason}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Assess CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
            <Link
              href="/sima-probe/assessment"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
            >
              Measure your maturity with SIMA-Probe™ <ArrowRight className="w-3 h-3" />
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/maturity"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
            >
              See the AI Maturity Levels <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Prev / next */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-slate-200">
            {prev ? (
              <Link
                href={`/tool-categories/${prev.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/tool-categories/${next.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {next.name} <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <span />
            )}
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
