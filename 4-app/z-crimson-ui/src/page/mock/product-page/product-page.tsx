import type { ReactNode } from 'react'
import * as O from 'fp-ts/Option'
import { Heading, Text, Button, defaultButton, defaultNavbar, Card, defaultCard, Navbar } from '@/component'

const ProductNavbar = (): ReactNode => (
  <Navbar
    config={{
      ...defaultNavbar(),
      class: 'border-gray-200/50 bg-white/80',
      brand: (
        <div className="flex items-center gap-[12px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent-emphasis)] text-white shadow-sm">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-gray-900">ZCrimson</span>
        </div>
      ),
      links: [
        { label: 'Product', href: '#' },
        { label: 'Solutions', href: '#' },
        { label: 'Enterprise', href: '#' },
        { label: 'Pricing', href: '#' },
      ],
      linksAlignment: 'start',
      slotEnd: (
        <div className="flex items-center gap-[12px]">
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'ghost',
              label: 'Sign in',
              class: 'text-sm font-semibold text-gray-700',
            }}
          />
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'primary',
              label: 'Get Started',
              class: 'px-[16px] py-[8px] text-sm font-semibold shadow-sm',
            }}
          />
        </div>
      ),
    }}
  />
)

const ProductHome = (): ReactNode => (
  <div className="space-y-[64px]">
    <ProductNavbar />
    <div className="space-y-[64px] px-[24px] pb-[32px]">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl space-y-[24px] text-center">
        <Heading level={1} className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Build software <span className="text-[var(--color-accent-fg)]">better, together</span>
        </Heading>
        <Text className="text-xl text-[var(--color-fg-muted)]">
          The most advanced AI-powered development platform. Streamline your workflow from idea to production.
        </Text>
        <div className="flex flex-wrap justify-center gap-[16px]">
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'primary',
              label: 'Start free trial',
              class: 'px-[24px] py-[12px] font-semibold shadow-md',
            }}
          />
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'outline',
              label: 'Contact sales',
              class: 'px-[24px] py-[12px] font-semibold',
            }}
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 gap-[32px] md:grid-cols-3">
        <Card
          config={{
            ...defaultCard(),
            title: O.some('AI Copilot'),
            description: O.some('Our advanced LLM understands your codebase and helps you write quality code faster than ever.'),
            hoverEffect: true,
            icon: O.some(
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
          }}
        />
        <Card
          config={{
            ...defaultCard(),
            title: O.some('Cloud IDE'),
            description: O.some('Zero setup environments that scale with your needs. Code from any device, anywhere.'),
            hoverEffect: true,
            icon: O.some(
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            ),
          }}
        />
        <Card
          config={{
            ...defaultCard(),
            title: O.some('CI/CD Pipelines'),
            description: O.some('Automate your testing and deployment with powerful, customizable workflows.'),
            hoverEffect: true,
            icon: O.some(
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            ),
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="rounded-xl border border-[var(--color-border-muted)] bg-[var(--color-canvas-inset)] p-[48px]">
        <div className="grid grid-cols-2 gap-[32px] text-center md:grid-cols-4">
          {[
            { label: 'Developers', value: '100M+' },
            { label: 'Repositories', value: '330M+' },
            { label: 'Actions', value: '15B+' },
            { label: 'Security Fixes', value: '1M+' },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-[var(--color-fg-default)]">{value}</div>
              <Text className="mt-[4px] text-sm text-[var(--color-fg-muted)]">{label}</Text>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-xl bg-gradient-to-r from-[var(--color-accent-emphasis)] to-[var(--color-done-emphasis)] px-[24px] py-[48px] text-center text-white">
        <Heading level={2} className="mb-[16px] text-3xl font-bold text-white">
          Ready to accelerate your delivery?
        </Heading>
        <Text className="mx-auto mb-[32px] max-w-2xl text-lg opacity-90 text-white leading-relaxed">
          Join thousands of teams already building the future of software on our platform.
        </Text>
        <Button
          config={{
            ...defaultButton(),
            buttonStyle: 'ghost',
            label: 'Get started for free',
            class: 'rounded-full bg-white px-[32px] py-[16px] font-bold text-[var(--color-accent-emphasis)] shadow-lg transition-transform hover:scale-105 hover:bg-white',
          }}
        />
      </section>
    </div>
  </div>
)

export { ProductHome }
