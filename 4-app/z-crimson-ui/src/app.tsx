import { ProgramWithNav, Router, route0, str, RouteDef } from 'react-tea-cup'
import { Cmd, Dispatcher, Sub, noCmd } from 'tea-cup-fp'
import * as O from 'fp-ts/Option'
import { Model, Msg, ThemeMode, Route } from '@/types'
import { HomePage } from '@/page/home-page'
import { TextElements } from '@/page/text-page'
import { ListElements } from '@/page/list-page'
import { FormElements } from '@/page/form-page'
import { TableElements } from '@/page/table-page'
import { MediaElements } from '@/page/media-page'
import { InteractiveElements } from '@/page/interactive-page'
import { SemanticElements } from '@/page/semantic-page'
import { MiscElements } from '@/page/misc-page'
import { ProductHome } from '@/page/mock/product-page/product-page'
import { DocPage } from '@/page/mock/doc-page/doc-page'
import { AllElements } from '@/page/mock/all-elements-page/all-elements-page'
import { LawIndexPage } from '@/website/cambodia-law'
import type { ReactNode } from 'react'
import { Link } from '@/component'

export { LawIndexPage } from '@/website/cambodia-law'

// Router definition
const router: Router<Route> = new Router(
  route0.map(() => ({ _tag: 'Home' })),
  // Elements
  new RouteDef([str('page'), str('text')], () => ({ _tag: 'PageText' })),
  new RouteDef([str('page'), str('list')], () => ({ _tag: 'PageList' })),
  new RouteDef([str('page'), str('form')], () => ({ _tag: 'PageForm' })),
  new RouteDef([str('page'), str('table')], () => ({ _tag: 'PageTable' })),
  new RouteDef([str('page'), str('media')], () => ({ _tag: 'PageMedia' })),
  new RouteDef([str('page'), str('interactive')], () => ({ _tag: 'PageInteractive' })),
  new RouteDef([str('page'), str('semantic')], () => ({ _tag: 'PageSemantic' })),
  new RouteDef([str('page'), str('misc')], () => ({ _tag: 'PageMisc' })),
  // Mocks
  new RouteDef([str('page'), str('mock'), str('all-elements')], () => ({ _tag: 'MockAllElements' })),
  new RouteDef([str('page'), str('mock'), str('doc')], () => ({ _tag: 'MockDoc' })),
  new RouteDef([str('page'), str('mock'), str('product')], () => ({ _tag: 'MockProduct' })),
  // Website
  new RouteDef([str('website'), str('cambodia-law'), str('law'), str(), str('article'), str()], (_w: string, _c: string, _l: string, id: string, _a: string, articleId: string) => ({
    _tag: 'WebsiteCambodiaLaw',
    lawRoute: { _tag: 'LawArticle', id, articleId }
  })),
  new RouteDef([str('website'), str('cambodia-law'), str('law'), str()], (_w: string, _c: string, _l: string, id: string) => ({
    _tag: 'WebsiteCambodiaLaw',
    lawRoute: { _tag: 'LawDetail', id }
  })),
  new RouteDef([str('website'), str('cambodia-law')], () => ({ _tag: 'WebsiteCambodiaLaw', lawRoute: { _tag: 'LawIndex' } }))
)

// Initial state
const init = (location: Location): [Model, Cmd<Msg>] => {
  const route = router.parseLocation(location).withDefault({ _tag: 'Home' })
  const initialModel: Model = {
    route,
    themeMode: 'system',
    sidebarOpen: true,
    dialogOpen: O.none,
  }
  return noCmd(initialModel)
}

// Update function - pure state transitions
const update = (msg: Msg, model: Model): [Model, Cmd<Msg>] => {
  switch (msg._tag) {
    case 'Navigate':
      return noCmd({ ...model, route: msg.route })

    case 'UrlChanged': {
      const route = router.parseLocation(msg.location).withDefault({ _tag: 'Home' })
      return noCmd({ ...model, route })
    }

    case 'SetTheme': {
      applyTheme(msg.mode)
      return noCmd({ ...model, themeMode: msg.mode })
    }

    case 'ToggleSidebar':
      return noCmd({ ...model, sidebarOpen: !model.sidebarOpen })

    case 'OpenDialog':
      return noCmd({ ...model, dialogOpen: O.some(msg.dialogId) })

    case 'CloseDialog':
      return noCmd({ ...model, dialogOpen: O.none })
  }
}

// Theme application side effect
const applyTheme = (mode: ThemeMode): void => {
  const root = document.documentElement
  if (mode === 'dark') {
    root.setAttribute('data-theme', 'dark')
  } else if (mode === 'light') {
    root.setAttribute('data-theme', 'light')
  } else {
    // System mode - remove attribute to let CSS media query take over
    root.removeAttribute('data-theme')
  }
}

