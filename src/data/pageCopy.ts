// ============================================================
// 📝 페이지 공통 제목 및 안내 문구
// 수정 → 화면 문구만 변경할 때 해당 영역 값을 수정합니다. 카드 데이터는 각 목록 파일에서 수정합니다.
// ============================================================
export const PAGE_COPY = {
  news: { label: "Latest News", title: "KUMA NEWS" },
  achievements: {
    label: "Latest Achievements",
    title: "Awards & Records",
    description: "KUMA의 시즌별 성과와 차량 데이터를 확인하세요.",
    bannerAlt: "KUMA team at a race weekend",
    bannerLabel: "KUMA RACING TEAM",
    bannerTitle: "Moments that made the season.",
    rankingLabel: "Ranking",
    viewLabel: "View",
  },
  gallery: {
    label: "Race & Workshop",
    title: "KUMA GALLERY",
    description: "대회장, 작업실, 차량 제작 과정을 기록하는 공간입니다.",
    viewAllLabel: "VIEW ALL PHOTOS",
  },
  galleryPage: {
    label: "Race & Workshop",
    title: "PHOTO ARCHIVE",
    description: "연도별 KUMA의 대회, 테스트, 제작 기록을 모아보세요.",
    backLabel: "← BACK TO HOME",
    yearSelectLabel: "갤러리 연도 선택",
    emptyTitle: "archive is being prepared.",
    emptyDescription: "새 사진이 등록되면 이곳에서 확인할 수 있습니다.",
  },
  sponsorship: {
    label: "SPONSORSHIP",
    title: "열정적인 엔지니어들과 함께\n모빌리티의 미래를 이끌어주세요.",
    bannerAlt: "KUMA race car and team at competition",
    bannerCaption: "Partner with the team behind the car.",
    closeListLabel: "스폰서 목록 닫기",
    showListLabel: "스폰서 목록 보기",
    proposalTitle: "KUMA 스폰서십 제안서 PPTX 다운로드",
    proposalLabel: "제안서 다운로드 (PPTX)",
  },
  instagram: {
    followLabel: "Follow KUMA",
    title: "Instagram Feed",
    account: "@fs_team_kuma",
    feedLabel: "KUMA Instagram 피드",
    postAriaLabel: "인스타그램 게시물 보기",
  },
  contact: {
    imageAlt: "KUMA formula car at the circuit",
    imageCaption: "LET'S BUILD THE NEXT CAR",
  },
  footer: "© KUMA Racing Team. All engineering telemetry & CAD data reserved.",
} as const;
