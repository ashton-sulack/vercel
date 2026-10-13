import Image from 'next/image'
import { CtaBlock, Highlight } from './primitives'

export function AnnouncementBar() {
  return (
    <div className="announcement-bar flex items-center justify-center gap-3 bg-linen px-6 py-3.5 text-center">
      <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-sage" />
      <p className="text-sm font-bold leading-5 -tracking-snug text-black">
        Private 1-on-1 consults are now open for U.S. residents
      </p>
    </div>
  )
}

export function Hero() {
  return (
    <section className="flex flex-col items-center bg-linen-soft px-5 pt-8 pb-16 md:px-10 md:pt-10 md:pb-24">
      <Image
        src="/images/logo.webp"
        alt="Be Resilient"
        width={208}
        height={32}
        priority
        className="h-7 w-[182px] object-contain md:h-8 md:w-[208px]"
      />
      <div className="flex w-full flex-col items-center gap-5 pt-10 md:gap-7 md:pt-[72px]">
        <p className="hero-eyebrow max-w-full whitespace-nowrap rounded-full border border-black/8 bg-white px-4 py-2 text-center text-[clamp(8px,2.45vw,12px)] font-bold uppercase leading-4 tracking-[0.06em] text-black md:px-5 md:py-2.5 md:text-xs md:tracking-wider">
          {"A private consult with Dr. Pete's team"}
        </p>
        <h1 className="max-w-[1060px] text-center font-display text-[clamp(26px,8.3vw,40px)] font-heavy leading-[1.12] tracking-[-0.04em] text-balance text-black md:text-[64px] md:leading-[68px] lg:text-[80px] lg:leading-[84px]">
          Stop guessing. <br className="md:hidden" />
          Start understanding <br className="md:hidden" />
          <Highlight>what your body actually needs.</Highlight>
        </h1>
        <p className="max-w-[740px] text-center text-[15px] leading-6 text-pretty text-muted md:text-[21px] md:leading-[33px]">
          {
            "Book a private, 1-on-1 consult with Dr. Pete's team. Share your story, explore what may be missing beneath the surface, and walk away with real clarity on your next step, whether or not Be Resilient is right for you."
          }
        </p>
        <CtaBlock />
      </div>
    </section>
  )
}
