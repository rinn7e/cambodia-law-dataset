import type { ReactNode } from 'react'

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

const MediaElements = (): ReactNode => {
  const placeholder = (w: number, h: number, text: string) =>
    `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0969da"/><stop offset="100%" style="stop-color:#8250df"/></linearGradient></defs><rect fill="url(#g)" width="${w}" height="${h}"/><text x="50%" y="50%" fill="white" font-family="system-ui" font-size="14" text-anchor="middle" dy=".3em">${text}</text></svg>`)}`

  return (
    <div className="space-y-[24px]">
      <Showcase title="Image (img)" desc="Embeds images.">
        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
          <div>
            <img
              src={placeholder(300, 200, '300x200')}
              alt="Placeholder"
              className="w-full rounded-md border border-[var(--color-border-muted)]"
            />
            <p className="mt-2 text-xs text-[var(--color-fg-muted)]">Standard image</p>
          </div>
          <div>
            <img
              src={placeholder(150, 150, '150x150')}
              alt="Circular"
              className="mx-auto h-32 w-32 rounded-full border-2 border-[var(--color-accent-fg)]"
            />
            <p className="mt-[8px] text-center text-xs text-[var(--color-fg-muted)]">Circular</p>
          </div>
          <div>
            <img
              src={placeholder(300, 200, 'Lazy')}
              alt="Lazy"
              loading="lazy"
              className="w-full rounded-md border border-[var(--color-border-muted)]"
            />
            <p className="mt-[8px] text-xs text-[var(--color-fg-muted)]">Lazy loaded</p>
          </div>
        </div>
      </Showcase>

      <Showcase title="Figure & Figcaption" desc="Image with caption.">
        <figure className="max-w-md">
          <img src={placeholder(400, 250, 'Figure')} alt="Figure" className="w-full rounded-md" />
          <figcaption className="mt-2 text-center text-sm text-[var(--color-fg-muted)] italic">
            Figure 1: Gradient placeholder
          </figcaption>
        </figure>
      </Showcase>

      <Showcase title="Picture Element" desc="Responsive images.">
        <picture>
          <source media="(min-width: 768px)" srcSet={placeholder(600, 300, 'Desktop')} />
          <img src={placeholder(300, 200, 'Mobile')} alt="Responsive" className="w-full max-w-lg rounded-md" />
        </picture>
        <p className="mt-[8px] text-xs text-[var(--color-fg-muted)]">Resize browser for different images.</p>
      </Showcase>

      <Showcase title="Audio" desc="Audio player.">
        <audio controls className="w-full max-w-md">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
          Your browser does not support audio.
        </audio>
      </Showcase>

      <Showcase title="Video" desc="Video player with poster.">
        <video controls poster={placeholder(640, 360, 'Video')} className="w-full max-w-lg rounded-md">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support video.
        </video>
      </Showcase>

      <Showcase title="SVG" desc="Inline SVG graphics.">
        <div className="flex items-center gap-[24px]">
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-[var(--color-success-fg)]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
            <path
              d="M 30 50 L 45 65 L 70 35"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-[var(--color-danger-fg)]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
            <path
              d="M 35 35 L 65 65 M 65 35 L 35 65"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-[var(--color-attention-fg)]">
            <polygon
              points="50,10 90,85 10,85"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <line x1="50" y1="40" x2="50" y2="60" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            <circle cx="50" cy="72" r="4" fill="currentColor" />
          </svg>
        </div>
      </Showcase>

      <Showcase title="Canvas" desc="Graphics rendering canvas.">
        <canvas
          width="300"
          height="100"
          className="rounded-md border border-[var(--color-border-default)] bg-[var(--color-canvas-inset)]"
        >
          Canvas not supported
        </canvas>
        <p className="mt-[8px] text-xs text-[var(--color-fg-muted)]">Use JavaScript to draw</p>
      </Showcase>

      <Showcase title="IFrame" desc="Embedded documents.">
        <iframe
          src="about:blank"
          title="Example"
          className="h-32 w-full rounded-md border border-[var(--color-border-default)] bg-[var(--color-canvas-inset)]"
          sandbox=""
        />
      </Showcase>
    </div>
  )
}

export { MediaElements }
