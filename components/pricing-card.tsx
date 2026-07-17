import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

export interface PricingCardData {
  name: string
  price: string
  period?: string | null
  audience?: string
  features: string[]
  ctaLabel: string
  ctaHref?: string
  checkClass: string
  badge?: { label: string; className: string } | null
  featured?: boolean
}

export function PricingCard({ card }: { card: PricingCardData }) {
  return (
    <div className="relative flex">
      <Card className="flex flex-col h-full w-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl">{card.name}</CardTitle>
            {card.badge && <Badge className={card.badge.className}>{card.badge.label}</Badge>}
          </div>
          {card.audience && <CardDescription className="mt-1">{card.audience}</CardDescription>}
          <p className="text-3xl font-bold text-slate-900 mt-4">
            {card.price}{" "}
            {card.period && <span className="text-sm font-normal text-slate-500">{card.period}</span>}
          </p>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 space-y-4">
          <ul className="space-y-2 text-slate-700 text-sm flex-1">
            {card.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${card.checkClass}`} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-4">
            {card.ctaHref ? (
              <Button className="w-full" asChild>
                {card.ctaHref.startsWith("mailto:") ? (
                  <a href={card.ctaHref}>{card.ctaLabel}</a>
                ) : (
                  <Link href={card.ctaHref}>{card.ctaLabel}</Link>
                )}
              </Button>
            ) : (
              <p className="text-sm text-center text-slate-500 font-medium py-2">{card.ctaLabel}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
