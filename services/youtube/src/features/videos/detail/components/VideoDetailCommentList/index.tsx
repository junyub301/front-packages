"use client";
import { flattenInfinityListData } from "@/src/shared/utils/data";
import { useGetVideosDetail } from "../../hooks/useGetVideosDetail";
import { VideoDetailPageParams } from "../../types";
import * as s from "./style.css";
import { useGetVideosDetailCommentList } from "../../hooks/useGetVideosDetailCommentList";
import { VideoDetailCommentListItem } from "./ListItem";
type Props = VideoDetailPageParams["params"];

export const VideoDetailCommentList = ({ videoId }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });
  const { data } = useGetVideosDetailCommentList({ videoId });
  const flatData = flattenInfinityListData(data);
  return (
    <section className={s.wrapper}>
      <h4 className={s.title}>댓글 {videoDetail.commentCountDisplayText}개</h4>
      <div className={s.listWrapper}>
        {flatData.map((comment) => (
          <VideoDetailCommentListItem comment={comment} key={comment.commentId} />
        ))}
      </div>
    </section>
  );
};
