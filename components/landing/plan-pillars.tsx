const pillars = [
  {
    value: '470+',
    title: 'Biomarker insights',
    body: 'Into your nutritional needs, food sensitivities, cellular protection, and natural stress response.',
  },
  {
    value: '8 months',
    title: 'Of guided support',
    body: 'A dedicated team helps you put your plan into practice and adjust as your needs change.',
  },
  {
    value: '5 pillars',
    title: 'One connected plan',
    body: 'Nutrition, supplementation, detoxification, oxygenation and movement, and faith.',
  },
]

export function PlanPillars() {
  return (
    <section className="flex flex-col items-center gap-10 bg-white px-5 py-16 md:gap-[52px] md:px-10 md:py-28">
      <h2 className="max-w-[860px] text-center font-display text-[28px] font-heavy leading-[34px] tracking-tight text-balance text-black md:text-[52px] md:leading-[58px]">
        Your body is unique. Your plan should be too.
      </h2>
      <ul className="grid w-full max-w-content gap-4 md:grid-cols-3 md:gap-6">
        {pillars.map((pillar) => (
          <li key={pillar.title} className="flex flex-col items-center gap-2 rounded-lg bg-linen-soft p-6 text-center md:items-start md:gap-2.5 md:p-9 md:text-left">
            <p className="font-display text-[36px] font-heavy leading-[42px] tracking-[-0.04em] text-black md:text-[44px] md:leading-[52px] lg:text-4xl lg:leading-[60px]">
              {pillar.value}
            </p>
            <h3 className="text-[16px] font-bold leading-6 text-black md:text-base">{pillar.title}</h3>
            <p className="text-[15px] leading-6 text-pretty text-muted md:text-[16px] md:leading-[25px]">{pillar.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
