import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { ACHIEVEMENTS, type Achievement } from "../data/achievements";
import { PAGE_COPY } from "../data/pageCopy";

type AchievementsSectionProps = {
  onSelectAchievement: (achievement: Achievement) => void;
};

/** 성과 목록을 표시하고, 선택된 항목을 홈의 상세 모달로 전달합니다. */
export function AchievementsSection({
  onSelectAchievement,
}: AchievementsSectionProps) {
  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <SectionHeader label={PAGE_COPY.achievements.label} title={PAGE_COPY.achievements.title} className="!mt-0" />
        <span className="text-sm text-zinc-500">{PAGE_COPY.achievements.description}</span>
      </div>

      <div className="mb-6">
        <span className="text-xs font-mono font-medium tracking-[0.2em] text-racing-green">{PAGE_COPY.achievements.bannerLabel}</span>
        <p className="mt-2 text-lg font-medium text-white sm:text-xl">{PAGE_COPY.achievements.bannerTitle}</p>
      </div>

      <div className="space-y-5">
        {ACHIEVEMENTS.map((achievement) => (
          <button
            key={achievement.title}
            type="button"
            onClick={() => onSelectAchievement(achievement)}
            className="group flex w-full overflow-hidden rounded-2xl border border-zinc-800 bg-racing-card text-left transition-colors hover:border-racing-green/60"
          >
            <div className="h-40 w-[220px] shrink-0 overflow-hidden bg-zinc-900 md:h-44 md:w-[260px]">
              <img
                src={achievement.image}
                alt={achievement.title}
                className={`h-full w-full ${["2023", "2024"].includes(achievement.season) ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105`}
              />
            </div>

            <div className="flex flex-1 items-center justify-between gap-6 p-5 md:p-6">
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-racing-green uppercase">{achievement.season}</span>
                  <span className="text-[10px] font-mono tracking-[0.18em] text-zinc-500 uppercase">{achievement.category}</span>
                </div>

                <h3 className={`text-xl font-black tracking-[-0.04em] text-white md:text-2xl ${/[가-힣]/.test(achievement.title) ? "" : "heading-english"}`}>{achievement.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">{achievement.short}</p>
              </div>

              <div className="flex shrink-0 items-end gap-5 md:gap-8">
                <div className="text-left">
                  <span className="block text-[10px] font-mono tracking-[0.18em] text-zinc-500 uppercase">{PAGE_COPY.achievements.rankingLabel}</span>
                  <span className="mt-1 block text-sm font-semibold text-white md:text-base">{achievement.rank}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-racing-green md:text-sm">
                  {PAGE_COPY.achievements.viewLabel} <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
