import { cn } from '@/lib/utils'
import { CheckIcon, SectionHeading } from './primitives'

const oldWay = [
  { text: 'Searching for answers at 2 a.m.', align: 'self-start' },
  { text: 'A cabinet full of supplements', align: 'self-end' },
  { text: 'Conflicting advice from everyone', align: 'self-start' },
  { text: "Copying someone else's protocol", align: 'self-center' },
  { text: 'Guessing what to eat', align: 'self-end' },
  { text: 'Figuring it all out alone', align: 'self-start' },
]

const newWay = [
  'Start with 470+ biomarker insights',
  'Nutrition built on your results',
  'Custom-compounded supplements',
  'A team that knows your case',
  'Support for body, mind, and faith',
  'A clear terrain plan with a purpose',
]

function StickyNote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute whitespace-nowrap px-3 py-2 text-[13px] font-bold leading-4 text-black shadow-[0_8px_20px_rgb(0_0_0/0.06)] md:px-4 md:py-2.5 md:text-sm md:leading-[18px]',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function OldVsNew() {
  return (
    <section className="flex flex-col items-center gap-12 bg-white px-5 py-16 md:gap-16 md:px-10 md:py-[120px]">
      <SectionHeading
        title="Stop piecing together advice that was never built for you."
        description="There's a better way to support your body: start with your own data, then build a plan with a purpose."
      />
      <div className="grid w-full max-w-content gap-16 md:grid-cols-2 md:gap-14 lg:gap-[72px]">
        <div className="relative flex flex-col gap-4 rounded-[24px] bg-linen-soft px-4 pt-9 pb-10 md:gap-[18px] md:rounded-[28px] md:px-8">
          <h3 className="self-center rounded-full border border-black/10 bg-white px-5 py-2 text-[12px] font-heavy leading-4 tracking-wider text-black md:px-[22px] md:py-2.5 md:text-[14px] md:leading-[18px]">
            THE OLD WAY
          </h3>
          <ul className="flex flex-col gap-3 pt-2 md:gap-3.5 md:pt-3">
            {oldWay.map((item) => (
              <li
                key={item.text}
                className={cn(
                  'max-w-full rounded-full border border-black/10 bg-white px-4 py-3 text-[14px] font-semibold leading-[18px] text-black/55 line-through decoration-1 md:px-[22px] md:py-3.5 md:text-[17px] md:leading-small',
                  item.align,
                )}
              >
                {item.text}
              </li>
            ))}
          </ul>
          <StickyNote className="-top-4 right-3 rotate-[4deg] rounded-md rounded-br-[4px] bg-sun md:right-[-14px]">
            Is this even working?
          </StickyNote>
          <StickyNote className="-bottom-4 left-3 -rotate-[4deg] rounded-md rounded-bl-[4px] bg-sky md:left-[-14px]">
            What should I eat?
          </StickyNote>
        </div>

        <div className="relative flex flex-col gap-4 rounded-[24px] bg-sage-soft px-4 pt-9 pb-10 md:gap-[18px] md:rounded-[28px] md:px-8">
          <h3 className="self-center rounded-full bg-sage px-5 py-2 text-center text-[12px] font-heavy leading-4 tracking-wider text-black md:px-[22px] md:py-2.5 md:text-[14px] md:leading-[18px]">
            THE BE RESILIENT WAY
          </h3>
          <ul className="relative flex flex-col gap-3 pt-2 md:gap-3.5 md:pt-3 md:pl-2">
            <span aria-hidden="true" className="absolute top-8 bottom-8 left-[23px] w-0.5 bg-sage md:top-10 md:left-[33px]" />
            {newWay.map((text, i) => {
              const isLast = i === newWay.length - 1
              return (
                <li
                  key={text}
                  className={cn(
                    'relative flex items-center gap-3 self-stretch rounded-full md:self-start border py-2 pr-4 pl-2.5 text-[13.5px] font-bold leading-[18px] text-black md:gap-3.5 md:py-3 md:pr-[22px] md:pl-3 md:text-[17px] md:leading-small',
                    isLast ? 'border-sage bg-sage' : 'border-black/10 bg-white',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-6 shrink-0 items-center justify-center rounded-full text-black md:size-7',
                      isLast ? 'bg-white' : 'bg-sage',
                    )}
                  >
                    <CheckIcon />
                  </span>
                  {text}
                </li>
              )
            })}
          </ul>
          <div
            aria-hidden="true"
            className="absolute -top-4 right-3 rotate-[6deg] whitespace-nowrap rounded-[12px] bg-sun px-3.5 py-2 font-display text-[14px] font-heavy leading-[18px] tracking-[-0.01em] text-black shadow-[0_8px_20px_rgb(0_0_0/0.08)] md:right-[-18px] md:px-[18px] md:py-3 md:text-[16px] md:leading-5"
          >
            Built on YOUR biology
          </div>
        </div>
      </div>
    </section>
  )
}
