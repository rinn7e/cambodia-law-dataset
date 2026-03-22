import type { ReactNode } from 'react'
import { Heading, Text, Link, Ul, Li } from './index'

export type FooterLink = {
  label: string
  href: string
}

export type FooterContent =
  | { _tag: 'text'; text: string }
  | { _tag: 'links'; links: FooterLink[] }

export type FooterColumnConfig = {
  title: string
  content: FooterContent
}

export type FooterConfig = {
  columns: FooterColumnConfig[]
  class?: string
}

export const defaultFooter = (): FooterConfig => ({
  columns: [],
})

type FooterProps = {
  config: FooterConfig
}

export const Footer = ({ config }: FooterProps): ReactNode => (
  <footer
    className={`mt-auto border-t border-[var(--color-border-muted)] bg-[var(--color-canvas-subtle)] px-[24px] py-[48px] ${config.class || ''}`}
  >
    <div className="mx-auto grid max-w-[1280px] gap-[32px] md:grid-cols-3">
      {config.columns.map((col, i) => (
        <div key={i}>
          <Heading level={4} className="mb-[16px] text-sm font-bold uppercase tracking-wider">
            {col.title}
          </Heading>
          {col.content._tag === 'text' ? (
            <Text className="text-xs leading-relaxed text-[var(--color-fg-muted)]">{col.content.text}</Text>
          ) : (
            <Ul className="space-y-[8px] list-none">
              {col.content.links.map((link) => (
                <Li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-accent-fg)] hover:no-underline"
                  >
                    {link.label}
                  </Link>
                </Li>
              ))}
            </Ul>
          )}
        </div>
      ))}
    </div>
  </footer>
)
