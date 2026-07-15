export interface ToolCategory {
  number: number
  slug: string
  name: string
  tagline: string
  shortDescription: string
  borderClass: string
  badgeClass: string
  purpose: string
  examples: string
  characteristics: string
}

export const toolCategories: ToolCategory[] = [
  {
    number: 1,
    slug: "baseline",
    name: "Baseline",
    tagline: "Foundational tier with passive AI tools requiring human initiation.",
    shortDescription:
      "Low autonomy, high guidance, static knowledge bases. The entry point — every organization already has some of these in place.",
    borderClass: "border-slate-400",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-300",
    purpose: "Learn basics, gather usage data",
    examples: "FAQs, internal wikis, chatbots",
    characteristics: "Low autonomy, high guidance, static knowledge bases",
  },
  {
    number: 2,
    slug: "business-assistance",
    name: "Business Assistance",
    tagline: "Tools designed to actively enhance human productivity and decision-making.",
    shortDescription:
      "Dynamic support with task-specific boundaries. The human stays in the loop, but the tool does real work alongside them.",
    borderClass: "border-blue-400",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    purpose: "Boost productivity and creativity",
    examples: "Writing assistants, coding copilots, research summarizers",
    characteristics: "Dynamic support, task-specific boundaries",
  },
  {
    number: 3,
    slug: "process-automation",
    name: "Process Automation",
    tagline: "AI systems handling predefined, rule-based tasks and structured workflows.",
    shortDescription:
      "Rule-based logic with deterministic outcomes. The workflow runs itself, but only within boundaries someone else defined.",
    borderClass: "border-indigo-400",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
    purpose: "Free resources, gain efficiency",
    examples: "RPA bots, automated schedulers, workflow orchestrators",
    characteristics: "Rule-based logic, deterministic outcomes",
  },
  {
    number: 4,
    slug: "decision-optimization",
    name: "Decision Optimization",
    tagline: "AI-enhanced strategy and foresight tools for complex decision-making.",
    shortDescription:
      "Predictive modeling and evidence-based recommendations. The tool starts shaping judgment calls, not just executing them.",
    borderClass: "border-cyan-500",
    badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-200",
    purpose: "Find insights, adapt to dynamic input",
    examples: "Dynamic pricing, route optimization, scenario planners",
    characteristics: "Predictive modeling, evidence-based recommendations",
  },
  {
    number: 5,
    slug: "autonomous-execution",
    name: "Autonomous Execution",
    tagline: "The most advanced AI systems, operating independently across the organization.",
    shortDescription:
      "Full autonomy, continuous learning, self-regulation. The highest-risk, highest-capability tier — and the one that demands the most governance.",
    borderClass: "border-sky-400",
    badgeClass: "bg-sky-100 text-sky-800 border-sky-200",
    purpose: "Drive autonomous execution safely",
    examples: "Self-managing infrastructure, autonomous vehicles, AI command centers",
    characteristics: "Full autonomy, continuous learning, self-regulation",
  },
]

export function getToolCategory(slug: string): ToolCategory | undefined {
  return toolCategories.find((c) => c.slug === slug)
}
