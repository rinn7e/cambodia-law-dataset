import { useState, type ReactNode } from 'react'

type ShowcaseProps = { title: string; desc: string; children: ReactNode }
const Showcase = ({ title, desc, children }: ShowcaseProps): ReactNode => (
  <div className="mb-[32px] last:mb-0">
    <h3 className="mb-[4px] text-lg font-semibold text-[var(--color-fg-default)]">{title}</h3>
    <p className="mb-[16px] text-sm text-[var(--color-fg-muted)]">{desc}</p>
    <div className="rounded-md border border-[var(--color-border-muted)] bg-[var(--color-canvas-default)] p-[16px]">
      {children}
    </div>
  </div>
)

const MiscElements = (): ReactNode => {
  const [progress, setProgress] = useState(65)

  return (
    <div className="space-y-[24px]">
      <Showcase title="Horizontal Rule (hr)" desc="Thematic break.">
        <div className="space-y-[16px]">
          <p>Content before</p>
          <hr className="border-t border-[var(--color-border-default)]" />
          <p>Content after</p>
        </div>
      </Showcase>

      <Showcase title="Progress" desc="Task progress indicator.">
        <div className="space-y-[16px]">
          <div>
            <label className="mb-[8px] block text-sm font-medium">Upload: {progress}%</label>
            <progress value={progress} max="100" className="h-3 w-full" />
          </div>
          <div className="flex gap-[8px]">
            <button
              onClick={() => setProgress(Math.max(0, progress - 10))}
              className="rounded bg-[var(--color-neutral-subtle)] px-[12px] py-[4px] text-sm"
            >
              -10%
            </button>
            <button
              onClick={() => setProgress(Math.min(100, progress + 10))}
              className="rounded bg-[var(--color-neutral-subtle)] px-[12px] py-[4px] text-sm"
            >
              +10%
            </button>
          </div>
          <div>
            <label className="mb-[8px] block text-sm font-medium">Indeterminate:</label>
            <progress className="h-3 w-full" />
          </div>
        </div>
      </Showcase>

      <Showcase title="Meter" desc="Scalar measurement.">
        <div className="space-y-[16px]">
          <div>
            <label className="mb-[4px] block text-sm">Low (25):</label>
            <meter value="25" min="0" max="100" low={33} high={66} optimum={80} className="h-4 w-full" />
          </div>
          <div>
            <label className="mb-[4px] block text-sm">Medium (50):</label>
            <meter value="50" min="0" max="100" low={33} high={66} optimum={80} className="h-4 w-full" />
          </div>
          <div>
            <label className="mb-[4px] block text-sm">High (80):</label>
            <meter value="80" min="0" max="100" low={33} high={66} optimum={80} className="h-4 w-full" />
          </div>
        </div>
      </Showcase>

      <Showcase title="Mark" desc="Highlighted text.">
        <p>
          Search: <mark className="rounded bg-[var(--color-attention-subtle)] px-[4px]">react-tea-cup</mark> found.
        </p>
      </Showcase>

      <Showcase title="Keyboard (kbd)" desc="Key combinations.">
        <div className="space-y-[12px]">
          <p>
            Press{' '}
            <kbd className="rounded border border-[var(--color-border-default)] bg-[var(--color-canvas-inset)] px-[8px] py-[4px] font-mono text-sm shadow-sm">
              Ctrl
            </kbd>{' '}
            +{' '}
            <kbd className="rounded border border-[var(--color-border-default)] bg-[var(--color-canvas-inset)] px-[8px] py-[4px] font-mono text-sm shadow-sm">
              S
            </kbd>{' '}
            to save.
          </p>
          <p>
            Use{' '}
            <kbd className="rounded border border-[var(--color-border-default)] bg-[var(--color-canvas-inset)] px-[8px] py-[4px] font-mono text-sm shadow-sm">
              ↑
            </kbd>{' '}
            <kbd className="rounded border border-[var(--color-border-default)] bg-[var(--color-canvas-inset)] px-[8px] py-[4px] font-mono text-sm shadow-sm">
              ↓
            </kbd>{' '}
            to navigate.
          </p>
        </div>
      </Showcase>

      <Showcase title="Abbreviation" desc="With tooltip.">
        <p>
          The{' '}
          <abbr title="World Wide Web" className="cursor-help underline decoration-dotted">
            WWW
          </abbr>{' '}
          uses{' '}
          <abbr title="HTTP" className="cursor-help underline decoration-dotted">
            HTTP
          </abbr>
          .
        </p>
      </Showcase>

      <Showcase title="Time" desc="Machine-readable date/time.">
        <div className="space-y-[8px]">
          <p>
            Event: <time dateTime="2024-03-15">March 15, 2024</time>
          </p>
          <p>
            Time: <time dateTime="14:30">2:30 PM</time>
          </p>
        </div>
      </Showcase>

      <Showcase title="Data" desc="Machine-readable value.">
        <ul className="space-y-[4px]">
          <li>
            Price:{' '}
            <data value="49.99" className="font-semibold">
              $49.99
            </data>
          </li>
          <li>
            SKU:{' '}
            <data value="SKU-12345" className="font-mono text-sm">
              SKU-12345
            </data>
          </li>
        </ul>
      </Showcase>

      <Showcase title="Word Break (wbr)" desc="Break opportunity.">
        <p className="break-all">
          Super
          <wbr />
          cali
          <wbr />
          fragil
          <wbr />
          istic
        </p>
      </Showcase>

      <Showcase title="Bidirectional" desc="Text direction.">
        <div className="space-y-[8px]">
          <p>Normal: Hello</p>
          <p>
            RTL: <bdo dir="rtl">Hello</bdo>
          </p>
          <p>
            Isolated: <bdi>إيان</bdi>
          </p>
        </div>
      </Showcase>

      <Showcase title="Ruby" desc="East Asian annotation.">
        <p className="text-2xl">
          <ruby>
            東京<rp>(</rp>
            <rt className="text-xs text-[var(--color-fg-muted)]">とうきょう</rt>
            <rp>)</rp>
          </ruby>
        </p>
      </Showcase>

      <Showcase title="Sample (samp)" desc="Program output.">
        <div className="rounded-md bg-[var(--color-canvas-inset)] p-[12px] font-mono text-sm">
          <samp>
            $ npm run build
            <br />
            <span className="text-[var(--color-success-fg)]">✓</span> Compiled in 2.34s
          </samp>
        </div>
      </Showcase>

      <Showcase title="Variable (var)" desc="Math/programming variable.">
        <p>
          Formula: <var className="font-serif italic">x</var> = (-<var className="font-serif italic">b</var> ± √
          <var className="font-serif italic">Δ</var>) / 2<var className="font-serif italic">a</var>
        </p>
      </Showcase>

      <Showcase title="Template" desc="Hidden template content.">
        <template id="my-template">
          <div className="hidden">Hidden</div>
        </template>
        <p className="text-sm text-[var(--color-fg-muted)]">Template content is not rendered.</p>
      </Showcase>

      <Showcase title="NoScript" desc="Fallback when JS disabled.">
        <noscript>
          <p className="text-[var(--color-danger-fg)]">JS required</p>
        </noscript>
        <p className="text-sm text-[var(--color-fg-muted)]">Content shown when JS is disabled.</p>
      </Showcase>
    </div>
  )
}

export { MiscElements }
