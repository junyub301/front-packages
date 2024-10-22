import { VideoThumbnail } from "@/src/shared/api/youtube/types/Item";
import { ListPageApiInfo } from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";

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
