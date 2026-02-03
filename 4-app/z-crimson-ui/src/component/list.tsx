import type { ReactNode } from 'react'

type ListProps = {
  children: ReactNode
  className?: string
}

export const Ul = ({ children, className = '' }: ListProps): ReactNode => (
  <ul className={`list-inside list-disc space-y-[4px] text-[var(--color-fg-default)] ${className}`}>{children}</ul>
)

export const Ol = ({ children, className = '' }: ListProps): ReactNode => (
  <ol className={`list-inside list-decimal space-y-[4px] text-[var(--color-fg-default)] ${className}`}>{children}</ol>
)

export const Li = ({ children, className = '' }: ListProps): ReactNode => (
  <li className={className}>{children}</li>
)

export const Dl = ({ children, className = '' }: ListProps): ReactNode => (
  <dl className={`space-y-[16px] ${className}`}>{children}</dl>
)

export const Dt = ({ children, className = '' }: ListProps): ReactNode => (
  <dt className={`font-semibold text-[var(--color-fg-default)] ${className}`}>{children}</dt>
)

export const Dd = ({ children, className = '' }: ListProps): ReactNode => (
  <dd className={`mt-[4px] text-sm text-[var(--color-fg-muted)] ${className}`}>{children}</dd>
)
