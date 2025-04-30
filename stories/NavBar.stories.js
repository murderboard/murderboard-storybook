import { fn } from "@storybook/test";

import { NavbarExternal } from "./NavBarExternal";
import { NavbarInternal } from "./NavBarInternal";

export default {
  title: "MainApp/Navbar",
  component: NavbarInternal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: "fullscreen",
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
};

export const Default = {};
