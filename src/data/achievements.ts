import type { SpecItem, VehicleYear } from "./specs";

const achievementPhoto = (file: string) =>
  `${import.meta.env.BASE_URL}cars/${encodeURIComponent(file)}`;

export type Achievement = {
  season: VehicleYear;
  category: string;
  title: string;
  short: string;
  rank: string;
  image: string;
  specs: SpecItem[];
};

// 성과 카드와 상세 모달에 표시할 기록입니다. 차량 제원 원본은 specs.ts에서 관리합니다.
export const ACHIEVEMENTS: Achievement[] = [
  {
    season: "2026",
    category: "Season",
    title: "KNU-F26",
    short: "고회전 엔진과 경량 패키지로 성능을 극대화했습니다.",
    rank: "14 / 55 teams",
    image: achievementPhoto("KakaoTalk_20260829_190154401.jpg"),
    specs: [
      { label: "Engine", value: "yzf-r3(321cc)" },
      { label: "Power", value: "50 PS" },
      { label: "Top Speed", value: "131 km/h" },
      { label: "Class", value: "Formula" },
    ],
  },
  {
    season: "2025",
    category: "Competition",
    title: "KNU-F25",
    short: "주행 성능 데이터 기반으로 공력과 안정성을 개선했습니다.",
    rank: "14 / 55 teams",
    image: achievementPhoto("KakaoTalk_20260829_190154401.jpg"),
    specs: [
      { label: "Engine", value: "321cc DOHC" },
      { label: "Power", value: "48 PS" },
      { label: "Top Speed", value: "126 km/h" },
      { label: "Class", value: "Formula" },
    ],
  },
  {
    season: "2024",
    category: "Engineering",
    title: "Powertrain",
    short: "엔진 세팅과 제어 최적화를 통해 트랙 대응력을 높였습니다.",
    rank: "",
    image: achievementPhoto("KakaoTalk_20260829_190154401.jpg"),
    specs: [
      { label: "Engine", value: "321cc DOHC" },
      { label: "Power", value: "45 PS" },
      { label: "Top Speed", value: "121 km/h" },
      { label: "Class", value: "Formula" },
    ],
  },
];
