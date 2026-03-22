import type { ReactNode, ButtonHTMLAttributes } from 'react'
import { Option, none, toUndefined } from 'fp-ts/Option'

export type ButtonStyle = 'primary' | 'success' | 'danger' | 'outline' | 'ghost'

export type Size = { _tag: 'Small' } | { _tag: 'Medium' } | { _tag: 'Large' }

export type ButtonState = { _tag: 'Enabled' } | { _tag: 'Disabled' } | { _tag: 'Loading' }

export type Padding = { _tag: 'Default' } | { _tag: 'Expand' } | { _tag: 'None' }

export type ButtonConfig = {
  id: Option<string>
  buttonStyle: ButtonStyle
  size: Size
  label: string | ReactNode
  state: ButtonState
  formType: 'button' | 'submit' | 'reset'
  padding: Padding
  class?: string
}

export const defaultButton = (): ButtonConfig => ({
  id: none,
  buttonStyle: 'primary',
  size: { _tag: 'Medium' },
  label: 'Button',
  state: { _tag: 'Enabled' },
  formType: 'button',
  padding: { _tag: 'Default' },
})

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'className' | 'type' | 'disabled' | 'children'> & {
  config: ButtonConfig
}

export const Button = ({ config, ...props }: ButtonProps): ReactNode => {
  const variants = {
    primary: 'bg-[var(--color-accent-emphasis)] text-white hover:bg-[var(--color-accent-emphasis)]/90',
    success: 'bg-[var(--color-success-emphasis)] text-white hover:bg-[var(--color-success-emphasis)]/90',
    danger: 'bg-[var(--color-danger-emphasis)] text-white hover:bg-[var(--color-danger-emphasis)]/90',
    outline: 'border border-[var(--color-border-default)] bg-transparent hover:bg-[var(--color-neutral-subtle)]',
    ghost: 'bg-transparent hover:bg-[var(--color-neutral-subtle)]',
  }

  const sizes = {
    Small: 'text-xs px-[12px] py-[4px]',
    Medium: 'text-sm px-[16px] py-[8px]',
    Large: 'text-base px-[20px] py-[12px]',
  }

  const paddings = {
    Default: '',
    Expand: 'w-full flex justify-center',
    None: 'p-0',
  }

  const disabledClass = config.state._tag !== 'Enabled' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  const sizeClass = sizes[config.size._tag]
  const paddingClass = paddings[config.padding._tag]

  return (
    <button
      id={toUndefined(config.id)}
      type={config.formType}
      disabled={config.state._tag !== 'Enabled'}
      className={`rounded-md font-medium transition-colors ${variants[config.buttonStyle]} ${sizeClass} ${paddingClass} ${disabledClass} ${config.class || ''}`}
      {...props}
    >
      {config.state._tag === 'Loading' ? 'Loading...' : config.label}
    </button>
  )
}
