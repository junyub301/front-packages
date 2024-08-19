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
import { useViewSchemaValidation } from "@/src/hooks/useViewSchemaValidation";
import { useToast } from "@study/react-components-toast";
import { DesktopFirstSideNav } from "@/src/components/layout/DesktopFirstLayout/SideNav";
import { JsonPresetList } from "@/src/components/EditorNewPage/JsonPresetList";
import { putViewDetail } from "@/src/api/worker/putViewDetail";

export default function EditorNewPage() {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const [viewId] = useState(randomUUID());
  const { validateViewSchema, handleEditorValidation } =
    useViewSchemaValidation();

  const { toast } = useToast();

  const [schema, setSchema] = useState(
    formatObjectToJson(ViewSliceSchemaSnippet.init),
  );

  const handleReset = () => {
    setSchema(formatObjectToJson(ViewSliceSchemaSnippet.init));
  };

  const handlePreview = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: () => {
        previewStorage.set(viewId, schema);
        window.open(`/preview/${viewId}`, "_blank");
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message,
          },
        });
      },
    });
  };
  const handlePublish = () => {
    validateViewSchema({
      viewSchema: schema,
      onSuccess: async () => {
        try {
          await putViewDetail({
            viewId,
            data: {
              value: schema,
              metadata: { createAt: new Date().toISOString() },
            },
          });
          const objectifiedSchema = JSON.parse(schema);
          const convertedSlug = objectifiedSchema.slug.split(" ").join("-");
          const slug = `${convertedSlug}-${viewId}`;
          window.open(`/view/${slug}`, "_blank");
        } catch (error: any) {
          toast({
            payload: {
              message: `[Fetch Error] ${error.message}`,
            },
          });
        }
      },
      onError: ({ message }) => {
        toast({
          payload: {
            message,
          },
        });
      },
    });
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
        <Button size="md" color="green" onClick={handlePublish}>
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody padding={0}>
        <DesktopFirstSideNav>
          <JsonPresetList
            validateViewSchema={validateViewSchema}
            schema={schema}
            setSchema={setSchema}
          />
        </DesktopFirstSideNav>
        <JsonEditor
          value={schema}
          onChange={(value) => setSchema(value || "")}
          onValidate={handleEditorValidation}
        />
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
}
