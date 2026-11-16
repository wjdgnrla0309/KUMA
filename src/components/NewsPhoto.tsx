import { useState } from "react";
import { ImageOff } from "lucide-react";

const competitionPhoto = (file: string) =>
  `${import.meta.env.BASE_URL}cars/2026/competition/${encodeURIComponent(file)}`;

type NewsPhotoProps = { file?: string; alt: string; className?: string };

/** 뉴스 사진. 파일명이 없거나 불러오지 못하면 "PHOTO COMING SOON" 자리표시자를 보여줍니다. */
export function NewsPhoto({ file, alt, className = "" }: NewsPhotoProps) {
  const [failed, setFailed] = useState(false);
  if (!file || failed) {
    return (
      <div className={`flex flex-col items-center justify-center gap-2 bg-zinc-900 text-zinc-600 ${className}`}>
        <ImageOff className="h-6 w-6" />
        <span className="text-xs font-mono tracking-widest">PHOTO COMING SOON</span>
      </div>
    );
  }
  return <img src={competitionPhoto(file)} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
}
