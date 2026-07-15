import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Assistance — AI Tool Categories | SIMA360™",
  description:
    "Business Assistance: tools designed to actively enhance human productivity and decision-making. Dynamic support with task-specific boundaries.",
  alternates: {
    canonical: "https://www.sima360.org/tool-categories/business-assistance",
  },
}

import { ToolCategoryPage } from "@/components/tool-category-page"

export default function BusinessAssistancePage() {
  return <ToolCategoryPage slug="business-assistance" />
}
