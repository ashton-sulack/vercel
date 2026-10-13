import { cn } from '@/lib/utils'

export const BOOKING_URL = '/order'

export function ArrowIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className="shrink-0">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CheckIcon({ size = 14, strokeWidth = 2 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
      <path
        d="M3 7.5l2.6 2.5L11 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PlayIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true" className="shrink-0">
      <path d="M4 2.5v9l7.5-4.5z" fill="currentColor" />
    </svg>
  )
}

const ctaSizes = {
  lg: 'h-14 px-8 text-[14px] gap-2.5 md:h-[68px] md:px-[52px] md:text-[17px] md:gap-3',
  md: 'h-14 px-8 text-[14px] gap-2.5 md:h-16 md:px-[44px] md:text-[16px] md:gap-3',
  sm: 'h-14 px-8 text-[14px] gap-2.5 md:h-[60px] md:px-9 md:text-sm',
}

export function CtaButton({
  size = 'lg',
  className,
}: {
  size?: keyof typeof ctaSizes
  className?: string
}) {
  return (
    <a
      href={BOOKING_URL}
      className={cn(
        'inline-flex shrink-0 items-center whitespace-nowrap justify-center rounded-full bg-sage font-body font-heavy uppercase leading-5 tracking-[0.1em] text-black transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#93b56b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black',
        ctaSizes[size],
        className,
      )}
    >
      Book my consult
      <ArrowIcon size={18} />
    </a>
  )
}

export function CtaBlock({ note = 'U.S. residents only' }: { note?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 pt-1 md:gap-3.5 md:pt-2">
      <CtaButton />
      <p className="text-center text-[13px] font-medium leading-[18px] -tracking-snug text-muted md:text-[14px]">{note}</p>
    </div>
  )
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('text-[12px] font-heavy leading-4 tracking-[0.16em] text-sage-ink md:text-[14px] md:leading-[18px]', className)}>
      {children}
    </p>
  )
}

export function SectionHeading({
  title,
  description,
  className,
}: {
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center gap-4 text-center md:gap-5', className)}>
      <h2 className="max-w-[940px] font-display text-[27px] font-heavy leading-[33px] tracking-tight text-balance text-black md:text-4xl md:leading-[60px]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[700px] text-[15px] leading-6 text-pretty text-muted md:text-lg md:leading-[31px]">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="box-decoration-clone rounded-full bg-[linear-gradient(to_bottom,transparent_56%,var(--sun)_56%,var(--sun)_94%,transparent_94%)] px-[0.12em]">
      {children}
    </span>
  )
}
