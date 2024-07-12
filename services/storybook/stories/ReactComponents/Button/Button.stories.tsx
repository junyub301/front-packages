import "@study/react-components-button/style.css";
import { Button as _Button } from "@study/react-components-button";
import { Text } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { useButton, useToggleButton } from "@study/react-hooks-button";
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

export const TextButtonStory = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("click");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{ userSelect: "none", cursor: "pointer" }}
      >
        텍스트 버튼!
      </Text>
    );
  },
};

export const ToggleButtonStory = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { buttonProps, isSelected } = useToggleButton(
      {
        elementType: "button",
      },
      false,
    );

    return (
      <_Button {...buttonProps} variant={isSelected ? "solid" : "outline"}>
        {isSelected ? "🐤" : "🐣"}
      </_Button>
    );
  },
};
