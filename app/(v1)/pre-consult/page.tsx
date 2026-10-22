import Image from 'next/image'
import Script from 'next/script'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/landing/closing'
import { BookingFlowHeader } from '@/components/order/booking-flow-header'
import { BookingFlowRedirect } from '@/components/order/booking-flow-redirect'

export const metadata: Metadata = {
  title: 'Pre-Consult Form | Be Resilient',
  description: 'Share a little about your story so your Program Advisor can prepare for your consultation.',
}

const formScript = 'https://js-na2.hsforms.net/forms/embed/244927881.js'

export default function PreConsultPage() {
  return (
    <>
      <BookingFlowHeader
        activeStep={3}
        announcement="One short form so your Program Advisor is ready for your call."
      />
      <main className="bg-linen-soft px-5 pt-12 pb-16 md:px-10 md:pt-16 md:pb-28">
        <div className="mx-auto flex max-w-content flex-col items-start gap-10 lg:flex-row lg:justify-center lg:gap-[72px]">
          <section className="flex w-full max-w-[420px] flex-col items-start gap-6 lg:pt-7" aria-labelledby="pre-consult-title">
            <span className="-rotate-[4deg] rounded-xl bg-sun px-4 py-2.5 text-sm font-heavy leading-[18px] text-black shadow-[0_8px_20px_rgb(0_0_0/0.06)]">Last step</span>
            <p className="text-sm font-heavy leading-[18px] tracking-[0.16em] text-sage-ink">STEP 3 OF 3</p>
            <h1 id="pre-consult-title" className="font-display text-[42px] font-heavy leading-[1.12] tracking-tight text-balance text-black md:text-[50px]">
              Help us make your call count.
            </h1>
            <p className="text-[17px] leading-7 text-muted md:text-[19px] md:leading-[30px]">
              A few questions about your history, what you&apos;ve tried, and what you&apos;re hoping for. Your Program Advisor reads every answer before your call, so you can spend the time on what matters most to you.
            </p>
            <ul className="flex flex-col gap-4">
              {[
                'Takes about 5 minutes',
                'Private and only seen by your Program Advisor',
                'Skip anything you would rather talk through on the call',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-medium leading-6 text-black">
                  <span aria-hidden="true" className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-sage text-[12px] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <figure className="flex items-center gap-4 rounded-[20px] bg-white p-5">
              <Image src="/images/dr-pete-avatar.webp" alt="Dr. Pete Sulack" width={56} height={56} className="size-14 shrink-0 rounded-full object-cover object-[50%_22%]" />
              <div className="flex flex-col gap-1">
                <blockquote className="text-sm leading-6 text-black">
                  “You don&apos;t have to sort through every opinion or figure out every decision alone. Take the time you need. Ask your questions.”
                </blockquote>
                <figcaption className="text-sm font-bold leading-5 text-black">Dr. Pete Sulack, Founder</figcaption>
              </div>
            </figure>
          </section>

          <section className="w-full min-w-0 max-w-[620px] rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_24px_60px_rgb(0_0_0/0.07)] sm:p-8" aria-labelledby="form-title">
            <div className="mb-5 flex flex-col gap-1 border-b border-black/8 pb-4">
              <h2 id="form-title" className="font-display text-xl font-bold leading-[30px] text-black">Pre-Consult Form</h2>
              <p className="text-sm leading-5 text-muted">So we can prepare for your Terrain Health Consultation</p>
            </div>
            <div
              className="hs-form-frame min-h-[620px] w-full"
              data-region="na2"
              data-form-id="0d6c7339-db0d-4ada-8953-cb5373053efe"
              data-portal-id="244927881"
            />
            <p className="mt-4 text-center text-xs leading-[18px] text-muted">Your information is shared with your Program Advisor to help prepare for your call.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
      <BookingFlowRedirect stage="pre-consult" />
      <Script src={formScript} strategy="afterInteractive" />
    </>
  )
}
