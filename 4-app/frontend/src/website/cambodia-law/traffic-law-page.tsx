import type { ReactNode } from 'react'
import * as O from 'fp-ts/Option'
import { Heading, Text, Article, defaultArticle, Sidebar, defaultSidebar } from '@/component'

const TrafficLawPage = (): ReactNode => (
  <div className="flex flex-col gap-[32px] py-[24px] lg:flex-row">
    {/* Chapters Sidebar */}
    <Sidebar
      config={{
        ...defaultSidebar(),
        groups: [
          {
            title: 'Road Traffic Law',
            items: [
              { label: 'General Provisions', href: '#' },
              { label: 'I: Driver Licenses', href: '#' },
              { label: 'II: Vehicle Inspection', href: '#' },
              { label: 'III: Traffic Rules', href: '#', active: true },
              { label: 'IV: Penalties', href: '#' },
              { label: 'V: Final Provisions', href: '#' },
            ],
          },
        ],
      }}
    />

    {/* Legal Text Content */}
    <article className="min-w-0 flex-1 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[32px] shadow-sm">
      <div className="mb-[48px] border-b border-[var(--color-border-muted)] pb-[32px] text-center">
        <Heading level={1} className="mb-[16px] text-3xl font-extrabold tracking-widest uppercase">
          Road Traffic Law
        </Heading>
        <Heading level={2} className="text-xl font-semibold text-[var(--color-fg-muted)]">Kingdom of Cambodia</Heading>
        <div className="mt-[24px] flex justify-center gap-[16px]">
          <span className="rounded-full bg-[var(--color-attention-subtle)] px-[12px] py-[4px] text-xs font-bold text-[var(--color-attention-fg)] uppercase">
            Law No. NS/RKM/0115/001
          </span>
          <span className="rounded-full bg-[var(--color-accent-subtle)] px-[12px] py-[4px] text-xs font-bold text-[var(--color-accent-fg)] uppercase">
            Safe Roads, Safe Lives
          </span>
        </div>
      </div>

      <section className="space-y-[40px]">
        <div className="max-w-none">
          <Heading level={3} className="mb-[24px] border-l-[4px] border-[var(--color-accent-emphasis)] pl-[16px] text-xl font-bold">
            Chapter III: Traffic Rules
          </Heading>

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 7'),
              content: 'All drivers shall drive their vehicles on the right-hand side of the road. On roads where there are several lanes, drivers shall drive in the lane that is at the far right-hand side according to their direction of travel.',
            }}
          />

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 8'),
              content: 'Drivers shall not drive faster than the speed limit prescribed by sub-decree. The speed limit in cities and residential areas is 40 km/h for motorcycles and 50 km/h for other vehicles.',
            }}
          />

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 14'),
              content: 'Before turning left or right or changing lanes, drivers shall give a signal in advance by using signal lights or hand signals, and ensure that such a maneuver does not cause danger to other road users.',
            }}
          />
        </div>

        <div className="max-w-none border-t border-[var(--color-border-muted)] pt-[40px]">
          <Heading level={3} className="mb-[24px] border-l-[4px] border-[var(--color-done-emphasis)] pl-[16px] text-xl font-bold">
            Chapter IV: Penalties
          </Heading>

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 72'),
              content: 'Driving while under the influence of alcohol with a concentration of 0.25 to 0.39 mg per liter of breath or 0.5 to 0.79 grams per liter of blood shall be punished by a fine.',
            }}
          />

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 73'),
              content: 'Driving without a valid driver license as required by this law shall be punished by imprisonment from six days to one month and a fine.',
            }}
          />
        </div>
      </section>

      <footer className="mt-[64px] border-t border-[var(--color-border-muted)] pt-[32px] text-center text-sm text-[var(--color-fg-muted)] italic">
        <Text className="text-inherit">This document is a mock representation for UI showcase purposes.</Text>
      </footer>
    </article>
  </div>
)

export { TrafficLawPage }
