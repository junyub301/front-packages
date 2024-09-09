import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { Spacing } from "@/src/components/Common/Spacing";
import { Button } from "@study/react-components-button";
import { Box, Flex } from "@study/react-components-layout";
import { vars } from "@study/themes";
import { useForm } from "react-hook-form";
const EditorNewFormPage: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const handleReset = () => {};
  const handlePreview = handleSubmit((formData) => {
    console.log("🚀 ~ handlePreview ~ formData:", formData);
  });
  const handlePublish = handleSubmit((formData) => {
    console.log("🚀 ~ handlePublish ~ formData:", formData);
  });
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
