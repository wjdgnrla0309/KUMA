import type { NewsImage } from "../data/news";
import { NewsPhoto } from "./NewsPhoto";

type NewsFigureProps = {
  image: NewsImage;
  index: number;
  fallbackAlt: string;
  wide?: boolean;
  onOpen: (index: number) => void;
};

/** 소식 페이지의 사진 한 장: 누르면 크게 열리고, 아래에 제목과 설명이 붙습니다. wide 이면 더 크게 표시합니다. */
export function NewsFigure({ image, index, fallbackAlt, wide, onOpen }: NewsFigureProps) {
  return (
    <figure className={wide ? "" : "mb-4 break-inside-avoid"}>
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`${index + 1}번 사진 크게 보기`}
        className="group block w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
      >
        <NewsPhoto
          file={image.file}
          alt={image.caption ?? fallbackAlt}
          className={`w-full object-cover transition ${wide ? "duration-700 group-hover:scale-[1.02]" : "duration-500 group-hover:scale-105"}`}
        />
      </button>
      {(image.title || image.caption) && (
        <figcaption className={`break-keep leading-relaxed text-zinc-400 ${wide ? "mt-3 text-base" : "mt-2 text-sm"}`}>
          {image.title && <strong className={`block font-bold text-zinc-100 ${wide ? "text-lg" : ""}`}>{image.title}</strong>}
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
