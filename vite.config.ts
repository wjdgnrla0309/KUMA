import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { contactApiMiddleware } from "./server/contact-middleware.js";

export default defineConfig(({ mode }) => {
  // 로컬 문의 API가 .env 파일의 서버 전용 환경 변수도 읽을 수 있게 합니다.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return {
    // 화면 개발용 React 플러그인과 로컬 문의 API를 등록합니다.
    plugins: [react(), contactApiMiddleware()],
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
  };
});
