import { API_BASE_URL } from "@/src/shared/api/youtube/constants";
import { VideoThumbnail } from "@/src/shared/api/youtube/types/Item";
import { ListPageApiInfo } from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideoPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: VideoThumbnail;
  publishedAt: string;
  publishedAtDisplayText: string;
  viewCount: number;
  viewCountDisplayText: string;
};

export type GetVideoPopularListResponse = {
  lists: PopularListItem[];
} & ListPageApiInfo;

export const getVideosPopularListPath = "/api/videos/popular-list";

export const getVideosPopularList = async (
  params: GetVideoPopularListRequestParams,
): Promise<GetVideoPopularListResponse> => {
  const queryParams = queryString.stringify(params);
  const url = `${API_BASE_URL}${getVideosPopularListPath}?${queryParams}`;
  const response = await fetch(url);

  return await response.json();
};
