import Image from 'next/image'

type Card = {
  media: React.ReactNode
  name: string
  role: string
  quote: string
  body: string
  stat: string
  statLabel: string
}

const cards: Card[] = [
  {
    media: (
      <Image
        src="/images/dr-pete-avatar.webp"
        alt="Portrait of Dr. Pete Sulack"
        width={96}
        height={96}
        className="size-20 rounded-full object-cover object-[50%_22%] md:size-24"
      />
    ),
    name: 'Dr. Pete Sulack',
    role: 'Founder, Be Resilient',
    quote: '\u201CAfter a Grade 4 brain cancer diagnosis, I asked one question.\u201D',
    body: 'While my medical team focused on treating the cancer, I wanted to know what I could do to intentionally support my body alongside that care. That question became Be Resilient.',
    stat: '2.7M+',
    statLabel: 'followers learn from Dr. Pete across social',
  },
  {
    media: (
      <div className="flex size-20 items-center justify-center rounded-full bg-sage text-black md:size-24">
        <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden="true" className="size-9 md:size-11">
          <path d="M9 8v20h26" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29 22l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    name: 'The Be Resilient Approach',
    role: 'Lab-guided wellness support',
    quote: 'Understand the body first. Then make recommendations with purpose.',
    body: "Your plan is informed by more than 470 biomarker insights, so every recommendation is built around your unique biology, not someone else's protocol.",
    stat: '470+',
    statLabel: 'biomarker insights guide your plan',
  },
]

export function FounderCards() {
  return (
    <section aria-label="About Be Resilient" className="bg-linen-soft px-5 pb-16 md:px-10 md:pb-28">
      <div className="mx-auto grid max-w-content gap-5 md:grid-cols-2 md:gap-6">
        {cards.map((card) => (
          <article
            key={card.name}
            className="flex flex-col items-center gap-4 rounded-[24px] border border-black/6 bg-white px-6 pt-9 pb-7 text-center md:gap-5 md:rounded-[28px] md:px-11 md:pt-11 md:pb-9"
          >
            {card.media}
            <div className="flex flex-col items-center gap-1">
              <h2 className="font-display text-[17px] font-bold leading-6 text-black md:text-lg md:leading-[26px]">{card.name}</h2>
              <p className="text-[13px] font-medium leading-5 tracking-[0.04em] text-muted md:text-[14px]">{card.role}</p>
            </div>
            <p className="font-display text-[19px] font-bold leading-[26px] tracking-snug text-balance text-black md:text-[25px] md:leading-8">
              {card.quote}
            </p>
            <p className="grow text-[15px] leading-6 text-pretty text-muted md:text-[17px] md:leading-[27px]">{card.body}</p>
            <div className="flex w-full flex-wrap items-center justify-center gap-x-2.5 gap-y-1 border-t border-black/8 pt-3">
              <span className="font-display text-[20px] font-heavy leading-7 text-sage-ink md:text-[22px]">{card.stat}</span>
              <span className="text-[13px] leading-5 text-muted md:text-[14px]">{card.statLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
