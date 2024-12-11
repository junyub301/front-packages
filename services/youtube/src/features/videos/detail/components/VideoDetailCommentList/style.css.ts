import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  responsiveStyle({
    md: {
      padding: "12px 0 24px",
    },
    sm: {
      padding: "8px 16px 12px",
    },
  }),
]);

export const title = style([
  f.wFull,
  f.color.scale.gray[900],
  responsiveStyle({
    md: {
      paddingBottom: "24px",
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 700,
    },
    sm: {
      paddingBottom: "12px",
      fontSize: "16px",
      lineHeight: 1.2,
      fontWeight: 700,
    },
  }),
]);

export const listWrapper = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    gap: "16px",
  },
]);
