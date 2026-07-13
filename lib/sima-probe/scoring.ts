import type {
  Perspective,
  MaturityLevel,
  RiskSeverity,
  Answers,
  CapabilityScore,
  PerspectiveResult,
  RiskFlag,
  NextPriority,
  ScoringResult,
} from './types'
import { QUESTIONS, PERSPECTIVE_ORDER } from './questions'

// Enterprise-level perspective weights (sum to 1.0)
const PERSPECTIVE_WEIGHTS: Record<Perspective, number> = {
  governance: 0.25,
  technology: 0.22,
  data: 0.20,
  strategy: 0.18,
  people: 0.15,
}

export function getMaturityLevel(score: number): MaturityLevel {
  if (score < 1) return 'Initial'
  if (score < 2) return 'Exploring'
  if (score < 3) return 'Applying'
  if (score < 4) return 'Formalizing'
  if (score < 5) return 'Optimizing'
  return 'Leading'
}

export const MATURITY_DESCRIPTIONS: Record<MaturityLevel, string> = {
  Initial: "AI interest is real, but nothing yet coordinates it. Activity is possible; consistency isn't.",
  Exploring: 'Multiple efforts are underway, but disconnected — each built on its own assumptions, with no shared standard connecting them.',
  Applying: "Individual efforts work and can be defended on their own terms, but they don't generalize past the context that produced them.",
  Formalizing: 'Structure exists and holds under normal conditions. The gap shows up when something is contested, urgent, or the world changes underneath it.',
  Optimizing: "The system is tested against outcomes continuously, and what's learned changes what happens next — not just what gets documented.",
  Leading: 'Improvement is built into how the organization operates day to day, rather than something applied to it periodically.',
}

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

// Returns the contradiction flag type and the question IDs whose scores should be reduced 40%
function detectPerspectiveContradiction(
  perspective: Perspective,
  rawScores: Record<string, number>
): { flagType: string | null; affectedIds: string[] } {
  // Each perspective has one designated anchor question for theater detection
  const theaterRules: Record<Perspective, { anchorId: string; flagType: string }> = {
    governance: { anchorId: 'G1', flagType: 'GOVERNANCE_THEATER' },
    strategy:   { anchorId: 'S1', flagType: 'STRATEGY_THEATER' },
    data:       { anchorId: 'D1', flagType: 'DATA_MONITORING_CLAIM' },
    people:     { anchorId: 'P3', flagType: 'CONCEALMENT_RISK' },
    technology: { anchorId: 'T1', flagType: 'OBSERVABILITY_CLAIM' },
  }

  const rule = theaterRules[perspective]
  const triggerScore = rawScores[rule.anchorId]

  if (triggerScore < 1) {
    // Find all questions in this perspective that scored > 3
    const allPerspectiveIds = QUESTIONS.filter(q => q.perspective === perspective).map(q => q.id)
    const affectedIds = allPerspectiveIds.filter(id => rawScores[id] > 3)
    if (affectedIds.length > 0) {
      return { flagType: rule.flagType, affectedIds }
    }
  }
  return { flagType: null, affectedIds: [] }
}

export function scorePerspective(perspective: Perspective, answers: Answers): PerspectiveResult {
  const perspectiveQuestions = QUESTIONS.filter(q => q.perspective === perspective)

  // Step 1: Raw scores from answers
  const rawScores: Record<string, number> = {}
  for (const q of perspectiveQuestions) {
    rawScores[q.id] = answers[q.id] ?? 0
  }

  // Step 2: Contradiction detection → apply 40% reduction to affected capabilities
  const { flagType, affectedIds } = detectPerspectiveContradiction(perspective, rawScores)
  const contradictionFlags: string[] = flagType ? [flagType] : []

  const adjustedScores: Record<string, number> = { ...rawScores }
  for (const id of affectedIds) {
    adjustedScores[id] = rawScores[id] * 0.6
  }

  // Step 3: Build CapabilityScore objects
  const capabilityScores: CapabilityScore[] = perspectiveQuestions.map(q => ({
    questionId: q.id,
    capability: q.capability,
    type: q.type,
    weight: q.weight,
    rawScore: rawScores[q.id],
    adjustedScore: adjustedScores[q.id],
  }))

  // Step 4: Evidence count — capabilities with adjusted score > 0
  const evidenceCount = capabilityScores.filter(c => c.adjustedScore > 0).length

  // Step 5: Weighted perspective score (weights are raw percentages, normalized by their sum)
  const totalWeight = perspectiveQuestions.reduce((s, q) => s + q.weight, 0)
  const weightedSum = capabilityScores.reduce(
    (sum, c) => sum + c.adjustedScore * c.weight,
    0
  )
  let perspectiveScore = weightedSum / totalWeight

  // Step 6: Raw perspective score (before caps) used for ANCHOR_VIOLATION check
  const rawPerspectiveScore =
    capabilityScores.reduce((sum, c) => sum + c.rawScore * c.weight, 0) / totalWeight

  // Step 7: Anchor cap — if any anchor scores below Applying (< 2.0), cap perspective at 2.0
  const anchors = capabilityScores.filter(c => c.type === 'anchor')
  const anchorsViolated = anchors.some(c => c.adjustedScore < 2.0)
  if (anchorsViolated) {
    perspectiveScore = Math.min(perspectiveScore, 2.0)
  }

  // Step 8: Evidence cap — fewer than 3 evidence responses → cap at 2.0
  if (evidenceCount < 3) {
    perspectiveScore = Math.min(perspectiveScore, 2.0)
  }

  // Step 9: ANCHOR_VIOLATION contradiction flag
  // Triggered when any anchor's raw score < 1 and the raw perspective score would have exceeded 2.0
  const anchorViolationTriggered =
    anchors.some(c => c.rawScore < 1) && rawPerspectiveScore > 2.0
  if (anchorViolationTriggered) {
    contradictionFlags.push('ANCHOR_VIOLATION')
  }

  // Step 10: Constraint = lowest-scoring capability, tie-broken by highest weight
  const sorted = [...capabilityScores].sort((a, b) => {
    if (a.adjustedScore !== b.adjustedScore) return a.adjustedScore - b.adjustedScore
    return b.weight - a.weight
  })
  const constraint = sorted[0]

  const score = round1(perspectiveScore)
  return {
    perspective,
    score,
    maturityLevel: getMaturityLevel(score),
    confidenceLow: round1(Math.max(0, score - 1.0)),
    confidenceHigh: round1(Math.min(5, score + 1.0)),
    capabilityScores,
    constraintCapability: constraint.capability,
    constraintScore: round1(constraint.adjustedScore),
    contradictionFlags,
    anchorsViolated,
    evidenceCount,
  }
}

