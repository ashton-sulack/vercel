import Script from 'next/script'
import { BookingFlowRedirect } from './booking-flow-redirect'

const FORM_ID = 'vDVqj3XTQUXVGm81hJy4'
const FORM_NAME = 'Consult Form July 2026'
const FORM_HEIGHT = 839

export function OrderForm() {
  return (
    <section
      aria-labelledby="order-summary-title"
      className="flex flex-col gap-5 rounded-[24px] border border-black/6 bg-white p-5 shadow-[0_24px_60px_rgb(0_0_0/0.07)] md:rounded-[28px] md:p-9"
    >
      <div className="flex items-start justify-between gap-4 border-b border-black/8 pb-5">
        <div className="flex flex-col gap-1">
          <h2
            id="order-summary-title"
            className="font-display text-[19px] font-heavy leading-6 -tracking-snug text-black md:text-xl md:leading-[30px]"
          >
            Terrain Health Consultation
          </h2>
          <p className="text-[13px] leading-5 text-muted md:text-sm md:leading-small">
            Private and 1-on-1 with a Program Advisor
          </p>
        </div>
        <p className="shrink-0 rounded-full bg-sage-soft px-3 py-1 font-display text-[17px] font-heavy leading-6 text-black md:px-3.5 md:py-1.5 md:text-lg md:leading-[26px]">
          $37
        </p>
      </div>

      <div className="-mx-2 md:-mx-3">
        <iframe
          src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
          id={`inline-${FORM_ID}`}
          title={FORM_NAME}
          className="block w-full rounded-[8px] border-0"
          style={{ height: FORM_HEIGHT }}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={FORM_NAME}
          data-height={FORM_HEIGHT}
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
        />
      </div>

      <BookingFlowRedirect stage="order" />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </section>
  )
}
