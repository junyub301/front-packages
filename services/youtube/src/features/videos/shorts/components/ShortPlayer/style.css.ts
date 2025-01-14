import { f } from "@/src/shared/styles/functions";
import { vars } from "@study/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([f.pRelative]);

export const infoWrapper = style([
  f.pAbsolute,
  {
    bottom: "1rem",
    left: "1rem",
    zIndex: 2,
  },
]);

export const channelWrapper = style([
  f.flex,
  f.alignCenter,
  {
    marginBottom: ".5rem",
  },
]);

export const channelThumbnail = style({
  borderRadius: "50%",
});

export const channelName = style([
  f.truncate1,
  f.color.scale.gray[900],
  {
    paddingLeft: ".5rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
  },
]);

export const title = style([
  f.truncate1,
  f.color.scale.gray[900],
  {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
  },
]);

export const videoWrapper = style([
  {
    aspectRatio: "1/1.776",
    backgroundColor: vars.colors.$static.light.color.black,
    width: "28.3125rem",
    height: "50.625rem",
    cursor: "pointer",
    userSelect: "none",
  },
]);

export const video = style({
  pointerEvents: "none",
});
