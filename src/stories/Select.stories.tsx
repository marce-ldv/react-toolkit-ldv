import type { Meta, StoryFn } from '@storybook/react'

import { Select } from '../components/atoms/Select'

export default {
  title: 'Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Select>

type Story = StoryFn<typeof Select>

const Template: Story = args => {
  return (
    <Select
      {...args}
      options={['Ambos', 'Activo', 'Inactivo', 'Lorem ipsum dolor sit amet']}
      label='Estado'
    />
  )
}

export const Standard = Template.bind({})
Standard.args = {
  variant: 'standard',
  defaultValue: 'Ambos',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
  defaultValue: 'Ambos',
}

export const DefaultLongText = Template.bind({})
DefaultLongText.args = {
  variant: 'outlined',
  defaultValue: 'Lorem ipsum dolor sit amet',
}
