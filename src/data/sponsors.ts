export type Sponsor = {
  name: string;
  logo?: string;
  logoScale?: number;
  logoTreatment?: "light-background" | "dark-background";
  url?: string;
};

export type SponsorBenefit = {
  icon: "brand" | "talent" | "feedback";
  title: string;
  description: string;
};

// ============================================================
// 🤝 후원 안내 및 혜택
// 수정 → SPONSOR_BENEFITS의 제목 / 설명 / 표시 순서
// ============================================================
export const SPONSOR_BENEFITS: SponsorBenefit[] = [
  {
    icon: "brand",
    title: "강력한 브랜드 노출",
    description:
      "차량, 피트 스테이션, 작업복, 공식 SNS 채널을 통해 실제 레이싱 생태계에 브랜드를 확실히 노출합니다.",
  },
  {
    icon: "talent",
    title: "우수 공학 인재 연계",
    description:
      "CAD, 해석, 제어, 실차 테스트를 경험한 학생 엔지니어들과의 인재 네트워킹과 기술 협업을 지원합니다.",
  },
  {
    icon: "feedback",
    title: "실차 검증과 피드백",
    description:
      "후원 부품과 기술이 실제 주행 환경에서 검증되고, 데이터 기반 개선 피드백을 통해 함께 성장합니다.",
  },
];

// ============================================================
// 🏢 공식 후원사 목록
// 새 후원사 추가 → SPONSOR_LIST에 항목 추가 | 수정 → 이름 / 로고 / 링크
// 로고가 없으면 이름을, URL이 없으면 링크 없는 카드로 표시합니다.
// 로고 원본은 KUMA/logos에 보존하고 사이트용 사본은 public/logos에 저장합니다.
// 로고를 추가할 때 logo: "/logos/파일명"을 지정합니다.
export const SPONSOR_LIST: Sponsor[] = [
  { name: "KONGJU NAT'L UNIV", logo: "/logos/kongju.png", url: "https://www.kongju.ac.kr" },
  { name: "CHUNGNAM RISE", logo: "/logos/chungnam-rise.svg", url: "https://www.cnrise.or.kr/" },
  {
    name: "공학교육혁신센터",
    url: "https://www.kongju.ac.kr/KNU/16622/subview.do",
  },
  { name: "ANSYS", logo: "/logos/ansys-part-of-synopsys.svg", logoScale: 0.9, url: "https://www.ansys.com" },
  {
    name: "UPGRADE MOTORSPORT",
    logo: "/logos/upgrade-motorsport.png", logoScale: 0.85,
    logoTreatment: "dark-background",
    url: "https://www.upgrademotorsport.co.uk/",
  },
  {
    name: "ECU MASTER",
    logo: "/logos/ecumaster.png", logoScale: 1.35,
    logoTreatment: "dark-background",
    url: "https://www.ecumaster.com",
  },
  { name: "MISUMI", logo: "/logos/misumi.svg", logoScale: 1.1, url: "https://kr.misumi-ec.com" },
  { name: "OZ RACING", logo: "/logos/oz-racing.png", logoScale: 0.95, logoTreatment: "light-background", url: "https://www.ozracing.com" },
  { name: "HOOSIER", logo: "/logos/hoosier.png", logoScale: 1.15, url: "https://www.hoosiertire.com" },
  {
    name: "AIMSAK",
    logo: "/logos/aimsak.jpg", logoScale: 1.25,
    logoTreatment: "light-background",
    url: "https://www.aimsak.com",
  },
  { name: "대흥샤링" },
  { name: "MSC SOFTWARE", logo: "/logos/msc-software.svg", url: "https://mscsoftware.co.kr/" },
  { name: "CALSPAN", logo: "/logos/calspan.svg", url: "https://www.calspan.com" },
  {
    name: "BANGERS",
    url: "https://www.instagram.com/bangers966?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  },
  { name: "CANE CREEK", logo: "/logos/cane-creek.jpg", logoScale: 1, logoTreatment: "light-background", url: "https://canecreek.com" },
  { name: "OPTIMUMG", logo: "/logos/optimumg.png", logoScale: 1.25, url: "https://optimumg.com" },
  { name: "NORD-LOCK GROUP", logo: "/logos/nord-lock.png", logoScale: 0.9, url: "https://www.nord-lock.com" },
  { name: "TURBOSMART", logo: "/logos/turbosmart.svg", logoScale: 2.2, url: "https://turbosmart.com" },
];
