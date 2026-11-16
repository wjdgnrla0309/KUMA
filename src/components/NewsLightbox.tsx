import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { NewsImage } from "../data/news";
import { NewsPhoto } from "./NewsPhoto";

type NewsLightboxProps = {
  images: NewsImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

/** 사진 크게 보기: 사진 설명과 함께 보여주고 좌우 화살표 키와 Esc를 지원합니다. */
export function NewsLightbox({ images, index, onChange, onClose }: NewsLightboxProps) {
  const count = images.length;
  const current = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [count, index, onChange, onClose]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="사진 크게 보기"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* z-20: 큰 사진 영역(relative)이 위에 겹쳐 클릭을 가로채지 않도록 사진보다 위에 둡니다. */}
      <button type="button" aria-label="닫기" onClick={onClose} className="absolute right-4 top-4 z-20 rounded-full border border-zinc-500 bg-black/70 p-2.5 text-zinc-100 hover:bg-black hover:text-white">
        <X className="h-5 w-5" />
      </button>
      <div className="relative flex max-h-[80vh] w-full max-w-6xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <NewsPhoto key={current.file} file={current.file} alt={current.caption ?? ""} className="max-h-[80vh] w-full object-contain" />
        {count > 1 && (
          <>
            <button type="button" aria-label="이전 사진" onClick={() => onChange((index - 1 + count) % count)} className="absolute left-2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button type="button" aria-label="다음 사진" onClick={() => onChange((index + 1) % count)} className="absolute right-2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80">
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
      <div className="mt-4 max-w-3xl text-center" onClick={(e) => e.stopPropagation()}>
        {current.title && <p className="text-base font-bold text-white">{current.title}</p>}
        {current.caption && <p className="mt-1 text-sm text-zinc-200">{current.caption}</p>}
        <p className="mt-1 text-xs font-mono text-zinc-500">{index + 1} / {count}</p>
      </div>
    </div>
  );
}
