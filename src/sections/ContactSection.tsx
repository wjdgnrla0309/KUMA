import { Mail, MapPin, Phone } from "lucide-react";

import { SectionHeader } from "../components/SectionHeader";
import { CONTACT_DETAILS, CONTACT_FORM } from "../data/contact";
import { useContactForm } from "../hooks/useContactForm";

// 문의 입력란의 공통 스타일입니다. 입력란 디자인은 이 두 곳에서 함께 조정합니다.
const FIELD_CLASS_NAME =
  "w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green";
const LABEL_CLASS_NAME = "block text-xs font-mono text-zinc-400 mb-1";

/** 연락처 표시와 문의 폼 배치를 담당합니다. 전송 로직은 useContactForm에서 관리합니다. */
export function ContactSection() {
  const { handleSubmit, isSending, status } = useContactForm();

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 팀 주소와 담당자 연락처 */}
        <div>
          <SectionHeader label={CONTACT_DETAILS.label} title={CONTACT_DETAILS.title} className="!mt-0" />
          <p className="text-sm text-zinc-400 mt-4">{CONTACT_DETAILS.description}</p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3 text-zinc-300">
              <MapPin className="w-5 h-5 text-racing-green shrink-0 mt-0.5" aria-hidden="true" />
              <span>{CONTACT_DETAILS.address}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Mail className="w-5 h-5 text-racing-green shrink-0" aria-hidden="true" />
              <span>{CONTACT_DETAILS.email}</span>
            </div>
            <div className="flex items-start gap-3 text-zinc-300">
              <Phone className="w-5 h-5 text-racing-green shrink-0" aria-hidden="true" />
              <div className="space-y-2">
                {CONTACT_DETAILS.representatives.map((person) => (
                  <p key={person.role}>
                    {person.role} : {person.name} / 연락처 : {person.phone} / 메일 : {person.email}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 필수 입력 항목과 전송 결과 */}
        <form
          className="bg-racing-card p-6 rounded-xl border border-zinc-800 space-y-4"
          onSubmit={handleSubmit}
          aria-busy={isSending}
        >
          {CONTACT_FORM.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={`contact-${field.name}`} className={LABEL_CLASS_NAME}>
                {field.label}
              </label>
              <input
                id={`contact-${field.name}`}
                name={field.name}
                required
                type={field.type}
                autoComplete={field.autoComplete}
                className={FIELD_CLASS_NAME}
                placeholder={field.placeholder}
              />
            </div>
          ))}
          <div>
            <label htmlFor="contact-message" className={LABEL_CLASS_NAME}>
              {CONTACT_FORM.message.label}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={3}
              className={FIELD_CLASS_NAME}
              placeholder={CONTACT_FORM.message.placeholder}
            />
          </div>
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-2.5 bg-racing-green text-black font-bold text-sm rounded hover:bg-racing-blue hover:text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? CONTACT_FORM.sendingLabel : CONTACT_FORM.submitLabel}
          </button>
          {status === "success" && (
            <p role="status" className="text-sm text-racing-green">{CONTACT_FORM.successMessage}</p>
          )}
          {status === "error" && (
            <p role="alert" className="text-sm text-red-400">{CONTACT_FORM.errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
