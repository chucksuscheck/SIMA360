import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ClipboardCheck, Download, Layers, Info, Search, TrendingUp, ArrowRight, ChevronDown, Users, Shield, Wrench, Building2, BarChart3, Brain, Target, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

const HOMEPAGE_DESCRIPTION =
  "AI risk doesn't always appear as a failure. Sometimes AI quietly drifts and amplifies its errors. SIMA360 assesses five critical areas — Strategy, Governance, Data, People, and Technology — to reveal where business maturity is limiting AI results, then turns that diagnosis into practical corrective action."

export const metadata: Metadata = {
  title: "SIMA360™ — Structured AI Maturity Accelerator",
  description: HOMEPAGE_DESCRIPTION,
  alternates: {
    canonical: "https://www.sima360.org",
  },
  openGraph: {
    title: "SIMA360™ — Structured AI Maturity Accelerator",
    description: HOMEPAGE_DESCRIPTION,
    url: "https://www.sima360.org",
    siteName: "SIMA360™",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SIMA360™ — Structured AI Maturity Accelerator",
    description: HOMEPAGE_DESCRIPTION,
  },
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SIMA360™",
  alternateName: "Structured AI Maturity Accelerator",
  url: "https://www.sima360.org",
  description: HOMEPAGE_DESCRIPTION,
}

