import clsx from "clsx";
import { VideoDetailPageParams } from "../../types";
import * as s from "./style.css";
import { useGetVideosDetail } from "../../hooks/useGetVideosDetail";
export type Props = React.HTMLAttributes<HTMLDivElement> & VideoDetailPageParams["params"];

export const VideoDetailChannelProfile = ({ videoId, ...props }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });
  const {
    channelInfo: { thumbnail, title, subscriberCountDisplayText },
  } = videoDetail;
  return (
    <div className={clsx([props.className, s.wrapper])} {...props}>
      <img alt={`${title}의 프로필 이미지`} className={s.image} src={thumbnail.url} />
      <div className={s.contentsWrapper}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{`구독자 ${subscriberCountDisplayText}명`}</p>
      </div>
    </div>
  );
};
