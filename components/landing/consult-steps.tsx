import Image from 'next/image'
import { CtaButton, Eyebrow } from './primitives'

const steps = [
  { title: 'Share your story', body: "Your history, what you've tried, and what you're hoping to achieve." },
  {
    title: 'See what may be missing',
    body: 'Learn how a lab-guided approach looks beneath the surface to understand what your body may need.',
  },
  {
    title: 'Leave with clarity',
    body: 'Walk away knowing what to do next, whether or not Be Resilient is right for you.',
  },
]

export function ConsultSteps() {
  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-[120px]">
      <div className="mx-auto flex max-w-content flex-col items-center gap-10 lg:flex-row lg:gap-[72px]">
        <div className="relative aspect-[9/10] w-full max-w-[540px] shrink-0 overflow-hidden rounded-[24px] bg-[#1a1a1a] md:rounded-[28px]">
          <Image
            src="/images/dr-pete-message.webp"
            alt="Dr. Pete Sulack"
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex w-full grow flex-col items-center gap-4 text-center md:gap-7 lg:items-start lg:text-left">
          <Eyebrow>YOUR CONSULT</Eyebrow>
          <h2 className="font-display text-[28px] font-heavy leading-[34px] tracking-tight text-balance text-black md:text-[52px] md:leading-[56px]">
            What happens on your consult?
          </h2>
          <p className="max-w-[560px] text-[15px] leading-6 text-pretty text-muted md:text-lg md:leading-[31px]">
            {"A private, 1-on-1 conversation with a Program Advisor on Dr. Pete's team."}
          </p>
          <ol className="flex w-full flex-col border-b border-black/10 pt-2 text-left md:pt-1">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4 border-t border-black/10 py-5 md:gap-6 md:py-6">
                <span className="w-8 shrink-0 font-display text-[19px] font-heavy leading-[26px] text-sage-ink md:w-10 md:text-[22px] md:leading-[30px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-1 md:gap-1.5">
                  <h3 className="font-display text-[18px] font-bold leading-[26px] tracking-snug text-black md:text-xl md:leading-[30px]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-6 text-muted md:text-[17px] md:leading-[27px]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-col items-center gap-3 pt-3 sm:flex-row sm:gap-5 lg:items-center">
            <CtaButton size="md" />
            <p className="text-[13px] font-medium leading-[18px] text-muted md:text-[14px]">U.S. residents only</p>
          </div>
        </div>
      </div>
    </section>
  )
}
