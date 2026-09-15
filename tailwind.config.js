/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind 클래스가 쓰인 파일 범위입니다. 새 화면도 src 안에 두면 포함됩니다.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        racing: {
          // 강조색 / 보조 강조색 / 페이지 배경 / 카드 배경
          green: "#39d353",
          blue: "#2457ff",
          dark: "#050505",
          card: "#17181c",
        },
      },
    },
  },
  plugins: [],
};
