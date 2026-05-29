import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">SIMA360™</h3>
            <p className="text-sm">A Structured Maturity Framework for AI Adoption</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">The Framework</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sima-core" className="hover:text-white transition-colors">SIMA-Core™</Link>
              </li>
              <li>
                <Link href="/sima-probe" className="hover:text-white transition-colors">SIMA-Probe™</Link>
              </li>
              <li>
                <Link href="/sima-flow" className="hover:text-white transition-colors">SIMA-Flow™</Link>
              </li>
              <li>
                <Link href="/sima-kit" className="hover:text-white transition-colors">SIMA-Kit™</Link>
              </li>
              <li>
                <Link href="/sima-ascend" className="hover:text-white transition-colors">SIMA-Ascend™</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/the-book" className="hover:text-white transition-colors">The Book</Link>
              </li>
              <li>
                <Link href="/SIMA360_Guide.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Download Guide
                </Link>
              </li>
              <li>
                <a href="https://SIMA360Classes.eventbee.com/boxoffice" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Class List
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/start" className="hover:text-white transition-colors">Get Started</Link>
              </li>
              <li>
                <a href="mailto:info@sima360.org" className="hover:text-white transition-colors">
                  info@sima360.org
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 SIMA360™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
