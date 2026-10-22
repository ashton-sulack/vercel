import Image from 'next/image'
import { CheckIcon } from '@/components/landing/primitives'

type BookingFlowHeaderProps = {
  activeStep: 2 | 3 | 4
  announcement: string
}

const steps = [
  { number: 1, label: 'Consult reserved', shortLabel: 'Consult' },
  { number: 2, label: 'Pick your time', shortLabel: 'Time', completedLabel: 'Time booked', completedShortLabel: 'Booked' },
  { number: 3, label: 'Pre-consult form', shortLabel: 'Form' },
] as const

export function BookingFlowHeader({ activeStep, announcement }: BookingFlowHeaderProps) {
  return (
    <header>
      <div className="flex items-center justify-center gap-3 bg-linen px-5 py-3.5 text-center">
        <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-sage" />
        <p className="text-sm font-bold leading-5 text-black">{announcement}</p>
      </div>
      <div className="flex flex-col items-center gap-6 bg-linen-soft px-4 pt-8 md:gap-7 md:pt-10">
        <Image
          src="/images/logo.webp"
          alt="Be Resilient"
          width={208}
          height={32}
          priority
          className="h-8 w-[208px] object-contain"
        />
        {activeStep === 4 ? (
          <div className="flex items-center gap-2 rounded-full border border-black/6 bg-white py-2 pr-5 pl-2">
            <span className="flex size-6 items-center justify-center rounded-full bg-sage text-black">
              <CheckIcon size={12} strokeWidth={2.8} />
            </span>
            <span className="text-sm font-bold leading-[18px] text-black">You&apos;re all set</span>
          </div>
        ) : (
          <ol aria-label="Booking progress" className="flex items-center gap-2 rounded-full border border-black/6 bg-white py-1.5 pr-3 pl-1.5 sm:gap-3.5 sm:py-2 sm:pr-[18px] sm:pl-2">
            {steps.map((step, index) => {
              const complete = step.number < activeStep
              const current = step.number === activeStep
              const label = complete && 'completedLabel' in step ? step.completedLabel : step.label
              const shortLabel = complete && 'completedShortLabel' in step ? step.completedShortLabel : step.shortLabel

              return (
                <li
                  key={step.number}
                  aria-current={current ? 'step' : undefined}
                  className="flex min-w-0 items-center gap-1.5 sm:gap-2"
                >
                  <span
                    className={`flex size-[22px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold leading-3 sm:size-6 sm:text-xs ${
                      complete ? 'bg-sage text-black' : current ? 'bg-sun text-black' : 'bg-linen-soft text-muted'
                    }`}
                  >
                    {complete ? <CheckIcon size={11} strokeWidth={2.8} /> : step.number}
                  </span>
                  <span className={`text-[12px] leading-4 sm:text-sm sm:leading-[18px] ${current ? 'font-bold text-black' : 'font-medium text-muted'}`}>
                    <span className="sm:hidden">{shortLabel}</span>
                    <span className="hidden sm:inline">{label}</span>
                  </span>
                  {index < steps.length - 1 && (
                    <span aria-hidden="true" className="ml-1 h-px w-3 shrink-0 bg-black/16 sm:ml-0 sm:w-7" />
                  )}
                </li>
              )
            })}
          </ol>
        )}
      </div>
    </header>
  )
}
