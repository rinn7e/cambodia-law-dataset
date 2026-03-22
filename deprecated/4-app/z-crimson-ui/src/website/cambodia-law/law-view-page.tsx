import type { ReactNode } from 'react'
import * as O from 'fp-ts/Option'
import { Heading, Text, Article, defaultArticle, Sidebar, defaultSidebar, Link } from '@/component'
import rawData from './data.json'
import type { LawData } from './types'

const data = rawData as unknown as LawData

export const LawViewPage = ({ id }: { id: string }): ReactNode => {
  const pageData = data.laws[id]

  if (!pageData) {
    return (
      <div className="py-[48px] text-center">
        <Heading level={2} className="text-xl font-bold text-[var(--color-danger-fg)]">
          Law Not Found
        </Heading>
        <Text className="mt-[8px]">The requested law document could not be found.</Text>
      </div>
    )
  }

  const getTagColor = (style: string) => {
    switch (style) {
      case 'success':
        return { bg: 'bg-[var(--color-success-subtle)]', text: 'text-[var(--color-success-fg)]' }
      case 'attention':
        return { bg: 'bg-[var(--color-attention-subtle)]', text: 'text-[var(--color-attention-fg)]' }
      case 'accent':
      default:
        return { bg: 'bg-[var(--color-accent-subtle)]', text: 'text-[var(--color-accent-fg)]' }
    }
  }

  const getBorderColor = (style: string) => {
    switch (style) {
      case 'done':
        return 'border-[var(--color-done-emphasis)]'
      case 'attention':
        return 'border-[var(--color-attention-emphasis)]'
      case 'accent':
      default:
        return 'border-[var(--color-accent-emphasis)]'
    }
  }

  return (
    <div className="flex flex-col gap-[32px] py-[24px] lg:flex-row">
      {/* Chapters Sidebar */}
      <Sidebar
        config={{
          ...defaultSidebar(),
          groups: pageData.sidebar,
        }}
      />

      {/* Legal Text Content */}
      <article className="min-w-0 flex-1 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[32px] shadow-sm">
        <div className="mb-[48px] border-b border-[var(--color-border-muted)] pb-[32px] text-center">
          <Heading level={1} className="mb-[16px] text-3xl font-extrabold tracking-widest uppercase">
            {pageData.header.title}
          </Heading>
          <Heading level={2} className="text-xl font-semibold text-[var(--color-fg-muted)]">{pageData.header.subtitle}</Heading>
          <div className="mt-[24px] flex justify-center gap-[16px]">
            {pageData.header.tags.map((tag) => {
              const colors = getTagColor(tag.style)
              return (
                <span key={tag.text} className={`rounded-full ${colors.bg} px-[12px] py-[4px] text-xs font-bold ${colors.text} uppercase`}>
                  {tag.text}
                </span>
              )
            })}
          </div>
        </div>

        <section className="space-y-[40px]">
          {pageData.chapters.map((chapter, i) => (
            <div key={i} className={`max-w-none ${i > 0 ? 'border-t border-[var(--color-border-muted)] pt-[40px]' : ''}`}>
              <Heading level={3} className={`mb-[24px] border-l-[4px] ${getBorderColor(chapter.style)} pl-[16px] text-xl font-bold`}>
                {chapter.title}
              </Heading>

              <div className="space-y-[24px]">
                {chapter.articles.map((article, j) => (
                  <Link
                    key={j}
                    href={`/website/cambodia-law/law/${id}/article/${article.id}`}
                    className="block rounded-lg transition-colors hover:bg-[var(--color-canvas-subtle)]"
                  >
                    <Article
                      config={{
                        ...defaultArticle(),
                        title: article.title ? O.some(article.title) : O.none,
                        content: article.content,
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-[64px] border-t border-[var(--color-border-muted)] pt-[32px] text-center text-sm text-[var(--color-fg-muted)] italic">
          <Text className="text-inherit">{pageData.footerText}</Text>
        </footer>
      </article>
    </div>
  )
}
