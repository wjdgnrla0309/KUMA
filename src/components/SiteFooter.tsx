import { AtSign, FileText, Mail, MapPin } from "lucide-react";
import kumaLogo from "../../KUMA LOGO.webp";
import { CONTACT_DETAILS } from "../data/contact";
import { PAGE_COPY } from "../data/pageCopy";
import { NAVIGATION_LINKS } from "../data/site";
import { RecruitmentCard } from "../sections/VehicleSpecsSection";

const instagramHandle = PAGE_COPY.instagram.account.replace(/^@/, "");

/** 사이트 하단: 팀 정보, 바로가기, 연락처, 신입부원 모집 QR과 저작권 문구입니다. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1.4fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <img src={kumaLogo} alt="" className="h-10 w-10 object-contain" />
            <span className="font-display text-2xl tracking-[0.08em] text-white">KUMA Racing</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
            국립공주대학교 자작자동차 동아리 · KSAE 대학생 자작자동차대회 Formula 부문 참가팀
          </p>
          <a
            href={`${import.meta.env.BASE_URL}documents/KUMA_Sponsorship_Proposal.pdf`}
            download="KUMA_Sponsorship_Proposal.pdf"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-zinc-700 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-zinc-200 transition hover:border-racing-green hover:text-racing-green"
          >
            <FileText className="h-4 w-4" /> SPONSORSHIP PROPOSAL
          </a>
        </div>

        <nav aria-label="하단 메뉴">
          <p className="text-[11px] font-bold tracking-[0.28em] text-zinc-500">MENU</p>
          <ul className="mt-4 space-y-2.5 text-sm tracking-[0.08em] text-zinc-300">
            {NAVIGATION_LINKS.map(({ label, href }) => (
              <li key={href}><a href={href} className="transition hover:text-racing-green">{label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-bold tracking-[0.28em] text-zinc-500">CONTACT</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
            <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-racing-green" />{CONTACT_DETAILS.address}</li>
            <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-racing-green" />
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="font-['A2Z',sans-serif] normal-case tracking-normal hover:text-racing-green">{CONTACT_DETAILS.email}</a>
            </li>
            <li className="flex gap-3"><AtSign className="mt-1 h-4 w-4 shrink-0 text-racing-green" />
              <a href={`https://www.instagram.com/${instagramHandle}/`} target="_blank" rel="noreferrer" className="hover:text-racing-green">{PAGE_COPY.instagram.account}</a>
            </li>
          </ul>
        </div>

        <div className="self-start"><RecruitmentCard /></div>
      </div>

      <div className="border-t border-zinc-900">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs tracking-[0.12em] text-zinc-600 font-mono">{PAGE_COPY.footer}</p>
      </div>
    </footer>
  );
}
