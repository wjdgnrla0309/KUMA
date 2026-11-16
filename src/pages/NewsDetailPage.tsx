import { useEffect, useState } from "react";
import { NewsFigure } from "../components/NewsFigure";
import { NewsLightbox } from "../components/NewsLightbox";
import { NewsPhoto } from "../components/NewsPhoto";
import { SORTED_NEWS } from "../data/news";
import { SITE_BASE_URL } from "../data/site";
import { headingClass } from "../utils/headingClass";

// /news/:id 전용 화면: 소식 본문과 사진 전체(사진 설명 포함)를 보여줍니다.
export function NewsDetailPage({ id }: { id: string }) {
  const item = SORTED_NEWS.find((news) => news.id === id);
  const [open, setOpen] = useState<number | null>(null);
  const others = SORTED_NEWS.filter((news) => news.id !== id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = item ? `${item.title} | KUMA` : "KUMA";
  }, [item]);

  return (
    <main className="min-h-screen bg-racing-dark px-6 pb-20 pt-28 text-zinc-100">
      <div className="mx-auto max-w-6xl">
        <a href={`${SITE_BASE_URL}#news`} className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.12em] text-zinc-400 transition hover:text-racing-green">
          ← NEWS
        </a>

        {!item ? (
          <p className="mt-12 text-zinc-400">찾을 수 없는 소식입니다.</p>
        ) : (
          <>
            <header className="mt-8 border-b border-zinc-800 pb-8">
              <p className="text-[clamp(0.75rem,0.6rem+0.25vw,1.0625rem)] font-mono tracking-[0.2em] text-racing-green uppercase">{item.date} · {item.category}</p>
              <h1 className={`mt-3 text-[clamp(1.75rem,1.25rem+1.5vw,3.5rem)] leading-tight font-black tracking-[0.03em] text-white ${headingClass(item.title)}`}>{item.title}</h1>
              <p className="mt-6 max-w-[44em] whitespace-pre-line break-keep text-[clamp(1rem,0.75rem+0.5vw,1.375rem)] leading-relaxed text-zinc-300">{item.body ?? item.description}</p>
            </header>

            {item.images.length === 0 ? (
              <NewsPhoto alt={item.title} className="mt-10 aspect-video w-full rounded-xl border border-zinc-800" />
            ) : (
              <>
                {/* 일반 사진: 여러 열 격자 */}
                <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
                  {item.images.map((img, i) =>
                    img.wide ? null : <NewsFigure key={img.file} image={img} index={i} fallbackAlt={item.title} onOpen={setOpen} />,
                  )}
                </div>

                {/* wide 사진: 격자 아래에 가로 전체 폭으로 크게 (파노라마·단체 사진) */}
                {item.images.some((img) => img.wide) && (
                  <div className="mt-6 space-y-10">
                    {item.images.map((img, i) =>
                      img.wide ? <NewsFigure key={img.file} image={img} index={i} fallbackAlt={item.title} wide onOpen={setOpen} /> : null,
                    )}
                  </div>
                )}
              </>
            )}

            {others.length > 0 && (
              <section className="mt-16 border-t border-zinc-800 pt-10">
                <h2 className="text-xs font-mono tracking-[0.2em] text-zinc-500 uppercase">More news</h2>
                <ul className="mt-4 grid gap-3 md:grid-cols-3">
                  {others.map((news) => (
                    <li key={news.id}>
                      <a href={`${SITE_BASE_URL}news/${news.id}`} className="block rounded-xl border border-zinc-800 p-4 transition hover:border-racing-green">
                        <span className="text-xs font-mono text-racing-green">{news.date} · {news.category}</span>
                        <span className={`mt-2 block font-bold text-white ${headingClass(news.title)}`}>{news.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}
      </div>

      {item && open !== null && <NewsLightbox images={item.images} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </main>
  );
}
