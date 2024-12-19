"use client";
import { VideoDetailPageParams } from "../../../detail/types";
import { useHandleInvalidShortsVideoType } from "../../hooks/useHandleInvalidShortsVideoType";

type Props = VideoDetailPageParams["params"];

export default function ShortsVideoDetail({ videoId }: Props) {
  const data = useHandleInvalidShortsVideoType({ videoId });
  console.log("🚀 ~ ShortsVideoDetail ~ data:", data);
  return <div></div>;
}
