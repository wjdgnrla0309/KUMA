import { SectionHeader } from "../components/SectionHeader";
import { NEWS_ITEMS } from "../data/news";

const NEWS_PHOTOS = ["001 (3).jpg", "001 (14).jpg", "001 (18).jpg"];
const competitionPhoto = (file: string) =>
  `${import.meta.env.BASE_URL}cars/2026/competition/${encodeURIComponent(file)}`;

// 뉴스 카드의 모양을 담당하며, 게시 내용은 data/news.ts에서 관리합니다.
export function NewsSection() {
  return (
    <section
      id="news"
      className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800"
    >
      <div className="mb-10">
        <SectionHeader
          label="Latest News"
          title="KUMA NEWS"
          className="!mt-0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {NEWS_ITEMS.map(({ date, title, description }, index) => (
          <article
            key={`${date}-${title}`}
            className="group overflow-hidden rounded-xl border border-zinc-800 bg-racing-card"
          >
            <img
              src={competitionPhoto(NEWS_PHOTOS[index])}
              alt={`${title} vehicle photo`}
              loading="lazy"
              className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <span className="text-xs font-mono text-racing-green">{date}</span>
              <h3 className="text-lg font-black tracking-[-0.03em] text-white mt-4">
                {title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
