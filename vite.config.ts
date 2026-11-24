import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { contactApiMiddleware } from "./server/contact-middleware.js";

export default defineConfig(({ mode }) => {
  Object.assign(
    process.env,
    loadEnv(mode, process.cwd(), "")
  );

  return {
    base: "/KUMA/",

    plugins: [
      react(),
      contactApiMiddleware(),
    ],

    server: {
      host: "0.0.0.0",
      port: 5173,
    },
  };
});