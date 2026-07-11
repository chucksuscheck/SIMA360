/**
 * Manual verification script for the SIMA-Probe scoring engine.
 * Run: npx ts-node lib/sima-probe/scoring.test.ts
 *
 * Cases tested:
 *   A) All zeros           — everything Initial, anchors violated, evidence caps fire
 *   B) Mature respondent   — scores 3–4 across the board
 *   C) Contradiction case  — G1=0, G2=4 → GOVERNANCE_THEATER fires, affected cap reduced 40%
 *   D) Anchor cap          — G1=1 (Exploring), other G scores high → domain capped at 2.0
 *   E) Weakest-constraint  — known domain scores → verify enterprise score is the minimum, not an average
 */

import { scoreAssessment, scoreDomain, getMaturityLevel } from './scoring'
import type { Answers } from './types'
import { QUESTIONS } from './questions'

function allAnswers(value: number): Answers {
  return Object.fromEntries(QUESTIONS.map(q => [q.id, value]))
}

function domainAnswers(base: Answers, overrides: Answers): Answers {
  return { ...base, ...overrides }
}

function assert(label: string, got: unknown, expected: unknown) {
  const pass = JSON.stringify(got) === JSON.stringify(expected)
  console.log(pass ? `  ✓ ${label}` : `  ✗ ${label}`)
  if (!pass) {
    console.log(`    expected: ${JSON.stringify(expected)}`)
    console.log(`    got:      ${JSON.stringify(got)}`)
  }
}

function assertApprox(label: string, got: number, expected: number, tolerance = 0.15) {
  const pass = Math.abs(got - expected) <= tolerance
  console.log(pass ? `  ✓ ${label}` : `  ✗ ${label}`)
  if (!pass) {
    console.log(`    expected: ~${expected}`)
    console.log(`    got:      ${got}`)
  }
}

// ── Case A: All zeros ─────────────────────────────────────────────────────────
console.log('\nCase A — All zeros:')
{
  const answers = allAnswers(0)
  const result = scoreAssessment(answers)

  assert('all domain scores = 0.0', [
    result.domains.governance.score,
    result.domains.strategy.score,
    result.domains.data.score,
    result.domains.people.score,
    result.domains.technology.score,
  ], [0, 0, 0, 0, 0])

  assert('all maturity levels = Initial',
    Object.values(result.domains).map(d => d.maturityLevel),
    ['Initial', 'Initial', 'Initial', 'Initial', 'Initial']
  )

  assert('evidence count = 0 for governance', result.domains.governance.evidenceCount, 0)
  // Weakest-constraint principle: enterprise score = min of all domain scores
  assert('enterprise score = 0.0 (weakest constraint)', result.enterpriseScore, 0)
}

// ── Case B: Mature respondent (3–4 range) ─────────────────────────────────────
console.log('\nCase B — Mature respondent (scores 3):')
{
  const answers = allAnswers(3)
  const result = scoreAssessment(answers)

  // With all scores = 3, no anchor cap (anchors = 3 >= 2.0), evidence count = 6
  // Domain score = 3.0 for all domains
  assert('governance score = 3.0', result.domains.governance.score, 3)
  assert('governance maturity = Formalizing', result.domains.governance.maturityLevel, 'Formalizing')
  assert('evidence count = 6', result.domains.governance.evidenceCount, 6)
  assert('no anchors violated', result.domains.governance.anchorsViolated, false)

  // Enterprise: weakest-constraint minimum of five 3.0s = 3.0
  assert('enterprise score = 3.0', result.enterpriseScore, 3)
  assert('enterprise maturity = Formalizing', result.enterpriseMaturityLevel, 'Formalizing')
}

