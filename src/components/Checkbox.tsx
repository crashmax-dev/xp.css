import React, { useId } from 'react'

type HTMLCheckboxInput = Omit<
  React.HTMLAttributes<HTMLInputElement>,
  'checked' | 'defaultChecked' | 'disabled' | 'type' | 'id'
>

interface CheckboxProps extends HTMLCheckboxInput {
  children: React.ReactNode
  disabled?: boolean
  checked?: boolean
}

export function Checkbox({
  children,
  disabled,
  checked,
  ...props
}: CheckboxProps) {
  const id = useId()

  return (
    <label>
      <input
        {...props}
        id={id}
        defaultChecked={checked}
        disabled={disabled}
        type="checkbox"
      />
      <label htmlFor={id}>{children}</label>
    </label>
  )
}
