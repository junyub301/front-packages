import React, { forwardRef, Ref } from "react";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/styles.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@study/themes";
import { headingStyle } from "./style.css";
import { HeadingProps } from "./types";

const Heading = (props: HeadingProps, ref: Ref<HTMLElement>) => {
  const { as = "h1", fontSize, background, color = "gray", children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        headingStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: vars.colors.$scale?.[color]?.[700] ?? color,
        background: vars.colors.$scale?.[background]?.[100] ?? background,
        ...props.style,
      },
    },
    children,
  );
};

const _Heading = forwardRef(Heading);
export { _Heading as Heading };
