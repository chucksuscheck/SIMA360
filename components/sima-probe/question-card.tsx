'use client'

import type { Question } from '@/lib/sima-probe/types'
import { cn } from '@/lib/utils'

interface QuestionCardProps {
  question: Question
  selectedValue: number | undefined
  onSelect: (value: number) => void
}

export function QuestionCard({ question, selectedValue, onSelect }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
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
