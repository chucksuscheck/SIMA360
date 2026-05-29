"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

const frameworkLinks = [
  { label: "SIMA-Core™", href: "/sima-core" },
  { label: "SIMA-Probe™", href: "/sima-probe" },
  { label: "SIMA-Flow™", href: "/sima-flow" },
  { label: "SIMA-Kit™", href: "/sima-kit" },
  { label: "SIMA-Ascend™", href: "/sima-ascend" },
  { label: "Maturity Levels", href: "/maturity" },
]

const domainLinks = [
  { label: "Strategy", href: "/sima-core/strategy" },
  { label: "Governance", href: "/sima-core/governance" },
  { label: "Data", href: "/sima-core/data" },
  { label: "People", href: "/sima-core/people" },
  { label: "Technology", href: "/sima-core/technology" },
]

export function Navigation() {
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false)
  const [isDomainsOpen, setIsDomainsOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileFrameworkOpen, setIsMobileFrameworkOpen] = useState(false)
  const [isMobileDomainsOpen, setIsMobileDomainsOpen] = useState(false)

  const frameworkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const domainsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openFramework = () => {
    if (frameworkTimeoutRef.current) clearTimeout(frameworkTimeoutRef.current)
    setIsFrameworkOpen(true)
  }
  const closeFramework = () => {
    frameworkTimeoutRef.current = setTimeout(() => setIsFrameworkOpen(false), 300)
  }

  const openDomains = () => {
    if (domainsTimeoutRef.current) clearTimeout(domainsTimeoutRef.current)
    setIsDomainsOpen(true)
  }
  const closeDomains = () => {
    domainsTimeoutRef.current = setTimeout(() => setIsDomainsOpen(false), 300)
  }

  const closeMobile = () => {
    setIsMobileOpen(false)
    setIsMobileFrameworkOpen(false)
    setIsMobileDomainsOpen(false)
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

        {/* The Framework dropdown */}
        <div className="relative" onMouseEnter={openFramework} onMouseLeave={closeFramework}>
          <button
            className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
            aria-expanded={isFrameworkOpen}
            aria-haspopup="true"
          >
            The Framework
            <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isFrameworkOpen ? "rotate-180" : ""}`} />
          </button>
          {isFrameworkOpen && (
            <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-slate-200 rounded-md shadow-lg z-50">
              {frameworkLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsFrameworkOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors first:rounded-t-md last:rounded-b-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Domains dropdown */}
        <div className="relative" onMouseEnter={openDomains} onMouseLeave={closeDomains}>
          <button
            className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
            aria-expanded={isDomainsOpen}
            aria-haspopup="true"
          >
            Domains
            <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isDomainsOpen ? "rotate-180" : ""}`} />
          </button>
          {isDomainsOpen && (
            <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-slate-200 rounded-md shadow-lg z-50">
              {domainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsDomainsOpen(false)}
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
          className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
        >
          The Book
        </Link>

        <Link
          href="/about"
          className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
        >
          About
        </Link>

        <Link
          href="/start"
          className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded transition-colors"
        >
          Get Started
        </Link>
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

            {/* The Framework mobile */}
            <div>
              <button
                onClick={() => setIsMobileFrameworkOpen(!isMobileFrameworkOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                The Framework
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileFrameworkOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileFrameworkOpen && (
                <div className="bg-slate-50 border-t border-b border-slate-100">
                  {frameworkLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="block pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Domains mobile */}
            <div>
              <button
                onClick={() => setIsMobileDomainsOpen(!isMobileDomainsOpen)}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Domains
                <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isMobileDomainsOpen ? "rotate-180" : ""}`} />
              </button>
              {isMobileDomainsOpen && (
                <div className="bg-slate-50 border-t border-b border-slate-100">
                  {domainLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="block pl-7 pr-4 py-2 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
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
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              The Book
            </Link>

            <Link
              href="/about"
              onClick={closeMobile}
              className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
            >
              About
            </Link>

            <div className="px-4 pt-2 pb-1 border-t border-slate-100 mt-1">
              <Link
                href="/start"
                onClick={closeMobile}
                className="block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
