import { f } from "@/src/shared/styles/functions";
import { vars } from "@study/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.color.scale.gray[900],
  {
    borderRadius: ".75rem",
    padding: ".75rem",
    backgroundColor: vars.colors.$scale.gray[200],
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
  },
]);
