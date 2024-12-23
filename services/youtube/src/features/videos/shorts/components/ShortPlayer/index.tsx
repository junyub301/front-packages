import YouTube from "react-youtube";
import { VideoDetailPageParams } from "../../../detail/types";
import * as s from "./style.css";
import { useGetVideosDetail } from "../../../detail/hooks/useGetVideosDetail";
type Props = VideoDetailPageParams["params"];

export const ShortsPlayer = ({ videoId: initVideoId }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId: initVideoId });

  const { videoId } = videoDetail;

  const config = {
    width: "453px",
    height: "810px",
    playerVars: {
      autoplay: 1,
      mute: 1,
      rel: 0,
      controls: 0,
      loop: 1,
      fs: 0,
      playlist: videoId,
    },
  };

  return (
    <div className={s.wrapper}>
      <div className={s.videoWrapper}>
        <YouTube videoId={videoId} loading="eager" className={s.video} opts={config} />
      </div>
    </div>
  );
};
