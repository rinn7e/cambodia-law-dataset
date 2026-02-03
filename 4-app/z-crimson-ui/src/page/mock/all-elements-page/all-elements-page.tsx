import type { ReactNode } from 'react'
import { TextElements } from '@/page/text-page'
import { ListElements } from '@/page/list-page'
import { FormElements } from '@/page/form-page'
import { TableElements } from '@/page/table-page'
import { MediaElements } from '@/page/media-page'
import { InteractiveElements } from '@/page/interactive-page'
import { SemanticElements } from '@/page/semantic-page'
import { MiscElements } from '@/page/misc-page'
import { Button, defaultButton, defaultNavbar, Navbar } from '@/component'

const DesignSystemHeader = (): ReactNode => (
  <Navbar
    config={{
      ...defaultNavbar(),
      class: 'border-gray-200 bg-gray-50',
      brand: (
        <div className="flex items-center gap-[12px]">
          <div className="h-6 w-6 rounded bg-black"></div>
          <span className="text-sm font-bold uppercase tracking-widest text-black">ZCrimson</span>
          <span className="text-sm font-medium text-gray-400">/</span>
          <span className="text-sm font-medium text-gray-600">Design System</span>
        </div>
      ),
      links: [
        {
          label: (
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors hover:text-black">
              Basic
            </span>
          ), href: '#'
        },
        {
          label: (
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors hover:text-black">
              Complex
            </span>
          ), href: '#'
        },
        {
          label: (
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 transition-colors hover:text-black">
              Layout
            </span>
          ), href: '#'
        },
      ],
      linksAlignment: 'start',
      slotEnd: (
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center gap-[8px] rounded-full bg-gray-200/50 p-[4px]">
            <div className="rounded-full bg-white p-[6px] shadow-sm">
              <svg className="h-3.5 w-3.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707" />
              </svg>
            </div>
            <div className="p-[6px] text-gray-400">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
          </div>
          <Button
            config={{
              ...defaultButton(),
              buttonStyle: 'outline',
              label: 'Source',
              class: 'h-8 px-[12px] text-xs font-bold uppercase tracking-tight text-gray-900',
            }}
          />
        </div>
      ),
    }}
  />
)

const AllElements = (): ReactNode => (
  <div className="flex flex-col">
    <DesignSystemHeader />
    <div className="space-y-[96px] px-[24px] py-[32px]">
      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">Text Elements</h2>
        <TextElements />
      </section>

      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">List Elements</h2>
        <ListElements />
      </section>

      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">Form Elements</h2>
        <FormElements />
      </section>

      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">Table Elements</h2>
        <TableElements />
      </section>

      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">Media Elements</h2>
        <MediaElements />
      </section>

      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">
          Interactive Elements
        </h2>
        <InteractiveElements />
      </section>

      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">Semantic Elements</h2>
        <SemanticElements />
      </section>

      <section>
        <h2 className="mb-[32px] border-b border-[var(--color-border-default)] pb-[16px] text-3xl font-bold">
          Miscellaneous Elements
        </h2>
        <MiscElements />
      </section>
    </div>
  </div>
)

export { AllElements }
