import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type ContactFormStatus = "idle" | "sending" | "success" | "error";

type ContactPayload = {
  name: string;
  organization: string;
  email: string;
  message: string;
};

function isSuccessfulResponse(value: unknown): value is { ok: true; } {
  return typeof value === "object" && value !== null && "ok" in value && value.ok === true;
}

/** 문의 전송, 중복 제출 방지, 완료 상태를 관리합니다. 화면 문구는 data/contact.ts에 있습니다. */
export function useContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const activeRequest = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      activeRequest.current?.abort();
      activeRequest.current = null;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (activeRequest.current) return;

    // React 이벤트의 currentTarget은 await 이후 유지되지 않으므로 폼을 먼저 저장합니다.
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload: ContactPayload = {
      name: String(formData.get("name") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };
    const controller = new AbortController();
    activeRequest.current = controller;
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error("Contact request failed");

      const result: unknown = await response.json();
      if (!isSuccessfulResponse(result)) throw new Error("Invalid contact response");
      if (controller.signal.aborted) return;

      formElement.reset();
      setStatus("success");
    } catch {
      // 페이지 이동으로 취소한 요청은 오류로 표시하거나 화면 상태를 갱신하지 않습니다.
      if (!controller.signal.aborted) setStatus("error");
    } finally {
      if (activeRequest.current === controller) activeRequest.current = null;
    }
  }

  return { handleSubmit, isSending: status === "sending", status };
}
