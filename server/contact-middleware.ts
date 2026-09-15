import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import contactHandler, { type ContactRequest } from "../api/contact.js";
import type { ApiResponse } from "./api-types.js";

/** Node HTTP 요청 스트림을 모아 JSON으로 해석할 원문을 만듭니다. */
async function readRequestText(request: IncomingMessage): Promise<string> {
  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf8");
}

/** 배포용 API의 status().json() 호출을 로컬 Node HTTP 응답으로 연결합니다. */
function createApiResponse(response: ServerResponse): ApiResponse {
  return {
    status(code) {
      response.statusCode = code;
      return this;
    },
    json(payload) {
      response.setHeader("Content-Type", "application/json");
      response.end(JSON.stringify(payload));
    },
  };
}

/** Vite 개발 중에도 배포 환경과 같은 문의 처리 함수를 사용합니다. */
export function contactApiMiddleware(): Plugin {
  return {
    name: "contact-api-middleware",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (request, response, next) => {
        if (request.method !== "POST") {
          next();
          return;
        }

        const requestText = await readRequestText(request);
        const apiResponse = createApiResponse(response);
        let body: ContactRequest["body"];

        try {
          body = JSON.parse(requestText) as ContactRequest["body"];
        } catch {
          apiResponse.status(400).json({ error: "Invalid JSON body" });
          return;
        }

        await contactHandler({ method: request.method, body }, apiResponse);
      });
    },
  };
}
