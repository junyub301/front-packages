import React from "react";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/styles.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@study/themes";

const Box = (props: BoxProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", color, background, children } = props;
  return React.createElement(
    as,
    {
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        background: vars.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
      ...props,
    },
    children,
  );
};

const _Box = React.forwardRef(Box);
export { _Box as Box };
