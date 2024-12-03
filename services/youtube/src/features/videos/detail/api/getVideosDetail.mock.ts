import { HttpHandler, HttpResponse, http } from "msw";
import { getVideoDetailURL } from "./getVideosDetail";

export const getMockVideosDetail: HttpHandler = http.get(getVideoDetailURL, () => {
  return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success);
});

export const GET_MOCK_VIDEOS_DETAIL = {
  success: {
    detail: {
      videoId: "mp2JmllkjbM",
      title: "[SUB] 영원한 건 절대 있어…☘️ | 7년만에 돌아온 빅뱅 | 집대성 ep.29",
      description: `🏠집 밖으로 나온 대성 [집대성]🏠
    #대성  #GD  #태양 #빅뱅 #bigbang 
    
    두둥- !
    감격스런 GDx태양 출연을 기념하여 준비한
    모에브 할인 프로모션 대공개 ( ˶'ᵕ'💐)💕
    
    집장인 분들은 아래 할인 링크에서
    풍성한 혜택으로 만나보세요 ✧･ﾟ
    
    ╭─────────────╮
    모에브 아누카틴 샴푸
    모에브 아누카틴 트리트먼트
    모에브 아누카틴 헤어오일 에센스 (NEW!)
    ╰─────────────╯
    
    할인 링크 👉 https://bit.ly/3YH52pS
    
    치솟는 인기의 모에브 아누카틴 샴푸,
    올리브영 온라인몰에서 만나보세요!
    #moev #모에브 #한예슬샴푸
    
    💥매주 금요일 오후 6시 새로운 외출 공개🏃💨
    💛구독 & 좋아요 & 알림 설정 부탁드려요~ ◠‿◠ 💛
    
    https://www.instagram.com/zip____ds
    https://www.tiktok.com/@zip_ds
    
    비즈니스 및 광고 문의   
    👉 www.azing.kr 👈
    👉 azingcontents@azing.kr  👈
    
    *본 영상과 관련 없는 내용의 댓글, 욕설 및 스팸 광고를 포함한 댓글, 명예 훼손의 소지가 있는 등의 댓글은 통보 없이 삭제될 수 있습니다.`,
      channelId: "UC64aGo-8uz1dndBAB3VtL2w",
      channelTitle: "집대성",
      thumbnail: {
        url: "https://i.ytimg.com/vi/mp2JmllkjbM/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      publishedAt: "2024-11-05T09:00:06Z",
      publishedAtDisplayText: "0개월 전",
      viewCount: 6098002,
      viewCountDisplayText: "609만",
      likeCount: 195992,
      likeCountDisplayText: "19만",
      dislikeCount: 0,
      dislikeCountDisplayText: "0",
      commentCount: 12587,
      commentCountDisplayText: "1만",
      channelInfo: {
        title: "집대성",
        description: `찐 집돌이 ISFJ 대성이의 집 밖 나들이쑈! 
    집대성에 오신 걸 환영합니다 😍
    
    💥매주 금요일 오후 6시 새로운 외출 공개🏃💨
    💛구독 & 좋아요 & 알림 설정 부탁드려요~ ◠‿◠ 💛
    
    비즈니스 및 광고 문의   
    👉 www.azing.kr 👈
    👉 azingcontents@azing.kr  👈
    
    `,
        customUrl: "@zip_ds",
        thumbnail: {
          url: "https://yt3.ggpht.com/ifX-NKc5V9UpAAU1utykY1BQfRJM7e0q_5FebSkqN8BXStYQrtvYl6mjRyy1um0DjoySPu0X=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        viewCount: 97507853,
        viewCountDisplayText: "9750만",
        subscriberCount: 678000,
        subscriberCountDisplayText: "67만",
        hiddenSubscriberCount: false,
      },
    },
  },
};
