import "@study/react-components-button/style.css";
import { Button as _Button } from "@study/react-components-button";
import { vars } from "@study/themes";
import React from "react";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    backgrounds: {
      default: "dark",
    },
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "md",
    children: "Button",
    variant: "outline",
    isDisabled: true,
    leftIcon: "🐤",
    isLoading: false,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
    layout: "centered",
  },
};
