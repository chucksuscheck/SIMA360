"use client"

import Image from "next/image"
import Link from "next/link"

type TipDir = "top" | "bottom" | "left" | "right"

interface Hotspot {
  id: string
  label: string
  href: string
  top: number     // % from top of container
  left: number    // % from left of container
  width: number   // % of container width
  height: number  // % of container height
  tip: TipDir
}

// Positions are percentages relative to the square image container.
// Tune values here if the diagram image changes.
const hotspots: Hotspot[] = [
  // ── SIMA Components (outer ring) ──────────────────────────────────
  { id: "sima-core",   label: "SIMA-Core™",           href: "/sima-core",            top:  0, left: 22, width: 56, height: 21, tip: "bottom" },
  { id: "sima-flow",   label: "SIMA-Flow™",           href: "/sima-flow",            top: 17, left: 75, width: 25, height: 40, tip: "left"   },
  { id: "sima-kit",    label: "SIMA-Kit™",            href: "/sima-kit",             top: 65, left: 52, width: 44, height: 34, tip: "top"    },
  { id: "sima-ascend", label: "SIMA-Ascend™",         href: "/sima-ascend",          top: 65, left:  4, width: 44, height: 34, tip: "top"    },
  { id: "sima-probe",  label: "SIMA-Probe™",          href: "/sima-probe",           top: 17, left:  0, width: 25, height: 40, tip: "right"  },
  // ── Five Domains (middle ring) ────────────────────────────────────
  { id: "strategy",    label: "Strategy",             href: "/sima-core#strategy",   top: 19, left: 37, width: 26, height: 15, tip: "bottom" },
  { id: "governance",  label: "Governance",           href: "/sima-core#governance", top: 27, left: 58, width: 22, height: 18, tip: "left"   },
  { id: "data",        label: "Data",                 href: "/sima-core#data",       top: 54, left: 57, width: 22, height: 18, tip: "left"   },
  { id: "people",      label: "People",               href: "/sima-core#people",     top: 63, left: 25, width: 28, height: 14, tip: "top"    },
  { id: "technology",  label: "Technology",           href: "/sima-core#technology", top: 37, left: 13, width: 22, height: 20, tip: "right"  },
  // ── Capability Levels (inner ring) ────────────────────────────────
  { id: "initial",     label: "Level 1 · Initial",     href: "/sima-core#initial",     top: 30, left: 44, width: 14, height: 12, tip: "bottom" },
  { id: "exploring",   label: "Level 2 · Exploring",   href: "/sima-core#exploring",   top: 37, left: 57, width: 15, height: 12, tip: "left"   },
  { id: "applying",    label: "Level 3 · Applying",    href: "/sima-core#applying",    top: 52, left: 55, width: 15, height: 12, tip: "left"   },
  { id: "formalizing", label: "Level 4 · Formalizing", href: "/sima-core#formalizing", top: 59, left: 38, width: 22, height: 12, tip: "top"    },
  { id: "optimizing",  label: "Level 5 · Optimizing",  href: "/sima-core#optimizing",  top: 51, left: 25, width: 16, height: 12, tip: "right"  },
  { id: "leading",     label: "Level 6 · Leading",     href: "/sima-core#leading",     top: 35, left: 24, width: 15, height: 12, tip: "right"  },
  // ── Center (FLAI) ─────────────────────────────────────────────────
  { id: "flai",        label: "FLAI Methodology",      href: "/sima-flow#flai",        top: 43, left: 42, width: 16, height: 15, tip: "top"    },
]

const tipClass: Record<TipDir, string> = {
  top:    "bottom-full mb-2 left-1/2 -translate-x-1/2",
  bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
  left:   "right-full mr-2 top-1/2 -translate-y-1/2",
  right:  "left-full ml-2 top-1/2 -translate-y-1/2",
}

export function FrameworkMap() {
  return (
    <section className="py-20 px-4 bg-white border-y border-slate-100">
      <div className="container mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">
            Interactive Framework Map
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            The SIMA360™ Operating Architecture
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            Five integrated components. Five organizational domains. Six capability levels.
            One structured path to AI maturity.
          </p>
        </div>

        {/* Map */}
        <div className="max-w-xl mx-auto">
          <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
            <Image
              src="/images/sima360-frameworkd-overview.png"
              alt="SIMA360 framework map — five SIMA components surrounding five AI domains and six capability levels, with FLAI at center"
              fill
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-contain select-none"
              priority
            />

            {hotspots.map((h) => (
              <Link
                key={h.id}
                href={h.href}
                aria-label={`Go to ${h.label}`}
                className="absolute group focus-visible:outline-none"
                style={{
                  top:    `${h.top}%`,
                  left:   `${h.left}%`,
                  width:  `${h.width}%`,
                  height: `${h.height}%`,
                }}
              >
                {/* Hover highlight */}
                <span className="absolute inset-0 rounded-sm bg-transparent group-hover:bg-white/15 ring-0 group-hover:ring-1 group-hover:ring-slate-500/30 transition-all duration-200" />

                {/* Keyboard-focus ring */}
                <span className="absolute inset-0 rounded-sm ring-0 group-focus-visible:ring-2 group-focus-visible:ring-slate-700 group-focus-visible:ring-offset-2 transition-all duration-150" />

                {/* Tooltip */}
                <span
                  className={[
                    "pointer-events-none absolute z-30 whitespace-nowrap",
                    "rounded border border-slate-200 bg-white",
                    "px-2.5 py-1 text-xs font-medium tracking-wide text-slate-700 shadow-sm",
                    "opacity-0 group-hover:opacity-100 transition-opacity duration-150",
                    tipClass[h.tip],
                  ].join(" ")}
                >
                  {h.label}
                </span>
              </Link>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 mt-5 tracking-wide">
            Hover any region to identify &nbsp;·&nbsp; Click to navigate
          </p>
        </div>

      </div>
    </section>
  )
}
