import { putViewDetail } from "@/src/api/worker/putViewDetail";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import { previewStorage } from "@/src/utils/storage";
import { getValidateFormErrorMessages } from "@/src/utils/validation/error";
import { Button } from "@study/react-components-button";
import { useToast } from "@study/react-components-toast";

type Props = {
  viewId: string;
};

export const EditorNewFormGlobalNavBar = ({ viewId }: Props) => {
  const { reset, handleSubmit } = useViewSchemaFormContext();
  const { toast } = useToast();

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
  );
};
