import { useState } from "react";

import type { Meta, StoryFn } from "@storybook/react";

import Input from "../components/atoms/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
} as Meta<typeof Input>;

type Story = StoryFn<typeof Input>;

const Template: Story = (args) => {
  const [value, setValue] = useState("");

  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 10,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  variant: "filled",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};
