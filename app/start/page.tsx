import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BookOpen,
  BarChart3,
  RefreshCw,
  Users,
  Briefcase,
  Download,
} from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Get Started — Find Your Entry Point | SIMA360™",
  description:
    "New to SIMA360, running an AI project, or building practitioner capability? Find the right starting point for your organization.",
}

const entryPoints = [
  {
    icon: BookOpen,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
    borderColor: "border-t-indigo-500",
    label: "Start with the Foundation",
    heading: "New to SIMA360",
    body: "If you are new to the framework, start with the book and SIMA-Core. The book provides the conceptual grounding. SIMA-Core defines the vocabulary every other component uses.",
    primaryLabel: "Read the Book",
    primaryHref: "/the-book",
    primaryExternal: false,
    secondaryLabel: "Explore SIMA-Core",
    secondaryHref: "/sima-core",
    secondaryExternal: false,
  },
  {
    icon: BarChart3,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    borderColor: "border-t-blue-500",
    label: "Measure Where You Are",
    heading: "Assess Your Organization",
    body: "If you want to understand your organization's current AI maturity across all five dimensions, start with SIMA-Probe. The Foundation tier is free.",
    primaryLabel: "Start Free Assessment",
    primaryHref: "/sima-probe",
    primaryExternal: false,
    secondaryLabel: "View Assessment Tiers",
    secondaryHref: "/sima-probe#subscription-levels",
    secondaryExternal: false,
  },
  {
    icon: RefreshCw,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    badgeColor: "bg-green-100 text-green-800 border-green-200",
    borderColor: "border-t-green-500",
    label: "Execute with Structure",
    heading: "Running an AI Project",
    body: "If you have an active AI initiative and need a structured execution and learning methodology, start with SIMA-Flow. SIMA-Kit provides the templates and tools your cycles require.",
    primaryLabel: "Explore SIMA-Flow",
    primaryHref: "/sima-flow",
    primaryExternal: false,
    secondaryLabel: "Get SIMA-Kit Resources",
    secondaryHref: "/sima-kit",
    secondaryExternal: false,
  },
  {
    icon: Users,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    borderColor: "border-t-orange-500",
    label: "Develop Your People",
    heading: "Build Practitioner Capability",
    body: "If you need to build internal capability to apply the framework consistently, start with SIMA-Ascend. Three certification levels, five courses, available online or through approved trainers.",
    primaryLabel: "View Training Programs",
    primaryHref: "/sima-ascend",
    primaryExternal: false,
    secondaryLabel: "Register for a Course",
    secondaryHref: "https://SIMA360Classes.eventbee.com/boxoffice",
    secondaryExternal: true,
  },
  {
    icon: Briefcase,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    borderColor: "border-t-purple-500",
    label: "Deliver SIMA360 to Clients",
    heading: "Consultants and Trainers",
    body: "If you are a consultant or trainer looking to license SIMA-Kit or become a certified SIMA360 instructor, contact us for partner information.",
    primaryLabel: "Request Partner Information",
    primaryHref: "mailto:info@sima360.org?subject=Partner%20Information%20Request",
    primaryExternal: true,
    secondaryLabel: "Explore SIMA-Ascend Certification",
    secondaryHref: "/sima-ascend",
    secondaryExternal: false,
  },
]

export default function StartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <link rel="canonical" href="https://www.sima360.org/start" />
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
                <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
              </div>
            </Link>
            <Navigation />
            <Button asChild className="hidden md:inline-flex">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              SIMA360™ Entry Points
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Where Do You Want to Start?
            </h1>
            <p className="text-xl text-slate-600">
              SIMA360 has multiple entry points depending on where your organization is and what you need. Choose the
              path that fits.
            </p>
          </div>
        </div>
      </section>

      {/* Entry Point Cards */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {entryPoints.slice(0, 3).map((card) => (
              <EntryCard key={card.heading} card={card} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
            {entryPoints.slice(3).map((card) => (
              <EntryCard key={card.heading} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-16 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <Download className="w-10 h-10 text-slate-400 mx-auto mb-4" />
            <p className="text-lg text-slate-700 mb-6">
              Not sure? Download the SIMA360 Guide — a complete overview of the framework, its components, and how they
              work together.
            </p>
            <Button size="lg" variant="outline" className="border-slate-400 text-slate-700 hover:bg-slate-50 bg-transparent" asChild>
              <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                Download the Guide <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

type EntryPointCard = (typeof entryPoints)[number]

function EntryCard({ card }: { card: EntryPointCard }) {
  const Icon = card.icon
  return (
    <Card className={`hover:shadow-lg transition-shadow border-t-4 ${card.borderColor} flex flex-col`}>
      <CardHeader>
        <div className="flex items-center gap-3 mb-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${card.iconBg}`}>
            <Icon className={`w-5 h-5 ${card.iconColor}`} />
          </div>
          <Badge variant="secondary" className={`text-xs ${card.badgeColor}`}>
            {card.label}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{card.heading}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{card.body}</p>
        <div className="space-y-3">
          {card.primaryExternal ? (
            <Button className="w-full" asChild>
              <a href={card.primaryHref} target="_blank" rel="noopener noreferrer">
                {card.primaryLabel} <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          ) : (
            <Button className="w-full" asChild>
              <Link href={card.primaryHref}>
                {card.primaryLabel} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          )}
          {card.secondaryExternal ? (
            <Button variant="ghost" className="w-full text-slate-600 hover:text-slate-900" asChild>
              <a href={card.secondaryHref} target="_blank" rel="noopener noreferrer">
                {card.secondaryLabel}
              </a>
            </Button>
          ) : (
            <Button variant="ghost" className="w-full text-slate-600 hover:text-slate-900" asChild>
              <Link href={card.secondaryHref}>{card.secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
