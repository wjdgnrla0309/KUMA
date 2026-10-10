import { SPONSOR_LIST } from "../data/sponsors";
import { SponsorIdentity } from "./SponsorshipSection";

// 페이지 맨 아래, 푸터 위에 놓는 후원사 로고 줄입니다. 로고는 data/sponsors.ts에서 가져옵니다.
export function KeyFiguresSection() {
  return (
    <section aria-label="KUMA 후원사" className="px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <span className="flex items-center gap-4 text-[11px] font-bold tracking-[0.32em] text-zinc-500 uppercase">
          <span className="h-px w-10 bg-zinc-700" aria-hidden="true" />Supported by<span className="h-px w-10 bg-zinc-700" aria-hidden="true" />
        </span>
        <ul className="partner-strip flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {SPONSOR_LIST.filter((sponsor) => sponsor.logo).map((sponsor) => (
            <li key={sponsor.name} className="sponsor-chip" title={sponsor.name}>
              <SponsorIdentity sponsor={sponsor} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
