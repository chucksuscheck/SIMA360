import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Who We Are — Advisory Board | SIMA360™",
  description:
    "Meet the SIMA360 advisory board — practitioners and researchers with direct experience in AI governance, enterprise risk, and organizational transformation who pressure-test the framework against real-world implementation.",
  alternates: {
    canonical: "https://www.sima360.org/advisors",
  },
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

const AdvisorsPage = () => {
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

      {/* 1. Advisory Board */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              <Shield className="w-4 h-4 mr-2" />
              Governance & Oversight
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Advisory Board</h1>
            <p className="text-lg text-slate-600">
              SIMA360™ is guided by an advisory board of practitioners and researchers with direct experience in AI
              governance, enterprise risk, and organizational transformation. Their role is to pressure-test the
              framework against real-world implementation — not to rubber-stamp it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Dr. Charles (Chuck) Suscheck</CardTitle>
                    <CardDescription className="text-sm">Founder & Advisory Board Chair</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Professional Scrum Trainer with Scrum.org for 14 years and author of the forthcoming book{" "}
                  <em>The AI Rush — Too Much Too Soon!</em>, which examines the gap between AI capability and
                  organizational maturity — the premise SIMA360 is built on.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Anita Shankar</CardTitle>
                    <CardDescription className="text-sm">
                      Advisory Board Member — Agile Leader, AEP Charge (American Electric Power)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Leads agile transformation for AEP's electric vehicle charging business unit, bringing
                  enterprise-scale operational discipline from one of the country's largest regulated utilities to
                  SIMA360's People and Process dimensions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Kathy S. Lassila</CardTitle>
                    <CardDescription className="text-sm">
                      Advisory Board Member — Consultant and Author, Additive Manufacturing
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  Independent consultant and published author in additive manufacturing, bringing production-floor
                  experience in emerging manufacturing technology adoption to SIMA360's Technology and Data
                  dimensions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Bren Triplett</CardTitle>
                    <CardDescription className="text-sm">
                      Advisory Board Member — Director, Information Technology Program & Assistant Professor,
                      Colorado Christian University
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-sm">
                  35 years in enterprise IT, including large-scale database work at IBM and Verizon, now applied to
                  curriculum design and technology education in the College of Adult and Graduate Studies — brings
                  both practitioner depth and an academic lens to SIMA360's People and Technology dimensions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default AdvisorsPage
