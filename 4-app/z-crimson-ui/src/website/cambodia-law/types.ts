export type LinkItem = {
  label: string
  href: string
}

export type NavbarData = {
  brand: string
  links: LinkItem[]
  country: string
}

export type FooterData = {
  about: { title: string; text: string }
  links: { title: string; items: LinkItem[] }
  legal: { title: string; text: string }
}

export type LawCardData = {
  id: string
  title: string
  description: string
}

export type IndexPageData = {
  title: string
  description: string
  laws: LawCardData[]
  disclaimer: {
    title: string
    text: string
  }
}

export type SidebarGroupData = {
  title?: string
  items: Array<LinkItem & { active?: boolean }>
}

// Updated ArticleData to include ID for lookup
export type ArticleData = {
  id: string
  title?: string
  content: string
}

export type ChapterData = {
  title: string
  style: 'accent' | 'done' | 'attention' | 'danger'
  articles: ArticleData[]
}

export type HeaderTag = {
  text: string
  style: 'accent' | 'success' | 'attention'
}

export type LawPageData = {
  id: string
  header: {
    title: string
    subtitle: string
    tags: HeaderTag[]
  }
  sidebar: SidebarGroupData[]
  chapters: ChapterData[]
  footerText: string
}

export type LawData = {
  common: {
    navbar: NavbarData
    footer: FooterData
  }
  index: IndexPageData
  laws: Record<string, LawPageData>
}

// Sub-router types explicitly moved here
export type LawRoute =
  | { _tag: 'LawIndex' }
  | { _tag: 'LawDetail'; id: string }
  | { _tag: 'LawArticle'; id: string; articleId: string }
