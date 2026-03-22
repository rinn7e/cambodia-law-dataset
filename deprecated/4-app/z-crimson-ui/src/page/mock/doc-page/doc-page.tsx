import type { ReactNode } from 'react'
import { Heading, Text, Link, Pre, Ul, Li, Blockquote, Navbar, defaultNavbar, Sidebar, defaultSidebar } from '@/component'

const DocHeader = (): ReactNode => (
  <Navbar
    config={{
      ...defaultNavbar(),
      class: 'border-[var(--color-border-muted)] bg-[var(--color-canvas-default)]/80',
      brand: (
        <div className="flex items-center gap-[12px]">
          <span className="text-lg font-bold tracking-tight text-[var(--color-fg-default)]">react-tea-cup</span>
          <span className="rounded-full bg-[var(--color-success-subtle)] px-[8px] py-[2px] text-[10px] font-bold text-[var(--color-success-fg)] uppercase tracking-wider">
            v5.1.1
          </span>
        </div>
      ),
      slotAfterBrand: (
        <div className="hidden items-center rounded-md border border-[var(--color-border-default)] bg-[var(--color-canvas-subtle)] px-[12px] py-[6px] text-[var(--color-fg-muted)] md:flex lg:w-64">
          <svg className="mr-[8px] h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-xs">Search documentation...</span>
          <div className="ml-auto rounded border border-[var(--color-border-muted)] bg-[var(--color-canvas-default)] px-[4px] py-[1px] text-[10px] font-mono">
            ⌘K
          </div>
        </div>
      ),
      links: [
        { label: 'Home', href: '#' },
        { label: 'Docs', href: '#' },
      ],
      linksAlignment: 'end',
      slotEnd: (
        <div className="flex items-center gap-[16px]">
          <div className="h-4 w-px bg-[var(--color-border-muted)]"></div>
          <div className="flex gap-[12px] text-[var(--color-fg-muted)]">
            <svg className="h-5 w-5 hover:text-[var(--color-fg-default)] cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
        </div>
      ),
    }}
  />
)

const DocPage = (): ReactNode => (
  <div className="flex flex-col">
    <DocHeader />
    <div className="flex flex-col gap-[48px] px-[24px] py-[32px] lg:flex-row">
      {/* Sidebar Nav */}
      <Sidebar
        config={{
          ...defaultSidebar(),
          class: 'w-full lg:w-64',
          groups: [
            {
              title: 'Getting Started',
              items: [
                { label: 'Introduction', href: '#', active: true },
                { label: 'Installation', href: '#' },
                { label: 'Basic Concepts', href: '#' },
                { label: 'Hello World', href: '#' },
              ],
            },
            {
              title: 'Architecture',
              items: [
                { label: 'The Elm Architecture', href: '#' },
                { label: 'State Management', href: '#' },
                { label: 'Messages & Update', href: '#' },
                { label: 'View Patterns', href: '#' },
                { label: 'Subscriptions', href: '#' },
              ],
            },
          ],
        }}
      />

      {/* Main Content */}
      <article className="max-w-3xl flex-1">
        <Heading level={1} className="mb-[16px] border-b border-[var(--color-border-muted)] pb-[8px] text-4xl font-extrabold">
          Introduction to react-tea-cup
        </Heading>

        <Text className="mb-[32px] text-lg text-[var(--color-fg-muted)]">
          Learn how to build predictable, type-safe React applications using The Elm Architecture.
        </Text>

        <div className="space-y-[24px]">
          <section>
            <Heading level={2} className="mb-[12px] text-2xl font-bold">What is TEA?</Heading>
            <Text>
              The Elm Architecture (TEA) is a formal pattern for building reliable web applications. It enforces a strict
              separation between state (Model), logic (Update), and representation (View).
            </Text>
          </section>

          <Blockquote className="rounded-r-md border-l-[4px] border-[var(--color-attention-emphasis)] bg-[var(--color-attention-subtle)] p-[16px] text-[var(--color-attention-fg)] not-italic">
            <p className="mb-[4px] font-semibold">Note</p>
            <Text className="text-sm text-inherit">This library requires a solid understanding of functional programming concepts.</Text>
          </Blockquote>

          <section>
            <Heading level={2} className="mb-[12px] text-2xl font-bold">Core Pieces</Heading>
            <Ul className="ml-[16px] space-y-[8px]">
              <Li>
                <strong className="font-semibold">Model</strong>: The single source of truth for your application state.
              </Li>
              <Li>
                <strong className="font-semibold">Msg</strong>: A union type representing all possible actions in your system.
              </Li>
              <Li>
                <strong className="font-semibold">Update</strong>: A pure function that transitions the model based on a message.
              </Li>
              <Li>
                <strong className="font-semibold">View</strong>: A pure function that renders the model into HTML/React elements.
              </Li>
            </Ul>
          </section>

          <section>
            <Heading level={2} className="mb-[12px] text-2xl font-bold">Code Example</Heading>
            <Pre>
              {`type Model = { count: number }

type Msg = 
  | { _tag: 'Inc' }
  | { _tag: 'Dec' }

const update = (msg: Msg, model: Model): [Model, Cmd<Msg>] => {
  switch (msg._tag) {
    case 'Inc': return [{ count: model.count + 1 }, Cmd.none()]
    case 'Dec': return [{ count: model.count - 1 }, Cmd.none()]
  }
}`}
            </Pre>
          </section>
        </div>

        {/* Pagination Nav */}
        <div className="mt-[48px] flex justify-between border-t border-[var(--color-border-muted)] pt-[32px]">
          <div></div>
          <Link href="#" className="group flex flex-col items-end hover:no-underline" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
            <span className="mb-[4px] text-xs text-[var(--color-fg-muted)]">Next</span>
            <span className="text-lg font-semibold text-[var(--color-accent-fg)] group-hover:underline">
              Installation →
            </span>
          </Link>
        </div>
      </article>

      {/* TOC Nav */}
      <aside className="sticky top-[32px] hidden h-fit w-48 self-start border-l border-[var(--color-border-muted)] pl-[16px] xl:block">
        <Heading level={4} className="mb-[16px] text-xs font-semibold tracking-wider text-[var(--color-fg-muted)] uppercase">On this page</Heading>
        <nav className="space-y-[12px]">
          {['What is TEA?', 'Core Pieces', 'Code Example'].map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg-default)] hover:no-underline"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
            >
              {item}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  </div>
)

export { DocPage }
