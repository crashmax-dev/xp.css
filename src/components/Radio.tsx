import React, { useId } from 'react'

interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode
  name?: string
}

export function Radio({ children, name, ...props }: RadioProps) {
  const id = useId()

  return (
    <React.Fragment>
      <input
        {...props}
        id={id}
        type="radio"
        name={name}
      />
      <label htmlFor={id}>{children}</label>
    </React.Fragment>
  )
}
