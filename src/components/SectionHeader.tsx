type SectionHeaderProps = {
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

/** 섹션 제목의 배지, 정렬, 타이포그래피를 공통으로 관리합니다. */
export function SectionHeader({ label, title, align = "left", className = "" }: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`${alignment} ${className}`}>
      <span className={`inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.32em] text-racing-green uppercase ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-gradient-to-r from-racing-green to-racing-blue" aria-hidden="true" />
        {label}
      </span>
      <h2 className={`mt-4 text-3xl text-white whitespace-pre-line md:text-4xl lg:text-5xl ${/[가-힣]/.test(title) ? "heading-korean" : ""}`}>
        {title}
      </h2>
    </div>
  );
}
