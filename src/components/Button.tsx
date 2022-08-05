import clsx from 'clsx'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active?: boolean
  focused?: boolean
  disabled?: boolean
}

export function Button({ children, active, focused, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(props.className, { active, focused })}
      {...props}
    >
      {children}
    </button>
  )
}
