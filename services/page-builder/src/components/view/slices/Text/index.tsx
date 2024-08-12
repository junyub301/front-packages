import { TextSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { Text } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { useMemo } from "react";

type Props = SliceSchemaProps<typeof TextSliceSchema>;

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

  const highlightText = highlightTexts.length > 0;
  const highlightedText = useMemo(() => {
    if (highlightText) {
      const regex = new RegExp(`(${highlightTexts?.join("|")})`, "gi");
      return text.split(regex).map((word, index) => {
        if (highlightTexts.some((query) => new RegExp(query, "i").test(word))) {
          return (
            <span
              key={`${word}-${index}`}
              style={{
                color: highlightTextColor,
                fontWeight: highlightTextWeight,
              }}
            >
              {word}
            </span>
          );
        }
        return word;
      });
    }
    return text;
  }, [text, highlightText]);

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
