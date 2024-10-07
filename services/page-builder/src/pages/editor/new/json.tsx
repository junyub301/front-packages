import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { Button } from "@study/react-components-button";
import React, { useState } from "react";
import { JsonEditor } from "@/src/components/Common/Editor/Json";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import ShortUniqueId from "short-unique-id";
import { previewStorage } from "@/src/utils/storage";
import { useViewSchemaValidation } from "@/src/hooks/useViewSchemaValidation";
import { useToast } from "@study/react-components-toast";
import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { JsonPresetList } from "@/src/components/Features/EditorNewJsonPage/JsonPresetList";
import { putViewDetail } from "@/src/api/worker/putViewDetail";
import { Box } from "@study/react-components-layout";
export default function EditorNewJsonPage() {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const [viewId] = useState(randomUUID());
  const { validateViewSchema, handleEditorValidation } = useViewSchemaValidation();

  const { toast } = useToast();

  const [schema, setSchema] = useState(formatObjectToJson(ViewSliceSchemaSnippet.init));

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
        const objectifiedSchema = JSON.parse(schema);
        const convertedSlug = objectifiedSchema.slug.split(" ").join("-");
        const slug = `${convertedSlug}-${viewId}`;
        previewStorage.set(viewId, schema);
        try {
          await putViewDetail({
            viewId,
            data: {
              value: schema,
              metadata: {
                createAt: new Date().toISOString(),
                isDraft: false,
                title: objectifiedSchema.slug,
              },
            },
          });

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
        <Button size="md" color="gray" variant="outline" onClick={handlePreview}>
          미리보기
        </Button>
        <Button size="md" color="green" onClick={handlePublish}>
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody padding={0}>
        <DesktopFirstSideNav>
          <JsonPresetList validateViewSchema={validateViewSchema} schema={schema} setSchema={setSchema} />
        </DesktopFirstSideNav>
        <Box className="w-full min-h-screen relative top-0 ml-[280px]">
          <JsonEditor
            value={schema}
            onChange={(value) => setSchema(value || "")}
            onValidate={handleEditorValidation}
          />
        </Box>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
}
