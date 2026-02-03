import type { ReactNode } from 'react'
import { pipe } from 'fp-ts/function'
import * as A from 'fp-ts/Array'
import { Table, Thead, Tbody, Tr, Th, Td, Link, Showcase } from '@/component'

const TableElements = (): ReactNode => {
  const users = pipe(
    [
      { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Developer', status: 'Active' },
      { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Designer', status: 'Away' },
    ],
    A.map((u) => ({
      ...u,
      statusColor: u.status === 'Active' ? 'success' : u.status === 'Away' ? 'attention' : 'neutral',
    }))
  )

  return (
    <div className="space-y-[24px]">
      <Showcase title="Basic Table" description="Table with header, body, and data cells.">
        <Table>
          <Thead>
            <Tr>
              {['Name', 'Email', 'Role', 'Status'].map((h) => (
                <Th key={h}>{h}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {users.map((u) => (
              <Tr key={u.id}>
                <Td className="font-medium">{u.name}</Td>
                <Td>
                  <Link href={`mailto:${u.email}`}>{u.email}</Link>
                </Td>
                <Td>{u.role}</Td>
                <Td>
                  <span
                    className={`rounded-full px-[8px] py-[4px] text-xs bg-[var(--color-${u.statusColor}-subtle)] text-[var(--color-${u.statusColor}-fg)]`}
                  >
                    {u.status}
                  </span>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Showcase>

      <Showcase title="Table with Caption" description="Table with caption element.">
        <Table>
          <caption className="mb-[8px] text-left text-sm font-medium text-[var(--color-fg-muted)]">
            Monthly Active Users
          </caption>
          <Thead>
            <Tr>
              {['Month', 'Users', 'Growth'].map((h) => (
                <Th key={h}>{h}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {[
              { m: 'January', u: '12,450', g: '+5.2%' },
              { m: 'February', u: '13,200', g: '+6.0%' },
            ].map((r) => (
              <Tr key={r.m}>
                <Td>{r.m}</Td>
                <Td>{r.u}</Td>
                <Td className="text-[var(--color-success-fg)]">{r.g}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Showcase>

      <Showcase title="Table with Footer" description="With thead, tbody, and tfoot.">
        <Table>
          <Thead>
            <Tr>
              {['Product', 'Revenue', 'Units'].map((h) => (
                <Th key={h}>{h}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {[
              { p: 'Widget A', r: 45000, u: 1200 },
              { p: 'Widget B', r: 32000, u: 800 },
            ].map((s) => (
              <Tr key={s.p}>
                <Td>{s.p}</Td>
                <Td>${s.r.toLocaleString()}</Td>
                <Td>{s.u}</Td>
              </Tr>
            ))}
          </Tbody>
          <tfoot>
            <Tr className="bg-[var(--color-canvas-subtle)] font-semibold">
              <Td>Total</Td>
              <Td>$77,000</Td>
              <Td>2,000</Td>
            </Tr>
          </tfoot>
        </Table>
      </Showcase>

      <Showcase title="Striped Table" description="Alternating row colors.">
        <Table className="border border-[var(--color-border-default)]">
          <Thead>
            <Tr>
              {['ID', 'Title', 'Author'].map((h) => (
                <Th key={h} className="border border-[var(--color-border-default)]">
                  {h}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {[
              { id: 1, t: 'Getting Started with React', a: 'Jane Doe' },
              { id: 2, t: 'TypeScript Patterns', a: 'John Smith' },
              { id: 3, t: 'FP in JS', a: 'Alex Brown' },
            ].map((r, i) => (
              <Tr key={r.id} className={i % 2 === 0 ? 'bg-[var(--color-canvas-subtle)]' : ''}>
                <Td className="border border-[var(--color-border-default)]">{r.id}</Td>
                <Td className="border border-[var(--color-border-default)]">{r.t}</Td>
                <Td className="border border-[var(--color-border-default)]">{r.a}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Showcase>
    </div>
  )
}

export { TableElements }
