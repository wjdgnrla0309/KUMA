import { INSTAGRAM_URL } from "../data/instagram";
import { useInstagramFeed } from "../hooks/useInstagramFeed";
import { PAGE_COPY } from "../data/pageCopy";

/** 게시물을 두 번 배치하여 CSS의 가로 스크롤 애니메이션이 자연스럽게 이어지도록 합니다. */
export function InstagramFeedSection() {
  const posts = useInstagramFeed();

  return (
    <section className="border-t border-zinc-800 bg-zinc-950 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-racing-green tracking-widest uppercase">{PAGE_COPY.instagram.followLabel}</span>
          <h2 className="text-3xl text-white mt-1">{PAGE_COPY.instagram.title}</h2>
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-racing-green hover:text-racing-blue transition-colors"
        >
          <span aria-hidden="true">◎</span> {PAGE_COPY.instagram.account}
        </a>
      </div>
      <div className="instagram-marquee" aria-label={PAGE_COPY.instagram.feedLabel}>
        <div className="instagram-track">
          {[...posts, ...posts].map((post, index) => (
            <a
              key={`${post.id}-${index}`}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="instagram-tile group"
              aria-label={`${post.label} ${PAGE_COPY.instagram.postAriaLabel}`}
            >
              <img src={post.image} alt={post.label} loading="lazy" />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {post.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
