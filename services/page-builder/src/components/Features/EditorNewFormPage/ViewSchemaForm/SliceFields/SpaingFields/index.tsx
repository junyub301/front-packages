import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { vars } from "@study/themes";
import { useEffect } from "react";
import { Button } from "@study/react-components-button";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceSpacingFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "SpacingSlice");
  }, []);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    remove(fieldIndex);
  };

  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. Spacing
          <Button size="xs" variant="outline" color="red" onClick={handleRemove}>
            삭제
          </Button>
        </>
      }
    >
      <InputField
        label="height"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.height`)}
      />
      <InputField
        label="color"
        type="color"
        defaultValue={vars.colors.$static.light.gray[200]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
    </FormFieldSection>
  );
};
