import type { ReactNode } from 'react'
import * as O from 'fp-ts/Option'
import { Heading, Text, Article, defaultArticle, Sidebar, defaultSidebar } from '@/component'

const ConstitutionPage = (): ReactNode => (
  <div className="flex flex-col gap-[32px] py-[24px] lg:flex-row">
    {/* Chapters Sidebar */}
    <Sidebar
      config={{
        ...defaultSidebar(),
        groups: [
          {
            title: 'Chapters',
            items: [
              { label: 'Preamble', href: '#' },
              { label: 'I: Sovereignty', href: '#', active: true },
              { label: 'II: The King', href: '#' },
              { label: 'III: Rights & Obligations', href: '#' },
              { label: 'IV: On Policy', href: '#' },
              { label: 'V: Life, Freedom, Security', href: '#' },
            ],
          },
        ],
      }}
    />

    {/* Legal Text Content */}
    <article className="min-w-0 flex-1 rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[32px] shadow-sm">
      <div className="mb-[48px] border-b border-[var(--color-border-muted)] pb-[32px] text-center">
        <Heading level={1} className="mb-[16px] text-3xl font-extrabold tracking-widest uppercase">
          Constitution
        </Heading>
        <Heading level={2} className="text-xl font-semibold text-[var(--color-fg-muted)]">Kingdom of Cambodia</Heading>
        <div className="mt-[24px] flex justify-center gap-[16px]">
          <span className="rounded-full bg-[var(--color-success-subtle)] px-[12px] py-[4px] text-xs font-bold text-[var(--color-success-fg)] uppercase">
            Adopted 1993
          </span>
          <span className="rounded-full bg-[var(--color-accent-subtle)] px-[12px] py-[4px] text-xs font-bold text-[var(--color-accent-fg)] uppercase">
            Nation, Religion, King
          </span>
        </div>
      </div>

      <section className="space-y-[40px]">
        <div className="max-w-none">
          <Heading level={3} className="mb-[24px] border-l-[4px] border-[var(--color-accent-emphasis)] pl-[16px] text-xl font-bold">
            Chapter I: Sovereignty
          </Heading>

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 1'),
              content: 'Cambodia is a Kingdom in which the King shall rule according to the Constitution and the principles of liberal multi-party democracy. The Kingdom of Cambodia shall be an independent, sovereign, peaceful, permanently neutral and non-aligned country.',
            }}
          />

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 2'),
              content: 'The territorial integrity of the Kingdom of Cambodia shall never be violated within its borders as defined in the 1/100,000 scale map made between the years 1933-1953, and internationally recognized between the years 1963-1969.',
            }}
          />

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 3'),
              content: 'The Kingdom of Cambodia is an indivisible state.',
            }}
          />

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 4'),
              content: "The motto of the Kingdom of Cambodia is: 'Nation, Religion, King'.",
            }}
          />
        </div>

        <div className="max-w-none border-t border-[var(--color-border-muted)] pt-[40px]">
          <Heading level={3} className="mb-[24px] border-l-4 border-[var(--color-done-emphasis)] pl-[16px] text-xl font-bold">
            Chapter II: The King
          </Heading>

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 7'),
              content: 'The King of Cambodia reigns but does not govern. The King shall be the Head of State for life. The King shall be inviolable.',
            }}
          />

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 8'),
              content: 'The King of Cambodia is a symbol of the unity and eternity of the nation. The King is the guarantor of national independence, sovereignty, and territorial integrity of the Kingdom of Cambodia, the protector of rights and freedom for all citizens and the guarantor of international treaties.',
            }}
          />
        </div>

        <div className="max-w-none border-t border-[var(--color-border-muted)] pt-[40px]">
          <Heading level={3} className="mb-[24px] border-l-4 border-[var(--color-attention-emphasis)] pl-[16px] text-xl font-bold">
            Chapter III: The Rights and Obligations of Khmer Citizens
          </Heading>

          <Article
            config={{
              ...defaultArticle(),
              title: O.some('Article 31'),
              content: 'Every Khmer citizen shall be equal before the law, enjoying the same rights, freedom and fulfilling the same obligations regardless of race, color, sex, language, religious belief, political tendency, birth origin, social status, wealth or other status. The exercise of personal rights and freedom by any individual shall not adversely affect the rights and freedom of others.',
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

export { ConstitutionPage }
