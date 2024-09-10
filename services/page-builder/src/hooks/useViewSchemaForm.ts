import { useForm, useFormContext } from "react-hook-form";
import { ViewSchemaProps } from "../utils/validation/schema/types";
import { ViewSliceSchemaSnippet } from "../utils/jsonEditor/ViewSchemaSnippet";
import { ViewSchema } from "../utils/validation/schema/view";
import { zodResolver } from "@hookform/resolvers/zod";

export const useViewSchemaForm = () =>
  useForm<ViewSchemaProps>({
    defaultValues: ViewSliceSchemaSnippet.init,
    resolver: zodResolver(ViewSchema),
  });

export const useViewSchemaFormContext = () => useFormContext<ViewSchemaProps>();
