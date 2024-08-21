import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewMetaData } from "./type";

type ViewDetailRequestData = {
  value: ViewSchemaProps;
  // eslint-disable-next-line @typescript-eslint/ban-types
  metadata: ViewMetaData;
};

const getGetViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
};

export const getViewDetail = async ({ viewId }: Params) => {
  const response = await workerInstance.get(getGetViewDetailPath(viewId));

  const responseData = {
    value: JSON.parse(response.data.data.value),
    metadata: response.data.data.metadata,
  };

  return responseData as ViewDetailRequestData;
};
