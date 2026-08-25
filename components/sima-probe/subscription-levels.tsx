'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle2, Brain, FileText } from 'lucide-react'
import { INSIGHT_TIERS_LIVE } from '@/lib/feature-flags'
import { INSIGHT_TIERS } from '@/lib/sima-probe/insight-tiers'

type SubscriptionTier = 'foundation' | 'insight' | 'insight-pro' | 'advisory' | 'consulting'

const insight = INSIGHT_TIERS.find((t) => t.id === 'insight')!
const insightPro = INSIGHT_TIERS.find((t) => t.id === 'insight-pro')!

// The Adaptive AI Evaluation Features below are only available from Advisory (Level 3)
// upward — this section is gated on the active tab so it only renders alongside the
// Advisory or Consulting tier card, not unconditionally regardless of tab selection.
export function SubscriptionLevels() {
  const [activeTab, setActiveTab] = useState<SubscriptionTier>('foundation')
  const showAiFeatures = activeTab === 'advisory' || activeTab === 'consulting'

  return (
    <>
      {/* Subscription Levels */}
      <section id="subscription-levels" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Subscription Levels</h2>
            <p className="text-lg text-slate-700 mb-12 text-center">
              Choose the level that matches your business's needs
            </p>

            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as SubscriptionTier)}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="foundation">Foundation</TabsTrigger>
                <TabsTrigger value="insight">Insight</TabsTrigger>
                <TabsTrigger value="insight-pro">Insight Pro</TabsTrigger>
                <TabsTrigger value="advisory">Advisory</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
              </TabsList>

              <TabsContent id="what-you-get" value="foundation" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 1 – Foundation</CardTitle>
                        <CardDescription className="text-lg mt-2">Free Access</CardDescription>
                      </div>
                      <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">FREE</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      The minimal viable product level, designed for small businesses, individuals exploring
                      SIMA-Probe capabilities, or those at the Initial or early Exploring stage.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>30 diagnostic questions — 6 per perspective, covering anchor and core capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>6-point operational response scale (not yes/no) — calibrated to actual practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Perspective orientation scores (0–5) with maturity level labels per perspective</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Enterprise score — the weakest-constraint principle: your lowest perspective score sets the operating level, not an average of all five</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Top 3 risk flags with severity ratings (Critical / High / Medium)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Top 3 next investigation priorities — ranked by weighted uplift potential</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Confidence band (±1.0) on all scores — honest about free-tier uncertainty</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>~15–20 minutes · No account required · Runs entirely in-browser</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Businesses conducting initial feasibility assessment, small teams (fewer than 50 people), or
                        those seeking a quick maturity snapshot.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="insight" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 2 – Insight</CardTitle>
                        <CardDescription className="text-lg mt-2">Basic Subscription</CardDescription>
                        <p className="text-sm font-semibold text-slate-500 mt-1">
                          ${insight.monthlyPrice}/month · {insight.executionsPerMonth} executions/month
                          {!INSIGHT_TIERS_LIVE && ' · Pending Release'}
                        </p>
                      </div>
                      {INSIGHT_TIERS_LIVE ? (
                        <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">PAID</Badge>
                      ) : (
                        <Badge className="bg-slate-100 text-slate-500 text-lg px-4 py-2">PENDING RELEASE</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      Designed for businesses actively engaging with AI at the Exploring or Applying stages,
                      typically small to medium-sized businesses using SIMA-Probe to guide AI readiness and
                      improvement planning.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>{insight.executionsPerMonth} executions per month</strong> — cap resets at the
                            start of each billing period
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>20-30 expanded questions per Perspective (100-150 questions total)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Detailed explanations with relevant examples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Percentage-based maturity distribution showing progression through Maturity Levels
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Radar chart visualizations displaying relative maturity across all five Perspectives
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>3-10 targeted guidance statements per Perspective</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Downloadable summary report (PDF)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Businesses piloting AI initiatives, mid-sized teams, or those needing detailed
                        cross-perspective visibility for strategic planning.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="insight-pro" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 2 – Insight Pro</CardTitle>
                        <CardDescription className="text-lg mt-2">Higher-Volume Subscription</CardDescription>
                        <p className="text-sm font-semibold text-slate-500 mt-1">
                          ${insightPro.monthlyPrice}/month · {insightPro.executionsPerMonth} executions/month
                          {!INSIGHT_TIERS_LIVE && ' · Pending Release'}
                        </p>
                      </div>
                      {INSIGHT_TIERS_LIVE ? (
                        <Badge className="bg-blue-100 text-blue-700 text-lg px-4 py-2">PAID</Badge>
                      ) : (
                        <Badge className="bg-slate-100 text-slate-500 text-lg px-4 py-2">PENDING RELEASE</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      The same Insight diagnostic as Level 2, sized for businesses running assessments more than
                      a few times a month — multiple business units, recurring re-assessment cadences, or evaluating
                      several teams in parallel.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>{insightPro.executionsPerMonth} executions per month</strong> — cap resets at
                            the start of each billing period
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>20-30 expanded questions per Perspective (100-150 questions total)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Detailed explanations with relevant examples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Percentage-based maturity distribution showing progression through Maturity Levels
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>
                            Radar chart visualizations displaying relative maturity across all five Perspectives
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>3-10 targeted guidance statements per Perspective</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Downloadable summary report (PDF)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Businesses assessing multiple business units, or running a recurring re-assessment
                        cadence that a 5-execution monthly cap wouldn't cover.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="advisory" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 3 – Advisory</CardTitle>
                        <CardDescription className="text-lg mt-2">Business Subscription</CardDescription>
                        <p className="text-sm font-semibold text-slate-500 mt-1">Pricing: Pending Announcement</p>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 text-lg px-4 py-2">PREMIUM</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      The comprehensive level for businesses at the Formalizing stage or higher, requiring full
                      visibility into AI implementation readiness and detailed, actionable guidance.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive 50+ questions per Perspective (250+ questions total)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Detailed explanations with industry-specific examples</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Full percentage-based maturity distribution across all Maturity Levels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Advanced radar charts with drill-down capabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Complete guidance set with customizable recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Access to complete SIMA-Kit™ resources (templates, rubrics, playbooks)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Training recommendations via SIMA-Ascend™ courses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Downloadable comprehensive report with executive summary</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Reassessment tracking and progress monitoring over time</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Enterprise deployments, businesses at Formalizing stage or higher, or those requiring
                        comprehensive governance documentation and training integration.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="consulting" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl">Level 3A – Consulting Extension</CardTitle>
                        <CardDescription className="text-lg mt-2">Enterprise Consulting</CardDescription>
                        <p className="text-sm font-semibold text-slate-500 mt-1">Pricing: Pending Announcement</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-4 py-2">
                        ENTERPRISE
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-700">
                      An enhancement to Level 3 that includes tailored consulting support, interview-based evaluation,
                      and customized business guidance.
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Features:</h4>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>All Level 3 features plus:</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Behavioral assessment combined with tailored consulting interview sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Consultant-facilitated capability assessment sessions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Comprehensive evaluation report with consultant analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Custom business reports and dashboards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Fully customized guidance and expansion recommendations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Implementation roadmap co-developed with consultants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>Quarterly check-ins and progress reviews</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Ideal For:</p>
                      <p className="text-slate-700">
                        Businesses requiring hands-on consulting support, complex multi-unit enterprises, or those
                        undertaking major AI transformation initiatives.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* AI Features — only shown alongside the Advisory/Consulting tier cards, since these
          capabilities are Available from Level 3 upward */}
      {showAiFeatures && (
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  Available from Level 3
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Adaptive AI Evaluation Features</h2>
                <p className="text-lg text-slate-700">
                  SIMA-Probe incorporates Adaptive AI capabilities to enhance both the accuracy and relevance of
                  evaluations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-t-4 border-t-blue-500">
                  <CardHeader>
                    <Brain className="w-12 h-12 mb-4 text-blue-600" />
                    <CardTitle className="text-xl">Contextual Tailoring</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      The AI dynamically adjusts question sets and examples based on business context such as
                      industry, size, and operational maturity.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>Industry-specific scenarios and examples</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>Calibrated technical language</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span>Progressive question sequencing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-purple-500">
                  <CardHeader>
                    <FileText className="w-12 h-12 mb-4 text-purple-600" />
                    <CardTitle className="text-xl">Automated Document Intelligence</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      AI analyzes uploaded business materials to pre-populate or validate answers, transforming the
                      evaluation into a hybrid evidence-based process.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        <span>Reduces assessment time by 40-60%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        <span>Grounds evaluation in documented evidence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        <span>Identifies policy vs. practice gaps</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
