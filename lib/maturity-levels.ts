export interface MaturityLevel {
  number: number
  slug: string
  name: string
  tagline: string
  shortDescription: string
  borderClass: string
  badgeClass: string
  numClass: string
  bgGradientClass: string
  overview: string
  perspectives: {
    Strategy: string
    Governance: string
    Data: string
    People: string
    Technology: string
  }
}

export const maturityLevels: MaturityLevel[] = [
  {
    number: 1,
    slug: "initial",
    name: "Initial",
    tagline: "AI interest is real, but nothing yet coordinates it.",
    shortDescription:
      "Every organization begins here. Activity is possible; consistency isn't. Success isn't a strategy document — it's narrowing a vague sense that AI matters down to the small number of specific conditions worth examining first.",
    borderClass: "border-slate-400",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-300",
    numClass: "bg-slate-200 text-slate-800",
    bgGradientClass: "bg-gradient-to-br from-slate-50 to-gray-100",
    overview:
      "Every organization begins here. Activity is possible; consistency isn't. This isn't revealed by how mature the organization looks on paper — it's revealed by behavior: pull three senior leaders aside separately and ask which AI-influenced decisions matter most right now. At Initial, you get opportunity or competitive pressure, not a specific decision. Success here isn't a strategy document, a policy, or a training program. It's narrowing a vague sense that AI matters down to the small number of specific conditions worth examining first.",
    perspectives: {
      Strategy:
        "Strategy hasn't formed enough to guide decisions. Leaders speak in terms of opportunity or competitive pressure, but nothing yet points at a specific decision. Success here isn't a strategy document — it's narrowing general awareness down to a small number of candidate decisions worth examining.",
      Governance:
        "Governance hasn't meaningfully formed around AI. General risk or compliance practices may exist, but haven't been translated into AI's specific decision conditions. Responsibility is assumed rather than assigned — no one can clearly say who owns an AI-influenced decision before something goes wrong. Success here is establishing that AI governance means decision control, not technology approval.",
      Data:
        "Data is present but not yet a managed decision asset. Teams can't reliably say what data would be needed to support a given decision. The work here is narrow: identify the small set of data elements that matter most to the first decisions the organization wants to improve.",
      People:
        "People don't yet share a frame for AI's role in their work — they can't explain what it's supposed to change, what stays their responsibility, or where judgment is expected. Basic role clarity has to exist before consistent use is realistic.",
      Technology:
        "Technology hasn't formed into a real AI operating environment — tools get tested informally with no stable pattern of organizational use. There's no coherent system to depend on yet. The work is identifying where AI use should begin and what basic conditions need to exist first.",
    },
  },
  {
    number: 2,
    slug: "exploring",
    name: "Exploring",
    tagline: "Multiple efforts are underway, but nothing connects them.",
    shortDescription:
      "Multiple efforts are underway, but they're disconnected — each built on its own assumptions. The task is narrowing to the few decisions that actually matter and establishing the ownership and shared definitions that let effort start accumulating learning.",
    borderClass: "border-blue-400",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    numClass: "bg-blue-100 text-blue-800",
    bgGradientClass: "bg-gradient-to-br from-blue-50 to-sky-50",
    overview:
      "Multiple efforts are underway, but they're disconnected — each built on its own assumptions, with no shared standard connecting them. Pull three senior leaders aside separately at this level and you'll get AI initiatives named, but materially different explanations of which decisions matter or why. The task isn't more experimentation. It's narrowing to the few decisions that actually matter and establishing the ownership and shared definitions that let those efforts start accumulating learning instead of just activity.",
    perspectives: {
      Strategy:
        "Strategy is conceptual. Leaders agree AI matters but describe different objectives when asked directly. Initiatives are driven by tools and enthusiasm rather than defined decision problems, so work spreads across many places without learning accumulating anywhere. The task is narrowing to the few decisions that actually matter.",
      Governance:
        "Governance is situational. Ownership may exist on paper but isn't exercised consistently, and similar situations produce different outcomes depending on who's involved. What has to be established before the next Maturity Level is repeatable ownership — knowing in advance who owns what.",
      Data:
        "Data exists but isn't a reliable decision asset — fragmented across systems, definitions varying by team, reconciliation happening informally. If two teams answer the same question differently and can't trace why, the organization is still exploring. What's needed is shared definitions for the handful of critical elements that support key decisions, not a comprehensive data strategy.",
      People:
        "Expectations are unclear and behavior reflects it. Some people lean heavily on AI outputs, others ignore them, and neither approach is grounded in shared guidance. What has to be established isn't a sophisticated interpretation standard — just basic expectations for when AI should be used, and how.",
      Technology:
        "Technology is fragmented and isolated in small pilots. Change is easy here, but not in a useful way — if a model is replaced, very little breaks, because very little is actually supported yet. What needs building is stable integration points where behavior starts to matter.",
    },
  },
  {
    number: 3,
    slug: "applying",
    name: "Applying",
    tagline: "Individual efforts work, but they don't generalize.",
    shortDescription:
      "Individual efforts work and can be defended on their own terms, but they don't generalize past the context that produced them. The organization is productive in ways that don't add up — the constraint is the inability to stop work that isn't moving the organization forward as a system.",
    borderClass: "border-indigo-400",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
    numClass: "bg-indigo-100 text-indigo-800",
    bgGradientClass: "bg-gradient-to-br from-indigo-50 to-purple-50",
    overview:
      "Individual efforts work and can be defended on their own terms, but they don't generalize past the specific context that produced them. Teams can explain their own use cases but can't explain enterprise-level prioritization or trade-offs. The organization is productive in ways that don't add up — success is opportunism, not architecture, and the constraint at this level is the inability to stop work that isn't actually moving the organization forward as a system.",
    perspectives: {
      Strategy:
        "Individual teams can explain what they're improving and show measurable gains — but there's no shared logic for prioritizing across teams, so everything looks equally worth pursuing. The organization is productive in ways that don't add up. The constraint is the inability to stop work.",
      Governance:
        "Governance exists in parts of the organization — some decisions are well-controlled, others aren't, and similar decisions get handled differently across teams. The work here is extension: making consistent what's already working in one place and applying the same standard elsewhere.",
      Data:
        "Data supports specific use cases, but the improvements are context-bound — dependent on local assumptions that don't generalize. Take a data-driven decision that works in one area and try it elsewhere: if performance degrades, the system is still applying rather than scaling. What needs identifying is which elements are portable across decisions and what standardizing them requires.",
      People:
        "Usage shows real value, but interpretation stays local — two experienced people can act on the same output differently and both believe they're right. The inconsistency hides because the organization attributes it to case complexity instead of missing standards.",
      Technology:
        "Technology supports real workflows, which creates value and dependency at the same time. The test is what happens when a component changes: if a model update or workflow adjustment causes unexpected downstream issues, the system is still applying — stable until it's touched.",
    },
  },
  {
    number: 4,
    slug: "formalizing",
    name: "Formalizing",
    tagline: "Structure holds under normal conditions — the gap shows up under pressure.",
    shortDescription:
      "Structure exists and holds under normal conditions. The gap shows up specifically when something is contested, urgent, or the world changes underneath it — the documentation looks complete, but hasn't been pressure-tested.",
    borderClass: "border-cyan-500",
    badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-200",
    numClass: "bg-cyan-100 text-cyan-800",
    bgGradientClass: "bg-gradient-to-br from-cyan-50 to-teal-50",
    overview:
      "Structure exists and holds under normal conditions. The gap shows up specifically when something is contested, urgent, or the world changes underneath it. This is the level most self-assessments mistake for a finish line, because the documentation looks complete — roles, responsibilities, policies, training records. The real test isn't the paperwork. It's tracing a recent difficult decision end to end. If that trace depends on who was in the room, the organization is still Formalizing no matter how thorough it looks on paper.",
    perspectives: {
      Strategy:
        "Strategy is explicit and aligned — priority decisions are identified and connected to outcomes. The weakness shows up when evidence contradicts the plan: divergence gets treated as an execution problem to close through effort, not a signal to reconsider the framing. Strategy is being followed. It isn't yet being tested.",
      Governance:
        "Governance looks complete — roles, responsibilities, and escalation paths are defined and followed under normal conditions. The real test isn't the documentation. It's finding a recent decision that was genuinely difficult and tracing how it was actually resolved. If that trace depends on who was in the room, governance is still Formalizing no matter how thorough the paperwork looks.",
      Data:
        "Definitions are standardized and governed across the organization — which creates a specific new blind spot. The system is stable under known conditions but can't tell a quality failure from representational drift: data that passes every check while no longer representing how the business actually operates. If the organization can't explain that difference, it's still Formalizing.",
      People:
        "The problem looks solved: training exists, guidance is documented, people know how they're supposed to interact with the system. What completion rates can't show is what happens when stakes are higher or time is short — under pressure, people revert to personal judgment, and the variation training was supposed to eliminate comes back.",
      Technology:
        "Technology is structured and integrated, but the limitation is inflexibility rather than instability. Changes are possible but expensive, slow, or require coordination across components. It's stable in a way that resists improvement.",
    },
  },
  {
    number: 5,
    slug: "optimizing",
    name: "Optimizing",
    tagline: "The system is tested continuously, and what's learned changes what happens next.",
    shortDescription:
      "The system is tested against outcomes continuously, and what's learned changes what happens next, not just what gets documented. The challenge is resisting expansion driven by capability rather than readiness.",
    borderClass: "border-sky-400",
    badgeClass: "bg-sky-100 text-sky-800 border-sky-200",
    numClass: "bg-sky-100 text-sky-800",
    bgGradientClass: "bg-gradient-to-br from-sky-50 to-blue-50",
    overview:
      "The system is tested against outcomes continuously, and what's learned changes what happens next, not just what gets documented. Movement becomes selective — the organization advances where the system proves reliable and holds back where it doesn't. The challenge at this level isn't building more structure. It's resisting expansion driven by capability rather than readiness, and sustaining consistency as the system reaches new users, new use cases, and new decisions.",
    perspectives: {
      Strategy:
        "Strategy is continuously tested against outcomes, and what's learned changes what happens next. Movement becomes selective — the organization advances where the system proves reliable and holds back where it doesn't. The challenge is resisting expansion driven by capability rather than readiness.",
      Governance:
        "Governance holds regardless of context. Ownership is exercised predictably, escalation is clear, and overrides get examined rather than hidden. The constraint here is maintaining that consistency as AI capability expands.",
      Data:
        "Feedback loops are operational rather than theoretical. When a decision fails, the organization can trace whether the cause was completeness, timeliness, relevance, or drift, and correct it in a way that improves future performance. The temptation at this Maturity Level is expanding faster than feedback can keep up.",
      People:
        "Interpretation is consistent and explainable. People understand why the guidance exists and apply it similarly across contexts, and when two people disagree, the organization can explain why. The difficulty is sustaining that as the system reaches new users and new use cases.",
      Technology:
        "The system is designed to evolve — dependencies are understood and changes can be introduced without destabilizing decisions. The organization can predict the impact of a change, execute it, and verify the outcome with minimal disruption. The failure to watch for is overextension: adding complexity faster than it can be governed.",
    },
  },
  {
    number: 6,
    slug: "leading",
    name: "Leading",
    tagline: "Improvement is built into how the organization operates, not applied to it periodically.",
    shortDescription:
      "Improvement is built into how the organization operates day to day, rather than something applied to it periodically. This isn't the final destination — it's the beginning of stewardship.",
    borderClass: "border-emerald-500",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    numClass: "bg-emerald-100 text-emerald-800",
    bgGradientClass: "bg-gradient-to-br from-emerald-50 to-teal-50",
    overview:
      "Improvement is built into how the perspective operates day to day, rather than something applied to it periodically. Strategy isn't separate from operations — it's the mechanism decisions improve through. Governance evolves deliberately alongside the systems it governs, anticipating new risks before they surface as failures. The question at this level is no longer whether the system holds. It's whether it's still governing, learning from, and improving the right things as conditions keep changing. This isn't the final destination. It's the beginning of stewardship.",
    perspectives: {
      Strategy:
        "Strategy isn't separate from operations — it's the mechanism decisions improve through. The organization anticipates where its approach will fail and adjusts before degradation shows up. The question shifts from whether the strategy is being followed to whether it's still correct.",
      Governance:
        "Governance evolves deliberately alongside the systems it governs, anticipating new risks before they surface as failures. The question is no longer whether governance holds — it's whether it's still governing the right things as conditions change.",
      Data:
        "Data strategy is tied directly to decision strategy — the organization anticipates where current data will fall short before a new decision gets introduced, rather than waiting for the failure. The failure mode here is overextension: sophistication that isn't yet tied to any decision the organization is actually trying to improve.",
      People:
        "Interpretation itself becomes a source of improvement — differences in how outputs get applied are analyzed and fed back into guidance and training. The failure to watch for is complacency: assuming today's alignment holds as complexity increases.",
      Technology:
        "Technology is deliberately structured to support ongoing change, managing dependency as a first-class concern. The failure mode here runs the other way: building for flexibility that isn't yet needed.",
    },
  },
]

export function getMaturityLevel(slug: string): MaturityLevel | undefined {
  return maturityLevels.find((lvl) => lvl.slug === slug)
}
