import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '../components/atoms'

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Filter: Story = {
  args: {
    src: 'assets/images/avatar.png',
  },
}
