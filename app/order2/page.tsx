import Image from 'next/image'
import type { Metadata } from 'next'
import { SiteFooter } from '@/components/landing/closing'
import { OrderForm } from '@/components/order/order-form'
import { OrderHeader } from '@/components/order/order-header'
import { OrderTwoSummary } from '@/components/order/order-two-summary'

export const metadata: Metadata = {
  title: 'Reserve Your Consult | Be Resilient with Dr. Pete Sulack',
  description:
    "Complete the secure form to reserve your $37 Terrain Health Consultation with a Program Advisor on Dr. Pete's team.",
}

export default function OrderTwoPage() {
  return (
    <>
      <OrderHeader homeHref="/lp2" />
      <main>
        <section className="bg-linen-soft px-5 pt-10 pb-12 md:px-10 md:pt-16 md:pb-16">
          <div className="mx-auto flex max-w-[960px] flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-3 rounded-full border border-black/8 bg-white py-2 pr-4 pl-2 text-left">
              <Image
                src="/images/dr-pete-avatar.webp"
                alt="Dr. Pete Sulack"
                width={36}
                height={36}
                className="size-9 shrink-0 rounded-full object-cover object-[50%_22%]"
              />
              <p className="text-[12px] font-semibold leading-5 text-black md:text-sm">
                Created by Dr. Pete Sulack after his own Grade 4 brain cancer diagnosis
              </p>
            </div>
            <h1 className="font-display text-[38px] font-heavy leading-[1.08] tracking-tight text-balance text-black md:text-[60px] md:leading-[1.1]">
              Your private consult<br className="hidden md:block" /> starts here.
            </h1>
            <p className="max-w-[720px] text-[15px] leading-7 text-muted md:text-base md:leading-[29px]">
              Complete the short form below to reserve your $37 Terrain Health Consultation with a Program Advisor on Dr. Pete&apos;s team.
            </p>
          </div>
        </section>
        <section className="bg-white px-5 pt-8 pb-16 md:px-10 md:pt-16 md:pb-28">
          <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,468px)_minmax(0,560px)] lg:gap-x-[72px]">
            <OrderTwoSummary />
            <div className="lg:sticky lg:top-6">
              <OrderForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
