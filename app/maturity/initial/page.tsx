import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Level 1 · Initial — AI Maturity Levels | SIMA360™",
  description:
    "Initial: AI interest is real, but nothing yet coordinates it. Activity is possible; consistency isn't. What this looks like across Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity/initial",
  },
}

import { MaturityLevelPage } from "@/components/maturity-level-page"

export default function InitialLevelPage() {
  return <MaturityLevelPage slug="initial" />
}
