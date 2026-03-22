import { Navbar, defaultNavbar } from '@/component'
import rawData from './data.json'
import type { KunKhmerData } from './types'

const data = rawData as unknown as KunKhmerData

export const KunKhmerNavbar = () => (
  <Navbar
    config={{
      ...defaultNavbar(),
      brand: (
        <span className="text-2xl font-black italic text-[var(--color-danger-emphasis)]">
          {data.common.navbar.brand}
        </span>
      ),
      links: data.common.navbar.links,
    }}
  />
)
