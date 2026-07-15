export type MaturityStatus = "Safe" | "Risky" | "Avoid"

export interface MaturityRelationshipEntry {
  level: string
  status: MaturityStatus
}

export interface ToolExample {
  name: string
  description: string
}

export interface ToolCategory {
  number: number
  slug: string
  name: string
  tagline: string
  shortDescription: string
  borderClass: string
  badgeClass: string
  bgGradientClass: string
  purpose: string
  examples: ToolExample[]
  characteristics: string
  maturityRelationship: MaturityRelationshipEntry[]
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
    bgGradientClass: "bg-gradient-to-br from-slate-50 to-gray-100",
    purpose: "Learn basics, gather usage data",
    examples: [
      {
        name: "Chatbots",
        description:
          "Conversational interfaces over structured knowledge bases that route users to predefined responses. Common in IT support, HR FAQs, and customer service triage.",
      },
      {
        name: "Internal wikis and FAQs",
        description: "Static, searchable references that don't require conversation, just structured lookup.",
      },
      {
        name: "Static query-based support",
        description: "Decision-tree-driven help systems built for a single, well-defined task.",
      },
    ],
    characteristics: "Low autonomy, high guidance, static knowledge bases",
    maturityRelationship: [
      { level: "Initial", status: "Safe" },
      { level: "Exploring", status: "Safe" },
      { level: "Applying", status: "Safe" },
      { level: "Formalizing", status: "Safe" },
      { level: "Optimizing", status: "Safe" },
      { level: "Leading", status: "Safe" },
    ],
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
    bgGradientClass: "bg-gradient-to-br from-blue-50 to-sky-50",
    purpose: "Boost productivity and creativity",
    examples: [
      {
        name: "Co-editors",
        description: "AI that helps write emails, documents, or reports alongside a person, rather than for them.",
      },
      {
        name: "AI pair programming assistants",
        description: "Tools like GitHub Copilot that suggest code as a developer writes.",
      },
      {
        name: "Research summarizers and slide builders",
        description: "Tools that condense source material or draft first-pass presentations.",
      },
      {
        name: "Meeting note transcribers and classifiers",
        description: "Tools that capture and organize spoken discussion into structured notes.",
      },
    ],
    characteristics: "Dynamic support, task-specific boundaries",
    maturityRelationship: [
      { level: "Initial", status: "Risky" },
      { level: "Exploring", status: "Safe" },
      { level: "Applying", status: "Safe" },
      { level: "Formalizing", status: "Safe" },
      { level: "Optimizing", status: "Safe" },
      { level: "Leading", status: "Safe" },
    ],
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
    bgGradientClass: "bg-gradient-to-br from-indigo-50 to-purple-50",
    purpose: "Free resources, gain efficiency",
    examples: [
      {
        name: "Task Automator",
        description:
          "Performs a single, predefined, rules-based task with minimal variation, such as an RPA script, scheduling bot, or data entry tool.",
      },
      {
        name: "Process Automator",
        description:
          "Automates a multi-step workflow that includes some logic-based branching, such as HR onboarding or procurement approval.",
      },
      {
        name: "Workflow orchestrators",
        description: "Coordinate automation across systems and handoffs, not just a single task.",
      },
    ],
    characteristics: "Rule-based logic, deterministic outcomes",
    maturityRelationship: [
      { level: "Initial", status: "Avoid" },
      { level: "Exploring", status: "Risky" },
      { level: "Applying", status: "Safe" },
      { level: "Formalizing", status: "Safe" },
      { level: "Optimizing", status: "Safe" },
      { level: "Leading", status: "Safe" },
    ],
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
    bgGradientClass: "bg-gradient-to-br from-cyan-50 to-teal-50",
    purpose: "Find insights, adapt to dynamic input",
    examples: [
      {
        name: "Adaptive Executor",
        description:
          "Executes decisions and adjusts its own behavior based on outcomes, used in dynamic pricing, intelligent routing, and personalized recommendations.",
      },
      {
        name: "Strategic Partner",
        description:
          "Provides modeling, projections, and scenario analysis to support (not replace) executive decision-making, used in market planning and simulation-driven strategy work.",
      },
      {
        name: "Route and resource optimization tools",
        description: "Apply predictive modeling to logistics and resource allocation problems.",
      },
    ],
    characteristics: "Predictive modeling, evidence-based recommendations",
    maturityRelationship: [
      { level: "Initial", status: "Avoid" },
      { level: "Exploring", status: "Avoid" },
      { level: "Applying", status: "Risky" },
      { level: "Formalizing", status: "Safe" },
      { level: "Optimizing", status: "Safe" },
      { level: "Leading", status: "Safe" },
    ],
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
    bgGradientClass: "bg-gradient-to-br from-sky-50 to-blue-50",
    purpose: "Drive autonomous execution safely",
    examples: [
      {
        name: "Autonomous Manager",
        description:
          "Manages an operational function without ongoing human intervention, such as system health monitoring or AI-managed data centers.",
      },
      {
        name: "Independent Actor",
        description:
          "Initiates and acts on decisions across domains with the least human oversight of any category, such as fully autonomous vehicles or AI command centers.",
      },
      {
        name: "Mission-critical automated infrastructure",
        description:
          "Includes cyber defense systems and fully autonomous warehouse or factory operations, where failure has immediate real-world consequences.",
      },
    ],
    characteristics: "Full autonomy, continuous learning, self-regulation",
    maturityRelationship: [
      { level: "Initial", status: "Avoid" },
      { level: "Exploring", status: "Avoid" },
      { level: "Applying", status: "Avoid" },
      { level: "Formalizing", status: "Risky" },
      { level: "Optimizing", status: "Safe" },
      { level: "Leading", status: "Safe" },
    ],
  },
]

export function getToolCategory(slug: string): ToolCategory | undefined {
  return toolCategories.find((c) => c.slug === slug)
}
