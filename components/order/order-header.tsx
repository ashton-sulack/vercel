import Image from 'next/image'
import Link from 'next/link'
import { CheckIcon } from '@/components/landing/primitives'

export function OrderHeader({ homeHref = '/v1' }: { homeHref?: string }) {
  return (
    <header>
      <div className="announcement-bar flex items-center justify-center gap-3 bg-linen px-6 py-3.5">
        <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-sage" />
        <p className="text-sm font-bold leading-5 -tracking-snug text-black">100% secure checkout for U.S. residents</p>
      </div>
      <div className="flex flex-col items-center gap-6 bg-linen-soft px-5 pt-8 md:gap-7 md:pt-10">
        <Link href={homeHref} aria-label="Be Resilient home">
          <Image
            src="/images/logo.webp"
            alt="Be Resilient"
            width={208}
            height={32}
            priority
            className="h-7 w-[182px] object-contain md:h-8 md:w-[208px]"
          />
        </Link>
        <ol
          aria-label="Checkout progress"
          className="flex items-center gap-2.5 rounded-full border border-black/6 bg-white py-1.5 pr-4 pl-1.5 md:gap-3.5 md:py-2 md:pr-[18px] md:pl-2"
        >
          <li className="flex items-center gap-2">
            <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-sage text-black md:size-6">
              <CheckIcon size={11} strokeWidth={2.8} />
            </span>
            <span className="text-[12.5px] font-medium leading-4 text-muted md:text-[14px] md:leading-[18px]">
              <span className="md:hidden">Learn</span>
              <span className="hidden md:inline">Learn about your consult</span>
            </span>
          </li>
          <li aria-hidden="true" className="h-px w-5 shrink-0 bg-black/16 md:w-9" />
          <li aria-current="step" className="flex items-center gap-2">
            <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-sun font-body text-[11px] font-heavy leading-3 text-black md:size-6 md:text-[12px]">
              2
            </span>
            <span className="text-[12.5px] font-bold leading-4 text-black md:text-[14px] md:leading-[18px]">
              <span className="md:hidden">Reserve</span>
              <span className="hidden md:inline">Reserve your consult</span>
            </span>
          </li>
        </ol>
      </div>
    </header>
  )
}
