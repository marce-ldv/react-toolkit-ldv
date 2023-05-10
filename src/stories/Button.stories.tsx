import type { Meta, StoryObj } from '@storybook/react'

import Button from '../components/atoms/Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
}
