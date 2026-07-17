"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const learnMoreOverview = { label: "SIMA360 Overview", href: "/overview" }

const frameworkLinks = [
  { label: "Overview", href: "/framework" },
  { label: "SIMA-Core™", href: "/sima-core" },
  { label: "SIMA-Probe™", href: "/sima-probe" },
  { label: "SIMA-Flow™", href: "/sima-flow" },
  { label: "SIMA-Kit™", href: "/sima-kit" },
  { label: "SIMA-Ascend™", href: "/sima-ascend" },
]

const maturityLevelLinks = [
  { label: "Overview", href: "/maturity" },
  { label: "Initial", href: "/maturity/initial" },
  { label: "Exploring", href: "/maturity/exploring" },
  { label: "Applying", href: "/maturity/applying" },
  { label: "Formalizing", href: "/maturity/formalizing" },
  { label: "Optimizing", href: "/maturity/optimizing" },
  { label: "Leading", href: "/maturity/leading" },
]

const toolCategoryLinks = [
  { label: "Overview", href: "/tool-categories" },
  { label: "Baseline", href: "/tool-categories/baseline" },
  { label: "Business Assistance", href: "/tool-categories/business-assistance" },
  { label: "Process Automation", href: "/tool-categories/process-automation" },
  { label: "Decision Optimization", href: "/tool-categories/decision-optimization" },
  { label: "Autonomous Execution", href: "/tool-categories/autonomous-execution" },
]

const perspectiveLinks = [
  { label: "Overview", href: "/perspectives" },
  { label: "Strategy", href: "/sima-core/strategy" },
  { label: "Governance", href: "/sima-core/governance" },
  { label: "Data", href: "/sima-core/data" },
  { label: "People", href: "/sima-core/people" },
  { label: "Technology", href: "/sima-core/technology" },
]

const resourceLinks = [
  { label: "Get the Book", href: "/the-book", external: false },
  { label: "Download Guide", href: "/SIMA360_Guide.pdf", external: true },
  { label: "Take Training", href: "https://www.eventbee.com/v/sima360classes/boxoffice/", external: true },
]

const pricingLinks = [
  { label: "Overview", href: "/pricing" },
  { label: "Assess", href: "/pricing/assess" },
  { label: "Equip", href: "/pricing/equip" },
  { label: "Improve", href: "/pricing/improve" },
  { label: "Learn", href: "/pricing/learn" },
]

const aboutLinks = [
  { label: "Who We Are", href: "/advisors" },
  { label: "SIMA360 Basis", href: "/foundation" },
]

type SubmenuKey = "framework" | "maturity" | "toolCategories" | "perspectives" | "resources" | "pricing" | "about" | null

