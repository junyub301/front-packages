import { GetVideoPopularListRequestParams } from "@/src/features/main/api/getVideosPopularList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const queryParams = parseQueryParams(request.nextUrl.searchParams);
    const { data } = await youtubeServerInstance.videos.list({
      part: ["snippet", "statistics"],
      chart: "mostPopular",
      regionCode: "KR",
      ...queryParams,
    });

    return Response.json({ data });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
  }
};

const parseQueryParams = (params: URLSearchParams): GetVideoPopularListRequestParams => {
  return {
    maxResults: Number(params.get("maxResults") ?? "10"),
    pageToken: params.get("pageToken") ?? undefined,
  };
};
