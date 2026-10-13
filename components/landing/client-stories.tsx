'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CtaBlock, Eyebrow, PlayIcon } from './primitives'

const stories = [
  {
    image: '/images/story-kerri.webp',
    alt: 'Kerri, a Be Resilient client',
    watch: "Watch Kerri's story",
    video: 'OYrksx5WXcE',
    title: 'My energy came back.',
    caption: "How Be Resilient helped change Kerri's life.",
  },
  {
    image: '/images/story-nikki.webp',
    alt: 'Nikki, a Be Resilient client',
    watch: "Watch Nikki's story",
    video: 'kjE_-HNFToA',
    title: 'My brain fog changed.',
    caption: 'How Be Resilient helped Nikki gain control of her health.',
  },
  {
    image: '/images/story-melvin-margarita.webp',
    alt: 'Melvin and Margarita, Be Resilient clients',
    watch: 'Watch their story',
    video: 'tmA9_iCwuwY',
    title: 'My quality of life is now amazing.',
    caption: 'How Be Resilient helped Melvin and Margarita restore their quality of life.',
  },
]

const testimonials = [
  {
    quote:
      'Dr. Pete and his team have become a major blessing in our lives that God had waiting for my wife, the caregiver and myself during our battle to healing from cancer.',
    name: 'Tom D.',
  },
  {
    quote:
      "I can honestly say that the support, communication, and care I've received from the team have already made a tremendous impact. From day one, I've felt like I'm being genuinely cared for and not just treated like another client.",
    name: 'Darren B.',
  },
  {
    quote:
      'My journey with Be Resilient has been amazing and I have learned so much. I believe this is truly one of those programs that goes beyond conventional thinking and provides you with the knowledge and information to make educated decisions.',
    name: 'Tracy B.',
  },
  {
    quote: "I firmly believe Dr. Pete and the entire Be Resilient team are doing the Lord's work.",
    name: 'William B.',
  },
]

const STAR = 'M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L1.3 7.8l6.1-.7z'

function Stars() {
  return (
    <svg width="112" height="20" viewBox="0 0 112 20" role="img" aria-label="5 out of 5 stars" className="shrink-0">
      {[0, 23, 46, 69, 92].map((x) => (
        <path key={x} d={STAR} transform={`translate(${x} 0)`} fill="currentColor" />
      ))}
    </svg>
  )
}

function StoryCard({ story }: { story: (typeof stories)[number] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <li className="flex flex-col gap-4 text-center md:gap-[18px] md:text-left">
      <div className="relative h-[380px] overflow-hidden rounded-lg bg-linen md:h-[448px]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${story.video}?autoplay=1&rel=0`}
            title={story.watch}
            className="absolute inset-0 size-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <Image src={story.image} alt={story.alt} fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover" />
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute bottom-5 left-5 inline-flex items-center gap-2.5 rounded-full bg-white py-2 pl-2 pr-4 text-sm font-bold text-black shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              aria-label={`Play ${story.watch.toLowerCase()}`}
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-sage text-black">
                <PlayIcon />
              </span>
              {story.watch}
            </button>
          </>
        )}
      </div>
      <div className="flex flex-col gap-1 md:gap-1.5">
        <h3 className="font-display text-[19px] font-heavy leading-[26px] tracking-snug text-balance text-black md:text-xl md:leading-[30px]">
          {`\u201C${story.title}\u201D`}
        </h3>
        <p className="text-[15px] leading-6 text-pretty text-muted md:text-[16px]">{story.caption}</p>
      </div>
    </li>
  )
}

export function ClientStories() {
  return (
    <section className="flex flex-col items-center gap-10 bg-linen-soft px-5 py-16 md:gap-14 md:px-10 md:py-[120px]">
      <div className="flex flex-col items-center gap-4 text-center md:gap-[18px]">
        <Eyebrow>CLIENT STORIES</Eyebrow>
        <h2 className="font-display text-[27px] font-heavy leading-[33px] tracking-tight text-balance text-black md:text-4xl md:leading-[60px]">
          Real people. Real stories.
        </h2>
        <p className="max-w-[640px] text-[15px] leading-6 text-pretty text-muted md:text-lg md:leading-[31px]">
          Hear from Be Resilient clients in their own words.
        </p>
      </div>

      <ul className="grid w-full max-w-content gap-9 md:grid-cols-3 md:gap-6">
        {stories.map((story) => (
          <StoryCard key={story.title} story={story} />
        ))}
      </ul>

      <ul className="grid w-full max-w-content gap-4 md:grid-cols-2 md:gap-6">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="flex h-full flex-col gap-4 rounded-lg bg-white px-6 py-7 text-black md:gap-[18px] md:px-9 md:py-8">
              <Stars />
              <blockquote className="grow text-[15px] font-medium leading-[25px] text-black md:text-base md:leading-[29px]">
                {`\u201C${t.quote}\u201D`}
              </blockquote>
              <figcaption className="flex flex-col gap-0.5">
                <span className="text-[16px] font-heavy leading-small text-black">{t.name}</span>
                <span className="text-[14px] leading-5 text-muted">Be Resilient Client</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <CtaBlock />
    </section>
  )
}
