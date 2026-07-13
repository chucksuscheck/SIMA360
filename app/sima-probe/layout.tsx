import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "SIMA-Probe — AI Maturity Assessment | SIMA360™",
  description:
    "SIMA-Probe evaluates organizational AI maturity across the five Perspectives through behavioral evidence — how decisions actually hold up under pressure, not policy on paper — revealing which perspective is the organization's current constraint.",
}

export default function SIMAProbeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
