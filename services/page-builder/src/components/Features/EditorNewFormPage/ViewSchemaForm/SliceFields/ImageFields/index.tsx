import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@study/react-components-button";
import { useEffect } from "react";
import { Divider } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceImageFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "ImageSlice");
  }, []);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    remove(fieldIndex);
  };

  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. Image
          <Button size="xs" variant="outline" color="red" onClick={handleRemove}>
            삭제
          </Button>
        </>
      }
    >
      <InputField isRequired label="imageURL" {...register(`slices.${fieldIndex}.data.imageUrl`)} />
      <InputField isRequired label="alt" {...register(`slices.${fieldIndex}.data.alt`)} />
      <Divider />
      <InputField label="width" {...register(`slices.${fieldIndex}.data.sliceStyle.width`)} />
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[50]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
      <SelectField label="padding" {...register(`slices.${fieldIndex}.data.sliceStyle.padding`)}>
        {Object.keys(vars.box.spacing).map((value) => (
          <option key={value}>{value}</option>
        ))}
      </SelectField>
      <SelectField label="paddingX" {...register(`slices.${fieldIndex}.data.sliceStyle.paddingX`)}>
        {Object.keys(vars.box.spacing).map((value) => (
          <option key={value}>{value}</option>
        ))}
      </SelectField>
      <SelectField label="paddingY" {...register(`slices.${fieldIndex}.data.sliceStyle.paddingY`)}>
        {Object.keys(vars.box.spacing).map((value) => (
          <option key={value}>{value}</option>
        ))}
      </SelectField>
    </FormFieldSection>
  );
};
