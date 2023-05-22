import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '../components/atoms'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Select>

export const Filter: Story = {
  args: {},
}
