"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isFrameworkOpen, setIsFrameworkOpen] = useState(false)
  let timeoutId: NodeJS.Timeout

  const handleMouseEnter = () => {
    clearTimeout(timeoutId)
    setIsFrameworkOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsFrameworkOpen(false)
    }, 300) // 300ms delay before closing
  }

  return (
    <nav className="flex items-center space-x-8">
      <Link
        href="/"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        Home
      </Link>
      <Link
        href="/sima-probe"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        SIMA Probe™
      </Link>
      <Link
        href="/sima-core"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        SIMA Core™
      </Link>
      <Link
        href="/sima-flow"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        SIMA Flow™
      </Link>
      <Link
        href="/sima-kit"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        SIMA Kit™
      </Link>
      <Link
        href="/sima-ascend"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        SIMA Ascend™
      </Link>
      <Link
        href="/the-book"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        The Book
      </Link>
      <Link
        href="/SIMA360_Guide.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        Download Guide
      </Link>
      <Link
        href="https://SIMA360Classes.eventbee.com/boxoffice"
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        Class List
      </Link>
      <Link
        href="/about"
        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-300 hover:text-slate-900 transition-colors"
      >
        About
      </Link>
      <Link
        href="/start"
        className="block px-4 py-2 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors"
      >
        Get Started
      </Link>
    </nav>
  )
}
