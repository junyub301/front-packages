import { API_BASE_URL } from "@/src/shared/api/youtube/constants";
import { Channel, ChannelStatistics, VideoStatistics } from "@/src/shared/api/youtube/types/item";
import { VideoListItem } from "@/src/shared/api/youtube/types/list";

export type GetVideosDetailRequestParams = {
  videoId: string;
};

export type VideoDetail = VideoListItem &
  VideoStatistics & {
    channelInfo: Channel & ChannelStatistics;
  };

export type GetVideosDetailResponse = {
  detail: VideoDetail;
};

export const getVideoDetailURL = `${API_BASE_URL}/api/videos/detail/:videoId`;

export const getVideosDetail = async (
  params: GetVideosDetailRequestParams,
): Promise<GetVideosDetailResponse> => {
  const url = getVideoDetailURL.replace(":videoId", params.videoId);
  const response = await fetch(url);

  return await response.json();
};
