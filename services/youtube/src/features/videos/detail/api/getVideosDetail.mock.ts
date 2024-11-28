import { HttpHandler, HttpResponse, http } from "msw";
import { getVideoDetailURL } from "./getVideosDetail";

export const getMockVideosDetail: HttpHandler = http.get(getVideoDetailURL, () => {
  return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success);
});

export const GET_MOCK_VIDEOS_DETAIL = {
  success: {
    detail: {
      videoId: "UnuqQs5iKOc",
      title: "[#나라는가수] 수지 - 21 (원곡 : Gracie Abrams) | KBS 방송",
      description: `수지는 물복임? 딱복임?
        아니면 뮌헨에 찾아온 행복이자 축복임? 🪽
        
        독일 뮌헨을 촉촉한 가을 감성으로 물들인
        수지의 ’21’ (원곡 : Gracie Abrams) 🥹
        
        #나라는가수 🎤 11월 2일 (토) 밤 10시 40분 첫 방송
        
        #나라는가수 #독일뮌헨  #수지 #배수지 #선우정아 #소향 #에이티즈 #헨리 #나우 #자이로`,
      channelId: "UC3m0s5XAQydCtbLHc8j1Uog",
      channelTitle: "KBS 한국방송",
      thumbnail: {
        url: "https://i.ytimg.com/vi/UnuqQs5iKOc/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      publishedAt: "2024-10-11T08:42:22Z",
      publishedAtDisplayText: "1개월 전",
      viewCount: 236961,
      viewCountDisplayText: "23만",
      likeCount: 6393,
      likeCountDisplayText: "6,393",
      dislikeCount: 0,
      dislikeCountDisplayText: "0",
      channelInfo: {
        title: "KBS 한국방송",
        description:
          "대한민국 대표 공영방송 KBS(Korean Broadcasting System) 의 공식 유튜브 채널 입니다. 재미있고 유익한 소식을 전하겠습니다.",
        customUrl: "@1004kbs",
        thumbnail: {
          url: "https://yt3.ggpht.com/ugtqI-46OxffwzCm3ajRh85hzz6vonWOrsBtrfx0K9VokxLeDU_b1B0tdxONukEPXUGjfHjwpg=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        viewCount: 2266705032,
        viewCountDisplayText: "22억",
        subscriberCount: 2290000,
        subscriberCountDisplayText: "229만",
        hiddenSubscriberCount: false,
      },
    },
  },
};
