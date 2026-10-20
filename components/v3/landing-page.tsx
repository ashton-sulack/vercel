import Script from 'next/script'
import { InlineYouTube } from '@/components/v3/inline-youtube'

const testimonials = [
  {
    name: 'Kerri',
    label: 'Be Resilient Client',
    image:
      'https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/3BRG8PNKTRCMZ27Z19W93K17AP.webp',
    videoId: 'OYrksx5WXcE',
    quote:
      'Dr. Pete and his team have become a major blessing in our lives that God had waiting for my wife, the caregiver and myself during our battle to healing from cancer.',
    author: 'Tom D.',
  },
  {
    name: 'Nikki',
    label: 'Be Resilient Client',
    image:
      'https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/6287AF63HX02ZHM6CCHDKDAE5Q.webp',
    videoId: 'kjE_-HNFToA',
    quote:
      "I can honestly say that the support, communication, and care I’ve received from the team have already made a tremendous impact. From day one, I’ve felt like I’m being genuinely cared for and not just treated like another client.",
    author: 'Darren B.',
  },
  {
    name: 'Margarita',
    label: 'Be Resilient Client',
    image:
      'https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/5S5A1G8BCYWXWB28MVQH2VCZTG.webp',
    videoId: 'tmA9_iCwuwY',
    quote:
      'My journey with Be Resilient has been amazing and I have learned so much. I believe this is truly one of those programs that goes beyond conventional thinking and provides you with the knowledge and information to make educated decisions.',
    author: 'Tracy B.',
  },
]

const faqs = [
  {
    question: 'What actually happens on the consult?',
    paragraphs: [
      "It’s a private, 1-on-1 conversation with a Program Advisor on my team.",
      "You’ll share your history, what you’ve tried, and what you’re hoping to achieve.",
      'We’ll look at what may be missing beneath the surface, and whether Be Resilient is the right fit for you.',
    ],
  },
  {
    question: 'Why did you build Be Resilient?',
    paragraphs: [
      'When I was diagnosed with Grade 4 brain cancer, my medical team focused on treating the cancer.',
      'I kept asking one question: what can I do to intentionally support my body alongside that care?',
      'That question became Be Resilient. Understand the body first. Then make recommendations with purpose.',
    ],
  },
  {
    question: 'What do I walk away with?',
    paragraphs: [
      'You’ll know what to do next, whether or not Be Resilient is right for you.',
      'If it is a fit, your Program Advisor will explain how the program works and what enrollment looks like.',
      'Either way, you’ll leave with clarity instead of more guesswork.',
    ],
  },
  {
    question: 'Is this right for me?',
    paragraphs: [
      'Be Resilient is for people who want to intentionally support their body alongside their medical care, using their own data instead of guesswork.',
      'Right now, it’s available to U.S. residents only, in select states.',
      'It is not a replacement for your doctor or oncologist. And it is not a quick fix.',
    ],
  },
  {
    question: "What's inside the program?",
    paragraphs: [
      'More than 470 biomarker insights. Custom-compounded supplements. A personalized nutrition strategy. A dedicated team for eight months.',
      'Every element is intentionally connected, and every recommendation is built around your unique biology.',
      'Your Program Advisor will walk you through the details on your consult.',
    ],
  },
  {
    question: 'How much does it cost?',
    paragraphs: [
      'Every plan is personalized, so we walk through program details and enrollment on your consult.',
      'Take the time you need. Ask your questions. Talk with your family and those you trust.',
      'You don’t have to figure out every decision alone.',
    ],
  },
]

const steps = [
  {
    number: '1',
    title: 'Book your consult',
    description: 'Fill out a short form and reserve your $37 consultation.',
  },
  {
    number: '2',
    title: 'Talk with a Program Advisor',
    description: 'Share your history, what you’ve tried, and what you’re hoping to achieve.',
  },
  {
    number: '3',
    title: 'Get clarity on your next step',
    description: 'Leave knowing what to do next, whether or not Be Resilient is right for you.',
  },
]

