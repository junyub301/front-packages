import { youtube_v3 } from "googleapis";
import { GetVideosDetailRequestParams } from "./getVideosDetail";

export type GetVideosDetailCommentsListRequestParams = GetVideosDetailRequestParams &
  Pick<youtube_v3.Params$Resource$Commentthreads$List, "pageToken">;
