import type { RiskFlag } from '@/lib/sima-probe/types'
import { cn } from '@/lib/utils'

interface RiskFlagCardProps {
  flag: RiskFlag
  rank: number
}

const SEVERITY_STYLES: Record<string, {
  border: string
  badge: string
  icon: string
}> = {
  CRITICAL: {
    border: 'border-red-200 bg-red-50',
    badge:  'bg-red-600 text-white',
    icon:   '⬛',
  },
  HIGH: {
    border: 'border-orange-200 bg-orange-50',
    badge:  'bg-orange-500 text-white',
    icon:   '▲',
  },
  MEDIUM: {
    border: 'border-yellow-200 bg-yellow-50',
    badge:  'bg-yellow-500 text-white',
    icon:   '◆',
  },
  INFO: {
    border: 'border-blue-200 bg-blue-50',
    badge:  'bg-blue-500 text-white',
    icon:   '●',
  },
}

export function RiskFlagCard({ flag, rank }: RiskFlagCardProps) {
  const style = SEVERITY_STYLES[flag.severity]

  return (
    <div className={cn('rounded-xl border p-5', style.border)}>
      <div className="flex items-start gap-3">
        <span className="text-slate-400 text-sm font-mono mt-0.5 w-4 flex-shrink-0">
          {rank}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={cn('text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wide', style.badge)}>
              {flag.severity}
            </span>
            <span className="text-sm font-semibold text-slate-800">{flag.title}</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{flag.explanation}</p>
        </div>
      </div>
    </div>
  )
}
