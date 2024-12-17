import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import {
  GetVideosDetailCommentListResponse,
  GetVideosDetailCommentsListRequestParams,
  getVideosDetailCommentList,
} from "@/src/shared/api/youtube/client/videoDetail/getVideosDetailCommentList";

type Params = Pick<GetVideosDetailCommentsListRequestParams, "videoId"> & {
  initPageToken?: string;
};
export const useGetVideosDetailCommentList = ({
  videoId,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<InfiniteData<GetVideosDetailCommentListResponse>, Error> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videoDetail", "commentList", videoId, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getVideosDetailCommentList({ videoId, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
};
