import { DesktopFirstLayout } from "@/src/components/layout/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/layout/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/layout/DesktopFirstLayout/Nav";
import { Button } from "@study/react-components-button";
import React, { useState } from "react";
import { JsonEditor } from "@/src/components/Editor/Json";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import ShortUniqueId from "short-unique-id";
import { previewStorage } from "@/src/utils/storage";

export default function EditorNewPage() {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const viewId = randomUUID();

  const [schema, setSchema] = useState(
    formatObjectToJson(ViewSliceSchemaSnippet.init),
  );

  const handleReset = () => {
    setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));
  };

  const handlePreview = () => {
    previewStorage.set(viewId, schema);
    window.open(`/preview/${viewId}`, "_blank");
  };
  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button size="md" color="red" variant="outline" onClick={handleReset}>
          초기화
        </Button>
        <Button
          size="md"
          color="gray"
          variant="outline"
          onClick={handlePreview}
        >
          미리보기
        </Button>
        <Button size="md" color="green">
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody>
        <JsonEditor
          value={schema}
          onChange={(value) => setSchema(value || "")}
        />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
}
