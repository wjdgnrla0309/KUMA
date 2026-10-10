// ============================================================
// 🔗 사이트 메뉴 및 공개 일정
// 수정 → 메뉴 이름 / 이동 경로 / 차량 공개 날짜
// ============================================================
export const SITE_BASE_URL = import.meta.env.BASE_URL;

export const NAVIGATION_LINKS = [
  { label: "ABOUT US", href: "#about" },
  { label: "VEHICLE", href: "#competition" },
  { label: "AWARDS", href: "#achievements" },
  { label: "NEWS", href: "#news" },
  { label: "GALLERY", href: `${SITE_BASE_URL}gallery` },
  { label: "SPONSORS", href: "#sponsors" },
  { label: "CONTACT US", href: "#contact" },
];

// 기존 동작과 같이 방문자 기기의 현지 시간을 기준으로 계산합니다.
export const VEHICLE_REVEAL_DATE = "2027-08-27T00:00:00";

// ============================================================
// 🏠 홈페이지 소개 문구
// 수정 → HOMEPAGE_COPY.heroDescription 또는 KUMA_INTRODUCTION의 문장
// ============================================================
export const HOMEPAGE_COPY = {
  heroDescription: [
    // 첫 화면에서 차량 사진과 겹치지 않도록 의미 단위로 한 줄씩 나눕니다.
    "2026 시즌의 기록은 끝났고,",
    "새로운 차량의 설계는 이미 시작됐습니다.",
    "KUMA가 트랙에 꺼내 놓을 2027 머신의 모습을",
    "가장 먼저 만나보세요.",
  ],
} as const;

export const KUMA_INTRODUCTION = [
  "KUMA는 내연기관 포뮬러 차량을 직접 설계하고 제작하며, 데이터 기반 주행으로 차량의 완성도를 높이는 레이싱 동아리입니다.",
  "저희 동아리는 전공지식을 활용하여 레이스 차량을 설계 및 제작하고, 공학도로서의 역량을 기르기 위한 소양을 쌓는 것을 목표로 하고 있습니다.",
  "주요 활동으로는 KSAE에서 주최하는 대학생 자작자동차 대회 Formula 부문에 직접 제작한 레이스차량으로 참가하여 타 대학교 팀들과 경쟁하고, 지식을 나누는 활동을 이어가고 있습니다.",
] as const;
