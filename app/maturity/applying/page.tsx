import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Level 3 · Applying — AI Maturity Levels | SIMA360™",
  description:
    "Applying: individual AI efforts work, but they don't generalize. What this looks like across Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity/applying",
  },
}

import { MaturityLevelPage } from "@/components/maturity-level-page"

export default function ApplyingLevelPage() {
  return <MaturityLevelPage slug="applying" />
}
