export type NewsItem = {
  date: string;
  title: string;
  description: string;
};

// 홈페이지 뉴스 카드: 새 소식은 배열 앞쪽에 추가합니다.
export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "2026.03",
    title: "KNU-F26 설계 및 제작 진행",
    description:
      "내연기관 파워트레인과 경량 차체 패키지를 중심으로 새 시즌 차량을 준비하고 있습니다. 2026년 대회당시 사용하지 못했던 터보시스템을 구축중에 있습니다.",
  },
  {
    date: "2025.11",
    title: "시즌 데이터 분석 완료",
    description:
      "주행 로그와 차량 데이터를 바탕으로 다음 시즌의 개선 항목을 정리했습니다.",
  },
  {
    date: "2025.09",
    title: "팀 신규 부원 모집",
    description:
      "설계, 제작, 주행 테스트까지 함께할 새로운 팀원을 기다립니다.",
  },
];
