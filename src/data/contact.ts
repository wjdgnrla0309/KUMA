// 연락처와 담당자 정보는 이 파일에서 수정합니다.
export const CONTACT_DETAILS = {
  label: "Direct Contact",
  title: "Contact Us",
  description:
    "스폰서십 제휴, 기술 자문, 부품 테스트 관련 문의를 남겨주시면 24시간 내에 회신드립니다.",
  address:
    "충청남도 천안시 서북구 천안대로 1223-24 / 국립공주대학교 천안공과대학 학생회관 318호",
  email: "wjdgnrla009@gmail.com",
  representatives: [
    { role: "팀장", name: "홍길동", phone: "010-1234-5678", email: "" },
    { role: "회장", name: "홍길동", phone: "010-1234-5678", email: "" },
  ],
} as const;

// name은 API로 보내는 필드 이름이므로, 화면 문구만 바꿀 때는 그대로 둡니다.
export const CONTACT_FORM = {
  fields: [
    {
      name: "name",
      label: "성함 / 담당자명",
      type: "text",
      placeholder: "홍길동",
      autoComplete: "name",
    },
    {
      name: "organization",
      label: "소속 기업 / 기관",
      type: "text",
      placeholder: "기업명 또는 부서명",
      autoComplete: "organization",
    },
    {
      name: "email",
      label: "회신받을 이메일",
      type: "email",
      placeholder: "partner@company.com",
      autoComplete: "email",
    },
  ],
  message: {
    label: "문의 내용",
    placeholder: "스폰서십 제안 또는 문의 사항을 적어주세요.",
  },
  submitLabel: "문의 메시지 전송하기",
  sendingLabel: "전송 중...",
  successMessage: "문의가 전송되었습니다. 확인 후 회신드리겠습니다.",
  errorMessage: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
} as const;
