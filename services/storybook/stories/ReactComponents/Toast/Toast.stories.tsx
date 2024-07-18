import "@study/react-components-button/style.css";
import { Button } from "@study/react-components-button";
import React from "react";

import { ToastProvider, useToast } from "@study/react-components-toast";
import "@study/react-components-toast/style.css";

export default {
  title: "React Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

const Example = () => {
  const { toast } = useToast();
  return (
    <Button
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
