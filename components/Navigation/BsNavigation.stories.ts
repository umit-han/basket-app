import type { Meta, StoryObj } from "@storybook/react";

import { BsNavigation } from "./BsNavigation";
import { colors } from "@/utils/colors/colors";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsNavigation> = {
  title: "Components/BsNavigation",
  component: BsNavigation,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof BsNavigation>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    listLink: "#",
    accountLink: "#",
  },
};
