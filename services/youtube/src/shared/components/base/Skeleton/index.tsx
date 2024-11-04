import { vars } from "@study/themes";
import { HTMLAttributes } from "react";

type Props = Pick<HTMLAttributes<HTMLDivElement>, "style">;

export const Skeleton = ({ style }: Props) => (
  <div
    style={{
      pointerEvents: "none",
      width: "100%",
      height: "1.25rem",
      borderRadius: "0.125rem",
      backgroundColor: vars.colors.$scale.gray[200],
      ...style,
    }}
  />
);
