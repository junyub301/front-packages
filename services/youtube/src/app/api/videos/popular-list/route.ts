import {
  GetVideoPopularListRequestParams,
  GetVideoPopularListResponse,
} from "@/src/features/main/api/getVideosPopularList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/format/date";
import { formatNumberToKoreanText } from "@/src/shared/format/number";
import { youtube_v3 } from "googleapis";
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

    const mappedData = mappingResponse(data);

    return Response.json(mappedData);
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

const mappingResponse = (data: youtube_v3.Schema$VideoListResponse): GetVideoPopularListResponse => {
  const lists =
    data?.items?.map(({ id, snippet, statistics }) => {
      const publishedAt = snippet?.publishedAt ?? "";
      const perseViewCount = parseInt(statistics?.viewCount ?? "0");
      return {
        videoId: id ?? "",
        title: snippet?.title ?? "",
        description: snippet?.description ?? "",
        channelId: snippet?.channelId ?? "",
        channelTitle: snippet?.channelTitle ?? "",
        thumbnail: {
          url: snippet?.thumbnails?.medium?.url ?? "",
        },
        publishedAt,
        publishedAtDisplayText: formatKoreanTextCompareDatesFromNow(publishedAt),
        viewCount: perseViewCount,
        viewCountDisplayText: formatNumberToKoreanText(perseViewCount, true),
      };
    }) ?? [];

  return {
    lists,
    prevPageToken: data.prevPageToken ?? undefined,
    nextPageToken: data.nextPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  };
};
