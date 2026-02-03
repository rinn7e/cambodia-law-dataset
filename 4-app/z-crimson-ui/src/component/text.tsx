import type { ReactNode } from 'react'

type TextProps = {
  variant?: 'default' | 'muted' | 'small' | 'lead'
  children: ReactNode
  className?: string
}

export const Text = ({ children, className = '' }: TextProps): ReactNode => (
  <p className={`leading-relaxed text-[var(--color-fg-default)] ${className}`}>{children}</p>
)

type LinkProps = {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Link = ({ href, children, className = '', ...props }: LinkProps): ReactNode => (
  <a href={href} className={`text-[var(--color-accent-fg)] hover:underline ${className}`} {...props}>
    {children}
  </a>
)

type BlockquoteProps = {
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export const Blockquote = ({ children, footer, className = '' }: BlockquoteProps): ReactNode => (
  <blockquote
    className={`border-l-[4px] border-[var(--color-accent-emphasis)] py-[8px] pl-[16px] text-[var(--color-fg-muted)] italic ${className}`}
  >
    {typeof children === 'string' ? <p className="mb-[8px]">{children}</p> : children}
    {footer && <footer className="text-sm not-italic">— {footer}</footer>}
  </blockquote>
)
