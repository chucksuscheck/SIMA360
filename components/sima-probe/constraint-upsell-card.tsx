import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Perspective, MaturityLevel } from '@/lib/sima-probe/types'
import { PERSPECTIVE_META } from '@/lib/sima-probe/questions'

type NextTier = 'insight' | 'advisory'

const TIER_LABEL: Record<NextTier, string> = {
  insight: 'Insight',
  advisory: 'Advisory',
}

// One sentence per perspective describing what that tier's review specifically covers.
// Grounded in the same anchor concepts used elsewhere on the site (accountability and
// escalation for Governance, operational translation for Strategy, runtime monitoring
// for Data, psychological safety for People, operational observability for Technology).
const TIER_COVERAGE: Record<NextTier, Record<Perspective, string>> = {
  insight: {
    governance:
      "Insight adds 12 Governance questions and document-intelligence cross-checks that test whether accountability and escalation paths hold up under real conditions, not just whether policies exist.",
    strategy:
      'Insight adds 12 Strategy questions testing whether AI priorities actually translate into changed operational workflows, not just documented intent.',
    data: 'Insight adds 12 Data questions testing whether runtime monitoring on production pipelines is real and continuous, not just claimed.',
    people:
      'Insight adds 12 People questions probing whether employees can report AI errors without consequence, not just whether a policy says they can.',
    technology:
      'Insight adds 12 Technology questions testing whether production systems carry real operational observability, not just whether monitoring tools are installed.',
  },
  advisory: {
    governance: 'Advisory includes a full review of Governance decision rights and escalation paths.',
    strategy:
      'Advisory includes a full review of how Strategy priorities translate into operational workflows, assessed directly with your team.',
    data: "Advisory includes a full review of Data's runtime monitoring and production pipeline integrity, verified directly with your team.",
    people:
      'Advisory includes a full review of psychological safety and error-reporting conditions across People, assessed directly with your team.',
    technology:
      "Advisory includes a full review of Technology's operational observability and production monitoring discipline, verified directly with your team.",
  },
}

interface ConstraintUpsellCardProps {
  perspective: Perspective
  maturityLevel: MaturityLevel
  nextTier: NextTier
}

export function ConstraintUpsellCard({ perspective, maturityLevel, nextTier }: ConstraintUpsellCardProps) {
  const meta = PERSPECTIVE_META[perspective]
  const coverage = TIER_COVERAGE[nextTier][perspective]

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-6">
      <p className="text-sm text-slate-800 leading-relaxed">
        Your <strong>{meta.label}</strong> perspective scored <strong>{maturityLevel}</strong> — the constraint on
        your entire system right now. {coverage}
      </p>
      <Link
        href="/pricing"
        className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
      >
        View {TIER_LABEL[nextTier]} pricing <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}
