import { CheckIcon } from '@/components/landing/primitives'
import { SiteFooter } from '@/components/landing/closing'
import { BookingFlowHeader } from '@/components/order/booking-flow-header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'You’re Booked | Be Resilient',
  description: 'Your Terrain Health Consultation is confirmed. Review what to expect before your call.',
}

const nextSteps = [
  {
    title: 'Check your inbox',
    description: 'Your confirmation has the date, time, and the number we’ll call from. Add it to your calendar so nothing slips.',
  },
  {
    title: 'Jot down your questions',
    description: 'Anything you’ve been wondering about testing, nutrition, supplements, or how this works alongside your care. Bring all of it.',
  },
  {
    title: 'Join at your chosen time',
    description: 'Your Program Advisor will start the meeting at your chosen time. Find a quiet spot, and invite a family member to listen in if that helps.',
  },
]

export default function ThankYouPage() {
  return (
    <>
      <BookingFlowHeader
        activeStep={4}
        announcement="Check your inbox for your confirmation and call details."
      />
      <main className="bg-linen-soft px-5 pt-14 pb-16 md:px-10 md:pt-16 md:pb-28">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-10 text-center">
          <div className="flex size-[72px] items-center justify-center rounded-full bg-sage text-black shadow-[0_12px_30px_rgb(132_168_91/0.35)]">
            <CheckIcon size={34} strokeWidth={2.7} />
          </div>
          <div className="flex max-w-[760px] flex-col items-center gap-5">
            <p className="text-sm font-heavy leading-[18px] tracking-[0.16em] text-sage-ink">YOU&apos;RE BOOKED</p>
            <h1 className="font-display text-[42px] font-heavy leading-[1.1] tracking-tight text-balance text-black md:text-[60px]">
              Thank you. We&apos;ll talk with you soon.
            </h1>
            <p className="max-w-[640px] text-[17px] leading-7 text-pretty text-muted md:text-[19px] md:leading-[30px]">
              Your Terrain Health Consultation is confirmed. A confirmation email with your call time is on its way.
            </p>
          </div>
          <ol className="grid w-full grid-cols-1 gap-5 text-left md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-3.5 rounded-2xl bg-white p-6 md:p-7">
                <span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-sage font-display text-base font-heavy leading-5 text-black">{index + 1}</span>
                <h2 className="font-display text-lg font-bold leading-[26px] text-black">{step.title}</h2>
                <p className="text-sm leading-[25px] text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
          <p className="text-center text-sm leading-6 text-muted">
            Questions before your call?{' '}
            <a href="mailto:hello@redeemfm.com" className="font-semibold text-black underline underline-offset-4">Email hello@redeemfm.com</a>
            {' '}and we’ll get right back to you.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
