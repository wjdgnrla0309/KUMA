export type Sponsor = {
  name: string;
  logo?: string;
  url?: string;
};

export type SponsorBenefit = {
  icon: "brand" | "talent" | "feedback";
  title: string;
  description: string;
};

// 후원 소개 문구와 카드 순서를 이곳에서 수정합니다.
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

// 공식 후원사 목록. 로고가 없으면 이름을, URL이 없으면 링크 없는 카드를 표시합니다.
// 로고를 추가할 때 public/sponsors에 파일을 넣고 logo: "/sponsors/파일명"을 지정합니다.
export const SPONSOR_LIST: Sponsor[] = [
  { name: "KONGJU NAT'L UNIV", url: "https://www.kongju.ac.kr" },
  { name: "ANSYS", url: "https://www.ansys.com" },
  {
    name: "UPGRADE MOTORSPORT",
    url: "https://www.upgrademotorsport.co.uk/",
  },
  {
    name: "ECU MASTER",
    logo: "/sponsors/ecumaster.png",
    url: "https://www.ecumaster.com",
  },
  { name: "MISUMI", url: "https://kr.misumi-ec.com" },
  { name: "OZ RACING", url: "https://www.ozracing.com" },
  { name: "HOOSIER", url: "https://www.hoosiertire.com" },
  {
    name: "AIMSAK",
    logo: "/sponsors/aimsak.jpg",
    url: "https://www.aimsak.com",
  },
  { name: "대흥샤링" },
  { name: "CHUNGNAM RISE", url: "https://www.cnrise.or.kr/" },
  { name: "MSC SOFTWARE", url: "https://mscsoftware.co.kr/" },
  { name: "CALSPAN", url: "https://www.calspan.com" },
  {
    name: "BANGERS",
    url: "https://www.instagram.com/bangers966?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
  },
  { name: "CANE CREEK", url: "https://canecreek.com" },
  { name: "OPTIMUMG", url: "https://optimumg.com" },
  { name: "NORD-LOCK GROUP", url: "https://www.nord-lock.com" },
  { name: "TURBOSMART", url: "https://turbosmart.com" },
  {
    name: "공학교육혁신센터",
    url: "https://www.kongju.ac.kr/KNU/16622/subview.do",
  },
];
