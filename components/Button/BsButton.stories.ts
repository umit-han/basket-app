import type { Meta, StoryObj } from "@storybook/react";

import { BsButton } from "./BsButton";

import { userEvent, waitFor, within } from "@storybook/testing-library";
// import { expect } from "@storybook/jest";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsButton> = {
  title: "Components/BsButton",
  component: BsButton,
  tags: ["autodocs"],
  argTypes: {
    link: {
      type: "string",
      description: "Link URL",
    },
    target: {
      type: "string",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof BsButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isDisabled: false,
    btnType: "button",
    label: "Button",
    variant: "primary",
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   const submitBtn = canvas.getByRole("button", {
  //     name: "Button",
  //   });

  //   await expect(submitBtn).toHaveClass("text-baseWhite");
  //   await expect(submitBtn).toHaveClass("bg-primary");
  //   await expect(submitBtn).toBeInTheDocument();
  // },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   const submitBtn = canvas.getByRole("button", {
  //     name: "Button",
  //   });

  //   await expect(submitBtn).toHaveClass("border-primary");
  //   await expect(submitBtn).toBeInTheDocument();
  // },
};
