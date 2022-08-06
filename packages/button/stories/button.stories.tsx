import React from 'react'
import type { ComponentMeta } from '@storybook/react'
import { Button } from '../src'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Primary = () => <Button>Primary</Button>
