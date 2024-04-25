import Loading from "../../icons/Loading";
import { Button } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/Button",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "error"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    children: "button",
    size: "sm",
  },
};
export const Primary: Story = {
  args: {
    children: "button",
    // variant: "primary",
  },
};
export const WithIcons: Story = {
  args: {
    children: "button",
    startIcon: <Loading />,
    endIcon: <i className="fa-solid fa-filter" />,
  },
};
export const WithStartIcon: Story = {
  args: {
    children: "button",
    startIcon: <i className="fa-solid fa-trash" />,
  },
};
export const LoadingTrue: Story = {
  args: {
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "button",
    disabled: true,
  },
};
