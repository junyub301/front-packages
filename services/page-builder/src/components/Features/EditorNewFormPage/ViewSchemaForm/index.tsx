import { Spacing } from "@/src/components/Common/Spacing";
import { ViewSchemaFormCommonFields } from "./ViewSchemaFormCommonFields";
import { ViewSchemaFormMetadataFields } from "./ViewSchemaFormMetadatFields";

export const EditorNewViewSchemaForm = () => {
  return (
    <form>
      <ViewSchemaFormCommonFields />
      <Spacing />
      <ViewSchemaFormMetadataFields />
    </form>
  );
};
