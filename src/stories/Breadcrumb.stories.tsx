import { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from '../components/atoms'

const BreadcrumbOptions = [
  <p key={1}>Administrador de usuarios</p>,
  <p key={2}>Listado de usuarios</p>,
]

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Primary: Story = {
  args: {
    options: BreadcrumbOptions,
  },
}
