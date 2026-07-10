'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { QUESTIONS, DOMAIN_ORDER, DOMAIN_META } from '@/lib/sima-probe/questions'
import type { Answers, AssessmentSession } from '@/lib/sima-probe/types'
import { QuestionCard } from '@/components/sima-probe/question-card'
import { ProgressIndicator } from '@/components/sima-probe/progress-indicator'
import { cn } from '@/lib/utils'

const SESSION_KEY = 'sima-probe-session'
const TOTAL = QUESTIONS.length // 30

function generateId(): string {
  return Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
}

function loadSession(): AssessmentSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AssessmentSession
  } catch {
    return null
  }
}

function saveSession(session: AssessmentSession): void {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  } catch {
    // localStorage unavailable — proceed in-memory
  }
}

export default function AssessmentPage() {
  const router = useRouter()
  const [sessionId, setSessionId] = useState<string>('')
  const [sessionStart, setSessionStart] = useState<string>('')
  const [answers, setAnswers] = useState<Answers>({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isReady, setIsReady] = useState(false) // prevents SSR flash

  // Load or create session on mount
  useEffect(() => {
    const existing = loadSession()
    if (existing && !existing.completedAt) {
      setSessionId(existing.id)
      setSessionStart(existing.startedAt)
      setAnswers(existing.answers)
      // Resume from last unanswered question
      const answeredIds = new Set(Object.keys(existing.answers))
      const resumeIndex = QUESTIONS.findIndex(q => !answeredIds.has(q.id))
      setCurrentIndex(resumeIndex === -1 ? TOTAL - 1 : resumeIndex)
    } else {
      const id = generateId()
      const startedAt = new Date().toISOString()
      setSessionId(id)
      setSessionStart(startedAt)
      saveSession({ id, startedAt, answers: {} })
    }
    setIsReady(true)
  }, [])

  const currentQuestion = QUESTIONS[currentIndex]
  const answeredCount = Object.keys(answers).length
  const currentAnswer = answers[currentQuestion?.id]
  const isLastQuestion = currentIndex === TOTAL - 1
  const isFirstQuestion = currentIndex === 0
  const currentDomain = currentQuestion?.domain
  const prevDomain = currentIndex > 0 ? QUESTIONS[currentIndex - 1]?.domain : null
  const isNewDomain = currentDomain !== prevDomain

  const handleSelect = useCallback((value: number) => {
    if (!currentQuestion) return
    const newAnswers = { ...answers, [currentQuestion.id]: value }
    setAnswers(newAnswers)
    saveSession({ id: sessionId, startedAt: sessionStart, answers: newAnswers })
  }, [answers, currentQuestion, sessionId, sessionStart])

  const handleNext = useCallback(() => {
    if (currentAnswer === undefined) return
    if (isLastQuestion) {
      saveSession({
        id: sessionId,
        startedAt: sessionStart,
        completedAt: new Date().toISOString(),
        answers,
      })
      router.push('/sima-probe/results')
    } else {
      setCurrentIndex(i => i + 1)
    }
  }, [currentAnswer, isLastQuestion, sessionId, sessionStart, answers, router])

  const handleBack = useCallback(() => {
    if (!isFirstQuestion) setCurrentIndex(i => i - 1)
  }, [isFirstQuestion])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentAnswer !== undefined) handleNext()
      }
      if (e.key === 'ArrowLeft') handleBack()
      // Number keys 0–5 to select options
      const num = parseInt(e.key)
      if (!isNaN(num) && num >= 0 && num <= 5) {
        handleSelect(num)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [currentAnswer, handleNext, handleBack, handleSelect])

  const handleStartOver = () => {
    try { localStorage.removeItem(SESSION_KEY) } catch {}
    const id = generateId()
    const startedAt = new Date().toISOString()
    setSessionId(id)
    setSessionStart(startedAt)
    setAnswers({})
    setCurrentIndex(0)
    saveSession({ id, startedAt, answers: {} })
  }

  if (!isReady || !currentQuestion) return null

  const meta = DOMAIN_META[currentDomain]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top header bar */}
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/sima-probe"
            className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            SIMA-Probe™
          </Link>
          <span className="text-xs text-slate-400">Free Diagnostic Assessment</span>
          <button
            onClick={handleStartOver}
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            Start over
          </button>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <ProgressIndicator
            currentIndex={currentIndex}
            totalQuestions={TOTAL}
            answeredCount={answeredCount}
          />
        </div>
      </div>

      {/* Perspective transition banner */}
      {isNewDomain && (
        <div className={cn('py-3 border-b', meta.bgColor)}>
          <div className="max-w-3xl mx-auto px-4">
            <p className={cn('text-xs font-semibold uppercase tracking-wider', meta.color)}>
              Now entering: {meta.label}
            </p>
            <p className="text-xs text-slate-600 mt-0.5">{meta.description}</p>
          </div>
        </div>
      )}

      {/* Main question area */}
      <main className="flex-1 flex flex-col justify-center py-10">
        <div className="max-w-3xl mx-auto px-4 w-full">
          <QuestionCard
            question={currentQuestion}
            selectedValue={currentAnswer}
            onSelect={handleSelect}
          />
        </div>
      </main>

      {/* Footer navigation */}
      <footer className="bg-white border-t sticky bottom-0 z-30">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={isFirstQuestion}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-colors',
              isFirstQuestion
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-600 hover:bg-slate-100'
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="text-xs text-slate-400">
            {currentAnswer !== undefined ? (
              <span className="flex items-center gap-1 text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Selection recorded
              </span>
            ) : (
              'Select a response to continue'
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={currentAnswer === undefined}
            className={cn(
              'flex items-center gap-2 px-5 py-2 rounded text-sm font-semibold transition-colors',
              currentAnswer === undefined
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : isLastQuestion
                ? 'bg-slate-900 text-white hover:bg-slate-800'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            )}
          >
            {isLastQuestion ? 'View Results' : 'Continue'}
            {!isLastQuestion && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </footer>
    </div>
  )
}
