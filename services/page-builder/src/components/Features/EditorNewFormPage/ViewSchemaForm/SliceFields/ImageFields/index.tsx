import { ImageURLField } from "@/src/components/Common/Form/Field/ImageURLField";
import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { Divider } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { useEffect } from "react";
import { SliceFieldTitleNavBar } from "../Common/SliceFieldTitleNavBar";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceImageFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "ImageSlice");
  }, []);

  const handleImageURLChange = (value: string) => {
    setValue(`slices.${fieldIndex}.data.imageUrl`, value);
  };

  return (
    <FormFieldSection
      title={<SliceFieldTitleNavBar title={`${fieldIndex}. Image`} fieldIndex={fieldIndex} />}
    >
      <ImageURLField label="imageURL" isRequired onChange={handleImageURLChange} />
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
