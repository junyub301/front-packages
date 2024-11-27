import { GetSearchVideosListRequestParams } from "@/src/features/search/api/getSearchVideosList";
import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import queryString from "query-string";

type SearchPageQueryParams = Pick<GetSearchVideosListRequestParams, "order" | "q">;
export const getSearchPageLink = (params: SearchPageQueryParams) => {
  const parseParams = queryString.parse(location.search);
  if (params.q) parseParams.q = params.q;
  if (params.order) parseParams.order = params.order;
  return `/search?${queryString.stringify(parseParams)}`;
};

export const getMainPageLink = () => {
  return "/";
};

export const getVideoDetailPageLink = (params: VideoDetailPageParams["params"]) => {
  return `/videos/detail/${params.videoId}`;
};
