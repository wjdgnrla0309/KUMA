// ============================================================
// 📰 KUMA 뉴스
// 새 뉴스 추가 → NEWS_ITEMS 배열의 맨 위에 추가 | 수정 → 날짜 / 제목 / 설명 / 이미지
// ============================================================
export type NewsItem = {
  date: string;
  title: string;
  description: string;
  image: string;
};

// 홈페이지 뉴스 카드: 새 소식은 배열 앞쪽에 추가합니다.
export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2026.10",
    image: "20261001_general-meeting-web.jpg",
    title: "총회 개최 및 2027 차량 구상",
    description:
      "총회를 열고 2027년도 차량의 방향과 구상안을 논의했습니다.",
  },
  {
    date: "2026.03",
    image: "20260829_formula day2-112-web.jpg",
    title: "KNU-F26 설계 및 제작 진행",
    description:
      "내연기관 파워트레인과 경량 차체 패키지를 중심으로 새 시즌 차량을 준비하고 있습니다.",
  },
  {
    date: "2025.09",
    image: "20260828_formula day1-4-web.jpg",
    title: "팀 신규 부원 모집",
    description:
      "설계, 제작, 주행 테스트까지 함께할 새로운 팀원을 기다립니다.",
  },
];
