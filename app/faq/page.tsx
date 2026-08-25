import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "FAQ | SIMA360™",
  description:
    "Frequently asked questions about SIMA360 — what it is, how to implement AI in your small business, cost, and whether it's right for your business.",
  alternates: {
    canonical: "https://www.sima360.org/faq",
  },
}

interface Faq {
  question: string
  answer: ReactNode
}

interface FaqCategory {
  id: string
  title: string
  faqs: Faq[]
}

const CATEGORIES: FaqCategory[] = [
  {
    id: "what-is-sima360",
    title: "What is SIMA360?",
    faqs: [
      {
        question: "What is SIMA360, exactly?",
        answer: (
          <>
            <p>
              SIMA360 is a business AI capability framework that provides structured guidance for assessing,
              understanding, and strengthening the business conditions needed to use AI reliably.
            </p>
            <p>
              It examines five interconnected domains: Strategy, Governance, Data, People, and Technology. Rather
              than evaluating a particular AI product, SIMA360 looks at the business surrounding the technology.
            </p>
            <p>
              Rather than prescribing a single methodology, SIMA360 helps businesses diagnose capability gaps,
              determine what requires attention, and select improvement actions appropriate to their goals, risks,
              and circumstances.
            </p>
          </>
        ),
      },
      {
        question: "Is SIMA360 software, or is it a framework?",
        answer: (
          <>
            <p>
              SIMA360 is a framework, not a software product or prescriptive methodology. It provides a structured
              model and practical guidance for understanding, assessing, and improving business AI capability.
              Supporting tools, assessments, resources, and training help businesses apply that guidance to their
              own circumstances.
            </p>
            <p>
              It is not another AI platform that needs to be integrated into your technology environment. Its
              purpose is to help you understand your business&rsquo;s AI capabilities, identify weaknesses,
              prioritize improvements, and systematically strengthen them.
            </p>
          </>
        ),
      },
      {
        question: "Do I need to buy or install anything to use it?",
        answer: (
          <>
            <p>
              No. You can begin with the{" "}
              <Link href="/sima-probe/assessment" className="text-blue-600 hover:text-blue-800 underline">
                SIMA360 assessment
              </Link>{" "}
              without installing software or purchasing technology.
            </p>
            <p>
              The assessment provides an entry point into the framework. Businesses that want to go further can
              use additional SIMA360 diagnostic, implementation, training, and advisory services.
            </p>
          </>
        ),
      },
      {
        question: "What's the difference between SIMA360, the book, and the assessment?",
        answer: (
          <>
            <p>
              SIMA360 is the framework — the concepts, structure, guidance, and supporting components for
              understanding and improving business AI capability.
            </p>
            <p>
              <Link href="/the-book" className="text-blue-600 hover:text-blue-800 underline">
                The AI Rush
              </Link>{" "}
              is the book that explains the business problem SIMA360 addresses, the reasoning behind the
              framework, and how its concepts can be applied.
            </p>
            <p>
              <Link href="/sima-probe" className="text-blue-600 hover:text-blue-800 underline">
                SIMA-Probe
              </Link>{" "}
              is the diagnostic capability, with assessments that help businesses determine where they currently
              stand and identify areas requiring attention.
            </p>
            <p>
              Think of the book as explaining the thinking, SIMA360 as the framework that organizes it, and
              SIMA-Probe as the assessment that turns it into a diagnosis you can act on.
            </p>
          </>
        ),
      },
      {
        question: "What are SIMA-Core, SIMA-Probe, SIMA-Flow, SIMA-Kit, and SIMA-Ascend?",
        answer: (
          <>
            <p>They are the five major components of SIMA360:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/sima-core" className="text-blue-600 hover:text-blue-800 underline">
                  SIMA-Core™
                </Link>{" "}
                — The underlying model. It defines the five domains and six capability levels used to understand
                business AI capability.
              </li>
              <li>
                <Link href="/sima-probe" className="text-blue-600 hover:text-blue-800 underline">
                  SIMA-Probe™
                </Link>{" "}
                — The diagnostic component. It assesses observable business behaviors to identify strengths,
                weaknesses, and capability gaps.
              </li>
              <li>
                <Link href="/sima-flow" className="text-blue-600 hover:text-blue-800 underline">
                  SIMA-Flow™
                </Link>{" "}
                — The improvement guidance. It helps businesses translate assessment findings into priorities,
                select appropriate actions, and evaluate progress. It provides structure without prescribing a
                single implementation path.
              </li>
              <li>
                <Link href="/sima-kit" className="text-blue-600 hover:text-blue-800 underline">
                  SIMA-Kit™
                </Link>{" "}
                — The implementation resources. It provides practical tools, templates, and guidance for putting
                improvements into practice.
              </li>
              <li>
                <Link href="/sima-ascend" className="text-blue-600 hover:text-blue-800 underline">
                  SIMA-Ascend™
                </Link>{" "}
                — The learning component. It develops the knowledge and skills leaders, teams, and practitioners
                need to apply SIMA360 effectively.
              </li>
            </ul>
            <p>
              In simple terms: Core defines it. Probe diagnoses it. Flow guides improvement. Kit helps you act.
              Ascend builds capability.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "getting-started",
    title: "Getting Started",
    faqs: [
      {
        question: "What happens when I take the free assessment?",
        answer: (
          <>
            <p>
              The free assessment takes approximately 15 minutes and provides an initial view of your
              business&rsquo;s AI capabilities across the five SIMA360 domains.
            </p>
            <p>
              Your results help reveal where business conditions may be supporting AI adoption—and where
              weaknesses may create inconsistent results, operational risk, or barriers to scaling AI successfully.
            </p>
            <p>
              The free assessment is intended as a practical starting point, not a substitute for a comprehensive
              business assessment.
            </p>
          </>
        ),
      },
      {
        question: "Is the assessment really free, with no obligation?",
        answer: (
          <>
            <p>
              Yes. The introductory assessment is free and does not require you to purchase consulting, training,
              or other SIMA360 services.
            </p>
            <p>
              Its purpose is to give you useful insight into your business&rsquo;s current position and help
              you determine whether deeper analysis would be valuable.
            </p>
          </>
        ),
      },
      {
        question: "Who should take the assessment—a single leader or a team?",
        answer: (
          <>
            <p>Either can provide value, but they answer somewhat different questions.</p>
            <p>
              An individual assessment reveals how one person perceives the business&rsquo;s capabilities.
              Having several leaders or stakeholders complete the assessment can be even more informative because
              differences between their answers may reveal business ambiguity or misalignment.
            </p>
            <p>
              For more comprehensive assessments, input from multiple roles and functions provides a stronger
              picture of how the business actually operates.
            </p>
          </>
        ),
      },
      {
        question: "What if we haven't deployed AI yet?",
        answer: (
          <>
            <p>SIMA360 can be particularly valuable before large-scale AI deployment.</p>
            <p>
              Businesses do not need production AI systems to evaluate whether their strategy, governance, data,
              people, and technology are prepared for AI. Identifying weaknesses before AI becomes operational can
              be considerably less expensive than discovering them after AI-dependent processes have already been
              deployed.
            </p>
          </>
        ),
      },
      {
        question: "How do I implement AI in my small business?",
        answer: (
          <>
            <p>
              Start by diagnosing where you actually stand, not by picking a tool. Most small businesses trying
              to figure out how to use AI jump straight to a product decision — which model, which vendor —
              before knowing whether their strategy, governance, data, people, and technology are ready to
              support it.
            </p>
            <p>
              SIMA360&rsquo;s free assessment gives you that starting point in about 15 minutes: a clear picture
              of where your business is strong, where it isn&rsquo;t, and what to fix first — before you commit
              to any particular AI tool for your small business.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "time-and-effort",
    title: "Time and Effort",
    faqs: [
      {
        question: "How long does the assessment take?",
        answer: (
          <>
            <p>The free SIMA360 assessment takes approximately 15 minutes.</p>
            <p>
              More comprehensive assessments require additional information and stakeholder participation because
              they examine business behavior in greater depth.
            </p>
          </>
        ),
      },
      {
        question: "How long does it take to move up a capability level?",
        answer: (
          <>
            <p>There is no universal timetable.</p>
            <p>
              SIMA360 capability levels describe how a business operates; they are not stages awarded after a
              prescribed amount of time. Some improvements can occur quickly, while others may require changes to
              governance, decision rights, data practices, business skills, or technology.
            </p>
            <p>
              The objective is not simply to &ldquo;move up a level.&rdquo; It is to develop the capabilities needed
              to support the business&rsquo;s AI objectives and risk profile.
            </p>
          </>
        ),
      },
      {
        question: "Is SIMA360 a one-time project or an ongoing process?",
        answer: (
          <>
            <p>Assessment can be performed at a point in time, but business capability is not static.</p>
            <p>
              AI technologies change. Business strategies change. Regulations evolve. Employees gain experience, new
              systems are introduced, and businesses place AI into increasingly consequential processes.
            </p>
            <p>
              SIMA360 therefore treats capability improvement as an iterative process of assessment, prioritization,
              improvement, and reassessment rather than a one-time certification exercise.
            </p>
          </>
        ),
      },
      {
        question: "How much time will my team need to commit?",
        answer: (
          <>
            <p>That depends on what the assessment identifies.</p>
            <p>
              The initial assessment requires very little time. A broader improvement effort may involve workshops,
              targeted training, governance changes, data improvements, or changes to existing processes.
            </p>
            <p>
              SIMA360 is designed to prioritize the weaknesses that matter rather than launch a large transformation
              program simply for the sake of adopting a framework.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "applying-sima360",
    title: "Applying SIMA360",
    faqs: [
      {
        question: "Do we work directly with SIMA360 or through a consultant?",
        answer: (
          <>
            <p>Both models are possible.</p>
            <p>
              Businesses can work directly with SIMA360 or use qualified consultants and partners who
              incorporate the framework into broader AI strategy, governance, transformation, or business
              improvement engagements.
            </p>
            <p>This also allows consulting businesses to use SIMA360 as a structured diagnostic and improvement framework with their own clients.</p>
          </>
        ),
      },
      {
        question: "Can we apply SIMA360 ourselves?",
        answer: (
          <>
            <p>Yes.</p>
            <p>
              SIMA360 is designed so businesses can understand and apply the framework themselves. The book,
              assessments,{" "}
              <Link href="/sima-kit" className="text-blue-600 hover:text-blue-800 underline">
                SIMA-Kit
              </Link>{" "}
              resources, and{" "}
              <Link href="/sima-ascend" className="text-blue-600 hover:text-blue-800 underline">
                SIMA-Ascend
              </Link>{" "}
              learning materials support self-directed use of the framework.
            </p>
            <p>
              Outside assistance can be valuable when a business wants an independent assessment, needs help
              resolving cross-functional issues, or wants experienced facilitation for a larger improvement
              initiative.
            </p>
          </>
        ),
      },
      {
        question: "What is SIMA-Ascend? Is training required?",
        answer: (
          <>
            <p>
              <Link href="/sima-ascend" className="text-blue-600 hover:text-blue-800 underline">
                SIMA-Ascend
              </Link>{" "}
              is the education and capability-development component of SIMA360.
            </p>
            <p>
              It helps leaders, practitioners, consultants, and teams understand both the framework and the
              business practices needed to improve AI capability.
            </p>
            <p>
              Training is not required to begin using SIMA360 or to take the free assessment. It becomes more
              valuable when businesses want people across multiple roles to develop a consistent understanding
              of the framework and how to apply it.
            </p>
          </>
        ),
      },
      {
        question: "Who is Dr. Charles Suscheck?",
        answer: (
          <>
            <p>
              Dr. Charles Suscheck is the creator of SIMA360 and author of{" "}
              <Link href="/the-book" className="text-blue-600 hover:text-blue-800 underline">
                The AI Rush
              </Link>
              . He is a computer scientist, educator, consultant, and professional trainer with extensive experience
              helping businesses connect technology, business practices, and business strategy.
            </p>
            <p>
              His role includes continued development of the SIMA360 framework, research and thought leadership,
              education, practitioner development, and advisory work with businesses applying the framework.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "cost",
    title: "Cost",
    faqs: [
      {
        question: "Is SIMA360 free, or are there paid services?",
        answer: (
          <>
            <p>You can begin with SIMA360 at no cost. The introductory assessment is free.</p>
            <p>
              Businesses that want deeper analysis or assistance can choose paid offerings such as comprehensive
              assessments, training, implementation resources, and consulting services.
            </p>
            <p>
              These are optional. You do not need to purchase consulting or training to use the SIMA360
              framework — SIMA360 gives you the structure to build AI maturity yourself, without an army of
              consultants.
            </p>
            <p>
              See the{" "}
              <Link href="/pricing" className="text-blue-600 hover:text-blue-800 underline">
                Pricing page
              </Link>{" "}
              for current pricing.
            </p>
          </>
        ),
      },
      {
        question: "Do consulting firms pay differently from individual businesses?",
        answer: (
          <>
            <p>
              Yes. SIMA360 can be used directly by businesses evaluating their own AI capabilities as well as by
              consulting and advisory firms applying the framework with clients.
            </p>
            <p>
              Partner and consulting-firm arrangements reflect that broader commercial use and may include
              practitioner resources, training, licensing, or other support. Contact{" "}
              <a href="mailto:info@sima360.org" className="text-blue-600 hover:text-blue-800 underline">
                info@sima360.org
              </a>{" "}
              for partner and consultant information.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "is-it-right-for-us",
    title: "Is SIMA360 Right for Us?",
    faqs: [
      {
        question: "Is SIMA360 only for large enterprises?",
        answer: (
          <>
            <p>No.</p>
            <p>
              The five domains—Strategy, Governance, Data, People, and Technology—matter regardless of
              business size. What appropriate capability looks like, however, should be proportional to the
              business.
            </p>
            <p>
              A small company does not need the governance bureaucracy of a multinational corporation. It still
              needs to know who can make AI-related decisions, what data can be used, how AI-generated outputs
              should be evaluated, and where human oversight is required.
            </p>
            <p>
              SIMA360 evaluates the capability required for your environment, rather than assuming every
              business should operate the same way.
            </p>
            <p>
              In practice, the ideal fit is a small or mid-size business early in AI adoption. That&rsquo;s
              exactly the environment where a maturity gap causes the most damage, and
              where a business is least likely to have a dedicated AI governance team already in place.
            </p>
          </>
        ),
      },
      {
        question: "Is SIMA360 industry-specific?",
        answer: (
          <>
            <p>
              No. SIMA360 is industry-independent because it evaluates business capabilities rather than
              prescribing a particular technology architecture or industry process.
            </p>
            <p>
              The same five domains apply across industries, although the practices required within them may
              differ considerably according to regulation, risk, business size, business model, and the
              consequences of AI-assisted decisions.
            </p>
          </>
        ),
      },
      {
        question: "How is SIMA360 different from other AI governance and maturity frameworks?",
        answer: (
          <>
            <p>
              Many AI frameworks concentrate primarily on governance, risk, compliance, technology, or responsible-AI
              principles. Those are important, but they represent only part of the business system in which AI
              operates.
            </p>
            <p>
              SIMA360 examines five interdependent domains: Strategy, Governance, Data, People, and Technology. Its
              premise is that weakness in one domain can constrain the effectiveness of the others.
            </p>
            <p>
              SIMA360 also emphasizes observable business behavior rather than aspiration. The question is not
              simply whether a policy, committee, strategy, or technology exists. The question is whether the
              business can consistently make, govern, explain, and improve AI-enabled decisions in practice.
            </p>
            <p>
              That makes SIMA360 not only a model for describing business capability, but also a diagnostic
              framework and a structured approach for deciding what to improve next.
            </p>
          </>
        ),
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
                <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
              </div>
            </Link>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            SIMA360 helps businesses understand whether they have the capabilities needed to use AI reliably,
            identify where weaknesses may be limiting results, and determine appropriate actions for improvement.
            These answers cover what SIMA360 is, how to get started, and what to expect.
          </p>
        </div>
      </section>

      {/* Category jump links */}
      <section className="px-4">
        <div className="container mx-auto max-w-3xl">
          <nav aria-label="FAQ categories" className="flex flex-wrap justify-center gap-2 pb-8">
            {CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-3xl space-y-14">
          {CATEGORIES.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-slate-200 bg-white open:shadow-sm"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-base font-semibold text-slate-900 list-none">
                      {faq.question}
                      <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-45 text-xl leading-none">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-5 -mt-1 space-y-3 text-slate-600 leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
