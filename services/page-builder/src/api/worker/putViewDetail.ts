import { workerInstance } from ".";
import { getViewDetailPath } from "./getViewDetail";
import { ViewMetaData } from "./type";

type ViewDetailRequestData = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  metadata: ViewMetaData;
};

type Params = {
  viewId: string;
  data: ViewDetailRequestData;
};

export const putViewDetail = async ({ viewId, data }: Params) => {
  await workerInstance.put(getViewDetailPath(viewId), data);
};
