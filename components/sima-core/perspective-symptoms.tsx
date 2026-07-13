import { AlertCircle } from "lucide-react"

export interface SymptomEntry {
  symptom: string
  explanation: string
}

interface PerspectiveSymptomsProps {
  perspectiveName: string
  items: SymptomEntry[]
}

export function PerspectiveSymptoms({ perspectiveName, items }: PerspectiveSymptomsProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
          Symptoms of Failing {perspectiveName}
        </h2>
        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
          {perspectiveName} rarely fails all at once. These are the signals the book points to — each one tracing
          back to a specific component.
        </p>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-slate-900 mb-1">{item.symptom}</p>
                <p className="text-sm text-slate-600">{item.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
