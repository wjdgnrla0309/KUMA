/** 영문 제목에만 영문 전용 제목 글꼴(heading-english)을 적용합니다. 한글이 있으면 기본 글꼴을 씁니다. */
export const headingClass = (title: string) => (/[가-힣]/.test(title) ? "" : "heading-english");
