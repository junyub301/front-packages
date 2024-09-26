import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { Divider } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { useEffect } from "react";
import { SliceFieldTitleNavBar } from "../Common/SliceFieldTitleNavBar";
import { ViewSchemaFormSliceTextHighlightFields } from "./TextHighlightField";
type Props = {
  fieldIndex: number;
};
export const ViewSchemaFormSliceTextFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "TextSlice");
  }, []);

  return (
    <FormFieldSection title={<SliceFieldTitleNavBar title={`${fieldIndex}. Text`} fieldIndex={fieldIndex} />}>
      <InputField label="text" {...register(`slices.${fieldIndex}.data.text`)} />
      <Divider />
      <InputField
        label="textColor"
        type="color"
        defaultValue={vars.colors.$static.light.color.black}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textColor`)}
      />
      <ViewSchemaFormSliceTextHighlightFields label="highlight" register={register} fieldIndex={fieldIndex} />
      <InputField
        label="textSize"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textSize`)}
      />
      <InputField
        label="textWeight"
        type="number"
        defaultValue={500}
        {...register(`slices.${fieldIndex}.data.sliceStyle.textWeight`)}
      />
      <SelectField
        label="textAlign"
        defaultValue="center"
        {...register(`slices.${fieldIndex}.data.sliceStyle.textAlign`)}
      >
        <option value="left">left</option>
        <option value="center">center</option>
        <option value="right">right</option>
      </SelectField>
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[50]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
      <InputField
        label="highlightTextColor"
        type="color"
        defaultValue={vars.colors.$static.light.green[500]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.highlightTextColor`)}
      />
      <InputField
        label="highlightTextWeight"
        type="number"
        defaultValue={800}
        {...register(`slices.${fieldIndex}.data.sliceStyle.highlightTextWeight`)}
      />
    </FormFieldSection>
  );
};
