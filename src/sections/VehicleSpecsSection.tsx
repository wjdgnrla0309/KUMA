import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { VehicleDetailPanel } from "../components/VehicleDetailPanel";
import { VEHICLE_DATABASE, VEHICLE_YEARS, type VehicleData, type VehicleYear } from "../data/specs";

type VehicleSpecsSectionProps = {
  selectedYear: VehicleYear;
  onYearChange: (year: VehicleYear) => void;
  selectedVehicle: VehicleData;
};

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
