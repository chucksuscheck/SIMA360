import type { MaturityLevel } from '@/lib/sima-probe/types'
import { MATURITY_DESCRIPTIONS } from '@/lib/sima-probe/scoring'
import { cn } from '@/lib/utils'

interface EnterpriseScoreCardProps {
  score: number
  maturityLevel: MaturityLevel
  confidenceLow: number
  confidenceHigh: number
}

const LEVEL_STYLES: Record<MaturityLevel, { pill: string; track: string; label: string }> = {
  Initial:     { pill: 'bg-red-100 text-red-800',     track: 'bg-red-400',     label: 'Immediate intervention required' },
  Exploring:   { pill: 'bg-orange-100 text-orange-800', track: 'bg-orange-400', label: 'Foundation building required' },
  Applying:    { pill: 'bg-yellow-100 text-yellow-700', track: 'bg-yellow-400', label: 'Operational consistency needed' },
  Formalizing: { pill: 'bg-blue-100 text-blue-800',    track: 'bg-blue-500',    label: 'Scaling and standardization' },
  Optimizing:  { pill: 'bg-emerald-100 text-emerald-800', track: 'bg-emerald-500', label: 'Continuous improvement active' },
  Leading:     { pill: 'bg-violet-100 text-violet-800', track: 'bg-violet-500', label: 'Reference-grade capability' },
}

// Which maturity bands are active on the scale bar
const LEVELS: MaturityLevel[] = ['Initial', 'Exploring', 'Applying', 'Formalizing', 'Optimizing', 'Leading']

export function EnterpriseScoreCard({
  score,
  maturityLevel,
  confidenceLow,
  confidenceHigh,
}: EnterpriseScoreCardProps) {
  const style = LEVEL_STYLES[maturityLevel]
  const pct = (score / 5) * 100

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Label */}
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
        Enterprise AI Maturity Score
      </p>

      {/* Score row */}
      <div className="flex items-end gap-4 mb-2">
        <span className="text-7xl font-bold tracking-tight text-slate-900 leading-none">
          {score.toFixed(1)}
        </span>
        <div className="pb-2">
          <span className={cn('text-sm font-semibold px-3 py-1.5 rounded-full', style.pill)}>
            {maturityLevel}
          </span>
        </div>
      </div>

      {/* Descriptor */}
      <p className="text-sm text-slate-500 mb-1">{style.label}</p>
      <p className="text-xs text-slate-400 mb-6">{MATURITY_DESCRIPTIONS[maturityLevel]}</p>

      {/* Score bar */}
      <div className="relative mb-2">
        <div className="w-full bg-slate-100 rounded-full h-3">
          <div
            className={cn('h-3 rounded-full transition-all', style.track)}
            style={{ width: `${pct}%` }}
          />
        </div>
        {/* Confidence band overlay */}
        <div
          className="absolute top-0 h-3 rounded-full bg-slate-900/10"
          style={{
            left: `${(confidenceLow / 5) * 100}%`,
            width: `${((confidenceHigh - confidenceLow) / 5) * 100}%`,
          }}
        />
      </div>

      {/* Scale labels */}
      <div className="flex justify-between mb-1">
        {LEVELS.map(level => (
          <span
            key={level}
            className={cn(
              'text-xs',
              level === maturityLevel ? 'font-semibold text-slate-700' : 'text-slate-300'
            )}
          >
            {level}
          </span>
        ))}
      </div>

      {/* Confidence band note */}
      <p className="text-xs text-slate-400 mt-3">
        Free-tier confidence band: {confidenceLow.toFixed(1)} – {confidenceHigh.toFixed(1)} &nbsp;·&nbsp; Harmonic mean of domain scores
      </p>
    </div>
  )
}
