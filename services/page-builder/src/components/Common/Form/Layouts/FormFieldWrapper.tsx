import { Flex, Text } from "@study/react-components-layout";
import { vars } from "@study/themes";

export type FormFieldWrapperProps = {
  label: string;
  isRequired?: boolean;
} & React.HTMLAttributes<HTMLLabelElement>;

export const FormFieldWrapper = (props: FormFieldWrapperProps) => {
  const { label, isRequired, children, ...rest } = props;

  return (
    <label {...rest}>
      <Flex padding={2} gap={8} className="w-full">
        <Text fontSize="sm" className="w-[200px] break-all flex items-center">
          {label}
          {isRequired && <span style={{ color: vars.colors.$static.light.red[500] }}>*</span>}
        </Text>
        {children}
      </Flex>
    </label>
  );
};
