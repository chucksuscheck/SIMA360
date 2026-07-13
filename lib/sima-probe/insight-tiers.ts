// Insight is split into two paid tiers, differentiated by monthly price and execution
// cap. An "execution" is one full run through the probe's adaptive question flow and
// in-depth report generation. Cap resets at the start of each billing period.
//
// Pricing and caps live here as the single source of truth — both /pricing and
// /sima-probe read from this file rather than hardcoding the numbers separately.
export interface InsightTier {
  id: 'insight' | 'insight-pro'
  name: string
  monthlyPrice: number
  executionsPerMonth: number
}

export const INSIGHT_TIERS: InsightTier[] = [
  { id: 'insight', name: 'Insight', monthlyPrice: 99, executionsPerMonth: 5 },
  { id: 'insight-pro', name: 'Insight Pro', monthlyPrice: 199, executionsPerMonth: 15 },
]
