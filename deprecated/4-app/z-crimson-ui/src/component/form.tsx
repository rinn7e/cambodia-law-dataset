import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

const inputBaseCls =
  'w-full px-[12px] py-[8px] bg-[var(--color-canvas-default)] text-[var(--color-fg-default)] border border-[var(--color-border-default)] rounded-md focus:border-[var(--color-accent-fg)] focus:shadow-[var(--shadow-focus)] placeholder:text-[var(--color-fg-subtle)]'

export const Label = ({ children, className = '' }: { children: ReactNode; className?: string }): ReactNode => (
  <label className={`mb-[4px] block text-sm font-medium text-[var(--color-fg-default)] ${className}`}>{children}</label>
)

export const Input = ({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>): ReactNode => (
  <input className={`${inputBaseCls} ${className}`} {...props} />
)

export const Select = ({
  children,
  className = '',
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }): ReactNode => (
  <select className={`${inputBaseCls} ${className}`} {...props}>
    {children}
  </select>
)

export const Textarea = ({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>): ReactNode => (
  <textarea className={`${inputBaseCls} resize-y ${className}`} {...props} />
)

export const Checkbox = ({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>): ReactNode => (
  <input type="checkbox" className={`accent-[var(--color-accent-emphasis)] ${className}`} {...props} />
)

export const Radio = ({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>): ReactNode => (
  <input type="radio" className={`accent-[var(--color-accent-emphasis)] ${className}`} {...props} />
)

export const Fieldset = ({
  children,
  legend,
  className = '',
}: {
  children: ReactNode
  legend?: string
  className?: string
}): ReactNode => (
  <fieldset className={`rounded-md border border-[var(--color-border-default)] p-[16px] ${className}`}>
    {legend && <legend className="px-[8px] text-sm font-medium">{legend}</legend>}
    {children}
  </fieldset>
)
