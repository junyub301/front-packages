import { FormFieldWrapper } from "@/src/components/Common/Form/Layouts/FormFieldWrapper";
import { useViewSchemaFormContext, useViewSchemaFormFieldArray } from "@/src/hooks/useViewSchemaForm";
import { Box, Flex } from "@study/react-components-layout";
import { Button } from "@study/react-components-button";
import { Spacing } from "@/src/components/Common/Spacing";
import { Input } from "@study/react-components-input";
type Props = {
  label: string;
  register: ReturnType<typeof useViewSchemaFormContext>["register"];
  fieldIndex: number;
};
export const ViewSchemaFormSliceTextHighlightFields = ({ label, register, fieldIndex }: Props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  const { fields, append } = useViewSchemaFormFieldArray(`slices.${fieldIndex}.data.highlightTexts`);
  const handleAdd = () => {
    append("" as any);
  };
  return (
    <FormFieldWrapper label={label}>
      <Flex className="w-full" direction="column" gap={4}>
        <Box>
          <Button size="xs" variant="outline" onClick={handleAdd}>
            + 추가하기
          </Button>
        </Box>
        <Spacing height={8} />
        {fields.map((field, index) => (
          <Input
            key={field.id}
            variant="filled"
            {...register(`slices.${fieldIndex}.data.highlightTexts.${index}`)}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            size="sm"
          />
        ))}
      </Flex>
    </FormFieldWrapper>
  );
};
