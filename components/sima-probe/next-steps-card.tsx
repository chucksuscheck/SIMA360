import Link from 'next/link'
import type { NextPriority } from '@/lib/sima-probe/types'
import { PERSPECTIVE_META } from '@/lib/sima-probe/questions'
import { InfoTooltip } from '@/components/ui/info-tooltip'
import { cn } from '@/lib/utils'

interface NextStepsCardProps {
  priorities: NextPriority[]
}

export function NextStepsCard({ priorities }: NextStepsCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <div className="px-6 py-4 border-b border-slate-100">
        <h3 className="text-sm font-semibold text-slate-900 inline-flex items-center gap-1.5">
          What to Look Into Next
          <InfoTooltip text="Ranked by how much your overall score would improve if this one practice reached a perfect score — weighing both how much it matters within its own perspective and how much that perspective counts toward your overall score. These aren't necessarily your worst scores; they're the ones where fixing them moves the needle most." />
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">
          The three specific practices that would raise your overall score the most if improved, ranked by impact.
        </p>
      </div>
      <div className="divide-y divide-slate-100">
        {priorities.map((priority, i) => {
          const meta = PERSPECTIVE_META[priority.perspective]
          return (
            <div key={priority.questionId} className="px-6 py-4 flex items-start gap-4">
              <span className="text-2xl font-bold text-slate-200 leading-none mt-0.5 w-6 flex-shrink-0">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <Link
                    href={`/sima-core/${priority.perspective}`}
                    className={cn('text-xs font-semibold uppercase tracking-wide hover:underline', meta.color)}
                  >
                    {meta.label}
                  </Link>
                  <span className="text-sm font-semibold text-slate-800">{priority.capability}</span>
                  <span className="text-xs text-slate-400">
                    currently {priority.currentScore.toFixed(1)} / 5
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
