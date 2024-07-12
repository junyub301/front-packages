import { vars } from "@study/themes";
import { createVar, style } from "@vanilla-extract/css";

const resetStyle = style({ margin: 0, padding: 0, border: 0 });

export const accordionStyle = style([resetStyle]);

export const accordionItemStyle = style([
  resetStyle,
  {
    width: "100%",
    borderTop: `1px solid ${vars.colors.$scale.gray[300]}`,

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    "&:last-of-type": {
      borderBottom: `1px solid ${vars.colors.$scale.gray[300]}`,
    },
  },
]);

export const accordionButtonStyle = style([
  resetStyle,
  {
    width: "100%",
    padding: "0.5rem 0.75rem",
    gap: "0.625rem",
    display: "flex",
    alignItems: "center",
  },
]);

export const panelHeight = createVar();

export const accordionPanelStyle = style([
  resetStyle,
  {
    width: "100%",
    height: panelHeight,
    overflow: "hidden",
    transition: "height 0.3s ease",

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    "& > div[data-name='panel-inner']": {
      padding: "0.5rem 0.75rem 1.25rem",
    },
  },
]);
