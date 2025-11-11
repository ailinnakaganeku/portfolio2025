import type { HomeContent } from "@/types/portfolio";

import { AboutSection } from "./sections/AboutSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { FooterSection } from "./sections/FooterSection";
import { LocationSection } from "./sections/LocationSection";
import { ResumeSection } from "./sections/ResumeSection";
import { TechnicalSkillsSection } from "./sections/TechnicalSkillsSection";

type PortfolioDetailsColumnProps = {
  content: HomeContent;
  ariaLabel: string;
};

export function PortfolioDetailsColumn({
  content,
  ariaLabel,
}: PortfolioDetailsColumnProps) {
  return (
    <section
      className="order-2 lg:order-none w-full lg:w-1/2 bg-[rgb(var(--background-rgb))] p-8 lg:p-16 lg:pt-20"
      aria-label={ariaLabel}
    >
      <div className="max-w-xl mx-auto space-y-16">
        <AboutSection about={content.about} />
        <ExperienceSection experience={content.experience} />
        <TechnicalSkillsSection technicalSkills={content.technicalSkills} />
        <EducationSection education={content.education} />
        <CertificationsSection certifications={content.certifications} />
        <ContactSection contact={content.contact} />
        <LocationSection location={content.location} />
        <ResumeSection
          resumeAriaLabel={content.resumeAriaLabel}
          resumeButtonLabel={content.resumeButton}
        />
        <FooterSection footer={content.footer} />
      </div>
    </section>
  );
}

