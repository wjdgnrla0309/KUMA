import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { VehicleDetailPanel } from "../components/VehicleDetailPanel";
import { HOMEPAGE_CONTENT } from "../data/homepage";
import { VEHICLE_DATABASE, VEHICLE_YEARS, type VehicleData, type VehicleYear } from "../data/specs";

type VehicleSpecsSectionProps = {
  selectedYear: VehicleYear;
  onYearChange: (year: VehicleYear) => void;
  selectedVehicle: VehicleData;
};

export function RecruitmentCard() {
  return (
    <aside className="pointer-events-auto w-28 rounded-xl border border-racing-green/30 bg-zinc-950/80 p-2 text-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur">
      <img
        src={`${import.meta.env.BASE_URL}${HOMEPAGE_CONTENT.recruitment.qrImage}`}
        alt="KUMA 신입부원모집 QR 코드"
        className="h-24 w-24 rounded-md bg-white p-1 object-contain"
      />
      <p className="mt-2 font-sans text-xs font-semibold tracking-[0.08em] text-racing-green">신입부원모집</p>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
                  {isSelected && <span className="absolute inset-y-0 left-0 w-1 bg-racing-green" aria-hidden="true" />}
                  <div className="absolute left-4 top-3 flex flex-col items-start">
                    <span className="font-display text-3xl tracking-[0.08em] text-white">{year}</span>
                    <span className="mt-0.5 text-[9px] font-mono font-semibold tracking-[0.08em] text-zinc-200">
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