const CONTRADICTION_EXPLANATIONS: Record<string, string> = {
  GOVERNANCE_THEATER:
    'Accountability Architecture (G1) is unestablished, yet other Governance capabilities scored high. Without named accountable owners, downstream governance scores are not credible.',
  STRATEGY_THEATER:
    'Operational Translation (S1) is unestablished, yet other Strategy capabilities scored high. Strategy that cannot be traced to changed workflows has not actually landed in operations.',
  DATA_MONITORING_CLAIM:
    'Runtime Monitoring (D1) is unestablished, yet other Data capabilities scored high. Data capability claims cannot be verified without live telemetry on production pipelines.',
  CONCEALMENT_RISK:
    'Psychological Safety (P3) is absent — employees face consequences for reporting AI errors. High scores in other People dimensions may reflect suppressed reporting rather than real capability.',
  OBSERVABILITY_CLAIM:
    'Operational Observability (T1) is unestablished, yet other Technology capabilities scored high. Technology capability claims cannot be verified without production monitoring.',
  ANCHOR_VIOLATION:
    'A foundational anchor capability scored Initial while the overall perspective trended above Exploring. The perspective score has been capped at Applying.',
}

function buildRiskFlags(perspectiveResults: Record<Perspective, PerspectiveResult>): RiskFlag[] {
  const allFlags: RiskFlag[] = []

  for (const perspective of PERSPECTIVE_ORDER) {
    const result = perspectiveResults[perspective]
    const perspectiveLabel = perspective.charAt(0).toUpperCase() + perspective.slice(1)

    // CRITICAL: Any anchor capability scoring Initial (< 1.0)
    for (const cap of result.capabilityScores.filter(c => c.type === 'anchor')) {
      if (cap.adjustedScore < 1.0) {
        allFlags.push({
          id: `CRITICAL_${cap.questionId}`,
          severity: 'CRITICAL',
          perspective,
          title: `${cap.capability} unestablished (${perspectiveLabel})`,
          explanation: `${cap.capability} scored ${cap.adjustedScore.toFixed(1)} — Initial. This is a foundational anchor. No reliable AI maturity in ${perspectiveLabel} can be claimed or built upon without it.`,
        })
      }
    }

    // HIGH: Two or more Core capabilities below Applying (< 2.0)
    const coresBelowApplying = result.capabilityScores.filter(
      c => c.type === 'core' && c.adjustedScore < 2.0
    )
    if (coresBelowApplying.length >= 2) {
      allFlags.push({
        id: `HIGH_${perspective}_CORES`,
        severity: 'HIGH',
        perspective,
        title: `${perspectiveLabel}: ${coresBelowApplying.length} core capabilities absent`,
        explanation: `${coresBelowApplying.map(c => c.capability).join(' and ')} are below Applying in ${perspectiveLabel}. Core capabilities must reach Applying before the perspective can operate reliably under real conditions.`,
      })
    }

    // MEDIUM: Perspective score more than 1.5 above lowest individual capability
    const lowestAdjusted = Math.min(...result.capabilityScores.map(c => c.adjustedScore))
    const gap = result.score - lowestAdjusted
    if (gap > 1.5) {
      allFlags.push({
        id: `MEDIUM_${perspective}_GAP`,
        severity: 'MEDIUM',
        perspective,
        title: `${perspectiveLabel}: high within-perspective score spread`,
        explanation: `${perspectiveLabel} perspective score is ${result.score.toFixed(1)}, but its lowest capability sits at ${lowestAdjusted.toFixed(1)} — a gap of ${gap.toFixed(1)}. High-scoring capabilities are masking weak foundations that will fail under operational pressure.`,
      })
    }

    // INFO: Contradiction flags
    for (const flagType of result.contradictionFlags) {
      allFlags.push({
        id: `INFO_${flagType}_${perspective}`,
        severity: 'INFO',
        perspective,
        title: `Contradiction detected: ${flagType.replace(/_/g, ' ')}`,
        explanation:
          CONTRADICTION_EXPLANATIONS[flagType] ??
          `A scoring contradiction was detected in ${perspectiveLabel}. Review responses for consistency.`,
      })
    }
  }

  // Sort by severity; within same severity, sort by perspective order for determinism
  const severityOrder: Record<RiskSeverity, number> = {
    CRITICAL: 0,
    HIGH: 1,
    MEDIUM: 2,
    INFO: 3,
  }
  allFlags.sort((a, b) => {
    const severityDiff =
      severityOrder[a.severity] - severityOrder[b.severity]
    if (severityDiff !== 0) return severityDiff
    return PERSPECTIVE_ORDER.indexOf(a.perspective!) - PERSPECTIVE_ORDER.indexOf(b.perspective!)
  })

  return allFlags.slice(0, 3)
}

