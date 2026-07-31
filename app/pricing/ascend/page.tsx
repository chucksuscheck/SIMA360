"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PricingAscendRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/pricing/learn")
  }, [router])

  return (
    <meta httpEquiv="refresh" content="0; url=/pricing/learn" />
  )
}
