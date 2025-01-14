import { UseSuspenseQueryResult, useSuspenseQuery } from "@tanstack/react-query";
import {
  GetVideosDetailRequestParams,
  GetVideosDetailResponse,
  getVideosDetail,
} from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail";

type Prams = GetVideosDetailRequestParams;

export const useGetVideosDetail = (params: Prams): UseSuspenseQueryResult<GetVideosDetailResponse> => {
  return useSuspenseQuery({
    queryKey: ["videoDetail", params.videoId],
    queryFn: async () => getVideosDetail(params),
  });
};
