import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Level 5 · Optimizing — AI Maturity Levels | SIMA360™",
  description:
    "Optimizing: the system is tested continuously, and what's learned changes what happens next. What this looks like across Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity/optimizing",
  },
}

import { MaturityLevelPage } from "@/components/maturity-level-page"

export default function OptimizingLevelPage() {
  return <MaturityLevelPage slug="optimizing" />
}
