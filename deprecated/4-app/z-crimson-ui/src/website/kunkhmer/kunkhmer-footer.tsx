import { Footer, defaultFooter } from '@/component'
import rawData from './data.json'
import type { KunKhmerData } from './types'

const data = rawData as unknown as KunKhmerData

export const KunKhmerFooter = () => (
  <Footer
    config={{
      ...defaultFooter(),
      columns: [
        {
          title: data.common.footer.about.title,
          content: { _tag: 'text', text: data.common.footer.about.text }
        },
        {
          title: data.common.footer.links.title,
          content: { _tag: 'links', links: data.common.footer.links.items }
        },
        {
          title: 'Legal',
          content: { _tag: 'text', text: data.common.footer.copyright }
        }
      ],
    }}
  />
)
