import { vars } from "@study/themes";
import { z } from "zod";

const spacingKeys = Object.keys(vars.box.spacing).map((key) => z.literal(parseInt(key)));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const spacingSchema = z.union([...spacingKeys]);

export const commonSliceStyleSchema = z.object({
  padding: z.preprocess(
    (char) => (typeof char === "string" ? parseInt(z.string().parse(char)) : char),
    spacingSchema.optional(),
  ),
  paddingX: z.preprocess(
    (char) => (typeof char === "string" ? parseInt(z.string().parse(char)) : char),
    spacingSchema.optional(),
  ),
  paddingY: z.preprocess(
    (char) => (typeof char === "string" ? parseInt(z.string().parse(char)) : char),
    spacingSchema.optional(),
  ),
  backgroundColor: z.string().optional(),
});
