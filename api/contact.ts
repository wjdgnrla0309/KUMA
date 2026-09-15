import type { ApiResponse } from "../server/api-types.js";

/** 외부에서 받은 값은 문자열 여부를 확인하기 전까지 unknown으로 다룹니다. */
export type ContactRequest = {
  body?: {
    name?: unknown;
    organization?: unknown;
    email?: unknown;
    message?: unknown;
  };
  method?: string;
};

const RESEND_EMAIL_ENDPOINT = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 문자열 입력의 앞뒤 공백을 제거하고 그 외 입력은 빈 값으로 처리합니다. */
function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** 문의 입력 검증 → 서버 환경 확인 → 이메일 발송 순서로 처리합니다. */
export default async function handler(
  request: ContactRequest,
  response: ApiResponse,
): Promise<void> {
  if (request.method !== "POST") {
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  // 1. 필수 입력값을 정리하고 이메일 형식을 확인합니다.
  const name = asText(request.body?.name);
  const organization = asText(request.body?.organization);
  const email = asText(request.body?.email);
  const message = asText(request.body?.message);

  if (!name || !organization || !EMAIL_PATTERN.test(email) || !message) {
    response.status(400).json({ error: "Invalid contact form data" });
    return;
  }

  // 2. 이메일 인증 정보와 수신·발신 주소는 서버 환경 변수에서만 읽습니다.
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    response.status(503).json({ error: "Contact email service is not configured" });
    return;
  }

  // 3. 문의 내용을 일반 텍스트로 발송하고 결과를 프런트엔드에 전달합니다.
  try {
    const resendResponse = await fetch(RESEND_EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `[KUMA 문의] ${organization} - ${name}`,
        text: `성함 / 담당자명: ${name}\n소속 기업 / 기관: ${organization}\n회신 이메일: ${email}\n\n문의 내용:\n${message}`,
      }),
    });

    if (!resendResponse.ok) {
      response.status(502).json({ error: "Unable to send contact email" });
      return;
    }

    response.status(200).json({ ok: true });
  } catch {
    response.status(502).json({ error: "Unable to send contact email" });
  }
}
