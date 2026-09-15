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


// ─────────────────────────────
// 홈페이지 대표 사진
// ─────────────────────────────

export const GALLERY_PREVIEWS: GalleryPreview[] = [
  {
    src: competitionPhoto("001 (1).jpg"),
    alt: "KUMA 차량 테스트 주행",
    category: "TEST DAY",
    title: "차량 테스트 주행",
  },

  {
    src: competitionPhoto("001 (2).jpg"),
    alt: "KUMA 차량 대회 주행 모습",
    category: "COMPETITION DAY",
    title: "대회 주행 기록",
  },
  {
    src: competitionPhoto("001 (9).jpg"),
    alt: "KUMA race car cornering on track",
    category: "ON TRACK",
    title: "Pushing the limit",
  },
  {
    src: competitionPhoto("001 (24).jpg"),
    alt: "KUMA team at the race paddock",
    category: "PIT & PADDOCK",
    title: "Race weekend moments",
  },
];


// ─────────────────────────────
// 연도별 갤러리
// ─────────────────────────────

export const PHOTO_ARCHIVE: Record<string, GalleryPhoto[]> = {
  "2026": Array.from({ length: 24 }, (_, index) => {
    const file = `KakaoTalk_20260829_190154401 (${index + 1}).jpg`;

    return {
      src: competitionPhoto(file),
      title: "Competition Day",
      category: "Race Weekend",
    };
  }),

  "2025": [],

  "2024": [],
};


// 최신 연도부터 자동 정렬
export const GALLERY_YEARS = Object.keys(PHOTO_ARCHIVE).sort(
  (first, second) => Number(second) - Number(first)
);
