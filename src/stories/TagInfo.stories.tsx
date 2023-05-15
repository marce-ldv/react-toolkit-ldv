import type { Meta, StoryObj } from '@storybook/react'

import { TagInfo } from '../components/atoms'

const meta: Meta<typeof TagInfo> = {
  title: 'Atoms/TagInfo',
  component: TagInfo,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TagInfo>

export const Filter: Story = {
  args: {
    label: 'filtros',
  },
}
