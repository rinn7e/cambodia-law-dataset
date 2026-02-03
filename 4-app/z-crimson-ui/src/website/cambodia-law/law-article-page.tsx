import type { ReactNode } from 'react'
import * as O from 'fp-ts/Option'
import { Heading, Text, Article, defaultArticle, Link } from '@/component'
import rawData from './data.json'
import type { LawData } from './types'

const data = rawData as unknown as LawData

export const LawArticlePage = ({ lawId, articleId }: { lawId: string; articleId: string }): ReactNode => {
  const pageData = data.laws[lawId]

  if (!pageData) {
    return (
      <div className="py-[48px] text-center">
        <Heading level={2} className="text-xl font-bold text-[var(--color-danger-fg)]">
          Law Not Found
        </Heading>
      </div>
    )
  }

  // Find the article
  let article = null
  for (const chapter of pageData.chapters) {
    const found = chapter.articles.find(a => a.id === articleId)
    if (found) {
      article = found
      break
    }
  }

  if (!article) {
    return (
      <div className="py-[48px] text-center">
        <Heading level={2} className="text-xl font-bold text-[var(--color-danger-fg)]">
          Article Not Found
        </Heading>
        <Text className="mt-[8px]">Article ID {articleId} not found in Law {lawId}.</Text>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl py-[48px]">
      <div className="mb-[32px]">
        <Link href={`/website/cambodia-law/law/${lawId}`} className="text-sm font-medium text-[var(--color-accent-fg)] hover:underline">
          &larr; Back to {pageData.header.title}
        </Link>
      </div>

      <article className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[32px] shadow-sm">
        <div className="mb-[24px]">
          <Heading level={1} className="text-2xl font-bold text-[var(--color-fg-default)]">
            {article.title}
          </Heading>
          <Text className="text-sm text-[var(--color-fg-muted)]">
            From {pageData.header.title}
          </Text>
        </div>

        <div className="prose text-[var(--color-fg-default)]">
          <Article
            config={{
              ...defaultArticle(),
              title: O.none,
              content: article.content,
            }}
          />
        </div>
      </article>
    </div>
  )
}
