import { z } from "zod";
import {
  AccordionSliceSchema,
  ImageSliceSchema,
  ImageSliderSectionSliceSchema,
  ImageSliderSliceSchema,
  MetadataSliceSchema,
  SpacingSliceSchema,
  TextSliceSchema,
} from "./slices";

export const ViewSchema = z.object({
  slug: z.string().trim().min(1, { message: "Slug는 1자 이상이여야 합니다." }),
  metadata: MetadataSliceSchema,
  slices: z.array(
    AccordionSliceSchema.or(ImageSliceSchema)
      .or(ImageSliderSliceSchema)
      .or(ImageSliderSectionSliceSchema)
      .or(SpacingSliceSchema)
      .or(TextSliceSchema),
  ),
});
