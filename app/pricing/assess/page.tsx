import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PricingTabs } from "@/components/pricing-tabs"
import { PricingCard } from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "Assess Pricing — SIMA-Probe™ | SIMA360™",
  description:
    "SIMA-Probe pricing — start free with a basic assessment, then scale into adaptive assessments, AI-generated interpretation, and business-wide plans.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/assess",
  },
}

const pricingCards = [
  {
    name: "SIMA-Probe Free",
    price: "Free",
    period: null as string | null,
    audience: "Anyone interested in understanding AI operational maturity.",
    features: [
      "Basic assessment",
      "30 questions",
      "Overall capability score",
      "Five-domain radar chart",
      "Basic recommendations",
      "Downloadable summary report",
    ],
    ctaLabel: "Start your assessment",
    ctaHref: "/sima-probe/assessment",
    checkClass: "text-green-600",
    badge: { label: "FREE", className: "bg-green-100 text-green-700" },
    featured: false,
  },
  {
    name: "Probe Professional",
    price: "$99",
    period: "one-time" as string | null,
    audience: "For teams ready for a detailed, adaptive read on maturity.",
    features: [
      "Adaptive assessment",
      "Approximately 60 questions",
      "AI-generated interpretation",
      "Detailed maturity report",
      "Improvement recommendations",
      "Three months of assessment history",
      "One SIMA-Kit resource of your choice",
    ],
    ctaLabel: "Upgrade to Professional",
    ctaHref: "mailto:info@sima360.org?subject=Upgrade%20to%20Probe%20Professional",
    checkClass: "text-blue-600",
    badge: null,
    featured: false,
  },
  {
    name: "Probe Professional Plus",
    price: "$249",
    period: "one-time" as string | null,
    audience: "Moves you from assessment straight into implementation.",
    features: [
      "Everything in Professional",
      "Five SIMA-Kit resources",
      "Expanded AI recommendations",
      "Domain improvement roadmap",
    ],
    ctaLabel: "Get Professional Plus",
    ctaHref: "mailto:info@sima360.org?subject=Get%20Probe%20Professional%20Plus",
    checkClass: "text-blue-600",
    badge: null,
    featured: true,
  },
  {
    name: "SIMA Business",
    price: "$599",
    period: "/year" as string | null,
    audience: "Designed for departments and small to mid-size businesses.",
    features: [
      "Multiple users",
      "Unlimited reassessments",
      "Historical trends",
      "AI recommendations",
      "Business dashboard",
      "Ten SIMA-Kit downloads each year",
    ],
    ctaLabel: "Start business plan",
    ctaHref: "mailto:info@sima360.org?subject=Start%20SIMA%20Business%20Plan",
    checkClass: "text-indigo-600",
    badge: null,
    featured: false,
  },
  {
    name: "SIMA Enterprise",
    price: "Custom",
    period: null as string | null,
    audience: "For enterprise-wide rollout, governance, and transformation.",
    features: [
      "Unlimited users",
      "Enterprise dashboards",
      "Benchmarking",
      "Custom reporting",
      "API integration",
      "Full SIMA-Kit resource library included",
      "SIMA-Flow enterprise engagements included",
      "SIMA-Ascend enterprise training included",
      "Training discounts",
      "Consulting",
      "Licensing options",
      "White-labeled reports",
    ],
    ctaLabel: "Talk to sales",
    ctaHref: "mailto:info@sima360.org?subject=Schedule%20a%20Conversation",
    checkClass: "text-slate-600",
    badge: { label: "ENTERPRISE", className: "bg-slate-900 text-white" },
    featured: false,
  },
]

export default function PricingAssessPage() {
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

      <PricingTabs active="assess" />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-2">Assess with SIMA-Probe™</p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Start free. Scale as you grow.</h1>
            <p className="text-lg text-slate-600">
              SIMA-Probe is the entry point — not the destination. Every tier is built to carry you into
              implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
            {pricingCards.map((card) => (
              <PricingCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
