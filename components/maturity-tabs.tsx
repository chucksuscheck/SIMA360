import Link from "next/link"

export type MaturityLevelKey =
  | "overview"
  | "initial"
  | "exploring"
  | "applying"
  | "formalizing"
  | "optimizing"
  | "leading"

const levels: {
  key: MaturityLevelKey
  label: string
  href: string
  dot: string
  activeBg: string
  activeText: string
}[] = [
  { key: "overview", label: "Overview", href: "/maturity", dot: "#334155", activeBg: "#F1F5F9", activeText: "#0F172A" },
  { key: "initial", label: "Initial", href: "/maturity/initial", dot: "#64748B", activeBg: "#F8FAFC", activeText: "#0F172A" },
  { key: "exploring", label: "Exploring", href: "/maturity/exploring", dot: "#2563EB", activeBg: "#EFF6FF", activeText: "#1E3A8A" },
  { key: "applying", label: "Applying", href: "/maturity/applying", dot: "#4F46E5", activeBg: "#EEF2FF", activeText: "#312E81" },
  { key: "formalizing", label: "Formalizing", href: "/maturity/formalizing", dot: "#0891B2", activeBg: "#ECFEFF", activeText: "#164E63" },
  { key: "optimizing", label: "Optimizing", href: "/maturity/optimizing", dot: "#0284C7", activeBg: "#F0F9FF", activeText: "#0C4A6E" },
  { key: "leading", label: "Leading", href: "/maturity/leading", dot: "#059669", activeBg: "#ECFDF5", activeText: "#064E3B" },
]

export function MaturityTabs({ active }: { active: MaturityLevelKey }) {
  return (
    <div className="border-b bg-white">
      <nav
        aria-label="Maturity levels"
        className="container mx-auto px-4 flex items-center gap-1 overflow-x-auto whitespace-nowrap"
      >
        <span className="px-4 py-3 text-sm font-medium text-slate-400 shrink-0">Maturity Level:</span>
        {levels.map((lvl) => {
          const isActive = lvl.key === active
          return (
            <Link
              key={lvl.key}
              href={lvl.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2 px-4 py-3 text-sm rounded-t-md transition-colors shrink-0 ${
                isActive ? "font-medium" : "text-slate-500 hover:bg-slate-50"
              }`}
              style={isActive ? { backgroundColor: lvl.activeBg, color: lvl.activeText } : undefined}
            >
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: lvl.dot }}
              />
              {lvl.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
