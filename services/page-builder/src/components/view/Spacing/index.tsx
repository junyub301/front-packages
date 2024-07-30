import { vars } from "@study/themes";
import { Box } from "@study/react-components-layout";
type Props = {
  sliceStyle?: {
    height?: number;
    backgroundColor?: string;
  };
};

export const SpacingSlice: React.FC<Props> = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return <Box style={{ width: "100%", height: height, backgroundColor }} />;
};
