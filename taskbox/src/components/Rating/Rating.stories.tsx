import { Meta, StoryObj } from "@storybook/react";
import Rating from ".";

const meta: Meta<typeof Rating> = {
  component: Rating,
  title: "components/Rating",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Rating>;

export const Simple: Story = {
  //   args: {
  //     variant: "outlined",
  //   },
};
