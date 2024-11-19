import { HttpHandler, HttpResponse, http } from "msw";
import { getSearchVideosListURL } from "./getSearchVideosList";

export const getMockSearchVideosList: HttpHandler = http.get(getSearchVideosListURL, () => {
  return HttpResponse.json(GET_MOCK_SEARCH_VIDEOS_LIST.success);
});

export const GET_MOCK_SEARCH_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "UnuqQs5iKOc",
        title: "[#나라는가수] 수지 - 21 (원곡 : Gracie Abrams) | KBS 방송",
        description:
          "수지는 물복임? 딱복임? 아니면 뮌헨에 찾아온 행복이자 축복임? 독일 뮌헨을 촉촉한 가을 감성으로 물들인 수지의 '21' (원곡 ...",
        channelId: "UC3m0s5XAQydCtbLHc8j1Uog",
        channelTitle: "KBS 한국방송",
        thumbnail: {
          url: "https://i.ytimg.com/vi/UnuqQs5iKOc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-10-11T08:42:22Z",
        publishedAtDisplayText: "1개월 전",
      },
      {
        videoId: "KNgNCpP7u_4",
        title: "수지랑 똑닮은 앞머리 내린 카즈하 #shorts",
        description:
          "그건 확실해 둘 다 진짜 예뻐 #르세라핌 #카즈하 #수지 ============================== 제작 문의 : ddaitshu@gmail.com ...",
        channelId: "UCaZ-lZB1njhgPijuvb7s64g",
        channelTitle: "다 잇슈(DA ISSUE)",
        thumbnail: {
          url: "https://i.ytimg.com/vi/KNgNCpP7u_4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-03-12T02:20:48Z",
        publishedAtDisplayText: "8개월 전",
      },
      {
        videoId: "3dwwmCdtRvA",
        title: "수지가 수지한 시절 #shorts 다른 남자말고 너",
        description: "",
        channelId: "UCacdJgGjbwRwlawZgSyVH5w",
        channelTitle: "이아돌[LeeADol] -雅英",
        thumbnail: {
          url: "https://i.ytimg.com/vi/3dwwmCdtRvA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-10T02:10:00Z",
        publishedAtDisplayText: "1일 전",
      },
      {
        videoId: "Idx-47OS1Gk",
        title: "Short  수지옆 지수",
        description: "수지 #한사장테레비.",
        channelId: "UCXbBDM1CFNvhdZr7eh_yZSg",
        channelTitle: "모두의 후기-실물 현장",
        thumbnail: {
          url: "https://i.ytimg.com/vi/Idx-47OS1Gk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-07-30T00:50:00Z",
        publishedAtDisplayText: "3년 전",
      },
      {
        videoId: "xo5XwxsQG9w",
        title: "마음씨가 얼굴만큼 예쁘다는 수지..💗｜SUZY [MTN 직캠]",
        description:
          "9일, 영화 '원더랜드(WONDERLAND)' 제작보고회가 열렸습니다! 개봉 이전부터 초호화 캐스팅으로 상반기 기대작으로 꼽힌 '원더 ...",
        channelId: "UC6y6hbm6ryM6I4OTKhwqMaw",
        channelTitle: "MTN STAR",
        thumbnail: {
          url: "https://i.ytimg.com/vi/xo5XwxsQG9w/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-05-09T04:07:22Z",
        publishedAtDisplayText: "6개월 전",
      },
      {
        videoId: "50lXQzBMmmk",
        title: "한소희, 수지로 보는 광고 모델별 이미지 차이 #shorts",
        description: "",
        channelId: "UCJkLyO2HB3zfDUd_W2UOCZg",
        channelTitle: "패션탐정냥",
        thumbnail: {
          url: "https://i.ytimg.com/vi/50lXQzBMmmk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-06-12T10:00:05Z",
        publishedAtDisplayText: "5개월 전",
      },
      {
        videoId: "PctZCo32vIc",
        title:
          "수지, 고막에 전율을 흐르게 한 ‘좋니 여자 버전’ 열창  | 박진영의 파티피플 (PARTY PEOPLE) | SBS ENTER.",
        description:
          "수지 #좋니 #파티피플 박진영의 파티피플 11회 SBS 20171015 수지는 윤종신 '좋니'를 여자 버전으로 부르는 모습을 보여준다.",
        channelId: "UCmjNKt6kITwaZTqvWuaSPLg",
        channelTitle: "SBS Entertainment",
        thumbnail: {
          url: "https://i.ytimg.com/vi/PctZCo32vIc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2017-10-14T16:50:25Z",
        publishedAtDisplayText: "7년 전",
      },
      {
        videoId: "T0e0kuNMHyU",
        title: "수지 왕따 구분법으로 도 넘은 행동한 멤버들",
        description: "수지왕따 #수지왕따인터뷰 #수지왕따무대.",
        channelId: "UCH9TEq76pujGPUquE_thwLQ",
        channelTitle: "빨간이슈 RedIssue",
        thumbnail: {
          url: "https://i.ytimg.com/vi/T0e0kuNMHyU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2022-11-02T10:00:16Z",
        publishedAtDisplayText: "2년 전",
      },
      {
        videoId: "V4Ru4oAW-DE",
        title: "수지 와일스는 누구?",
        description: "",
        channelId: "UCjbM7orghsFef8yaoOEn-Rg",
        channelTitle: "남궁피터",
        thumbnail: {
          url: "https://i.ytimg.com/vi/V4Ru4oAW-DE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-08T13:03:54Z",
        publishedAtDisplayText: "2일 전",
      },
      {
        videoId: "fMepe_sNMSw",
        title: "수지(Suzy) &quot;Yes No Maybe&quot; Dance Practice (Close Up Ver.)",
        description: `수지(Suzy) "Yes No Maybe" Dance Practice Download Suzy's "Yes? No?" on iTunes: ...`,
        channelId: "UC7ukOKu7-6G-m5d4hOXrhfQ",
        channelTitle: "Suzy",
        thumbnail: {
          url: "https://i.ytimg.com/vi/fMepe_sNMSw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2017-01-29T04:39:34Z",
        publishedAtDisplayText: "7년 전",
      },
      {
        videoId: "ZkTeeP_2-EU",
        title:
          "[SUB/수지 1편] 노래하고 예쁘고 귀엽고 웃기고... 그 어려운 걸 수지가 해냅니다..💖| EP.09 | 조현아의 목요일 밤 | 수지 조현아",
        description:
          "조현아의목요일밤 #조현아 #수지 #suzy @suzy5370 ✨익스클루시브 하이퀄리티 프리미엄 어반 원앤온리 고품격 뮤직 토크쇼!",
        channelId: "UCajIIDVO5CxW6DroTqWrSoA",
        channelTitle: "쿵 스튜디오(Koong Studio)",
        thumbnail: {
          url: "https://i.ytimg.com/vi/ZkTeeP_2-EU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-03-30T10:00:28Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "bGGa7zQTtqQ",
        title: "쌩얼로 데뷔했어도 성공했을 수지",
        description: "수지 #suzy ##shorts.",
        channelId: "UCW-yKB8JwCUyWnQZt8Lvdyg",
        channelTitle: "비어굿맨",
        thumbnail: {
          url: "https://i.ytimg.com/vi/bGGa7zQTtqQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-05-07T18:25:59Z",
        publishedAtDisplayText: "6개월 전",
      },
      {
        videoId: "WfYgbFBFe1E",
        title: "[MV] 수지(Suzy), 백현(BAEKHYUN) - Dream",
        description:
          "Download on iTunes : https://apple.co/2Fmcsss Lyric by 김이나 Composed, Arranged by 박근태, 최진석 미스틱스토리 MYSTIC ...",
        channelId: "UCFAvMvIqZA7sAKOD4Dz1V3A",
        channelTitle: "미스틱스토리 MYSTIC STORY",
        thumbnail: {
          url: "https://i.ytimg.com/vi/WfYgbFBFe1E/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2016-01-06T15:00:01Z",
        publishedAtDisplayText: "8년 전",
      },
      {
        videoId: "7VWQ7vFra40",
        title: "수지 레전드 짤 #shorts",
        description: "드라마 - 배가본드 #배가본드 #쇼츠 #드라마리뷰.",
        channelId: "UCMiWcOPUqs9cztKzknapeXQ",
        channelTitle: "쇼츠무비",
        thumbnail: {
          url: "https://i.ytimg.com/vi/7VWQ7vFra40/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-05-11T12:53:50Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "UKgUMcBuonA",
        title: "에피소드 소생 시키는 지독한 연기력!😍 인간 복사기🖨 #이수지 모음집 | KBS 방송",
        description:
          "옥탑방의문제아들 ✓ 수요일 저녁 8시 30분 KBS 2TV #홍김동전 ✓ 목요일 저녁 8시 30분 KBS 2TV 에피소드 갱생력 갑   이수지 ...",
        channelId: "UC3m0s5XAQydCtbLHc8j1Uog",
        channelTitle: "KBS 한국방송",
        thumbnail: {
          url: "https://i.ytimg.com/vi/UKgUMcBuonA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-02-09T09:00:41Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "l1qTE_7CYO0",
        title: "카리나는 하는데 수지는 안 하는 청순 메이크업 팁",
        description: "카리나 #에스파 #아마겟돈 #수지 #메이크업 #karina #suzy #aespa.",
        channelId: "UCuq6kOmu9TpcN_K6zieWXqg",
        channelTitle: "아이",
        thumbnail: {
          url: "https://i.ytimg.com/vi/l1qTE_7CYO0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-06-11T09:47:23Z",
        publishedAtDisplayText: "5개월 전",
      },
      {
        videoId: "rS6ujvWfzU4",
        title: "독일에서 포착된 수지ㄷㄷ",
        description: "",
        channelId: "UCnn7WqIi0m8atp672UXFVuw",
        channelTitle: "여기있슈",
        thumbnail: {
          url: "https://i.ytimg.com/vi/rS6ujvWfzU4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-09-18T11:22:28Z",
        publishedAtDisplayText: "1개월 전",
      },
      {
        videoId: "7mC4c-qjkAM",
        title: "섹드립이 난무하는 연륜 넘치는 산악회 #이수지",
        description:
          "재밌는동영상 #유머 #연말 #공감 #개그 #드립 #주현영 #연애 #스케치코미디 #이수지 해당 영상은 '쿠팡플레이 유튜브 채널에서' 원본 ...",
        channelId: "UCYN6fVHEzVlk7SFpGCMKd0g",
        channelTitle: "쾌변숏츠",
        thumbnail: {
          url: "https://i.ytimg.com/vi/7mC4c-qjkAM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-10-20T07:00:05Z",
        publishedAtDisplayText: "3주 전",
      },
      {
        videoId: "kdoKAVhVGog",
        title:
          "&quot;수지 언니 사귀어요&quot; 말에 박보검의 단호한 한마디ㅋㅋ😂😂 (풀영상은 댓글 공지!) #수지 #박보검 #원더랜드 #무대인사",
        description:
          "원더랜드 #탕웨이 #수지 #배수지 #박보검 #정유미 #최우식 #공유 #김태용감독 #wonderland #tangwei #suzy #parkbogum ...",
        channelId: "UC2tJF1YfuXNyHZSMNx0ygDw",
        channelTitle: "원피소 ONEPIECE Figure Mania",
        thumbnail: {
          url: "https://i.ytimg.com/vi/kdoKAVhVGog/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-06-09T10:58:38Z",
        publishedAtDisplayText: "5개월 전",
      },
      {
        videoId: "tIzZPCaOnQE",
        title:
          "감옥에서 편의점 음식이 나온다고?! 수지와 엄마 감옥먹방 신라면볶음면 컵라면 급식 Jelly Mukbang [수지패밀리]",
        description: "",
        channelId: "UCJyIPa80gqB24_kEmznlSYA",
        channelTitle: "수지패밀리",
        thumbnail: {
          url: "https://i.ytimg.com/vi/tIzZPCaOnQE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-08-23T06:15:00Z",
        publishedAtDisplayText: "3년 전",
      },
    ],
    nextPageToken: "CBQQAA",
    totalResults: 1000000,
  },
};
