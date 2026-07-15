import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Level 6 · Leading — AI Maturity Levels | SIMA360™",
  description:
    "Leading: improvement is built into how the organization operates, not applied to it periodically. What this looks like across Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity/leading",
  },
}

import { MaturityLevelPage } from "@/components/maturity-level-page"

export default function LeadingLevelPage() {
  return <MaturityLevelPage slug="leading" />
}
