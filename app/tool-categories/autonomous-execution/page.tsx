import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Autonomous Execution — AI Tool Categories | SIMA360™",
  description:
    "Autonomous Execution: the most advanced AI systems, operating independently across the business. Full autonomy, continuous learning, self-regulation.",
  alternates: {
    canonical: "https://www.sima360.org/tool-categories/autonomous-execution",
  },
}

import { ToolCategoryPage } from "@/components/tool-category-page"

export default function AutonomousExecutionPage() {
  return <ToolCategoryPage slug="autonomous-execution" />
}
