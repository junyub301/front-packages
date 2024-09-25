import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@study/react-components-button";
import { Divider } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { useEffect } from "react";
import { AccordionContentsFields } from "./AccordionContentsFields";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceAccordionFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "AccordionSlice");
  }, []);

  const handleRemove = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation();
    remove(fieldIndex);
  };
  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. Accordion
          <Button size="xs" variant="outline" color="red" onClick={handleRemove}>
            삭제
          </Button>
        </>
      }
    >
      <SelectField
        label="openedAccordion"
        defaultValue="true"
        {...register(`slices.${fieldIndex}.data.openedAccordion`)}
      >
        <option value="true">true</option>
        <option value="false">false</option>
      </SelectField>
      <AccordionContentsFields fieldIndex={fieldIndex} />
      <Divider />
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
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[50]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
      <InputField
        label="titleTextColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[900]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.titleTextColor`)}
      />
      <InputField
        label="titleTextSize"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.titleTextSize`)}
      />
      <InputField
        label="titleTextWeight"
        type="number"
        defaultValue={700}
        {...register(`slices.${fieldIndex}.data.sliceStyle.titleTextWeight`)}
      />
      <InputField
        label="contentTextColor"
        type="color"
        defaultValue={vars.colors.$static.light.gray[900]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.contentTextColor`)}
      />
      <InputField
        label="contentTextSize"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.contentTextSize`)}
      />
      <InputField
        label="contentTextWeight"
        type="number"
        defaultValue={400}
        {...register(`slices.${fieldIndex}.data.sliceStyle.contentTextWeight`)}
      />
    </FormFieldSection>
  );
};
