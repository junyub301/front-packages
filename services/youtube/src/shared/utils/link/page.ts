import { GetSearchVideosListRequestParams } from "@/src/features/search/api/getSearchVideosList";
import queryString from "query-string";

type SearchPageQueryParams = Pick<GetSearchVideosListRequestParams, "order" | "q">;
export const getSearchPageLink = (params: SearchPageQueryParams) => {
  const parseParams = queryString.parse(location.search);
  if (params.q) parseParams.q = params.q;
  if (params.order) parseParams.order = params.order;
  return `/search?${queryString.stringify(parseParams)}`;
};
