import { f } from "@/src/shared/styles/functions";
import { vars } from "@study/themes";
import { style } from "@vanilla-extract/css";

const ButtonSize = "3rem";

export const wrapper = style([
  f.flex,
  f.alignCenter,
  f.directionColumn,
  {
    maxWidth: ButtonSize,
  },
]);

export const button = style([
  f.flex,
  f.alignCenter,
  f.justifyCenter,
  f.color.scale.gray[900],
  {
    border: "none",
    width: ButtonSize,
    height: ButtonSize,
    borderRadius: "50%",
    backgroundColor: vars.colors.$scale.whiteAlpha[700],
    cursor: "pointer",
    fontSize: ".75rem",
    marginBottom: ".375rem",

    selectors: {
      "&:hover": {
        backgroundColor: vars.colors.$scale.whiteAlpha[600],
      },
      "&:active": {
        backgroundColor: vars.colors.$scale.whiteAlpha[500],
      },
    },
  },
]);

export const label = style([
  f.truncate1,
  f.color.scale.gray[900],
  {
    width: ButtonSize,
    fontSize: ".8125rem",
    lineHeight: "1rem",
    fontWeight: 400,
    textAlign: "center",
    cursor: "pointer",
  },
]);
