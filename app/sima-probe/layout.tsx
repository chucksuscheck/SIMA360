import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "SIMA-Probe — AI Maturity Assessment | SIMA360™",
  description:
    "SIMA-Probe measures organizational AI maturity across five perspectives and six maturity levels, producing diagnostic results that drive structured improvement.",
}

export default function SIMAProbeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
