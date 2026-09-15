import { SectionHeader } from "../components/SectionHeader";

// 팀 소개: 동아리의 제작 방식, 교육 목표, 주요 대회 활동을 설명합니다.
export function AboutKumaSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800"
    >
      <div className="w-full">
        <figure className="group relative mb-10 h-64 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:h-80">
          <img
            src={`${import.meta.env.BASE_URL}cars/2026/competition/${encodeURIComponent("001 (7).jpg")}`}
            alt="KUMA formula race car in competition"
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <figcaption className="absolute bottom-0 left-0 p-5">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-racing-green">KUMA RACING TEAM</span>
            <p className="mt-2 text-lg font-black text-white">Built for the next lap.</p>
          </figcaption>
        </figure>
        <SectionHeader
          label="About KUMA"
          title="Engineering With Combustion"
          className="!mt-0"
        />
        <div className="mt-6 space-y-4 text-base leading-7 text-zinc-400 md:text-lg">
          <p>
            KUMA는 내연기관 포뮬러 차량을 직접 설계하고 제작하며, 데이터 기반
            주행으로 차량의 완성도를 높이는 레이싱 동아리입니다.
          </p>
          <p>
            저희 동아리는 전공지식을 활용하여 레이스 차량을 설계 및 제작하고,
            공학도로서의 역량을 기르기 위한 소양을 쌓는 것을 목표로 하고 있습니다.
          </p>
          <p>
            주요 활동으로는 KSAE에서 주최하는 대학생 자작자동차 대회 Formula 부문에
            직접 제작한 레이스차량으로 참가하여 타 대학교 팀들과 경쟁하고, 지식을
            나누는 활동을 이어가고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
