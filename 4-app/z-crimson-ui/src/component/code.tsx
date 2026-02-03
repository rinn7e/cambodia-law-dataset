import type { ReactNode } from 'react'

type CodeProps = {
  children: ReactNode
  className?: string
}

export const Code = ({ children, className = '' }: CodeProps): ReactNode => (
  <code className={`rounded bg-[var(--color-neutral-subtle)] px-[4px] py-[2px] font-mono text-sm ${className}`}>
    {children}
  </code>
)

type PreProps = {
  children: ReactNode
  className?: string
}

export const Pre = ({ children, className = '' }: PreProps): ReactNode => (
  <pre
    className={`overflow-x-auto rounded-md border border-[var(--color-border-muted)] bg-[var(--color-canvas-inset)] p-[16px] ${className}`}
  >
    <code className="font-mono text-sm text-[var(--color-fg-default)]">{children}</code>
  </pre>
)

type KbdProps = {
  children: ReactNode
  className?: string
}

export const Kbd = ({ children, className = '' }: KbdProps): ReactNode => (
  <kbd
    className={`rounded border border-[var(--color-border-default)] bg-[var(--color-canvas-inset)] px-[8px] py-[4px] font-mono text-sm shadow-sm ${className}`}
  >
    {children}
  </kbd>
)
