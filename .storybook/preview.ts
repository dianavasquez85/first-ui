import type { Preview } from '@storybook/react-vite'
import React from "react";
import "../src/styles/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "padded",
    options: { showPanel: true },
    a11y: { test: "todo" },
  },

  globalTypes: {
    theme: {
      name: "Theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      return React.createElement(
        "div",
        {
          "data-theme": theme,
          style: {
            background: "var(--color-bg)",
            color: "var(--color-fg)",
            minHeight: "100vh",
            padding: 24,
          },
        },
        React.createElement(Story)
      );
    },
  ],
};

export default preview;
