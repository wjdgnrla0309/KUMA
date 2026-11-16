import { Images } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { NewsPhoto } from "../components/NewsPhoto";
import { SORTED_NEWS, type NewsItem } from "../data/news";
import { PAGE_COPY } from "../data/pageCopy";
import { SITE_BASE_URL } from "../data/site";
import { headingClass } from "../utils/headingClass";

type CardProps = { item: NewsItem; large?: boolean };

// 모바일: 사진 위, 글 아래로 쌓아 글이 사진(얼굴)을 가리지 않게 합니다.
// md 이상: 사진이 카드를 가득 채우고 제목·설명이 사진 위에 겹칩니다. 누르면 /news/:id 페이지로 이동합니다.
function PhotoCard({ item, large }: CardProps) {
  return (
    <a
      href={`${SITE_BASE_URL}news/${item.id}`}
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-racing-card text-left md:block ${large ? "md:h-[28rem]" : "md:h-72"}`}
    >
      <div className={`relative overflow-hidden ${large ? "h-56" : "h-48"} md:absolute md:inset-0 md:h-full`}>
        <NewsPhoto file={item.cover ?? item.images[0]?.file} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-t from-black/90 via-black/30 to-transparent md:block" />
      {item.images.length > 1 && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-mono text-white">
          <Images className="h-3.5 w-3.5" /> {item.images.length}
        </span>
      )}
      <div className="relative p-5 md:absolute md:inset-x-0 md:bottom-0 md:p-6">
        <span className="text-sm font-mono tracking-[0.15em] text-racing-green">{item.date} · {item.category}</span>
        <h3 className={`mt-2 font-black tracking-[0.03em] text-white ${large ? "text-2xl md:text-3xl" : "text-lg"} ${headingClass(item.title)}`}>{item.title}</h3>
        <p className={`mt-2 break-keep text-sm leading-relaxed text-zinc-300 ${large ? "md:max-w-2xl" : "line-clamp-2"}`}>{item.description}</p>
      </div>
    </a>
  );
}

// 뉴스 카드의 모양을 담당하며, 게시 내용은 data/news.ts에서 관리합니다.
// 첫 항목은 크게, 나머지는 작은 카드로 표시하고 카드를 누르면 /news/:id 상세 페이지로 이동합니다.
export function NewsSection() {
  const [featured, ...rest] = SORTED_NEWS;

  return (
    <section id="news" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-10">
        <SectionHeader label={PAGE_COPY.news.label} title={PAGE_COPY.news.title} className="!mt-0" />
      </div>

      {featured && (
        <div className="mb-5">
          <PhotoCard item={featured} large />
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {rest.map((item) => (
          <PhotoCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
