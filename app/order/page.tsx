import type { Metadata } from 'next'
import { SiteFooter } from '@/components/landing/closing'
import { OrderForm } from '@/components/order/order-form'
import { OrderHeader } from '@/components/order/order-header'
import { OrderIntro, OrderTrust } from '@/components/order/order-intro'

export const metadata: Metadata = {
  title: 'Reserve Your Consult | Be Resilient with Dr. Pete Sulack',
  description:
    "Reserve your $37 Terrain Health Consultation, a private 1-on-1 conversation with a Program Advisor on Dr. Pete's team.",
}

export default function OrderPage() {
  return (
    <>
      <OrderHeader />
      <main className="bg-linen-soft px-5 pt-10 pb-16 md:px-10 md:pt-16 md:pb-28">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,468px)_minmax(0,560px)] lg:grid-rows-[auto_1fr] lg:items-start lg:justify-center lg:gap-x-[72px] lg:gap-y-6">
          <OrderIntro />
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <OrderForm />
          </div>
          <OrderTrust />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
