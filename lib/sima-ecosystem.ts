// Canonical one-sentence descriptions for the five SIMA360 components.
// Shared so the framework gets described the same way everywhere it's
// summarized (homepage, About page, etc.) instead of drifting per page.
export interface EcosystemComponent {
  slug: "sima-core" | "sima-probe" | "sima-flow" | "sima-kit" | "sima-ascend"
  name: string
  href: string
  description: string
}

export const ECOSYSTEM_COMPONENTS: EcosystemComponent[] = [
  {
    slug: "sima-core",
    name: "SIMA-Core™",
    href: "/sima-core",
    description:
      "The vocabulary layer of the framework: three core models — Strategic Perspectives, AI Maturity Levels, and AI Tool Categories — that every other component operates within.",
  },
  {
    slug: "sima-probe",
    name: "SIMA-Probe™",
    href: "/sima-probe",
    description:
      "SIMA360's maturity evaluation instrument — behavioral evidence of how decisions hold up under pressure, not a structural checklist. The assessment entry point for the ecosystem.",
  },
  {
    slug: "sima-flow",
    name: "SIMA-Flow™",
    href: "/sima-flow",
    description:
      "The execution engine — the macro Core Cycle for organizational advancement and the FLAI cycle for disciplined, project-level learning within it.",
  },
  {
    slug: "sima-kit",
    name: "SIMA-Kit™",
    href: "/sima-kit",
    description:
      "The operational resource layer — level-specific guidance that turns a SIMA-Probe assessment into the structured improvement work SIMA-Flow's cycles carry out.",
  },
  {
    slug: "sima-ascend",
    name: "SIMA-Ascend™",
    href: "/sima-ascend",
    description:
      "Builds the practitioner capability the framework requires — through shared understanding and applied judgment, not training completion alone.",
  },
]