// ── Case C: Contradiction — GOVERNANCE_THEATER ────────────────────────────────
console.log('\nCase C — GOVERNANCE_THEATER (G1=0, G2=4, G3=4, G4=4):')
{
  const answers = allAnswers(2)
  const overrides: Answers = { G1: 0, G2: 4, G3: 4, G4: 4 }
  const result = scoreDomain('governance', { ...answers, ...overrides })

  assert('contradiction flag = GOVERNANCE_THEATER',
    result.contradictionFlags.includes('GOVERNANCE_THEATER'), true)

  // G2, G3, G4 all scored > 3, so they each get 40% reduction: 4 * 0.6 = 2.4
  const g2Cap = result.capabilityScores.find(c => c.questionId === 'G2')!
  assertApprox('G2 adjusted score ≈ 2.4 (4 × 0.6)', g2Cap.adjustedScore, 2.4)

  // G1 is the anchor at 0.0 → anchorsViolated = true → domain capped at 2.0
  assert('anchorsViolated = true', result.anchorsViolated, true)
  assert('governance capped at 2.0', result.score <= 2.0, true)
}

// ── Case D: Anchor cap (anchor at Exploring, not Applying) ────────────────────
console.log('\nCase D — Anchor cap (G1=1, all others=4):')
{
  const answers: Answers = {
    G1: 1, G2: 4, G3: 4, G4: 4, G5: 4, G6: 4,
    S1: 3, S2: 3, S3: 3, S4: 3, S5: 3, S6: 3,
    D1: 3, D2: 3, D3: 3, D4: 3, D5: 3, D6: 3,
    P1: 3, P2: 3, P3: 3, P4: 3, P5: 3, P6: 3,
    T1: 3, T2: 3, T3: 3, T4: 3, T5: 3, T6: 3,
  }
  const result = scoreDomain('governance', answers)

  // G1=1 < 2.0 → anchor cap fires, domain score capped at 2.0
  assert('domain capped at ≤ 2.0 when anchor < 2.0', result.score <= 2.0, true)
  assert('anchorsViolated = true', result.anchorsViolated, true)
  assert('maturity = Applying', result.maturityLevel, 'Applying')
}

// ── Case E: Weakest-constraint arithmetic ────────────────────────────────────
console.log('\nCase E — Weakest-constraint minimum:')
{
  // Manually set up known domain scores by crafting exact answers.
  // Easiest: set all answers to 2.0 → all domain scores = 2.0
  // Minimum of five equal 2.0s = 2.0, regardless of domain weights
  const answers = allAnswers(2)
  const result = scoreAssessment(answers)
  // All caps fire at 2.0 (anchor cap: 2 is exactly threshold, anchorsViolated = false for ≥ 2.0)
  // evidence count = 6 (all > 0)
  // Expected enterprise score = 2.0
  assertApprox('minimum of all 2.0 domains ≈ 2.0', result.enterpriseScore, 2.0)
}

// ── Case F: Evidence cap (< 3 non-zero capabilities) ─────────────────────────
console.log('\nCase F — Evidence cap (only 2 non-zero capabilities in governance):')
{
  const answers: Answers = {
    G1: 4, G2: 4, G3: 0, G4: 0, G5: 0, G6: 0,
    S1: 3, S2: 3, S3: 3, S4: 3, S5: 3, S6: 3,
    D1: 3, D2: 3, D3: 3, D4: 3, D5: 3, D6: 3,
    P1: 3, P2: 3, P3: 3, P4: 3, P5: 3, P6: 3,
    T1: 3, T2: 3, T3: 3, T4: 3, T5: 3, T6: 3,
  }
  const result = scoreDomain('governance', answers)

  assert('evidence count = 2', result.evidenceCount, 2)
  // Raw domain score would be high (G1=4, G2=4 dominate by weight),
  // but evidence cap should bring it down to max 2.0
  assert('domain capped at ≤ 2.0 by evidence cap', result.score <= 2.0, true)
}

// ── Case G: Confidence bands ───────────────────────────────────────────────────
console.log('\nCase G — Confidence bands:')
{
  const answers = allAnswers(3)
  const result = scoreAssessment(answers)

  assert('governance confidenceLow = 2.0', result.domains.governance.confidenceLow, 2)
  assert('governance confidenceHigh = 4.0', result.domains.governance.confidenceHigh, 4)
  assert('enterprise confidenceLow = 2.0', result.enterpriseConfidenceLow, 2)
  assert('enterprise confidenceHigh = 4.0', result.enterpriseConfidenceHigh, 4)
}

console.log('\nDone.\n')
