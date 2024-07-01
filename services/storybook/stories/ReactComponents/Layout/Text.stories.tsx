import "@study/react-components-layout/style.css";
import { Text as _Text } from "@study/react-components-layout";
import { vars, classes } from "@study/themes";
export default {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const TextStory = {
  args: {
    as: "p",
    fontSize: "sm",
    children: "Hello World",
    color: "gray",
  },
};
