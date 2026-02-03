import type { ReactNode } from 'react'
import { Link, Text, Navbar, defaultNavbar } from '@/component'

const LawNavbar = (): ReactNode => (
  <Navbar
    config={{
      ...defaultNavbar(),
      class: 'border-b border-[var(--color-border-default)] bg-[var(--color-canvas-default)] px-[24px] py-[16px]',
      brand: (
        <Link href="/website/cambodia-law" className="text-xl font-bold tracking-tight text-[var(--color-accent-fg)] hover:no-underline">
          Cambodia Law Site
        </Link>
      ),
      links: [
        { label: 'Constitution', href: '/website/cambodia-law/constitution' },
        { label: 'Traffic Law', href: '/website/cambodia-law/traffic-law' },
      ],
      linksAlignment: 'start',
      slotEnd: <Text className="text-xs text-[var(--color-fg-muted)]">Kingdom of Cambodia</Text>,
    }}
  />
)

export { LawNavbar }
