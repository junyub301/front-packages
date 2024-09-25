import { useViewSchemaFormContext, useViewSchemaFormFieldArray } from "@/src/hooks/useViewSchemaForm";
import { Button } from "@study/react-components-button";
import { Input } from "@study/react-components-input";
import { Box, Flex, Text } from "@study/react-components-layout";
import { vars } from "@study/themes";
import ShortUniqueId from "short-unique-id";

type Props = {
  fieldIndex: number;
};

export const AccordionContentsFields = ({ fieldIndex }: Props) => {
  const { fields, append, remove } = useViewSchemaFormFieldArray(
    `slices.${fieldIndex}.data.accordionContents`,
  );
  const { register, setValue } = useViewSchemaFormContext();

  const { randomUUID } = new ShortUniqueId({ length: 10 });

  const handleAdd = () => {
    const key = randomUUID();
    append({
      key,
      title: "",
      content: "",
    });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  return (
    <Box>
      <Flex className="w-full" justify="space-between" paddingY={4}>
        <Text fontSize="md">AccordionContents</Text>
        <Button size="xs" variant="outline" onClick={handleAdd}>
          추가
        </Button>
      </Flex>
      <Flex className="w-full" direction="column" gap={16} paddingY={4}>
        {fields.map((field, index) => (
          <Flex key={field.key} direction="column" gap={4} marginY={4}>
            <Flex className="w-full" justify="space-between">
              <Text fontSize="sm">{index}. Contents</Text>
              <Button
                className="min-w-fit"
                size="xs"
                variant="outline"
                color="red"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                삭제
              </Button>
            </Flex>
            <Input
              size="md"
              variant="filled"
              placeholder="title"
              {...register(`slices.${fieldIndex}.data.accordionContents.${index}.title`)}
            />
            <textarea
              placeholder="content"
              style={{
                background: vars.colors.$scale.gray[100],
                borderRadius: "0.25rem",
                padding: "0.75rem 1rem",
                minHeight: "5rem",
              }}
              {...register(`slices.${fieldIndex}.data.accordionContents.${index}.content`)}
            />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
