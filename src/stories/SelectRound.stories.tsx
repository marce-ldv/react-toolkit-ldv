import type { Meta, StoryFn } from '@storybook/react'

import { Select } from '../components/atoms/SelectRound'
import { options } from '../mocks/SelectRound'

export default {
  title: 'Atoms/SelectRound',
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

export const Default = Template.bind({})
Default.args = {
  options,
}
