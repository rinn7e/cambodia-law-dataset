import type { ReactNode } from 'react'
import { Footer, defaultFooter } from '@/component'

const LawFooter = (): ReactNode => (
  <Footer
    config={{
      ...defaultFooter(),
      columns: [
        {
          title: 'About',
          content: {
            _tag: 'text',
            text: 'Modern portal for accessing Cambodian legal documents in an easy-to-read format.',
          },
        },
        {
          title: 'Links',
          content: {
            _tag: 'links',
            links: [
              { label: 'Index', href: '/website/cambodia-law' },
              { label: '← Back to ZCrimson UI', href: '/' },
            ],
          },
        },
        {
          title: 'Legal',
          content: {
            _tag: 'text',
            text: '© 2026 Cambodia Law Project. Mock data for UI purposes.',
          },
        },
      ],
    }}
  />
)

export { LawFooter }
