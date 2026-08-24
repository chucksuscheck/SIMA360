import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PricingTabs } from "@/components/pricing-tabs"
import { PricingCard, type PricingCardData } from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "Learn Pricing — SIMA-Ascend™ | SIMA360™",
  description:
    "SIMA-Ascend training pricing — individual online courses, domain courses and learning paths, complete curriculum and instructor-led workshops, and enterprise training.",
  alternates: {
    canonical: "https://www.sima360.org/pricing/learn",
  },
}

const ascendPricing: PricingCardData[] = [
  {
    name: "Individual online course",
    price: "$99–199",
    period: null,
    audience: "For individuals starting their SIMA360 learning journey.",
    features: [
      "Self-paced online format",
      "Certified-trainer or asynchronous delivery",
      "Practical, real-world guidance",
      "Aligned to SIMA360 perspectives and maturity levels",
    ],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Individual%20Online%20Course",
    checkClass: "text-emerald-600",
    badge: null,
    featured: false,
  },
  {
    name: "Domain course / learning path",
    price: "$199–499",
    period: null,
    audience: "For practitioners and teams deepening expertise in one domain or building toward a maturity level.",
    features: [
      "Focused, single-domain curriculum or sequenced multi-course path",
      "Self-paced or instructor-led format",
      "Applied exercises and case studies",
      "Certificate of completion",
    ],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Domain%20Course%20or%20Learning%20Path",
    checkClass: "text-emerald-600",
    badge: null,
    featured: false,
  },
  {
    name: "Complete curriculum / instructor-led workshop",
    price: "$995–4,995",
    period: null,
    audience: "For teams pursuing full certification readiness, self-paced or with live expert delivery.",
    features: [
      "All five SIMA-Ascend courses, Preparing for AI Solutions through Business Support for AI Implementation",
      "Self-paced or delivered live by Approved Trainers",
      "Aligned to official SIMA360 methodology",
      "Full AI Solutions Agent certification readiness",
    ],
    ctaLabel: "Enroll",
    ctaHref: "mailto:info@sima360.org?subject=Enroll%20in%20Complete%20Curriculum%20or%20Workshop",
    checkClass: "text-emerald-600",
    badge: null,
    featured: true,
  },
  {
    name: "Enterprise training",
    price: "Included",
    period: null,
    audience: "For organizations already on a SIMA Enterprise plan.",
    features: [
      "Bundled with SIMA Enterprise",
      "Custom cohort scheduling",
      "Onsite or virtual delivery",
      "Certification pathway design for AI Solutions Agents, Orchestrators, and Strategists",
    ],
    ctaLabel: "Included with Enterprise",
    checkClass: "text-emerald-600",
    badge: { label: "ENTERPRISE", className: "bg-slate-900 text-white" },
    featured: false,
  },
]

export default function PricingLearnPage() {
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

      <PricingTabs active="learn" />

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-2">
              Learn with SIMA-Ascend™
            </p>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Build capability, not just knowledge</h1>
            <p className="text-lg text-slate-600">
              Structured training programs and certification pathways for practitioners and teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
            {ascendPricing.map((card) => (
              <PricingCard key={card.name} card={card} />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
