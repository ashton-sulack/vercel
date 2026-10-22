import Script from 'next/script'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/landing/closing'
import { BookingFlowHeader } from '@/components/order/booking-flow-header'
import { BookingFlowRedirect } from '@/components/order/booking-flow-redirect'

export const metadata: Metadata = {
  title: 'Choose Your Consult Time | Be Resilient',
  description: 'Choose a time for your private Terrain Health Consultation with a Program Advisor.',
}

export default function CalendarPage() {
  return (
    <>
      <BookingFlowHeader
        activeStep={2}
        announcement="Your $37 consult is reserved. Choose a time that works for you."
      />
      <main className="bg-linen-soft px-5 pt-12 pb-16 md:px-10 md:pt-16 md:pb-28">
        <div className="mx-auto flex max-w-content flex-col items-start gap-10 lg:flex-row lg:justify-center lg:gap-[72px]">
          <section className="flex w-full max-w-[420px] flex-col gap-6 lg:pt-7" aria-labelledby="calendar-title">
            <p className="text-sm font-heavy leading-[18px] tracking-[0.16em] text-sage-ink">STEP 2 OF 3</p>
            <h1 id="calendar-title" className="font-display text-[42px] font-heavy leading-[1.12] tracking-tight text-balance text-black md:text-[54px]">
              Pick a time to talk with us.
            </h1>
            <p className="text-[17px] leading-7 text-muted md:text-[19px] md:leading-[30px]">
              Choose the day and time that works best for you. Your Program Advisor will call you at the number you entered.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                'Private, 1-on-1, about 60 minutes',
                'Bring your questions. There are no wrong ones.',
                'Need to reschedule? Use the link in your confirmation email.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-medium leading-6 text-black">
                  <span aria-hidden="true" className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-sage text-[12px] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <figure className="flex flex-col gap-3 rounded-[20px] bg-white p-6">
              <blockquote className="text-base leading-[25px] text-black">
                “From day one, I&apos;ve felt like I&apos;m being genuinely cared for and not just treated like another client.”
              </blockquote>
              <figcaption className="text-sm font-bold leading-5 text-black">Darren B., Be Resilient Client</figcaption>
            </figure>
          </section>

          <section className="w-full min-w-0 max-w-[620px] rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_24px_60px_rgb(0_0_0/0.07)] sm:p-8" aria-labelledby="meeting-title">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-black/8 pb-5">
              <div className="flex flex-col gap-1">
                <h2 id="meeting-title" className="font-display text-xl font-bold leading-[30px] text-black">Terrain Health Consultation</h2>
                <p className="text-sm leading-5 text-muted">30 min · Phone call with a Program Advisor</p>
              </div>
              <span className="rounded-full bg-sage-soft px-3.5 py-2 text-xs font-bold leading-4 text-sage-ink">PAID · $37</span>
            </div>
            <div
              className="meetings-iframe-container min-h-[620px] w-full"
              data-src="https://meetings-na2.hubspot.com/breanna-wade/health-consultation?embed=true"
              aria-label="Choose a time for your Terrain Health Consultation"
            />
            <p className="mt-4 text-center text-xs leading-[18px] text-muted">Times are shown in your local time zone.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
      <BookingFlowRedirect stage="calendar" />
      <Script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" strategy="afterInteractive" />
    </>
  )
}
