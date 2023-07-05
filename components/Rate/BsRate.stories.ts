import type { Meta, StoryObj } from "@storybook/react";

import { BsRate } from "./BsRate";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsRate> = {
  title: "Components/BsRate",
  component: BsRate,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BsRate>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    fill: "#ECD03F",
    point: "3.9",
  },
};
