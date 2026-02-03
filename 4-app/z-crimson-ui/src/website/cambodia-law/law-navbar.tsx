import type { ReactNode } from 'react'
import { Link, Text, Navbar, defaultNavbar } from '@/component'
import rawData from './data.json'
import type { LawData } from './types'

const data = rawData as unknown as LawData

const LawNavbar = (): ReactNode => (
  <Navbar
    config={{
      ...defaultNavbar(),
      class: 'border-b border-[var(--color-border-default)] bg-[var(--color-canvas-default)] px-[24px] py-[16px]',
      brand: (
        <Link href="/website/cambodia-law" className="text-xl font-bold tracking-tight text-[var(--color-accent-fg)] hover:no-underline">
          {data.common.navbar.brand}
        </Link>
      ),
      links: data.common.navbar.links,
      linksAlignment: 'start',
      slotEnd: <Text className="text-xs text-[var(--color-fg-muted)]">{data.common.navbar.country}</Text>,
    }}
  />
)

export { LawNavbar }
