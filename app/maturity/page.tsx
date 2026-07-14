import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Maturity Levels — SIMA360™",
  description:
    "The six SIMA360 maturity levels — Initial through Leading — and what each level looks like across the five organizational perspectives: Strategy, Governance, Data, People, and Technology.",
  alternates: {
    canonical: "https://www.sima360.org/maturity",
  },
}

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Shield, Database, Users, Cog } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const levels = [
  {
    number: 1,
    slug: "initial",
    name: "Initial",
    tagline: "AI interest is real, but nothing yet coordinates it.",
    accent: "slate",
    borderClass: "border-slate-400",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-300",
    numClass: "bg-slate-200 text-slate-800",
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
    accent: "blue",
    borderClass: "border-blue-400",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    numClass: "bg-blue-100 text-blue-800",
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
    accent: "indigo",
    borderClass: "border-indigo-400",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
    numClass: "bg-indigo-100 text-indigo-800",
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
    accent: "cyan",
    borderClass: "border-cyan-500",
    badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-200",
    numClass: "bg-cyan-100 text-cyan-800",
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
    accent: "sky",
    borderClass: "border-sky-400",
    badgeClass: "bg-sky-100 text-sky-800 border-sky-200",
    numClass: "bg-sky-100 text-sky-800",
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
    accent: "emerald",
    borderClass: "border-emerald-500",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    numClass: "bg-emerald-100 text-emerald-800",
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

const perspectiveMeta = [
  { name: "Strategy", icon: Target, href: "/sima-core/strategy", color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Governance", icon: Shield, href: "/sima-core/governance", color: "text-indigo-600", bg: "bg-indigo-50" },
  { name: "Data", icon: Database, href: "/sima-core/data", color: "text-cyan-600", bg: "bg-cyan-50" },
  { name: "People", icon: Users, href: "/sima-core/people", color: "text-sky-600", bg: "bg-sky-50" },
  { name: "Technology", icon: Cog, href: "/sima-core/technology", color: "text-slate-600", bg: "bg-slate-50" },
]

export default function MaturityPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
              <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The Six Maturity Levels
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            SIMA360 measures AI maturity across six progressive maturity levels — from Initial through Leading. Each level describes where an organization stands across all five perspectives: Strategy, Governance, Data, People, and Technology.
          </p>
          <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
            The goal is not to reach Level 6. The goal is to know where you are, understand what it means, and advance deliberately.
          </p>

          {/* Level jump nav */}
          <div className="flex flex-wrap justify-center gap-2">
            {levels.map((lvl) => (
              <a
                key={lvl.slug}
                href={`#${lvl.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-medium text-slate-700 hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${lvl.numClass}`}>
                  {lvl.number}
                </span>
                {lvl.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Level sections */}
      {levels.map((lvl, i) => (
        <section
          key={lvl.slug}
          id={lvl.slug}
          className={`scroll-mt-20 py-20 px-4 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="container mx-auto max-w-5xl">

            {/* Level header */}
            <div className={`border-l-4 ${lvl.borderClass} pl-6 mb-12`}>
              <div className="flex items-center gap-3 mb-2">
                <span className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${lvl.numClass}`}>
                  {lvl.number}
                </span>
                <Badge variant="outline" className={lvl.badgeClass}>
                  Level {lvl.number}
                </Badge>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">{lvl.name}</h2>
              <p className="text-lg text-slate-500 italic">{lvl.tagline}</p>
            </div>

            {/* Overview */}
            <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl">
              {lvl.overview}
            </p>

            {/* Perspective breakdown */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Across the Five Perspectives at Level {lvl.number}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {perspectiveMeta.map((d) => {
                  const Icon = d.icon
                  return (
                    <div key={d.name} className={`rounded-lg p-5 border border-slate-200 ${d.bg}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className={`w-4 h-4 ${d.color}`} />
                        <Link
                          href={d.href}
                          className={`text-sm font-semibold ${d.color} hover:underline`}
                        >
                          {d.name}
                        </Link>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {lvl.perspectives[d.name as keyof typeof lvl.perspectives]}
                      </p>
                    </div>
                  )
                })}

                {/* What to do next card */}
                {lvl.number < 6 && (
                  <div className="rounded-lg p-5 border border-dashed border-slate-300 bg-white flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">Moving Forward</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Advancing from Level {lvl.number} to Level {lvl.number + 1} requires closing gaps across all five perspectives, not just the most visible ones. SIMA-Probe identifies where you stand; SIMA-Flow structures how you advance.
                      </p>
                    </div>
                    <Link
                      href={`#${levels[i + 1].slug}`}
                      className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
                    >
                      See Level {lvl.number + 1}: {levels[i + 1].name} <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Assess CTA for each level */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
              <Link
                href="/sima-probe/assessment"
                className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
              >
                Measure your level with SIMA-Probe™ <ArrowRight className="w-3 h-3" />
              </Link>
              {lvl.number < 6 && (
                <>
                  <span className="text-slate-300">|</span>
                  <Link
                    href="/sima-flow"
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
                  >
                    Plan your advancement with SIMA-Flow™ <ArrowRight className="w-3 h-3" />
                  </Link>
                </>
              )}
            </div>

          </div>
        </section>
      ))}

      {/* Bottom jump nav */}
      <section className="py-12 px-4 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto text-center">
          <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-widest">Jump to a level</p>
          <div className="flex flex-wrap justify-center gap-2">
            {levels.map((lvl) => (
              <a
                key={lvl.slug}
                href={`#${lvl.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-sm font-medium text-slate-700 hover:border-slate-500 hover:text-slate-900 transition-colors"
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${lvl.numClass}`}>
                  {lvl.number}
                </span>
                {lvl.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Find Out Where Your Organization Stands</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA-Probe measures your current maturity level across all five perspectives and tells you exactly what to address next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe/assessment">
                Start Assessment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
