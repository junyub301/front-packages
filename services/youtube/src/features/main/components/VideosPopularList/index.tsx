"use client";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { VideosPopularListItem } from "./ListItem";
import * as s from "./style.css";

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page.lists ?? []).flat();

  return (
    <section className={s.wrapper}>
      {flatData.map((item) => (
        <VideosPopularListItem video={item} key={item.videoId} />
      ))}
    </section>
  );
};
