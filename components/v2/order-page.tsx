import Script from 'next/script'

const formId = 'vDVqj3XTQUXVGm81hJy4'

function BrandMark() {
  return (
    <div
      aria-label="Be Resilient"
      className="h-8 w-48 shrink-0 bg-contain bg-left bg-no-repeat"
      role="img"
      style={{
        backgroundImage:
          'url(https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/59AA9GS7F60YGF3EGVYKJYXBX8.webp)',
      }}
    />
  )
}

function ConsultSummary() {
  const inclusions = [
    'A private conversation with a Program Advisor',
    'Time to share your history and what you have tried',
    'A look at what may be missing beneath the surface',
    'Answers about testing, timing, and enrollment',
    'Clarity on your next step, whether or not it is Be Resilient',
  ]

  return (
    <div className="flex min-w-0 flex-col gap-6">
      <section className="flex flex-col gap-5 rounded-[24px] bg-linen-soft p-6 sm:p-8" aria-labelledby="consult-includes-title">
        <div className="flex flex-col gap-2">
          <p className="font-body text-xs font-bold tracking-[0.16em] text-sage-ink">YOUR CONSULT</p>
          <h2 id="consult-includes-title" className="font-display text-3xl font-bold tracking-tight text-black sm:text-4xl">
            What&apos;s included
          </h2>
        </div>
        <ul className="flex flex-col">
          {inclusions.map((item) => (
            <li key={item} className="flex items-start justify-between gap-3 border-b border-black/10 py-4 last:border-0">
              <span className="text-sm font-semibold leading-6 text-black sm:text-base">{item}</span>
              <span className="shrink-0 pt-0.5 text-sm font-bold text-sage-ink">Included</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-black/10 pt-5 text-black">
          <span className="font-display text-lg font-bold">Your investment today</span>
          <span className="font-display text-lg font-bold">$37</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Private and one-on-one', 'U.S. residents only', 'Works alongside your care'].map((item, index) => (
            <span key={item} className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-2 text-xs font-semibold text-black">
              <span
                aria-hidden="true"
                className={`size-2 rounded-full ${index === 0 ? 'bg-sage' : index === 1 ? 'bg-sky' : 'bg-sun'}`}
              />
              {item}
            </span>
          ))}
        </div>
      </section>

      <figure className="flex flex-col gap-4 rounded-[24px] bg-linen-soft p-6 sm:p-8">
        <div aria-label="5 out of 5 stars" className="text-lg tracking-[0.18em] text-black" role="img">
          ★★★★★
        </div>
        <blockquote className="text-base leading-7 text-black">
          “My journey with Be Resilient has been amazing and I have learned so much. I believe this is truly one of those programs that goes beyond conventional thinking and provides you with the knowledge and information to make educated decisions.”
        </blockquote>
        <figcaption className="border-t border-black/10 pt-4">
          <span className="block font-bold text-black">Tracy B.</span>
          <span className="mt-1 block text-sm text-muted">Be Resilient Client</span>
        </figcaption>
      </figure>
    </div>
  )
}

function ConsultForm() {
  return (
    <section className="order-form min-w-0 rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_20px_48px_rgba(0,0,0,0.08)] sm:p-6" aria-labelledby="consult-form-title">
      <h2 id="consult-form-title" className="mb-4 font-display text-xl font-bold text-black sm:text-2xl">
        Reserve your consult
      </h2>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: '100%', height: '839px', border: 'none', borderRadius: '8px' }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Consult Form July 2026"
        data-height="839"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Consult Form July 2026"
        loading="eager"
        allow="payment *"
        className="block w-full max-w-full"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  )
}

export default function OrderPage() {
  return (
    <div className="br-order [font-synthesis:none] w-full max-w-[1440px] mx-auto flex h-fit flex-col overflow-x-clip bg-white text-black antialiased">
      <div className="order-topbar flex w-full items-center justify-center bg-linen px-5 py-3 text-center sm:px-12">
        <p className="text-sm font-bold leading-5 text-black">100% secure checkout for U.S. residents</p>
      </div>
      <header className="flex w-full items-center justify-center border-b border-border bg-white px-5 py-4 sm:px-12 sm:py-5">
        <BrandMark />
      </header>
      <section className="order-hero flex w-full flex-col items-center gap-5 bg-linen-soft px-5 py-10 text-center sm:gap-6 sm:px-12 sm:py-16 lg:px-20" aria-labelledby="order-title">
        <div className="order-hero-badge flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-white py-2 pl-2 pr-4 text-left">
          <div
            aria-hidden="true"
            className="size-9 shrink-0 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://app.paper.design/file-assets/01M4RB7WM0G4FQ7R7NG8QH46MS/76CMR9Y2P9WGSRWVDR0X9D2V5V.webp)',
            }}
          />
          <p className="order-hero-badge-copy min-w-0 text-xs font-semibold leading-5 text-black sm:text-sm">
            <span className="hidden sm:inline">Created by Dr. Pete Sulack after his own Grade 4 brain cancer diagnosis</span>
            <span className="sm:hidden">Created by Dr. Pete after his cancer diagnosis</span>
          </p>
        </div>
        <h1 id="order-title" className="max-w-4xl text-balance font-display text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
          Your private consult starts here.
        </h1>
        <p className="max-w-2xl text-pretty text-sm leading-6 text-muted sm:text-base sm:leading-7">
          Complete the short form below to reserve your $37 Terrain Health Consultation with a Program Advisor on Dr. Pete&apos;s team.
        </p>
      </section>
      <main className="order-main grid w-full grid-cols-1 items-start gap-8 bg-white px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 lg:px-12 lg:py-16 xl:px-20">
        <ConsultSummary />
        <ConsultForm />
      </main>
      <footer className="flex w-full flex-col gap-6 border-t border-black/10 bg-white px-5 py-10 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col items-start gap-5 border-b border-black/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <BrandMark />
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a className="font-semibold text-black underline-offset-4 hover:underline" href="mailto:hello@redeemfm.com">hello@redeemfm.com</a>
            <a className="text-muted underline-offset-4 hover:underline" href="/privacy">Privacy Policy</a>
            <a className="text-muted underline-offset-4 hover:underline" href="/terms">Terms of Service</a>
          </div>
        </div>
        <p className="text-sm leading-6 text-muted">
          Disclaimer: Be Resilient is a nutrition- and lifestyle-focused wellness and educational program designed to complement, not replace, medical care. It does not diagnose, treat, cure, or prevent any disease, including cancer, and is not a substitute for medical care, oncology care, or physician-directed treatment. The program is designed to support the body&apos;s internal terrain, which is influenced by factors like nutrition, detoxification, oxygenation, stress, faith and mindset, and immune health. Client experiences shared on this page are individual accounts and are not typical or guaranteed. The information provided is for educational purposes only and is not medical advice. Continue working closely with your physician, oncologist, and healthcare team regarding diagnosis, treatment decisions, medications, and all medical care, and consult your physician before making any changes to your diet, supplements, or lifestyle.
        </p>
        <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Be Resilient. All Rights Reserved.</span>
          <span>Powered by <strong className="text-black">MXG</strong></span>
        </div>
      </footer>
    </div>
  )
}
