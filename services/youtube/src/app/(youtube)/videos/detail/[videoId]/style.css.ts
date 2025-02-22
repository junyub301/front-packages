import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  f.wFull,
  f.flex,
  f.justifyCenter,
  responsiveStyle({
    md: {
      padding: "1.5rem",
    },
    sm: {
      padding: "0 0 1.5rem 0",
    },
  }),
]);

export const wrapper = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    maxWidth: "68.5rem",
  },
]);
