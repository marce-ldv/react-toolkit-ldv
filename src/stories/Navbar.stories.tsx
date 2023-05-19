import { Avatar } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from '../components/molecules'

const meta: Meta<typeof Navbar> = {
  title: 'Molecules/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    Logo: () => <h2>Logo</h2>,
    avatar: true,
  },
}
