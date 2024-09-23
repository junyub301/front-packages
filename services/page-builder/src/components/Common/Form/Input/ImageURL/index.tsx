import { useState } from "react";
import { Flex, Text } from "@study/react-components-layout";

export type ImageURLInputProps = {
  defaultValue?: string; // 이미 등록된 이미지가 있을 경우
  onChange?: (value: string) => void; // URL이 R2 버킷에 업로드 되면 onChange를 통해 url을 넘겨준다.
  placeholder?: string;
};

export const ImageURLInput = ({
  defaultValue,
  onChange,
  placeholder = "이미지 선택",
}: ImageURLInputProps) => {
  const [imageURL, setImageURL] = useState(defaultValue);

  return (
    <Flex
      style={{
        width: "240px",
        height: "180px",
        cursor: "pointer",
      }}
      justify="center"
      align="center"
      borderRadius="lg"
      background="gray"
    >
      {imageURL ? (
        ""
      ) : (
        <Text color="gray" fontSize="sm">
          {placeholder}
        </Text>
      )}
    </Flex>
  );
};
