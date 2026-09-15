import type { VehicleData, VehicleYear } from "../data/specs";

type VehicleDetailPanelProps = {
  selectedYear: VehicleYear;
  selectedVehicle: VehicleData;
};

/** 모바일 연도별 펼침 패널과 데스크톱 상세 영역이 공유하는 차량 제원표입니다. */
export function VehicleDetailPanel({
  selectedYear,
  selectedVehicle,
}: VehicleDetailPanelProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-racing-card shadow-xl">
      <div className="grid md:grid-cols-[1.2fr_minmax(0,1fr)]">
        <div className="relative min-h-[360px] bg-zinc-900">
          <img
            src={selectedVehicle.image}
            alt={`${selectedVehicle.modelName} vehicle preview`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-racing-green">{selectedVehicle.carNumber}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">{selectedVehicle.modelName}</h3>
              </div>
              <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-100">
                {selectedYear}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-racing-card p-6 md:p-7">
          <div className="mb-5 flex items-center justify-between gap-2 border-b border-zinc-800 pb-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] uppercase text-racing-green">Spec Sheet</span>
            <span className="text-sm font-semibold text-zinc-300">{selectedVehicle.telemetry.maxPower}</span>
          </div>

          <div className="space-y-3">
            {selectedVehicle.specs.map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                <div className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-zinc-500">{item.label}</div>
                <div className="mt-2 text-base font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
