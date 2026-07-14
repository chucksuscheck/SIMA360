"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"

const learnMoreOverview = { label: "Overview", href: "/overview" }

const frameworkLinks = [
  { label: "SIMA-Core™", href: "/sima-core" },
  { label: "SIMA-Probe™", href: "/sima-probe" },
  { label: "SIMA-Flow™", href: "/sima-flow" },
  { label: "SIMA-Kit™", href: "/sima-kit" },
  { label: "SIMA-Ascend™", href: "/sima-ascend" },
  { label: "Maturity Levels", href: "/maturity" },
]

const perspectiveLinks = [
  { label: "Strategy", href: "/sima-core/strategy" },
  { label: "Governance", href: "/sima-core/governance" },
  { label: "Data", href: "/sima-core/data" },
  { label: "People", href: "/sima-core/people" },
  { label: "Technology", href: "/sima-core/technology" },
]

type SubmenuKey = "framework" | "perspectives" | null

export function Navigation() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuKey>(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileLearnMoreOpen, setIsMobileLearnMoreOpen] = useState(false)
  const [isMobileFrameworkOpen, setIsMobileFrameworkOpen] = useState(false)
  const [isMobilePerspectivesOpen, setIsMobilePerspectivesOpen] = useState(false)

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
    setIsMobilePerspectivesOpen(false)
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

        <Link
          href="/sima-probe/assessment"
          className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
        >
          Free Assessment
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

              {/* The Framework — nested submenu */}
              <div className="relative" onMouseEnter={() => openSubmenu("framework")} onMouseLeave={closeSubmenu}>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  aria-expanded={activeSubmenu === "framework"}
                  aria-haspopup="true"
                >
                  The Framework
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

              <Link
                href="/the-book"
                onClick={() => setIsLearnMoreOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                The Book
              </Link>
              <a
                href="/SIMA360_Guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsLearnMoreOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                Download Guide
              </a>
              <a
                href="https://www.eventbee.com/v/sima360classes/boxoffice/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsLearnMoreOpen(false)}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors rounded-b-md"
              >
                Take Training
              </a>
            </div>
          )}
        </div>

        <Link
          href="/about"
          className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
        >
          About
        </Link>

        <a
          href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation"
          className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
        >
          Schedule a Conversation
        </a>
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

            <Link
              href="/sima-probe/assessment"
              onClick={closeMobile}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Free Assessment
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

                  {/* The Framework mobile submenu */}
                  <div>
                    <button
                      onClick={() => setIsMobileFrameworkOpen(!isMobileFrameworkOpen)}
                      className="flex items-center justify-between w-full pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      The Framework
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

                  <Link
                    href="/the-book"
                    onClick={closeMobile}
                    className="block pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    The Book
                  </Link>
                  <a
                    href="/SIMA360_Guide.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobile}
                    className="block pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    Download Guide
                  </a>
                  <a
                    href="https://www.eventbee.com/v/sima360classes/boxoffice/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobile}
                    className="block pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  >
                    Take Training
                  </a>
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={closeMobile}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              About
            </Link>

            <a
              href="mailto:info@sima360.org?subject=Schedule%20a%20Conversation"
              onClick={closeMobile}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Schedule a Conversation
            </a>
          </div>
        )}
      </div>
    </>
  )
}
