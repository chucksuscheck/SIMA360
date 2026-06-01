export type Domain = 'governance' | 'strategy' | 'data' | 'people' | 'technology'
export type CapabilityType = 'anchor' | 'core' | 'supporting'
export type MaturityLevel = 'Initial' | 'Exploring' | 'Applying' | 'Formalizing' | 'Optimizing' | 'Leading'
export type RiskSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'INFO'

export interface ResponseOption {
  value: number
  label: string
}

export interface Question {
  id: string
  domain: Domain
  capability: string
  type: CapabilityType
  weight: number
  text: string
  options: ResponseOption[]
}

export type Answers = Record<string, number>

export interface CapabilityScore {
  questionId: string
  capability: string
  type: CapabilityType
  weight: number
  rawScore: number
  adjustedScore: number
}

export interface DomainResult {
  domain: Domain
  score: number
  maturityLevel: MaturityLevel
  confidenceLow: number
  confidenceHigh: number
  capabilityScores: CapabilityScore[]
  constraintCapability: string
  constraintScore: number
  contradictionFlags: string[]
  anchorsViolated: boolean
  evidenceCount: number
}

export interface RiskFlag {
  id: string
  severity: RiskSeverity
  domain: Domain | null
  title: string
  explanation: string
}

export interface NextPriority {
  capability: string
  domain: Domain
  questionId: string
  currentScore: number
  weight: number
  reason: string
}

export interface ScoringResult {
  domains: Record<Domain, DomainResult>
  enterpriseScore: number
  enterpriseMaturityLevel: MaturityLevel
  enterpriseConfidenceLow: number
  enterpriseConfidenceHigh: number
  topRiskFlags: RiskFlag[]
  nextPriorities: NextPriority[]
}

export interface AssessmentSession {
  id: string
  startedAt: string
  completedAt?: string
  answers: Answers
}
