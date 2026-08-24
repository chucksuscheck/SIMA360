'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { EnterpriseScoreCard } from '@/components/sima-probe/enterprise-score-card'
import { PerspectiveScoreCard } from '@/components/sima-probe/perspective-score-card'
import { RiskFlagCard } from '@/components/sima-probe/risk-flag-card'
import { NextStepsCard } from '@/components/sima-probe/next-steps-card'
import { ConstraintUpsellCard } from '@/components/sima-probe/constraint-upsell-card'
import { InfoTooltip } from '@/components/ui/info-tooltip'
import type { AssessmentSession, ScoringResult } from '@/lib/sima-probe/types'
import { scoreAssessment, getConstrainingPerspective } from '@/lib/sima-probe/scoring'
import { PERSPECTIVE_ORDER } from '@/lib/sima-probe/questions'

// Every completed assessment today runs the Foundation-tier 30-question set — there is no
// separate Insight-tier assessment yet — so the upsell always promotes the tier one above
// Foundation. Once an Insight-tier assessment exists, key this off the session's actual tier.
const NEXT_TIER = 'insight' as const

const SESSION_KEY = 'sima-probe-session'

function loadSession(): AssessmentSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AssessmentSession
  } catch {
    return null
  }
}

export default function ResultsPage() {
  const router = useRouter()
  const [result, setResult] = useState<ScoringResult | null>(null)
  const [completedAt, setCompletedAt] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const session = loadSession()
    if (!session || !session.completedAt) {
      router.replace('/sima-probe/assessment')
      return
    }
    setCompletedAt(session.completedAt)
    setResult(scoreAssessment(session.answers))
    setIsReady(true)
  }, [router])

  const handleRetake = () => {
    try { localStorage.removeItem(SESSION_KEY) } catch {}
    router.push('/sima-probe/assessment')
  }

  if (!isReady || !result) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-400 text-sm">Loading results…</p>
      </div>
    )
  }

  const formattedDate = completedAt
    ? new Date(completedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Site header */}
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold text-slate-900">SIMA360™</span>
              <span className="text-xs text-slate-500">Structured AI Maturity Accelerator</span>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Breadcrumb / back */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/sima-probe"
            className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            SIMA-Probe™
          </Link>
          <div className="flex items-center gap-3">
            {formattedDate && (
              <span className="text-xs text-slate-400">Assessed {formattedDate}</span>
            )}
            <button
              onClick={handleRetake}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors border border-slate-200 rounded px-3 py-1.5 bg-white hover:bg-slate-50"
            >
              <RotateCcw className="w-3 h-3" />
              Retake
            </button>
          </div>
        </div>

        {/* Page title */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
            Diagnostic Results · Free Tier
          </p>
          <h1 className="text-3xl font-bold text-slate-900">AI Operational Maturity Assessment</h1>
          <p className="text-slate-500 mt-2 text-sm max-w-2xl">
            Based on your 30 answers across five areas — Governance, Strategy, Data, People, and
            Technology — here's a directional read on how consistently your organization can rely
            on AI-supported decisions today. This is a quick, free-tier check: treat the numbers
            below as a starting point for where to look closer, not a precise measurement.
          </p>
        </div>

        {/* Enterprise score */}
        <section className="mb-6">
          <EnterpriseScoreCard
            score={result.enterpriseScore}
            maturityLevel={result.enterpriseMaturityLevel}
            confidenceLow={result.enterpriseConfidenceLow}
            confidenceHigh={result.enterpriseConfidenceHigh}
          />
        </section>

        {/* Contextual upsell — generated from this result's actual constraint */}
        <section className="mb-10">
          <ConstraintUpsellCard
            perspective={getConstrainingPerspective(result)}
            maturityLevel={result.enterpriseMaturityLevel}
            nextTier={NEXT_TIER}
          />
        </section>

        {/* Perspective scores */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
            Perspective Scores
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERSPECTIVE_ORDER.map(perspective => (
              <PerspectiveScoreCard key={perspective} result={result.perspectives[perspective]} />
            ))}
          </div>
        </section>

        {/* Risk flags */}
        {result.topRiskFlags.length > 0 && (
          <section className="mb-10">
            <div className="flex items-baseline gap-3 mb-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                Top Risk Flags
              </h2>
              <span className="text-xs text-slate-400">
                {result.topRiskFlags.length} of {result.topRiskFlags.length} shown
              </span>
            </div>
            <div className="space-y-3">
              {result.topRiskFlags.map((flag, i) => (
                <RiskFlagCard key={flag.id} flag={flag} rank={i + 1} />
              ))}
            </div>
          </section>
        )}

        {/* Next priorities */}
        {result.nextPriorities.length > 0 && (
          <section className="mb-10">
            <NextStepsCard priorities={result.nextPriorities} />
          </section>
        )}

        {/* Upgrade / learn more */}
        <section className="mb-12 rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">Want deeper analysis?</p>
              <p className="text-xs text-slate-500 mt-0.5">
                The Insight tier adds 100+ questions, a breakdown of every practice we checked, and a
                downloadable PDF report. The Advisory tier includes full access to our step-by-step
                improvement guidance
                <InfoTooltip text="Branded on this site as “SIMA-Kit™” — level-specific, practical guidance for closing the gaps this assessment found." className="mx-0.5 -translate-y-px" />
                and training recommendations.
              </p>
            </div>
            <Link
              href="/sima-probe#subscription-levels"
              className="flex-shrink-0 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded hover:bg-slate-800 transition-colors text-center"
            >
              View Subscription Tiers
            </Link>
          </div>
        </section>

        {/* Scoring methodology note */}
        <section className="mb-10 text-xs text-slate-400 border-t border-slate-100 pt-6 space-y-2">
          <p className="font-semibold text-slate-500">How these scores are calculated</p>
          <p>
            Each perspective's score is built from several specific, testable practices we asked
            about
            <InfoTooltip text="We call each one a 'capability' elsewhere on this page — e.g. 'named decision owners' under Governance. A perspective score is built from several of these." />
            , not weighted equally — some practices matter more to that perspective than others.
            A handful of those practices are foundational
            <InfoTooltip text="We call these 'anchor' capabilities elsewhere on this page — the darkest bars in each perspective card." />
            : if one hasn't been established yet, the whole perspective is capped at "Applying"
            regardless of how well everything else scored, since claiming advanced practices
            without the basics in place isn't credible. The same cap applies if we didn't get
            enough answers in a perspective to be confident about it.
          </p>
          <p>
            Your overall score is <em>not</em> an average of the five perspective scores — it's
            the lowest one. An organization behaves at the level of its least mature area, not its
            most advanced, no matter how far ahead the other four have gotten.
          </p>
          <p>
            When an answer claims strong practice in an area but a related foundational question
            says that practice isn't actually in place, that's a contradiction — the affected
            scores get reduced and it's called out in your results, since the claim doesn't hold up
            once checked. All free-tier scores also carry a margin of uncertainty (shown as
            "Estimated range" above) because this quick assessment asks fewer questions than a full
            review would.
          </p>
        </section>
      </div>

    </div>
  )
}
