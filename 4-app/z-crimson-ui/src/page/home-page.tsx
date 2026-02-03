import type { ReactNode } from 'react'
import { Heading, Text, Showcase, Button, defaultButton } from '@/component'

const HomePage = (): ReactNode => (
  <div className="space-y-[48px] py-[32px]">
    <div className="max-w-3xl">
      <Heading level={1} className="mb-[16px] text-4xl font-extrabold tracking-tight">
        Welcome to ZCrimson UI
      </Heading>
      <Text className="text-xl text-[var(--color-fg-muted)] leading-relaxed">
        A reusable design system, which helps bootstrap various projects.
        Explore our comprehensive collection of UI elements and mock templates built with
        Tailwind CSS and a GitHub-inspired aesthetic.
      </Text>
    </div>

    <div className="grid gap-[24px] md:grid-cols-2">
      <Showcase title="Design Principles" description="The core philosophy behind ZCrimson UI.">
        <div className="space-y-[12px]">
          <Text className="text-sm">
            <strong className="text-[var(--color-fg-default)] font-semibold">Accessibility first</strong>: Every component is built with semantic HTML and ARIA standards in mind.
          </Text>
          <Text className="text-sm">
            <strong className="text-[var(--color-fg-default)] font-semibold">Modular & Extensible</strong>: Easily customize colors, spacing, and typography using our Tailwind-driven system.
          </Text>
          <Text className="text-sm">
            <strong className="text-[var(--color-fg-default)] font-semibold">Predictable State</strong>: Powered by TEA (The Elm Architecture) for robust and testable UI logic.
          </Text>
        </div>
      </Showcase>

      <Showcase title="Quick Start" description="Get up and running in minutes.">
        <div className="flex flex-col gap-[16px]">
          <div className="rounded-md border border-[var(--color-border-muted)] bg-[var(--color-canvas-subtle)] p-[12px]">
            <code className="text-xs font-mono">npm install z-crimson-ui</code>
          </div>
          <Button
            config={{
              ...defaultButton(),
              label: 'Read Documentation',
              padding: { _tag: 'Expand' },
            }}
          />
        </div>
      </Showcase>
    </div>
  </div>
)

export { HomePage }
