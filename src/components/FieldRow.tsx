import React, { Children } from 'react'

interface FieldRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function FieldRow({ children, ...props }: FieldRowProps) {
  const childrens = Children.toArray(children)

  return (
    <React.Fragment>
      {childrens.map((children, key) => {
        return (
          <div
            key={key}
            className="field-row"
            {...props}
          >
            {children}
          </div>
        )
      })}
    </React.Fragment>
  )
}
