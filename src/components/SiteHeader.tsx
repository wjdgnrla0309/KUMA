import { useState } from "react";
import { Lock, Menu, X } from "lucide-react";
import kumaLogo from "../../KUMA LOGO.webp";
import { NAVIGATION_LINKS } from "../data/site";

type SiteHeaderProps = { onOpenDecrypt: () => void };

export function SiteHeader({ onOpenDecrypt }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        <a href="#top" className="flex shrink-0 items-center gap-4" aria-label="Go to KUMA Racing home">
          <img
            src={kumaLogo}
            alt="KUMA Racing"
            className="h-10 w-10 object-contain"
            onError={(event) => { event.currentTarget.src = "/kuma-logo.svg"; }}
          />
          <span className="font-display text-2xl font-normal tracking-[0.08em] text-white leading-none">KUMA</span>
        </a>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 text-base xl:text-lg font-semibold tracking-[0.08em] text-zinc-400">
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>
          ))}
        </nav>

        <button type="button" onClick={onOpenDecrypt} className="ml-auto hidden items-center gap-2 rounded-full border border-racing-green/50 bg-zinc-900 px-4 py-1.5 text-xs font-mono font-semibold text-racing-green transition-all hover:bg-racing-green hover:text-black lg:flex">
          <Lock className="h-3.5 w-3.5" /> DECRYPT SPEC
        </button>
        <div className="ml-auto lg:hidden">
          <button type="button" aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((open) => !open)} className="p-2 text-zinc-300 hover:text-white">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="lg:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4">
          <div className="flex flex-col gap-4 text-lg font-medium text-zinc-300">
            {NAVIGATION_LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setIsMobileMenuOpen(false)} className="border-b border-zinc-800/70 pb-3 hover:text-racing-green transition-colors">{label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
