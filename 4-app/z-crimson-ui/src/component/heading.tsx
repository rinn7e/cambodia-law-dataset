import type { ReactNode } from 'react'

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  className?: string
}

export const Heading = ({ level, children, className = '' }: HeadingProps): ReactNode => {
  const Tag = `h${level}` as const
  const baseClasses = {
    1: 'text-3xl font-bold text-[var(--color-fg-default)]',
    2: 'text-2xl font-bold text-[var(--color-fg-default)]',
    3: 'text-xl font-semibold text-[var(--color-fg-default)]',
    4: 'text-lg font-semibold text-[var(--color-fg-default)]',
    5: 'text-base font-medium text-[var(--color-fg-default)]',
    6: 'text-sm font-medium text-[var(--color-fg-default)]',
  }

  return <Tag className={`${baseClasses[level]} ${className}`}>{children}</Tag>
}
