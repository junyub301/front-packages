import { HttpHandler, HttpResponse, http } from "msw";
import { getVideosDetailCommentListURL } from "./getVideosDetailCommentList";

export const getMockVideosDetailCommentList: HttpHandler = http.get(getVideosDetailCommentListURL, () => {
  return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST.success);
});
export const GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST = {
  success: {
    lists: [
      {
        commentId: "UgwuiglOTGdNJwkd3Ip4AaABAg",
        textDisplay:
          "GD “ We can’t get back together since we never broke up.” omg my vip heart..I’m crying.",
        authorDisplayName: "@pink24eden",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_lbOr6HFOHdYRoGMLNeAOqU11JHftpOaTng8SGaP6yZxMU=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1476,
        likeCountDisplayText: "1,476",
        publishedAt: "2024-11-05T13:52:25Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 1,
      },
      {
        commentId: "Ugz4phgHww6VBlhzPjV4AaABAg",
        textDisplay:
          "지디가 왜 항해사 옷을 입었나 했더니 봄여름가을 마지막에 배를타고 떠나는데...항해를 마치고 돌아왔다는걸 표현했구나 대박",
        authorDisplayName: "@최태성-i6c",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_mF8QApr2KHOP2yK07-92KQR2gOaD9f1YPrhdfeiiQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 23637,
        likeCountDisplayText: "2만 3,637",
        publishedAt: "2024-11-05T13:04:24Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 119,
      },
      {
        commentId: "UgxbJGvgWot3AaqWqa54AaABAg",
        textDisplay:
          "태양은 진짜 진국이다.. 지디는 컴백, 대성이는 채널주인인데 태양은 진짜 아무 이유 없이 팬들한테 빅뱅 보여주려고 나왔네",
        authorDisplayName: "@떼껄룩-c8s",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/AMgaT0tvRbrFqUL1JVt5rlzGB3LyCc7AVEq_hKDRTKbPYGBjSvdxhz41JFGgJ8pxGF02RbDNyg=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 16632,
        likeCountDisplayText: "1만 6,632",
        publishedAt: "2024-11-05T09:27:29Z",
        publishedAtDisplayText: "0개월 전",
        isUpdated: false,
        totalReplyCount: 38,
      },
      {
        commentId: "UgxGrGhHIQHRN7FC4kx4AaABAg",
        textDisplay:
          "대성이가 진짜 천성이 막내 같네<br>막내 역할을 진짜 완벽하게 해낸다 안이뻐할수가 없는 스타일",
        authorDisplayName: "@YHJ2070",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/8nNY9Fkubnjyswq1GBorOcbedJl5lIFMMIIXRe6ARlq6hCocofvjqlE-rrENm8KhLEHjc44USag=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1452,
        likeCountDisplayText: "1,452",
        publishedAt: "2024-11-26T07:04:52Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 1,
      },
      {
        commentId: "Ugycuzv4eEtwknYCV754AaABAg",
        textDisplay:
          "태양 보면 볼 수록 먼가 든든해<br>지디가 평소 정말 의지 많이 했을거 같음 ㅋㅋㅋㅋㅋㅋ 사람이 먼가 단단해",
        authorDisplayName: "@미설정인",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_kHG_rxlRoYQd0QQnl1qhob9N5rCPFkFN1r60jd46y01Ik=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 12610,
        likeCountDisplayText: "1만 2,610",
        publishedAt: "2024-11-05T12:56:16Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 34,
      },
      {
        commentId: "Ugzix960Hr_x5QYCg_h4AaABAg",
        textDisplay:
          "우린 재결합이라고 하기엔 헤어진적이 없다<br>우린 재결합이라고 하기엔 헤어진적이 없다<br>우린 재결합이라고 하기엔 헤어진적이 없다<br>우린 재결합이라고 하기엔 헤어진적이 없다<br>우린 재결합이라고 하기엔 헤어진적이 없다<br>우린 재결합이라고 하기엔 헤어진적이 없다<br>나 울어 ... 사랑해 빅뱅 영원해 빅뱅",
        authorDisplayName: "@user-smalltomato",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_npAwIjTMxG8zbUozg-TGFS8_-bqFytzcRq5P8A7YA=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 15668,
        likeCountDisplayText: "1만 5,668",
        publishedAt: "2024-11-05T12:39:18Z",
        publishedAtDisplayText: "0개월 전",
        isUpdated: false,
        totalReplyCount: 41,
      },
      {
        commentId: "Ugx_-7cLPt_LkxLCLt14AaABAg",
        textDisplay: "무편집본 올려도 다 볼 자신있음",
        authorDisplayName: "@bbabybottle",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/3uqHkHO8NDGjqLg3PDe01Fu6krmakhgWdBPz7uOvodg_0GIlnk0NA7yHli8mWgkD97UbrAr9SQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 34643,
        likeCountDisplayText: "3만 4,643",
        publishedAt: "2024-11-05T08:52:59Z",
        publishedAtDisplayText: "0개월 전",
        isUpdated: false,
        totalReplyCount: 173,
      },
      {
        commentId: "UgxQY7fbeXc_9cD4oX94AaABAg",
        textDisplay: "빅뱅 마마 보고 다시 오신 분! 진짜 행복해보여 좋다",
        authorDisplayName: "@홍길동-g7o9t",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_ltB6DvGUg1M3Mb4P7lsPvYf_f2xfuiKTEwaP_tLm0=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 740,
        likeCountDisplayText: "740",
        publishedAt: "2024-11-24T13:15:13Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgytbL7EO7nsOYNR69J4AaABAg",
        textDisplay: "태양 말 너무 잘한다... 지디를 움직이는 이유가 있었음",
        authorDisplayName: "@chil1isauce",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/qa0325nXz9cNpIvvQRIiNbui8kQtGWXAZbnL-YsFbQJFN_uJpAU2MtfXETo1uGuRIuJpHKDjEQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 7746,
        likeCountDisplayText: "7,746",
        publishedAt: "2024-11-05T11:00:56Z",
        publishedAtDisplayText: "0개월 전",
        isUpdated: false,
        totalReplyCount: 6,
      },
      {
        commentId: "UgyHIlWxmpmfKqJRf5Z4AaABAg",
        textDisplay: `지디 <a href="https://www.youtube.com/watch?v=mp2JmllkjbM&amp;t=1380">23:00</a> 에 울고 “맨날 멋질수는 없을수도 있어요”라는 말이 왜이렇게 울컥해? 권지용 부담가지지마 그냥 행복하기만 해줘 제발`,
        authorDisplayName: "@엉어-x6f",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_kl5DflvSAt5cCateTrSwaLn4GBN9r6Kpu3KbWBVHt3T53dfl0=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 11971,
        likeCountDisplayText: "1만 1,971",
        publishedAt: "2024-11-05T09:59:49Z",
        publishedAtDisplayText: "0개월 전",
        isUpdated: false,
        totalReplyCount: 47,
      },
      {
        commentId: "UgzGl3TKYQbDErERY394AaABAg",
        textDisplay: "지디가 빅뱅 참 소중히 생각하는듯<br><br>빅뱅 소중히 생각하는 3명만 남은듯",
        authorDisplayName: "@조대훈-r1g",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_nQJ0DX5AL3DEzFlY6jtTy5__ugDNHk24sPAnIKn8o=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 6602,
        likeCountDisplayText: "6,602",
        publishedAt: "2024-11-05T14:54:46Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 8,
      },
      {
        commentId: "UgyPUNp__8nrOun8Jv94AaABAg",
        textDisplay: "보면 볼 수록 대성 막내역할 잘하고 센스 미친거 같다.<br>형들이 이뻐할만하네.",
        authorDisplayName: "@케이-u3v",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_ns0OGtrm4FME_ZzGGrEvDWUeTgq-piEYo6gQkQYXtaBw=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 187,
        likeCountDisplayText: "187",
        publishedAt: "2024-11-29T13:58:31Z",
        publishedAtDisplayText: "3일 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgxA1Yuc23AXlHY4eHd4AaABAg",
        textDisplay: "빅뱅은 태양이라는 기둥을 대성이 뒷받침하여 지디가 앞으로 끌고 가던게 맞았구나...",
        authorDisplayName: "@Comfortable_J",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_l3FKPQPE4EFL40qPq5tv3R7dImHGSgRzsDQwqA1iwiEqI=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 17663,
        likeCountDisplayText: "1만 7,663",
        publishedAt: "2024-11-06T01:13:49Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 58,
      },
      {
        commentId: "UgyFwk-2zttJjxdBB0V4AaABAg",
        textDisplay: `<a href="https://www.youtube.com/watch?v=mp2JmllkjbM&amp;t=1340">22:20</a> 팬들에게 답한 말이었지만<br>힘들어했던 친구(지디)에게 해주고 싶은 말이었던게 느껴진다.. <br>태양 참 따뜻한사람임`,
        authorDisplayName: "@hj5307",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/zCEHtQTwt8CTIwqLyAtFMQAcnn2xaVBn2EB3UmChmWhd4cW6ukEE-6JRjvPaXBqKB4Snsct2=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 10122,
        likeCountDisplayText: "1만 122",
        publishedAt: "2024-11-05T11:30:41Z",
        publishedAtDisplayText: "0개월 전",
        isUpdated: false,
        totalReplyCount: 21,
      },
      {
        commentId: "Ugzhe4ETSMsfzI8Ax294AaABAg",
        textDisplay:
          "지디도 지디지만 이거 보고 알았다 빅뱅의 단단한 뿌리는 태양이다. 태양 이 사람은 절대 안 망할 것 같음",
        authorDisplayName: "@mapdamehwar4137",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_lTB7X0ZJXCyIiJjrTxOgDMgU5qneeL6BfFeh0rcyA=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 5703,
        likeCountDisplayText: "5,703",
        publishedAt: "2024-11-05T16:27:43Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 15,
      },
      {
        commentId: "UgxfZx1o0-6wuegFcht4AaABAg",
        textDisplay:
          "지디가 팬을 정말 사랑한다는게 느껴지네..<br>태양이 &quot;널 기다려줄게&quot;라고 말하는 순간 우는거보니까..<br>너무 마음아프다ㅠㅠ지디야 우리 이제 행복한 일들만 남았어 <br>다시한번 돌아와줘서 너무 고마워 행복하자!!!",
        authorDisplayName: "@rkskekfkakgd",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/Vlt3s4KRUmVHqrbVgpMW0G3PBxaUMVbJ91z2F1hnfvxdVULm62FIXfls5xciLDilrr0-RQF9oQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 126,
        likeCountDisplayText: "126",
        publishedAt: "2024-11-29T15:43:02Z",
        publishedAtDisplayText: "3일 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgzkUtlnkuca8pIuK8t4AaABAg",
        textDisplay: `<a href="https://www.youtube.com/watch?v=mp2JmllkjbM&amp;t=1315">21:55</a> 선장컨셉으로 가다가 항해 마치고 다른 길을 찾는다면서 모자 벗는거 개멋있네 진짜 이런거 보면 공석에서 어눌해지는게 아니라 생각 많이하는게 맞는 듯ㅋㅋ`,
        authorDisplayName: "@이진욱-m8q",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/sfOX_VETwV8Vok-K-lf1pK0nJ1DO5-PnWpZrwVRZYyrYf-LJNQmbvOL6YxvfAQWlX-TuU-oOCt4=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 7785,
        likeCountDisplayText: "7,785",
        publishedAt: "2024-11-05T10:06:14Z",
        publishedAtDisplayText: "0개월 전",
        isUpdated: true,
        totalReplyCount: 18,
      },
      {
        commentId: "UgwHZ2zArWu-w_DWeTd4AaABAg",
        textDisplay:
          "다 엄청 편해보이고 좋은데, <br>특히 태양.. 진짜 사람이 뭔가 안정적이면서 엄청 중심이 잘 잡혀있는 것 같은 느낌.",
        authorDisplayName: "@yo-yo-yo",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/7pZRLeeWrteBAAWJxzmP1IomDWe07kGCOEhatJT7xqMCKWP_XukFMNLDX_iFtQqVRA03J2xfvQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 4444,
        likeCountDisplayText: "4,444",
        publishedAt: "2024-11-05T14:30:27Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 8,
      },
      {
        commentId: "Ugz0E427XvprU7HsXm14AaABAg",
        textDisplay:
          "지디는 본인 솔로보다 빅뱅을 더 우선시 하던 사람이었음....빅뱅리더겸프로듀서였고...빅뱅에 본인 인생을 갈아넣었던사람이었음...그런 빅뱅이 본인의 의지가 아닌 다른 이유로 산산히 부서지는걸 군대에서 지켜보는 심정은 오죽했을까...이전의 슈퍼스타 지드래곤을 내려놓은 권지용의 7년이 그래서 마냥 아프지만은 않은 시간이었기를. .팬들이 사랑을 주어서 사랑하는 사이가 되었다가 웃으면서 말해주던 권지용...누구보다 니가 편해졌기를 기도한다.3명만 남은 빅뱅이지만...돌이켜보면 빅뱅을 제일 아꼈던 사람들만 남아 있구나 싶어서...그것 마저도 고맙네. 많이 보고싶었어 애들아. 너희가 최고였었던 시간은 변하지 않고 우리가 추억해. 언젠가 다시 빅뱅으로 돌아올날을 기다려.",
        authorDisplayName: "@happy-ik8xl",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/AIdro_kXgjNNOjTvGkrXGw4q1pAbCu7M-I-K6bIkb9Z0lHMMzPhH3nLuMROryic4Q9I3IjcbAQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 3388,
        likeCountDisplayText: "3,388",
        publishedAt: "2024-11-06T05:26:34Z",
        publishedAtDisplayText: "3주 전",
        isUpdated: false,
        totalReplyCount: 8,
      },
      {
        commentId: "UgwuOKeeNs6OAzlAIZx4AaABAg",
        textDisplay:
          "태양이 생각보다 단단한 사람이구나. 지디에 대한 깊은 애정과 팬들에 대한 사랑이 느껴진다.",
        authorDisplayName: "@Ksj-ft8xl",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/TvIzFpXsqDSqlmxUZroCtrFQn1-p7vKU5689lEQw_zxMy8MKUx64hvoGaXFZlmmdktNLQV6x_CA=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 230,
        likeCountDisplayText: "230",
        publishedAt: "2024-11-26T06:32:08Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
    ],
    nextPageToken:
      "Z2V0X3JhbmtlZF9zdHJlYW1zLS1DcVlCQ0lBRUZSZTMwVGdhbXdFS2xnRUkyRjhRZ0FRWUJ5S0xBVHY0UzdvTWpFSTE0aDVUMEIxX1RhZkJMWWN5cXJhRlh0ZWNOUVduT0ZqeENoQ3IzUTZwSU1LN2xOOXZ2ekIxNlowdWxSR1JINUpCcElvLUtNdUF2RVNucUdZcXFtMGlJT0pFbmxpUktnTkJxUzRqN3Z6UWhsbjNRT0VPelBZOE5pZUl3UGozLWlwcFhBNEQyNEJtTjZYdWI4LWRuT0Ewbk9WekYyX2JZd21MckRjR2N2eDRfM0U1VkJzUUZCSUZDSWdnR0FBU0J3aUVJQkFVR0FFU0JRaUpJQmdBRWdVSWh5QVlBQklIQ0lVZ0VBVVlBUklGQ0tnZ0dBQQ==",
    totalResults: 20,
  },
  error: null,
};
