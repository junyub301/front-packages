import { createContext, useContext } from "react";
import { useViewSchemaFormFieldArray } from "./useViewSchemaForm";

type FormSliceFieldContextProps = ReturnType<typeof useViewSchemaFormFieldArray<"slices">>;
const FormSliceFieldsContext = createContext<FormSliceFieldContextProps | null>(null);

export const useViewSchemaFormSliceFieldArray = () => {
  const context = useContext(FormSliceFieldsContext);

  if (!context) {
    throw new Error("useViewSchemaFormSliceFieldArray must be use within a FormSliceFieldsContext");
  }

  return context;
};

type Props = {
  children: React.ReactNode;
};

export const FormSliceFieldArrayProvider = ({ children }: Props) => {
  const methods = useViewSchemaFormFieldArray("slices");
  return <FormSliceFieldsContext.Provider value={methods}>{children}</FormSliceFieldsContext.Provider>;
};
