import { CheckIcon, SectionHeading } from './primitives'

const forYou = [
  'You want to intentionally support your body alongside your medical care.',
  "You're tired of conflicting advice and want a plan built on your own data.",
  "You're ready to make real changes to how you eat, move, and live.",
  'You want support for your body, mind, and spirit.',
  'You want a dedicated team in your corner.',
]

const notForYou = [
  "You're looking for a replacement for your doctor or oncologist.",
  'You want a quick fix or a one-size-fits-all protocol.',
  "You're not ready to change your daily habits.",
  'You expect someone else to do the work for you.',
  'You live outside the United States.',
]

function CrossIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FitList({ title, items, positive }: { title: string; items: string[]; positive: boolean }) {
  return (
    <div className="flex flex-col gap-5 rounded-[24px] bg-white p-6 md:gap-[22px] md:rounded-[28px] md:p-10">
      <h3 className="font-display text-[22px] font-heavy leading-7 tracking-[-0.025em] text-black md:text-[28px] md:leading-[34px]">
        {title}
      </h3>
      <ul className="flex flex-col gap-3.5 md:gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 md:gap-3.5">
            <span
              className={`flex size-6 shrink-0 items-center justify-center rounded-full text-black md:size-[26px] ${positive ? 'bg-sage' : 'bg-linen'}`}
            >
              {positive ? <CheckIcon size={13} strokeWidth={2.2} /> : <CrossIcon />}
            </span>
            <span className="text-[15px] leading-6 text-black md:text-[17px] md:leading-[26px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function FitCheck() {
  return (
    <section className="flex flex-col items-center gap-10 bg-linen-soft px-5 py-16 md:gap-14 md:px-10 md:py-[120px]">
      <SectionHeading title="Is Be Resilient right for you?" description="It isn't for everyone. Here's how to know." />
      <div className="grid w-full max-w-content gap-4 md:grid-cols-2 md:gap-6">
        <FitList title="This is for you if..." items={forYou} positive />
        <FitList title="This is not for you if..." items={notForYou} positive={false} />
      </div>
    </section>
  )
}
