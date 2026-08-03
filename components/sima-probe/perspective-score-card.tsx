import type { PerspectiveResult } from '@/lib/sima-probe/types'
import { PERSPECTIVE_META } from '@/lib/sima-probe/questions'
import { MATURITY_DESCRIPTIONS } from '@/lib/sima-probe/scoring'
import { getMaturityLevel } from '@/lib/maturity-levels'
import { InfoTooltip } from '@/components/ui/info-tooltip'
import { cn } from '@/lib/utils'

interface PerspectiveScoreCardProps {
  result: PerspectiveResult
}

const MATURITY_COLORS: Record<string, string> = {
  Initial:     'bg-red-100 text-red-800',
  Exploring:   'bg-orange-100 text-orange-800',
  Applying:    'bg-yellow-100 text-yellow-700',
  Formalizing: 'bg-blue-100 text-blue-800',
  Optimizing:  'bg-emerald-100 text-emerald-800',
  Leading:     'bg-violet-100 text-violet-800',
}

export function PerspectiveScoreCard({ result }: PerspectiveScoreCardProps) {
  const meta = PERSPECTIVE_META[result.perspective]
  const level = getMaturityLevel(result.maturityLevel.toLowerCase())
  const maturityTooltip =
    level?.perspectives[meta.label as keyof typeof level.perspectives] ?? MATURITY_DESCRIPTIONS[result.maturityLevel]

  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      {/* Color strip */}
      <div className={cn('h-1 rounded-t-xl', result.anchorsViolated ? 'bg-orange-400' : meta.borderColor.replace('border-', 'bg-'))} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className={cn('text-xs font-semibold uppercase tracking-wider mb-0.5 inline-flex items-center gap-1', meta.color)}>
              {meta.label}
              <InfoTooltip text={meta.description} />
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">{result.score.toFixed(1)}</span>
              <span className="text-sm text-slate-400">/ 5</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1">
            <span className={cn('text-xs font-semibold px-2.5 py-1 rounded-full', MATURITY_COLORS[result.maturityLevel])}>
              {result.maturityLevel}
            </span>
            <InfoTooltip text={maturityTooltip} align="right" />
          </span>
        </div>

        {/* Confidence band */}
        <div className="text-xs text-slate-500 mb-4 inline-flex items-center gap-1">
          <span className="font-medium text-slate-700">Estimated range:</span>{' '}
          {result.confidenceLow.toFixed(1)} – {result.confidenceHigh.toFixed(1)}
          <InfoTooltip text="With this few questions per topic, the true score could fall anywhere in this range — treat the single number above as a best estimate, not an exact measurement." />
        </div>

        {/* Capability score bars */}
        <div className="mb-4">
          <p className="text-xs font-medium text-slate-700 mb-2 inline-flex items-center gap-1">
            What this score is built from
            <InfoTooltip text="Each bar is a specific, testable practice we asked about (a 'capability'). Darker bars are foundational practices — if one of those isn't in place yet, it holds the whole perspective's score down regardless of how the others score." />
          </p>
          <div className="space-y-2">
            {result.capabilityScores.map(cap => (
              <div key={cap.questionId}>
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-xs text-slate-600 truncate pr-2">{cap.capability}</span>
                  <span className="text-xs font-medium text-slate-700 flex-shrink-0">
                    {cap.adjustedScore.toFixed(1)}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div
                    className={cn(
                      'h-1.5 rounded-full transition-all',
                      cap.type === 'anchor' ? 'bg-slate-700' :
                      cap.type === 'core'   ? 'bg-slate-400' : 'bg-slate-300'
                    )}
                    style={{ width: `${(cap.adjustedScore / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Constraint */}
        <div className="border-t border-slate-100 pt-3">
          <p className="text-xs text-slate-500 inline-flex items-center gap-1">
            <span className="font-semibold text-slate-700">Biggest drag on this score: </span>
            {result.constraintCapability}
            {' '}
            <span className="text-slate-400">({result.constraintScore.toFixed(1)})</span>
            <InfoTooltip text="The single lowest-scoring practice in this perspective. Improving this one specific thing would raise this perspective's score the most." align="right" />
          </p>
          {result.anchorsViolated && (
            <p className="text-xs text-orange-600 mt-1 font-medium inline-flex items-center gap-1">
              Capped at &ldquo;Applying&rdquo;
              <InfoTooltip text="A foundational practice for this perspective hasn't been established yet, so the score is capped here — good results elsewhere in this perspective can't offset a missing fundamental." />
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
