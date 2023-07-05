import type { Meta, StoryObj } from "@storybook/react";

import { BsProduct } from "./BsProduct";
import { colors } from "@/utils/colors/colors";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BsProduct> = {
  title: "Components/BsProduct",
  component: BsProduct,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof BsProduct>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base: Story = {
  args: {
    imgUrl:
      "https://images.unsplash.com/photo-1687996345260-2f8e48b6b387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=220&q=80",
    title: "Villa Bosphorus",
    subTitle: "Lorem İpsum Sit Dolor Met",
    point: "3.9",
    km: "3.7",
    fillRate: "#ECD03F",
    fillLocation: "#0DAFC0",
    fillButton: "#E82223",
    btnActionText: "Sepete Ekle",
  },
};
