import type { Preview } from "@storybook/react";
import "../stories/index.css"; // Tailwind styles

import { ThemeProvider } from "../stories/ThemeContext";

import React, { useEffect } from "react";
import type { Decorator } from "@storybook/react";

export const decorators: Decorator[] = [
  (Story, context) => {
    const theme = context.globals.theme;

    useEffect(() => {
      const root = document.documentElement;
      const body = document.body;

      // Set 'dark' class on <html> for Tailwind
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      // Add Tailwind utility classes to <body>
      body.classList.add("min-h-screen", "transition-colors", "duration-300");
      body.classList.remove(
        "bg-white",
        "text-black",
        "dark:bg-gray-900",
        "dark:text-white",
      );

      // Reapply depending on theme
      if (theme === "dark") {
        body.classList.add("bg-gray-900", "text-white");
      } else {
        body.classList.add("bg-white", "text-black");
      }
    }, [theme]);

    return (
      <ThemeProvider value={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "default",
    toolbar: {
      icon: "circlehollow",
      items: ["default", "dark"],
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
