import type { Metadata } from "next"
import fs from "node:fs"
import path from "node:path"
import Link from "next/link"
import { BookOpen, ClipboardCheck, Download, Layers, Info } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

const HOMEPAGE_DESCRIPTION =
  "AI risk doesn't always announce itself as failure. Sometimes it emerges quietly as drift — and AI gives that drift the ability to scale. SIMA360 assesses five critical areas — Strategy, Governance, Data, People, and Technology — to reveal where organizational maturity is limiting AI results, then turns that diagnosis into practical corrective action."

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

// The source SVG links to absolute https://www.sima360.org/... URLs (correct for
// production, but they'd bounce a local/staging session off to the live site).
// Rewritten to relative paths here to match how every other internal link on
// this site is written — swap this out if the SVG is regenerated with different hrefs.
function loadDiagramSvg(): string {
  const filePath = path.join(process.cwd(), "public", "sima360-diagram.svg")
  const raw = fs.readFileSync(filePath, "utf8")
  return raw.replace(/https:\/\/www\.sima360\.org/g, "")
}

export default function HomePage() {
  const diagramSvg = loadDiagramSvg()

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
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight" style={{ color: "#0f172a" }}>
            AI risk doesn&rsquo;t always announce itself as failure. Sometimes it emerges quietly as drift — and
            AI gives that drift the ability to scale.
          </h1>
          <p className="text-lg leading-snug" style={{ color: "#475569" }}>
            SIMA360 helps you find organizational weaknesses before AI magnifies them — and build the
            organizational foundation for reliable AI.
          </p>
        </div>
      </section>

      {/* 3. Diagram — the visual centerpiece: bigger, elevated, colorfully framed */}
      <section className="pt-4 pb-14 px-4">
        <div className="container mx-auto max-w-6xl text-center mb-6">
          <p
            className="text-lg sm:text-xl font-semibold max-w-2xl mx-auto mb-6 leading-snug"
            style={{ color: "#0f172a" }}
          >
            It assesses five critical areas of your organizational maturity to reveal where AI may be putting
            you at risk. Then it turns that diagnosis into practical corrective action.
          </p>
          <div className="space-y-2 text-base leading-snug mb-6" style={{ color: "#475569" }}>
            <p>
              Don&rsquo;t just ask what your AI can do. Ask whether your organization is ready for what it can do.
            </p>
          </div>
          <Button
            size="lg"
            asChild
            className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            <Link href="/sima-probe/assessment">Take the sample assessment in 15 minutes and see where you stand</Link>
          </Button>
          <p className="text-sm font-semibold tracking-wide" style={{ color: "#64748b" }}>
            SIMA360. Assess. Diagnose. Improve.
          </p>
        </div>
        <div
          className="container mx-auto max-w-6xl rounded-lg border-2 bg-white shadow-xl p-6 sm:p-8"
          style={{ borderColor: "#bfdbfe" }}
        >
          <div
            className="[&_svg]:w-full [&_svg]:h-auto"
            dangerouslySetInnerHTML={{ __html: diagramSvg }}
          />
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

      <SiteFooter />
    </div>
  )
}
