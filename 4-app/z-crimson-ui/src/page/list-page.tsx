import type { ReactNode } from 'react'
import { pipe } from 'fp-ts/function'
import * as A from 'fp-ts/Array'
import { Ul, Ol, Li, Dl, Dt, Dd, Link, Showcase } from '@/component'

const ListElements = (): ReactNode => {
  const languages = pipe(
    ['TypeScript', 'JavaScript', 'Rust', 'Go', 'Python'],
    A.mapWithIndex((i, lang) => ({ id: i + 1, name: lang }))
  )
  const frameworks = pipe(
    ['React', 'Vue', 'Angular', 'Svelte', 'Solid'],
    A.mapWithIndex((i, fw) => ({ id: i + 1, name: fw }))
  )
  const glossary = [
    { term: 'TEA', def: 'The Elm Architecture - a pattern for building web apps.' },
    { term: 'fp-ts', def: 'Typed functional programming in TypeScript.' },
    { term: 'Tailwind', def: 'A utility-first CSS framework.' },
  ]

  return (
    <div className="space-y-[24px]">
      <Showcase title="Unordered List (ul, li)" description="Items where order doesn't matter.">
        <Ul>
          {languages.map(({ id, name }) => (
            <Li key={id}>{name}</Li>
          ))}
        </Ul>
      </Showcase>

      <Showcase title="Ordered List (ol, li)" description="Items where order matters.">
        <Ol>
          {frameworks.map(({ id, name }) => (
            <Li key={id}>{name}</Li>
          ))}
        </Ol>
      </Showcase>

      <Showcase title="Nested Lists" description="Hierarchical list structures.">
        <Ul className="space-y-[8px]">
          <Li>
            Frontend
            <Ul className="list-circle mt-[4px] ml-[16px]">
              <Li>React</Li>
              <Li>Vue</Li>
              <Li>
                State Management
                <Ul className="list-square ml-[16px]">
                  <Li>Redux</Li>
                  <Li>TEA</Li>
                </Ul>
              </Li>
            </Ul>
          </Li>
          <Li>
            Backend
            <Ul className="list-circle mt-[4px] ml-[16px]">
              <Li>Node.js</Li>
              <Li>Deno</Li>
            </Ul>
          </Li>
        </Ul>
      </Showcase>

      <Showcase title="Description List (dl, dt, dd)" description="Name-value pairs like glossaries.">
        <Dl>
          {glossary.map(({ term, def }) => (
            <div key={term} className="border-l-[2px] border-[var(--color-accent-emphasis)] pl-[12px]">
              <Dt>{term}</Dt>
              <Dd>{def}</Dd>
            </div>
          ))}
        </Dl>
      </Showcase>

      <Showcase title="Custom Styled List" description="Lists with custom styling.">
        <ul className="space-y-[8px]">
          {[
            {
              text: 'Completed task',
              icon: '✓',
              style: 'bg-[var(--color-success-subtle)] border-[var(--color-success-fg)] text-[var(--color-success-fg)]',
            },
            {
              text: 'In progress',
              icon: '●',
              style:
                'bg-[var(--color-attention-subtle)] border-[var(--color-attention-fg)] text-[var(--color-attention-fg)]',
            },
            {
              text: 'Pending task',
              icon: '○',
              style:
                'bg-[var(--color-neutral-subtle)] border-[var(--color-border-default)] text-[var(--color-fg-muted)]',
            },
          ].map(({ text, icon, style }) => (
            <Li key={text} className={`flex items-center gap-[12px] rounded-md border p-[12px] ${style}`}>
              <span className="font-bold">{icon}</span>
              <span className="text-[var(--color-fg-default)]">{text}</span>
            </Li>
          ))}
        </ul>
      </Showcase>

      <Showcase title="Inline List" description="Navigation or tag style.">
        <div className="space-y-[16px]">
          <ul className="flex gap-[16px]">
            {['Home', 'About', 'Contact'].map((item) => (
              <Li key={item}>
                <Link
                  href="#"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
                >
                  {item}
                </Link>
              </Li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-[8px]">
            {['react', 'typescript', 'tailwind'].map((tag) => (
              <Li key={tag}>
                <span className="rounded-full bg-[var(--color-accent-subtle)] px-[8px] py-[4px] text-xs font-medium text-[var(--color-accent-fg)]">
                  {tag}
                </span>
              </Li>
            ))}
          </ul>
        </div>
      </Showcase>
    </div>
  )
}

export { ListElements }
