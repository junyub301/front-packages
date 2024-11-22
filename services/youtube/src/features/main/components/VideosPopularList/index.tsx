"use client";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { VideosPopularListItem } from "./ListItem";
import * as s from "./style.css";
import { flattenInfinityListData } from "@/src/shared/utils/data";

export const VideosPopularList = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetVideosPopularList({});

  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <VideosPopularListItem video={item} key={item.videoId} />
        ))}
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
