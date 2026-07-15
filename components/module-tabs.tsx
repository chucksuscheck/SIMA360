import Link from "next/link"

export type ModuleKey = "overview" | "probe" | "core" | "kit" | "flow" | "ascend"

const modules: {
  key: ModuleKey
  label: string
  href: string
  dot: string
  activeBg: string
  activeText: string
}[] = [
  { key: "overview", label: "Overview", href: "/framework", dot: "#334155", activeBg: "#F1F5F9", activeText: "#0F172A" },
  { key: "core", label: "Core", href: "/sima-core", dot: "#7F77DD", activeBg: "#EEEDFE", activeText: "#26215C" },
  { key: "probe", label: "Probe", href: "/sima-probe", dot: "#378ADD", activeBg: "#E6F1FB", activeText: "#042C53" },
  { key: "flow", label: "Flow", href: "/sima-flow", dot: "#639922", activeBg: "#EAF3DE", activeText: "#173404" },
  { key: "kit", label: "Kit", href: "/sima-kit", dot: "#D85A30", activeBg: "#FAECE7", activeText: "#4A1B0C" },
  { key: "ascend", label: "Ascend", href: "/sima-ascend", dot: "#1D9E75", activeBg: "#E1F5EE", activeText: "#04342C" },
]

export function ModuleTabs({ active }: { active: ModuleKey }) {
  return (
    <div className="border-b bg-white">
      <nav
        aria-label="Framework modules"
        className="container mx-auto px-4 flex items-center gap-1 overflow-x-auto whitespace-nowrap"
      >
        <span className="px-4 py-3 text-sm font-medium text-slate-400 shrink-0">Framework:</span>
        {modules.map((mod) => {
          const isActive = mod.key === active
          return (
            <Link
              key={mod.key}
              href={mod.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-2 px-4 py-3 text-sm rounded-t-md transition-colors shrink-0 ${
                isActive ? "font-medium" : "text-slate-500 hover:bg-slate-50"
              }`}
              style={isActive ? { backgroundColor: mod.activeBg, color: mod.activeText } : undefined}
            >
              <span
                aria-hidden="true"
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: mod.dot }}
              />
              {mod.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
