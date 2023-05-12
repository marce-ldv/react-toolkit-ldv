import { Meta, StoryObj } from '@storybook/react'

import { Breadcrumb } from '../components/atoms'

const options = [
  { title: 'Administrador de usuarios', Link: () => <a href='/'>Admin</a> },
  { title: 'Listado de usuarios', Link: () => <a href='/'>Listado</a> },
  { title: 'Creación de usuarios' },
]

const optionsWithoutLink = [{ title: 'Administrador de usuarios' }]

const meta: Meta<typeof Breadcrumb> = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Primary: Story = {
  args: {
    options,
  },
}

export const WithoutLink: Story = {
  args: {
    options: optionsWithoutLink,
  },
}
