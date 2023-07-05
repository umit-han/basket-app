import type { Meta, StoryObj } from "@storybook/react";

import { BsInput } from "./BsInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsInput> = {
  title: "Components/BsInput",
  component: BsInput,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BsInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Disabled: Story = {
  args: {
    isDisabled: true,
    inputType: "text",
    label: "Input",
  },
};

export const Base: Story = {
  args: {
    ...Disabled.args,
    isDisabled: false,
  },
};
