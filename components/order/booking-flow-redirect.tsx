'use client'

import { useEffect } from 'react'

type BookingFlowRedirectProps = {
  stage: 'order' | 'calendar' | 'pre-consult'
}

const ORDER_FORM_FRAME_ID = 'inline-vDVqj3XTQUXVGm81hJy4'
const PRE_CONSULT_FORM_ID = '0d6c7339-db0d-4ada-8953-cb5373053efe'
const HUBSPOT_PORTAL_ID = '244927881'

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

export function BookingFlowRedirect({ stage }: BookingFlowRedirectProps) {
  useEffect(() => {
    let hasRedirected = false
    console.log('[v0] booking flow listener active', stage)

    function handleMessage(event: MessageEvent<unknown>) {
      console.log('[v0] booking flow message', { stage, origin: event.origin, dataType: typeof event.data })
      if (hasRedirected) return

      if (stage === 'order') {
        const frame = document.getElementById(ORDER_FORM_FRAME_ID) as HTMLIFrameElement | null
        if (
          event.origin === 'https://api.leadconnectorhq.com' &&
          event.source === frame?.contentWindow &&
          event.data === 'formSubmitted'
        ) {
          hasRedirected = true
          window.location.assign('/calendar')
        }
        return
      }

      if (!isRecord(event.data)) return

      if (stage === 'calendar') {
        let hostname = ''
        try {
          hostname = new URL(event.origin).hostname
        } catch {
          return
        }

        if (
          (hostname === 'meetings.hubspot.com' || hostname.startsWith('meetings-')) &&
          hostname.endsWith('.hubspot.com') &&
          event.data.meetingBookSucceeded === true
        ) {
          hasRedirected = true
          window.location.assign('/pre-consult')
        }
        return
      }

      if (stage === 'pre-consult') {
        let hostname = ''
        try {
          hostname = new URL(event.origin).hostname
        } catch {
          return
        }

        const isHubSpotOrigin =
          hostname === 'hsforms.com' ||
          hostname.endsWith('.hsforms.com') ||
          hostname === 'hsforms.net' ||
          hostname.endsWith('.hsforms.net')
        const message = event.data
        const messageFormId = message.id ?? message.formId
        const messagePortalId = message.portalId

        if (
          isHubSpotOrigin &&
          message.type === 'hsFormCallback' &&
          message.eventName === 'onFormSubmitted' &&
          (messageFormId === undefined || messageFormId === PRE_CONSULT_FORM_ID) &&
          (messagePortalId === undefined || String(messagePortalId) === HUBSPOT_PORTAL_ID)
        ) {
          hasRedirected = true
          window.location.assign('/thank-you')
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [stage])

  return null
}
