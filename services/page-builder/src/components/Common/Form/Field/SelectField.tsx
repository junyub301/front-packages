import { forwardRef } from "react";
import { FormFieldWrapper, FormFieldWrapperProps } from "../Layouts/FormFieldWrapper";
import { Select, SelectProps } from "@study/react-components-select";
type Props = Pick<FormFieldWrapperProps, "label"> & SelectProps;

export const SelectField = forwardRef((props: Props, ref: React.Ref<HTMLSelectElement>) => {
  const { label, isRequired, ...inputRest } = props;
  const { variant = "filled", size = "sm" } = inputRest;

  return (
    <FormFieldWrapper label={label} isRequired={isRequired}>
      <Select
        ref={ref}
        {...inputRest}
        isRequired={isRequired}
        variant={variant}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        size={size}
      />
    </FormFieldWrapper>
  );
});
