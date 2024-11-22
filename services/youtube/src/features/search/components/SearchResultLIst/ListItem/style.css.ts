import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const link = style([
  f.wFull,
  {
    textDecoration: "inherit",
    color: "inherit",
    display: "block",
  },
]);

export const wrapper = style([
  f.wFull,
  f.flex,
  responsiveStyle({
    md: {
      flexDirection: "row",
      gap: "16px",
    },
    sm: {
      flexDirection: "column",
      gap: 0,
    },
  }),
]);

export const thumbnailWrapper = style([
  f.wFull,
  { aspectRatio: "18/10" },
  responsiveStyle({
    md: {
      maxWidth: "360px",
    },
    sm: {
      maxWidth: "100%",
    },
  }),
]);

export const image = style([
  f.wFull,
  f.hFull,
  {
    backgroundColor: "transparent",
    objectFit: "cover",
    visibility: "inherit",
  },
  responsiveStyle({
    md: {
      borderRadius: "12px",
    },
    sm: {
      borderRadius: 0,
    },
  }),
]);

export const contentsWrapper = style([
  f.wFull,
  responsiveStyle({
    md: {
      padding: "0",
    },
    sm: {
      padding: ".75rem",
    },
  }),
]);

export const title = style([
  f.truncate2,
  f.color.scale.gray[500],
  responsiveStyle({
    md: {
      width: "75%",
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      fontWeight: 400,
    },
    sm: {
      width: "100%%",
      fontSize: ".875rem",
      lineHeight: 1.25,
      fontWeight: 400,
    },
  }),
]);

export const metadata = style([
  f.truncate1,
  f.color.scale.gray[500],
  {
    fontSize: ".75rem",
    lineHeight: "18px",
    fontWeight: 400,
  },
]);

export const description = style([
  f.truncate2,
  f.color.scale.gray[600],
  {
    fontSize: ".75rem",
    lineHeight: "1.125rem",
    fontWeight: 400,
    padding: ".5rem 0",
  },
  responsiveStyle({
    md: {
      display: "block",
    },
    sm: {
      display: "none",
    },
  }),
]);
