import { vars } from "@study/themes";
import { Box } from "@study/react-components-layout";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { SpacingSliceSchema } from "@/src/utils/validation/schema/slices";
type Props = SliceSchemaProps<typeof SpacingSliceSchema>;

export const SpacingSlice: React.FC<Props> = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return <Box style={{ width: "100%", height: height, backgroundColor }} />;
};
