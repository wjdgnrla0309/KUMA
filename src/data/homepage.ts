// ============================================================
// 🏠 홈페이지 메인 / 소개 / 모집 카드
// 수정 → HOMEPAGE_CONTENT의 hero, about, recruitment 항목 | 목록 콘텐츠는 각 전용 data 파일에서 수정
// ============================================================
export const HOMEPAGE_CONTENT = {
  hero: {
    programLabel: "KUMA 2027 DEVELOPMENT PROGRAM",
    titleLineOne: "PRECISION ENGINEERING",
    titleLineTwo: "UNCOMPROMISING SPEED",
    image: "cars/KUMA_testdriveing_filmcam.jpg",
    vehicleLabel: "NEXT VEHICLE / 2027",
  },
  about: {
    image: "cars/2026/competition/001 (7).jpg",
    imageAlt: "KUMA formula race car in competition",
    label: "About KUMA",
    title: "Engineering With Combustion",
  },
  recruitment: {
    programLabel: "2027 DEVELOPMENT PROGRAM",
    title: "KNU-F27 / NEXT VEHICLE",
    qrImage: "recruitment-qr.png.png",
    highlights: [
      ["TARGET WEIGHT", "TBA"],
      ["POWERTRAIN", "TBA"],
      ["AERO PACKAGE", "IN DEVELOPMENT"],
      ["SEASON", "2027"],
    ],
  },
} as const;