// Subscriptions
const subscriptions = (_: Model): Sub<Msg> => Sub.none()

// Render the current route
const renderRoute = (route: Route): ReactNode => {
  switch (route._tag) {
    case 'Home':
      return <HomePage />
    case 'PageText':
      return <TextElements />
    case 'PageList':
      return <ListElements />
    case 'PageForm':
      return <FormElements />
    case 'PageTable':
      return <TableElements />
    case 'PageMedia':
      return <MediaElements />
    case 'PageInteractive':
      return <InteractiveElements />
    case 'PageSemantic':
      return <SemanticElements />
    case 'PageMisc':
      return <MiscElements />
    case 'MockProduct':
      return <ProductHome />
    case 'MockDoc':
      return <DocPage />
    case 'MockAllElements':
      return <AllElements />
    case 'WebsiteCambodiaLaw':
      return <LawIndexPage route={route} />
  }
}

// Route Metadata
type RouteMetadata = {
  label: string
  description: string
  url: string
}

const ELEMENT_ROUTES: Record<string, RouteMetadata> = {
  PageText: { label: 'Text Elements', description: 'Headings, paragraphs, and inline text', url: '/page/text' },
  PageList: { label: 'List Elements', description: 'Ordered, unordered, and description lists', url: '/page/list' },
  PageForm: { label: 'Form Elements', description: 'Inputs, buttons, and form controls', url: '/page/form' },
  PageTable: { label: 'Table Elements', description: 'Tables with headers and data', url: '/page/table' },
  PageMedia: { label: 'Media Elements', description: 'Images, figures, and media', url: '/page/media' },
  PageInteractive: { label: 'Interactive Elements', description: 'Details, dialogs, and menus', url: '/page/interactive' },
  PageSemantic: { label: 'Semantic Elements', description: 'Article, section, and landmarks', url: '/page/semantic' },
  PageMisc: { label: 'Misc Elements', description: 'Progress, meter, and utilities', url: '/page/misc' },
}

const MOCK_ROUTES: Record<string, RouteMetadata> = {
  MockProduct: { label: 'Product Home', description: 'Mock product landing page', url: '/page/mock/product' },
  MockDoc: { label: 'Documentation', description: 'Mock documentation page', url: '/page/mock/doc' },
  MockAllElements: { label: 'All Elements', description: 'All UI elements on one page', url: '/page/mock/all-elements' },
}

const WEBSITE_ROUTES: Record<string, RouteMetadata> = {
  WebsiteCambodiaLaw: { label: 'Cambodia Laws', description: 'Index of Cambodia Laws', url: '/website/cambodia-law' },
}

const ALL_METADATA: Record<string, RouteMetadata> = {
  ...ELEMENT_ROUTES,
  ...MOCK_ROUTES,
  ...WEBSITE_ROUTES,
}

const BrowserFrame = ({ children, title }: { children: ReactNode; title: string }): ReactNode => (
  <div className="flex flex-col overflow-hidden rounded-xl border border-[var(--color-border-default)] bg-white shadow-2xl transition-all duration-300">
    {/* Window Title Bar */}
    <div className="flex items-center justify-between border-b border-gray-200 bg-[#f1f3f4] px-[16px] py-[10px]">
      <div className="flex items-center gap-[8px]">
        <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
        <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
      </div>
      <div className="text-xs font-medium text-gray-500">{title}</div>
      <div className="w-[52px]"></div> {/* Placeholder to balance the left buttons */}
    </div>
    {/* Address Bar */}
    <div className="flex items-center border-b border-gray-200 bg-white px-[12px] py-[8px]">
      <div className="flex items-center gap-[12px] text-gray-400">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
      <div className="ml-[12px] flex-1">
        <div className="flex items-center rounded-md bg-gray-100 px-[12px] py-[6px]">
          <svg className="mr-[8px] h-3.5 w-3.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <div className="h-2.5 w-64 rounded-full bg-gray-300/60"></div>
        </div>
      </div>
    </div>
    {/* Content */}
    <div className="min-h-[600px] overflow-auto bg-white">
      {children}
    </div>
  </div>
)

