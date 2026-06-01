import type { DomainResult } from '@/lib/sima-probe/types'
import { DOMAIN_META } from '@/lib/sima-probe/questions'
import { MATURITY_DESCRIPTIONS } from '@/lib/sima-probe/scoring'
import { cn } from '@/lib/utils'

interface DomainScoreCardProps {
  result: DomainResult
}

const MATURITY_COLORS: Record<string, string> = {
  Initial:     'bg-red-100 text-red-800',
  Exploring:   'bg-orange-100 text-orange-800',
  Applying:    'bg-yellow-100 text-yellow-700',
  Formalizing: 'bg-blue-100 text-blue-800',
  Optimizing:  'bg-emerald-100 text-emerald-800',
  Leading:     'bg-violet-100 text-violet-800',
}

export function DomainScoreCard({ result }: DomainScoreCardProps) {
  const meta = DOMAIN_META[result.domain]

  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white overflow-hidden')}>
      {/* Color strip */}
      <div className={cn('h-1', result.anchorsViolated ? 'bg-orange-400' : meta.borderColor.replace('border-', 'bg-'))} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className={cn('text-xs font-semibold uppercase tracking-wider mb-0.5', meta.color)}>
              {meta.label}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-slate-900">{result.score.toFixed(1)}</span>
              <span className="text-sm text-slate-400">/ 5</span>
            </div>
          </div>
          <span className={cn('text-xs font-semibold px-2.5 py-1 rounded-full', MATURITY_COLORS[result.maturityLevel])}>
            {result.maturityLevel}
          </span>
        </div>

        {/* Confidence band */}
        <div className="text-xs text-slate-500 mb-4">
          <span className="font-medium text-slate-700">Confidence band:</span>{' '}
          {result.confidenceLow.toFixed(1)} – {result.confidenceHigh.toFixed(1)}
        </div>

        {/* Capability score bars */}
        <div className="space-y-2 mb-4">
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

        {/* Constraint */}
        <div className="border-t border-slate-100 pt-3">
          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Constraint: </span>
            {result.constraintCapability}
            {' '}
            <span className="text-slate-400">({result.constraintScore.toFixed(1)})</span>
          </p>
          {result.anchorsViolated && (
            <p className="text-xs text-orange-600 mt-1 font-medium">
              Anchor cap applied — score floored at Applying
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
