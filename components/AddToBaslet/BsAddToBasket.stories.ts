import type { Meta, StoryObj } from "@storybook/react";

import { BsAddToBasket } from "./BsAddToBasket";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsAddToBasket> = {
  title: "Components/BsAddToBasket",
  component: BsAddToBasket,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BsAddToBasket>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    fill: "#E82223",
    btnActionText: "Sepete Ekle",
  },
};
