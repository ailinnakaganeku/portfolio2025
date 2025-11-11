import type { HomeContent } from "@/types/portfolio";

import { Section } from "../Section";

type ExperienceSectionProps = {
  experience: HomeContent["experience"];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <Section id="experience" title={experience.title}>
      <div className="space-y-8">
        {experience.entries.map((entry) => (
          <article key={entry.id} className="hover-fade">
            <h3 className="font-medium">{entry.company}</h3>
            <p className="text-[rgb(var(--accent-color))] mb-2">
              <strong>{entry.roleTitle}</strong>
              {" | "}
              <span>{entry.rolePeriod}</span>
            </p>
            <p className="text-[rgb(var(--foreground-rgb))] leading-relaxed">
              {entry.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

