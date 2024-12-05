import { VideosDetailCommentListItem } from "../../../api/getVideosDetailCommentList";
import * as s from "./style.css";
type Props = {
  comment: VideosDetailCommentListItem;
};

export const VideoDetailCommentListItem = ({ comment }: Props) => {
  const { authorDisplayName, authorProfileImageUrl } = comment;
  return (
    <div className={s.wrapper}>
      <img className={s.image} src={authorProfileImageUrl} alt={`${authorDisplayName}의 프로필사진`} />
    </div>
  );
};
