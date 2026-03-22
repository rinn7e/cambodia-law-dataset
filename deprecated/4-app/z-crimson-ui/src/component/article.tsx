import type { ReactNode } from 'react'
import { Option, none, toUndefined } from 'fp-ts/Option'
import { Heading, Text } from './index'

export type ArticleConfig = {
  title: Option<string>
  content: ReactNode
  class?: string
}

export const defaultArticle = (): ArticleConfig => ({
  title: none,
  content: null,
})

type ArticleProps = {
  config: ArticleConfig
}

export const Article = ({ config }: ArticleProps): ReactNode => (
  <div
    className={`mb-[24px] rounded-md border border-[var(--color-border-muted)] bg-[var(--color-canvas-default)] p-[16px] ${config.class || ''}`}
  >
    {toUndefined(config.title) && (
      <Heading level={4} className="mb-[8px] text-[var(--color-accent-fg)] font-bold">
        {toUndefined(config.title)}
      </Heading>
    )}
    <div className="text-[var(--color-fg-default)] leading-relaxed">
      {typeof config.content === 'string' ? <Text>{config.content}</Text> : config.content}
    </div>
  </div>
)
