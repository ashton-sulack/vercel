import Image from 'next/image'
import Link from 'next/link'
import { Check, Droplets, Heart, Leaf, Pill, Star, Wind } from 'lucide-react'

const paperImages = {
  understanding:
    'https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/3YQ4E2ZEJN73XNDWFMRZ94VW0K.webp',
  nutrition:
    'https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/6D9AFXRPE6VFM6BRHQ6H8SXWW0.webp',
  care:
    'https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/72XQ077ZGSVH7GM5E8QF3E393Q.webp',
  team:
    'https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/39J0KPCD9CCD123J2ZQS6W86RT.webp',
}

const testimonials = [
  {
    quote:
      'Dr. Pete and his team have become a major blessing in our lives during our battle to healing from cancer.',
    name: 'Tom D.',
  },
  {
    quote:
      "From day one, I've felt like I'm being genuinely cared for and not just treated like another client.",
    name: 'Darren B.',
  },
  {
    quote:
      'I have learned so much and feel more equipped to make educated decisions about my health.',
    name: 'Tracy B.',
  },
]

const pillars = [
  { title: 'Nutrition', detail: 'Guided by your labs and individual needs', icon: Leaf },
  { title: 'Personalized supplementation', detail: 'Custom-compounded, with purpose', icon: Pill },
  { title: 'Natural detoxification', detail: "Supporting your body's own pathways", icon: Droplets },
  { title: 'Oxygenation and movement', detail: 'Realistic, sustainable habits', icon: Wind },
  { title: 'Faith and emotional health', detail: 'Resilience, hope, and purpose', icon: Heart },
]

function ArrowMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 shrink-0" fill="none">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BookLink({ className = '' }: { className?: string }) {
  return (
    <Link
      href="/order2"
      className={`flex min-h-14 items-center justify-center gap-3 rounded-full bg-sage px-7 py-4 text-center text-[14px] font-heavy leading-5 tracking-[0.08em] text-black transition-colors hover:bg-sage-ink hover:text-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage-ink ${className}`}
    >
      BOOK MY PRIVATE CONSULT <ArrowMark />
    </Link>
  )
}

function CheckLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-[13px] font-semibold leading-5 text-black md:text-sm">
      <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center rounded-full bg-sage text-black">
        <Check size={11} strokeWidth={3} />
      </span>
      {children}
    </li>
  )
}

function RatingStars() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-1 text-black">
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} aria-hidden="true" size={15} fill="currentColor" strokeWidth={1.5} />
      ))}
    </div>
  )
}

