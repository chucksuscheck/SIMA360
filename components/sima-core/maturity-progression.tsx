import Link from "next/link"

export interface MaturityLevelEntry {
  level: number
  name: string
  color: string
  description: string
}

interface MaturityProgressionProps {
  perspectiveName: string
  levels: MaturityLevelEntry[]
  levelColorMap: Record<string, string>
  numberColorMap: Record<string, string>
  sectionBgClass: string
}

export function MaturityProgression({
  perspectiveName,
  levels,
  levelColorMap,
  numberColorMap,
  sectionBgClass,
}: MaturityProgressionProps) {
  return (
    <section className={`py-16 px-4 ${sectionBgClass}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Maturity Progression</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            What the {perspectiveName} perspective looks like at each of the six SIMA360 Maturity Levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className={`rounded-lg border-l-4 p-5 ${levelColorMap[lvl.color] ?? "border-l-slate-300 bg-slate-50"}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${numberColorMap[lvl.color] ?? "bg-slate-100"}`}
                >
                  {lvl.level}
                </div>
                <Link
                  href={`/maturity/${lvl.name.toLowerCase()}`}
                  className="font-semibold text-slate-900 hover:text-blue-600 hover:underline transition-colors"
                >
                  {lvl.name}
                </Link>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{lvl.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
