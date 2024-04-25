import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
const meta: Meta<typeof Input> = {
  component: Input,
  title: "components/Input",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["standart", "outlined", "filled"],
    },
    type: {
      control: "select",
      options: ["text", "password", "email"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Simple: Story = {
  args: {
    variant: "outlined",
  },
};

export const WithIcons: Story = {
  args: {
    variant: "outlined",
    startIcon: <i className="fa-solid fa-trash" />,
    endIcon: <i className="fa-solid fa-trash" />,
  },
};
