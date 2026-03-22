import type { ReactNode } from 'react'
import { Heading, Text, Link, Showcase, Input, Button, defaultButton, Ul, Li } from '@/component'

const SemanticElements = (): ReactNode => (
  <div className="space-y-[24px]">
    <Showcase title="Article" description="Self-contained composition.">
      <article>
        <header className="mb-[16px] border-b border-[var(--color-border-muted)] pb-[16px]">
          <Heading level={4}>Getting Started with TEA</Heading>
          <Text className="mt-[4px] text-sm text-[var(--color-fg-muted)]">
            By <span className="text-[var(--color-accent-fg)]">@developer</span>
          </Text>
        </header>
        <Text className="mb-[16px]">
          The Elm Architecture provides a predictable way to manage state.
        </Text>
        <footer className="mt-[16px] border-t border-[var(--color-border-muted)] pt-[16px] text-sm text-[var(--color-fg-muted)]">
          Tags:{' '}
          <span className="rounded-full bg-[var(--color-accent-subtle)] px-[8px] py-[2px] text-xs text-[var(--color-accent-fg)]">
            react
          </span>
        </footer>
      </article>
    </Showcase>

    <Showcase title="Section" description="Generic document section.">
      <section>
        <Heading level={4} className="mb-[8px]">Features</Heading>
        <Text className="text-[var(--color-fg-muted)]">Sections group related content.</Text>
      </section>
    </Showcase>

    <Showcase title="Header & Footer" description="Introductory and footer content.">
      <div className="overflow-hidden rounded-md border border-[var(--color-border-default)]">
        <header className="border-b border-[var(--color-border-muted)] bg-[var(--color-canvas-subtle)] p-[16px]">
          <Heading level={4}>Page Header</Heading>
          <nav className="mt-[8px] flex gap-[16px] text-sm">
            {['Home', 'About'].map((l) => (
              <Link
                key={l}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                {l}
              </Link>
            ))}
          </nav>
        </header>
        <main className="p-[16px]">
          <Text>Main content area...</Text>
        </main>
        <footer className="border-t border-[var(--color-border-muted)] bg-[var(--color-canvas-subtle)] p-[16px] text-sm text-[var(--color-fg-muted)]">
          © 2024 Example
        </footer>
      </div>
    </Showcase>

    <Showcase title="Nav" description="Navigation links.">
      <nav aria-label="Main navigation">
        <ul className="flex gap-[8px]">
          {['Dashboard', 'Projects', 'Team'].map((item, i) => (
            <Li key={item}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`block rounded-md px-[16px] py-[8px] text-sm font-medium ${i === 0 ? 'bg-[var(--color-accent-emphasis)] text-white' : 'bg-[var(--color-neutral-subtle)] hover:bg-[var(--color-neutral-muted)] transition-colors'}`}
              >
                {item}
              </a>
            </Li>
          ))}
        </ul>
      </nav>
    </Showcase>

    <Showcase title="Aside" description="Tangentially related content.">
      <div className="flex gap-[16px]">
        <div className="flex-1 rounded-md bg-[var(--color-canvas-subtle)] p-[16px]">
          <Text>Main content</Text>
        </div>
        <aside className="w-40 rounded-md border-l-[4px] border-[var(--color-attention-emphasis)] bg-[var(--color-attention-subtle)] p-[16px]">
          <Heading level={5} className="mb-[8px] text-[var(--color-attention-fg)]">Links</Heading>
          <Ul className="list-none space-y-[4px] text-sm">
            {['Docs', 'API'].map((l) => (
              <Li key={l}>
                <Link href="#" className="text-inherit hover:underline" onClick={(e) => e.preventDefault()}>
                  {l}
                </Link>
              </Li>
            ))}
          </Ul>
        </aside>
      </div>
    </Showcase>

    <Showcase title="Address" description="Contact information.">
      <address className="not-italic">
        <Text className="font-semibold">Contact Us</Text>
        <Text className="mt-[8px]">
          <Link href="mailto:hello@example.com">
            hello@example.com
          </Link>
        </Text>
        <Text>123 Developer Street</Text>
      </address>
    </Showcase>

    <Showcase title="Search" description="Search functionality container.">
      <search>
        <form role="search" className="flex gap-[8px]" onSubmit={(e) => e.preventDefault()}>
          <Input
            type="search"
            placeholder="Search..."
            className="flex-1"
          />
          <Button
            config={{
              ...defaultButton(),
              label: 'Search',
              formType: 'submit',
            }}
          />
        </form>
      </search>
    </Showcase>

    <Showcase title="HGroup" description="Heading group.">
      <hgroup>
        <Heading level={4}>ZCrimson UI</Heading>
        <Text className="text-[var(--color-fg-muted)]">A comprehensive guide to HTML elements</Text>
      </hgroup>
    </Showcase>
  </div>
)

export { SemanticElements }
