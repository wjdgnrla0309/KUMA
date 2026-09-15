import { useState } from "react";
import { ArrowUpRight, FileText, Gauge, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { SPONSOR_BENEFITS, SPONSOR_LIST } from "../data/sponsors";
import type { Sponsor, SponsorBenefit } from "../data/sponsors";

const BENEFIT_ICONS: Record<SponsorBenefit["icon"], LucideIcon> = {
  brand: Gauge,
  talent: ShieldCheck,
  feedback: Zap,
};

// 로고가 없거나 읽기에 실패하면 후원사 이름만 남깁니다.
function SponsorLogo({
  sponsor,
  className,
}: {
  sponsor: Sponsor;
  className: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (!sponsor.logo || hasError) return null;

  return (
    <img
      src={sponsor.logo}
      alt=""
      loading="lazy"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

// 같은 목록을 두 번 이어서 CSS의 무한 스크롤 애니메이션을 만듭니다.
function SponsorMarquee({ reverse = false }: { reverse?: boolean; }) {
  const sponsors = reverse ? [...SPONSOR_LIST].reverse() : SPONSOR_LIST;

  return (
    <div
      className={`sponsor-marquee ${reverse ? "sponsor-marquee-left mt-4" : "sponsor-marquee-right"
        }`}
      aria-hidden={reverse || undefined}
    >
      <div className="sponsor-track">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <span
            key={`${sponsor.name}-${index}`}
            className={`sponsor-chip ${reverse ? "sponsor-chip-muted" : ""}`}
            aria-hidden={index >= sponsors.length || undefined}
          >
            <SponsorLogo
              sponsor={sponsor}
              className="mr-3 h-7 w-auto max-w-[100px] object-contain"
            />
            {sponsor.name}
          </span>
        ))}
      </div>
    </div>
  );
}

// URL이 등록된 후원사만 외부 링크로 렌더링합니다.
function SponsorCard({ sponsor }: { sponsor: Sponsor; }) {
  const className =
    "group flex min-h-16 items-center rounded-xl border border-zinc-800 bg-racing-card px-5 text-sm font-bold tracking-[0.08em] text-zinc-200";
  const content = (
    <>
      <SponsorLogo
        sponsor={sponsor}
        className="h-9 w-20 shrink-0 object-contain object-left"
      />
      <span>{sponsor.name}</span>
    </>
  );

  if (!sponsor.url) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`${sponsor.name} 공식 사이트 열기`}
      className={`${className} transition-colors hover:border-racing-green/60 hover:text-racing-green`}
    >
      {content}
      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-racing-green" />
    </a>
  );
}

// 후원 혜택, 후원사 소개 애니메이션, 펼침 목록을 구성합니다.
export function SponsorshipSection() {
  const [isSponsorListOpen, setIsSponsorListOpen] = useState(false);

  return (
    <section
      id="sponsors"
      className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800"
    >
      <div className="max-w-3xl">
        <SectionHeader
          label="SPONSORSHIP"
          title={"열정적인 엔지니어들과 함께\n모빌리티의 미래를 이끌어주세요."}
          className="!mt-0"
        />
      </div>

      <div className="mt-10 grid gap-8 border-t border-zinc-800 pt-8 md:grid-cols-3">
        {SPONSOR_BENEFITS.map((benefit) => {
          const Icon = BENEFIT_ICONS[benefit.icon];

          return (
            <div key={benefit.icon}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-racing-green">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-xl font-black tracking-[-0.04em] text-white">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 md:p-8">
        <SponsorMarquee />
        <SponsorMarquee reverse />
      </div>

      <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
        <button
          type="button"
          aria-expanded={isSponsorListOpen}
          aria-controls="sponsor-list"
          onClick={() => setIsSponsorListOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-racing-green hover:text-racing-green"
        >
          {isSponsorListOpen ? "스폰서 목록 닫기" : "스폰서 목록 보기"}
        </button>
        {/* PDF가 등록되면 실제 파일 경로를 가진 다운로드 링크로 교체합니다. */}
        <button
          type="button"
          disabled
          title="제안서 PDF 준비 중"
          className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FileText className="mr-2 h-4 w-4" />
          제안서 다운로드 (PDF)
        </button>
      </div>

      {/* 접힌 목록은 키보드 탐색에서도 제외하고 펼침 애니메이션은 유지합니다. */}
      <div
        id="sponsor-list"
        inert={!isSponsorListOpen}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${isSponsorListOpen
          ? "mt-8 grid-rows-[1fr] opacity-100"
          : "mt-0 grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SPONSOR_LIST.map((sponsor) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
