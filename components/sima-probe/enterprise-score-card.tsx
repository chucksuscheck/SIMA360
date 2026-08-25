import Link from 'next/link'
import type { MaturityLevel } from '@/lib/sima-probe/types'
import { MATURITY_DESCRIPTIONS } from '@/lib/sima-probe/scoring'
import { InfoTooltip } from '@/components/ui/info-tooltip'
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
  Formalizing: { pill: 'bg-blue-100 text-blue-800',    track: 'bg-blue-500',    label: 'Holds normally — pressure-testing needed' },
  Optimizing:  { pill: 'bg-emerald-100 text-emerald-800', track: 'bg-emerald-500', label: 'Continuous improvement active' },
  Leading:     { pill: 'bg-violet-100 text-violet-800', track: 'bg-violet-500', label: 'Deliberate stewardship' },
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
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6 inline-flex items-center gap-1.5">
        Overall AI Maturity Score
        <InfoTooltip text="This is not an average of your five perspective scores — it's the lowest one. A business only operates as reliably as its weakest area, no matter how far ahead the other four have gotten." />
      </p>

      {/* Score row */}
      <div className="flex items-end gap-4 mb-2">
        <span className="text-7xl font-bold tracking-tight text-slate-900 leading-none">
          {score.toFixed(1)}
        </span>
        <div className="pb-2">
          <Link
            href={`/maturity/${maturityLevel.toLowerCase()}`}
            className={cn(
              'text-sm font-semibold px-3 py-1.5 rounded-full transition-colors hover:underline underline-offset-2',
              style.pill
            )}
          >
            {maturityLevel}
          </Link>
        </div>
      </div>

      {/* Descriptor */}
      <p className="text-sm text-slate-500 mb-1">{style.label}</p>
      <p className="text-xs text-slate-400 mb-6">
        {MATURITY_DESCRIPTIONS[maturityLevel]}{' '}
        <Link href={`/maturity/${maturityLevel.toLowerCase()}`} className="text-slate-500 underline underline-offset-2 hover:text-slate-700">
          Learn more about this level →
        </Link>
      </p>

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
      <p className="text-xs text-slate-400 mt-3 inline-flex items-center gap-1.5 flex-wrap">
        <span className="inline-flex items-center gap-1">
          Estimated range: {confidenceLow.toFixed(1)} – {confidenceHigh.toFixed(1)}
          <InfoTooltip text="This free-tier assessment uses a small number of questions, so the true score could fall anywhere in this range." />
        </span>
        <span className="text-slate-300">·</span>
        <span className="inline-flex items-center gap-1">
          Set by your weakest perspective, not an average
          <InfoTooltip text="If four of your five perspectives score well but one is still Initial, your overall score is Initial. A system behaves at the level of its least mature part, not its most advanced one." align="right" />
        </span>
      </p>
    </div>
  )
}
