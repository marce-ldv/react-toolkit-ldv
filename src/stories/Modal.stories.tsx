import { Stack, Typography } from '@mui/material'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'

import { Modal } from '../components/molecules'

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
}

const Template: StoryFn<typeof Modal> = args => (
  <Modal {...args}>
    <Stack spacing={2} direction='column' padding={4}>
      <Typography variant='h2'>This is a modal</Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, voluptatum voluptatem quod quos
        voluptates quas doloribus quidem natus. Quisquam voluptatibus,
        quibusdam,
      </Typography>
      <Typography variant='body1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, voluptatum voluptatem quod quos
        voluptates quas doloribus quidem natus. Quisquam voluptatibus,
        quibusdam,
      </Typography>
    </Stack>
  </Modal>
)

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = Template.bind({})
Primary.args = {
  open: false,
}
