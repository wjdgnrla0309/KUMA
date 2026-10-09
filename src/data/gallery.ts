export type GalleryPhoto = {
  src: string;
  title: string;
  category: string;
};

export type GalleryPreview = GalleryPhoto & {
  alt: string;
};

// GitHub Pages의 /KUMA/ 경로까지 자동 대응
const BASE = import.meta.env.BASE_URL;

const competitionPhoto = (file: string) =>
  `${BASE}cars/2026/competition/${encodeURIComponent(file)}`;


// ============================================================
// 📸 홈페이지 대표 사진
// 새 사진 추가 → GALLERY_PREVIEWS 배열에 항목 추가 | 수정 → 사진 경로 / 대체 문구 / 분류 / 제목
// ============================================================

export const GALLERY_PREVIEWS: GalleryPreview[] = [
  {
    src: competitionPhoto("20260829_formula day2-110.jpg"),
    alt: "2026 FSK 대회에서 주행하는 KUMA 14번 차량",
    category: "2026 FSK · ON TRACK",
    title: "2026 대회 주행",
  },

  {
    src: competitionPhoto("20260828_formula day1-148.jpg"),
    alt: "2026 FSK 대회 피트에서 차량을 점검하는 KUMA 팀",
    category: "2026 FSK · PIT & PADDOCK",
    title: "피트에서의 차량 점검",
  },
  {
    src: competitionPhoto("20260829_formula day3-3.jpg"),
    alt: "2026 FSK 대회의 젖은 트랙을 주행하는 KUMA 차량",
    category: "2026 FSK · RACE DAY",
    title: "트랙 위의 도전",
  },
  {
    src: competitionPhoto("20260828_formula day1-10.jpg"),
    alt: "2026 FSK 대회 현장에서 서류를 확인하는 KUMA 팀",
    category: "2026 FSK · TEAM MOMENTS",
    title: "대회 현장의 팀원들",
  },
];


// ============================================================
// 🗓️ 연도별 사진 보관함
// 새 연도 추가 → PHOTO_ARCHIVE에 연도 키 추가 | 수정 → 연도와 사진 목록
// ============================================================

export const PHOTO_ARCHIVE: Record<string, GalleryPhoto[]> = {
  "2026": [
    ...[
      ["001 (2).jpg", "2026 FSK, 함께한 KUMA 팀"],
      ["001 (21).jpg", "코너를 향해 달리는 KNU-F26"],
      ["20260828_formula day1-10.jpg", "대회 서류를 확인하는 팀원들"],
      ["20260828_formula day1-148.jpg", "출전을 준비하는 피트 크루"],
      ["20260828_formula day1-379.jpg", "대회장에 모인 참가 팀들"],
      ["20260829_formula day2-110.jpg", "젖은 트랙 위의 정면 돌파"],
      ["20260829_formula day2-113.jpg", "14번 머신의 코너링"],
      ["20260829_formula day2-115.jpg", "콘 사이를 공략하는 KNU-F26"],
      ["20260829_formula day3-3.jpg", "빗속에서도 이어지는 도전"],
      ["DSC00724.jpg", "물보라를 가르며 질주하는 순간"],
    ].map(([file, title]) => ({
      src: competitionPhoto(file),
      title,
      category: "Competition Day",
    })),
    ...[
      ["001 (29).jpg", "작업실에서의 차량 제작"],
      ["001 (30).jpg", "차량 조립과 점검"],
      ["001 (32).jpg", "작업실 현장"],
      ["001 (34).jpg", "교내 주행 전 차량 점검"],
      ["001 (39).jpg", "작업실에서 함께하는 팀원들"],
    ].map(([file, title]) => ({
      src: competitionPhoto(file),
      title,
      category: "Workshop & Preparation",
    })),
  ],
  "2025": [],

  "2024": [
    ...[
      ["1727440030866-4.jpg", "2024 FSK 출전을 준비하는 KUMA 팀"],
      ["1727740749338-10.jpg", "머신과 함께 남긴 대회 단체 사진"],
      ["1727638229054-0.jpg", "정면에서 마주한 KNU-F24"],
      ["1727638229054-1.jpg", "콘 사이로 진입하는 순간"],
      ["1727740718960.jpg", "2번 머신의 코너 공략"],
      ["1727740801432-10.jpg", "피트에서 출전을 기다리는 차량"],
      ["1727740801432-12.jpg", "틸트 테이블 위의 차량 점검"],
      ["1727740801432-15.jpg", "콕핏에서 출전을 준비하는 드라이버"],
      ["1727740841391-13.jpg", "트랙 위에서 이어지는 도전"],
      ["1727858048192-9.jpg", "피트 크루의 마지막 점검"],
    ].map(([file, title]) => ({
      src: `${BASE}cars/2024/competition/${encodeURIComponent(file)}`,
      title,
      category: "2024 FSK",
    })),
    ...[
      ["IMG_20240922_160808_729.jpg", "교내에서 진행하는 차량 세팅"],
      ["IMG_20240922_160823_806.jpg", "주행을 앞두고 함께하는 차량 점검"],
    ].map(([file, title]) => ({
      src: `${BASE}cars/2024/competition/${encodeURIComponent(file)}`,
      title,
      category: "Workshop & Preparation",
    })),
  ],
  "2023": [
    ["IMG_5449.JPG", "2023 KUMA 팀"],
    ["IMG_5479.JPG", "피트에서의 차량 점검"],
    ["IMG_5502.JPG", "차량 후면과 피트 현장"],
    ["IMG_5595.JPG", "대회 준비 중인 팀원들"],
    ["IMG_5703.JPG", "드라이버 출전 준비"],
    ["IMG_5814.JPG", "트랙 위의 KUMA"],
    ["IMG_5866.JPG", "대회 주행"],
    ["IMG_6213.JPG", "코너를 통과하는 차량"],
    ["IMG_6344.JPG", "트랙 주행 장면"],
    ["IMG_6370.JPG", "대회 현장 단체 사진"],
  ].map(([file, title]) => ({
    src: `${BASE}cars/2023/competition/${encodeURIComponent(file)}`,
    title,
    category: "2023 FSK",
  })),
};


// ============================================================
// 갤러리 연도 선택 목록 (최신 연도부터 자동 정렬)
// ============================================================
export const GALLERY_YEARS = Object.keys(PHOTO_ARCHIVE).sort(
  (first, second) => Number(second) - Number(first)
);
