import { cn } from '@/lib/utils'
import { CtaButton, SectionHeading } from './primitives'

const struggles = [
  {
    quote: 'Everyone has an opinion about what I should eat.',
    body: "One person says cut this. Another says add that. Every diet claims to be the answer, and you're left wondering which one is right for your body.",
    answer:
      "Your nutrition strategy is guided by your lab results, food sensitivities, lifestyle, and individual needs. The goal is not the most popular diet. It's giving your body what it needs.",
  },
  {
    quote: "I'm taking supplements, but I don't know if I need any of them.",
    body: "The cabinet keeps growing. So does the bill. And you still don't know what's actually doing anything for you.",
    answer:
      "Your supplements are custom-compounded using insights from your own labs. The goal is not to take more supplements. It's to provide what your body may need, with purpose.",
  },
  {
    quote: 'My doctors are focused on treatment. I want to know what I can do.',
    body: 'You trust your medical team. You also want to do your part, and no one has shown you where to start.',
    answer:
      'Be Resilient works alongside your medical care to help you intentionally support your body. Our role is supportive, not substitutive.',
  },
  {
    quote: "I feel like I'm figuring this out alone.",
    body: 'Appointments end. Questions come up at night. And the internet is a lonely place to look for answers.',
    answer:
      'A dedicated team helps you understand your results, put your plan into practice, and navigate challenges, with secure messaging support between appointments.',
  },
  {
    quote: 'The fear and stress are wearing on me, not just my body.',
    body: 'A health journey affects more than the physical body. Fear, uncertainty, and discouragement can shape how you think, respond, and move forward.',
    answer:
      'Faith and emotional health are built into your plan, with practical tools for strengthening resilience, hope, and purpose.',
  },
  {
    quote: "I don't even know where to start.",
    body: 'So much information. So many options. And every choice feels like it matters, because it does.',
    answer:
      'A Program Advisor will listen to your story, answer your questions, and help you see if Be Resilient is right for you.',
    label: 'ON YOUR CONSULT',
    featured: true,
  },
]

export function Struggles() {
  return (
    <section className="flex flex-col items-center gap-10 bg-linen-soft px-5 py-16 md:gap-14 md:px-10 md:py-[120px]">
      <div className="flex flex-col items-center gap-4 md:gap-5">
        <SectionHeading
          title="When every decision matters, the noise gets loud."
          description="Food, supplements, lifestyle changes, and a hundred opinions about what you should do next. We know what you're carrying."
        />
        <p className="pt-3 text-center font-display text-[19px] font-bold leading-[26px] tracking-snug text-balance text-black md:pt-5 md:text-[26px] md:leading-8">
          {"We know what you're struggling with..."}
        </p>
      </div>

      <ul className="grid w-full max-w-content gap-4 md:grid-cols-2 md:gap-6">
        {struggles.map((item) => (
          <li
            key={item.quote}
            className={cn('flex flex-col gap-3 rounded-lg p-6 md:gap-4 md:p-9', item.featured ? 'bg-sage-soft' : 'bg-white')}
          >
            <h3 className="font-display text-[19px] font-bold leading-[25px] tracking-snug text-pretty text-black md:text-[23px] md:leading-[30px]">
              {`\u201C${item.quote}\u201D`}
            </h3>
            <p className="text-[15px] leading-6 text-muted md:text-[17px] md:leading-[27px]">{item.body}</p>
            <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4 md:pt-[18px]">
              <p className="text-[12px] font-heavy leading-4 tracking-wider text-sage-ink md:text-xs">
                {item.label ?? 'INSIDE BE RESILIENT'}
              </p>
              <p className="text-[15px] font-medium leading-6 text-black md:text-[17px] md:leading-[27px]">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex w-full max-w-[900px] flex-col items-center justify-between gap-5 rounded-lg border border-black/6 bg-white px-6 py-8 text-center shadow-[0_16px_40px_rgb(0_0_0/0.06)] md:flex-row md:gap-10 md:p-8 md:pr-8 md:pl-11 md:text-left">
        <div className="flex flex-col gap-1.5">
          <p className="font-display text-[21px] font-heavy leading-[27px] tracking-[-0.03em] text-balance text-black md:text-[28px] md:leading-[34px]">
            Discover. Understand. Implement.
          </p>
          <p className="text-[15px] leading-6 text-muted md:text-[17px]">It all starts with one private conversation.</p>
        </div>
        <CtaButton size="sm" />
      </div>
    </section>
  )
}
