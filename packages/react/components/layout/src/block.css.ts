import { purple } from "./../../../../themes/src/variables/colors/scale";
import { vars } from "@study/themes";
import { style } from "@vanilla-extract/css";

export const blockStyle = style({
  width: "100px",
  height: "100px",
  backgroundColor: vars.colors.$scale.purple[900],
});
