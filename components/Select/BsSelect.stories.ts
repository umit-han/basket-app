import type { Meta, StoryObj } from "@storybook/react";

import { BsSelect } from "./BsSelect";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsSelect> = {
  title: "Components/BsSelect",
  component: BsSelect,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BsSelect>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Disabled: Story = {
  args: {
    isDisabled: true,
    label: "Select",
  },
};

export const Base: Story = {
  args: {
    ...Disabled.args,
    isDisabled: false,
  },
};
