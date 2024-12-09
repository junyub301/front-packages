import { VideosDetailCommentListItem } from "../../../api/getVideosDetailCommentList";
import * as s from "./style.css";
type Props = {
  comment: VideosDetailCommentListItem;
};

export const VideoDetailCommentListItem = ({ comment }: Props) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAtDisplayText,
    isUpdated,
    textDisplay,
    likeCountDisplayText,
    totalReplyCount,
  } = comment;
  return (
    <div className={s.wrapper}>
      <img className={s.image} src={authorProfileImageUrl} alt={`${authorDisplayName}의 프로필사진`} />
      <div className={s.contentsWrapper}>
        <div className={s.titleWrapper}>
          <h5 className={s.title}>{authorDisplayName}</h5>
          <p className={s.label}>
            {publishedAtDisplayText}
            {isUpdated && "(수정됨)"}
          </p>
        </div>
        <p className={s.description} dangerouslySetInnerHTML={{ __html: textDisplay }} />
        <p className={s.info}>
          👍 {likeCountDisplayText} {totalReplyCount > 0 && ` • 답글 ${totalReplyCount}`}
        </p>
      </div>
    </div>
  );
};
