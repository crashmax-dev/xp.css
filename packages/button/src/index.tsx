import 'xp.css'
import React from 'react'
import { cx } from '@xp.css/utils'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isActive?: boolean
  isFocused?: boolean
  isDisabled?: boolean
}

export function Button({
  children,
  isActive,
  isFocused,
  isDisabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(props.className, { active: isActive, focused: isFocused })}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  )
}
