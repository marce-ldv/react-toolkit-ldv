import type { Meta, StoryObj } from "@storybook/react";

import Alert from "../components/atoms/Alert";

const meta: Meta<typeof Alert> = {
  title: "Atoms/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    variant: "standard",
    children: "Se ha creado exitosamente el perfil",
  },
};
