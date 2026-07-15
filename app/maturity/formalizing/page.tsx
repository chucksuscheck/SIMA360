import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Level 4 · Formalizing — AI Maturity Levels | SIMA360™",
  description:
    "Formalizing: structure holds under normal conditions, but the gap shows up under pressure. What this looks like across Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity/formalizing",
  },
}

import { MaturityLevelPage } from "@/components/maturity-level-page"

export default function FormalizingLevelPage() {
  return <MaturityLevelPage slug="formalizing" />
}
