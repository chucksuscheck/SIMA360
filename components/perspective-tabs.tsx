import Link from "next/link"

export type PerspectiveKey = "overview" | "strategy" | "governance" | "data" | "people" | "technology"

const perspectives: {
  key: PerspectiveKey
  label: string
  href: string
  dot: string
  activeBg: string
  activeText: string
}[] = [
  { key: "overview", label: "Overview", href: "/perspectives", dot: "#334155", activeBg: "#F1F5F9", activeText: "#0F172A" },
  { key: "strategy", label: "Strategy", href: "/sima-core/strategy", dot: "#2563EB", activeBg: "#EFF6FF", activeText: "#1E3A8A" },
  { key: "governance", label: "Governance", href: "/sima-core/governance", dot: "#4F46E5", activeBg: "#EEF2FF", activeText: "#312E81" },
  { key: "data", label: "Data", href: "/sima-core/data", dot: "#0891B2", activeBg: "#ECFEFF", activeText: "#164E63" },
  { key: "people", label: "People", href: "/sima-core/people", dot: "#0284C7", activeBg: "#F0F9FF", activeText: "#0C4A6E" },
  { key: "technology", label: "Technology", href: "/sima-core/technology", dot: "#475569", activeBg: "#F8FAFC", activeText: "#0F172A" },
]

export function PerspectiveTabs({ active }: { active: PerspectiveKey }) {
  return (
    <div className="border-b bg-white">
      <nav
        aria-label="Perspectives"
        className="container mx-auto px-4 flex items-center gap-1 overflow-x-auto whitespace-nowrap"
      >
        <span className="px-4 py-3 text-sm font-medium text-slate-400 shrink-0">Perspective:</span>
        {perspectives.map((p) => {
          const isActive = p.key === active
          return (
            <Link
              key={p.key}
              href={p.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2 px-4 py-3 text-sm rounded-t-md transition-colors shrink-0 ${
                isActive ? "font-medium" : "text-slate-500 hover:bg-slate-50"
              }`}
              style={isActive ? { backgroundColor: p.activeBg, color: p.activeText } : undefined}
            >
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: p.dot }}
              />
              {p.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
