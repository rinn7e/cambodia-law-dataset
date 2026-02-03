import type { ReactNode } from 'react'
import { Link, Heading } from './index'

export type SidebarItemConfig = {
  label: string | ReactNode
  href: string
  active?: boolean
}

export type SidebarGroupConfig = {
  title?: string
  items: SidebarItemConfig[]
}

export type SidebarConfig = {
  groups: SidebarGroupConfig[]
  class?: string
}

export const defaultSidebar = (): SidebarConfig => ({
  groups: [],
})

type SidebarProps = {
  config: SidebarConfig
}

export const Sidebar = ({ config }: SidebarProps): ReactNode => (
  <aside className={`w-full shrink-0 lg:w-72 ${config.class || ''}`}>
    <div className="sticky top-[96px] rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-subtle)] p-[16px]">
      {config.groups.map((group, i) => (
        <nav key={i} className={i > 0 ? 'mt-[32px]' : ''}>
          {group.title && (
            <Heading level={4} className="mb-[8px] px-[12px] text-xs font-semibold tracking-wider text-[var(--color-fg-muted)] uppercase">
              {group.title}
            </Heading>
          )}
          <div className="space-y-[4px]">
            {group.items.map((item, j) => (
              <Link
                key={j}
                href={item.href}
                className={`block rounded-md px-[12px] py-[8px] text-sm transition-colors hover:no-underline ${item.active
                    ? 'bg-[var(--color-accent-subtle)] font-medium text-[var(--color-accent-fg)]'
                    : 'text-[var(--color-fg-default)] hover:bg-[var(--color-neutral-subtle)]'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ))}
    </div>
  </aside>
)
