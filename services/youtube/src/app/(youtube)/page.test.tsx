import { render, screen } from "@/src/shared/utils/test/testUtiles";
import { describe, expect, it } from "vitest";
import Home from "./page";
import { GET_MOCK_VIDEOS_POPULAR_LIST } from "@/src/features/main/api/getVideosPopularList.mock";
import { server } from "@/src/shared/mocks/server";
import { HttpResponse, http } from "msw";
import { getVideosPopularListUrl } from "@/src/features/main/api/getVideosPopularList";

// 1. fetching 전 로딩이 잘 뜨는가?
// 2. fetching 후 로딩이 잘 사라지는가? 컴포넌트가 잘 뜨는가?
// 3. 추가 데이터가 있다면 뷰 로더가 잘 뜨는가?

describe("YoutubeMainPage data fetching", () => {
  it("페이지 init시 불러올 데이터가 없다면 스켈레톤이 잘 노출 되는가?", () => {
    render(<Home />);
    expect(screen.getByTestId("ViewPopularListSkeleton")).toBeInTheDocument();
  });

  it("페이지 init 이후 데이터가 불러와지면 스켈레톤이 사라지고 리스트 항목이 잘 보여지는가?", async () => {
    server.use(
      http.get(getVideosPopularListUrl, () => {
        return HttpResponse.json({
          ...GET_MOCK_VIDEOS_POPULAR_LIST.success,
          nextPageToken: undefined,
        });
      }),
    );
    render(<Home />);

    await screen.findByText(GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].title);

    expect(screen.queryByTestId("ViewPopularListSkeleton")).not.toBeInTheDocument();
    expect(screen.getByText(GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].title)).toBeInTheDocument();
  });

  it("페이지 로드 이후 추가로 불러올 데이터가 있다면 VisibilityLoader가 잘 노출 되는가?", async () => {
    server.use(
      http.get(getVideosPopularListUrl, () => {
        return HttpResponse.json({
          ...GET_MOCK_VIDEOS_POPULAR_LIST.success,
          nextPageToken: "nextPageToken",
        });
      }),
    );
    render(<Home />);

    await screen.findByText(GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].title);

    expect(screen.queryByTestId("VisibilityLoader")).toBeInTheDocument();
  });
});
