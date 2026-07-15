import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Decision Optimization — AI Tool Categories | SIMA360™",
  description:
    "Decision Optimization: AI-enhanced strategy and foresight tools for complex decision-making. Predictive modeling, evidence-based recommendations.",
  alternates: {
    canonical: "https://www.sima360.org/tool-categories/decision-optimization",
  },
}

import { ToolCategoryPage } from "@/components/tool-category-page"

export default function DecisionOptimizationPage() {
  return <ToolCategoryPage slug="decision-optimization" />
}