function buildNextPriorities(perspectiveResults: Record<Perspective, PerspectiveResult>): NextPriority[] {
  const candidates: NextPriority[] = []

  for (const perspective of PERSPECTIVE_ORDER) {
    const result = perspectiveResults[perspective]
    for (const cap of result.capabilityScores) {
      const reason = buildPriorityReason(cap, result)
      candidates.push({
        capability: cap.capability,
        perspective,
        questionId: cap.questionId,
        currentScore: round1(cap.adjustedScore),
        weight: cap.weight,
        reason,
      })
    }
  }

  // Rank by potential impact: perspective weight × capability weight × score gap to 5
  candidates.sort((a, b) => {
    const impactA =
      PERSPECTIVE_WEIGHTS[a.perspective] * a.weight * (5 - a.currentScore)
    const impactB =
      PERSPECTIVE_WEIGHTS[b.perspective] * b.weight * (5 - b.currentScore)
    return impactB - impactA
  })

  return candidates.slice(0, 3)
}

function buildPriorityReason(cap: CapabilityScore, result: PerspectiveResult): string {
  if (cap.type === 'anchor' && cap.adjustedScore < 2.0) {
    return `Anchor below Applying — caps the entire ${result.perspective} perspective at ${result.score.toFixed(1)}. Resolving this unlocks the perspective ceiling.`
  }
  if (cap.type === 'anchor' && cap.adjustedScore < 3.0) {
    return `Anchor at ${cap.adjustedScore.toFixed(1)} — highest-weight capability in this perspective. Improvement here has the most direct effect on the perspective score.`
  }
  if (cap.adjustedScore < 1.0) {
    return `Scored Initial (${cap.adjustedScore.toFixed(1)}) — no capability established. Foundational gap with high remediation leverage.`
  }
  const perspectiveWeight = Math.round(PERSPECTIVE_WEIGHTS[result.perspective] * 100)
  return `High-weight capability (${cap.weight}%) in a ${perspectiveWeight}%-weighted perspective. Small improvements here compound into enterprise score gains.`
}

// Weakest-constraint principle (Chapter 10): the system behaves at the level of
// its least mature perspective, not an average of all five. Don't average the
// five results — take the lowest one. That is the operating level, regardless
// of how far ahead the other four perspectives have gotten.
function weakestConstraint(scores: Array<{ score: number }>): number {
  return Math.min(...scores.map(e => e.score))
}

export function scoreAssessment(answers: Answers): ScoringResult {
  const perspectives = {} as Record<Perspective, PerspectiveResult>
  for (const perspective of PERSPECTIVE_ORDER) {
    perspectives[perspective] = scorePerspective(perspective, answers)
  }

  const perspectiveScoreInputs = PERSPECTIVE_ORDER.map(d => ({
    perspective: d,
    score: perspectives[d].score,
    weight: PERSPECTIVE_WEIGHTS[d],
  }))

  const enterpriseScore = round1(weakestConstraint(perspectiveScoreInputs))

  return {
    perspectives,
    enterpriseScore,
    enterpriseMaturityLevel: getMaturityLevel(enterpriseScore),
    enterpriseConfidenceLow: round1(Math.max(0, enterpriseScore - 1.0)),
    enterpriseConfidenceHigh: round1(Math.min(5, enterpriseScore + 1.0)),
    topRiskFlags: buildRiskFlags(perspectives),
    nextPriorities: buildNextPriorities(perspectives),
  }
}
