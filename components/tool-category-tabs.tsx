import Link from "next/link"

export type ToolCategoryKey =
  | "overview"
  | "baseline"
  | "business-assistance"
  | "process-automation"
  | "decision-optimization"
  | "autonomous-execution"

const categories: {
  key: ToolCategoryKey
  label: string
  href: string
  dot: string
  activeBg: string
  activeText: string
}[] = [
  { key: "overview", label: "Overview", href: "/tool-categories", dot: "#334155", activeBg: "#F1F5F9", activeText: "#0F172A" },
  { key: "baseline", label: "Baseline", href: "/tool-categories/baseline", dot: "#64748B", activeBg: "#F8FAFC", activeText: "#0F172A" },
  { key: "business-assistance", label: "Business Assistance", href: "/tool-categories/business-assistance", dot: "#2563EB", activeBg: "#EFF6FF", activeText: "#1E3A8A" },
  { key: "process-automation", label: "Process Automation", href: "/tool-categories/process-automation", dot: "#4F46E5", activeBg: "#EEF2FF", activeText: "#312E81" },
  { key: "decision-optimization", label: "Decision Optimization", href: "/tool-categories/decision-optimization", dot: "#0891B2", activeBg: "#ECFEFF", activeText: "#164E63" },
  { key: "autonomous-execution", label: "Autonomous Execution", href: "/tool-categories/autonomous-execution", dot: "#0284C7", activeBg: "#F0F9FF", activeText: "#0C4A6E" },
]

export function ToolCategoryTabs({ active }: { active: ToolCategoryKey }) {
  return (
    <div className="border-b bg-white">
      <nav
        aria-label="Tool categories"
        className="container mx-auto px-4 flex items-center gap-1 overflow-x-auto whitespace-nowrap"
      >
        {categories.map((c) => {
          const isActive = c.key === active
          return (
            <Link
              key={c.key}
              href={c.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2 px-4 py-3 text-sm rounded-t-md transition-colors shrink-0 ${
                isActive ? "font-medium" : "text-slate-500 hover:bg-slate-50"
              }`}
              style={isActive ? { backgroundColor: c.activeBg, color: c.activeText } : undefined}
            >
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: c.dot }}
              />
              {c.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
