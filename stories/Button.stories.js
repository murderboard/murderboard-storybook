import { fn } from "@storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Base-Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
    },
    color: {
      options: ["gray", "blue", "teal", "red"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const Large = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Medium = {
  args: {
    size: "md",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "sm",
    label: "Button",
  },
};

export const Disabled = {
  args: {
    size: "lg",
    label: "Button",
    disabled: true,
  },
};
