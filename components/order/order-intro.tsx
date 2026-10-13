import Image from 'next/image'
import { CheckIcon, Eyebrow, Highlight } from '@/components/landing/primitives'

const benefits = [
  { label: "Share your story and what you've already tried", color: 'bg-sage' },
  { label: 'Designed to work alongside the care you already have', color: 'bg-sky' },
  { label: 'Secure checkout. U.S. residents only.', color: 'bg-sun' },
]

export function OrderIntro() {
  return (
    <section
      aria-labelledby="order-title"
      className="flex flex-col items-center gap-5 text-center lg:items-start lg:gap-6 lg:pt-7 lg:text-left"
    >
      <p
        aria-hidden="true"
        className="-rotate-[4deg] rounded-[12px] bg-sun px-3.5 py-2 font-display text-[13px] font-heavy leading-4 text-black shadow-[0_8px_20px_rgb(0_0_0/0.06)] md:px-4 md:py-2.5 md:text-sm md:leading-[18px]"
      >
        {"You're almost there"}
      </p>
      <Eyebrow>ONE LAST STEP</Eyebrow>
      <h1
        id="order-title"
        className="font-display text-[34px] font-heavy leading-[40px] tracking-[-0.04em] text-black md:text-4xl md:leading-[60px] md:tracking-tight"
      >
        Reserve your
        <br />
        <Highlight>private consult.</Highlight>
      </h1>
      <p className="max-w-[468px] text-[15px] leading-6 text-pretty text-muted md:text-[19px] md:leading-[30px]">
        {
          "Your $37 Terrain Health Consultation is a 1-on-1 conversation with a Program Advisor on Dr. Pete's team. You'll leave with clarity on your next step."
        }
      </p>
      <ul className="flex w-full max-w-[340px] flex-col gap-3 pt-1 text-left md:max-w-none md:gap-3.5">
        {benefits.map((benefit) => (
          <li key={benefit.label} className="flex items-start gap-3">
            <span
              className={`flex size-[22px] shrink-0 items-center justify-center rounded-full text-black md:size-6 ${benefit.color}`}
            >
              <CheckIcon size={11} strokeWidth={2.4} />
            </span>
            <span className="text-[15px] font-medium leading-[22px] text-black md:text-[17px] md:leading-6">
              {benefit.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Stars() {
  return (
    <svg width="96" height="17" viewBox="0 0 112 20" role="img" aria-label="5 out of 5 stars" className="shrink-0">
      {[0, 23, 46, 69, 92].map((x) => (
        <path
          key={x}
          transform={`translate(${x} 0)`}
          d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z"
          fill="currentColor"
        />
      ))}
    </svg>
  )
}

export function OrderTrust() {
  return (
    <aside aria-label="Why clients trust Be Resilient" className="flex flex-col gap-4 lg:col-start-1 lg:gap-6">
      <div className="flex items-center gap-4 rounded-[20px] bg-white py-4 pr-5 pl-4 md:py-[18px] md:pr-6 md:pl-[18px]">
        <Image
          src="/images/dr-pete-avatar.webp"
          alt="Dr. Pete Sulack"
          width={60}
          height={60}
          className="size-[52px] shrink-0 rounded-full object-cover object-[50%_22%] md:size-[60px]"
        />
        <div className="flex flex-col gap-0.5">
          <p className="font-display text-[15px] font-bold leading-5 text-black md:text-[17px] md:leading-small">
            Built by Dr. Pete Sulack
          </p>
          <p className="text-[13px] font-medium leading-[18px] text-muted md:text-[14px] md:leading-5">
            Founder, Be Resilient · 2.7M+ followers across social
          </p>
        </div>
      </div>
      <figure className="flex flex-col gap-3 rounded-[20px] bg-white p-5 text-black md:p-6">
        <Stars />
        <blockquote className="text-[15px] leading-6 md:text-[16px] md:leading-[25px]">
          {"\u201CFrom day one, I've felt like I'm being genuinely cared for and not just treated like another client.\u201D"}
        </blockquote>
        <figcaption className="text-[13px] font-bold leading-5 md:text-[14px]">Darren B., Be Resilient Client</figcaption>
      </figure>
    </aside>
  )
}
