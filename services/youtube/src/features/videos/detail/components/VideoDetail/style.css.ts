import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { vars } from "@study/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([f.wFull]);

export const videoWrapper = style([
  f.wFull,
  {
    aspectRatio: "16 / 9",
    overflow: "hidden",
  },
  responsiveStyle({
    md: {
      borderRadius: ".75rem",
    },
    sm: {
      borderRadius: "0",
    },
  }),
]);

export const video = style([f.wFull, f.hFull]);

export const contentsWrapper = style([
  f.wFull,
  responsiveStyle({
    md: {
      padding: ".75rem 0 1.5rem",
    },
    sm: {
      padding: ".75rem 1rem .5rem",
    },
  }),
]);

export const title = style([
  f.wFull,
  f.truncate2,
  f.color.scale.gray[900],
  responsiveStyle({
    md: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 700,
      maxHeight: "3.5rem",
    },
    sm: {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      fontWeight: 500,
      maxHeight: "none",
    },
  }),
]);

export const infoWrapper = style([
  f.wFull,
  f.flex,
  f.justifyBetween,
  responsiveStyle({
    md: {
      paddingTop: ".75rem",
    },
    sm: {
      paddingTop: ".5rem",
    },
  }),
]);

export const likeWrapper = style([
  f.color.scale.gray[800],
  f.flex,
  f.alignCenter,
  {
    flexShrink: 0,
    height: "2.25rem",
    borderRadius: "1.125rem",
    backgroundColor: vars.colors.$scale.gray[200],
    padding: "0 .75rem",
    fontSize: ".875rem",
    fontWeight: 700,
  },
]);

export const panelWrapper = style([
  f.wFull,
  {
    paddingTop: ".75rem",
  },
]);
