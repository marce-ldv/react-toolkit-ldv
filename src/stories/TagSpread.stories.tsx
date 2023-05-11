import type { Meta, StoryObj } from '@storybook/react'

import { TagSpread } from '../components/atoms'

const meta: Meta<typeof TagSpread> = {
  title: 'Atoms/TagSpread',
  component: TagSpread,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TagSpread>

export const Primary: Story = {
  args: {
    tags: ['test'],
  },
}
