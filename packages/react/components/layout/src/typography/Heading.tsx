import React, { forwardRef, Ref } from "react";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/styles.css";
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
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        headingStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Heading = forwardRef(Heading);
export { _Heading as Heading };
