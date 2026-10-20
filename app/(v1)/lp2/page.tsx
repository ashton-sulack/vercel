import type { Metadata } from 'next'
import { SiteFooter } from '@/components/landing/closing'
import { LandingTwo } from '@/components/landing/lp2'

export const metadata: Metadata = {
  title: '6 Reasons Be Resilient Starts With Your Biology',
  description:
    'Discover a personalized wellness approach built around advanced testing, 470+ biomarker insights, and your individual needs.',
}

export default function LandingTwoPage() {
  return (
    <>
      <LandingTwo />
      <SiteFooter />
    </>
  )
}
