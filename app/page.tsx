"use client";

import { PortfolioDetailsColumn } from "@/components/home/PortfolioDetailsColumn";
import { ProfileSection } from "@/components/home/ProfileSection";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { portfolioContent } from "@/lib/portfolio-content";

export default function Home() {
  useScrollAnimation();

  const { home, ariaLabels } = portfolioContent;

  return (
    <main
      id="main-content"
      className="h-screen lg:min-h-screen flex flex-col lg:flex-row"
      role="main"
    >
      <PortfolioDetailsColumn
        content={home}
        ariaLabel={ariaLabels.portfolioDetails}
      />
      <ProfileSection profile={home.profileSection} />
    </main>
  );
}
