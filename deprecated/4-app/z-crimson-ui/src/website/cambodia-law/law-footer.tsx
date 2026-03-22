import type { ReactNode } from 'react'
import { Footer, defaultFooter } from '@/component'
import rawData from './data.json'
import type { LawData } from './types'

const data = rawData as unknown as LawData

const LawFooter = (): ReactNode => (
  <Footer
    config={{
      ...defaultFooter(),
      columns: [
        {
          title: data.common.footer.about.title,
          content: {
            _tag: 'text',
            text: data.common.footer.about.text,
          },
        },
        {
          title: data.common.footer.links.title,
          content: {
            _tag: 'links',
            links: data.common.footer.links.items,
          },
        },
        {
          title: data.common.footer.legal.title,
          content: {
            _tag: 'text',
            text: data.common.footer.legal.text,
          },
        },
      ],
    }}
  />
)

export { LawFooter }
