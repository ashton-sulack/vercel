'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Who will I speak with on my consult?',
    a: "A Program Advisor on Dr. Pete's team. They'll listen to your story, answer your questions, and help you determine whether Be Resilient is the right fit for your needs.",
  },
  {
    q: 'Does Be Resilient replace my doctor or oncologist?',
    a: 'No. Be Resilient works alongside your medical care to help you intentionally support your body. Our role is supportive, not substitutive. Continue working closely with your physician and healthcare team on all medical decisions.',
  },
  {
    q: 'Do I have to stop my current treatment or medications?',
    a: 'No. Be Resilient is designed to complement your medical care, not replace it. Never stop or change a treatment or medication without talking to your physician first.',
  },
  {
    q: 'Do I need to travel for testing?',
    a: 'Your Program Advisor will walk you through exactly how lab testing works and what to expect during your consult, so you know the logistics before you decide anything.',
  },
  {
    q: 'Is Be Resilient available in my state?',
    a: 'Be Resilient is available to U.S. residents. Your Program Advisor can confirm the details for your specific state on your consult.',
  },
  {
    q: 'What does the program cost?',
    a: 'The private consult is $37. Program options and pricing are reviewed on your consult, once your advisor understands your story and whether Be Resilient is the right fit.',
  },
]

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-7 shrink-0 md:size-8 items-center justify-center rounded-full border-[1.5px] text-black transition-colors',
        open ? 'border-sage bg-sage' : 'border-black',
      )}
    >
      <svg width="14" height="14" viewBox="0 0 14 14">
        <path d={open ? 'M3 7h8' : 'M3 7h8M7 3v8'} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="flex flex-col items-center gap-10 bg-white px-5 py-16 md:gap-12 md:px-10 md:py-[120px]">
      <h2 className="text-center font-display text-[28px] font-heavy leading-[34px] tracking-tight text-balance text-black md:text-[52px] md:leading-[56px]">
        {"Questions? We've got answers."}
      </h2>
      <ul className="flex w-full max-w-[840px] flex-col gap-3">
        {faqs.map((item, i) => {
          const open = openIndex === i
          const buttonId = `${baseId}-q-${i}`
          const panelId = `${baseId}-a-${i}`
          return (
            <li key={item.q} className="rounded-[20px] bg-linen-soft">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 rounded-[20px] px-5 py-5 text-left font-display text-[16px] font-bold leading-[22px] md:gap-6 md:py-[26px] tracking-[-0.015em] text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:px-8 md:text-[21px] md:leading-body"
                >
                  {item.q}
                  <ToggleIcon open={open} />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!open}
                className="-mt-2 px-5 pb-6 md:-mt-3 md:px-8 md:pb-7"
              >
                <p className="max-w-[700px] text-[15px] leading-6 text-muted md:text-[17px] md:leading-[27px]">{item.a}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
