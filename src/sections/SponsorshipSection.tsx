import { useState } from "react";
import { FileText, Gauge, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { SPONSOR_BENEFITS, SPONSOR_LIST } from "../data/sponsors";
import type { Sponsor, SponsorBenefit } from "../data/sponsors";
import { PAGE_COPY } from "../data/pageCopy";

const BENEFIT_ICONS: Record<SponsorBenefit["icon"], LucideIcon> = {
  brand: Gauge,
  talent: ShieldCheck,
  feedback: Zap,
};

// 공식 로고를 표시하고, 파일을 읽지 못하면 이름으로 대체합니다.
export function SponsorIdentity({
  sponsor,
}: {
  sponsor: Sponsor;
}) {
  const [hasError, setHasError] = useState(false);

  if (!sponsor.logo || hasError) return <span style={sponsor.textScale ? { fontSize: `${sponsor.textScale}em` } : undefined}>{sponsor.name}</span>;

  return (
    <span className="sponsor-logo-frame">
      <img
        src={`${import.meta.env.BASE_URL}${sponsor.logo.replace(/^\//, "")}`}
        alt={sponsor.name}
        style={{ transform: `scale(${sponsor.logoScale ?? 1})` }}
        loading="lazy"
        className={`sponsor-logo ${sponsor.logoTreatment ? `sponsor-logo-${sponsor.logoTreatment}` : "sponsor-logo-transparent"}`}
        onError={() => setHasError(true)}
      />
    </span>
  );
}

// 같은 목록을 두 번 이어서 CSS의 무한 스크롤 애니메이션을 만듭니다.
function SponsorMarquee({ sponsors, reverse = false }: { sponsors: Sponsor[]; reverse?: boolean; }) {

  return (
    <div
      className={`sponsor-marquee ${reverse ? "sponsor-marquee-left mt-4" : "sponsor-marquee-right"
        }`}
      aria-hidden="true"
    >
      <div className="sponsor-track">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <span
            key={`${sponsor.name}-${index}`}
            className={`sponsor-chip ${reverse ? "sponsor-chip-muted" : ""}`}
            aria-hidden={index >= sponsors.length || undefined}
            title={sponsor.name}
          >
            <SponsorIdentity sponsor={sponsor} />
          </span>
        ))}
      </div>
    </div>
  );
}

// URL이 등록된 후원사만 외부 링크로 렌더링합니다.
function SponsorCard({ sponsor }: { sponsor: Sponsor; }) {
  const className =
    "sponsor-grid-item text-sm font-medium tracking-[0.08em] text-zinc-200";
  const content = (
    <>
      <SponsorIdentity sponsor={sponsor} />
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
      aria-label={sponsor.linkLabel ?? `${sponsor.name} 공식 사이트 열기`}
      className={className}
    >
      {content}
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
          label={PAGE_COPY.sponsorship.label}
          title={PAGE_COPY.sponsorship.title}
          className="!mt-0 [&>h2]:tracking-[0.015em]"
        />
      </div>

      <p className="mt-5 text-base text-zinc-400 md:text-lg">
        {PAGE_COPY.sponsorship.bannerCaption}
      </p>

      <div className="mt-10 grid gap-8 border-t border-zinc-800 pt-8 md:grid-cols-3">
        {SPONSOR_BENEFITS.map((benefit) => {
          const Icon = BENEFIT_ICONS[benefit.icon];

          return (
            <div key={benefit.icon}>
              <div className="mb-3 flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-racing-green" />
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="sponsor-showcase mt-12">
        <div className="sponsor-showcase-logos" aria-hidden="true">
          <SponsorMarquee sponsors={SPONSOR_LIST.slice(0, 6)} />
          <SponsorMarquee sponsors={SPONSOR_LIST.slice(6, 12)} reverse />
          <SponsorMarquee sponsors={SPONSOR_LIST.slice(12)} />
        </div>
        <div className="sponsor-showcase-content">
          <h3 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">스폰서가 되어주세요</h3>
          <p className="mt-4 text-sm text-zinc-300 md:text-base">KUMA의 설계와 제작, 트랙 위의 도전에 함께해주세요.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <button
          type="button"
          aria-expanded={isSponsorListOpen}
          aria-controls="sponsor-list"
          onClick={() => setIsSponsorListOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
        >
          {isSponsorListOpen ? PAGE_COPY.sponsorship.closeListLabel : PAGE_COPY.sponsorship.showListLabel}
        </button>
        <a
          href={`${import.meta.env.BASE_URL}documents/KUMA_Sponsorship_Proposal_Claude_v3.pdf`}
          download="KUMA_Sponsorship_Proposal_Claude_v3.pdf"
          title={PAGE_COPY.sponsorship.proposalTitle}
          className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-black/70 px-7 py-3 text-sm font-semibold text-white transition hover:border-racing-green hover:text-racing-green"
        >
          <FileText className="mr-2 h-4 w-4" />
          {PAGE_COPY.sponsorship.proposalLabel}
        </a>
          </div>
        </div>
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
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-6 md:grid-cols-3 lg:grid-cols-4">
            {SPONSOR_LIST.map((sponsor) => (
              <SponsorCard key={sponsor.name} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
