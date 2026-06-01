import type {
  Domain,
  MaturityLevel,
  RiskSeverity,
  Answers,
  CapabilityScore,
  DomainResult,
  RiskFlag,
  NextPriority,
  ScoringResult,
} from './types'
import { QUESTIONS, DOMAIN_ORDER } from './questions'

// Enterprise-level domain weights (sum to 1.0)
const DOMAIN_WEIGHTS: Record<Domain, number> = {
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
  Initial: 'No repeatable capability established. Outcomes are unpredictable.',
  Exploring: 'Informal awareness exists but no reliable operational practice.',
  Applying: 'Capability is present but inconsistent. Anchor requirements not fully met.',
  Formalizing: 'Defined, documented, and applied across most relevant contexts.',
  Optimizing: 'Measured, managed, and continuously improved.',
  Leading: 'Fully institutionalized. Serves as a reference model.',
}

function round1(n: number): number {
  return Math.round(n * 10) / 10
}

// Returns the contradiction flag type and the question IDs whose scores should be reduced 40%
function detectDomainContradiction(
  domain: Domain,
  rawScores: Record<string, number>
): { flagType: string | null; affectedIds: string[] } {
  // Each domain has one designated anchor question for theater detection
  const theaterRules: Record<Domain, { anchorId: string; flagType: string }> = {
    governance: { anchorId: 'G1', flagType: 'GOVERNANCE_THEATER' },
    strategy:   { anchorId: 'S1', flagType: 'STRATEGY_THEATER' },
    data:       { anchorId: 'D1', flagType: 'DATA_MONITORING_CLAIM' },
    people:     { anchorId: 'P3', flagType: 'CONCEALMENT_RISK' },
    technology: { anchorId: 'T1', flagType: 'OBSERVABILITY_CLAIM' },
  }

  const rule = theaterRules[domain]
  const triggerScore = rawScores[rule.anchorId]

  if (triggerScore < 1) {
    // Find all questions in this domain that scored > 3
    const allDomainIds = QUESTIONS.filter(q => q.domain === domain).map(q => q.id)
    const affectedIds = allDomainIds.filter(id => rawScores[id] > 3)
    if (affectedIds.length > 0) {
      return { flagType: rule.flagType, affectedIds }
    }
  }
  return { flagType: null, affectedIds: [] }
}

