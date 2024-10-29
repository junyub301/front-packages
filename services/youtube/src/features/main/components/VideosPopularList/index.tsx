"use client";
import { vars } from "@study/themes";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { useEffect } from "react";

export const VideosPopularList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetVideosPopularList({});
  useEffect(() => {
    setTimeout(() => {
      fetchNextPage();
    }, 2000);
  }, []);
  return (
    <section style={{ color: vars.colors.$scale.gray[900] }}>
      <h2>목록</h2>
      <br />
      <p>fetching: {isFetchingNextPage ? "true" : "false"}</p>
      <p>{data.pages[0].lists?.[0].title}</p>
    </section>
  );
};
