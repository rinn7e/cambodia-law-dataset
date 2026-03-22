export type LinkItem = {
  label: string
  href: string
}

export type NavbarData = {
  brand: string
  links: LinkItem[]
}

export type FooterData = {
  about: { title: string; text: string }
  links: { title: string; items: LinkItem[] }
  copyright: string
}

export type AthleteData = {
  id: string
  name: string
  nickname: string
  stats: {
    height: string
    weight: string
    reach: string
    wins: number
    losses: number
    draws: number
    ko: number
  }
}

export type MatchData = {
  id: string
  redCornerId: string
  blueCornerId: string
  date: string
  location: string
  title: string
  description: string
  status: 'upcoming' | 'live' | 'finished'
  result?: string
}

export type IndexPageData = {
  hero: {
    title: string
    subtitle: string
  }
  featuredMatchId: string
}

export type KunKhmerData = {
  common: {
    navbar: NavbarData
    footer: FooterData
  }
  index: IndexPageData
  athletes: Record<string, AthleteData>
  matches: Record<string, MatchData>
}

// Sub-router
export type KunKhmerRoute =
  | { _tag: 'Index' }
  | { _tag: 'MatchDetail'; id: string }
  | { _tag: 'AthleteDetail'; id: string }
