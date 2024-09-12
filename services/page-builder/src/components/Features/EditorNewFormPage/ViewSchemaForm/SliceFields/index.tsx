import { Spacing } from "@/src/components/Common/Spacing";
import { Heading } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { ViewSchemaFormSliceSpacingFields } from "./SpaingFields";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { ViewSchemaFormSliceTextFields } from "./TextFields";
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
            return (
              <ViewSchemaFormSliceSpacingFields key={`${field.sliceName}_${index}`} fieldIndex={index} />
            );
          case "TextSlice":
            return <ViewSchemaFormSliceTextFields key={`${field.sliceName}_${index}`} fieldIndex={index} />;
          default:
            <></>;
        }
      })}
    </>
  );
};
