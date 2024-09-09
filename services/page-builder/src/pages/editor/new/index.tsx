import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { Spacing } from "@/src/components/Common/Spacing";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { ViewSchema } from "@/src/utils/validation/schema/view";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@study/react-components-button";
import { Box, Flex } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { useForm } from "react-hook-form";
import { useToast } from "@study/react-components-toast";
import { getValidateFormErrorMessages } from "@/src/utils/validation/error";
import ShortUniqueId from "short-unique-id";
import { useState } from "react";
import { previewStorage } from "@/src/utils/storage";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import { putViewDetail } from "@/src/api/worker/putViewDetail";
const EditorNewFormPage: React.FC = () => {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const [viewId] = useState(randomUUID());
  const { toast } = useToast();
  const { reset, register, handleSubmit } = useForm<ViewSchemaProps>({
    defaultValues: ViewSliceSchemaSnippet.init,
    resolver: zodResolver(ViewSchema),
  });
  const handleReset = () => {
    reset();
  };
  const handlePreview = handleSubmit(
    (formData) => {
      previewStorage.set(viewId, formatObjectToJson(formData));
      window.open(`/preview/${viewId}`, "_blank");
    },
    (error) => {
      const errors = getValidateFormErrorMessages(error);
      const firstError = errors[0];
      if (firstError) {
        toast({
          payload: {
            message: `[${firstError.key}] ${firstError.message}`,
          },
        });
      }
    },
  );
  const handlePublish = handleSubmit(
    async (formData) => {
      const convertedSlug = formData.slug.split(" ").join("-");
      const currentFormData = {
        ...formData,
        slug: `${convertedSlug}-${viewId}`,
      };
      try {
        await putViewDetail({
          viewId,
          data: {
            value: formatObjectToJson(currentFormData),
            metadata: {
              title: formData.slug,
              createAt: new Date().toISOString(),
            },
          },
        });
        window.open(`/view/${currentFormData.slug}`, "_blank");
      } catch (error: any) {
        toast({
          payload: {
            message: `[Fetch Error] ${error.message}`,
          },
        });
      }
    },
    (error) => {
      const errors = getValidateFormErrorMessages(error);
      const firstError = errors[0];
      if (firstError) {
        toast({
          payload: {
            message: `[${firstError.key}] ${firstError.message}`,
          },
        });
      }
    },
  );
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
        <DesktopFirstSideNav>사이드 네비게이션 바</DesktopFirstSideNav>
        <Flex
          className="w-full min-h-screen relative top-0 pt-[16px]"
          background="gray"
          justify="center"
        >
          <Box
            paddingX={8}
            paddingY={6}
            className="max-w-[600px] w-full"
            boxShadow="base"
            style={{ background: vars.colors.$static.light.color.white }}
          >
            <FormFieldSection title="common">
              <InputField isRequired label="slug" {...register("slug")} />
            </FormFieldSection>
            <Spacing />
            <FormFieldSection title="metadata">
              <InputField label="title" {...register("metadata.title")} />
              <InputField label="ogTitle" {...register("metadata.ogTitle")} />
              <InputField
                label="ogDescription"
                {...register("metadata.ogDescription")}
              />
            </FormFieldSection>
          </Box>
        </Flex>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
};

export default EditorNewFormPage;
