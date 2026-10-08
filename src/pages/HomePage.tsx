import { useState } from "react";
import { AchievementModal } from "../components/AchievementModal";
import { DecryptModal } from "../components/DecryptModal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import type { Achievement } from "../data/achievements";
import { DEFAULT_VEHICLE_YEAR, VEHICLE_DATABASE, type VehicleYear } from "../data/specs";
import { AboutKumaSection } from "../sections/AboutKumaSection";
import { AchievementsSection } from "../sections/AchievementsSection";
import { ContactSection } from "../sections/ContactSection";
import { GallerySection } from "../sections/GallerySection";
import { HeroSection } from "../sections/HeroSection";
import { InstagramFeedSection } from "../sections/InstagramFeedSection";
import { NewsSection } from "../sections/NewsSection";
import { SponsorshipSection } from "../sections/SponsorshipSection";
import { RecruitmentCard, VehicleSpecsSection } from "../sections/VehicleSpecsSection";

/** 홈의 섹션 순서와 여러 섹션이 공유하는 선택·모달 상태만 관리합니다. */
export function HomePage() {
  const [selectedYear, setSelectedYear] = useState<VehicleYear>(DEFAULT_VEHICLE_YEAR);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isDecryptOpen, setIsDecryptOpen] = useState(false);

  function showAchievementVehicle(year: VehicleYear) {
    setSelectedYear(year);
    setSelectedAchievement(null);
  }

  return (
    <div id="top" className="min-h-screen bg-racing-dark text-zinc-100 selection:bg-racing-blue selection:text-white font-sans">
      <SiteHeader onOpenDecrypt={() => setIsDecryptOpen(true)} />

      {/* 화면에서 보이는 순서대로 섹션을 배치합니다. */}
      <main>
        <div className="mx-auto max-w-7xl px-6 pt-24">
          <RecruitmentCard />
        </div>
        <HeroSection onOpenDecrypt={() => setIsDecryptOpen(true)} />
        <AboutKumaSection />
        <VehicleSpecsSection
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          selectedVehicle={VEHICLE_DATABASE[selectedYear]}
        />
        <AchievementsSection onSelectAchievement={setSelectedAchievement} />
        <NewsSection />
        <GallerySection />
        <SponsorshipSection />
        <ContactSection />
        <InstagramFeedSection />
      </main>

      <SiteFooter />

      {/* 상세 화면은 선택된 항목이 있을 때만 생성합니다. */}
      {isDecryptOpen && <DecryptModal onClose={() => setIsDecryptOpen(false)} />}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
          onSelectVehicle={showAchievementVehicle}
        />
      )}
    </div>
  );
}
