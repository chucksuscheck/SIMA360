import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Level 2 · Exploring — AI Maturity Levels | SIMA360™",
  description:
    "Exploring: multiple AI efforts are underway, but nothing connects them. What this looks like across Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity/exploring",
  },
}

import { MaturityLevelPage } from "@/components/maturity-level-page"

export default function ExploringLevelPage() {
  return <MaturityLevelPage slug="exploring" />
}
