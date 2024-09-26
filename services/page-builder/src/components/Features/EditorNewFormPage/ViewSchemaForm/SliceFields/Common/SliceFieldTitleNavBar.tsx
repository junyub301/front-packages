import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@study/react-components-button";
import { Box, Flex } from "@study/react-components-layout";

type Props = {
  title: React.ReactNode;
  fieldIndex?: number;
  appendRight?: React.ReactNode;
};

export const SliceFieldTitleNavBar = ({ title, appendRight, fieldIndex }: Props) => {
  const { remove } = useViewSchemaFormSliceFieldArray();

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    remove(fieldIndex);
  };

  return (
    <Flex className="w-full" justify="space-between">
      <Box>{title}</Box>
      {appendRight ? (
        <Box>{appendRight}</Box>
      ) : (
        <Button size="xs" variant="outline" color="red" onClick={handleRemove}>
          삭제
        </Button>
      )}
    </Flex>
  );
};
