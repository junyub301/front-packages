import { HttpHandler, HttpResponse, http } from "msw";
import { getShortsVideosListURL } from "./getShortsVideosList";

export const getMockShortsVideosList: HttpHandler = http.get(getShortsVideosListURL, () => {
  return HttpResponse.json(GET_MOCK_SHORTS_VIDEOS_LIST.success);
});

export const GET_MOCK_SHORTS_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "Q9Yq-HtCnTg",
      },
      {
        videoId: "ZJAkEF3gcNw",
      },
      {
        videoId: "bE_bAokiEcw",
      },
      {
        videoId: "2Nflr5ezuGk",
      },
      {
        videoId: "L0izEolNPnI",
      },
      {
        videoId: "urfMFkl7kw8",
      },
      {
        videoId: "EKFmSc2LDO0",
      },
      {
        videoId: "eQwVY_5U7Pk",
      },
      {
        videoId: "c6_MBo3CUHg",
      },
      {
        videoId: "HAplq7x5whc",
      },
    ],
    nextPageToken: "CAoQAA",
    totalResults: 1000000,
  },
};
