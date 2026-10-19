import { Star } from 'lucide-react'

const included = [
  'A private conversation with a Program Advisor',
  "Time to share your history and what you’ve tried",
  'A look at what may be missing beneath the surface',
  'Answers about testing, timing, and enrollment',
  "Clarity on your next step, whether or not it’s Be Resilient",
]

export function OrderTwoSummary() {
  return (
    <aside className="flex flex-col gap-6">
      <section aria-labelledby="consult-includes" className="flex flex-col gap-5 rounded-[24px] bg-white p-6 md:gap-6 md:p-10">
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-heavy tracking-[0.16em] text-sage-ink">YOUR CONSULT</p>
          <h2 id="consult-includes" className="font-display text-[30px] font-heavy leading-tight tracking-snug text-black md:text-[38px]">
            What&apos;s included
          </h2>
        </div>
        <ul className="flex flex-col">
          {included.map((item) => (
            <li key={item} className="flex items-center justify-between gap-4 border-b border-black/10 py-3.5">
              <span className="text-[14px] font-semibold leading-6 text-black md:text-[16px]">{item}</span>
              <span className="shrink-0 text-[12px] font-bold text-sage-ink md:text-sm">Included</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4 pt-1 font-display text-base font-bold text-black md:text-lg">
          <span>Your investment today</span>
          <span>$37</span>
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {['Private and one-on-one', 'U.S. residents only', 'Works alongside your care'].map((item, index) => (
            <li key={item} className="flex items-center gap-2 rounded-full border border-black/10 px-3 py-2 text-[11px] font-semibold leading-4 text-black">
              <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${index === 0 ? 'bg-sage' : index === 1 ? 'bg-sky' : 'bg-sun'}`} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <figure className="flex flex-col gap-4 rounded-[24px] bg-white p-6 md:p-9">
        <div aria-label="5 out of 5 stars" className="flex gap-1 text-black">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} aria-hidden="true" size={15} fill="currentColor" strokeWidth={1.5} />
          ))}
        </div>
        <blockquote className="text-[15px] leading-7 text-black md:text-base md:leading-[27px]">
          “My journey with Be Resilient has been amazing and I have learned so much. I believe this is truly one of those programs that goes beyond conventional thinking and provides you with the knowledge and information to make educated decisions.”
        </blockquote>
        <figcaption className="border-t border-black/10 pt-4">
          <span className="block text-sm font-bold leading-5 text-black">Tracy B.</span>
          <span className="block text-[13px] leading-5 text-muted">Be Resilient Client</span>
        </figcaption>
      </figure>
    </aside>
  )
}
