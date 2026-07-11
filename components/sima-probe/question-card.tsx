'use client'

import type { Question } from '@/lib/sima-probe/types'
import { DOMAIN_META } from '@/lib/sima-probe/questions'
import { cn } from '@/lib/utils'

interface QuestionCardProps {
  question: Question
  selectedValue: number | undefined
  onSelect: (value: number) => void
}

export function QuestionCard({ question, selectedValue, onSelect }: QuestionCardProps) {
  const meta = DOMAIN_META[question.domain]
  const typeLabel =
    question.type === 'anchor' ? 'Anchor' :
    question.type === 'core' ? 'Core' : 'Supporting'

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Capability badge row */}
      <div className="flex items-center gap-3 mb-5">
        <span className={cn('text-xs font-semibold uppercase tracking-wider', meta.color)}>
          {meta.label}
        </span>
        <span className="text-slate-300 text-xs">·</span>
        <span className="text-xs text-slate-500 font-medium">{question.capability}</span>
        <span className="text-slate-300 text-xs">·</span>
        <span
          className={cn(
            'text-xs font-medium px-1.5 py-0.5 rounded',
            question.type === 'anchor'
              ? 'bg-slate-900 text-slate-100'
              : question.type === 'core'
              ? 'bg-slate-100 text-slate-700'
              : 'bg-slate-50 text-slate-500'
          )}
        >
          {typeLabel}
        </span>
      </div>

      {/* Question text */}
      <p className="text-xl font-medium text-slate-900 leading-snug mb-8">
        {question.text}
      </p>

      {/* Response options */}
      <div className="space-y-2.5">
        {question.options.map(option => {
          const isSelected = selectedValue === option.value
          return (
            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={cn(
                'w-full flex items-start gap-4 px-5 py-4 rounded-lg border text-left transition-all duration-100',
                isSelected
                  ? 'border-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50'
              )}
            >
              <span
                className={cn(
                  'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold mt-0.5',
                  isSelected
                    ? 'border-white text-white'
                    : 'border-slate-300 text-slate-400'
                )}
              >
                {option.value}
              </span>
              <span className="text-sm font-medium leading-relaxed">
                {option.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
