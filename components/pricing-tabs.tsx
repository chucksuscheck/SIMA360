import Link from "next/link"

export type PricingKey = "overview" | "assess" | "equip" | "improve" | "ascend"

const tabs: {
  key: PricingKey
  label: string
  href: string
  dot: string
  activeBg: string
  activeText: string
}[] = [
  { key: "overview", label: "Overview", href: "/pricing", dot: "#334155", activeBg: "#F1F5F9", activeText: "#0F172A" },
  { key: "assess", label: "Assess", href: "/pricing/assess", dot: "#378ADD", activeBg: "#E6F1FB", activeText: "#042C53" },
  { key: "equip", label: "Equip", href: "/pricing/equip", dot: "#D85A30", activeBg: "#FAECE7", activeText: "#4A1B0C" },
  { key: "improve", label: "Improve", href: "/pricing/improve", dot: "#639922", activeBg: "#EAF3DE", activeText: "#173404" },
  { key: "ascend", label: "Learn", href: "/pricing/ascend", dot: "#1D9E75", activeBg: "#E1F5EE", activeText: "#04342C" },
]

export function PricingTabs({ active }: { active: PricingKey }) {
  return (
    <div className="border-b bg-white">
      <nav
        aria-label="Pricing"
        className="container mx-auto px-4 flex items-center gap-1 overflow-x-auto whitespace-nowrap"
      >
        <span className="px-4 py-3 text-sm font-medium text-slate-400 shrink-0">Pricing:</span>
        {tabs.map((tab) => {
          const isActive = tab.key === active
          return (
            <Link
              key={tab.key}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2 px-4 py-3 text-sm rounded-t-md transition-colors shrink-0 ${
                isActive ? "font-medium" : "text-slate-500 hover:bg-slate-50"
              }`}
              style={isActive ? { backgroundColor: tab.activeBg, color: tab.activeText } : undefined}
            >
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: tab.dot }}
              />
              {tab.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
