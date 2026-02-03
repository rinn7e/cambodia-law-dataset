import * as O from 'fp-ts/Option'

// Route types for navigation
export type LawRoute = 'index' | 'constitution' | 'traffic-law'

export type Route =
  | { _tag: 'Home' }
  | { _tag: 'PageForm' }
  | { _tag: 'PageInteractive' }
  | { _tag: 'PageList' }
  | { _tag: 'PageMedia' }
  | { _tag: 'PageMisc' }
  | { _tag: 'PageSemantic' }
  | { _tag: 'PageTable' }
  | { _tag: 'PageText' }
  | { _tag: 'MockAllElements' }
  | { _tag: 'MockDoc' }
  | { _tag: 'MockProduct' }
  | { _tag: 'WebsiteCambodiaLaw'; lawRoute: LawRoute }

// Theme modes
export type ThemeMode = 'light' | 'dark' | 'system'

// Application Model (State)
export type Model = {
  route: Route
  themeMode: ThemeMode
  sidebarOpen: boolean
  dialogOpen: O.Option<string>
}

// Application Messages (Actions)
export type Msg =
  | { _tag: 'Navigate'; route: Route }
  | { _tag: 'SetTheme'; mode: ThemeMode }
  | { _tag: 'ToggleSidebar' }
  | { _tag: 'OpenDialog'; dialogId: string }
  | { _tag: 'CloseDialog' }
  | { _tag: 'UrlChanged'; location: Location }
