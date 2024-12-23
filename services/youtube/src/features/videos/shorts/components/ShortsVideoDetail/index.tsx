"use client";
import { VideoDetailPageParams } from "../../../detail/types";
import { useHandleInvalidShortsVideoType } from "../../hooks/useHandleInvalidShortsVideoType";
import { ShortsPlayer } from "../ShortPlayer";
import * as s from "./style.css";

type Props = VideoDetailPageParams["params"];

export default function ShortsVideoDetail({ videoId }: Props) {
  useHandleInvalidShortsVideoType({ videoId });
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.videoWrapper}>
          <ShortsPlayer videoId={videoId} />
        </div>
      </div>
    </div>
  );
}
