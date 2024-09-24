import { useViewSchemaFormFieldArray } from "@/src/hooks/useViewSchemaForm";
import { Button } from "@study/react-components-button";
import { Box, Flex, Text } from "@study/react-components-layout";
type Props = {
  fieldIndex: number;
};

export const ImagesFields = ({ fieldIndex }: Props) => {
  const { fields, append, remove } = useViewSchemaFormFieldArray(`slices.${fieldIndex}.data.images`);
  const handleAdd = () => {
    append({
      imageUrl: "",
      alt: "",
    });
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  return (
    <Box>
      <Flex className="w-full" justify="space-between" paddingY={4}>
        <Text fontSize="md">Images</Text>
        <Button size="xs" variant="outline" onClick={handleAdd}>
          추가
        </Button>
      </Flex>
      <Flex className="overflow-y-hidden overflow-x-auto" gap={16}>
        {fields.map((field, index) => (
          <Flex key={field.id} direction="column" gap={8} marginY={4}>
            <Flex className="w-full" justify="space-between">
              <Text fontSize="sm">{index}. image</Text>
              <Button
                className="min-w-full"
                size="xs"
                variant="outline"
                color="red"
                onClick={() => handleRemove(index)}
              >
                삭제
              </Button>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
