import * as React from "react";
import { ListProps } from "./types";
import { UnOrderedList } from "./UnOrderedList";
import { OrderedList } from "./OrderedList";

const List = (props: ListProps, ref: React.Ref<HTMLOListElement>) => {
  const { variant = "unordered", ...rest } = props;

  if (variant === "unordered") {
    return <UnOrderedList {...rest} ref={ref} />;
  }

  return <OrderedList {...rest} ref={ref} />;
};

const _List = React.forwardRef(List);
export { _List as List };
