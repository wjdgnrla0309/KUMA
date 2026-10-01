import { PAGE_COPY } from "../data/pageCopy";

/** 사이트 하단의 저작권 문구입니다. */
export function SiteFooter() {
  return (
    <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
      {PAGE_COPY.footer}
    </footer>
  );
}
