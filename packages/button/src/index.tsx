import 'xp.css'
import React from 'react'
import { cx } from '@xp.css/utils'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active?: boolean
  focused?: boolean
  disabled?: boolean
}

export function Button({ children, active, focused, ...props }: ButtonProps) {
  return (
    <button
      className={cx(props.className, { active, focused })}
      {...props}
    >
      {children}
    </button>
  )
}
