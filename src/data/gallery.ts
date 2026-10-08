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
    "001 (1).jpg",
    "001 (2).jpg",
    "001 (3).jpg",
    "001 (4).jpg",
    "001 (5).jpg",
    "001 (6).jpg",
    "001 (7).jpg",
    "001 (8).jpg",
    "001 (9).jpg",
    "001 (10).jpg",
    "001 (11).jpg",
    "001 (12).jpg",
    "001 (13).jpg",
    "001 (14).jpg",
    "001 (15).jpg",
    "001 (16).jpg",
    "001 (17).jpg",
    "001 (18).jpg",
    "001 (19).jpg",
    "001 (20).jpg",
    "001 (21).jpg",
    "001 (22).jpg",
    "001 (23).jpg",
    "001 (24).jpg",
    "001 (25).jpg",
    "001 (26).jpg",
    "001 (27).jpg",
    "001 (28).jpg",
    "001 (29).jpg",
    "001 (30).jpg",
    "001 (31).jpg",
    "001 (32).jpg",
    "001 (33).jpg",
    "001 (34).jpg",
    "001 (35).jpg",
    "001 (36).jpg",
    "001 (37).jpg",
    "001 (38).jpg",
    "001 (39).jpg",
    "001 (40).jpg",
    "20260828_formula day1-4.jpg",
    "20260828_formula day1-5.jpg",
    "20260828_formula day1-7.jpg",
    "20260828_formula day1-10.jpg",
    "20260828_formula day1-11.jpg",
    "20260828_formula day1-71.jpg",
    "20260828_formula day1-72.jpg",
    "20260828_formula day1-148.jpg",
    "20260828_formula day1-379.jpg",
    "20260829_formula day2-90.jpg",
    "20260829_formula day2-91.jpg",
    "20260829_formula day2-92.jpg",
    "20260829_formula day2-93.jpg",
    "20260829_formula day2-94.jpg",
    "20260829_formula day2-95.jpg",
    "20260829_formula day2-109.jpg",
    "20260829_formula day2-110.jpg",
    "20260829_formula day2-111.jpg",
    "20260829_formula day2-112.jpg",
    "20260829_formula day2-113.jpg",
    "20260829_formula day2-114.jpg",
    "20260829_formula day2-115.jpg",
    "20260829_formula day2-116.jpg",
    "20260829_formula day3-3.jpg",
    "20260829_formula day3-4.jpg",
    "DSC00724.jpg"
].map((file) => ({
    src: competitionPhoto(file),
    title: "2026 FSK",
    category: "Competition Day",
  })),

  "2025": [],

  "2024": [],
};


// ============================================================
// 갤러리 연도 선택 목록 (최신 연도부터 자동 정렬)
// ============================================================
export const GALLERY_YEARS = Object.keys(PHOTO_ARCHIVE).sort(
  (first, second) => Number(second) - Number(first)
);
