import { getMockVideosPopularList } from "@/src/features/main/api/getVideosPopularList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { getMockShortsVideosList } from "@/src/features/videos/shorts/api/getShortsVideosList.mock";
import { getMockVideosDetail } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail.mock";
import { getMockVideosDetailCommentList } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetailCommentList.mock";
import { HttpHandler } from "msw";
export const handlers: HttpHandler[] = [
  getMockVideosPopularList,
  getMockSearchVideosList,
  getMockVideosDetail,
  getMockVideosDetailCommentList,
  getMockShortsVideosList,
];
