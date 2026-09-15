import { GalleryPage } from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";

/** URL에 맞는 페이지를 선택합니다. 각 페이지의 상태와 효과는 페이지 내부에서 관리합니다. */
export default function App() {
  return window.location.pathname === "/gallery" ? <GalleryPage /> : <HomePage />;
}
