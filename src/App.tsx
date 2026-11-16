import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { SITE_BASE_URL } from "./data/site";

/** URL에 맞는 페이지를 선택합니다. 각 페이지의 상태와 효과는 페이지 내부에서 관리합니다. */
export default function App() {
  const path = window.location.pathname.replace(/\/$/, "");
  const newsId = path.startsWith(`${SITE_BASE_URL}news/`)
    ? decodeURIComponent(path.slice(`${SITE_BASE_URL}news/`.length))
    : null;

  if (newsId) return <NewsDetailPage id={newsId} />;
  return path === `${SITE_BASE_URL}gallery` ? <GalleryPage /> : <HomePage />;
}
