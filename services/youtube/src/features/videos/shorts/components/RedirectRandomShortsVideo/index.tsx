"use client";
import { flattenInfinityListData } from "@/src/shared/utils/data";
import { useGetShortsVideosList } from "../../hooks/useGetShortsVideosList";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const RedirectRandomShortsVideo = () => {
  const { data } = useGetShortsVideosList({});
  const flatData = flattenInfinityListData(data);

  const router = useRouter();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * flatData.length);
    const randomVideo = flatData[randomIndex].videoId;
    router.replace(`/videos/shorts/${randomVideo}?videoType=short`);
  }, []);
  return <></>;
};
