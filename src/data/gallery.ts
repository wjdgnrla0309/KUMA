export type GalleryPhoto = {
  src: string;
  title: string;
  category: string;
};

export type GalleryPreview = GalleryPhoto & {
  alt: string;
};

// 사진 파일은 public/cars에 두고, src에는 public을 제외한 경로를 적습니다.
const TEST_DAY_PHOTO = "/cars/KUMA_testdriveing_filmcam.jpg";
const COMPETITION_DAY_PHOTO = "/cars/KakaoTalk_20260829_190154401.jpg";

// 홈페이지에 먼저 보여줄 대표 사진과 한국어 설명입니다.
export const GALLERY_PREVIEWS: GalleryPreview[] = [
  {
    src: TEST_DAY_PHOTO,
    alt: "KUMA 차량 테스트 주행",
    category: "TEST DAY",
    title: "차량 테스트 주행",
  },
  {
    src: COMPETITION_DAY_PHOTO,
    alt: "KUMA 차량 대회 주행 모습",
    category: "COMPETITION DAY",
    title: "대회 주행 기록",
  },
];

// /gallery 연도별 사진 목록: 빈 배열인 연도에는 준비 중 안내가 표시됩니다.
export const PHOTO_ARCHIVE: Record<string, GalleryPhoto[]> = {
  "2026": [
    { src: TEST_DAY_PHOTO, title: "Test Day", category: "Vehicle Testing" },
  ],
  "2025": [
    {
      src: COMPETITION_DAY_PHOTO,
      title: "Competition Day",
      category: "Race Weekend",
    },
  ],
  "2024": [],
};

// 연도를 추가하면 필터에도 최신순으로 자동 반영됩니다.
export const GALLERY_YEARS = Object.keys(PHOTO_ARCHIVE).sort(
  (first, second) => Number(second) - Number(first),
);
