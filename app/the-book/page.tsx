import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "The AI Rush — The Book Behind SIMA360™",
  description:
    "The AI Rush: Too Much. Too Soon. is the intellectual origin of the SIMA360 framework — the source of its five perspectives, six maturity levels, and FLAI methodology.",
  alternates: {
    canonical: "https://www.sima360.org/the-book",
  },
}

// TODO: Replace with the actual purchase URL before launch
const BOOK_PURCHASE_URL = "#"

export default function TheBookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50">
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
            <Button asChild className="hidden md:inline-flex">
              <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Schedule a Conversation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                The AI Rush —
                <span className="text-indigo-600 block">Too Much. Too Soon.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                The five perspectives, six maturity levels, FLAI methodology, and diagnostic principles that define
                SIMA360 did not emerge in isolation. They are the intellectual foundation of this book — developed to
                explain why organizations consistently fail to convert AI activity into organizational maturity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600" asChild>
                  <a href={BOOK_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                    Get the Book <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-600 text-indigo-700 hover:bg-indigo-50 bg-transparent"
                  asChild
                >
                  <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                    Download the Framework Guide
                  </a>
                </Button>
              </div>
            </div>
            {/* Book cover */}
            <div className="flex-shrink-0">
              <Image
                src="/images/book-cover.png"
                alt="The AI Rush: Too Much. Too Soon. — book cover"
                width={280}
                height={380}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Central Argument */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Problem the Book Addresses</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Most organizations evaluate AI maturity by measuring deployment activity: how many tools are in use, how
              many projects are running, how many employees have been trained. This is the wrong diagnostic. Activity
              does not produce capability. Capability does not produce maturity. Organizational AI maturity is
              determined by the quality of the operational conditions surrounding AI — and most organizations have
              significant, measurable gaps in those conditions regardless of how much AI they have deployed.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              The book names this the maturity gap. It explains why it exists, how to diagnose it across five
              organizational perspectives, and how to close it through disciplined improvement cycles. SIMA360 is the
              operational system built to apply those ideas.
            </p>
          </div>
        </div>
      </section>

      {/* From Book to Framework */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">How the Book Became SIMA360</h2>
            <p className="text-lg text-slate-700 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
              The book's five perspectives — Strategy, Governance, Data, People, and Technology — are SIMA-Core's
              Strategic Perspectives model. The book's six maturity levels are SIMA-Core's AI Maturity Levels model.
              The book's improvement methodology is FLAI. The book's diagnostic questions are what SIMA-Probe
              operationalizes into a formal assessment instrument. The book is not a companion to SIMA360.
              It is its origin.
            </p>

            {/* Two-column mapping */}
            <Card className="border-indigo-200 overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-indigo-200">
                <div className="bg-slate-800 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-indigo-300" />
                      The Book
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Conceptual framework",
                        "Maturity gap argument",
                        "Five perspectives",
                        "Six capability levels",
                        "FLAI methodology",
                        "Diagnostic principles",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-slate-200">
                          <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                <div className="bg-indigo-700 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-white flex items-center gap-2">
                      <ArrowRight className="w-5 h-5 text-indigo-300" />
                      SIMA360
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        "Operational ecosystem",
                        "SIMA-Core",
                        "SIMA-Probe",
                        "SIMA-Flow",
                        "SIMA-Kit",
                        "SIMA-Ascend",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-indigo-100">
                          <CheckCircle className="w-4 h-4 text-indigo-300 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Should Read It */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Start Here</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              The book is the recommended starting point before engaging any SIMA360 tool, assessment, or training
              program. Organizations that complete the book will have a clear diagnostic framework, a vocabulary for
              describing their maturity condition, and a basis for deciding which SIMA360 components address their most
              significant gaps.
            </p>
            <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600" asChild>
              <a href={BOOK_PURCHASE_URL} target="_blank" rel="noopener noreferrer">
                Get the Book <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to operationalize the framework?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SIMA360 provides the tools, assessments, and practitioner development programs to apply the book's ideas at
            the organizational level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/sima-core">
                Explore the Framework <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent"
              asChild
            >
              <Link href="/sima-probe/assessment">Assess Your Organization</Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
