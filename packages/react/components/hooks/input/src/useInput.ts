import { useState } from "react";
import { UseINputResult, UseInputProps } from "./types";

export const useInput = (props: UseInputProps): UseINputResult => {
  const {
    isDisabled = false,
    isInvalid = false,
    isReadOnly = false,
    isRequired = false,
    defaultValue,
    value,
    onChange,
    ...rest
  } = props;

  const isControlled = value !== undefined && onChange !== undefined;
  const [unControlledValue, setUnControlledValue] = useState(
    defaultValue ?? "",
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isControlled) {
      onChange(e);
    } else {
      setUnControlledValue(e.target.value);
    }
  };

  const currentValue = isControlled ? value : unControlledValue;

  return {
    inputProps: {
      ...rest,
      defaultValue,
      value: currentValue,
      onChange: handleChange,
      readOnly: isReadOnly,
      disabled: isDisabled,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
    valueCount: currentValue.toString().length,
  };
};
