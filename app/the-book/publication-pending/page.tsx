import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Publication Pending — The AI Rush | SIMA360™",
  description:
    "The AI Rush: Too Much. Too Soon. by Dr. Charles Suscheck publishes mid-August 2026. Check back here for retail availability.",
  alternates: {
    canonical: "https://www.sima360.org/the-book/publication-pending",
  },
}

export default function PublicationPendingPage() {
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

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-indigo-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
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

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
                <Clock className="w-4 h-4 mr-2" />
                Publishing Mid-August 2026
              </Badge>
              <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                The AI Rush —
                <span className="text-indigo-600 block">Too Much. Too Soon.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                <em>The AI Rush: Too Much. Too Soon.</em> by Dr. Charles Suscheck is not yet available for purchase.
                The book is expected to publish in mid-August 2026 — retail availability will be announced here as
                soon as it's live. In the meantime, explore the framework the book gives rise to below.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600" asChild>
                  <Link href="/the-book">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to The Book
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-600 text-indigo-700 hover:bg-indigo-50 bg-transparent"
                  asChild
                >
                  <Link href="/sima-core">Explore the Framework</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
