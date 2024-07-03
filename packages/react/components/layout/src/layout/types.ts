import { vars } from "@study/themes";
import { AsElementProps, StyleProps } from "../core/types";
import React from "react";

export type BoxProps = AsElementProps & StyleProps;

export type DividerProps = {
  orientation?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & React.HTMLAttributes<HTMLHRElement>;
