'use client'

import type { Perspective } from '@/lib/sima-probe/types'
import { PERSPECTIVE_ORDER, PERSPECTIVE_META } from '@/lib/sima-probe/questions'
import { cn } from '@/lib/utils'

interface ProgressIndicatorProps {
  currentIndex: number        // 0–29
  totalQuestions: number      // 30
  answeredCount: number
}

export function ProgressIndicator({
  currentIndex,
  totalQuestions,
  answeredCount,
}: ProgressIndicatorProps) {
  const progressPct = Math.round((answeredCount / totalQuestions) * 100)
  const currentPerspective = perspectiveForIndex(currentIndex)
  const perspectiveIndex = PERSPECTIVE_ORDER.indexOf(currentPerspective)
  const questionInPerspective = (currentIndex % 6) + 1

  return (
    <div className="w-full">
      {/* Perspective tabs */}
      <div className="flex items-center gap-1 mb-3 overflow-x-auto pb-1">
        {PERSPECTIVE_ORDER.map((perspective, i) => {
          const meta = PERSPECTIVE_META[perspective]
          const isActive = perspective === currentPerspective
          const isDone = i < perspectiveIndex
          const questionsAnsweredInPerspective = Math.min(
            Math.max(0, answeredCount - i * 6),
            6
          )

          return (
            <div
              key={perspective}
              className={cn(
                'flex-1 min-w-[80px] flex flex-col items-center px-2 py-1.5 rounded text-center transition-colors',
                isActive ? cn('bg-white border border-slate-200 shadow-sm') : '',
                isDone ? 'opacity-60' : '',
              )}
            >
              <span
                className={cn(
                  'text-xs font-semibold whitespace-nowrap',
                  isActive ? meta.color : 'text-slate-400'
                )}
              >
                {meta.label}
              </span>
              <div className="flex gap-0.5 mt-1">
                {[0, 1, 2, 3, 4, 5].map(j => (
                  <div
                    key={j}
                    className={cn(
                      'w-1 h-1 rounded-full',
                      isDone || (isActive && j < questionInPerspective)
                        ? isActive
                          ? 'bg-slate-700'
                          : 'bg-slate-400'
                        : 'bg-slate-200'
                    )}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 rounded-full h-1.5">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>
    </div>
  )
}

function perspectiveForIndex(index: number): Perspective {
  return PERSPECTIVE_ORDER[Math.floor(index / 6)] ?? PERSPECTIVE_ORDER[0]
}