export default function Page() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" aria-hidden="true" />
        NOW BOOKING | PRIVATE 1-ON-1 CONSULTS | U.S. RESIDENTS ONLY
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <a className="wordmark" href="#top" aria-label="Be Resilient home">
          Be RESILIENT<span aria-hidden="true">›</span>
        </a>
        <div className="hero-copy" id="top">
          <h1 id="hero-title">
            WHAT IF YOU&apos;VE ONLY BEEN LOOKING AT PART OF THE <span>PICTURE?</span>
          </h1>
          <p>Book a private consult with Dr. Pete&apos;s team and explore what may be missing beneath the surface.</p>
        </div>
        <div className="hero-video">
          <InlineYouTube
            videoId="TsdbPUVAFYQ"
            title="A message from Dr. Pete"
            poster="https://assets.cdn.filesafe.space/6gsmSxHwBM76pHQkgkyv/media/69d01a99fcf3f9acd770561c.webp"
            badge="A MESSAGE FROM DR. PETE"
            priority
          />
        </div>
        <a className="button button-wide" href="#reserve">BOOK MY CONSULT <span aria-hidden="true">→</span></a>
        <p className="residents-note">U.S. residents only</p>
      </section>

      <section className="testimonials-section" aria-labelledby="testimonials-title">
        <div className="testimonials-panel">
          <h2 id="testimonials-title">What clients are saying about<br className="desktop-break" /> Be Resilient</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial" key={testimonial.name}>
                <div className="testimonial-video">
                  {testimonial.videoId ? (
                    <InlineYouTube
                      videoId={testimonial.videoId}
                      title={`${testimonial.name} — ${testimonial.label}`}
                      poster={testimonial.image}
                    />
                  ) : (
                    <img src={testimonial.image} alt={`${testimonial.name}, Be Resilient client`} loading="lazy" />
                  )}
                  <span className="video-caption">{testimonial.name} - {testimonial.label}</span>
                </div>
                <div className="quote-card">
                  <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <p>“{testimonial.quote}”</p>
                  <div className="quote-byline">
                    <strong>{testimonial.author}</strong>
                    <span>Be Resilient Client</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section" aria-labelledby="how-title">
        <div className="section-heading">
          <h2 id="how-title">HERE&apos;S HOW IT WORKS</h2>
          <p>Three simple steps. No guesswork.</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className={`step-card${index === 2 ? ' step-card-highlight' : ''}`} key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <span className="step-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <a className="button button-centered" href="#reserve">BOOK MY CONSULT <span aria-hidden="true">→</span></a>

        <div className="faq-section">
          <div className="faq-intro">
            <img
              src="https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/31VBHYS59EEX0AJ8GBEJENC7X8.avif"
              alt="Dr. Pete"
              loading="lazy"
            />
            <div>
              <h2>Straight answers from Dr. Pete</h2>
              <p>The questions people ask most before booking</p>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question} open>
                <summary>{faq.question}<span aria-hidden="true">×</span></summary>
                <div className="faq-answer">
                  {faq.paragraphs.map((paragraph, index) => (
                    <p className={index === faq.paragraphs.length - 1 ? 'faq-emphasis' : ''} key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="reserve-section" id="reserve" aria-labelledby="reserve-title">
        <div className="section-heading">
          <h2 id="reserve-title">RESERVE YOUR CONSULT</h2>
          <p>Your $37 Terrain Health Consultation is private and 1-on-1 with a Program Advisor.</p>
        </div>
        <div className="form-frame">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/vDVqj3XTQUXVGm81hJy4"
            style={{ width: '100%', height: '839px', border: 'none', borderRadius: '8px' }}
            id="inline-vDVqj3XTQUXVGm81hJy4"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Consult Form July 2026"
            data-height="839"
            data-layout-iframe-id="inline-vDVqj3XTQUXVGm81hJy4"
            data-form-id="vDVqj3XTQUXVGm81hJy4"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Consult Form July 2026"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="wordmark" href="#top" aria-label="Be Resilient home">Be RESILIENT<span aria-hidden="true">›</span></a>
          <div className="footer-links">
            <a href="mailto:hello@redeemfm.com">hello@redeemfm.com</a>
            <a href="https://redeemfm.com/privacy-policy">Privacy Policy</a>
            <a href="https://redeemfm.com/terms-of-service">Terms of Service</a>
          </div>
        </div>
        <p className="disclaimer">
          Disclaimer: Be Resilient is a nutrition- and lifestyle-focused wellness and educational program designed to complement, not replace, medical care. It does not diagnose, treat, cure, or prevent any disease, including cancer, and is not a substitute for medical care, oncology care, or physician-directed treatment. The program is designed to support the body&apos;s internal terrain, which is influenced by factors like nutrition, detoxification, oxygenation, stress, faith and mindset, and immune health. Client experiences shared on this page are individual accounts and are not typical or guaranteed. The information provided is for educational purposes only and is not medical advice. Continue working closely with your physician, oncologist, and healthcare team regarding diagnosis, treatment decisions, medications, and all medical care, and consult your physician before making any changes to your diet, supplements, or lifestyle.
        </p>
        <p className="copyright">© 2026 Be Resilient. All Rights Reserved.</p>
      </footer>
    </main>
  )
}
