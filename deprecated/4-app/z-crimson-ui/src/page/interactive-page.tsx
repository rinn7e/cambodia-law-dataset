import type { ReactNode } from 'react'

type ShowcaseProps = {
  title: string
  desc: string
  children: ReactNode
}

const Showcase = ({ title, desc, children }: ShowcaseProps): ReactNode => (
  <div className="mb-[32px] last:mb-0">
    <h3 className="mb-[4px] text-lg font-semibold text-[var(--color-fg-default)]">{title}</h3>
    <p className="mb-[16px] text-sm text-[var(--color-fg-muted)]">{desc}</p>
    <div className="rounded-md border border-[var(--color-border-muted)] bg-[var(--color-canvas-default)] p-[16px]">
      {children}
    </div>
  </div>
)

const InteractiveElements = (): ReactNode => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const modalRef = React.useRef<HTMLDialogElement>(null)

  return (
    <div className="space-y-[24px]">
      <Showcase title="Details & Summary" desc="Expandable content.">
        <div className="space-y-[12px]">
          <details className="group rounded-md border border-[var(--color-border-default)]">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-md p-[16px] font-medium hover:bg-[var(--color-neutral-subtle)]">
              What is react-tea-cup?
              <svg
                className="h-4 w-4 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="p-[16px] pt-0 text-[var(--color-fg-muted)]">
              A library implementing The Elm Architecture in React.
            </div>
          </details>
          <details className="group rounded-md border border-[var(--color-border-default)]">
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-md p-[16px] font-medium hover:bg-[var(--color-neutral-subtle)]">
              What is fp-ts?
              <svg
                className="h-4 w-4 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="p-[16px] pt-0 text-[var(--color-fg-muted)]">
              Typed functional programming library for TypeScript.
            </div>
          </details>
          <details
            open
            className="group rounded-md border border-[var(--color-accent-emphasis)] bg-[var(--color-accent-subtle)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between rounded-md p-[16px] font-medium text-[var(--color-accent-fg)]">
              Open by default
              <svg
                className="h-4 w-4 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="p-[16px] pt-0">
              Uses the <code className="rounded bg-[var(--color-canvas-default)] px-[4px]">open</code> attribute.
            </div>
          </details>
        </div>
      </Showcase>

      <Showcase title="Dialog (Non-modal)" desc="Non-modal dialog element.">
        <div className="space-y-[16px]">
          <button
            onClick={() => dialogRef.current?.show()}
            className="rounded-md bg-[var(--color-accent-emphasis)] px-[16px] py-[8px] text-white hover:opacity-90"
          >
            Open Dialog
          </button>
          <dialog
            ref={dialogRef}
            className="min-w-[300px] rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[24px] shadow-lg"
          >
            <h4 className="mb-[8px] text-lg font-semibold">Non-modal Dialog</h4>
            <p className="mb-[16px] text-[var(--color-fg-muted)]">You can still interact with the page.</p>
            <button
              onClick={() => dialogRef.current?.close()}
              className="rounded-md bg-[var(--color-neutral-subtle)] px-[16px] py-[8px] hover:bg-[var(--color-neutral-muted)]"
            >
              Close
            </button>
          </dialog>
        </div>
      </Showcase>

      <Showcase title="Dialog (Modal)" desc="Modal dialog blocks page interaction.">
        <div className="space-y-[16px]">
          <button
            onClick={() => modalRef.current?.showModal()}
            className="rounded-md bg-[var(--color-accent-emphasis)] px-[16px] py-[8px] text-white hover:opacity-90"
          >
            Open Modal
          </button>
          <dialog
            ref={modalRef}
            className="min-w-[400px] rounded-lg border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[24px] shadow-xl backdrop:bg-black/50"
          >
            <h4 className="mb-[8px] text-lg font-semibold">Modal Dialog</h4>
            <p className="mb-[16px] text-[var(--color-fg-muted)]">Press Escape or click buttons to close.</p>
            <form method="dialog" className="flex gap-[12px]">
              <button
                type="button"
                onClick={() => modalRef.current?.close()}
                className="rounded-md bg-[var(--color-neutral-subtle)] px-[16px] py-[8px]"
              >
                Cancel
              </button>
              <button type="submit" className="rounded-md bg-[var(--color-accent-emphasis)] px-[16px] py-[8px] text-white">
                Confirm
              </button>
            </form>
          </dialog>
        </div>
      </Showcase>

      <Showcase title="Popover (HTML API)" desc="Native HTML popover.">
        <div className="space-y-[16px]">
          <button
            popoverTarget="popover-demo"
            className="rounded-md bg-[var(--color-accent-emphasis)] px-[16px] py-[8px] text-white hover:opacity-90"
          >
            Toggle Popover
          </button>
          <div
            id="popover-demo"
            popover="auto"
            className="rounded-md border border-[var(--color-border-default)] bg-[var(--color-canvas-default)] p-[16px] shadow-lg"
          >
            <p>Native HTML popover!</p>
            <p className="mt-[8px] text-sm text-[var(--color-fg-muted)]">Click outside to dismiss.</p>
          </div>
        </div>
      </Showcase>

      <Showcase title="Menu" desc="Menu for toolbars.">
        <menu className="m-0 flex list-none gap-[8px] p-0">
          {['Cut', 'Copy', 'Paste'].map((item) => (
            <li key={item}>
              <button className="rounded-md bg-[var(--color-neutral-subtle)] px-[12px] py-[8px] hover:bg-[var(--color-neutral-muted)]">
                {item}
              </button>
            </li>
          ))}
        </menu>
      </Showcase>
    </div>
  )
}

import React from 'react'
export { InteractiveElements }
