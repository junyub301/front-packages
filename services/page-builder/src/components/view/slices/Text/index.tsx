import { Text } from "@study/react-components-layout";
import { vars } from "@study/themes";

type Props = {
  text: string;
  highlightTexts?: string[];
  sliceStyle?: {
    padding?: keyof typeof vars.box.spacing;
    paddingX?: keyof typeof vars.box.spacing;
    paddingY?: keyof typeof vars.box.spacing;
    backgroundColor?: string;
    textColor?: string;
    textSize?: keyof typeof vars.typography.fontSize;
    textWeight?: keyof typeof vars.typography.fontWeight;
    textAlign?: "left" | "right" | "center";
    highlightTextColor?: string;
    highlightTextWeight?: keyof typeof vars.typography.fontWeight;
  };
};

export const TextSlice: React.FC<Props> = ({
  text,
  highlightTexts = [],
  sliceStyle,
}: Props) => {
  const {
    padding = 2,
    paddingX = 2,
    paddingY = 2,
    backgroundColor = vars.colors.$static.light.color.white,
    textColor = vars.colors.$static.light.color.black,
    textSize,
    textWeight,
    textAlign = "center",
    highlightTextColor = vars.colors.$static.light.yellow[400],
    highlightTextWeight,
  } = sliceStyle ?? {};

  const regex = new RegExp(`(${highlightTexts?.join("|")})`, "gi");
  const highlightedText = text.split(regex).map((word, index) => {
    if (highlightTexts.some((query) => new RegExp(query, "i").test(word))) {
      return (
        <span
          key={`${word}-${index}`}
          style={{ color: highlightTextColor, fontWeight: highlightTextWeight }}
        >
          {word}
        </span>
      );
    }
    return word;
  });

  return (
    <Text
      fontSize="2xl"
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        backgroundColor,
        color: textColor,
        fontSize: textSize,
        fontWeight: textWeight,
        textAlign,
        whiteSpace: "pre-wrap",
        wordBreak: "keep-all",
      }}
    >
      {highlightedText}
    </Text>
  );
};
