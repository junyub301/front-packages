import { getMockVideosPopularList } from "@/src/features/main/api/getVideosPopularList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { getMockVideosDetail } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail.mock";
import { getMOckVideosDetailCommentList } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetailCommentList.mock";
import { HttpHandler } from "msw";
export const handlers: HttpHandler[] = [
  getMockVideosPopularList,
  getMockSearchVideosList,
  getMockVideosDetail,
  getMOckVideosDetailCommentList,
];
