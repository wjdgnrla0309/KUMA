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
    topSpeed: string;
    downforce: string;
  };
  specs: SpecItem[];
}

// 연도를 추가하면 차량 선택 목록에도 자동으로 반영됩니다.
export const VEHICLE_DATABASE = {
  "2026": {
    season: "2026",
    image: "/cars/KUMA_testdriveing_filmcam.jpg",
    carNumber: "No. 14",
    modelName: "KNU-F26",
    tagline: "경량 10인치 업라이트 패키징 및 고회전 자연흡기 파워트레인 최적화",
    telemetry: {
      curbWeight: "189 kg",
      maxPower: "100 ps",
      topSpeed: "201 km/h",
      downforce: "760 N",
    },

    // 제원표 본문에 표시할 항목입니다. 값 변경 시 위 요약 수치도 확인합니다.
    specs: [
      { label: "전장 / 전폭 / 전고", value: "2800 / 1200 / 1000 mm" },
      { label: "축거", value: "1520 mm" },
      { label: "윤거(전/후)", value: "1180 / 1160 mm" },
      { label: "공차 무게", value: "189 kg" },
      { label: "무게 배분(전/후)", value: "50% / 50%" },
      { label: "엔진", value: "YAMAHA YZF-R3 (321cc DOHC)" },
      { label: "최고 출력 / 토크", value: "50 ps @ 10750 rpm / 44 Nm" },
      { label: "엔진 제어기 (ECU)", value: "ECU Master EMU Black" },
      { label: "종 감속비 / LSD", value: "2.9 : 1 / Drexler LSD" },
    ],
  },
  "2025": {
    season: "2025",
    image: "/cars/KakaoTalk_20260829_190154401.jpg",
    carNumber: "No. 13",
    modelName: "KNU-F25",
    tagline: "내연기관 파워트레인과 공력 패키지의 기본기를 다진 모델",
    telemetry: {
      curbWeight: "228 kg",
      maxPower: "48 ps",
      topSpeed: "126 km/h",
      downforce: "690 N",
    },
    specs: [
      { label: "전장 / 전폭 / 전고", value: "2820 / 1210 / 1010 mm" },
      { label: "축거", value: "1510 mm" },
      { label: "공차 무게", value: "228 kg" },
      { label: "엔진", value: "YAMAHA YZF-R3 (321cc DOHC)" },
      { label: "최고 출력 / 토크", value: "48 ps / 42 Nm" },
      { label: "엔진 제어기 (ECU)", value: "ECU Master EMU Black" },
      { label: "종 감속비 / LSD", value: "3.1 : 1 / Drexler LSD" },
    ],
  },
  "2024": {
    season: "2024",
    image: "/cars/KUMA_testdriveing_filmcam.jpg",
    carNumber: "No. 12",
    modelName: "KNU-F24",
    tagline: "내연기관 파워트레인과 공력 패키지의 기본기를 다진 모델",
    telemetry: {
      curbWeight: "228 kg",
      maxPower: "48 ps",
      topSpeed: "126 km/h",
      downforce: "690 N",
    },
    specs: [
      { label: "전장 / 전폭 / 전고", value: "2820 / 1210 / 1010 mm" },
      { label: "축거", value: "1510 mm" },
      { label: "공차 무게", value: "228 kg" },
      { label: "엔진", value: "YAMAHA YZF-R3 (321cc DOHC)" },
      { label: "최고 출력 / 토크", value: "48 ps / 42 Nm" },
      { label: "엔진 제어기 (ECU)", value: "ECU Master EMU Black" },
      { label: "종 감속비 / LSD", value: "3.1 : 1 / Drexler LSD" },
    ],
  },
  "2023": {
    season: "2023",
    image: "/cars/KakaoTalk_20260829_190154401.jpg",
    carNumber: "No. 11",
    modelName: "KNU-F23",
    tagline: "내연기관 파워트레인과 공력 패키지의 기본기를 다진 모델",
    telemetry: {
      curbWeight: "228 kg",
      maxPower: "48 ps",
      topSpeed: "126 km/h",
      downforce: "690 N",
    },
    specs: [
      { label: "전장 / 전폭 / 전고", value: "2820 / 1210 / 1010 mm" },
      { label: "축거", value: "1510 mm" },
      { label: "공차 무게", value: "228 kg" },
      { label: "엔진", value: "YAMAHA YZF-R3 (321cc DOHC)" },
      { label: "최고 출력 / 토크", value: "48 ps / 42 Nm" },
      { label: "엔진 제어기 (ECU)", value: "ECU Master EMU Black" },
      { label: "종 감속비 / LSD", value: "3.1 : 1 / Drexler LSD" },
    ],
  },
} satisfies Record<string, VehicleData>;

// 데이터의 실제 키에서 타입과 목록을 만들므로 연도 목록을 따로 중복 관리하지 않습니다.
export type VehicleYear = keyof typeof VEHICLE_DATABASE;
export const VEHICLE_YEARS = (Object.keys(VEHICLE_DATABASE) as VehicleYear[])
  .sort((first, second) => Number(second) - Number(first));
export const DEFAULT_VEHICLE_YEAR: VehicleYear = VEHICLE_YEARS[0];
