import type { ReactNode, TableHTMLAttributes } from 'react'


export const Table = ({
  children,
  className = '',
  ...props
}: TableHTMLAttributes<HTMLTableElement> & { children: ReactNode }): ReactNode => (
  <div className="overflow-x-auto">
    <table className={`w-full border-collapse ${className}`} {...props}>
      {children}
    </table>
  </div>
)

export const Thead = ({ children, className = '' }: { children: ReactNode; className?: string }): ReactNode => (
  <thead className={className}>{children}</thead>
)

export const Tbody = ({ children, className = '' }: { children: ReactNode; className?: string }): ReactNode => (
  <tbody className={className}>{children}</tbody>
)

export const Tfoot = ({ children, className = '' }: { children: ReactNode; className?: string }): ReactNode => (
  <tfoot className={`bg-[var(--color-canvas-subtle)] font-semibold ${className}`}>{children}</tfoot>
)

export const Tr = ({ children, className = '' }: { children: ReactNode; className?: string }): ReactNode => (
  <tr className={`hover:bg-[var(--color-neutral-subtle)] ${className}`}>{children}</tr>
)

export const Th = ({ children, className = '' }: { children: ReactNode; className?: string }): ReactNode => (
  <th className={`bg-[var(--color-canvas-subtle)] font-semibold text-[var(--color-fg-default)] px-[16px] py-[12px] text-left ${className}`}>
    {children}
  </th>
)

export const Td = ({ children, className = '' }: { children: ReactNode; className?: string }): ReactNode => (
  <td className={`border-t border-[var(--color-border-muted)] text-[var(--color-fg-default)] px-[16px] py-[12px] text-left ${className}`}>
    {children}
  </td>
)