export function scoreDomain(domain: Domain, answers: Answers): DomainResult {
  const domainQuestions = QUESTIONS.filter(q => q.domain === domain)

  // Step 1: Raw scores from answers
  const rawScores: Record<string, number> = {}
  for (const q of domainQuestions) {
    rawScores[q.id] = answers[q.id] ?? 0
  }

  // Step 2: Contradiction detection → apply 40% reduction to affected capabilities
  const { flagType, affectedIds } = detectDomainContradiction(domain, rawScores)
  const contradictionFlags: string[] = flagType ? [flagType] : []

  const adjustedScores: Record<string, number> = { ...rawScores }
  for (const id of affectedIds) {
    adjustedScores[id] = rawScores[id] * 0.6
  }

  // Step 3: Build CapabilityScore objects
  const capabilityScores: CapabilityScore[] = domainQuestions.map(q => ({
    questionId: q.id,
    capability: q.capability,
    type: q.type,
    weight: q.weight,
    rawScore: rawScores[q.id],
    adjustedScore: adjustedScores[q.id],
  }))

  // Step 4: Evidence count — capabilities with adjusted score > 0
  const evidenceCount = capabilityScores.filter(c => c.adjustedScore > 0).length

  // Step 5: Weighted domain score (weights are raw percentages, normalized by their sum)
  const totalWeight = domainQuestions.reduce((s, q) => s + q.weight, 0)
  const weightedSum = capabilityScores.reduce(
    (sum, c) => sum + c.adjustedScore * c.weight,
    0
  )
  let domainScore = weightedSum / totalWeight

  // Step 6: Raw domain score (before caps) used for ANCHOR_VIOLATION check
  const rawDomainScore =
    capabilityScores.reduce((sum, c) => sum + c.rawScore * c.weight, 0) / totalWeight

  // Step 7: Anchor cap — if any anchor scores below Applying (< 2.0), cap domain at 2.0
  const anchors = capabilityScores.filter(c => c.type === 'anchor')
  const anchorsViolated = anchors.some(c => c.adjustedScore < 2.0)
  if (anchorsViolated) {
    domainScore = Math.min(domainScore, 2.0)
  }

  // Step 8: Evidence cap — fewer than 3 evidence responses → cap at 2.0
  if (evidenceCount < 3) {
    domainScore = Math.min(domainScore, 2.0)
  }

  // Step 9: ANCHOR_VIOLATION contradiction flag
  // Triggered when any anchor's raw score < 1 and the raw domain score would have exceeded 2.0
  const anchorViolationTriggered =
    anchors.some(c => c.rawScore < 1) && rawDomainScore > 2.0
  if (anchorViolationTriggered) {
    contradictionFlags.push('ANCHOR_VIOLATION')
  }

  // Step 10: Constraint = lowest-scoring capability, tie-broken by highest weight
  const sorted = [...capabilityScores].sort((a, b) => {
    if (a.adjustedScore !== b.adjustedScore) return a.adjustedScore - b.adjustedScore
    return b.weight - a.weight
  })
  const constraint = sorted[0]

  const score = round1(domainScore)
  return {
    domain,
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
    'A foundational anchor capability scored Initial while the overall domain trended above Exploring. The domain score has been capped at Applying.',
}

function buildRiskFlags(domainResults: Record<Domain, DomainResult>): RiskFlag[] {
  const allFlags: RiskFlag[] = []

  for (const domain of DOMAIN_ORDER) {
    const result = domainResults[domain]
    const domainLabel = domain.charAt(0).toUpperCase() + domain.slice(1)

    // CRITICAL: Any anchor capability scoring Initial (< 1.0)
    for (const cap of result.capabilityScores.filter(c => c.type === 'anchor')) {
      if (cap.adjustedScore < 1.0) {
        allFlags.push({
          id: `CRITICAL_${cap.questionId}`,
          severity: 'CRITICAL',
          domain,
          title: `${cap.capability} unestablished (${domainLabel})`,
          explanation: `${cap.capability} scored ${cap.adjustedScore.toFixed(1)} — Initial. This is a foundational anchor. No reliable AI maturity in ${domainLabel} can be claimed or built upon without it.`,
        })
      }
    }

    // HIGH: Two or more Core capabilities below Applying (< 2.0)
    const coresBelowApplying = result.capabilityScores.filter(
      c => c.type === 'core' && c.adjustedScore < 2.0
    )
    if (coresBelowApplying.length >= 2) {
      allFlags.push({
        id: `HIGH_${domain}_CORES`,
        severity: 'HIGH',
        domain,
        title: `${domainLabel}: ${coresBelowApplying.length} core capabilities absent`,
        explanation: `${coresBelowApplying.map(c => c.capability).join(' and ')} are below Applying in ${domainLabel}. Core capabilities must reach Applying before the domain can operate reliably under real conditions.`,
      })
    }

    // MEDIUM: Domain score more than 1.5 above lowest individual capability
    const lowestAdjusted = Math.min(...result.capabilityScores.map(c => c.adjustedScore))
    const gap = result.score - lowestAdjusted
    if (gap > 1.5) {
      allFlags.push({
        id: `MEDIUM_${domain}_GAP`,
        severity: 'MEDIUM',
        domain,
        title: `${domainLabel}: high within-domain score spread`,
        explanation: `${domainLabel} domain score is ${result.score.toFixed(1)}, but its lowest capability sits at ${lowestAdjusted.toFixed(1)} — a gap of ${gap.toFixed(1)}. High-scoring capabilities are masking weak foundations that will fail under operational pressure.`,
      })
    }

    // INFO: Contradiction flags
    for (const flagType of result.contradictionFlags) {
      allFlags.push({
        id: `INFO_${flagType}_${domain}`,
        severity: 'INFO',
        domain,
        title: `Contradiction detected: ${flagType.replace(/_/g, ' ')}`,
        explanation:
          CONTRADICTION_EXPLANATIONS[flagType] ??
          `A scoring contradiction was detected in ${domainLabel}. Review responses for consistency.`,
      })
    }
  }

  // Sort by severity; within same severity, sort by domain order for determinism
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
    return DOMAIN_ORDER.indexOf(a.domain!) - DOMAIN_ORDER.indexOf(b.domain!)
  })

  return allFlags.slice(0, 3)
}

