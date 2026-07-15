import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Baseline — AI Tool Categories | SIMA360™",
  description:
    "Baseline: foundational tier with passive AI tools requiring human initiation. Low autonomy, high guidance, static knowledge bases.",
  alternates: {
    canonical: "https://www.sima360.org/tool-categories/baseline",
  },
}

import { ToolCategoryPage } from "@/components/tool-category-page"

export default function BaselinePage() {
  return <ToolCategoryPage slug="baseline" />
}
