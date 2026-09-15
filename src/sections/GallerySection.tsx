import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { GALLERY_PREVIEWS } from "../data/gallery";

// 홈페이지 대표 사진과 전체 사진 페이지로 이동하는 링크를 표시합니다.
export function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800"
    >
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeader
            label="Race & Workshop"
            title="KUMA GALLERY"
            className="!mt-0"
          />
          <p className="text-sm text-zinc-400 mt-4">
            대회장, 작업실, 차량 제작 과정을 기록하는 공간입니다.
          </p>
        </div>
        <a
          href="/gallery"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-racing-green/60 px-4 py-2 text-xs font-mono font-bold tracking-[0.12em] text-racing-green transition hover:bg-racing-green hover:text-black"
        >
          VIEW ALL PHOTOS <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GALLERY_PREVIEWS.map((photo) => (
          <figure
            key={photo.src}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="p-5">
              <span className="text-xs font-mono text-racing-green">
                {photo.category}
              </span>
              <h3 className="text-lg font-black tracking-[-0.03em] text-white mt-1">
                {photo.title}
              </h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
