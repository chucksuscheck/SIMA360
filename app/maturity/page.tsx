import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Maturity Levels — SIMA360™",
  description:
    "The six SIMA360 capability levels — Initial through Leading — and what each level looks like across the five organizational domains: Strategy, Governance, Data, People, and Technology.",
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
    tagline: "AI is on the radar. It is not yet a system.",
    accent: "slate",
    borderClass: "border-slate-400",
    badgeClass: "bg-slate-100 text-slate-800 border-slate-300",
    numClass: "bg-slate-200 text-slate-800",
    overview:
      "Organizations at the Initial level are at the starting point of every AI adoption journey. AI is being considered — driven by industry pressure, executive curiosity, or a specific use case that surfaced — but it has not yet been approached in a structured way. Initiatives, if any exist, are isolated experiments. There are no formal frameworks, no governance structures, and no shared understanding of what AI maturity means. This is not a failure state. Every organization begins here. The question is what it will take to advance.",
    domains: {
      Strategy:
        "No formal AI strategy exists. AI decisions are ad-hoc. The technology is viewed as a point solution — something IT evaluates — rather than a strategic capability that leadership owns. Individual departments may pursue AI independently of any organizational direction.",
      Governance:
        "No AI governance structure exists. Tools are adopted without formal review. Ethical risks are unaddressed. Compliance obligations related to AI are not tracked. When something goes wrong, accountability is contested rather than pre-assigned.",
      Data:
        "Data is siloed across departments and systems. Quality is inconsistent and undocumented. There are no data governance policies. AI projects that require reliable data either struggle to get it or proceed on data that cannot be trusted.",
      People:
        "AI is viewed as a technology problem, not a people one. There are no training programs, no AI literacy initiatives, and no structured talent strategy. A few individuals may be self-educating. The organization as a whole is unprepared to work alongside AI systems.",
      Technology:
        "No AI-specific infrastructure exists. Tools are used ad-hoc — often as consumer or departmental applications chosen without formal evaluation. Security implications of AI tools are not reviewed. There is no model or pipeline lifecycle management of any kind.",
    },
  },
  {
    number: 2,
    slug: "exploring",
    name: "Exploring",
    tagline: "AI is being investigated. Structure is still missing.",
    accent: "blue",
    borderClass: "border-blue-400",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-200",
    numClass: "bg-blue-100 text-blue-800",
    overview:
      "At the Exploring level, AI has moved from passive awareness to active investigation. Teams are experimenting — running pilots, evaluating tools, building foundational literacy. These efforts are real and valuable, but they remain largely disconnected from each other and from organizational strategy. Champions have emerged, but they are working without a shared system. The risk at this level is that exploration without structure leads to redundant work, inconsistent results, and eventual disillusionment when early experiments don't scale.",
    domains: {
      Strategy:
        "Strategic discussion is beginning. A few champions are advocating for AI. There is no shared prioritization framework and no formal process for evaluating which AI investments make sense. Strategy exists in conversations and presentations, not in documents that govern decisions.",
      Governance:
        "Awareness of governance needs is emerging. Informal discussions about AI risk are occurring but produce no formal policies. Compliance questions are being raised without consistent answers. A few individuals are concerned; the organization is not yet structured to act on those concerns.",
      Data:
        "Awareness of data quality issues is growing. Some teams are cleaning data for specific projects. There is no formal governance, no stewardship roles, and no shared standard for what reliable data means across the organization.",
      People:
        "Ad-hoc learning is occurring. Internal champions are advocating for AI literacy but without organizational backing. Some individuals have completed self-directed training. There is no structured program, no defined competency model, and no investment in change management.",
      Technology:
        "Teams are experimenting with AI tools using available cloud resources. There is no standardization across teams. Security review of AI tool usage is minimal. Teams are learning what AI infrastructure actually requires through trial and error rather than design.",
    },
  },
  {
    number: 3,
    slug: "applying",
    name: "Applying",
    tagline: "AI is producing results. They aren't reproducible yet.",
    accent: "indigo",
    borderClass: "border-indigo-400",
    badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-200",
    numClass: "bg-indigo-100 text-indigo-800",
    overview:
      "The Applying level marks the first genuine operational use of AI within the organization. Specific use cases are in production and delivering value in at least some functions. The challenge is that this value is partial and fragile. Projects succeed where the right people and conditions came together, not because the organization has built a repeatable capability. Opportunism — not architecture — is driving outcomes. Progress depends on specific individuals rather than on organizational systems that would produce results consistently.",
    domains: {
      Strategy:
        "An informal AI roadmap exists. Some alignment to business goals is present for specific projects, but it is project-level, not organizational. Investment planning and ROI tracking are absent or inconsistent. Success is recognized when it happens but not designed for in advance.",
      Governance:
        "Some governance policies exist for specific AI use cases. Compliance efforts are a patchwork — thorough for high-visibility projects, absent for others. Risk is managed reactively. Documentation is incomplete and inconsistent across the portfolio.",
      Data:
        "Data is made available and improved for targeted AI use cases. Quality is better for project-specific datasets but remains inconsistent across the organization. Data integration is partial — some silos have been addressed, others haven't been touched.",
      People:
        "Training exists for specific roles involved in AI projects. Early cross-functional collaboration is beginning. Responsible AI has not yet entered training curricula. Change management is acknowledged as a need but is not resourced or structured.",
      Technology:
        "Specific tools are selected for pilot projects. Some infrastructure investment is underway. Basic security considerations are being addressed for high-visibility use cases. MLOps practices are nascent or absent — models are deployed but not managed as living systems.",
    },
  },
  {
    number: 4,
    slug: "formalizing",
    name: "Formalizing",
    tagline: "AI capability is becoming institutional, not individual.",
    accent: "cyan",
    borderClass: "border-cyan-500",
    badgeClass: "bg-cyan-100 text-cyan-800 border-cyan-200",
    numClass: "bg-cyan-100 text-cyan-800",
    overview:
      "At the Formalizing level, the organization makes the critical shift from individual AI successes to institutional AI capability. Governance frameworks are documented and enforced. Data management practices are intentional. Training programs are structured. Technology stacks are selected and governed. The hallmark of this level is repeatability — the ability to initiate an AI project and expect a predictable process, not just a hoped-for outcome. Leadership has committed to AI as an organizational priority, not just a departmental experiment.",
    domains: {
      Strategy:
        "A documented AI strategy exists and is aligned to organizational objectives. Prioritization criteria are defined. Initial investment tracking is in place. Leadership has formally endorsed the strategy and it is used — not just filed.",
      Governance:
        "A formal AI governance framework is in place with defined roles and responsibilities. Compliance documentation covers major regulatory requirements. Ethical review processes exist. Risk identification is proactive rather than reactive.",
      Data:
        "Formal data governance policies are in place. Stewardship roles are defined and staffed. A data catalog or registry exists. Quality standards are documented and enforced for critical datasets. Integration of key data sources is actively underway.",
      People:
        "A structured AI literacy program is in place. A defined talent strategy covers hiring, reskilling, and retention. Change management processes are documented and staffed. Responsible AI principles are introduced in formal training programs.",
      Technology:
        "A standardized AI technology stack is defined and governed. Formal security policies cover AI tool adoption and data use. MLOps practices are emerging — structured pipelines for model development, testing, and deployment are taking shape.",
    },
  },
  {
    number: 5,
    slug: "optimizing",
    name: "Optimizing",
    tagline: "The system is working. The organization is using it to get better.",
    accent: "sky",
    borderClass: "border-sky-400",
    badgeClass: "bg-sky-100 text-sky-800 border-sky-200",
    numClass: "bg-sky-100 text-sky-800",
    overview:
      "The Optimizing level organization has moved from building AI capability to actively improving it. Feedback loops are operating — AI performance is measured, governance is continuously evaluated, data quality is monitored in near-real-time, and people development is ongoing. The organization doesn't just run AI projects; it learns from them systematically and uses that learning to do the next one better. AI is integrated into strategic planning, not managed as a separate initiative. At this level, the framework is working and the organization is using it to advance.",
    domains: {
      Strategy:
        "The AI strategy is dynamic — reviewed and updated on a defined cadence. KPIs are measured and tied to business outcomes. AI planning is integrated into the broader organizational strategic planning cycle, not managed as a separate track.",
      Governance:
        "Governance operates as a continuous function. Compliance is monitored in near-real time. Ethical review is embedded in the AI development lifecycle, not bolted on at the end. Risk posture is continuously assessed and communicated to leadership.",
      Data:
        "Real-time data quality monitoring is in place. Integrated data pipelines feed AI systems reliably. The data catalog is maintained and actively used. Data lineage is tracked. Quality issues are caught and resolved before they reach AI systems.",
      People:
        "Enterprise-wide AI competency is building. Continuous learning is embedded in the culture. Responsible AI is central to training rather than a footnote. Cross-functional teams working on AI have the skills they need. Leadership actively models AI literacy.",
      Technology:
        "Infrastructure is scalable and cost-optimized. Automated ML pipelines are in production. Proactive security monitoring for AI systems is in place. Model performance is tracked and models are retrained or retired on a defined schedule.",
    },
  },
  {
    number: 6,
    slug: "leading",
    name: "Leading",
    tagline: "AI is a defining characteristic of how this organization operates and competes.",
    accent: "emerald",
    borderClass: "border-emerald-500",
    badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200",
    numClass: "bg-emerald-100 text-emerald-800",
    overview:
      "Leading organizations have made AI a defining characteristic of how they operate and compete. AI is embedded in strategy, culture, governance, and operations. The organization doesn't just use the SIMA360 framework — it contributes to how AI maturity thinking evolves across its industry. It publishes practices, attracts talent by reputation, participates in regulatory and standards conversations, and operates AI systems that self-monitor within sophisticated governance boundaries. This is not the final destination. It is the beginning of stewardship.",
    domains: {
      Strategy:
        "AI is a core component of organizational strategy and competitive differentiation. The organization contributes to shaping industry direction. Strategic AI governance is sophisticated, self-reinforcing, and externally recognized.",
      Governance:
        "Governance is a source of organizational competitive advantage and trust. The organization contributes to shaping industry and regulatory standards. AI systems include built-in self-monitoring with human oversight. Governance practices are published and referenced by others.",
      Data:
        "Data is treated as a strategic organizational asset. Pipelines are self-optimizing and continuously monitored. Data intelligence is enterprise-wide. The organization's data practices are referenced externally as exemplary in the field.",
      People:
        "AI literacy is a defining organizational characteristic. The organization develops and shares AI education externally. Talent recognized for AI expertise attracts further expertise. The culture is AI-ready — adaptive, curious, and responsible by default.",
      Technology:
        "State-of-the-art infrastructure supports autonomous AI operations with robust human oversight. The organization contributes to technology innovation and open-source tooling. AI infrastructure is a competitive differentiator. Operational AI self-monitors within defined governance boundaries.",
    },
  },
]

const domainMeta = [
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
        <link rel="canonical" href="https://www.sima360.org/maturity" />
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
              <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
            </div>
            <Navigation />
            <Button asChild className="hidden md:inline-flex">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">SIMA360™ Framework</Badge>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            The Six Capability Levels
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto">
            SIMA360 measures AI maturity across six progressive capability levels — from Initial through Leading. Each level describes where an organization stands across all five domains: Strategy, Governance, Data, People, and Technology.
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

            {/* Domain breakdown */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Across the Five Domains at Level {lvl.number}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {domainMeta.map((d) => {
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
                        {lvl.domains[d.name as keyof typeof lvl.domains]}
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
                        Advancing from Level {lvl.number} to Level {lvl.number + 1} requires closing gaps across all five domains, not just the most visible ones. SIMA-Probe identifies where you stand; SIMA-Flow structures how you advance.
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
            SIMA-Probe measures your current capability level across all five domains and tells you exactly what to address next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/sima-probe/assessment">
                Start the Assessment <ArrowRight className="ml-2 w-4 h-4" />
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
