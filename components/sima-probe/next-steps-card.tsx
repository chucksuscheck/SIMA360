import type { NextPriority } from '@/lib/sima-probe/types'
import { DOMAIN_META } from '@/lib/sima-probe/questions'
import { cn } from '@/lib/utils'

interface NextStepsCardProps {
  priorities: NextPriority[]
}

export function NextStepsCard({ priorities }: NextStepsCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900">Next Investigation Priorities</h3>
        <p className="text-xs text-slate-500 mt-0.5">
          Capabilities with the highest weighted impact on enterprise score, ranked by potential uplift.
        </p>
      </div>
      <div className="divide-y divide-slate-100">
        {priorities.map((priority, i) => {
          const meta = DOMAIN_META[priority.domain]
          return (
            <div key={priority.questionId} className="px-6 py-4 flex items-start gap-4">
              <span className="text-2xl font-bold text-slate-200 leading-none mt-0.5 w-6 flex-shrink-0">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={cn('text-xs font-semibold uppercase tracking-wide', meta.color)}>
                    {meta.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{priority.capability}</span>
                  <span className="text-xs text-slate-400">
                    current: {priority.currentScore.toFixed(1)}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{priority.reason}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
