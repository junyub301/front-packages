import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewMetaData } from "./type";

type ViewDetailRequestData = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  metadata: ViewMetaData;
};

const getPutViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
  data: ViewDetailRequestData;
};

export const putViewDetail = async ({ viewId, data }: Params) => {
  await workerInstance.put(getPutViewDetailPath(viewId), data);
};
