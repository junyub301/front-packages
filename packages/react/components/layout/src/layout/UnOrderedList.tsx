import * as React from "react";
import { UnorderedListProps } from "./types";
import { vars } from "@study/themes";
import { Flex } from "./Flex";

const UnOrderedList = (
  props: UnorderedListProps,
  ref: React.Ref<HTMLOListElement>,
) => {
  const { listStyleType = "disc", spacing = 3, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      as="ul"
      ref={ref}
      direction="column"
      style={{
        gap: vars.box.spacing[spacing],
        listStyleType: listStyleType as string,
      }}
    >
      {children}
    </Flex>
  );
};

const _UnOrderedList = React.forwardRef(UnOrderedList);
export { _UnOrderedList as UnOrderedList };
