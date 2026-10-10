import { SectionHeader } from "../components/SectionHeader";
import { HOMEPAGE_CONTENT } from "../data/homepage";
import { KUMA_INTRODUCTION } from "../data/site";

// 팀 소개: 동아리의 제작 방식, 교육 목표, 주요 대회 활동을 설명합니다.
export function AboutKumaSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800"
    >
      <div className="w-full">
        <SectionHeader
          label={HOMEPAGE_CONTENT.about.label}
          title={HOMEPAGE_CONTENT.about.title}
          className="!mt-0"
        />
        <div className="mt-6 space-y-4 text-base leading-7 text-zinc-400 md:text-lg">
          {KUMA_INTRODUCTION.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
