import { forwardRef } from "react";
import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "../Layouts/FormFieldWrapper";
import { Input, InputProps } from "@study/react-components-input";
type Props = Pick<FormFieldWrapperProps, "label"> & InputProps;

export const InputField = forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
    const { label, isRequired, ...inputRest } = props;
    const { variant = "filled", size = "sm" } = inputRest;

    return (
      <FormFieldWrapper label={label} isRequired={isRequired}>
        <Input
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
  },
);