// View function - renders the UI
const view = (dispatch: Dispatcher<Msg>, model: Model): ReactNode => {
  if (model.route._tag === 'WebsiteCambodiaLaw') {
    return <LawIndexPage route={model.route} />
  }

  const metadata = ALL_METADATA[model.route._tag] || {
    label: 'ZCrimson UI',
    description: 'A reusable design system, which helps bootstrap various projects',
    url: '/',
  }

  const isMockPage = model.route._tag.startsWith('Mock')

  return (
    <div className="min-h-screen bg-[var(--color-canvas-default)] text-[var(--color-fg-default)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--color-header-bg)] px-[16px] py-[12px] text-[var(--color-header-fg)] shadow-[var(--shadow-md)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[12px]">
            <button
              onClick={() => dispatch({ _tag: 'ToggleSidebar' })}
              className="rounded-md p-[8px] transition-colors hover:bg-white/10"
              aria-label="Toggle sidebar"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/" className="hover:no-underline">
              <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-family-brand)' }}>
                ZCrimson UI
              </h1>
            </Link>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-[8px]">
            {(['light', 'system', 'dark'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => dispatch({ _tag: 'SetTheme', mode })}
                className={`rounded-full px-[12px] py-[4px] text-sm transition-colors ${model.themeMode === mode ? 'bg-white/20 font-medium' : 'hover:bg-white/10'
                  }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${model.sidebarOpen ? 'w-64' : 'w-0'} shrink-0 overflow-hidden transition-all duration-300`}>
          <nav className="space-y-[4px] p-[16px]">
            <h2 className="mb-[12px] text-xs font-semibold tracking-wider text-[var(--color-fg-muted)] uppercase">
              Elements
            </h2>
            {Object.entries(ELEMENT_ROUTES).map(([tag, meta]) => (
              <Link
                key={tag}
                href={meta.url}
                className={`w-full block rounded-md px-[12px] py-[8px] text-left transition-colors hover:no-underline ${model.route._tag === tag
                  ? 'bg-[var(--color-accent-subtle)] font-medium text-[var(--color-accent-fg)]'
                  : 'text-[var(--color-fg-default)] hover:bg-[var(--color-neutral-subtle)]'
                  }`}
              >
                <div className="text-sm">{meta.label}</div>
                <div className="text-xs text-[var(--color-fg-muted)]">{meta.description}</div>
              </Link>
            ))}
            <h2 className="mb-[12px] mt-[24px] text-xs font-semibold tracking-wider text-[var(--color-fg-muted)] uppercase">
              Mock UI
            </h2>
            {Object.entries(MOCK_ROUTES).map(([tag, meta]) => (
              <Link
                key={tag}
                href={meta.url}
                className={`w-full block rounded-md px-[12px] py-[8px] text-left transition-colors hover:no-underline ${model.route._tag === tag
                  ? 'bg-[var(--color-accent-subtle)] font-medium text-[var(--color-accent-fg)]'
                  : 'text-[var(--color-fg-default)] hover:bg-[var(--color-neutral-subtle)]'
                  }`}
              >
                <div className="text-sm">{meta.label}</div>
                <div className="text-xs text-[var(--color-fg-muted)]">{meta.description}</div>
              </Link>
            ))}
            <h2 className="mb-[12px] mt-[24px] text-xs font-semibold tracking-wider text-[var(--color-fg-muted)] uppercase">
              Mock Website
            </h2>
            {Object.entries(WEBSITE_ROUTES).map(([tag, meta]) => (
              <Link
                key={tag}
                href={meta.url}
                className={`block w-full rounded-md px-[12px] py-[8px] text-left transition-colors hover:no-underline ${model.route._tag === tag
                  ? 'bg-[var(--color-accent-subtle)] font-medium text-[var(--color-accent-fg)]'
                  : 'text-[var(--color-fg-default)] hover:bg-[var(--color-neutral-subtle)]'
                  }`}
              >
                <div className="text-sm">{meta.label}</div>
                <div className="text-xs text-[var(--color-fg-muted)]">{meta.description}</div>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1 p-[24px]">
          {isMockPage ? (
            <BrowserFrame title={metadata.label}>
              {renderRoute(model.route)}
            </BrowserFrame>
          ) : (
            <div className="rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-subtle)] p-[24px]">
              <div className="mb-[24px] border-b border-[var(--color-border-muted)] pb-[16px]">
                <h2 className="text-2xl font-bold text-[var(--color-fg-default)]">{metadata.label}</h2>
                <p className="mt-[4px] text-[var(--color-fg-muted)]">{metadata.description}</p>
              </div>
              {renderRoute(model.route)}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

// Main App component using react-tea-cup ProgramWithNav
const App = () => (
  <ProgramWithNav
    init={init}
    update={update}
    view={view}
    subscriptions={subscriptions}
    onUrlChange={(l) => ({ _tag: 'UrlChanged', location: l }) as const}
  />
)

export default App
