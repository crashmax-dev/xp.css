import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../src'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const TemplateButton: ComponentStory<typeof Button> = ({
  children,
  ...props
}) => <Button {...props}>{children}</Button>

export const Primary = TemplateButton.bind({})
Primary.args = {
  children: 'Primary'
}

export const Active = TemplateButton.bind({})
Active.args = {
  children: 'Active',
  isActive: true
}

export const Disabled = TemplateButton.bind({})
Disabled.args = {
  children: 'Disabled',
  isDisabled: true
}
