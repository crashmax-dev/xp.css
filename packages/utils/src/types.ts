import React from 'react'

export interface ChildrenProps {
  children: React.ReactNode
}

export interface BaseProps extends ChildrenProps {
  className?: string
}