export function Navigation() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuKey>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileLearnMoreOpen, setIsMobileLearnMoreOpen] = useState(false)
  const [isMobileFrameworkOpen, setIsMobileFrameworkOpen] = useState(false)
  const [isMobileMaturityOpen, setIsMobileMaturityOpen] = useState(false)
  const [isMobileToolCategoriesOpen, setIsMobileToolCategoriesOpen] = useState(false)
  const [isMobilePerspectivesOpen, setIsMobilePerspectivesOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)
  const [isMobilePricingOpen, setIsMobilePricingOpen] = useState(false)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)

  const learnMoreTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const submenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openLearnMore = () => {
    if (learnMoreTimeoutRef.current) clearTimeout(learnMoreTimeoutRef.current)
    setIsLearnMoreOpen(true)
  }
  const closeLearnMore = () => {
    learnMoreTimeoutRef.current = setTimeout(() => {
      setIsLearnMoreOpen(false)
      setActiveSubmenu(null)
    }, 300)
  }

  const openSubmenu = (key: SubmenuKey) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current)
    setActiveSubmenu(key)
  }
  const closeSubmenu = () => {
    submenuTimeoutRef.current = setTimeout(() => setActiveSubmenu(null), 300)
  }

  const closeMobile = () => {
    setIsMobileOpen(false)
    setIsMobileLearnMoreOpen(false)
    setIsMobileFrameworkOpen(false)
    setIsMobileMaturityOpen(false)
    setIsMobileToolCategoriesOpen(false)
    setIsMobilePerspectivesOpen(false)
    setIsMobileResourcesOpen(false)
    setIsMobilePricingOpen(false)
    setIsMobileAboutOpen(false)
  }

  return (
    <>
      {/* ── Desktop nav (md+) ── */}
      <nav className="hidden md:flex items-center space-x-1">
        <Link
          href="/"
          className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
        >
          Home
        </Link>

        {/* Learn More dropdown */}
        <div className="relative" onMouseEnter={openLearnMore} onMouseLeave={closeLearnMore}>
          <button
            className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
            aria-expanded={isLearnMoreOpen}
            aria-haspopup="true"
          >
            Learn More
            <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isLearnMoreOpen ? "rotate-180" : ""}`} />
          </button>
          {isLearnMoreOpen && (
            <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-md shadow-lg z-50 py-1">
              <Link
                href={learnMoreOverview.href}
                onClick={() => setIsLearnMoreOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors rounded-t-md"
              >
                {learnMoreOverview.label}
              </Link>

              {/* Framework — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("framework")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  aria-expanded={activeSubmenu === "framework"}
                  aria-haspopup="true"
                >
                  Framework
                  <ChevronRight className="w-4 h-4" />
                </button>
                {activeSubmenu === "framework" && (
                  <div className="absolute top-0 left-full ml-1 w-52 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {frameworkLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsLearnMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Perspectives — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("perspectives")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  aria-expanded={activeSubmenu === "perspectives"}
                  aria-haspopup="true"
                >
                  Perspectives
                  <ChevronRight className="w-4 h-4" />
                </button>
                {activeSubmenu === "perspectives" && (
                  <div className="absolute top-0 left-full ml-1 w-44 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {perspectiveLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsLearnMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Maturity Levels — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("maturity")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  aria-expanded={activeSubmenu === "maturity"}
                  aria-haspopup="true"
                >
                  Maturity Levels
                  <ChevronRight className="w-4 h-4" />
                </button>
                {activeSubmenu === "maturity" && (
                  <div className="absolute top-0 left-full ml-1 w-52 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {maturityLevelLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsLearnMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Tool Categories — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("toolCategories")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  aria-expanded={activeSubmenu === "toolCategories"}
                  aria-haspopup="true"
                >
                  Tool Categories
                  <ChevronRight className="w-4 h-4" />
                </button>
                {activeSubmenu === "toolCategories" && (
                  <div className="absolute top-0 left-full ml-1 w-56 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {toolCategoryLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsLearnMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("resources")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  aria-expanded={activeSubmenu === "resources"}
                  aria-haspopup="true"
                >
                  Resources
                  <ChevronRight className="w-4 h-4" />
                </button>
                {activeSubmenu === "resources" && (
                  <div className="absolute top-0 left-full ml-1 w-52 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {resourceLinks.map((link) =>
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsLearnMoreOpen(false)}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsLearnMoreOpen(false)}
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Pricing — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("pricing")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  aria-expanded={activeSubmenu === "pricing"}
                  aria-haspopup="true"
                >
                  Pricing
                  <ChevronRight className="w-4 h-4" />
                </button>
                {activeSubmenu === "pricing" && (
                  <div className="absolute top-0 left-full ml-1 w-44 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {pricingLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsLearnMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* About — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("about")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors rounded-b-md"
                  aria-expanded={activeSubmenu === "about"}
                  aria-haspopup="true"
                >
                  About
                  <ChevronRight className="w-4 h-4" />
                </button>
                {activeSubmenu === "about" && (
                  <div className="absolute top-0 left-full ml-1 w-44 bg-white border border-slate-200 rounded-md shadow-lg z-50">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsLearnMoreOpen(false)}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <Button asChild size="sm">
          <Link href="/sima-probe/assessment">Free Assessment</Link>
        </Button>

        <Button asChild variant="outline" size="sm" className="ml-auto">
          <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Contact</a>
        </Button>
      </nav>

      {/* ── Mobile hamburger + menu (< md) ── */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          className="p-2 text-slate-700 hover:bg-slate-100 rounded transition-colors"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {isMobileOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-xl z-50 py-2">
            <Link
              href="/"
              onClick={closeMobile}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Home
            </Link>

            {/* Learn More mobile */}
            <div>
              <button
                onClick={() => setIsMobileLearnMoreOpen(!isMobileLearnMoreOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Learn More
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileLearnMoreOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileLearnMoreOpen && (
                <div className="bg-slate-50 border-t border-b border-slate-100">
                  <Link
                    href={learnMoreOverview.href}
                    onClick={closeMobile}
                    className="block pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    {learnMoreOverview.label}
                  </Link>

                  {/* Framework mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobileFrameworkOpen(!isMobileFrameworkOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      Framework
                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileFrameworkOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileFrameworkOpen && (
                      <div className="bg-white">
                        {frameworkLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Perspectives mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobilePerspectivesOpen(!isMobilePerspectivesOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      Perspectives
                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobilePerspectivesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobilePerspectivesOpen && (
                      <div className="bg-white">
                        {perspectiveLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Maturity Levels mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobileMaturityOpen(!isMobileMaturityOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      Maturity Levels
                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileMaturityOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileMaturityOpen && (
                      <div className="bg-white">
                        {maturityLevelLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tool Categories mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobileToolCategoriesOpen(!isMobileToolCategoriesOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      Tool Categories
                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileToolCategoriesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileToolCategoriesOpen && (
                      <div className="bg-white">
                        {toolCategoryLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Resources mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      Resources
                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileResourcesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileResourcesOpen && (
                      <div className="bg-white">
                        {resourceLinks.map((link) =>
                          link.external ? (
                            <a
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={closeMobile}
                              className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeMobile}
                              className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                              {link.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* Pricing mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobilePricingOpen(!isMobilePricingOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      Pricing
                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobilePricingOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobilePricingOpen && (
                      <div className="bg-white">
                        {pricingLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* About mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      About
                      <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileAboutOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isMobileAboutOpen && (
                      <div className="bg-white">
                        {aboutLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMobile}
                            className="block pl-11 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/sima-probe/assessment"
              onClick={closeMobile}
              className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-slate-50 transition-colors"
            >
              Free Assessment
            </Link>

            <div className="px-4 py-2">
              <Button asChild variant="outline" size="sm" className="w-full" onClick={closeMobile}>
                <a href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
