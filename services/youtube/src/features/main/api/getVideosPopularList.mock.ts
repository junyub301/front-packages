import { HttpHandler, http, HttpResponse } from "msw";
import { getVideosPopularListUrl } from "./getVideosPopularList";

export const getMOckVideosPopularList: HttpHandler = http.get(getVideosPopularListUrl, () => {
  return HttpResponse.json(GET_MOCK_VIDEOS_POPULAR_LIST.success);
});

export const GET_MOCK_VIDEOS_POPULAR_LIST = {
  success: {
    lists: [
      {
        videoId: "mp2JmllkjbM",
        title: "[EN/JP] 영원한 건 절대 있어…☘️ | 7년만에 돌아온 빅뱅 | 집대성 ep.29",
        description:
          "🏠집 밖으로 나온 대성 [집대성]🏠\n#대성  #GD  #태양 #빅뱅 #bigbang \n\n두둥- !\n감격스런 GDx태양 출연을 기념하여 준비한\n모에브 할인 프로모션 대공개 ( ˶'ᵕ'💐)💕\n \n모에브 아누카틴 샴푸 & 트리트먼트 EVENT\n단 7일, 11/5~11/12 동안만 진행합니다 ✧･ﾟ\n\n╭───────╮\n1개 구매시 [54% 할인]\n2개 구매시 [60% 할인]\n4개 구매시 [68% 할인]\n╰───────╯\n이벤트 링크 👉 https://bit.ly/3YH52pS\n \n치솟는 인기의 모에브 아누카틴 샴푸,\n이제 올리브영 온라인몰에서도 만나보실 수 있어요!\n#moev #모에브 #한예슬샴푸\n\n💥매주 금요일 오후 6시 새로운 외출 공개🏃💨\n💛구독 & 좋아요 & 알림 설정 부탁드려요~ ◠‿◠ 💛\n\n인스타그램 : https://www.instagram.com/zip____ds\n\n비즈니스 및 광고 문의   \n👉 www.azing.kr 👈\n👉 azingcontents@azing.kr  👈\n\n*본 영상과 관련 없는 내용의 댓글, 욕설 및 스팸 광고를 포함한 댓글, 명예 훼손의 소지가 있는 등의 댓글은 통보 없이 삭제될 수 있습니다.",
        channelId: "UC64aGo-8uz1dndBAB3VtL2w",
        channelTitle: "집대성",
        thumbnail: {
          url: "https://i.ytimg.com/vi/mp2JmllkjbM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-05T09:00:06Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 3349880,
        viewCountDisplayText: "334만",
      },
      {
        videoId: "B9jEzsKqN48",
        title: "[SUB] 아미님 우리 진이가 너무 잘해요 | EP.64 진 | 살롱드립2",
        description:
          "진짜로.\n진솔하게.\n진지함 가득.\n진담 하나 할게요.\n진짜 월와핸 마인드도 월와핸. \n진심으로 사랑해요 BTS 진! 💜💜💜\n\n[살롱드립2] 매주 화요일 오후 6시 테오 유튜브에서 공개\n#BTS #진 #장도연 #살롱드립2 #SalonDrip #TEO #테오 #JIN\n\n*본 영상과 무관한 내용의 댓글과 출연자에 대한 무분별한 욕설, 비난 및 조롱 등 악의적인 댓글은 무통보 삭제될 수 있습니다. (Hateful comments or indiscriminate swearing, criticism, and ridicule of the cast may be deleted without notice.)\n\n*본 영상은 유료 광고를 포함하고 있습니다. (This video includes sponsored content.)\n\n◼️TEO 공식 SNS \n➡️https://www.youtube.com/@TEO_universe\n➡️https://www.instagram.com/teo.universe/\n➡️https://twitter.com/TEO_universe_",
        channelId: "UC-uIpGINZDL-VIHQQzJW8jw",
        channelTitle: "TEO 테오",
        thumbnail: {
          url: "https://i.ytimg.com/vi/B9jEzsKqN48/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-05T09:00:06Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 1278695,
        viewCountDisplayText: "127만",
      },
      {
        videoId: "DQ5sNcR5j5A",
        title: "Angel Edgar VS Demon Mortis - Animation",
        description:
          "The #AngelsVsDemons Season starts TOMORROW in Brawl Stars! Are you team Angel or Demon?\n\nDownload NOW!! ►► https://supr.cl/2K62CZG\nSubscribe!! ►► https://supr.cl/subscribe\n\n#brawlstars #animation",
        channelId: "UCooVYzDxdwTtGYAkcPmOgOw",
        channelTitle: "Brawl Stars",
        thumbnail: {
          url: "https://i.ytimg.com/vi/DQ5sNcR5j5A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-06T09:15:40Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 7594981,
        viewCountDisplayText: "759만",
      },
      {
        videoId: "NiH77TWSjFw",
        title:
          "👸EP.2 | 채림이 전 남편에게 전화한 이유? 아빠를 위해 중국어를 배우는 민우! [솔로라서] 매주 (화) 밤 8시 40분 본방송",
        description:
          "#솔로라서 #신동엽 #황정음 #명세빈 #채림 #오정연 #윤세아 #E채널\n\n채림&민우 모자의 첫 해외여행지는 중국?\n채림의 말문을 막히게 한 민우의 질문에\n쿨~하게 이야기 해주는 채림의 대답?\n\n2회 2024.11.5 방영\n\n👸[솔로라서] 매주 (화) 밤 8시 40분 본방송\n📺[E채널] 채널 번호 👉 지니TV 48번 | Btv 36번 | U+tv 76번 | Skylife 44번\n📺[E LIKE] 채널 번호 👉 Btv 61번 | U+tv 92번 | Skylife 147번\n💝[E채널] 인스타그램 👉 @echannel_tcast\n\n※ 출연자에 대한 무분별한 비방 및 욕설은 무통보 삭제 처리됩니다. 시청자 여러분의 양해 바랍니다.",
        channelId: "UCjToDBf8P-4QkETw2kJ-H3g",
        channelTitle: "E채널",
        thumbnail: {
          url: "https://i.ytimg.com/vi/NiH77TWSjFw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-05T14:03:00Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 794338,
        viewCountDisplayText: "79만",
      },
      {
        videoId: "MNi2RYArHWQ",
        title: "유경몬이 퇴사합니다.. 고생했어 유경아 !!",
        description:
          "#유경몬 #퇴사 #막내\n\nhttps://www.hemekolab.com\n매일 새로운 뷰티플랫폼 헤메코랩 :)\n하나만 사도 무료배송 \n\n\n기우쌤 인스타그램\n@kiu_design_\n\n망한머리대회 지원\nvunulmoon@naver.com\n머리자랑대회 혹은 사연 신청\nvunulmoon1@naver.com",
        channelId: "UCIZ5rCTYJ0s16FgT7OetVEQ",
        channelTitle: "kiu기우쌤",
        thumbnail: {
          url: "https://i.ytimg.com/vi/MNi2RYArHWQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-06T08:15:01Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 579897,
        viewCountDisplayText: "57만",
      },
      {
        videoId: "yky-3enXqtU",
        title: "19시간 실크로드 택시기행 - 타지키스탄(1)",
        description:
          "안녕하세요\n오래간만에 여행기로 찾아 뵙습니다\n기다려주신 분들께 죄송하고 감사합니다\n\n-------------------------------------------------------------------------------\ninsta : @jbkwak\nmail : wnsqls3@gmail.com\n촬영장비 : 고프로 히어로 12 블랙\n편집 : 맥북프로 16인치, 파이널컷 X\n음원 : Epidemic sound&Artlist",
        channelId: "UClRNDVO8093rmRTtLe4GEPw",
        channelTitle: "곽튜브",
        thumbnail: {
          url: "https://i.ytimg.com/vi/yky-3enXqtU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-05T03:00:19Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 642063,
        viewCountDisplayText: "64만",
      },
      {
        videoId: "xymOwIcqQnE",
        title:
          "원조 대식가(히밥아빠)와 현 실세 대식가(히밥)의 위대한 부녀지간 솥뚜껑 라면 먹방..내가 뭘 보고있는거야?",
        description:
          "#히밥 #아빠 #라면 \n\n각국어 번역 자막 제작 : \n컨텐츠 제작의 마무리는 컨텐츠플라이! 글로벌 진출을 위한 최고의 파트너,\nCONTENTSFLY에서 제작되었습니다.\nhttps://www.contentsfly.com",
        channelId: "UCA6KBBX8cLwYZNepxlE_7SA",
        channelTitle: "히밥heebab",
        thumbnail: {
          url: "https://i.ytimg.com/vi/xymOwIcqQnE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-05T09:26:55Z",
        publishedAtDisplayText: "2일 전",
        viewCount: 792737,
        viewCountDisplayText: "79만",
      },
      {
        videoId: "NtlEhCj50Nw",
        title: "❝동경하는 최애 형이 서프라이즈로 나타난다면?❞ | 시리도록 눈부신 성덕이 될래료",
        description:
          "NCT Official\nhttps://www.youtube.com/nctsmtown\nhttps://www.instagram.com/nct\nhttps://www.tiktok.com/@official_nct\nhttps://twitter.com/NCTsmtown\nhttps://www.facebook.com/NCT.smtown\n\n#DOYOUNG #RYO #시리도록눈부신성덕이될래료\n#시리도록눈부신 #DOYOUNG_시리도록눈부신\n#NCT #NCT127 #NCTWISH",
        channelId: "UCwgtORdDtUKhpjE1VBv6XfA",
        channelTitle: "NCT",
        thumbnail: {
          url: "https://i.ytimg.com/vi/NtlEhCj50Nw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-06T13:00:25Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 247540,
        viewCountDisplayText: "24만",
      },
      {
        videoId: "oTU9yVPZ0YE",
        title: "전유진(﻿チョンユジン) - 사랑에세이(﻿﻿﻿﻿﻿﻿愛のエッセイ)｜한일톱텐쇼 24회",
        description:
          "한일톱텐쇼 24회 MBN 241105 방송\n\n한국과 일본의 트롯 국가대표 Top7이 펼치는 한일 음악 국가 대항전!\n매주 화요일 밤 10시 많은 관심 부탁드립니다♡\n\n#한일톱텐쇼 #전유진 #チョンユジン #﻿사랑에세이 #﻿愛のエッセイ",
        channelId: "UCsxbX6QnOLal_qzzMK9AR9g",
        channelTitle: "MBN MUSIC",
        thumbnail: {
          url: "https://i.ytimg.com/vi/oTU9yVPZ0YE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-05T15:16:00Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 286496,
        viewCountDisplayText: "28만",
      },
      {
        videoId: "waCOmax4RGk",
        title:
          "오늘은 절대 안 싸우기로 약속했다.. (HAPPY(DAY6) - 프로미스나인 송하영, 박지원 COVER) | 연고지 4화🗺️",
        description:
          "현지인이 말아주는 풀코스, 연고지📍\n네 번째 '연고지'의 가이드는 광주 토박이\n프로미스나인의 하영, 그리고 광주에 놀러 온 룸메즈 지원!\n\n응답하라 1997! 교복 챙겨 입고 돌아다니는 하영의 광주 추억 투어\n시작부터 티격태격 삐거덕 난리 났지만 부부 싸움은 칼로 물 베기?!\n음식 맛있고 정 가득한 빛고을 광주로 놀러오시랑께~~~\n\n‘송하영의 광주 젊꼰 풀코스' 구경하기\n▶️ https://maps.app.goo.gl/33MDep2ELp1Mroys7\n\n#연고지 #채널일 #제일기획 #프로미스나인 #하영 #지원",
        channelId: "UCaacVyLPR5gJRieZ0yKwnkQ",
        channelTitle: "제일기획 [Cheil Worldwide] 채널일",
        thumbnail: {
          url: "https://i.ytimg.com/vi/waCOmax4RGk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2024-11-06T09:00:58Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 278192,
        viewCountDisplayText: "27만",
      },
    ],
    nextPageToken: "CAoQAA",
    totalResults: 200,
  },
};
