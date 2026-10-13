import Image from 'next/image'
import { CtaBlock, Eyebrow, Highlight } from './primitives'

export function FinalCta() {
  return (
    <section
      id="reserve"
      className="flex scroll-mt-8 flex-col items-center bg-linen-soft px-5 pt-16 pb-20 md:px-10 md:pt-28 md:pb-[120px]"
    >
      <div className="flex w-full max-w-[880px] flex-col items-center gap-5 text-center md:gap-6">
        <p
          aria-hidden="true"
          className="-rotate-[4deg] rounded-[12px] bg-sun px-3.5 py-2 font-display text-[13px] font-heavy leading-4 text-black shadow-[0_8px_20px_rgb(0_0_0/0.06)] md:px-4 md:py-2.5 md:text-sm md:leading-[18px]"
        >
          Take the time you need
        </p>
        <Eyebrow>RESERVE YOUR CONSULT</Eyebrow>
        <h2 className="font-display text-[34px] font-heavy leading-[40px] tracking-[-0.04em] text-balance text-black md:text-[68px] md:leading-[72px]">
          Ready to see the <br />
          <Highlight>whole picture?</Highlight>
        </h2>
        <p className="max-w-[660px] text-[15px] leading-6 text-pretty text-muted md:text-[19px] md:leading-[30px]">
          {
            "You don't have to sort through every opinion or figure out every decision alone. It starts with one private conversation."
          }
        </p>
        <CtaBlock note="$37 private consult · U.S. residents only" />
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 bg-white px-5 pt-14 pb-10 md:px-10 md:pt-[72px] md:pb-12">
      <div className="mx-auto flex max-w-content flex-col gap-8 md:gap-9">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-6">
          <Image src="/images/logo.webp" alt="Be Resilient" width={196} height={30} className="h-[26px] w-[170px] object-contain md:h-[30px] md:w-[196px] md:object-left" />
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] leading-5 md:gap-x-8 md:gap-y-3 md:text-sm">
            <a href="mailto:hello@redeemfm.com" className="basis-full text-center font-semibold text-black hover:underline md:basis-auto">
              hello@redeemfm.com
            </a>
            <a href="#" className="text-muted hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="text-muted hover:text-black">
              Terms of Service
            </a>
          </nav>
        </div>
        <p className="border-t border-black/8 pt-7 text-center text-[12.5px] leading-5 text-muted md:pt-8 md:text-left md:text-[14px] md:leading-[23px]">
          Disclaimer: Be Resilient is a nutrition- and lifestyle-focused wellness and educational program designed to
          complement, not replace, medical care. It does not diagnose, treat, cure, or prevent any disease, including
          cancer, and is not a substitute for medical care, oncology care, or physician-directed treatment. The program
          is designed to support the body&apos;s internal terrain, which is influenced by factors like nutrition,
          detoxification, oxygenation, stress, faith and mindset, and immune health. Client experiences shared on this
          page are individual accounts and are not typical or guaranteed. The information provided is for educational
          purposes only and is not medical advice. Continue working closely with your physician, oncologist, and
          healthcare team regarding diagnosis, treatment decisions, medications, and all medical care, and consult your
          physician before making any changes to your diet, supplements, or lifestyle.
        </p>
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-3">
          <p className="text-[13px] leading-5 text-muted md:text-[14px]">© 2026 Be Resilient. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="text-xs leading-[18px] text-muted">Powered by</span>
            <span className="font-display text-[14px] font-heavy leading-[18px] tracking-[0.06em] text-black">MXG</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
