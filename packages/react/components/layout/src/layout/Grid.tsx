import React from "react";
import { GridProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/styles.css";
import { extractSprinkleProps } from "../utils/properties";
import { vars } from "@study/themes";

const Grid = (props: GridProps, ref: React.Ref<HTMLElement>) => {
  const {
    as = "div",
    color,
    background,
    children,
    autoColumns,
    autoFlow,
    autoRows,
    column,
    columnGap,
    gap,
    row,
    rowGap,
    templateAreas,
    templateColumns,
    templateRows,
  } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        display: "grid",
        gridAutoColumns: autoColumns,
        gridAutoFlow: autoFlow,
        gridAutoRows: autoRows,
        gridColumnGap: columnGap,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        gridTemplateAreas: templateAreas,
        gridColumn: column,
        gridRow: row,
        gridRowGap: rowGap,
        gap,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Grid = React.forwardRef(Grid);
export { _Grid as Grid };
