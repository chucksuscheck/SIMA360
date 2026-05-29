"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const frameworkLinks = [
  { label: "SIMA-Core™", href: "/sima-core" },
  { label: "SIMA-Probe™", href: "/sima-probe" },
  { label: "SIMA-Flow™", href: "/sima-flow" },
  { label: "SIMA-Kit™", href: "/sima-kit" },
  { label: "SIMA-Ascend™", href: "/sima-ascend" },
]

export function Navigation() {
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsFrameworkOpen(true)
  }

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setIsFrameworkOpen(false), 300)
  }

  return (
    <nav className="flex items-center space-x-1">
      <Link
        href="/"
        className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded transition-colors"
      >
        Home
      </Link>

      <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
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
        className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
      >
        Get Started
      </Link>
    </nav>
  )
}
