import { useState } from "react";
import { Flex, Text } from "@study/react-components-layout";
import ShortUniqueId from "short-unique-id";
import { putImageFile } from "@/src/api/r2/putImageFile";

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
  const { randomUUID } = new ShortUniqueId({ length: 4 });
  const [uuid] = useState(randomUUID);
  const [imageURL, setImageURL] = useState(defaultValue);

  const handleInputFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file && file.type.match("image.*")) {
      try {
        const { randomUUID } = new ShortUniqueId({ length: 20 });
        const fileName = randomUUID();
        const imageUrl = await putImageFile({
          fileName,
          file,
        });
        setImageURL(imageUrl);
        onChange?.(imageUrl);
      } catch (error) {
        console.log("이미지 업로드 실패");
      }
    }
  };

  return (
    <label htmlFor={`imageFile-${uuid}`}>
      <input
        type="file"
        id={`imageFile-${uuid}`}
        accept=".png, .jpg, .jpeg, .webp"
        style={{ display: "none" }}
        onChange={handleInputFileChange}
      />
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
          <img src={imageURL} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <Text color="gray" fontSize="sm">
            {placeholder}
          </Text>
        )}
      </Flex>
    </label>
  );
};
