'use client'

import { useState } from 'react'
import { ArrowIcon, CheckIcon } from '@/components/landing/primitives'
import { cn } from '@/lib/utils'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const fieldClass =
  'h-[50px] w-full min-w-0 rounded-[12px] border border-black/14 bg-white px-4 text-[16px] leading-5 text-black placeholder:text-black/40 transition-colors focus:border-sage-ink focus:outline-none focus:ring-2 focus:ring-sage/30 md:text-sm'

function Field({
  label,
  htmlFor,
  required,
  className,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn('flex min-w-0 flex-1 flex-col gap-[7px]', className)}>
      <label htmlFor={htmlFor} className="text-[14px] font-semibold leading-[18px] text-black">
        {label}
        {required ? ' *' : null}
      </label>
      {children}
    </div>
  )
}

function Chevron() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-black"
    >
      <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function OrderForm() {
  const [stateValue, setStateValue] = useState('')
  const [status, setStatus] = useState<'idle' | 'pending'>('idle')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('pending')
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-labelledby="order-summary-title"
      className="flex flex-col gap-5 rounded-[24px] border border-black/6 bg-white p-5 shadow-[0_24px_60px_rgb(0_0_0/0.07)] md:rounded-[28px] md:p-9"
    >
      <div className="flex items-start justify-between gap-4 border-b border-black/8 pb-5">
        <div className="flex flex-col gap-1">
          <h2
            id="order-summary-title"
            className="font-display text-[19px] font-heavy leading-6 -tracking-snug text-black md:text-xl md:leading-[30px]"
          >
            Terrain Health Consultation
          </h2>
          <p className="text-[13px] leading-5 text-muted md:text-sm md:leading-small">
            Private and 1-on-1 with a Program Advisor
          </p>
        </div>
        <p className="shrink-0 rounded-full bg-sage-soft px-3 py-1 font-display text-[17px] font-heavy leading-6 text-black md:px-3.5 md:py-1.5 md:text-lg md:leading-[26px]">
          $37
        </p>
      </div>

      <fieldset className="flex flex-col gap-3.5">
        <legend className="sr-only">Your details</legend>
        <Field label="Full Name" htmlFor="full-name">
          <input id="full-name" name="name" autoComplete="name" placeholder="Enter your full name" className={fieldClass} />
        </Field>
        <div className="flex flex-col gap-3.5 sm:flex-row sm:gap-3">
          <Field label="Email" htmlFor="email" required>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className={fieldClass}
            />
          </Field>
          <Field label="Phone" htmlFor="phone" required>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+1 (555) 000-0000"
              className={fieldClass}
            />
          </Field>
        </div>
        <Field label="State Selection" htmlFor="state" required>
          <div className="relative">
            <select
              id="state"
              name="state"
              required
              value={stateValue}
              onChange={(event) => setStateValue(event.target.value)}
              className={cn(fieldClass, 'appearance-none truncate pr-11', !stateValue && 'text-black/40')}
            >
              <option value="" disabled>
                Select the state you currently reside in
              </option>
              {US_STATES.map((state) => (
                <option key={state} value={state} className="text-black">
                  {state}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </Field>
      </fieldset>

      <div className="flex flex-col gap-2.5">
        <p className="text-[14px] font-semibold leading-[18px] text-black">Collect Payment *</p>
        <div className="flex items-center justify-between gap-2 rounded-[12px] border-[1.5px] border-sage bg-[#f6f9f2] px-3.5 py-3.5 sm:gap-3 sm:px-4">
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-sage text-black">
              <CheckIcon size={11} strokeWidth={2.4} />
            </span>
            <span className="whitespace-nowrap text-[13px] font-bold leading-5 text-black sm:text-[14px] md:text-sm">
              <span className="hidden sm:inline">$37 </span>Terrain Health Consultation
            </span>
          </div>
          <span className="shrink-0 text-[14px] font-bold leading-5 text-black md:text-sm">$37</span>
        </div>
        <div className="flex flex-col gap-2.5 rounded-[14px] bg-linen-soft p-4 md:p-[18px]">
          <p className="text-[14px] font-bold leading-5 text-black md:text-sm">Order Summary</p>
          <div className="flex justify-between gap-3 text-[13.5px] leading-5 text-muted md:text-[14px]">
            <span>
              <span className="hidden sm:inline">$37 </span>Terrain Health Consultation
            </span>
            <span>$37</span>
          </div>
          <div className="flex items-center justify-between border-t border-black/10 pt-2.5 text-black">
            <span className="text-[14px] font-heavy leading-5 md:text-sm">Total</span>
            <span className="text-[17px] font-heavy leading-5">$37</span>
          </div>
        </div>
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="sr-only">Card details</legend>
        <Field label="Card number" htmlFor="card-number">
          <div className="relative">
            <input
              id="card-number"
              inputMode="numeric"
              autoComplete="cc-number"
              placeholder="1234 1234 1234 1234"
              className={cn(fieldClass, 'pr-14')}
            />
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2"
            >
              <rect x="0.75" y="0.75" width="24.5" height="16.5" rx="3" fill="none" stroke="rgb(0 0 0 / 35%)" strokeWidth="1.5" />
              <path d="M1 6h24" fill="none" stroke="rgb(0 0 0 / 35%)" strokeWidth="2" />
            </svg>
          </div>
        </Field>
        <div className="flex gap-3">
          <Field label="Expiration date" htmlFor="card-exp">
            <input id="card-exp" inputMode="numeric" autoComplete="cc-exp" placeholder="MM / YY" className={fieldClass} />
          </Field>
          <Field label="Security code" htmlFor="card-cvc">
            <input id="card-cvc" inputMode="numeric" autoComplete="cc-csc" placeholder="CVC" className={fieldClass} />
          </Field>
        </div>
        <div className="flex gap-3">
          <Field label="Country" htmlFor="country" className="flex-[1.4] sm:flex-1">
            <div className="relative">
              <select id="country" name="country" defaultValue="US" className={cn(fieldClass, 'appearance-none pr-9')}>
                <option value="US">United States</option>
              </select>
              <Chevron />
            </div>
          </Field>
          <Field label="ZIP code" htmlFor="zip">
            <input
              id="zip"
              name="zip"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="12345"
              className={fieldClass}
            />
          </Field>
        </div>
        <p className="flex items-center justify-center gap-2 pt-0.5 text-xs font-semibold leading-[18px] text-muted">
          <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" className="shrink-0 text-sage">
            <rect x="3" y="7" width="10" height="7.5" rx="2" fill="currentColor" />
            <path d="M5 7V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          100% secure and safe payments
        </p>
      </fieldset>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="sms-consent"
          className="mt-0.5 size-[18px] shrink-0 cursor-pointer rounded-[5px] accent-sage"
        />
        <span className="text-[12.5px] leading-[19px] text-muted">
          By entering my phone number on this form and clicking submit, I consent to receive SMS from Be Resilient,
          including messages sent via automation using the contact information provided. Message and data rates may
          apply. You may unsubscribe any time by replying STOP via text message.{' '}
          <a href="#" className="underline underline-offset-2 hover:text-black">
            Privacy Policy
          </a>
        </span>
      </label>

      <button
        type="submit"
        className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-sage px-6 font-body text-[14px] font-heavy uppercase leading-5 tracking-[0.1em] whitespace-nowrap text-black transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#93b56b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:h-[60px] md:text-[16px]"
      >
        Reserve my consult
        <ArrowIcon size={18} />
      </button>
      <p role="status" className={cn('text-center text-[13px] leading-5 text-muted', status === 'idle' && 'sr-only')}>
        {status === 'pending' ? 'Payment processing is not connected yet. No card details were sent.' : ''}
      </p>
    </form>
  )
}
