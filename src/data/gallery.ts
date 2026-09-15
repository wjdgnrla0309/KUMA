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

const carPhoto = (year: string, file: string) =>
  `${BASE}cars/${year}/${file}`;


// ─────────────────────────────
// 홈페이지 대표 사진
// ─────────────────────────────

export const GALLERY_PREVIEWS: GalleryPreview[] = [
  {
    src: carPhoto("2026", "001.webp"),
    alt: "KUMA 차량 테스트 주행",
    category: "TEST DAY",
    title: "차량 테스트 주행",
  },

  {
    src: carPhoto("2025", "001.webp"),
    alt: "KUMA 차량 대회 주행 모습",
    category: "COMPETITION DAY",
    title: "대회 주행 기록",
  },
];


// ─────────────────────────────
// 연도별 갤러리
// ─────────────────────────────

export const PHOTO_ARCHIVE: Record<string, GalleryPhoto[]> = {
  "2026": [
    {
      src: carPhoto("2026", "001.webp"),
      title: "Test Day",
      category: "Vehicle Testing",
    },
    {
      src: carPhoto("2026", "002.webp"),
      title: "Test Day",
      category: "Vehicle Testing",
    },
    {
      src: carPhoto("2026", "003.webp"),
      title: "Test Day",
      category: "Vehicle Testing",
    },
  ],

  "2025": [
    {
      src: carPhoto("2025", "001.webp"),
      title: "Competition Day",
      category: "Race Weekend",
    },
    {
      src: carPhoto("2025", "002.webp"),
      title: "Competition Day",
      category: "Race Weekend",
    },
  ],

  "2024": [],
};


// 최신 연도부터 자동 정렬
export const GALLERY_YEARS = Object.keys(PHOTO_ARCHIVE).sort(
  (first, second) => Number(second) - Number(first)
);