import { Box } from "@study/react-components-layout";
import { vars } from "@study/themes";
type Props = {
  imageUrl: string;
  alt: string;
  sliceStyle?: {
    width?: number;
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
  };
};

export const ImageSlice: React.FC<Props> = ({
  imageUrl,
  alt,
  sliceStyle,
}: Props) => {
  const {
    width = "100%",
    padding = 0,
    paddingX = 0,
    paddingY = 0,
    backgroundColor = "transparent",
  } = sliceStyle ?? {};
  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        width: "100%",
        backgroundColor,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img src={imageUrl} alt={alt} width={width} />
    </Box>
  );
};
