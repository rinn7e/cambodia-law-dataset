import type { ReactNode } from 'react'
import { Heading, Text, Link } from '@/component'
import { Route } from '@/types'
import { LawNavbar } from './law-navbar'
import { LawFooter } from './law-footer'
import { LawViewPage } from './law-view-page'
import { LawArticlePage } from './law-article-page'
import rawData from './data.json'
import type { LawData } from './types'

const data = rawData as unknown as LawData

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
        {data.index.title}
      </Heading>
      <Text className="mx-auto max-w-2xl text-lg text-[var(--color-fg-muted)]">
        {data.index.description}
      </Text>
    </div>

    <div className="grid gap-[24px] md:grid-cols-2">
      {data.index.laws.map((law, i) => (
        <LawCard
          key={i}
          title={law.title}
          description={law.description}
          href={`/website/cambodia-law/law/${law.id}`}
        />
      ))}
    </div>

    <div className="mt-[64px] rounded-lg border border-[var(--color-border-muted)] bg-[var(--color-canvas-subtle)] p-[32px] text-center">
      <Heading level={2} className="mb-[12px] text-xl font-bold italic">{data.index.disclaimer.title}</Heading>
      <Text className="text-sm text-[var(--color-fg-muted)] leading-relaxed">
        {data.index.disclaimer.text}
      </Text>
    </div>
  </div>
)

const LawIndexPage = ({ route }: { route: Route }): ReactNode => {
  const renderContent = () => {
    if (route._tag !== 'WebsiteCambodiaLaw') return <LawIndexView />

    // Handle sub-routes
    switch (route.lawRoute._tag) {
      case 'LawDetail':
        return <LawViewPage id={route.lawRoute.id} />
      case 'LawArticle':
        return <LawArticlePage lawId={route.lawRoute.id} articleId={route.lawRoute.articleId} />
      case 'LawIndex':
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
