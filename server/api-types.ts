/** Vercel API와 로컬 개발 서버에서 공통으로 사용하는 JSON 응답 계약입니다. */
export type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
};

/** Instagram처럼 캐시 헤더를 설정하는 API에서 사용하는 응답 계약입니다. */
export type ApiResponseWithHeaders = ApiResponse & {
  setHeader: (name: string, value: string) => void;
};
