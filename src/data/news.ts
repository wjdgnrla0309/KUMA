// ============================================================
// 📰 KUMA 뉴스 (사진 중심)
// 새 뉴스 추가 → NEWS_ITEMS 배열에 객체를 복사해 추가 (날짜 최신순으로 자동 정렬)
// 사진: public/cars/2026/competition/ 에 파일을 넣고 images 에 적습니다.
//       { file: "파일명.jpg", caption: "사진 설명" }  (caption 은 생략 가능)
//       images 를 비워 두면 "PHOTO COMING SOON" 자리표시자가 표시됩니다.
// ============================================================
export type NewsCategory = "대회" | "행사" | "제작" | "모집" | "공지";

// 사진 한 장: file = 파일명, title = 사진 제목(선택), caption = 사진 설명(선택)
// wide: true 이면 격자 아래에 가로 전체 폭으로 크게 표시합니다 (단체 사진용).
export type NewsImage = { file: string; title?: string; caption?: string; wide?: boolean };

export type NewsItem = {
  id: string;
  date: string; // 표시용 날짜 (예: "2026.03")
  category: NewsCategory;
  title: string;
  description: string; // 카드에 보이는 짧은 설명
  body?: string; // 상세 보기 본문 (선택, 줄바꿈은 \n)
  images: NewsImage[];
  cover?: string; // 홈 카드 섬네일 파일명 (생략하면 images 의 첫 번째 사진)
  // video?: string; // 영상 보류 — 추후 유튜브 링크 등을 여기에 추가
};

// 홈페이지 뉴스: 새 소식을 배열에 추가하면 날짜(date)가 최신인 순서로 자동 정렬되고, 가장 최신 소식이 크게 표시됩니다.
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "2026-11-kic-trackday",
    date: "2026.11",
    category: "행사",
    title: "2026 영암 KIC 트랙데이 참가",
    description:
      "2026년 11월 14일부터 15일까지 전남 영암 코리아인터내셔널서킷(KIC)에서 진행된 트랙데이에 참가했습니다.",
    body:
      "2026년 11월 14일부터 15일까지, KUMA는 전남 영암 코리아인터내셔널서킷(KIC)에서 진행된 트랙데이에 참가했습니다.\n\n이번 트랙데이를 통해 실제 서킷 환경을 경험하고, 차량의 발전가능성을 확인하는 등 팀원들과 함께 차량에 대한 이해를 높이는 뜻깊은 시간을 가졌습니다.\n\nKNU-F26은 최고속도 150km/h에 육박하는 속도까지 달려 주었습니다. 이제 이 차가 어디까지 갈 수 있는지 알아갈 차례입니다.",
    cover: "kic-08-team-photo.jpg", // 홈 카드 섬네일: 단체 사진
    // 사진 순서: 1 ECU / 2 ECU / 3 패독 출발(영상 캡처) / 4 트랙 주행(영상 캡처) / 5 팀 / 6 전체 라인업 / 7 고카트 / 8 단체 사진(맨 아래 크게)
    images: [
      {
        file: "kic-01-ecu-tuning.jpg",
        title: "출발 전 ECU 점검",
        caption: "달리기 전에 차 옆에서 노트북 켜고 ECU부터 확인했습니다.",
      },
      {
        file: "kic-02-ecu-laptop.jpg",
        title: "화면 앞에서",
        caption: "ECU 값을 보면서 세팅을 확인하는 중입니다.",
      },
      {
        file: "kic-03-paddock-departure.jpg",
        title: "피트 아웃",
        caption: "정비 구역을 빠져나와 트랙으로 나가는 KNU-F26.",
      },
      {
        file: "kic-04-track-run.jpg",
        title: "젖은 노면 위로",
        caption: "비가 와서 노면이 젖어 있었지만 KNU-F26은 그 위를 달렸습니다.",
      },
      {
        file: "kic-05-team-garage.jpg",
        title: "차 앞에 다 같이",
        caption: "정비 구역에서 팀원들이 둘러서서 차를 같이 봤습니다.",
      },
      {
        file: "kic-06-lineup-all.jpg",
        title: "함께한 차량들",
        caption: "F1 피트 빌딩 앞, 참가 차량들 맨 끝에 KNU-F26도 나란히 섰습니다.",
        wide: true, // 가로로 긴 파노라마라 격자 대신 전체 폭으로 표시 (원치 않으면 이 줄 삭제)
      },
      {
        file: "kic-07-gokart.jpg",
        title: "고카트도 탔습니다",
        caption: "같이 타고 달리다 보니 팀원들끼리 더 가까워졌습니다.",
      },
      {
        file: "kic-08-team-photo.jpg",
        title: "KUMA, 영암에서",
        caption: "비는 왔지만 다 같이 KNU-F26 옆에서 한 장.",
        wide: true,
      },
    ],
  },
  {
    id: "2026-10-general-meeting",
    date: "2026.10",
    category: "공지",
    title: "총회 개최 및 2027 차량 구상",
    description: "총회를 열고 2027년도 차량의 방향과 구상안을 논의했습니다.",
    images: [{ file: "20261001_general-meeting-web.jpg" }],
  },
  {
    id: "2026-03-knu-f26",
    date: "2026.03",
    category: "제작",
    title: "KNU-F26 설계 및 제작 진행",
    description:
      "내연기관 파워트레인과 경량 차체 패키지를 중심으로 새 시즌 차량을 준비하고 있습니다.",
    images: [{ file: "20260829_formula day2-112-web.jpg" }],
  },
  {
    id: "2025-09-recruit",
    date: "2025.09",
    category: "모집",
    title: "팀 신규 부원 모집",
    description:
      "설계, 제작, 주행 테스트까지 함께할 새로운 팀원을 기다립니다.",
    images: [{ file: "20260828_formula day1-4-web.jpg" }],
  },
];

// 화면에 보이는 순서: 날짜가 최신인 소식이 먼저 ("2026.11" > "2026.10" 형식의 문자열 비교)
export const SORTED_NEWS: NewsItem[] = [...NEWS_ITEMS].sort((a, b) => b.date.localeCompare(a.date));
