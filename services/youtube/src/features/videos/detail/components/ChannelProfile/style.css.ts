import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([f.wFull, f.flex, f.justifyStart, f.alignCenter]);

export const image = style([
  {
    borderRadius: "50%",
    marginRight: ".75rem",
  },
  responsiveStyle({
    md: {
      width: "2.5rem",
      height: "2.5rem",
    },
    sm: {
      width: "2rem",
      height: "2rem",
    },
  }),
]);

export const contentsWrapper = style([
  f.wFull,
  f.flex,
  responsiveStyle({
    md: {
      flexDirection: "column",
      gap: 0,
    },
    sm: {
      flexDirection: "row",
      gap: ".5rem",
    },
  }),
]);

export const title = style([
  f.truncate1,
  f.color.scale.gray[900],
  responsiveStyle({
    md: {
      fontSize: "1rem",
      lineHeight: "1.375rem",
      fontWeight: 500,
    },
    sm: {
      fontSize: ".875rem",
      lineHeight: 1.25,
      fontWeight: 500,
    },
  }),
]);

export const description = style([
  f.color.scale.gray[600],
  f.truncate1,
  {
    fontSize: ".75rem",
    lineHeight: "1.125rem",
    fontWeight: 400,
  },
]);
