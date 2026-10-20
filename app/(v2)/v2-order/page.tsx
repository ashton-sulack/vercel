import OrderPage from '@/components/v2/order-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reserve Your Consult | Be Resilient',
  description: 'Reserve a private Terrain Health Consultation with a Be Resilient Program Advisor.',
}

export default function Order() {
  return <OrderPage />
}
