import type { ReactNode } from 'react'
import { Heading, Text, Link, Code, Pre, Kbd, Blockquote, Showcase } from '@/component'

const TextElements = (): ReactNode => (
  <div className="space-y-[24px]">
    <Showcase title="Headings (h1-h6)" description="Six levels of section headings.">
      <div className="space-y-[12px]">
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>
    </Showcase>

    <Showcase title="Paragraph (p)" description="The paragraph element represents text.">
      <Text>
        GitHub is where over 100 million developers shape the future of software, together. Contribute to the open
        source community, manage your Git repositories, review code like a pro, track bugs and features, power your
        CI/CD and DevOps workflows.
      </Text>
      <Text className="mt-[16px]">
        This is a second paragraph demonstrating proper spacing.
      </Text>
    </Showcase>

    <Showcase title="Inline Text Elements" description="Various inline formatting.">
      <div className="space-y-[12px] text-[var(--color-fg-default)]">
        <Text>
          <span className="text-[var(--color-fg-muted)]">span:</span> <span>Text in span.</span>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">strong:</span>{' '}
          <strong className="font-semibold">Strongly emphasized.</strong>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">em:</span> <em className="italic">Emphasized.</em>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">b:</span> <b className="font-bold">Bold text.</b>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">i:</span> <i className="italic">Italic text.</i>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">u:</span> <u className="underline">Underlined.</u>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">del:</span>{' '}
          <del className="text-[var(--color-danger-fg)] line-through">Deleted.</del>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">ins:</span>{' '}
          <ins className="text-[var(--color-success-fg)] underline">Inserted.</ins>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">small:</span> <small className="text-sm">Smaller.</small>
        </Text>
        <Text>
          <span className="text-[var(--color-fg-muted)]">sub/sup:</span> H<sub className="text-xs">2</sub>O and E=mc
          <sup className="text-xs">2</sup>
        </Text>
      </div>
    </Showcase>

    <Showcase title="Anchor / Link (a)" description="Hyperlinks.">
      <div className="space-y-[8px]">
        <Text>
          <Link href="#" onClick={(e) => e.preventDefault()}>
            Standard link
          </Link>
        </Text>
        <Text>
          Visit{' '}
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </Text>
      </div>
    </Showcase>

    <Showcase title="Code Elements" description="Code, keyboard input, and variables.">
      <div className="space-y-[16px]">
        <Text>
          Inline:{' '}
          <Code>
            git commit -m "msg"
          </Code>
        </Text>
        <Pre>
          {`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`}
        </Pre>
        <Text>
          Press{' '}
          <Kbd>
            Ctrl
          </Kbd>{' '}
          +{' '}
          <Kbd>
            C
          </Kbd>{' '}
          to copy.
        </Text>
        <Text>
          Variable: <var className="font-mono italic">x</var> represents input.
        </Text>
      </div>
    </Showcase>

    <Showcase title="Blockquote" description="A quoted section.">
      <Blockquote
        footer={<cite>Martin Fowler</cite>}
      >
        "Any fool can write code that a computer can understand. Good programmers write code that humans can
        understand."
      </Blockquote>
    </Showcase>

    <Showcase title="Abbreviation (abbr)" description="With expansion tooltip.">
      <Text>
        <abbr title="HyperText Markup Language" className="cursor-help underline decoration-dotted">
          HTML
        </abbr>{' '}
        and{' '}
        <abbr title="Cascading Style Sheets" className="cursor-help underline decoration-dotted">
          CSS
        </abbr>{' '}
        are web building blocks.
      </Text>
    </Showcase>

    <Showcase title="Mark / Highlight" description="Highlighted reference text.">
      <Text>
        Search:{' '}
        <mark className="rounded bg-[var(--color-attention-subtle)] px-[4px] text-[var(--color-fg-default)]">react</mark>{' '}
        found in 15 files.
      </Text>
    </Showcase>

    <Showcase title="Time" description="Specific period in time.">
      <Text>
        Created on{' '}
        <time dateTime="2024-02-03" className="font-medium">
          February 3, 2024
        </time>
        .
      </Text>
    </Showcase>

    <Showcase title="Bidirectional Text" description="bdo and bdi for text direction.">
      <div className="space-y-[8px] text-[var(--color-fg-default)]">
        <Text>Normal: Hello World</Text>
        <Text>
          RTL: <bdo dir="rtl">Hello World</bdo>
        </Text>
        <Text>
          Isolated: User <bdi>إيان</bdi> - 3 commits
        </Text>
      </div>
    </Showcase>

    <Showcase title="Ruby Annotation" description="East Asian typography.">
      <Text className="text-xl">
        <ruby>
          漢<rp>(</rp>
          <rt className="text-xs text-[var(--color-fg-muted)]">かん</rt>
          <rp>)</rp>字<rp>(</rp>
          <rt className="text-xs text-[var(--color-fg-muted)]">じ</rt>
          <rp>)</rp>
        </ruby>
      </Text>
    </Showcase>
  </div>
)

export { TextElements }
