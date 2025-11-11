import type { HomeContent } from "@/types/portfolio";

import { Section } from "../Section";

type TechnicalSkillsSectionProps = {
  technicalSkills: HomeContent["technicalSkills"];
};

export function TechnicalSkillsSection({
  technicalSkills,
}: TechnicalSkillsSectionProps) {
  return (
    <Section id="projects" title={technicalSkills.title}>
      <div className="space-y-4">
        {technicalSkills.categories.map((category) => (
          <article key={category.id} className="hover-fade">
            <h3 className="font-medium">{category.title}</h3>
            <p className="text-[rgb(var(--foreground-rgb))] text-sm leading-relaxed">
              {category.skills}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

