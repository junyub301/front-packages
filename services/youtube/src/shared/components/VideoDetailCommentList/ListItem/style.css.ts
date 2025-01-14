import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  f.flex,
  f.justifyStart,
  f.alignCenter,
  {
    gap: ".5rem",
  },
]);

export const image = style([
  {
    borderRadius: "50%",
    objectFit: "cover",
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

export const contentsWrapper = style([f.wFull]);

export const titleWrapper = style([f.flex, f.justifyStart, f.alignCenter]);

export const title = style([
  f.color.scale.gray[700],
  f.truncate1,
  {
    fontSize: ".75rem",
    lineHeight: "1.125rem",
    fontWeight: 500,
  },
]);

export const label = style([
  f.truncate1,
  f.color.scale.gray[500],
  {
    fontSize: ".75rem",
    fontWeight: 400,
    marginLeft: ".25rem",
  },
]);

export const description = style([
  f.color.scale.gray[800],
  {
    fontSize: ".875rem",
    fontWeight: 400,
    lineHeight: "1.25rem",
    marginTop: ".25rem",
  },
]);

export const info = style([
  f.color.scale.gray[500],
  f.truncate1,
  {
    fontSize: ".75rem",
    fontWeight: 400,
    marginTop: ".25rem",
  },
]);
