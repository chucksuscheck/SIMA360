import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Target, Shield, Database, Users, Cog } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { maturityLevels } from "@/lib/maturity-levels"
import { MaturityTabs, type MaturityLevelKey } from "@/components/maturity-tabs"
import { toolCategories, type MaturityStatus } from "@/lib/tool-categories"

const perspectiveMeta = [
  { name: "Strategy", icon: Target, href: "/sima-core/strategy", color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Governance", icon: Shield, href: "/sima-core/governance", color: "text-indigo-600", bg: "bg-indigo-50" },
  { name: "Data", icon: Database, href: "/sima-core/data", color: "text-cyan-600", bg: "bg-cyan-50" },
  { name: "People", icon: Users, href: "/sima-core/people", color: "text-sky-600", bg: "bg-sky-50" },
  { name: "Technology", icon: Cog, href: "/sima-core/technology", color: "text-slate-600", bg: "bg-slate-50" },
]

// Same neutral three-tier scheme used for Safe/Risky/Avoid on the
// /tool-categories/* pages, kept in sync so both cross-referenced views
// (by category, by level) look consistent.
const maturityStatusClass: Record<MaturityStatus, string> = {
  Safe: "bg-slate-900 text-white border-transparent",
  Risky: "bg-white text-slate-700 border-slate-400",
  Avoid: "bg-slate-100 text-slate-400 border-slate-200",
}

export function MaturityLevelPage({ slug }: { slug: string }) {
  const i = maturityLevels.findIndex((lvl) => lvl.slug === slug)
  const lvl = maturityLevels[i]
  const prev = maturityLevels[i - 1]
  const next = maturityLevels[i + 1]

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

      <MaturityTabs active={slug as MaturityLevelKey} />

      {/* Level header + overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className={`border-l-4 ${lvl.borderClass} pl-6 mb-12`}>
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="outline" className={lvl.badgeClass}>
                Level {lvl.number}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{lvl.name}</h1>
            <p className="text-lg text-slate-500 italic">{lvl.tagline}</p>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl">{lvl.overview}</p>

          {/* Perspective breakdown */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Across the Five Perspectives at Level {lvl.number}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {perspectiveMeta.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.name} className={`rounded-lg p-5 border border-slate-200 ${d.bg}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className={`w-4 h-4 ${d.color}`} />
                      <Link href={d.href} className={`text-sm font-semibold ${d.color} hover:underline`}>
                        {d.name}
                      </Link>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {lvl.perspectives[d.name as keyof typeof lvl.perspectives]}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tool Categories at This Level */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">Tool Categories at This Level</h2>
            <div className="grid sm:grid-cols-2 gap-2 max-w-3xl">
              {toolCategories.map((cat) => {
                const status = cat.maturityRelationship.find((r) => r.level === lvl.name)!.status
                return (
                  <div
                    key={cat.slug}
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5"
                  >
                    <Link
                      href={`/tool-categories/${cat.slug}`}
                      className="text-sm font-medium text-slate-700 hover:underline"
                    >
                      {cat.name}
                    </Link>
                    <Badge variant="outline" className={maturityStatusClass[status]}>
                      {status}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Moving Forward */}
          {next && (
            <div className="mb-8 max-w-3xl rounded-lg p-5 border border-dashed border-slate-300 bg-slate-50">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Moving Forward</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Advancing from Level {lvl.number} to Level {next.number} requires closing gaps across all five
                perspectives, not just the most visible ones. SIMA-Probe identifies where you stand; SIMA-Flow
                structures how you advance.
              </p>
              <Link
                href={`/maturity/${next.slug}`}
                className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
              >
                See Level {next.number}: {next.name} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )}

          {/* Assess CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200">
            <Link
              href="/sima-probe/assessment"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
            >
              Measure your level with SIMA-Probe™ <ArrowRight className="w-3 h-3" />
            </Link>
            {next && (
              <>
                <span className="text-slate-300">|</span>
                <Link
                  href="/sima-flow"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
                >
                  Plan your advancement with SIMA-Flow™ <ArrowRight className="w-3 h-3" />
                </Link>
              </>
            )}
          </div>

          {/* Prev / next */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-slate-200">
            {prev ? (
              <Link
                href={`/maturity/${prev.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Level {prev.number}: {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/maturity/${next.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Level {next.number}: {next.name} <ArrowRight className="w-4 h-4" />
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
            SIMA-Probe measures your current maturity level across all five perspectives and tells you exactly what to
            address next.
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

      <SiteFooter />
    </div>
  )
}
