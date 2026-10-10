import { Check, Lock } from "lucide-react";
import { HOMEPAGE_CONTENT } from "../data/homepage";
import { HOMEPAGE_COPY, SITE_BASE_URL, VEHICLE_REVEAL_DATE } from "../data/site";
import { useCountdown } from "../hooks/useCountdown";

type HeroSectionProps = {
  onOpenDecrypt: () => void;
};

const CLASSIFIED_SPECS = [
  // value: 강한 블러로 가려서 표시하는 2027 차량 수치
  { label: "Car weight", unit: "kg", value: "180" },
  { label: "Max power", unit: "ps", value: "85" },
  { label: "Top speed", unit: "km/h", value: "115" },
];

/** 차량 공개 티저입니다. 실제 주행 사진 위에 타이밍 타워 형태의 카운트다운을 둡니다. */
export function HeroSection({ onOpenDecrypt }: HeroSectionProps) {
  const timeLeft = useCountdown(VEHICLE_REVEAL_DATE);
  const { totalSteps, completedSteps } = HOMEPAGE_CONTENT.hero.progress;
  const latestStep = completedSteps[completedSteps.length - 1];
  const timing = [
    { label: "Days", value: String(timeLeft.days) },
    { label: "Hrs", value: String(timeLeft.hours).padStart(2, "0") },
    { label: "Min", value: String(timeLeft.minutes).padStart(2, "0") },
    { label: "Sec", value: String(timeLeft.seconds).padStart(2, "0") },
  ];

  return (
    <section className="hero-stage relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-16">
      {/* 사진 틀: 넓은 화면에서는 3:2 비율을 넘지 않아 창이 세로로 길어도 차량이 잘리지 않습니다. */}
      <div className="hero-photo absolute inset-x-0 top-16 -z-20 h-[42svh] lg:left-1/4 lg:top-0 lg:h-auto lg:max-h-full lg:aspect-[3/2]">
        <img
          src={`${SITE_BASE_URL}${HOMEPAGE_CONTENT.hero.image}`}
          alt="2026 대회에서 주행 중인 KUMA KNU-F26"
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-right grayscale contrast-125 brightness-[0.6]"
        />
        {/* 같은 사진의 컬러본을 겹치고 차량 부분만 마스크로 드러냅니다. */}
        <img
          src={`${SITE_BASE_URL}${HOMEPAGE_CONTENT.hero.image}`}
          alt=""
          aria-hidden="true"
          className="hero-car-color absolute inset-0 h-full w-full object-cover object-center lg:object-right"
        />
      </div>
      <div className="hero-shade absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-sweep pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end gap-10 px-6 pb-10 pt-[42svh] lg:justify-center lg:py-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-sm text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-racing-green animate-pulse" aria-hidden="true" />
            {HOMEPAGE_CONTENT.hero.programLabel} 진행 중
          </p>

          <h1 className="hero-title mt-6 text-white">
            <span className="block">{HOMEPAGE_CONTENT.hero.titleLineOne}</span>
            <span className="hero-title-outline block">{HOMEPAGE_CONTENT.hero.titleLineTwo}</span>
          </h1>

          <p className="hero-lede mt-6 max-w-xl lg:max-w-md text-base leading-7 text-zinc-100 md:text-lg break-keep">
            {HOMEPAGE_COPY.heroDescription.map((line) => <span className="block" key={line}>{line}</span>)}
          </p>

          <button
            type="button"
            onClick={onOpenDecrypt}
            className="mt-8 inline-flex items-center gap-3 bg-racing-green px-6 py-3.5 text-sm font-bold tracking-[0.1em] text-black transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-racing-green"
          >
            <Lock className="h-4 w-4" /> DECRYPT CHASSIS SPEC
          </button>
        </div>

        {/* 배경 사진 속 차량 표기 */}
        <span className="absolute bottom-4 right-6 font-display text-sm tracking-[0.16em] text-white/60">[KNU-F26]</span>

      </div>

      <div className="border-t border-white/10 bg-black/70 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="timing-strip" role="timer" aria-label="차량 공개까지 남은 시간">
            <span className="timing-strip-head">Unveiling in</span>
            {timing.map(({ label, value }, index) => (
              <span key={label} className="timing-strip-cell">
                <span className={`timing-value ${index === 3 ? "text-racing-green" : "text-white"}`}>{value}</span>
                <span className="timing-label">{label}</span>
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 border-t border-white/10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="col-span-3 py-6 lg:col-span-1 lg:py-8 lg:pr-8">
              <p className="text-sm text-racing-green">{HOMEPAGE_CONTENT.hero.vehicleLabel}</p>
              <p className="mt-2 text-lg font-semibold text-white md:text-xl">KNU-F27은 곧 공개됩니다.</p>
              <div className="mt-4" aria-label={`2027 차량 제작 ${totalSteps}단계 중 ${completedSteps.length}단계 완료: ${latestStep}`}>
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: totalSteps }, (_, index) => (
                    <span key={index} className={`h-1.5 flex-1 ${index < completedSteps.length ? "bg-racing-green" : "bg-zinc-700"}`} />
                  ))}
                </div>
                <p className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-sm text-zinc-200" aria-hidden="true">
                  <Check className="h-3.5 w-3.5 text-racing-green" strokeWidth={3} />
                  <span className="whitespace-nowrap font-display tracking-[0.1em] text-racing-green">STEP {completedSteps.length} / {totalSteps}</span>
                  완료 · {latestStep}
                </p>
              </div>
            </div>
            {CLASSIFIED_SPECS.map(({ label, unit, value }) => (
              <div key={label} className="border-t border-white/10 py-6 pr-2 [&:not(:nth-child(2))]:border-l [&:not(:nth-child(2))]:pl-4 sm:[&:not(:nth-child(2))]:pl-6 lg:border-t-0 lg:border-l lg:py-8 lg:pl-8">
                <p className="text-sm text-zinc-300">{label}</p>
                <p className="mt-2 flex items-baseline gap-2 whitespace-nowrap font-display text-xl tracking-[0.02em] text-white/85 sm:text-3xl lg:text-5xl">
                  <span className="blurred-value" aria-label="비공개 값" role="img"><span aria-hidden="true">{value}</span></span>
                  {unit}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-racing-green"><Lock className="h-3 w-3" />Classified</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
