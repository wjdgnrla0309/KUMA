import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { VehicleDetailPanel } from "../components/VehicleDetailPanel";
import { VEHICLE_DATABASE, VEHICLE_YEARS, type VehicleData, type VehicleYear } from "../data/specs";

type VehicleSpecsSectionProps = {
  selectedYear: VehicleYear;
  onYearChange: (year: VehicleYear) => void;
  selectedVehicle: VehicleData;
};

export function RecruitmentCard() {
  return (
    <aside className="mb-10 overflow-hidden rounded-3xl border border-racing-green/40 bg-zinc-950 shadow-[0_0_32px_rgba(36,198,126,0.08)]">
      <div className="grid md:grid-cols-[minmax(0,1fr)_260px]">
        <div className="p-6 md:p-8">
          <span className="text-[11px] font-mono font-bold tracking-[0.22em] text-racing-green">2027 DEVELOPMENT PROGRAM</span>
          <h3 className="mt-3 text-3xl font-black tracking-[-0.06em] text-white md:text-4xl">KNU-F27 / NEXT VEHICLE</h3>
          <p className="mt-4 max-w-[58ch] text-[clamp(0.95rem,1.5vw,1.125rem)] leading-[1.8] tracking-[-0.02em] text-zinc-300 [word-break:keep-all] sm:mt-5">
            KUMA의 다음 차량은 현재 개발 중입니다. 신규부원과 함께 설계부터 제작, 테스트까지 2027 시즌을 만들어 갑니다.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["TARGET WEIGHT", "TBA"],
              ["POWERTRAIN", "TBA"],
              ["AERO PACKAGE", "IN DEVELOPMENT"],
              ["SEASON", "2027"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-3">
                <span className="block text-[9px] font-mono tracking-[0.14em] text-zinc-500">{label}</span>
                <span className="mt-2 block text-sm font-bold text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-t border-zinc-800 bg-white p-6 text-center md:border-l md:border-t-0">
          <img
            src={`${import.meta.env.BASE_URL}recruitment-qr.png.png`}
            alt="KUMA 신규부원 지원 QR 코드"
            className="h-44 w-44 rounded-sm object-contain"
          />
          <p className="mt-4 text-sm font-black text-zinc-950">신규부원 지원하기</p>
          <p className="mt-1 text-xs leading-5 text-zinc-600">QR 코드를 스캔해 지원서를 작성하세요.</p>
        </div>
      </div>
    </aside>
  );
}

/** 차량 선택은 홈과 공유하고, 모바일 상세 패널의 펼침 상태는 이 섹션에서 관리합니다. */
export function VehicleSpecsSection({
  selectedYear,
  onYearChange,
  selectedVehicle,
}: VehicleSpecsSectionProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  return (
    <section id="competition" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-8">
        <SectionHeader label="Vehicle Specs" title={selectedVehicle.modelName} className="!mt-0" />
        <p className="text-sm text-zinc-400 mt-3">{selectedVehicle.tagline}</p>
        
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-4">
          {VEHICLE_YEARS.map((year) => {
            const yearVehicle = VEHICLE_DATABASE[year];
            const isSelected = year === selectedYear;

            return (
              <div key={year} className="space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    if (year === selectedYear) {
                      setIsDetailOpen((open) => !open);
                      return;
                    }

                    onYearChange(year);
                    setIsDetailOpen(true);
                  }}
                  aria-expanded={isSelected && isDetailOpen}
                  className={`group relative block h-28 w-full overflow-hidden rounded-2xl border text-left transition-all ${isSelected
                    ? "border-racing-green/70 shadow-[0_0_0_1px_rgba(36,198,126,0.35)]"
                    : "border-zinc-800 hover:border-zinc-600"
                    }`}
                >
                  <img
                    src={yearVehicle.image}
                    alt={`${year} KUMA vehicle`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black tracking-[-0.08em] text-white/90">{year}</span>
                    <span className="mt-1 text-[9px] font-mono font-semibold tracking-[0.08em] text-zinc-100/80">
                      {yearVehicle.telemetry.maxPower} · {yearVehicle.telemetry.curbWeight} · {yearVehicle.telemetry.topSpeed}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-zinc-100/90">
                    <span>{yearVehicle.modelName}</span>
                    <span>{yearVehicle.carNumber}</span>
                  </div>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-out lg:hidden ${isSelected && isDetailOpen ? "mt-0 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <VehicleDetailPanel selectedYear={year} selectedVehicle={yearVehicle} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <VehicleDetailPanel selectedYear={selectedYear} selectedVehicle={selectedVehicle} />
        </div>
      </div>

    </section>
  );
}
