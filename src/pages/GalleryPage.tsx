import { useState } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { GALLERY_YEARS, PHOTO_ARCHIVE } from "../data/gallery";
import { SITE_BASE_URL } from "../data/site";
import { PAGE_COPY } from "../data/pageCopy";

// /gallery 전용 화면: 선택한 연도의 사진 또는 등록 대기 안내를 표시합니다.
export function GalleryPage() {
  const [activeYear, setActiveYear] = useState(GALLERY_YEARS[0] ?? "");
  const photos = PHOTO_ARCHIVE[activeYear] ?? [];

  return (
    <main className="min-h-screen bg-racing-dark px-6 pb-20 pt-28 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <a
          href={SITE_BASE_URL}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.12em] text-zinc-400 transition hover:text-racing-green"
        >
          {PAGE_COPY.galleryPage.backLabel}
        </a>
        <div className="mt-8 border-b border-zinc-800 pb-9">
          <SectionHeader
            label={PAGE_COPY.galleryPage.label}
            title={PAGE_COPY.galleryPage.title}
            className="!mt-0"
          />
          <p className="mt-4 text-sm text-zinc-400">
            {PAGE_COPY.galleryPage.description}
          </p>
        </div>

        {/* 연도 필터는 기본 버튼의 키보드 조작과 선택 상태를 제공합니다. */}
        <div
          className="mt-8 flex flex-wrap gap-3"
          role="group"
          aria-label={PAGE_COPY.galleryPage.yearSelectLabel}
        >
          {GALLERY_YEARS.map((year) => (
            <button
              key={year}
              type="button"
              aria-pressed={activeYear === year}
              onClick={() => setActiveYear(year)}
              className={`rounded-full border px-5 py-2 text-sm font-bold transition ${activeYear === year
                ? "border-racing-green bg-racing-green text-black"
                : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-500"
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {photos.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
              >
                <img
                  src={photo.src}
                  alt={`${activeYear} ${photo.title}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="p-5">
                  <span className="text-[10px] font-mono font-bold tracking-[0.18em] text-racing-green">
                    {photo.category}
                  </span>
                  <h2 className="mt-2 text-lg font-black text-white">
                    {photo.title}
                  </h2>
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/50 px-6 py-20 text-center">
            <p className="text-lg font-bold text-white">
              {activeYear} {PAGE_COPY.galleryPage.emptyTitle}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              {PAGE_COPY.galleryPage.emptyDescription}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