function buildNextPriorities(domainResults: Record<Domain, DomainResult>): NextPriority[] {
  const candidates: NextPriority[] = []

  for (const domain of DOMAIN_ORDER) {
    const result = domainResults[domain]
    for (const cap of result.capabilityScores) {
      const reason = buildPriorityReason(cap, result)
      candidates.push({
        capability: cap.capability,
        domain,
        questionId: cap.questionId,
        currentScore: round1(cap.adjustedScore),
        weight: cap.weight,
        reason,
      })
    }
  }

  // Rank by potential impact: domain weight × capability weight × score gap to 5
  candidates.sort((a, b) => {
    const impactA =
      DOMAIN_WEIGHTS[a.domain] * a.weight * (5 - a.currentScore)
    const impactB =
      DOMAIN_WEIGHTS[b.domain] * b.weight * (5 - b.currentScore)
    return impactB - impactA
  })

  return candidates.slice(0, 3)
}

function buildPriorityReason(cap: CapabilityScore, result: DomainResult): string {
  if (cap.type === 'anchor' && cap.adjustedScore < 2.0) {
    return `Anchor below Applying — caps the entire ${result.domain} domain at ${result.score.toFixed(1)}. Resolving this unlocks the domain ceiling.`
  }
  if (cap.type === 'anchor' && cap.adjustedScore < 3.0) {
    return `Anchor at ${cap.adjustedScore.toFixed(1)} — highest-weight capability in this domain. Improvement here has the most direct effect on the domain score.`
  }
  if (cap.adjustedScore < 1.0) {
    return `Scored Initial (${cap.adjustedScore.toFixed(1)}) — no capability established. Foundational gap with high remediation leverage.`
  }
  const domainWeight = Math.round(DOMAIN_WEIGHTS[result.domain] * 100)
  return `High-weight capability (${cap.weight}%) in a ${domainWeight}%-weighted domain. Small improvements here compound into enterprise score gains.`
}

// Weighted harmonic mean across domain scores, using enterprise domain weights
function weightedHarmonicMean(
  scores: Array<{ score: number; weight: number }>
): number {
  const totalWeight = scores.reduce((s, e) => s + e.weight, 0)
  const weightedInverseSum = scores.reduce(
    (s, e) => s + e.weight / Math.max(e.score, 0.1), // guard against division by zero
    0
  )
  return totalWeight / weightedInverseSum
}

export function scoreAssessment(answers: Answers): ScoringResult {
  const domains = {} as Record<Domain, DomainResult>
  for (const domain of DOMAIN_ORDER) {
    domains[domain] = scoreDomain(domain, answers)
  }

  const domainScoreInputs = DOMAIN_ORDER.map(d => ({
    domain: d,
    score: domains[d].score,
    weight: DOMAIN_WEIGHTS[d],
  }))

  const enterpriseScore = round1(weightedHarmonicMean(domainScoreInputs))

  return {
    domains,
    enterpriseScore,
    enterpriseMaturityLevel: getMaturityLevel(enterpriseScore),
    enterpriseConfidenceLow: round1(Math.max(0, enterpriseScore - 1.0)),
    enterpriseConfidenceHigh: round1(Math.min(5, enterpriseScore + 1.0)),
    topRiskFlags: buildRiskFlags(domains),
    nextPriorities: buildNextPriorities(domains),
  }
}
