import { ClientStories } from '@/components/landing/client-stories'
import { FinalCta, SiteFooter } from '@/components/landing/closing'
import { ConsultSteps } from '@/components/landing/consult-steps'
import { Faq } from '@/components/landing/faq'
import { FitCheck } from '@/components/landing/fit-check'
import { FounderCards } from '@/components/landing/founder-cards'
import { AnnouncementBar, Hero } from '@/components/landing/hero'
import { OldVsNew } from '@/components/landing/old-vs-new'
import { PlanPillars } from '@/components/landing/plan-pillars'
import { Struggles } from '@/components/landing/struggles'

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <main>
        <Hero />
        <FounderCards />
        <OldVsNew />
        <Struggles />
        <PlanPillars />
        <ClientStories />
        <ConsultSteps />
        <FitCheck />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
