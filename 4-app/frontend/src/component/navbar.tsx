import type { ReactNode } from 'react'
import { Link } from './index'

export type NavbarLink = {
  label: string | ReactNode
  href: string
  active?: boolean
}

export type NavbarConfig = {
  brand: ReactNode
  links: NavbarLink[]
  linksAlignment?: 'start' | 'end'
  slotAfterBrand?: ReactNode
  slotEnd?: ReactNode
  class?: string
}

export const defaultNavbar = (): NavbarConfig => ({
  brand: null,
  links: [],
  linksAlignment: 'start',
})

type NavbarProps = {
  config: NavbarConfig
}

export const Navbar = ({ config }: NavbarProps): ReactNode => (
  <nav
    className={`sticky top-0 z-30 mb-[32px] border-b border-[var(--color-border-muted)] bg-[var(--color-canvas-default)]/80 px-[24px] py-[12px] backdrop-blur-md ${config.class || ''}`}
  >
    <div className="flex w-full items-center justify-between">
      <div className="flex w-full items-center">
        {/* Brand */}
        <div className="flex items-center gap-[12px]">
          {config.brand}
        </div>

        {/* Slot After Brand (e.g. Search) */}
        {config.slotAfterBrand && <div className="ml-[24px]">{config.slotAfterBrand}</div>}

        {/* Links (Start Aligned) */}
        {config.linksAlignment === 'start' && config.links.length > 0 && (
          <div className="ml-[32px] hidden gap-[24px] md:flex">
            {config.links.map((link, i) => (
              <Link key={i} href={link.href} className="text-sm font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-fg-default)] hover:no-underline">
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Links (End Aligned) */}
        {config.linksAlignment === 'end' && config.links.length > 0 && (
          <div className="hidden gap-[24px] md:flex mr-[24px]">
            {config.links.map((link, i) => (
              <Link key={i} href={link.href} className="text-sm font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-fg-default)] hover:no-underline">
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Slot End (e.g. Buttons) */}
        {config.slotEnd && <div className="flex items-center gap-[12px]">{config.slotEnd}</div>}
      </div>
    </div>
  </nav>
)
