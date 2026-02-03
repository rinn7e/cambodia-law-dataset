import type { ReactNode } from 'react'
import { Heading, Text, Link } from '@/component'
import { Route } from '@/types'
import { LawNavbar } from './law-navbar'
import { LawFooter } from './law-footer'
import { ConstitutionPage } from './constitution-page'
import { TrafficLawPage } from './traffic-law-page'

const LawCard = ({ title, description, href }: { title: string; description: string; href: string }): ReactNode => (
  <Link
    href={href}
    className="group block rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[24px] shadow-sm transition-all hover:border-[var(--color-accent-emphasis)] hover:shadow-md hover:no-underline"
  >
    <Heading level={3} className="mb-[8px] text-xl font-bold text-[var(--color-fg-default)] group-hover:text-[var(--color-accent-fg)]">
      {title}
    </Heading>
    <Text className="text-sm leading-relaxed text-[var(--color-fg-muted)]">{description}</Text>
    <div className="mt-[16px] text-xs font-semibold text-[var(--color-accent-fg)] uppercase tracking-wider">
      Read Full Text &rarr;
    </div>
  </Link>
)

const LawIndexView = (): ReactNode => (
  <div className="py-[48px]">
    <div className="mb-[48px] text-center">
      <Heading level={1} className="mb-[16px] text-4xl font-extrabold tracking-tight text-[var(--color-fg-default)]">
        Cambodia Law Index
      </Heading>
      <Text className="mx-auto max-w-2xl text-lg text-[var(--color-fg-muted)]">
        Access official legal documents of the Kingdom of Cambodia in a clean, modern interface.
      </Text>
    </div>

    <div className="grid gap-[24px] md:grid-cols-2">
      <LawCard
        title="Constitution"
        description="The supreme law of the Kingdom of Cambodia. Adopted by the Constituent Assembly in 1993."
        href="/website/cambodia-law/constitution"
      />
      <LawCard
        title="Road Traffic Law"
        description="The legal framework for road safety, vehicle regulation, and traffic rules within Cambodia."
        href="/website/cambodia-law/traffic-law"
      />
    </div>

    <div className="mt-[64px] rounded-lg border border-[var(--color-border-muted)] bg-[var(--color-canvas-subtle)] p-[32px] text-center">
      <Heading level={2} className="mb-[12px] text-xl font-bold italic">Disclaimer</Heading>
      <Text className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
        This website is for informational purposes only and does not constitute official legal advice.
        Always consult with a qualified legal professional for matters relating to Cambodian law.
      </Text>
    </div>
  </div>
)

const LawIndexPage = ({ route }: { route: Route }): ReactNode => {
  const renderContent = () => {
    if (route._tag !== 'WebsiteCambodiaLaw') return <LawIndexView />

    switch (route.lawRoute) {
      case 'constitution':
        return <ConstitutionPage />
      case 'traffic-law':
        return <TrafficLawPage />
      case 'index':
      default:
        return <LawIndexView />
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-canvas-default)] text-[var(--color-fg-default)]">
      <LawNavbar />
      <main className="mx-auto w-full max-w-[1280px] px-[24px]">
        {renderContent()}
      </main>
      <LawFooter />
    </div>
  )
}

export { LawIndexPage }
