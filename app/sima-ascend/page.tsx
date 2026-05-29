import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SIMA-Ascend — Practitioner Development & Certification | SIMA360™",
  description:
    "SIMA-Ascend builds the organizational practitioner capability the SIMA360 framework requires, through structured training programs and three-level certification pathways.",
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import {
  ArrowRight,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Target,
  Zap,
  Layers,
  Calendar,
  Star,
  Brain,
  Lightbulb,
  Settings,
  UserCheck,
  Building,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function SimaAscendPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
              <link rel="canonical" href="https://www.sima360.org/sima-ascend" />
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div>
                <h1 className="text-xl font-bold text-slate-900">SIMA360™</h1>
                <p className="text-sm text-slate-600">Structured AI Maturity Accelerator</p>
              </div>
            </Link>
            <Navigation />
            <Button asChild>
              <a href="mailto:charles.suscheck@sima360.org?subject=Schedule%20a%20Conversation">
                Schedule a Conversation
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>SIMA Ascend™</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
              <BookOpen className="w-4 h-4 mr-2" />
              SIMA Ascend™ Training & Certification
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Building the Practitioner Capability
              <span className="text-orange-600 block">the Framework Requires</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              The book's central finding is that organizational AI capability requires deliberate human development —
              not just tool deployment. Organizations can have sophisticated AI tools, mature data infrastructure, and
              formal governance policies and still fail to produce reliable AI outcomes if the people running those
              systems lack the capability to apply the framework consistently. SIMA-Ascend exists because of that
              finding. It builds the practitioner capability the framework requires: the diagnostic skill to assess
              maturity accurately, the execution skill to run structured improvement cycles, and the leadership
              capability to develop those skills organizationally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
                <a href="https://SIMA360Classes.eventbee.com/boxoffice" target="_blank" rel="noopener noreferrer">
                  Register for Training <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <a href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer">
                  Download Guide
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why SIMA-Ascend?</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              SIMA-Ascend courses not only help with certification preparation—they are robust, standalone learning
              experiences that deliver practical, real-world guidance applicable across industries and organizations. All courses are led by certified trainers or asynchronously online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Immediate Application</h3>
              <p className="text-slate-600">
                Actionable knowledge that professionals can use to improve AI maturity within their unique environments
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Measurable Impact</h3>
              <p className="text-slate-600">
                Builds capability to implement AI consistently with measurable business impact and results
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Framework Aligned</h3>
              <p className="text-slate-600">
                Directly aligned with SIMA360's strategic domains and capability levels for relevant, contextual
                learning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Certified Excellence</h3>
              <p className="text-slate-600">
                Standalone learning experiences that also serve as direct preparation for SIMA-Ascend certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Pathways */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">SIMA-Ascend Certification Pathways</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              SIMA-Ascend certifications validate an individual's ability to apply the SIMA360™ framework with
              increasing levels of complexity and leadership, recognizing professional progression in AI maturity and
              organizational impact. Each certification is achieved through online assessments. In order to become a
              SIMA360 instructor, the candidate must participate in the respective courses and pass AI Solutions Agent
              certification.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-orange-200 relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <UserCheck className="w-8 h-8 text-orange-600" />
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Level 1
                  </Badge>
                </div>
                <CardTitle className="text-xl">AI Solutions Agent</CardTitle>
                <CardDescription>Foundational framework application and independent practice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Equips individuals with practical knowledge of the SIMA360™ framework. Certified Agents understand
                  goals, principles, and application of AI within their operational domain.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Understands foundational elements and objectives</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Applies guidance with limited supervision</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Continuously reflects and improves practices</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Demonstrates AI integration competence</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No prerequisite</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-blue-200 relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    Level 2
                  </Badge>
                </div>
                <CardTitle className="text-xl">AI Solutions Orchestrator</CardTitle>
                <CardDescription>Team-level leadership and cross-functional collaboration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Team-level leaders who bridge the gap between AI strategy and implementation. They coach others,
                  facilitate collaboration, and ensure framework alignment across projects.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coaches individuals and teams in framework application</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ensures consistent SIMA application across projects</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Removes adoption barriers and supports alignment</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Acts as liaison between teams and leadership</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prerequisite: AI Solutions Agent</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-green-200 relative">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Brain className="w-8 h-8 text-green-600" />
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Level 3
                  </Badge>
                </div>
                <CardTitle className="text-xl">AI Solutions Strategist</CardTitle>
                <CardDescription>Enterprise leadership and organizational transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-4">
                  Organizational leaders who drive adoption, evolution, and alignment of the SIMA framework with
                  enterprise objectives. They define strategies and build internal capability.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Advocates for SIMA at the executive level</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Designs and staffs AI enablement strategies</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Creates internal training ecosystems</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Evolves framework based on feedback and metrics</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prerequisite: AI Solutions Orchestrator</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Course Descriptions */}
      <section className="py-16 px-4 bg-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">SIMA-Ascend Courses</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Designed to bridge theory and application, ensuring participants not only understand concepts but can
              implement them in real-world settings. Each course focuses on actionable learning with measurable
              outcomes.  All courses are led by certified trainers or asynchronously online.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <CardTitle className="text-xl">Preparing for AI Solutions</CardTitle>
                    <CardDescription>Foundational readiness and structured AI practices</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Prepares individuals to evaluate organizational readiness, identify foundational gaps, and introduce
                  structured AI practices with minimal risk.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Topics Covered:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• The AI Implementation Spectrum</li>
                      <li>• Analyzing Organizational AI Capabilities</li>
                      <li>• AI Governance and Oversight</li>
                      <li>• Executing AI Projects with Control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Assess readiness across key dimensions</li>
                      <li>• Establish foundational policies</li>
                      <li>• Structure pilot initiatives</li>
                      <li>• Implement oversight mechanisms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Settings className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <CardTitle className="text-xl">Applying AI Solutions</CardTitle>
                    <CardDescription>
                      FLAI cycle execution with real-world data and iterative assessments
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Enables practitioners to initiate and execute AI projects using the FLAI cycle with real-world data
                  and iterative assessments.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Topics Covered:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Developing Project Vision and Value</li>
                      <li>• Designing the FLAI Plan</li>
                      <li>• Capturing Execution Data</li>
                      <li>• Analyzing Project Results</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Create clear project charters</li>
                      <li>• Apply Frame-Learn-Assess-Improve cycle</li>
                      <li>• Identify key performance metrics</li>
                      <li>• Drive continuous improvement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Users className="w-8 h-8 text-purple-600 mr-3" />
                  <div>
                    <CardTitle className="text-xl">Leading AI Teams</CardTitle>
                    <CardDescription>Team-level coaching, alignment, and impact evaluation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Equips team-level leaders to coach, align, and support the adoption of SIMA across teams while
                  evaluating impact and driving improvement.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Topics Covered:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Leading Multi-Team AI Implementations</li>
                      <li>• Evaluating Framework Effectiveness</li>
                      <li>• Analyzing AI Initiative Results</li>
                      <li>• Developing Action Plans</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Coordinate cross-functional projects</li>
                      <li>• Use feedback loops and KPIs</li>
                      <li>• Review aggregate outcomes</li>
                      <li>• Refine organizational practices</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Target className="w-8 h-8 text-orange-600 mr-3" />
                  <div>
                    <CardTitle className="text-xl">Developing Organizational AI Strategies</CardTitle>
                    <CardDescription>
                      Enterprise-level framework customization and governance integration
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Designed for senior leaders to customize the SIMA framework at the enterprise level and embed it
                  within funding, policy, and governance models.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Topics Covered:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Customizing Implementation Frameworks</li>
                      <li>• Organizational Application of FLAI Cycle</li>
                      <li>• Strategy Deployment Management</li>
                      <li>• Governance Evolution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Tailor framework to enterprise needs</li>
                      <li>• Apply FLAI at macro level</li>
                      <li>• Manage funding and governance</li>
                      <li>• Drive strategic alignment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Building className="w-8 h-8 text-teal-600 mr-3" />
                  <div>
                    <CardTitle className="text-xl">Business Support for AI Implementation</CardTitle>
                    <CardDescription>Non-technical leadership for responsible AI adoption</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Focuses on non-technical leaders who enable success through selling, staffing, supporting, and
                  institutionalizing responsible AI adoption.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Key Topics Covered:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Selling AI Solutions</li>
                      <li>• Staffing AI Solutions</li>
                      <li>• Teaching AI Implementation</li>
                      <li>• Coaching AI Implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Learning Outcomes:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Craft compelling business cases</li>
                      <li>• Design organizational roles</li>
                      <li>• Develop enablement programs</li>
                      <li>• Provide guidance and mentorship</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-orange-50 rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Training Registration</h2>
                <p className="text-lg text-slate-600">
                  Ready to advance your AI capabilities? Register for our comprehensive training programs delivered on line or 
                  by approved trainers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Registration Portal</h3>
                  <p className="text-slate-600 mb-4">
                    Training programs from SIMA-Ascend can be explored and registered for at the link below:
                  </p>
            <Button size="lg" variant="secondary" asChild className="bg-white text-orange-900 hover:bg-orange-50">
                    <a
                      href="https://SIMA360Classes.eventbee.com/boxoffice"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Register Here <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Approved Trainers Program</h3>
                  <p className="text-slate-600 mb-4">
                    To preserve integrity and quality, all instructor lead SIMA-Ascend courses are delivered by approved
                    trainers who have undergone rigorous vetting and authorization.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-sm">
                      <Star className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Deep subject matter expertise</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <Star className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Proven instructional skills</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <Star className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Aligned with official SIMA360™ methodology</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <Star className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Up-to-date, relevant examples</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent border-orange-600 text-orange-600 hover:bg-orange-50"
                  >
                    <a href="mailto:info@sima360.org?subject=Training%20Information%20Request">Become a trainer</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-orange-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Build Your AI Workforce</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Educate your organization with SIMA Ascend™'s comprehensive training and certification programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-white text-orange-900 hover:bg-orange-50">
              <a href="https://SIMA360Classes.eventbee.com/boxoffice" target="_blank" rel="noopener noreferrer">
                Register for Training <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-orange-300 text-orange-100 hover:bg-orange-800 bg-transparent"
            >
              <a href="mailto:charles.suscheck@sima360.org?subject=Schedule%20a%20Conversation">
                Schedule a Conversation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-orange-50 border-t">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <span className="text-lg font-semibold text-slate-900">SIMA360™</span>
          </div>
          <p className="text-slate-600 mb-4">Structured AI Maturity Accelerator</p>
          <p className="text-sm text-slate-500">© 2025 SIMA360™. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
