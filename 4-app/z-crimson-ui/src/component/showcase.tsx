import type { ReactNode } from 'react'

type ShowcaseProps = {
  title: string
  description: string
  children: ReactNode
}

export const Showcase = ({ title, description, children }: ShowcaseProps): ReactNode => (
  <div className="mb-[32px] last:mb-0">
    <h3 className="mb-[4px] text-lg font-semibold text-[var(--color-fg-default)]">{title}</h3>
    <p className="mb-[16px] text-sm text-[var(--color-fg-muted)]">{description}</p>
    <div className="rounded-md border border-[var(--color-border-muted)] bg-[var(--color-canvas-default)] p-[16px]">
      {children}
    </div>
  </div>
)
