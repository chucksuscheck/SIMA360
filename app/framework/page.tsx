import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Framework — SIMA360™",
  description:
    "The five components of the SIMA360 framework — SIMA-Core, SIMA-Probe, SIMA-Flow, SIMA-Kit, and SIMA-Ascend — and how they work together to diagnose and build AI maturity.",
  alternates: {
    canonical: "https://www.sima360.org/framework",
  },
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Brain, BarChart3, Zap, Target, BookOpen } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { ModuleTabs } from "@/components/module-tabs"
import { ECOSYSTEM_COMPONENTS } from "@/lib/sima-ecosystem"

const moduleMeta: Record<string, { icon: typeof Brain; color: string }> = {
  "sima-core": { icon: Brain, color: "text-indigo-600" },
  "sima-probe": { icon: BarChart3, color: "text-blue-600" },
  "sima-flow": { icon: Zap, color: "text-green-600" },
  "sima-kit": { icon: Target, color: "text-orange-600" },
  "sima-ascend": { icon: BookOpen, color: "text-emerald-600" },
}

const modules = [
  ECOSYSTEM_COMPONENTS.find((c) => c.slug === "sima-core")!,
  ECOSYSTEM_COMPONENTS.find((c) => c.slug === "sima-probe")!,
  ECOSYSTEM_COMPONENTS.find((c) => c.slug === "sima-flow")!,
  ECOSYSTEM_COMPONENTS.find((c) => c.slug === "sima-kit")!,
  ECOSYSTEM_COMPONENTS.find((c) => c.slug === "sima-ascend")!,
]

export default function FrameworkPage() {
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

      <ModuleTabs active="overview" />

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            SIMA360 Framework
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            SIMA360 is five components working together — SIMA-Core, SIMA-Probe, SIMA-Flow, SIMA-Kit, and SIMA-Ascend. Each one plays a distinct role in diagnosing and building AI maturity.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Core defines the vocabulary. Probe measures where you stand. Flow structures how you advance. Kit supplies the resources. Ascend builds the people.
          </p>
        </div>
      </section>

      {/* Module cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod) => {
              const meta = moduleMeta[mod.slug]
              const Icon = meta.icon
              return (
                <Card key={mod.slug} className="hover:shadow-lg transition-shadow border-slate-200">
                  <CardHeader>
                    <Icon className={`w-8 h-8 ${meta.color} mb-2`} />
                    <CardTitle>{mod.name}</CardTitle>
                    <CardDescription>{mod.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={mod.href}
                      className={`text-sm font-medium inline-flex items-center gap-1 ${meta.color} hover:underline`}
                    >
                      Explore {mod.name} <ArrowRight className="w-3 h-3" />
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

      <SiteFooter />
    </div>
  )
}
