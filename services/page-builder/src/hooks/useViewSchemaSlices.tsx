import { useMemo } from "react";
import { SpacingSlice } from "../components/view/Spacing";
import { ImageSlice } from "../components/view/slices/Image";
import { ImageSliderSectionSlice } from "../components/view/slices/ImageSliderSection";
import {
  MetadataSlice,
  MetadataSliceProps,
} from "../components/view/slices/Metadata";
import { TextSlice } from "../components/view/slices/Text";
import { AccordionSlice } from "../components/view/slices/Accordion";

export type ViewSchema = {
  slug: string;
  metadata?: MetadataSliceProps;
  slices: {
    sliceName:
      | "TextSlice"
      | "ImageSlice"
      | "SpacingSlice"
      | "ImageSliderSectionSlice"
      | "AccordionSlice";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
  }[];
};
export const useViewSchemaSlices = (viewSchema: ViewSchema) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (viewSchema.metadata) {
      sliceList.push(<MetadataSlice {...viewSchema.metadata} />);
    }

    viewSchema.slices.forEach(({ sliceName, data }) => {
      switch (sliceName) {
        case "TextSlice": {
          sliceList.push(<TextSlice {...data} />);
          break;
        }
        case "ImageSlice": {
          sliceList.push(<ImageSlice {...data} />);
          break;
        }
        case "SpacingSlice": {
          sliceList.push(<SpacingSlice {...data} />);
          break;
        }
        case "ImageSliderSectionSlice": {
          sliceList.push(<ImageSliderSectionSlice {...data} />);
          break;
        }

        case "AccordionSlice": {
          sliceList.push(<AccordionSlice {...data} />);
          break;
        }
      }
    });
    return sliceList;
  }, [viewSchema]);

  return slices;
};
