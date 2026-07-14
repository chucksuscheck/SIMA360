import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"
import { CheckCircle2 } from "lucide-react"
import { INSIGHT_TIERS_LIVE } from "@/lib/feature-flags"
import { INSIGHT_TIERS } from "@/lib/sima-probe/insight-tiers"

export const metadata: Metadata = {
  title: "Pricing | SIMA360™",
  description:
    "Ways to work with SIMA360 — Foundation is free and self-serve; Insight and Insight Pro are subscription tiers with monthly execution caps; Advisory and Consulting are human-delivered engagements with a certified SIMA360 practitioner.",
  alternates: {
    canonical: "https://www.sima360.org/pricing",
  },
}

const insight = INSIGHT_TIERS.find((t) => t.id === "insight")!
const insightPro = INSIGHT_TIERS.find((t) => t.id === "insight-pro")!

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
              <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-slate-900">Pricing</h1>
            <p className="text-lg text-slate-600">
              Foundation is free and self-serve. Insight and Insight Pro are monthly subscriptions with a
              per-billing-period execution cap. Advisory and Consulting are delivered directly by a certified
              SIMA360 practitioner. Every tier builds on the same instrument: SIMA-Probe's five Perspectives and six
              Maturity Levels.
            </p>
          </div>
        </div>
      </section>

      {/* Tier comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-stretch">
            {/* Foundation */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Foundation</CardTitle>
                    <CardDescription className="mt-1">Free Access</CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700">FREE</Badge>
                </div>
                <p className="text-3xl font-bold text-slate-900 mt-4">Free</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-4">
                <p className="text-slate-700 text-sm">
                  The minimal viable product level, designed for small organizations, individuals exploring
                  SIMA-Probe capabilities, or those at the Initial or early Exploring stage.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Features:</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>30 diagnostic questions — 6 per perspective, covering anchor and core capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>6-point operational response scale (not yes/no) — calibrated to actual practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Perspective orientation scores (0–5) with maturity level labels per perspective</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Enterprise score — the weakest-constraint principle: your lowest perspective score sets the
                        operating level, not an average of all five
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Top 3 risk flags with severity ratings (Critical / High / Medium)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Top 3 next investigation priorities — ranked by weighted uplift potential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Confidence band (±1.0) on all scores — honest about free-tier uncertainty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>~15–20 minutes · No account required · Runs entirely in-browser</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-900 mb-1">Ideal For:</p>
                  <p className="text-slate-700 text-sm">
                    Organizations conducting initial feasibility assessment, small teams (fewer than 50 people), or
                    those seeking a quick maturity snapshot.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Button className="w-full" asChild>
                    <Link href="/sima-probe/assessment">Start</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Insight */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Insight</CardTitle>
                    <CardDescription className="mt-1">Self-Serve, Paid</CardDescription>
                  </div>
                  {INSIGHT_TIERS_LIVE ? (
                    <Badge className="bg-blue-100 text-blue-700">PAID</Badge>
                  ) : (
                    <Badge className="bg-slate-100 text-slate-500">PENDING RELEASE</Badge>
                  )}
                </div>
                <p className="text-3xl font-bold text-slate-900 mt-4">
                  ${insight.monthlyPrice} <span className="text-sm font-normal text-slate-500">/month</span>
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-4">
                <p className="text-slate-700 text-sm">
                  The deeper diagnostic for organizations ready to move past a snapshot and into evidence. Built
                  entirely from capabilities already described on /sima-probe (Contextual Tailoring, Automated
                  Document Intelligence) but not yet assigned to a tier — no new capability needs to be built to ship
                  this.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Features:</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>{insight.executionsPerMonth} executions per month</strong> — cap resets at the start
                        of each billing period
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        60 diagnostic questions — 12 per perspective, extending Foundation's structure with
                        intermediate and edge-case behavioral scenarios
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Contextual Tailoring — questions and examples calibrated to industry, size, and stated maturity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Automated Document Intelligence — upload policies, training records, or governance documents;
                        cross-checked against stated answers to flag policy-vs-practice gaps
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Perspective scores (0–5) with tightened confidence bands (±0.5 vs. Foundation's ±1.0)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Top 5 risk flags with severity rating and a root-cause hypothesis per flag</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Full weakest-constraint analysis with a suggested FLAI Frame statement for the constraining
                        perspective
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>~35–45 minutes per execution · no account required · runs entirely in-browser</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-900 mb-1">Ideal For:</p>
                  <p className="text-slate-700 text-sm">
                    Organizations that have outgrown a quick snapshot and want evidence before deciding whether to
                    bring in a practitioner.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  {INSIGHT_TIERS_LIVE ? (
                    <Button className="w-full" asChild>
                      <a href="mailto:info@sima360.org?subject=Subscribe%20to%20Insight">Subscribe</a>
                    </Button>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      Pending Release
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Insight Pro */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Insight Pro</CardTitle>
                    <CardDescription className="mt-1">Self-Serve, Paid</CardDescription>
                  </div>
                  {INSIGHT_TIERS_LIVE ? (
                    <Badge className="bg-blue-100 text-blue-700">PAID</Badge>
                  ) : (
                    <Badge className="bg-slate-100 text-slate-500">PENDING RELEASE</Badge>
                  )}
                </div>
                <p className="text-3xl font-bold text-slate-900 mt-4">
                  ${insightPro.monthlyPrice} <span className="text-sm font-normal text-slate-500">/month</span>
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-4">
                <p className="text-slate-700 text-sm">
                  The same Insight diagnostic, sized for organizations running assessments more than a few times a
                  month — multiple business units, recurring re-assessment cadences, or evaluating several teams in
                  parallel.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Features:</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>{insightPro.executionsPerMonth} executions per month</strong> — cap resets at the
                        start of each billing period
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        60 diagnostic questions — 12 per perspective, extending Foundation's structure with
                        intermediate and edge-case behavioral scenarios
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Contextual Tailoring — questions and examples calibrated to industry, size, and stated maturity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Automated Document Intelligence — upload policies, training records, or governance documents;
                        cross-checked against stated answers to flag policy-vs-practice gaps
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Perspective scores (0–5) with tightened confidence bands (±0.5 vs. Foundation's ±1.0)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Top 5 risk flags with severity rating and a root-cause hypothesis per flag</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Full weakest-constraint analysis with a suggested FLAI Frame statement for the constraining
                        perspective
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>~35–45 minutes per execution · no account required · runs entirely in-browser</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-900 mb-1">Ideal For:</p>
                  <p className="text-slate-700 text-sm">
                    Organizations assessing multiple business units, or running a recurring re-assessment cadence
                    that a 5-execution monthly cap wouldn't cover.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  {INSIGHT_TIERS_LIVE ? (
                    <Button className="w-full" asChild>
                      <a href="mailto:info@sima360.org?subject=Subscribe%20to%20Insight%20Pro">Subscribe</a>
                    </Button>
                  ) : (
                    <Button className="w-full" variant="outline" disabled>
                      Pending Release
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Advisory */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Advisory</CardTitle>
                    <CardDescription className="mt-1">Single Engagement</CardDescription>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700">ADVISORY</Badge>
                </div>
                <p className="text-3xl font-bold text-slate-900 mt-4">
                  $9,500 <span className="text-sm font-normal text-slate-500">flat</span>
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-4">
                <p className="text-slate-700 text-sm">
                  A certified SIMA360 practitioner reviews all five perspectives with your team directly — not just
                  the constraint, the full system.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Includes:</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Pre-work: practitioner reviews your Insight results, or runs a fresh diagnostic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Two live sessions (~90 min each) covering all five perspectives — a perspective just above
                        today's constraint can become the constraint after the first improvement cycle, so it's
                        reviewed now, not later
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Written maturity report: findings per perspective, current constraint, and the perspective
                        most likely to constrain next
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>A scoped first FLAI cycle — Frame statement, suggested intervention, and the control to assess it against</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Direct mapping to SIMA-Kit resources for the client's maturity level and industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Delivered by Dr. Suscheck or a certified SIMA-Ascend practitioner</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-900 mb-1">Ideal For:</p>
                  <p className="text-slate-700 text-sm">
                    Leadership teams that need a structured second opinion before committing budget to an AI
                    initiative.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Button className="w-full" asChild>
                    <a href="mailto:info@sima360.org?subject=Book%20Advisory">Book Advisory</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Consulting */}
            <Card className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">Consulting</CardTitle>
                    <CardDescription className="mt-1">Ongoing Engagement</CardDescription>
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">CONSULTING</Badge>
                </div>
                <p className="text-3xl font-bold text-slate-900 mt-4">Starting at $20,000</p>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 space-y-4">
                <p className="text-slate-700 text-sm">
                  Embedded facilitation of the Core Cycle and successive FLAI cycles for organizations building AI
                  maturity as a sustained discipline, not a one-time fix.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Includes:</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Everything in Advisory, plus ongoing practitioner involvement across multiple FLAI cycles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Practitioner-facilitated cycles run alongside the client team — not handed off after a report</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>
                        Re-assessment cadence (quarterly or engagement-defined) via SIMA-Probe to track actual
                        movement between Maturity Levels
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Optional coordination with SIMA-Ascend to build certified capability internally in parallel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Scope and cadence set per engagement — number of perspectives actively worked determines retainer size</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="text-xs font-semibold text-slate-900 mb-1">Ideal For:</p>
                  <p className="text-slate-700 text-sm">
                    Mid-size-and-larger organizations running multiple concurrent AI initiatives who want the
                    framework actively operated with them, not delivered once.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Button className="w-full" variant="outline" asChild>
                    <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
