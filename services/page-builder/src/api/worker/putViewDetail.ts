import { WORKER_BASE_PATH, workerInstance } from ".";

type ViewDetailRequestData = {
  value: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  metadata: Object;
};

const getPutViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
  data: ViewDetailRequestData;
};

export const putViewDetail = async ({ viewId, data }: Params) => {
  const response = await workerInstance.put(getPutViewDetailPath(viewId), data);
  console.log("🚀 ~ putViewDetail ~ response:", response);
};
