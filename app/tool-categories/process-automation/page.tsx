import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Process Automation — AI Tool Categories | SIMA360™",
  description:
    "Process Automation: AI systems handling predefined, rule-based tasks and structured workflows. Rule-based logic, deterministic outcomes.",
  alternates: {
    canonical: "https://www.sima360.org/tool-categories/process-automation",
  },
}

import { ToolCategoryPage } from "@/components/tool-category-page"

export default function ProcessAutomationPage() {
  return <ToolCategoryPage slug="process-automation" />
}
