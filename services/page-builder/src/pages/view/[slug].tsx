import { MobileFirstLayout } from "@/src/components/layout/MobileFirstLayout";
import { SpacingSlice } from "@/src/components/view/Spacing";
import { AccordionSlice } from "@/src/components/view/slices/Accordion";
import { ImageSlice } from "@/src/components/view/slices/Image";
import { ImageSliderSectionSlice } from "@/src/components/view/slices/ImageSliderSection";
import { TextSlice } from "@/src/components/view/slices/Text";
import { useMemo } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { CDN_BASE_URL } from "@/src/constants";
import {
  MetadataSlice,
  MetadataSliceProps,
} from "@/src/components/view/slices/Metadata";

type Schema = {
  id: string;
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
const ViewPage = ({
  jsonSchema,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (jsonSchema.metadata) {
      sliceList.push(<MetadataSlice {...jsonSchema.metadata} />);
    }

    jsonSchema.slices.forEach(({ sliceName, data }) => {
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
  }, []);
  return <MobileFirstLayout>{slices}</MobileFirstLayout>;
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{ jsonSchema: Schema }> = async (
  context,
) => {
  const slug = (context.params?.slug as string) ?? "";

  const sliceSlug = slug.split("-");
  const viewId = sliceSlug[sliceSlug.length - 1];

  const response = await fetch(`${CDN_BASE_URL}/view/${viewId}.json`);
  if (response.status === 200) {
    const jsonData = await response.json();
    return {
      props: { jsonSchema: jsonData },
      revalidate: 10,
    };
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
