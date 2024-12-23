import { f } from "@/src/shared/styles/functions";
import { vars } from "@study/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([f.pRelative]);

export const videoWrapper = style([
  {
    aspectRatio: "1/1.776",
    backgroundColor: vars.colors.$static.light.color.black,
    width: "453px",
    height: "810px",
    cursor: "pointer",
    userSelect: "none",
  },
]);

export const video = style({
  pointerEvents: "none",
});
