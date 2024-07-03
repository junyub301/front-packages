import "@study/react-components-layout/style.css";
import { Divider as _Divider } from "@study/react-components-layout";
import { vars } from "@study/themes";

export default {
  title: "React Components/Layout/Divider",
  component: _Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed", "dotted"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Divider = {
  args: {
    color: "orange",
    size: 2,
    variant: "solid",
    orientation: "horizontal",
  },
};
