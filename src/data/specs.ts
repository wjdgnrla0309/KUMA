export interface SpecItem {
  label: string;
  value: string;
}

export interface VehicleData {
  season: string;
  image: string;
  carNumber: string;
  modelName: string;
  tagline: string;
  // 연도 선택 카드와 제원표 상단에 표시할 요약 수치입니다.
  telemetry: {
    curbWeight: string;
    maxPower: string;
  };
  specs: SpecItem[];
}

// ============================================================
// 🏎️ 연도별 KUMA 차량 제원
// 새 차량 추가 → VEHICLE_DATABASE에 연도 항목 추가 | 수정 → 요약 수치와 specs 제원표를 함께 확인
// ============================================================

export const VEHICLE_DATABASE = {
  "2026": {
    season: "2026",
    image: `${import.meta.env.BASE_URL}cars/2026/competition/${encodeURIComponent("20260829_formula day2-111-web.jpg")}`,
    carNumber: "No. 14",
    modelName: "KNU-F26",
    tagline: "경량 10인치 업라이트 패키징 및 고회전 자연흡기 파워트레인 최적화",
    telemetry: {
      curbWeight: "180 kg",
      maxPower: "42 ps",
    },

    // 제원표 본문에 표시할 항목입니다. 값 변경 시 위 요약 수치도 확인합니다.
    specs: [
      { label: "전장 / 전폭 / 전고", value: "2700 / 1300 / 1100 mm" },
      { label: "축거", value: "1510 mm" },
      { label: "윤거", value: "1180 / 1160 mm" },
      { label: "공차 무게", value: "180 kg" },
      { label: "엔진", value: "YAMAHA YZF-R3" },
      { label: "엔진 형식", value: "수랭식 2기통" },
      { label: "최고 출력 / 토크", value: "42 ps @ 10750 rpm / 3.07 kgf·m @ 9000 rpm" },
      { label: "엔진 제어기 (ECU)", value: "ECU Master EMU Black" },
      { label: "종 감속비", value: "3.25 : 1" },
    ],
  },
  "2025": {
    season: "2025",
    image: `${import.meta.env.BASE_URL}cars/2025/competition/${encodeURIComponent("025 formula student korea day3-155.jpg")}`,
    carNumber: "No. 13",
    modelName: "KNU-F25",
    tagline: "내연기관 파워트레인과 공력 패키지의 기본기를 다진 모델",
    telemetry: {
      curbWeight: "268 kg",
      maxPower: "121 ps",
    },
    specs: [
      { label: "전장 / 전폭 / 전고", value: "2700 / 1300 / 1100 mm" },
      { label: "축거", value: "1510 mm" },
      { label: "윤거", value: "1180 / 1160 mm" },
      { label: "공차 무게", value: "268 kg" },
      { label: "엔진", value: "CBR600RR PC40" },
      { label: "엔진 형식", value: "수랭식 4스트로크 DOHC 직렬 4기통" },
      { label: "배기량", value: "599 cc" },
      { label: "보어 × 스트로크", value: "67 × 42.5 mm" },
      { label: "압축비", value: "12.2 : 1" },
      { label: "최고 출력 / 토크", value: "121 ps @ 14250 rpm / 6.4 kgf·m @ 11500 rpm" },
      { label: "종 감속비", value: "4.727 : 1" },
    ],
  },
  "2024": {
    season: "2024",
    image: `${import.meta.env.BASE_URL}cars/2024/competition/1727740718960.jpg`,
    carNumber: "No. 12",
    modelName: "KNU-F24",
    tagline: "내연기관 파워트레인과 공력 패키지의 기본기를 다진 모델",
    telemetry: {
      curbWeight: "280 kg",
      maxPower: "121 ps",
    },
    specs: [
      { label: "전장 / 전폭 / 전고", value: "3000 / 1300 / 1200 mm" },
      { label: "축거", value: "1510 mm" },
      { label: "윤거", value: "1260 / 1240 mm" },
      { label: "공차 무게", value: "280 kg" },
      { label: "엔진", value: "CBR600RR PC40" },
      { label: "엔진 형식", value: "수랭식 4스트로크 DOHC 직렬 4기통" },
      { label: "배기량", value: "599 cc" },
      { label: "보어 × 스트로크", value: "67 × 42.5 mm" },
      { label: "압축비", value: "12.2 : 1" },
      { label: "최고 출력 / 토크", value: "121 ps @ 14250 rpm / 6.4 kgf·m @ 11500 rpm" },
      { label: "종 감속비", value: "4.727 : 1" },
    ],
  },
  "2023": {
    season: "2023",
    image: `${import.meta.env.BASE_URL}cars/2023/competition/IMG_6344.JPG`,
    carNumber: "No. 11",
    modelName: "KNU-F23",
    tagline: "내연기관 파워트레인과 공력 패키지의 기본기를 다진 모델",
    telemetry: {
      curbWeight: "258 kg",
      maxPower: "121 ps",
    },
    specs: [
      { label: "전장 / 전폭 / 전고", value: "3000 / 1400 / 1200 mm" },
      { label: "축거", value: "1600 mm" },
      { label: "윤거", value: "1260 / 1240 mm" },
      { label: "공차 무게", value: "258 kg" },
      { label: "엔진", value: "CBR600RR PC40" },
      { label: "엔진 형식", value: "수랭식 4스트로크 DOHC 직렬 4기통" },
      { label: "배기량", value: "599 cc" },
      { label: "보어 × 스트로크", value: "67 × 42.5 mm" },
      { label: "압축비", value: "12.2 : 1" },
      { label: "최고 출력 / 토크", value: "121 ps @ 14250 rpm / 6.4 kgf·m @ 11500 rpm" },
      { label: "종 감속비", value: "4.727 : 1" },
    ],
  },
} satisfies Record<string, VehicleData>;

// ============================================================
// 차량 선택 목록 (VEHICLE_DATABASE의 연도에서 자동 생성)
// ============================================================
export type VehicleYear = keyof typeof VEHICLE_DATABASE;
export const VEHICLE_YEARS = (Object.keys(VEHICLE_DATABASE) as VehicleYear[])
  .sort((first, second) => Number(second) - Number(first));
export const DEFAULT_VEHICLE_YEAR: VehicleYear = VEHICLE_YEARS[0];
