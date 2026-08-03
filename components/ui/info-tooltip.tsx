'use client'

import { Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface InfoTooltipProps {
  text: string
  className?: string
  align?: 'left' | 'right'
}

export function InfoTooltip({ text, className, align = 'left' }: InfoTooltipProps) {
  return (
    <span className={cn('group relative inline-flex', className)}>
      <Info
        tabIndex={0}
        className="w-3.5 h-3.5 text-slate-300 hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded-full cursor-default"
      />
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none absolute bottom-full z-50 mb-2 w-56 rounded border border-slate-200 bg-white px-3 py-2 text-xs font-normal normal-case leading-relaxed text-slate-600 shadow-md opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100',
          align === 'left' ? 'left-0' : 'right-0'
        )}
      >
        {text}
      </span>
    </span>
  )
}
