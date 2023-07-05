import type { Meta, StoryObj } from "@storybook/react";

import { BsLocation } from "./BsLocation";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsLocation> = {
  title: "Components/BsLocation",
  component: BsLocation,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BsLocation>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    fill: "#0DAFC0",
    km: "3.7",
  },
};