const SYSTEM_PARTS = [
  {
    name: "SIMA-Probe™",
    role: "An Evaluation Tool",
    description: "A structured assessment that shows exactly where your business stands with AI today.",
    icon: BarChart3,
    color: "text-blue-600",
    bg: "bg-blue-100",
    href: "/sima-probe",
  },
  {
    name: "SIMA-Core™",
    role: "A Diagnostic Engine",
    description: "Analyzes your results and pinpoints where the real gaps are.",
    icon: Brain,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    href: "/sima-core",
  },
  {
    name: "SIMA-Kit™",
    role: "A Set of Supporting Resources",
    description: "Templates, guides, and tools to put the plan into action.",
    icon: Target,
    color: "text-purple-600",
    bg: "bg-purple-100",
    href: "/sima-kit",
  },
  {
    name: "SIMA-Flow™",
    role: "A Structured Improvement Process",
    description: "A repeatable cycle that moves you from diagnosis to progress.",
    icon: Zap,
    color: "text-green-600",
    bg: "bg-green-100",
    href: "/sima-flow",
  },
  {
    name: "SIMA-Ascend™",
    role: "Training & Consulting",
    description: "Human expertise that accelerates every other part of the system.",
    icon: BookOpen,
    color: "text-orange-600",
    bg: "bg-orange-100",
    href: "/sima-ascend",
  },
]

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Assess",
    description: "A free, basic 15-minute assessment across five business areas.",
  },
  {
    icon: Search,
    title: "Diagnose",
    description: "See exactly where AI risk is concentrated — and why.",
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Follow a structured path to close the gaps that matter most.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold" style={{ color: "#0f172a" }}>SIMA360™</h1>
                <p className="text-sm" style={{ color: "#475569" }}>Structured AI Maturity Accelerator</p>
              </div>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* 1. Hero — small product eyebrow, hook headline, argument copy */}
      <section className="pt-12 pb-6 px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#64748b" }}>
            SIMA360™ — Structured AI Maturity Accelerator
          </p>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3b82f6" }}>
            The Problem
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight" style={{ color: "#0f172a" }}>
            AI rarely fails with a bang — it drifts. Small errors go unnoticed, then get repeated and scaled
            across your business.
          </h1>
          <p className="text-lg leading-snug" style={{ color: "#475569" }}>
            SIMA360 finds the gaps in your AI readiness before that drift takes hold, and gives you a clear
            path to build a foundation for reliable AI.
          </p>
          <p className="text-sm mt-4" style={{ color: "#64748b" }}>
            Built for small and mid-size businesses early in their AI adoption journey.
          </p>
        </div>
      </section>

      {/* 2. Who It's For — placed right under the hero so visitors self-identify early */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3b82f6" }}>Who This Helps</h2>
            <p className="text-lg max-w-2xl mx-auto mt-3" style={{ color: "#475569" }}>
              If any of these sound like you, your team, or your business, SIMA360 was built for you —
              especially small and mid-size businesses early in AI adoption.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#0f172a" }}>Leaders</h3>
              <p className="text-sm" style={{ color: "#475569" }}>
                Need to move from AI experimentation to business capability
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#0f172a" }}>Governance &amp; Compliance Teams</h3>
              <p className="text-sm" style={{ color: "#475569" }}>
                Navigating AI risk without adequate structure
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#0f172a" }}>Practitioners</h3>
              <p className="text-sm" style={{ color: "#475569" }}>
                Tasked with building repeatable AI capability, not just running projects
              </p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#0f172a" }}>AI Adopters</h3>
              <p className="text-sm" style={{ color: "#475569" }}>
                Have deployed AI but aren't producing reliable outcomes from it
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 One System, Five Parts — placed directly below Who It's For */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3b82f6" }}>What It Is: One System, Five Parts</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#475569" }}>
              SIMA360 isn&rsquo;t one tool — it&rsquo;s a complete system for building AI maturity. You don&rsquo;t
              need to use all of it — start with the free evaluation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SYSTEM_PARTS.map((part) => (
              <Link
                key={part.name}
                href={part.href}
                className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 ${part.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <part.icon className={`w-6 h-6 ${part.color}`} />
                </div>
                <h3 className="font-semibold mb-1 leading-snug" style={{ color: "#0f172a" }}>{part.role}</h3>
                <p className={`text-xs font-bold uppercase tracking-wide mb-2 ${part.color}`}>{part.name}</p>
                <p className="text-sm leading-snug" style={{ color: "#475569" }}>{part.description}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-base mt-10 max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Together, they turn scattered AI use into a managed, improving system.
          </p>
        </div>
      </section>

      {/* 3. Three-step visual — Assess → Diagnose → Improve */}
      <section className="pt-4 pb-14 px-4">
        <div className="container mx-auto max-w-6xl text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3b82f6" }}>
            What You Get
          </p>
          <p
            className="text-lg sm:text-xl font-semibold max-w-2xl mx-auto mb-6 leading-snug"
            style={{ color: "#0f172a" }}
          >
            It assesses five critical areas of your business maturity to reveal where AI may be putting
            you at risk. Then it turns that diagnosis into practical corrective action.
          </p>
          <div className="space-y-2 text-base leading-snug mb-6" style={{ color: "#475569" }}>
            <p>
              Don&rsquo;t just ask what your AI can do. Ask whether your business is ready for what it can do.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#3b82f6" }}>
            How Much Does It Cost?
          </p>
          <Button
            size="lg"
            asChild
            className="mb-10 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <Link href="/sima-probe/assessment">Start the free basic assessment. In 15 minutes, see where you stand.</Link>
          </Button>
        </div>
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <div
                  className="flex-1 sm:flex-none w-full sm:w-48 rounded-lg border-2 bg-white shadow-md p-6 text-center"
                  style={{ borderColor: "#bfdbfe" }}
                >
                  <step.icon className="w-8 h-8 mx-auto mb-3" style={{ color: "#3b82f6" }} />
                  <h3 className="text-base font-bold mb-2" style={{ color: "#0f172a" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-snug" style={{ color: "#475569" }}>
                    {step.description}
                  </p>
                </div>
                {i < STEPS.length - 1 && (
                  <>
                    <ChevronDown className="w-6 h-6 sm:hidden flex-shrink-0" style={{ color: "#93c5fd" }} />
                    <ArrowRight className="hidden sm:block w-6 h-6 flex-shrink-0" style={{ color: "#93c5fd" }} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Built for lean teams — no army of consultants required */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0f172a" }}>
            Built for Growing Businesses, Not Consulting Engagements
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
            SIMA360 is designed for small and mid-size businesses who are early in AI adoption and don&rsquo;t
            have a dedicated AI team. It gives you the structure to mature your AI
            capability yourselves. Help is available if you want it, but you don&rsquo;t need an army of
            consultants to use SIMA360.
          </p>
        </div>
      </section>

      {/* 4. Learn More — low-key outbound links, no re-explanation of the framework */}
      <section className="py-10 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#3b82f6" }}>
            Learn More
          </h2>
          <div className="grid sm:grid-cols-5 gap-4">
            <Link
              href="/overview"
              className="flex flex-col items-center gap-2 rounded-lg border bg-white p-4 hover:shadow-lg transition-shadow"
              style={{ borderColor: "#e2e8f0" }}
            >
              <Layers className="w-6 h-6" style={{ color: "#6366f1" }} />
              <span className="text-sm font-medium" style={{ color: "#0f172a" }}>Explore the Framework</span>
            </Link>
            <Link
              href="/the-book"
              className="flex flex-col items-center gap-2 rounded-lg border bg-white p-4 hover:shadow-lg transition-shadow"
              style={{ borderColor: "#e2e8f0" }}
            >
              <BookOpen className="w-6 h-6" style={{ color: "#ea580c" }} />
              <span className="text-sm font-medium" style={{ color: "#0f172a" }}>The Book</span>
            </Link>
            <a
              href="/SIMA360_Guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-lg border bg-white p-4 hover:shadow-lg transition-shadow"
              style={{ borderColor: "#e2e8f0" }}
            >
              <Download className="w-6 h-6" style={{ color: "#16a34a" }} />
              <span className="text-sm font-medium" style={{ color: "#0f172a" }}>Download Guide</span>
            </a>
            <Link
              href="/foundation"
              className="flex flex-col items-center gap-2 rounded-lg border bg-white p-4 hover:shadow-lg transition-shadow"
              style={{ borderColor: "#e2e8f0" }}
            >
              <Info className="w-6 h-6" style={{ color: "#3b82f6" }} />
              <span className="text-sm font-medium" style={{ color: "#0f172a" }}>About</span>
            </Link>
            <Link
              href="/sima-probe#subscription-levels"
              className="flex flex-col items-center gap-2 rounded-lg border bg-white p-4 hover:shadow-lg transition-shadow"
              style={{ borderColor: "#e2e8f0" }}
            >
              <ClipboardCheck className="w-6 h-6" style={{ color: "#d946ef" }} />
              <span className="text-sm font-medium" style={{ color: "#0f172a" }}>Assessment</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
