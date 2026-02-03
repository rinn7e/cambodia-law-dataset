import type { ReactNode } from 'react'
import { Option, none, toUndefined } from 'fp-ts/Option'
import { Heading, Text } from './index'

export type CardConfig = {
  title: Option<string>
  description: Option<string>
  icon: Option<ReactNode>
  content: ReactNode
  hoverEffect?: boolean
  class?: string
}

export const defaultCard = (): CardConfig => ({
  title: none,
  description: none,
  icon: none,
  content: null,
  hoverEffect: false,
})

type CardProps = {
  config: CardConfig
}

export const Card = ({ config }: CardProps): ReactNode => {
  const hoverClasses = config.hoverEffect
    ? 'transition-colors hover:border-[var(--color-accent-emphasis)] group'
    : ''

  return (
    <div
      className={`rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-subtle)] p-[24px] ${hoverClasses} ${config.class || ''}`}
    >
      {toUndefined(config.icon) && (
        <div className="mb-[16px] flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-accent-subtle)] text-[var(--color-accent-fg)] transition-colors group-hover:bg-[var(--color-accent-emphasis)] group-hover:text-white">
          {toUndefined(config.icon)}
        </div>
      )}
      {toUndefined(config.title) && (
        <Heading level={3} className="mb-[8px]">
          {toUndefined(config.title)}
        </Heading>
      )}
      {toUndefined(config.description) && (
        <Text className="text-sm text-[var(--color-fg-muted)] leading-relaxed">{toUndefined(config.description)}</Text>
      )}
      {config.content}
    </div>
  )
}
