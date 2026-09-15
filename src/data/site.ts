// 데스크톱과 모바일 메뉴가 공유하는 순서와 이동 경로입니다.
export const SITE_BASE_URL = import.meta.env.BASE_URL;

export const NAVIGATION_LINKS = [
  { label: "ABOUT US", href: "#about" },
  { label: "COMPETITION", href: "#competition" },
  { label: "NEWS", href: "#news" },
  { label: "GALLERY", href: `${SITE_BASE_URL}gallery` },
  { label: "SPONSORS", href: "#sponsors" },
  { label: "CONTACT US", href: "#contact" },
];

// 기존 동작과 같이 방문자 기기의 현지 시간을 기준으로 계산합니다.
export const VEHICLE_REVEAL_DATE = "2027-08-27T00:00:00";
