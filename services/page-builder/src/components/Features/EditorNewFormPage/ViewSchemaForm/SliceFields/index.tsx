import { Spacing } from "@/src/components/Common/Spacing";
import { Heading } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { ViewSchemaFormSliceSpacingFields } from "./SpaingFields";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { ViewSchemaFormSliceTextFields } from "./TextFields";
import { ViewSchemaFormSliceImageFields } from "./ImageFields";
import { ViewSchemaFormSliceImageSliderFields } from "./ImageSliderFields";
import { ViewSchemaFormSliceAccordionFields } from "./AccordionFields";
export const ViewSchemaFormSliceFields = () => {
  const { fields } = useViewSchemaFormSliceFieldArray();
  return (
    <>
      <Heading fontSize="lg" style={{ fontWeight: vars.typography.fontWeight[600] }}>
        Slice
      </Heading>
      <Spacing />
      {fields.map((field, index) => {
        switch (field.sliceName) {
          case "SpacingSlice":
            return <ViewSchemaFormSliceSpacingFields key={`${field.id}`} fieldIndex={index} />;
          case "TextSlice":
            return <ViewSchemaFormSliceTextFields key={`${field.id}`} fieldIndex={index} />;
          case "ImageSlice":
            return <ViewSchemaFormSliceImageFields key={`${field.id}`} fieldIndex={index} />;
          case "ImageSliderSlice":
            return <ViewSchemaFormSliceImageSliderFields key={`${field.id}`} fieldIndex={index} />;
          case "AccordionSlice":
            return <ViewSchemaFormSliceAccordionFields key={`${field.id}`} fieldIndex={index} />;
          default:
            <></>;
        }
      })}
    </>
  );
};