function Photo({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative min-h-[280px] overflow-hidden rounded-[24px] bg-linen md:min-h-[380px] ${className}`}>
      <Image src={src} alt={alt} fill unoptimized sizes="(max-width: 767px) 100vw, 520px" className="object-cover" />
    </div>
  )
}

function NumberedReason({
  number,
  title,
  description,
  note,
  image,
  imageAlt,
  reverse = false,
}: {
  number: string
  title: string
  description: string
  note?: string
  image: string
  imageAlt: string
  reverse?: boolean
}) {
  return (
    <article className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${reverse ? 'md:[&>div:first-child]:order-2' : ''}`}>
      <Photo src={image} alt={imageAlt} />
      <div className="flex flex-col gap-5 md:gap-6">
        <p className="font-display text-[28px] font-heavy leading-tight tracking-snug text-black md:text-[38px] md:leading-[1.16]">
          {number}. {title}
        </p>
        <p className="text-[15px] leading-7 text-muted md:text-base md:leading-[29px]">{description}</p>
        {note ? (
          <p className="border-l-[3px] border-sage pl-5 font-display text-[19px] font-bold leading-7 tracking-snug text-black md:text-[21px]">
            {note}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export function LandingTwo() {
  return (
    <>
      <header>
        <div className="announcement-bar flex items-center justify-between gap-4 bg-linen px-5 py-3 md:px-12">
          <p className="text-[13px] font-bold leading-5 text-black md:text-sm">
            Private 1-on-1 consults now open for U.S. residents
          </p>
          <Link href="/order2" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sage px-4 py-2.5 text-[11px] font-heavy tracking-wide text-black hover:bg-sage-ink hover:text-white">
            BOOK MY CONSULT <ArrowMark />
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-linen-soft px-5 pt-10 pb-16 md:px-10 md:pt-[88px] md:pb-24">
          <div className="mx-auto flex max-w-[960px] flex-col items-center gap-6 text-center md:gap-7">
            <div className="flex items-center gap-3 rounded-full border border-black/8 bg-white py-2 pr-4 pl-2 text-left">
              <Image src="/images/dr-pete-avatar.webp" alt="" width={36} height={36} className="size-9 shrink-0 rounded-full object-cover object-[50%_22%]" />
              <p className="text-[12px] font-semibold leading-5 text-black md:text-sm">
                Created by Dr. Pete Sulack after his own Grade 4 brain cancer diagnosis
              </p>
            </div>
            <h1 className="max-w-[900px] font-display text-[38px] font-heavy leading-[1.08] tracking-tight text-balance text-black md:text-[60px] md:leading-[1.1]">
              6 Reasons Be Resilient Starts With Your Biology{' '}
              <span className="relative z-0 inline-block after:absolute after:right-0 after:bottom-1 after:left-0 after:-z-10 after:h-3 after:-rotate-1 after:rounded-full after:bg-sun md:after:bottom-2 md:after:h-5">
                (Not Someone Else&apos;s Protocol)
              </span>
            </h1>
            <p className="max-w-[720px] text-[15px] leading-7 text-pretty text-muted md:text-base md:leading-[29px]">
              When you&apos;re facing a complex health challenge, everyone has an opinion about what you should eat and take. Be Resilient starts somewhere else: with advanced testing and more than 470 biomarker insights into how your body is functioning today.
            </p>
            <figure className="flex w-full max-w-[720px] flex-col items-center gap-2 border-y border-black/10 py-5">
              <RatingStars />
              <figcaption className="text-sm font-bold text-black">William B., Be Resilient Client</figcaption>
              <blockquote className="text-[15px] italic leading-6 text-black">
                “I firmly believe Dr. Pete and the entire Be Resilient team are doing the Lord&apos;s work.”
              </blockquote>
            </figure>
            <div className="flex w-full max-w-[640px] flex-col gap-4">
              <BookLink />
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <CheckLine>Works alongside your care</CheckLine>
                <CheckLine>In-home blood draw</CheckLine>
                <CheckLine>U.S. residents only</CheckLine>
              </ul>
            </div>
          </div>
        </section>

        <section aria-label="Six reasons to start with your biology" className="bg-white px-5 py-16 md:px-10 md:py-[120px]">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-16 md:gap-[100px]">
            <NumberedReason
              number="1"
              title="It starts with understanding, not guessing."
              description="Most plans begin with someone else’s protocol. Be Resilient begins with advanced functional lab testing and more than 470 biomarker insights into your nutritional needs, food sensitivities, cellular protection, and natural stress response."
              note="Testing is not the goal. Understanding is."
              image={paperImages.understanding}
              imageAlt="A client speaking with a wellness professional"
            />
            <article className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
              <h2 className="font-display text-[28px] font-heavy leading-tight tracking-snug text-black md:text-[38px]">
                2. Supplements based on data, not a shelf full of guesses.
              </h2>
              <p className="max-w-[720px] text-[15px] leading-7 text-muted md:text-base md:leading-[29px]">
                Your supplements are custom-compounded from your own lab results, not pulled off a store shelf. The goal is not to take more supplements. It&apos;s to identify which nutrients your body may need and provide them with purpose.
              </p>
              <ul className="flex flex-wrap justify-center gap-3 pt-1">
                {['Built from your labs', 'Custom-compounded', 'Shipped to your door'].map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-full bg-linen-soft px-4 py-2.5 text-[13px] font-bold text-black">
                    <span aria-hidden="true" className="flex size-4 items-center justify-center rounded-full bg-sage text-[11px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <NumberedReason
              number="3"
              title="Your plate, built for your body."
              description="Food sensitivities may contribute to immune stress, inflammation, or digestive challenges without an immediate or obvious reaction. Testing helps shape a nutrition strategy around you, rather than a generalized diet."
              note="What works for someone else may not be what your body needs."
              image={paperImages.nutrition}
              imageAlt="A thoughtfully prepared meal"
              reverse
            />
            <article className="mx-auto flex max-w-[820px] flex-col items-center gap-5 text-center">
              <p className="rounded-full border border-sky/20 bg-sky/10 px-4 py-2 text-[11px] font-heavy tracking-wider text-black">SUPPORTIVE, NOT SUBSTITUTIVE</p>
              <h2 className="font-display text-[28px] font-heavy leading-tight tracking-snug text-black md:text-[38px]">
                4. It works alongside your medical care.
              </h2>
              <p className="max-w-[740px] text-[15px] leading-7 text-muted md:text-base md:leading-[29px]">
                Be Resilient complements the care you receive from your physician, oncologist, and healthcare team. Before any supplement formulation is created, your current medications are reviewed for potential drug-nutrient interactions.
              </p>
            </article>
            <NumberedReason
              number="5"
              title="You’re not doing this alone."
              description="For eight months, a dedicated team walks with you: helping you understand your results, put your plan into practice, and make thoughtful adjustments as your needs change."
              note="You’ll always know what comes next and who to contact."
              image={paperImages.team}
              imageAlt="A supportive team member talking with a client"
            />
            <NumberedReason
              number="6"
              title="Built by someone who’s been there."
              description="Be Resilient was shaped by Dr. Pete Sulack’s own experience after a Grade 4 brain cancer diagnosis. While his medical team focused on treating the cancer, he began asking what he could do to intentionally support his body alongside that care."
              note="Understand the body first. Then make recommendations with purpose."
              image={paperImages.care}
              imageAlt="Dr. Pete Sulack speaking with a client"
              reverse
            />
          </div>
        </section>

        <section className="bg-linen-soft px-5 py-16 md:px-10 md:py-28">
          <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-10 md:gap-14">
            <div className="flex max-w-[740px] flex-col items-center gap-4 text-center">
              <p className="text-[11px] font-heavy tracking-[0.16em] text-sage-ink">CLIENT STORIES</p>
              <h2 className="font-display text-[34px] font-heavy leading-tight tracking-tight text-black md:text-[48px]">Real people. Real stories.</h2>
            </div>
            <div className="grid w-full gap-5 md:grid-cols-3 md:gap-6">
              {testimonials.map((story) => (
                <figure key={story.name} className="flex flex-col gap-5 rounded-xl bg-white p-6 md:p-8">
                  <RatingStars />
                  <blockquote className="flex-1 text-[15px] leading-7 text-black">“{story.quote}”</blockquote>
                  <figcaption className="border-t border-black/10 pt-4">
                    <p className="text-sm font-bold text-black">{story.name}</p>
                    <p className="text-[13px] leading-5 text-muted">Be Resilient Client</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 md:px-10 md:py-28">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-9 md:gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-display text-[32px] font-heavy leading-tight tracking-tight text-black md:text-[48px]">Five connected pillars. One plan.</h2>
              <p className="max-w-[700px] text-[15px] leading-7 text-muted md:text-[19px] md:leading-[30px]">
                Your body does not function as a collection of disconnected parts. That&apos;s why your plan is built around five connected pillars.
              </p>
            </div>
            <ul className="grid grid-cols-1 border-y border-black/12 sm:grid-cols-2 md:grid-cols-5">
              {pillars.map(({ title, detail, icon: Icon }, index) => (
                <li key={title} className={`flex flex-col items-center gap-4 px-4 py-7 text-center md:py-9 ${index < pillars.length - 1 ? 'border-b border-black/12 md:border-r md:border-b-0' : ''}`}>
                  <span aria-hidden="true" className={`flex size-14 items-center justify-center rounded-full text-black ${index % 2 === 0 ? 'bg-sage' : 'bg-sun'}`}>
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                  <h3 className="min-h-12 font-display text-[15px] font-bold leading-6 text-black">{title}</h3>
                  <p className="text-[13px] leading-5 text-muted">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white px-5 pt-4 pb-16 md:px-10 md:pt-8 md:pb-[120px]">
          <div className="mx-auto grid max-w-[1120px] gap-8 rounded-2xl bg-linen-soft p-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-14 md:p-14">
            <div className="flex flex-col items-start gap-5">
              <p className="text-[11px] font-heavy tracking-[0.16em] text-sage-ink">YOUR NEXT STEP</p>
              <h2 className="font-display text-[30px] font-heavy leading-tight tracking-snug text-black md:text-[40px]">Start with a private consult</h2>
              <p className="text-[15px] leading-7 text-muted md:text-base md:leading-[29px]">
                Talk with a Program Advisor on Dr. Pete&apos;s team and leave with clarity on your next step.
              </p>
              <BookLink className="w-full" />
              <ul className="flex flex-wrap gap-2.5">
                <CheckLine>Private and one-on-one</CheckLine>
                <CheckLine>U.S. residents only</CheckLine>
                <CheckLine>Works alongside your care</CheckLine>
              </ul>
            </div>
            <div className="flex flex-col">
              <p className="pb-2 text-[11px] font-heavy tracking-wider text-muted">YOUR CONSULT INCLUDES</p>
              {[
                'A private conversation with a Program Advisor',
                "Time to share your history and what you’ve tried",
                'The science behind Be Resilient’s framework',
                'Answers about testing, timing, and enrollment',
                "Clarity on your next step, whether or not it’s Be Resilient",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between gap-4 border-b border-black/10 py-3.5">
                  <p className="text-[14px] font-semibold leading-6 text-black md:text-[16px]">{item}</p>
                  <p className="shrink-0 text-[13px] font-bold text-sage-ink">Included</p>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 pt-4 font-display text-base font-bold text-black md:text-lg">
                <span>Your investment today</span><span>$37</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
